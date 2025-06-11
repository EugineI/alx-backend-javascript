const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function we're testing
    sendPaymentRequestToApi(100, 20);
    
    // Verify the spy was called correctly
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    
    // Restore the original function
    calculateNumberSpy.restore();
  });

  it('should log the correct total to the console', () => {
    // Stub the calculateNumber function to return a fixed value
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);
    
    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');
    
    // Call the function
    sendPaymentRequestToApi(100, 20);
    
    // Verify console.log was called with the right message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    
    // Restore all stubs and spies
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
