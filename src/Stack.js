class Stack {
  constructor() {
    this.content = {};
    this.count = 0;
  }

  push(value) {
    this.count += 1;
    this.content[this.count] = value;
  }

  pop() {
    const { count } = this;
    if (count) {
      this.count -= 1;
      return this.content[count];
    }
    return null;
  }

  peek() {
    if (this.count) {
      return this.content[this.count];
    }
    return null;
  }

  size() {
    return this.count;
  }

  print() {
    console.log('stack:');
    for (let i = this.count; i > 0; i -= 1) {
      console.log(this.content[i]);
    }
  }
}

module.exports = Stack;
