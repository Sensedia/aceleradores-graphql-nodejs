/**
 * Additional Modules
 */
import weatherService from '../services/weatherService';

function getWeather(args, context) {
  const cityName = args.cityName ? args.cityName : null,
    cityId = args.cityId ? args.cityId : null,
    coordinate = args.coordinate ? args.coordinate : null,
    zip = args.zip ? args.zip : null;

  if (cityName) {
    return weatherService.getByCityName(context.req.id, cityName).then(data => {
      return data;
    }).catch(function (err) {
      return new Error(err);
    });
  } else if (cityId) {
    return weatherService.getByCityId(context.req.id, cityId).then(data => {
      return data;
    }).catch(function (err) {
      return new Error(err);
    });
  } else if (coordinate && coordinate.lat && coordinate.lng) {
    return weatherService.getByCoordinate(context.req.id, coordinate.lat, coordinate.lng).then(data => {
      return data;
    }).catch(function (err) {
      return new Error(err);
    });
  } else if (zip) {
    return weatherService.getByZipCode(context.req.id, zip).then(data => {
      return data;
    }).catch(function (err) {
      return new Error(err);
    });
  } else {
    return new Error('One parameter of them (city name/id, coordinate or zipcode) is required.');
  }
}

export default {
  getWeather
};