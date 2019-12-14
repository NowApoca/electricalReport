'use strict'
var awsRDS = require("./awsDatabase")
var cache = {
    netStatus: {
        lastUpdate: 0,
        warningsAmount: 0,
        lastWarningMsg: "",
        totalConsumption: 0,
        lastFreq: 0,
      }
}

async function polling(){
    setTimeout(
        async function(){
            const arr = []
            arr.push(await awsRDS.getLastFreq());
            arr.push(await awsRDS.getLastFuelPoints());
            arr.push(await awsRDS.getLastImbalance());
            // arr.push(lastNationalImbalance = await awsRDS.getLastNationalImbalance());
            arr.push(await awsRDS.getLastInterconnects());
            arr.push(await awsRDS.getLastInitialTransmision());
            // const lastSystemWarn = await awsRDS.getLastSystemWarn();
            arr.push(await awsRDS.getLastForecast());
            arr.push(await awsRDS.getLastRollingSystem());
            arr.push(await awsRDS.getLastSystemPrices());
            cache.lastUpdate = 0;
            for(const query of arr){
                if(cache[query.dataQuery] == undefined){
                    cache[query.dataQuery] = {
                        lastUpdate: 0,
                        result: []
                    }
                }
                if(query.result.length > 0){
                    if(query.result[query.result.length -1].ts > cache[query.dataQuery].lastUpdate){
                        cache[query.dataQuery].result = query.result;
                        cache[query.dataQuery].lastUpdate = query.result[query.result.length -1].ts;
                        cache.netStatus.lastUpdate = cache[query.dataQuery].lastUpdate;
                    }
                }
                if(query.dataQuery == "lastFreq"){
                    if(cache[query.dataQuery].result == []){
                        cache.netStatus.lastFreq = "Not Measured";
                    }else{
                        cache.netStatus.lastFreq = cache[query.dataQuery].result[query.result.length -1].val;
                    }
                }
                if(query.dataQuery == "lastForecast"){
                    if(cache[query.dataQuery] == []){
                        cache.netStatus.totalConsumption = "Not Measured";
                    }else{
                        cache.netStatus.totalConsumption = cache[query.dataQuery].result[query.result.length -1].Forecast;
                    }
                }
                if(query.dataQuery == "lastFreq"){
                    
                }
                if(query.dataQuery == "lastFreq"){
                    
                }
            }
            console.log("Polled")
            polling()
        }, 100);
}

function getCache(){
    return cache;    
}

module.exports = {
    polling: polling,
    cache: cache
}