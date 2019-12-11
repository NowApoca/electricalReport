var awsRDS = require("./awsDatabase")
var cache = {}

async function polling(){
    setTimeout(
        async function(){
            const arr = []
            arr.push(await awsRDS.getLastFuelPoints());
            arr.push(await awsRDS.getLastFreq());
            arr.push(await awsRDS.getLastImbalance());
            // arr.push(lastNationalImbalance = await awsRDS.getLastNationalImbalance());
            arr.push(await awsRDS.getLastInterconnects());
            arr.push(await awsRDS.getLastInitialTransmision());
            // const lastSystemWarn = await awsRDS.getLastSystemWarn();
            arr.push(await awsRDS.getLastForecast());
            arr.push(await awsRDS.getLastRollingSystem());
            arr.push(await awsRDS.getLastSystemPrices());
            for(const query of arr){
                if(cache[query.dataQuery] == undefined){
                    cache[query.dataQuery] = {
                        lastUpdate: 0,
                    }
                }
                if(query.result.length > 0){
                    if(query.result[query.result.length -1].ts > cache[query.dataQuery].lastUpdate){
                        cache[query.dataQuery] = query.result;
                        cache[query.dataQuery].lastUpdate = query.result[query.result.length -1].ts;
                    }
                }
            }
            polling()
        }, 3000);
}

function getCache(){
    return cache;    
}

module.exports = {
    polling: polling,
    cache: cache
}