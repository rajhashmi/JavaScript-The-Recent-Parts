//  look ahead
let message = 'hello world';

message.match(/(l.)/g)
// ['ll',ld];

message.match(/(l.)$/g)
// ['ld']

message.match(/(l.)(?=o)/)
// ['ll']

message.match(/(l.)(?!o)/)
//  ['lo', 'ld'];


// look behind

message.match(/(?<=e)(l.)/) // this positive look Behind not supported in all browers

message.match(/(?<!e)(l.)/)
// ['lo','ld']