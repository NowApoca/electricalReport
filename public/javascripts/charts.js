import { graphs } from './chartsConfig.js';

for(const graph of graphs){
    renderChart(graph);
}

// Here the chart is rendered, both pie and line charts. A html element is needed.

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
            options: graph.options
        });
    }
}

function resetZoom(i){
    var chart = renderChart(graphs[i])
    chart.resetZoom()
}

// here the zoom is enabled to line charts. Put it for doughnut graphs does not have sense.

for(const index in graphs){
    if(graphs[index].type == "line"){
        const ctx = document.getElementById(graphs[index].id + "Rst");
        ctx.onclick = function(){
            resetZoom(index)
        }
    }
}

// Configuration of each line graph.

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
                display: true,
                position: 'top',
            },
            tooltips: {
                mode: 'x',
            },
            hover: {
                onHover: function(e) {
                var point = this.getElementsAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
                }
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
                    }
                }
            },
            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: graph.yAxisLabel + " (" + graph.yAxisUnit+ ")"
                        },
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            display: true,
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
