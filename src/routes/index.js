/**
 * Module Dependencies
 */
import express from 'express';

/**
 * Additional Modules
 */
import GraphQLController from '../controllers/graphQLController';
import HealthController from '../controllers/healthController';

/**
 * Routes
 */
const router = express.Router();
const GraphQLControllerInstance = new GraphQLController(router);
const HealthControllerInstance = new HealthController(router);

export default router;