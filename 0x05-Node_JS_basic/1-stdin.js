#!/usr/bin/node
/**
 * This script demonstrates basic stdin/stdout interaction
 * It asks for a name and displays it back
 */
process.stdout.write('Welcome to ALX School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
