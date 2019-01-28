/**
 * Module Dependencies
 */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from 'index';

let should = chai.should();

chai.use(chaiHttp);

describe('Controllers', () => {
  beforeEach(() => new Promise(resolve => setTimeout(resolve, 5000)));

  describe('HealthsController', () => {
    describe('GET /health', () => {
      it('should be a successful request to health check', (done) => {
        chai.request(server)
        .get('/health')
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('status');
          res.body.data.should.have.property('date');
          res.body.data.should.have.property('message');
          res.body.data.should.have.property('request_id');
          done();
        });
      });
    });
    describe('POST /health', () => {
      it('should be a successful request to health check', (done) => {
        chai.request(server)
        .get('/health')
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('status');
          res.body.data.should.have.property('date');
          res.body.data.should.have.property('message');
          res.body.data.should.have.property('request_id');
          done();
        });
      });
    });
  });
});