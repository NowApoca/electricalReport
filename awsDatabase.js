const Client = require('pg').Client
const constants = require("./constants")
// Configuration of the external data base.

const client = new Client({
  user: constants.dbUser,
  password: constants.dbPassword,
  host: constants.dbHost,
  database: constants.dbName,
  port: constants.dbPort,
})

client.connect()

async function getLastFuelPoints(func){
  if(func == undefined){
    func = "hh"
  }
  const query = await client.query('SELECT * FROM bmrs.get_latest_fuel'+func+"()")
  const obj = {}
  for(const row of query.rows){
    if(obj[row.timefull.getTime()]){
      obj[row.timefull.getTime()][row.ft] = row.fg;
    }else{
      obj[row.timefull.getTime()] = {};
      obj[row.timefull.getTime()][row.ft] = row.fg;
    }
  }
  return {dataQuery: "lastFuel", result: objToArray(obj)};
}

async function getLastFreq(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_freq()')
  const obj = {}
  for(const row of query.rows){
    if(!obj[row.ts.getTime()]){
      obj[row.ts.getTime()] = {
        Frequency: (row.sf == 0)? 50 : row.sf,
      };
    }
  }
  return {dataQuery: "lastFreq", result: objToArray(obj)};
}

async function getLastImbalance(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_imbalance()')
  const obj = {}
  for(const row of query.rows){
    if(obj[row.timefull.getTime()]){
      obj[row.timefull.getTime()][row.zi] = row.vi;
    }else{
      obj[row.timefull.getTime()] = {};
      obj[row.timefull.getTime()][row.zi] = row.vi;
    }
  }
  return {dataQuery: "lastImbalance", result: objToArray(obj)};
}

async function getLastNationalImbalance(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_imbalance()')
  const obj = {}
  for(const row of query.rows){
    if(obj[row.timefull.getTime()]){
      obj[row.timefull.getTime()][row.zi] = row.vi;
    }else{
      obj[row.timefull.getTime()] = {};
      obj[row.timefull.getTime()][row.zi] = row.vi;
    }
  }
  return obj;
}

async function getLastInterconnects(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_interconnects()')
  const obj = {}
  for(const row of query.rows){
    if(obj[row.timefull.getTime()]){
      obj[row.timefull.getTime()][row.ft] = row.fg;
    }else{
      obj[row.timefull.getTime()] = {};
      obj[row.timefull.getTime()][row.ft] = row.fg;
    }
  }
  return {dataQuery: "lastInterconnections", result: objToArray(obj)};
}

async function getLastInitialTransmision(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_itsdo()')
  const obj = {}
  for(const row of query.rows){
    obj[row.timefull.getTime()] = {
      InitialTransmision: row.vd
    }
  }
  return {dataQuery: "lastInitialTransmision", result: objToArray(obj)};
}

async function getLastSystemWarn(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_syswarn()')
  const obj = {}
  for(const row of query.rows){
    obj[row.warningdatetime.getTime()] = {
      msg: row.systemwarning
    }
  }
  return {dataQuery: "lastWarnings", result: objToArray(obj)};
}

async function getLastForecast(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_tsdf()')
  const obj = {}
  for(const row of query.rows){
    if(obj[row.timefull.getTime()]){
      obj[row.timefull.getTime()]["Forecast"] = row.vd;
    }else{
      obj[row.timefull.getTime()] = {};
      obj[row.timefull.getTime()]["Forecast"] = row.vd;
    }
  }
  return {dataQuery: "lastForecast", result: objToArray(obj)};
}

async function getLastRollingSystem(){
  const query = await client.query('SELECT * FROM bmrs.get_rolling_system_demand()')
  const obj = {}
  for(const row of query.rows){
    obj[row.ts.getTime()] = {
      RollingSystem: row.sum,
    }
  }
  return {dataQuery: "lastRollingSystem", result: objToArray(obj)};
}

async function getLastSystemPrices(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_system_price()')
  const obj = {}
  for(const row of query.rows){
    obj[row.timefull.getTime()] = {
      systemSellPrice: row.systemsellprice,
      systemBuyPrice: row.systembuyprice
    };
  }
  return {dataQuery: "lastSystemPrices", result: objToArray(obj)};
}

function objToArray(obj){
  const arr = []
  for(const ts in obj){
    const pushObj = obj[ts];
    pushObj.ts = ts;
    arr.push(pushObj)
  }
  return arr;
}

module.exports = {
  getLastFuelPoints: getLastFuelPoints,
  getLastFreq: getLastFreq,
  getLastImbalance: getLastImbalance,
  getLastNationalImbalance: getLastNationalImbalance,
  getLastInterconnects: getLastInterconnects,
  getLastInitialTransmision: getLastInitialTransmision,
  getLastSystemWarn: getLastSystemWarn,
  getLastForecast: getLastForecast,
  getLastRollingSystem: getLastRollingSystem,
  getLastSystemPrices: getLastSystemPrices,
}