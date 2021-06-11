const fs = require('fs');

const reviewCode = require('./reviewCode');

try {
  const code = fs.readFileSync('res/codeToReview.js', 'utf-8');
  console.log(reviewCode(code));
} catch (err) {
  console.log('Error reading file');
  console.log(err.message);
}
