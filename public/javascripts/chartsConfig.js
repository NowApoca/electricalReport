const constants = {
    maxSamplesInGraph: 48
}
console.log(cache)
const graphConfig = {
    fuelType: {
        BIOMASS: {
            fill: {display: true},
            borderColor: 'rgba(138, 56, 19, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(138, 56, 19, 0.9)',
        },
       CCGT: {
        fill: {display: false},
        borderColor: 'rgba(41, 50, 175, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(41, 50, 175, 0.9)',
    },
       COAL: {
        fill: {display: false},
        borderColor: 'rgba(20, 9, 4, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(20, 9, 4, 0.9)',
    },
       INTEW: {
        fill: {display: false},
        borderColor: 'rgba(206, 34, 34, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(206, 34, 34, 0.9)',
    },
       INTIRL: {
        fill: {display: false},
        borderColor: 'rgba(34, 206, 34, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(34, 206, 34, 0.9)',
    },
       INTNED: {
        fill: {display: false},
        borderColor: 'rgba(253, 117, 6, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(253, 117, 6, 0.9)',
    },
       INTNEM: {
        fill: {display: false},
        borderColor: 'rgba(204, 17, 211, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(204, 17, 211, 0.9)',
    },
       NPSHYD: {
        fill: {display: false},
        borderColor: 'rgba(29, 194, 158, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(29, 194, 158, 0.9)',
    },
       NUCLEAR: {
        fill: {display: false},
        borderColor: 'rgba(56, 204, 75, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(56, 204, 75, 0.9)',
    },
       OCGT: {
        fill: {display: false},
        borderColor: 'rgba(163, 82, 82, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(163, 82, 82, 0.9)',
    },
       OIL: {
        fill: {display: false},
        borderColor: 'rgba(26, 189, 75, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(26, 189, 75, 0.9)',
    },
       OTHER: {
        fill: {display: false},
        borderColor: 'rgba(189, 165, 26, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(189, 165, 26, 0.9)',
    },
       PS: {
        fill: {display: false},
        borderColor: 'rgba(9, 78, 143, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(9, 78, 143, 0.9)',
    },
       WIND: {
        fill: {display: false},
        borderColor: 'rgba(100, 99, 4, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(100, 99, 4, 0.9)',
    },
       INTFR: {
        fill: {display: false},
        borderColor: 'rgba(124, 109, 109, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(124, 109, 109, 0.9)',
    },
    },
    signalFreq: {
        val: {
            fill: "1",
            borderColor: 'rgba(161, 116, 252, 1)',
            backgroundColor: 'rgba(161, 116, 252, 0.9)',
        }
    },
    imbalance: {
        B1: {
            fill: {display: false},
            borderColor: 'rgba(138, 56, 19, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(138, 56, 19, 0.9)',
        },
        B2: {
        fill: {display: false},
        borderColor: 'rgba(41, 50, 175, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(41, 50, 175, 0.9)',
    },
        B3: {
        fill: {display: false},
        borderColor: 'rgba(20, 9, 4, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(20, 9, 4, 0.9)',
    },
    B4: {
        fill: {display: false},
        borderColor: 'rgba(206, 34, 34, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(206, 34, 34, 0.9)',
    },
    B5: {
        fill: {display: false},
        borderColor: 'rgba(34, 206, 34, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(34, 206, 34, 0.9)',
    },
    B6: {
        fill: {display: false},
        borderColor: 'rgba(253, 117, 6, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(253, 117, 6, 0.9)',
    },
    B7: {
        fill: {display: false},
        borderColor: 'rgba(204, 17, 211, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(204, 17, 211, 0.9)',
    },
    B8: {
        fill: {display: false},
        borderColor: 'rgba(29, 194, 158, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(29, 194, 158, 0.9)',
    },
    B9: {
        fill: {display: false},
        borderColor: 'rgba(56, 204, 75, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(56, 204, 75, 0.9)',
    },
    B10: {
        fill: {display: false},
        borderColor: 'rgba(163, 82, 82, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(163, 82, 82, 0.9)',
    },
    B11: {
        fill: {display: false},
        borderColor: 'rgba(26, 189, 75, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(26, 189, 75, 0.9)',
    },
    B12: {
        fill: {display: false},
        borderColor: 'rgba(189, 165, 26, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(189, 165, 26, 0.9)',
    },
    B13: {
        fill: {display: false},
        borderColor: 'rgba(9, 78, 143, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(9, 78, 143, 0.9)',
    },
    B14: {
        fill: {display: false},
        borderColor: 'rgba(100, 99, 4, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(100, 99, 4, 0.9)',
    },
    B15: {
        fill: {display: false},
        borderColor: 'rgba(121, 41, 41, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(121, 41, 41, 0.9)',
    },
    B16: {
        fill: {display: false},
        borderColor: 'rgba(40, 72, 179, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(40, 72, 179, 0.9)',
    },
    B17: {
        fill: {display: false},
        borderColor: 'rgba(151, 13, 54, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(151, 13, 54, 0.9)',
    },
    N: {
        fill: {display: false},
        borderColor: 'rgba(226, 223, 50, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(226, 223, 50, 0.9)',
    },
    },
    rollingSystem: {
        fill: {display: false},
        borderColor: 'rgba(161, 116, 252, 1)',
        backgroundColor: 'rgba(161, 116, 252, 0.9)',
    },
    systemPrices:{
        systemSellPrice: {
            fill: {display: false},
            borderColor: 'rgba(251, 116, 116, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(251, 116, 116, 0.9)',
        },
        systemBuyPrice:{
            fill: {display: false},
            borderColor: 'rgba(111, 252, 116, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(111, 252, 116, 0.9)',
        }
    },
    forecast: {Forecast:{
        fill: {display: false},
        borderColor: 'rgba(111, 252, 111, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(111, 252, 111, 0.9)',
    }},
    initialTransmision: {InitialTransmision:{
        fill: {display: false},
        borderColor: 'rgba(252, 116, 111, 1)',
        pointRadius: 0.1,
        backgroundColor: 'rgba(252, 116, 111, 0.9)',
    }},
    interconnections: {
        INTEW: {
            fill: {display: false},
            borderColor: 'rgba(241, 20, 20, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(241, 20, 20, 0.9)',
        },
        INTFR:{
            fill: {display: false},
            pointRadius: 0.1,
            borderColor: 'rgba(31, 47, 192, 1)',
            backgroundColor: 'rgba(31, 47, 192, 0.9)',
        },
        INTIRL:{
            fill: {display: false},
            borderColor: 'rgba(55, 192, 31, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(55, 192, 31, 0.9)',
        },
        INTNED:{
            fill: {display: false},
            borderColor: 'rgba(214, 127, 14, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(214, 127, 14, 0.9)',
        },
        INTNEM:{
            fill: {display: false},
            borderColor: 'rgba(189, 12, 136, 1)',
            pointRadius: 0.1,
            backgroundColor: 'rgba(189, 12, 136, 0.9)',
        }
    }
}

