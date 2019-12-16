var express = require('express');
var router = express.Router();
var cache = require("..//polling").cache;

function lastUpdateFormat(ts){
  const intTs = parseInt(ts)
  if(intTs > 0){
    const actualDate = new Date(intTs);
    return actualDate.toISOString().slice(0,10) + " " + actualDate.toISOString().slice(11,19)
  }else{
    return "-"
  }
}

/* GET home page. Configuration of the graphs and position is setted here. Position 0 is the first graph. */
router.get('/', function(req, res) {
  cache.netStatus.lastUpdate = lastUpdateFormat(cache.netStatus.lastUpdate)
  res.render('index', { title: 'Express', netStatus: cache.netStatus, cache: cache, graphs: [{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart1",
    type:"line",
    yAxisLabel: "Output usale by fuel type",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFuel.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart2",
    type:"donnut",
    yAxisLabel: "Output usale by fuel type",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "%",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFuel.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart3",
    type:"line",
    yAxisLabel: "Interconnections Flow",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastInterconnections.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart4",
    type:"line",
    yAxisLabel: "Interconnections Flow",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastInterconnections.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart5",
    type:"line",
    yAxisLabel: "System Prices",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "£/MWh",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastSystemPrices.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart6",
    type:"line",
    yAxisLabel: "System Demand",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastForecast.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart7",
    type:"line",
    yAxisLabel: "Frequency of the line",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "Hz",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFreq.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart8",
    type:"line",
    yAxisLabel: "Last Frequency gauger. Actual Value: "+ cache.netStatus.lastFreq,
    xAxisLabel: "Settlement Period",
    yAxisUnit: "Hz",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFreq.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart9",
    type:"line",
    yAxisLabel: "Rolling System Demand",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastRollingSystem.lastUpdate),
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart10",
    type:"line",
    yAxisLabel: "Market Imbalance",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MWh",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastImbalance.lastUpdate),
  }] });
});

module.exports = router;
