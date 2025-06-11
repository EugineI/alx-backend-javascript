const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('Index page', () => {
  it('should return status 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return correct message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return 200 for numeric id', (done) => {
    chai.request(app)
      .get('/cart/12')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return 404 for non-numeric id', (done) => {
    chai.request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('/available_payments endpoint', () => {
  it('should return correct payment methods object', (done) => {
    chai.request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('/login endpoint', () => {
  it('should return welcome message with userName', (done) => {
    chai.request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});
