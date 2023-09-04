// async function Alert(){
//     return 5
// }
// Alert().then((x)=>alert(x))

async function weather() {
    let rajasthanW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rajasthan: 28 deg");
        }, 5000);
    });

    let mumbaiW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mumbai: 21 deg");
        }, 10000);
    });

    let rajasthan = await rajasthanW;
    let mumbai = await mumbaiW;

    return [rajasthan, mumbai];
}

weather().then((result) => {
    console.log(result);
});
console.log(weather().then((result) => {
    console.log(result);
}));