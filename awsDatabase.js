const Client = require('pg').Client

const client = new Client({
  user: 'modolabs',
  password: 'm0d0LaBs!0121',
  host: 'modo.cconwsi52yhe.eu-west-2.rds.amazonaws.com',
  database: 'modo',
  port: 5432,
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
  client.end()
}

async function getLastFreq(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_freq()')
  const obj = {}
  for(const row of query.rows){
    if(!obj[row.ts.getTime()]){
      obj[row.ts.getTime()] = row.sf;
    }
  }
  client.end()
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
  client.end()
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
  client.end()
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
  client.end()
}

async function getLastInitialTransmision(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_itsdo()')
  const obj = {}
  for(const row of query.rows){
    obj[row.timefull.getTime()] = row.vd
  }
  client.end()
}

async function getLastSystemWarn(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_syswarn()')
  const obj = {}
  for(const row of query.rows){
    obj[row.warningdatetime.getTime()] = row.systemwarning
  }
  client.end()
}

async function getLastForcast(){
  const query = await client.query('SELECT * FROM bmrs.get_latest_tsdf()')
  const obj = {}
  for(const row of query.rows){
    if(obj[row.timefull.getTime()]){
      obj[row.timefull.getTime()][row.zi] = row.vd;
    }else{
      obj[row.timefull.getTime()] = {};
      obj[row.timefull.getTime()][row.zi] = row.vd;
    }
  }
  client.end()
}

async function getLastRollingSystem(){
  const query = await client.query('SELECT * FROM bmrs.get_rolling_system_demand()')
  const obj = {}
  for(const row of query.rows){
    obj[row.ts.getTime()] = row.sum;
  }
  client.end()
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
  client.end()
}

async function handleError(func){
    try{
        const result = await func();
        return result
    }catch(e){
        return {err: true, msg: e}
    }
}

module.exports = {
  getLastFuelPoints: handleError(getLastFuelPoints),
  getLastFreq: handleError(getLastFreq),
  getLastImbalance: handleError(getLastImbalance),
  getLastNationalImbalance: handleError(getLastNationalImbalance),
  getLastInterconnects: handleError(getLastInterconnects),
  getLastInitialTransmision: handleError(getLastInitialTransmision),
  getLastSystemWarn: handleError(getLastSystemWarn),
  getLastForcast: handleError(getLastForcast),
  getLastRollingSystem: handleError(getLastRollingSystem),
  getLastSystemPrices: handleError(getLastSystemPrices),
}