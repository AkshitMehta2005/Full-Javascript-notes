let cnt = 1;

function* infiniteSequence() {
  while (true) {
    yield cnt++;
  }
}

const seq = infiniteSequence();

console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
