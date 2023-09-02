let str = "Hello"
let str2 = [ 'H', 'e', 'l', 'l', 'o' ];

let itemOne = str[Symbol.iterator]();
console.log(itemOne.next()); // { value: 'H', done: false };
console.log(itemOne.next()); // { value: 'e', done: false };
console.log(itemOne.next()); // { value: 'l', done: false };
console.log(itemOne.next()); // { value: 'l', done: false };
console.log(itemOne.next()); // { value: 'o', done: false };
console.log(itemOne.next()); // { value: undefined, done: true };


// objects not Iterbles

let obj = {
    a:1,
    b:2,
    c:3
};
for(let v in str2){
    console.log(v);
}