function getLabels(cacheData){
    var arr = [];
    if(cacheData == undefined || cacheData.lastUpdate == 0){
        return [];
    }
    for(let i = 0; i < constants.maxSamplesInGraph; i++){
        arr.push(String(i))
    }
    return arr;
}

function getDatasets(cacheData, graphConfigData){
    if(cacheData == undefined || cacheData.lastUpdate == 0){
        return {
            fill: "1",
            borderColor: 'rgba(124, 109, 109, 1)',
            backgroundColor: 'rgba(124, 109, 109, 0.9)',
            data: [0],
            labels: [0],
        }
    }
    var arrData = {};
    var arrDatasets = [];
    let initialIndex = 0;
    let keys = Object.keys(cacheData);
    if(keys.length > constants.maxSamplesInGraph){
        initialIndex = keys.length - constants.maxSamplesInGraph - 1;
    }
    for(let i = initialIndex; i < keys.length; i++){
        const point = cacheData[i-1];
        for(var key in point){
            if(key != "ts" ){
                if(parseInt(point.ts) > (Date.now() - 86400000)){
                    if(arrData[key]){
                        arrData[key].push(point[key])
                    }else{
                        arrData[key] = [point[key]]
                    }
                }else{
                    if(arrData[key]){
                        arrData[key].push(0)
                    }else{
                        arrData[key] = [0]
                    }
                }
            }
        }
    }
    for(var key in arrData){
        if(graphConfigData[key] === undefined){
            arrDatasets.push(graphConfigData);
        }else{
            graphConfigData[key].data = arrData[key];
            graphConfigData[key].label = key;
            arrDatasets.push(graphConfigData[key]);
        }
    }
    return arrDatasets;
}

