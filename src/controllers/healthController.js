/**
 * Module Dependencies
 */
import moment from 'moment';

class HealthController {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/health', this.get.bind(this));
    this.router.post('/health', this.get.bind(this));
  }

  get(request, response) {
    response.status(200).send({
      data: {
        status: 'Success',
        date: moment().format(),
        message: 'Connection has been established successfully.',
        request_id: request.id
      }
    });
  }

  post(request, response) {
    response.status(200).send({
      data: {
        status: 'Success',
        date: moment().format(),
        message: 'Connection has been established successfully.',
        request_id: request.id
      }
    });
  }
}

export default HealthController;