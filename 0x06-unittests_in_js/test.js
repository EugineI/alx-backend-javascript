// test.js
const Mocha = require('mocha');
const path = require('path');

// Get the test file from command line arguments (e.g. '0-calcul.test.js')
const testFile = process.argv[2];

if (!testFile) {
  console.error('Please provide a test file');
  process.exit(1);
}

const mocha = new Mocha();

// Add the test file
mocha.addFile(path.resolve(testFile));

// Run the tests
mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
