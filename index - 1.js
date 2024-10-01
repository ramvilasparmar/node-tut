// const app = require('./app')
// console.warn(app.z());

// var x = 20;
// let y = 30;
// const z = 40;
// console.warn(x+y+z);

// const arr = [2,4,7,1,3,8,3];
// let result = arr.filter((item)=>{
//     return item >=4
// });
// console.warn(result);

const fs = require('fs');
fs.writeFileSync("hello.txt", "hello world"); // create file hello.txt
