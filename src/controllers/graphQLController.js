/**
 * Module Dependencies
 */
import expressGraphQL from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { addResolveFunctionsToSchema } from 'graphql-tools';
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date';

/**
 * Additional Modules
 */
import config from '../config';
import helpers from '../helpers';
import typeDefs from '../schema/schema.graphql';
import { weatherResolver, countryResolver, currencyResolver } from '../resolvers';

const resolverMapping = {
  Country: {
    weather: (obj, args, context, info) => {
      return helpers.timeout(config.timeout, weatherResolver.getWeather(args.filter, context).catch(function(){
        return new Error(`Timeout after ${config.timeout} ms`);
      }));
    }
  },
  Query: {
    country: (obj, args, context, info) => {
      return helpers.timeout(config.timeout, countryResolver.getCountry(args.input, context).catch(function(){
        return new Error(`Timeout after ${config.timeout} ms`);
      }));
    },
    weather: (obj, args, context, info) => {
      return helpers.timeout(config.timeout, weatherResolver.getWeather(args.input, context).catch(function(){
        return new Error(`Timeout after ${config.timeout} ms`);
      }));
    },
    convertedCurrency: (obj, args, context, info) => {
      return helpers.timeout(config.timeout, currencyResolver.get(args.input, context).catch(function(){
        return new Error(`Timeout after ${config.timeout} ms`);
      }));
    }
  }
};

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
};

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers
});

addResolveFunctionsToSchema(schema, resolverMapping);

class GraphQLController {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/graphql', (req, res) => {
      return expressGraphQL(req => {
        const query = req.query.query || req.body.query;
        if (query && query.length > config.maxQueryLength) {
          throw new Error('Query too large.');
        }
        return {
          context: { req, res },
          graphiql: true,
          schema: schema
        }
      })(req, res);
    });

    this.router.post('/graphql', (req, res) => {
      return expressGraphQL(req => {
        const query = req.query.query || req.body.query;
        if (query && query.length > config.maxQueryLength) {
          throw new Error('Query too large.');
        }
        return {
          context: { req, res },
          graphiql: false,
          schema: schema
        }
      })(req, res);
    });

  }
}

export default GraphQLController;