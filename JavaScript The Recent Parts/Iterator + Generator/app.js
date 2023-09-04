let str = "Hello";
let str2 = ["H", "e", "l", "l", "o"];

let itemOne = str[Symbol.iterator]();
console.log(itemOne.next()); // { value: 'H', done: false };
console.log(itemOne.next()); // { value: 'e', done: false };
console.log(itemOne.next()); // { value: 'l', done: false };
console.log(itemOne.next()); // { value: 'l', done: false };
console.log(itemOne.next()); // { value: 'o', done: false };
console.log(itemOne.next()); // { value: undefined, done: true };

// objects not Iterbles

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let v in str2) {
  console.log(v);
}

let arr = [100, 200, 300];

function IteretorFunction(values) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < values.length) {
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true
        };
      }
    },
  };
}
let iterators = IteretorFunction(arr);
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());


// ===================================================== function Generator ===========

function* GeneratorFunction(){
  yield 1;
  yield 2;
}
let Generator = GeneratorFunction()
console.log(Generator.next());
console.log(Generator.next().value);
console.log(Generator.next());
console.log(Generator.next());


let numbers = {
  *[Symbol.iterator]({
    start = 0,
    end = 100,
    step = 1
  }={}){
    for(let i = start; i<=end; i+=step){
      yield i;
    }
  }
}
console.log(`the lucky number are: ${
  [...numbers[Symbol.iterator]({
    start: 6,
    end:30,
    step:4
  })]
}`)