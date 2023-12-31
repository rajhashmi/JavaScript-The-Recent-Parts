{
    function data(){
        return {a:1,b:2,c:3};
    }
    let tmp = data();
    let first = tmp.a;
    let second = tmp.b;
    let third = tmp.c;
}

//  let's try with Destructuring

{
    function data(){
        return {a:1,b:2,c:3};
    }
    let{
        a: first,
        b: second,
        c: thing
    }= data();
}

// more example 
{
    function data(){
        return {a:1,b:2,c:3};
    }
    let tmp = data();
    let first,second;
    first = tmp.a;
    second = tmp.b;
}

//  same in destructering 

{
    function data(){
        return {a:1,b:2,c:3};
    }
    // now there is a catach when we use curly parentensis the parsing wil think it's block

    let{
        a,
        c // if there is source and target same name then we can do this method
    }= data()
    console.log(c);
}

// Nested Object

{
    function data(){
        return {
            a:1,
            b:{
                c:2,
                d:4
            }
        }
    }
    let tmp = data() ||{};
    let a = tmp.a;
    let b = tmp.b;
    let c = b.c;
    let d = b.d;
}

//  let's try with destructuring 

{
    function data(){
        return {
            a:1,
            b:{
                c:2,
                d:4
            }
        }
    }
    let {
        a:first,
        b:{
            c: second = 20,
            d:third
        } = {}
    } = data()||{}
    console.log(second);
    console.log(second);
}

// parameter Objects

{
    function data(tmp = {}){
        let{
            a,
            b
        } = tmp;

        //...

    }
}

{
    function data({
        a,
        b
    }= {}){
        // ...
    }
}
// ========================== more practice ==============

let array4 = [1,2,3,4,5];
let [
    one1,
    ,
    three3,
    ...rest
] = array4

let obj4 = { coordinates: null };

let { coordinates: [a, b] = [] } = obj4 && obj4.coordinates ? obj4 : { coordinates: [] };
console.log('====================================');
console.log(a, b);
console.log('====================================');


{
    function object(){
        return {a:1,b:2,c:3}
    }
    var tmp;
    var first,second;
    tmp = {
        b: second,
        a:first
    } = object() || {}

    console.log(second,first);

}

