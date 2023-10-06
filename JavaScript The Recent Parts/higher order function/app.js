function higherOrderFunction(callback) {
    let myName = "Shahid";
    callback(myName);
}

function callBackFunction(name) {
    console.log(`Name: ${name}`);
}

// Call the higher-order function and pass callBackFunction as an argument
higherOrderFunction(callBackFunction);



// when a function take another function as a argument or it return another function as result is called higher order function 