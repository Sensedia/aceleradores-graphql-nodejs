/**services
services
 * Additional Modules
 */
import countryService from '../services/countryService';
import weatherService from '../services/weatherService';

function getCountry(args, context) {
  const name = args.name,
    fullName = args.fullName,
    alphaCode = args.alphaCode;

  if (name) {
    return countryService.getByName(context.req.id, name).then(data => {
      return data;
    }).catch(function (err) {
      return new Error(err);
    });
  } else if (fullName) {
    return countryService.getByFullName(context.req.id, fullName).then(data => {
      return data;
    }).catch(function (err) {
      return new Error(err);
    });
  } else if (alphaCode) {
    return countryService.getByAlphaCode(context.req.id, alphaCode).then(data => {
      return data;
    }).catch(function (err) {
      return new Error(err);
    });
  } else {
    return new Error('One parameter of them (name, fullName, alphaCode) is required.');
  }
}

export default { 
  getCountry
};