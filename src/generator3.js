/*
console.log('generator in generator (using yield*)');

// Print: Hello => redux-saga => End

function* printName() {
  yield 'redux-saga';
}

function* hello() {
  yield 'Hello';
  yield* printName();
  yield 'End';
}

const iterator2 = hello();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
*/