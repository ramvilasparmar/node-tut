const http = require('http');


http.createServer((req, res)=>{
    res.write("<h1>Hello this is ram</h1>");
    res.end();
}).listen(5000);


// function test(a)
// {
//     return a*10;
// }
///////////////below & above both code are same///////// 
// const test =(a)=>a*10;