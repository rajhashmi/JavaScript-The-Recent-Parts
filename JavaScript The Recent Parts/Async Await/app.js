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


// async function age() {
//     return 19;
//   }

// async function main(){
//     let agee = await age();
//     console.log(agee);
// }
// console.log(main());
  

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate fetching data from a server
        const data = { name: 'John', age: 30 };
        resolve(data); // Resolve the promise with the data
      }, 1000);
    });
  }
  
  fetchData()
    .then((result) => {
      // This callback is executed when the Promise is resolved
      console.log('Data:', result);
    })
    .catch((error) => {
      // This callback is executed if there's an error
      console.error('Error:', error);
    });
  