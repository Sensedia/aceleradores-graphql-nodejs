/**
 * Module Dependencies
 */
import fetch from '../middlewares/fetch';

function getLatest(requestId) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch('{currencyURL}/latest?access_key={currencyCredentials}', options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getLatestBySymbol(requestId, symbols) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{currencyURL}/latest?access_key={currencyCredentials}&symbols=${symbols}`, options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getHistorical(requestId, date) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{currencyURL}/${date}?access_key={currencyCredentials}`, options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getHistoricalBySymbol(requestId, date, symbols) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{currencyURL}/${date}?access_key={currencyCredentials}&symbols=${symbols}`, options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

export default {
  getLatest,
  getLatestBySymbol,
  getHistorical,
  getHistoricalBySymbol
};