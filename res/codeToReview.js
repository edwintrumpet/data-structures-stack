function hello(name, hour) {
  let greeting = 'Good evening';
  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 6) {
    greeting = 'Good afternoon';
  }
  console.log(`${greeting} ${name}`);
}

module.exports = hello;
