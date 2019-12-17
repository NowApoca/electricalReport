'use strict'
var awsRDS = require("./awsDatabase")
const constants = require("./constants")

var cache = {
    netStatus: {
        lastUpdate: 0,
        warningsAmount: 0,
        lastWarningMsg: "No problems with the net registered",
        totalConsumption: 0,
        lastFreq: 0,
      }
}

async function polling(){
    await pullData()
    setTimeout(
        async function(){
            await pullData()
            polling()
        }, constants.pollingInterval);
}

async function pullData(){
    const arr = []
    // Push the results to an array for later processing it.
    // arr.push(lastNationalImbalance = await awsRDS.getLastNationalImbalance());
    // const lastSystemWarn = await awsRDS.getLastSystemWarn();
    arr.push(await awsRDS.getLastFreq());
    arr.push(await awsRDS.getLastFuelPoints());
    arr.push(await awsRDS.getLastImbalance());
    arr.push(await awsRDS.getLastInterconnects());
    arr.push(await awsRDS.getLastInitialTransmision());
    arr.push(await awsRDS.getLastForecast());
    arr.push(await awsRDS.getLastRollingSystem());
    arr.push(await awsRDS.getLastSystemPrices());
    cache.lastUpdate = (new Date()).getTime();
    cache.netStatus.lastUpdate = (new Date()).getTime();
    for(const query of arr){
        if(cache[query.dataQuery] == undefined){
            cache[query.dataQuery] = {
                lastUpdate: 0,
                result: []
            }
        }
        // If there is a result and the data is pulled after the previous data, replace it.
        if(query.result.length > 0){
            if(query.result[query.result.length -1].ts > cache[query.dataQuery].lastUpdate){
                cache[query.dataQuery].result = query.result;
                cache[query.dataQuery].lastUpdate = query.result[query.result.length -1].ts;
            }
        }
        // Process data showed in the status var i.e. Frequency, warnings, etc.
        if(query.dataQuery == "lastFreq"){
            if(cache[query.dataQuery].result == []){
                cache.netStatus.lastFreq = "Not Measured";
            }else{
                cache.netStatus.lastFreq = cache[query.dataQuery].result[query.result.length -1].Frequency;
            }
        }
        if(query.dataQuery == "lastForecast"){
            if(cache[query.dataQuery].result == []){
                cache.netStatus.totalConsumption = "Not Measured";
            }else{
                cache.netStatus.totalConsumption = cache[query.dataQuery].result[query.result.length -1].Forecast;
            }
        }
        if(query.dataQuery == "lastWarnings"){
            if(cache[query.dataQuery].result == [] && (parseInt(cache.lastWarningMsg.lastUpdate) < (new Date().getTime()) - 86400000 )){
                cache.netStatus.warningsAmount = 0;
                cache.netStatus.lastWarningMsg = "No problems with the net registered";
            }else{
                cache.netStatus.warningsAmount = cache[query.dataQuery].result.length;
                cache.netStatus.lastWarningMsg = cache[query.dataQuery].result[cache[query.dataQuery].result.length -1].msg;
                cache.lastWarningMsg.lastUpdate = cache[query.dataQuery].result[cache[query.dataQuery].result.length -1].ts;
            }
        }
    }
}

module.exports = {
    polling: polling,
    cache: cache
}