var express = require('express');
var router = express.Router();
var cache = require("../polling").cache;

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
  cache.netStatus.lastUpdateFormated = lastUpdateFormat(cache.netStatus.lastUpdate)
  res.render('index', { title: 'Express', netStatus: cache.netStatus, cache: cache, graphs: [{
    title:"Output usage by fuel type (line graph and pie chart) - National Grid measure system generation connected to the high voltage transmission system in real-time from operational metering. This is used in control timescales to assist with balancing the system and confirming that generators are operating at their expected levels. To provide market participants with information relating to the levels of generation, this metering is aggregated into fuel type categories (Coal, Gas, Nuclear, Oil, Wind, Pumped Storage, Hydro, OCGT, Biomass, Other, French I/C, Irish (Moyle) I/C, Dutch I/C, East-West I/C). The total of all categories equals the Total Transmission System Demand (TSD) which includes all demand met from the Transmission system including power station auxiliary demand, pumping demand and interconnector exports demand. The data is provided as 5 minute average MW values, half hourly averages in MW and daily MWh totals. As this section is concerned with the breakdown by fuel type of total positive generation to meet all Transmission System Demand, any fuel type categories with negative values will be capped to zero in this section.If the data for one or more BM Units is incomplete, there will be no flag on the BMRS to indicate this. Participants will therefore need to take their own view as to the reliance which can be placed on operational metering data.",
    id:"myChart1",
    type:"line",
    yAxisLabel: "Output usale by fuel type",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFuel.lastUpdate),
  },{
    title:"The representation of 'Output sale by fuel type' in percentages (only positive values).",
    id:"myChart2",
    type:"doughnut",
    yAxisLabel: "Output usale by fuel type",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "%",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFuel.lastUpdate),
  },{
    title:"Interconnections Flow - Interconnector flows are measured at the following locations - Sellindge (South East England) for the Interconnector with France, Auchencrosh (South Scotland) for the Moyle Interconnector with Northern Ireland, the Isle of Grain (Kent) for the Interconnector with the Netherlands (also referred to as the Dutch Interconnector or Dutch I/C), Shotton (North Wales) for the Interconnector with the Republic of Ireland (also referred to as the East-West Interconnector or East-West I/C) and Richborough (Kent) for the Nemo Link Interconnector with Belgium. Every half hour, the average flow across each interconnector is calculated by National Grid from its operational metering values. The convention adopted is that a positive value represents import into the GB Transmission System, whilst a negative value represents an export from GB.",
    id:"myChart3",
    type:"line",
    yAxisLabel: "Interconnections Flow",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastInterconnections.lastUpdate),
  },{
    title:"The representation of 'Interconnections Flow' in percentages (only positive values).",
    id:"myChart4",
    type:"doughnut",
    yAxisLabel: "Interconnections Flow",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastInterconnections.lastUpdate),
  },{
    title:"System Prices - Following the end of each Settlement Period two Imbalance Prices, known as System Buy Price (SBP) and System Sell Price (SSP) respectively, are calculated and published on the BMRS. These prices are purely indicative, as they are calculated before all the necessary information for definitive calculations, such as actual transmission losses, is available. The definitive calculations for Settlement purposes are carried out separately, several days later. These definitive calculations may also include amendments to the Balancing Mechanism data following post event analysis. The Imbalance Prices are used for the settlement of the energy imbalances incurred by participants - that is to say, the differences between the volumes of energy which a participant contracts for (in all trading, not just in the Balancing Mechanism) and the volumes actually generated or consumed. A participant whose imbalance is a net spill on to the system will be paid for the energy which is put on to the system, at the System SellPrice. A participant whose imbalance is a net shortfall will have to pay for the volume of energy which is in deficit, at the System Buy Price. It is thus equally possible for generators or consumers alike to be out of balance in either direction in a given half hour.",
    id:"myChart5",
    type:"line",
    yAxisLabel: "System Prices",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "£/MWh",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastSystemPrices.lastUpdate),
  },{
    title:"System Demand - The Demand Forecasts shown here are the National demand forecasts made by National Grid based on historically metered generation output for Great Britain. As above, they are TSD-based, i.e. they include transmission losses, station transformers load, pumped storage demand and interconnector demand. The outturn demands are also TSD-based. Please see the information tab for the 'Peak Demands' table above for more information.",
    id:"myChart6",
    type:"line",
    yAxisLabel: "System Demand",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastForecast.lastUpdate),
  },{
    title:"Frequency of the line - System frequency is a continuously changing variable that is determined and controlled by the second-by-second (real time) balance between system demand and total generation. If demand is greater than generation, the frequency falls while if generation is greater than demand, the frequency rises. National Grid has a licence obligation to control frequency within the limits specified in the 'Electricity Supply Regulations', i.e. +/-1%; of nominal system frequency (50.00Hz) save in abnormal or exceptional circumstances. National Grid must therefore ensure that sufficient generation and / or demand is held in automatic readiness to manage all credible circumstances that might result in frequency variations. System frequency is measured in cycles per second or Hertz (Hz).",
    id:"myChart7",
    type:"line",
    yAxisLabel: "Frequency of the line",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "Hz",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFreq.lastUpdate),
  },{
    title:"This Gauger represents critical values of the frequency.",
    id:"myChart8",
    type:"doughnut",
    yAxisLabel: "Last Frequency gauger. Actual Value: "+ cache.netStatus.lastFreq,
    xAxisLabel: "Settlement Period",
    yAxisUnit: "Hz",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastFreq.lastUpdate),
  },{
    title:"Rolling system demand - The system demand shown on this graph is the total instantaneous MW demand being supplied across England, Wales and Scotland. It is estimated from the generation data by summing the output of all the generation connected to the GB Transmission System (including Embedded Large Power Stations), plus imports from External Interconnectors e.g. from France-GB and Ireland-GB. Negative values for the Interconnector and Pumped-Storage and Non-Pumped-Storage Hydro types are set to 0 in the summation step.",
    id:"myChart9",
    type:"line",
    yAxisLabel: "Rolling System Demand",
    xAxisLabel: "Settlement Period",
    yAxisUnit: "MW",
    xAxisUnit: "",
    lastUpdate: lastUpdateFormat(cache.lastRollingSystem.lastUpdate),
  },{
    title:"Market Imbalance - The accepted measure of market imbalance is the Net Imbalance Volume (NIV). NIV represents the total net amount of energy that the System Operator purchased in order to balance the system in a particular Settlement Period. Therefore, the NIV is the net sum of all positive and negative system management and energy balancing System Actions for the Settlement Period. The calculation of NIV for the purposes of reporting on the BMRS only includes Accepted Bids and Offers, and actions reported in BSAD before the Indicative System Price is calculated at the end of the Settlement Period. A positive NIV indicates that the overall system was short, i.e. there was not enough energy in the system so the SO instructed generators to produce more or demand to reduce. A negative NIV indicates that the overall system position was long, i.e. there was too much energy in the system so the SO instructed generators to reduce their output or demand to increase. If the system is short (NIV > 0) the System Price is based on actions to increase generators’ output or reduce demand, whereas if the system is long (NIV < 0) the System Price is based on actions to reduce generators’ output or increase demand.",
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
