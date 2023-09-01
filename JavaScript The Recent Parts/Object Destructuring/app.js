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
    let first,second
    // now there is a catach when we use curly parentensis the parsing wil think it's block

    ({
        a: first,
        c: second
    })
    console.log(second);
}