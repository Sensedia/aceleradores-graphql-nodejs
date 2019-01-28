/**
 * Additional Modules
 */
import currencyService from '../services/currencyService';

function getCurrency(args, context) {
  const symbols = args.symbols ? args.symbols : null,
    date = args.date ? args.date : null;

  if (date) {
    if (symbols) {
      return currencyService.getHistoricalBySymbol(context.req.id, date, symbols).then(data => {
        return data;
      }).catch(function (err) {
        return new Error(err);
      });
    } else {
      return currencyService.getHistorical(context.req.id, date).then(data => {
        return data;
      }).catch(function (err) {
        return new Error(err);
      });
    }
  } else {
    if (symbols) {
      return currencyService.getLatestBySymbol(context.req.id, symbols).then(data => {
        return data;
      }).catch(function (err) {
        return new Error(err);
      });
    } else {
      return currencyService.getLatest(context.req.id).then(data => {
        return data;
      }).catch(function (err) {
        return new Error(err);
      });
    }
  }
}

export default {
  getCurrency
};