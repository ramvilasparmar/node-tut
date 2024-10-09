const express = require('express');
const app = express();
const path = require('path')
const publicPath=path.join(__dirname,'public')
app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    const user = {
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
        skills:['php','js','c++','java','node']
    }
   resp.render('profile',{user});
});

app.get('/login',(_,resp)=>{
    resp.render('login');
    })


app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/nopage.html`)
});


app.listen(5000);
