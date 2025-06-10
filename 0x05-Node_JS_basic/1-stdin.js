#!/usr/bin/node

/**
 * This script demonstrates basic stdin/stdout interaction
 * It asks for a name and displays it back
 */
function main() {
  process.stdout.write('Welcome to ALX, what is your name?\n');

  process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    process.stdout.write(`Your name is: ${input}\n`);
    process.exit(0);
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

module.exports = main;

if (require.main === module) {
  main();
}