function getDataSetsPie(cacheData, graphConfigData){
    if(cacheData == undefined || cacheData.lastUpdate == 0){
        return {
            fill: "1",
            borderColor: 'rgba(124, 109, 109, 1)',
            backgroundColor: 'rgba(124, 109, 109, 0.9)',
            data: [0],
            labels: [0],
        }
    }
    var arrData = {};
    var total = 0;
    var point = cacheData[cacheData.length -1]
    for(var key in point){
        if(key != "ts" ){
            if(point[key] > 0){
                arrData[key] = point[key];
                total += point[key];
            }
        }
    }
    var data = []
    var labels = []
    var backgroundColor = []
    var borderColor = []
    for(var key in arrData){
        labels.push(key);
        data.push(Math.trunc((arrData[key]/total)*100));
        backgroundColor.push(graphConfigData[key].backgroundColor);
        borderColor.push(graphConfigData[key].borderColor);
    }
    return {labels: labels, datasets: {
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor
    }};
}

export const graphs = [{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart1",
    type:"line",
    yAxisLabel: graphsData[0].yAxisLabel,
    xAxisLabel: graphsData[0].xAxisLabel,
    yAxisUnit: graphsData[0].yAxisUnit,
    xAxisUnit: graphsData[0].xAxisUnit,
    labels: getLabels(cache.lastFuel.result),
    datasets: getDatasets(cache.lastFuel.result, graphConfig.fuelType)
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart2",
    type:"doughnut",
    yAxisLabel: graphsData[1].yAxisLabel,
    xAxisLabel: graphsData[1].xAxisLabel,
    yAxisUnit: graphsData[1].yAxisUnit,
    xAxisUnit: graphsData[1].xAxisUnit,
    labels: getDataSetsPie(cache.lastFuel.result, graphConfig.fuelType).labels,
    datasets: [getDataSetsPie(cache.lastFuel.result, graphConfig.fuelType).datasets],
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart3",
    type:"line",
    yAxisLabel: graphsData[9].yAxisLabel,
    xAxisLabel: graphsData[9].xAxisLabel,
    yAxisUnit: graphsData[9].yAxisUnit,
    xAxisUnit: graphsData[9].xAxisUnit,
    labels: getLabels(cache.lastInterconnections.result),
    datasets: getDatasets(cache.lastInterconnections.result, graphConfig.interconnections)
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart4",
    type:"doughnut",
    yAxisLabel: graphsData[1].yAxisLabel,
    xAxisLabel: graphsData[1].xAxisLabel,
    yAxisUnit: graphsData[1].yAxisUnit,
    xAxisUnit: graphsData[1].xAxisUnit,
    labels: getDataSetsPie(cache.lastInterconnections.result, graphConfig.interconnections).labels,
    datasets: [getDataSetsPie(cache.lastInterconnections.result, graphConfig.interconnections).datasets],
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart5",
    type:"line",
    yAxisLabel: graphsData[4].yAxisLabel,
    xAxisLabel: graphsData[4].xAxisLabel,
    yAxisUnit: graphsData[4].yAxisUnit,
    xAxisUnit: graphsData[4].xAxisUnit,
    labels: getLabels(cache.lastSystemPrices.result),
    datasets: getDatasets(cache.lastSystemPrices.result, graphConfig.systemPrices)
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart6",
    type:"line",
    yAxisLabel: graphsData[5].yAxisLabel,
    xAxisLabel: graphsData[5].xAxisLabel,
    yAxisUnit: graphsData[5].yAxisUnit,
    xAxisUnit: graphsData[5].xAxisUnit,
    labels: getLabels(cache.lastForecast.result),
    datasets: getDatasets(cache.lastForecast.result, graphConfig.forecast).concat(getDatasets(cache.lastInitialTransmision.result, graphConfig.initialTransmision))
    },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart7",
    type:"line",
    yAxisLabel: graphsData[6].yAxisLabel,
    xAxisLabel: graphsData[6].xAxisLabel,
    yAxisUnit: graphsData[6].yAxisUnit,
    xAxisUnit: graphsData[6].xAxisUnit,
    labels: getLabels(cache.lastFreq.result),
    datasets: getDatasets(cache.lastFreq.result, graphConfig.signalFreq)
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart8",
    type:"doughnut",
    yAxisLabel: graphsData[7].yAxisLabel,
    xAxisLabel: graphsData[7].xAxisLabel,
    yAxisUnit: graphsData[7].yAxisUnit,
    xAxisUnit: graphsData[7].xAxisUnit,
    labels: ["-48", "[48,49)","[49,51]","(51,52]", "+52"],
    datasets: [{
        data: [9000, 9000, 9000, 9000, 9000],
        borderColor: ['rgba(175, 33, 33, 1)', 'rgba(175, 175, 33, 1)','rgba(33, 175, 33, 1)','rgba(175, 175, 33, 1)', 'rgba(175, 33, 33, 1)'],
        backgroundColor: ['rgba(175, 33, 33, 1)', 'rgba(175, 175, 33, 1)','rgba(33, 175, 33, 1)','rgba(175, 175, 33, 1)', 'rgba(175, 33, 33, 1)'],
    },
    {
        "data": [
            2750,
            55,
            2250,
        ],
        "backgroundColor": [
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0)"
        ],
        "borderWidth": 0,
        "hoverBackgroundColor": [
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0)"
        ],
        "hoverBorderWidth": 0
    }],
    options: {
        cutoutPercentage: 10,
        rotation:	-0.5 * Math.PI,
        circumference:	1 * Math.PI,
        legend: {
            display: true,
            position: 'right',
        }
    }},{
        title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
        id:"myChart9",
        type:"line",
        yAxisLabel: graphsData[3].yAxisLabel,
        xAxisLabel: graphsData[3].xAxisLabel,
        yAxisUnit: graphsData[3].yAxisUnit,
        xAxisUnit: graphsData[3].xAxisUnit,
        labels: getLabels(cache.lastRollingSystem.result),
        datasets: getDatasets(cache.lastRollingSystem.result, graphConfig.rollingSystem)
    },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart10",
    type:"line",
    yAxisLabel: graphsData[2].yAxisLabel,
    xAxisLabel: graphsData[2].xAxisLabel,
    yAxisUnit: graphsData[2].yAxisUnit,
    xAxisUnit: graphsData[2].xAxisUnit,
    labels: getLabels(cache.lastImbalance.result),
    datasets: getDatasets(cache.lastImbalance.result, graphConfig.imbalance)
  }]

  
// 1576396800000
// 1576283400000

// FIRST FORECAST 1576310400000
// LAST FORECAST 1576396800000

// FIRST INTIIAL 1576198800000
// LAST INITIAL  1576283400000