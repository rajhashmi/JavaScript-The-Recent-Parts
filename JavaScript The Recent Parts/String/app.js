//  Template String

let string = `Hello World`;

// Tagged Templates 

var amount = 12.3;

var msg = 
        formatCurrency
`the total for your order is ${amount}`;


function formatCurrency(string,...value){
    var str = '';
    for(let i = 0; i< string.length;i++){
        if(i>0){
            if(typeof value[i-1] =='number'){
                str+= `$${value[i-1].toFixed(2)}`
            }else{
                str += value[i-1];
            }
        }
        str += string[i]
    }
    return str
}
console.log(msg);





let names = 'shahid hashmi';
let age = 19;
let tool = 'javaScript';

let intro = upper`hello ${names} your age is ${age} and your tool ${tool}`

function upper(string,...value){
  var ret = "";
  for(let i =0; i<string.length;i++){
    if(i>0){
      ret += String(value[i-1]).toUpperCase();
    }
    ret += string[i]
  }
  return ret
}
console.log(intro);



// ===================================  String padding & String trimming

// 1. padding

var str = "hello"

str.padStart(5); // 'Hello' 
//  we are not saying how much padding we need we are saying give me 5 padding with LENGTH

str.padStart(8); // '   Hello'

str.padStart(8,"*"); // '***Hello';

str.padStart(8,'12345'); // '123Hello'

str.padStart(8,'ad'); // 'abaHello';