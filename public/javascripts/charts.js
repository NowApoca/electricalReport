
data = [20000, 14000, 12000, 11000, 12000, 14000, 13000];
data2 = [15000, 10000, 9000, 12000, 14000, 10000, 9000];
data3 = [10000, 8000, 5000, 8000, 7000, 9000, 7000];
data4 = [8000, 12000, 12000, 8000, 8000, 19000, 22000];
data5 = [5000, 5000, 5000, 5000, 5000, 5000, 5000];

const graphs = [{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart1",
    type:"line",
    yAxisLabel: "Output usale by fuel type",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    datasets: [{
        label: 'Gas',
        data: data,
        fill: "1",
        borderColor: 'rgba(124, 109, 109, 1)',
        backgroundColor: 'rgba(124, 109, 109, 0.9)',
    },{
        label: 'Coal',
        data: data2,
        fill: "2",
        borderColor: 'rgba(10, 67, 72, 1)',
        backgroundColor: 'rgba(10, 67, 72, 0.9)',
    },{
        label: 'Nuclear',
        data: data3,
        fill: "origin",
        borderColor: 'rgba(206, 245, 0, 1)',
        backgroundColor: 'rgba(206, 245, 0, 0.9)',
    }]
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart2",
    type:"doughnut",
    yAxisUnit: "MW",
    labels: ["gas", "coal", "nuclear"],
    datasets: [{
        data: [13000, 9000, 7000],
        borderColor: ['rgba(124, 109, 109, 1)', 'rgba(10, 67, 72, 1)', 'rgba(206, 245, 0, 1)'],
        backgroundColor: ['rgba(124, 109, 109, 0.2)', 'rgba(10, 67, 72, 0.2)', 'rgba(206, 245, 0, 0.2)'],
    }]
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart3",
    type:"line",
    yAxisLabel: "System Prices",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "$/MWh",
    xAxisUnit: "",
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    datasets: [{
        data: data,
        borderColor: 'rgba(124, 109, 109, 1)',
        backgroundColor: 'rgba(124, 109, 109, 0.2)',
        fill: {display: false}
    }]
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart4",
    type:"line",
    yAxisLabel: "Market Imbalance",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MWh",
    xAxisUnit: "",
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart5",
    type:"line",
    yAxisLabel: "System Demand",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart6",
    type:"line",
    yAxisLabel: "Rolling System Demand",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart7",
    type:"line",
    yAxisLabel: "Average Half Hourly Interconnector Flows",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  },{
    title:"Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
    id:"myChart8",
    type:"line",
    yAxisLabel: "Rolling System Frequency",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "Hz",
    xAxisUnit: "",
    labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
}]

function floatToUnit(value, unit) {
    return unit + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

for(const graph of graphs){
    renderChart(graph);
}

function renderChart(graph) {
    let ctx = document.getElementById(graph.id).getContext('2d');
    if(graph.type == "line"){
        createNormalLineZoomChart(graph, ctx);
    }else if(graph.type == "doughnut"){
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: graph.labels,
                datasets: graph.datasets
            },
        });
    }
    
}

function resetZoom(){

    var ctx8 = document.getElementById("myChart8").getContext('2d');

    var myChart8 = new Chart(ctx8, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: data4,
                borderColor: 'rgba(124, 109, 109, 1)',
                backgroundColor: 'rgba(124, 109, 109, 0.2)',
            }]
        },
        options: {
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each bar to be 2px wide and green
            elements: {
                rectangle: {
                    borderWidth: 0,
                    borderSkipped: 'bottom'
                }
            },
            responsive: true,
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'LOADS'
            },

            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'y'
                    },
                    zoom: {
                        enabled: true,
                        mode: 'y'
                    },

                    rangeMin: {
                        // Format of min zoom range depends on scale type
                        y: 0
                    },
                    rangeMax: {
                        // Format of max zoom range depends on scale type
                        y: 160000
                    }
                }
            },
            scales: {
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Consumption'
                          },
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            max: 60000,
                            callback: function (value, index, values) {
                                return float2dollar(value);
                            }
                        }
                    }
                ],
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                      },
                    ticks: {
                        display: true,
                        min: 'January-17',
                        max: 'December-17'
                    }
                }]
            }
        }
    });
    myChart8.resetZoom()
}

function createNormalLineZoomChart(graph, documentById){
    new Chart(documentById, {
        type: 'line',
        data: {
            labels: graph.labels,
            datasets: graph.datasets
        },
        options: {
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each bar to be 2px wide and green
            elements: {
                rectangle: {
                    borderWidth: 0,
                    borderSkipped: 'bottom'
                }
            },
            responsive: true,
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'LOADS'
            },

            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'y'
                    },
                    zoom: {
                        enabled: true,
                        mode: 'y'
                    },

                    rangeMin: {
                        // Format of min zoom range depends on scale type
                        y: 0
                    },
                    rangeMax: {
                        // Format of max zoom range depends on scale type
                        y: 160000
                    }
                }
            },
            scales: {
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: graph.yAxisLabel
                          },
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            max: 60000,
                            callback: function (value, index, values) {
                                return floatToUnit(value, graph.yAxisUnit);
                            }
                        }
                    }
                ],
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                      },
                    ticks: {
                        display: true,
                        min: 'January-17',
                        max: 'December-17'
                    }
                }]
            }
        }
    });
}
