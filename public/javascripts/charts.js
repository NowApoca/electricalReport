function renderChart(data, data2, data3, data4, data5, labels) {

    var timeFormat = "MM/DD/YYYY HH:mm";
    var ctx1 = document.getElementById("myChart1").getContext('2d');
    var ctx4 = document.getElementById("myChart4").getContext('2d');
    var myChart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ["gas", "coal", "nuclear"],
            datasets: [{
                data: [13000, 9000, 7000],
                borderColor: ['rgba(124, 109, 109, 1)', 'rgba(10, 67, 72, 1)', 'rgba(206, 245, 0, 1)'],
                backgroundColor: ['rgba(124, 109, 109, 0.2)', 'rgba(10, 67, 72, 0.2)', 'rgba(206, 245, 0, 0.2)'],
            }]
        },
    });
    var myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: labels,
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
                            display: false
                        },
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            max: 60000
                        }
                    }
                ],
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: false
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

data = [20000, 14000, 12000, 11000, 12000, 14000, 13000];
data2 = [15000, 10000, 9000, 12000, 14000, 10000, 9000];
data3 = [10000, 8000, 5000, 8000, 7000, 9000, 7000];
data4 = [8000, 12000, 12000, 8000, 8000, 19000, 22000];
data5 = [5000, 5000, 5000, 5000, 5000, 5000, 5000];
labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
renderChart(data, data2, data3, data4, data5, labels);

window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: 'line',
        data: barChartData,
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
                        mode: 'xy'
                    },
                    zoom: {
                        enabled: true,
                        mode: 'xy'
                    },

                    rangeMin: {
                        // Format of min zoom range depends on scale type
                        x: null,
                        y: 0
                    },
                    rangeMax: {
                        // Format of max zoom range depends on scale type
                        x: null,
                        y: 16000
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
                            display: false
                        },
                        ticks: {
                            display: true
                        }
                    }
                ],
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: false
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
};


var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 10000);
};
var randomColorFactor = function () {
    return Math.round(Math.random() * 255);
};
var randomColor = function () {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
};

var barChartData = {
    labels: ["January-16", "February-16", "March-16", "April-16", "May-16", "June-16", "July-16", "August-16", "September-16", "October-16", "November-16", "December-16", "January-17", "February-17", "March-17", "April-17", "May-17", "June-17", "July-17", "August-17", "September-17", "October-17", "November-17", "December-17"],
    datasets: [{
        label: 'Credit Card',
        backgroundColor: "rgba(133,169,69,0.9)",
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }, {
        label: 'Cash',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }]

};