const Stack = require('./Stack');

/**
 * @description Function that checks that all grouping operators are correcly
 * closed
 * @param {String} code Code to review
 * @returns {String} Result message of review
 */
function reviewCode(code) {
  const groupOperators = new Stack();

  let position = -1; let
    line = 1;
  for (let i = 0; i < code.length; i += 1) {
    const char = code[i];

    // Calculate the line and the position into the line for the current review
    if (char === '\n') {
      line += 1;
      position = -1;
      continue;
    }
    position += 1;

    // Define operators to review
    const operators = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
    const openOperators = Object.values(operators);
    const closeOperators = Object.keys(operators);

    // Add open operator to stack
    if (openOperators.includes(char)) {
      groupOperators.push(char);
      continue;
    }

    // match close operators with the removed operator from the stack
    if (closeOperators.includes(char)) {
      const closed = groupOperators.pop();

      if (closed !== operators[char]) {
        return `"${closed}" without closing before line ${line}, position ${position}`;
      }
    }
  }

  // review if there are operators without closing
  if (groupOperators.size()) {
    const withoutClosing = groupOperators.pop();
    return `"${withoutClosing}" without closing`;
  }

  return 'All is OK';
}

module.exports = reviewCode;
