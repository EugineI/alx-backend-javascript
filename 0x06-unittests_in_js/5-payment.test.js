const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi with Hooks', () => {
  let consoleSpy;

  beforeEach(() => {
    // Set up the spy before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Clean up the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and only call console once for (100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    
    // Verify the console output
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and only call console once for (10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
