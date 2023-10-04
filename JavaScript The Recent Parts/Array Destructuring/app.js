function data(){
    return [1,2,3,4,5,6,7]
}
var tmp = data();
var first = tmp[0]
var second = tmp[1]
var third = tmp[2]
var rest1 = tmp.slice(3); // we are taking the rest of them
// this is only way without destructuring

// let's try with destructring

var [
    first,
    second,
    thing
] = data();

console.log(rest1);

// we can do like this too 👇 but without decruturing
{
    let tmp = data();
    let first,second,third,fourth;
first = tmp[0];
second = tmp[1];
third = tmp[3]; 
fourth = tmp.slice(3);
}

// let's try with decruturing

{
    let first,second,third,fourth;
    [
        first,
        second,
        third,
        ...fourth
    ] = data()

//  or

    let tmp;
    [
        first,
        second,
        third,
        ...fourth
    ] = tmp = data()

}


{
    //  what if we don't want secong one 
    let tmp = data();
    let first = tmp[0]
    // let second = tmp[1]  is that simple is'nt 
    let third = tmp[2]
    let remaining = tmp.slice(3);
}
{
    //  let see same thing in decructuring
    let [
        first,
        ,
        third,
        ...fourth
    ] = data()
    console.log(first,third);
}


// swap this
let x = 10;
let y = 20;
{
    let tmp = x;
    x = y;
    y = tmp;

}
//  let's try with desruc...

[x,y] = [y,x] //  is'nt that simple;



// parameter Arrays 

{
    function data(tmp){
        let [
            first,
            second,
            third,
        ] = tmp;
    }
    data([1,2,3,4,5,6,7])
}

//  we can do this too
{
    function data([
        first,
        second,
        third
    ]){
        //...

    }
    data([1,2,3,4,5])
}


//  what if we are in some problem that functions is not returning array 

{
    //  problem :->
    function data(){
        return null
    }
    let tmp = data();
    let first = tmp[0]
    let second = tmp[1]
    let third = tmp[2]
    let remaining = tmp.slice(3);
}
{
    //  solution :->
    function data(){
        return null
    }
    let tmp = data() || []; //  
    console.log(tmp);   // <-----
    let first = tmp[0]
    let second = tmp[1]
    let third = tmp[2]
    let remaining = tmp.slice(3);
}

// let's try with destructuring 

{
    function data(){
        return null
    }
    let [
        first,
        second,
        third,
    ] = data() || []

    console.log(first);
}

// let's try this in functions

{
    function data(tmp = []){ // passing default values
        let [
            first,
            second,
            third
        ] = tmp
    }
}
{
    function data([
        first,
        second,
        third
    ]= []){
        //...
    }
}



// Nested Array destructuring

{
    function data(){
        return [1,[2,3],4];
    }
    let tmp = data();
    
    let first = tmp[0];
    let tmp2 = tmp[1] || []; // in case of undefined
    let second = tmp2[0];
    let third = tmp2[1];
    let fourth = tmp[2];

}
{
    function data(){
        return [1,[2,3],4];

    }
    let tmp;
    let [
        first,
        [
            second,
            third
        ] = [],
        fourth
    ] = tmp = data() || []
}

{
    function data(){
        return [1,[2,3],4];

    }
    let tmp;
    let [
        first,
        second,
        thing
    ] = tmp = data()
}

// Sample array
const colors = ['red', 'green', 'blue'];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;

// Using the extracted values
console.log(firstColor);   // red
console.log(secondColor);  // green
console.log(thirdColor);   // blue
