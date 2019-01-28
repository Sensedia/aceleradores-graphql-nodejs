/**
 * Module Dependencies
 */
import fetch from '../middlewares/fetch';

function getByCityName(requestId, name) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{weatherURL}?q=${name}&APPID={weatherCredentials}`, options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getByCityId(requestId, id) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{weatherURL}?id=${id}&APPID={weatherCredentials}`, options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getByCoordinate(requestId, lat, lng) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{weatherURL}?lat=${lat}&lon=${lng}&APPID={weatherCredentials}`, options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

function getByZipCode(requestId, zip) {
  const options = {
    requestId: requestId,
    method: 'GET'
  };
  
  return fetch(`{weatherURL}?zip=${zip}&APPID={weatherCredentials}`, options).then(data => {
    return data;
  }).catch(function (err) {
    return new Error(err);
  });
}

export default {
  getByCityName,
  getByCityId,
  getByCoordinate,
  getByZipCode
};