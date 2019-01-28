/**
 * Module Dependencies
 */
import fetch from '../middlewares/fetch';

function getByName(requestId, name) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{countryURL}/name/${name}`, options).then(data => {
    if (data.latlng) {
      data.lat = parseFloat(data.latlng[0]);
      data.lng = parseFloat(data.latlng[1]);
    }
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getByFullName(requestId, fullName) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };

  return fetch(`{countryURL}/name/${fullName}?fullText=true`, options).then(data => {
    if (data.latlng) {
      data.lat = parseFloat(data.latlng[0]);
      data.lng = parseFloat(data.latlng[1]);
    }
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getByAlphaCode(requestId, alphaCode) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };

  return fetch(`{countryURL}/alpha/${alphaCode}`, options).then(data => {
    if (data.latlng) {
      data.lat = parseFloat(data.latlng[0]);
      data.lng = parseFloat(data.latlng[1]);
    }
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

export default {
  getByName,
  getByFullName,
  getByAlphaCode
};