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
            if(typeof value[i-1] =='numbeer'){
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