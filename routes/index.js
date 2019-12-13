var express = require('express');
var router = express.Router();
var cache = require("..//polling").cache;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', cache: cache, graphs: [{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart1",
    type:"line",
    yAxisLabel: "Output usale by fuel type",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart2",
    type:"donnut",
    yAxisLabel: "Output usale by fuel type",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "%",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart3",
    type:"line",
    yAxisLabel: "Market Imbalance",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MWh",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart4",
    type:"line",
    yAxisLabel: "Rolling System Demand",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart5",
    type:"line",
    yAxisLabel: "System Prices",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "$/MWh",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart6",
    type:"line",
    yAxisLabel: "System Demand, Forecast",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart7",
    type:"line",
    yAxisLabel: "Frequency of the line",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "Hz",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart8",
    type:"line",
    yAxisLabel: "Last Frequency gauger. Actual Value: 54,23",
    xAxisLabel: "",
    yAxisUnit: "",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart9",
    type:"line",
    yAxisLabel: "System Demand, Initial Transmision",
    xAxisLabel: "",
    yAxisUnit: "MW",
    xAxisUnit: "",
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart10",
    type:"line",
    yAxisLabel: "Interconnections Flow",
    xAxisLabel: "",
    yAxisUnit: "MW",
    xAxisUnit: "",
  }] });
});

module.exports = router;
