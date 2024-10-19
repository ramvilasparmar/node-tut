const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (res, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send({ data })
});

app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = data.insertOne(req.body);
    console.log(req.body);
    resp.send(req.body);
});

app.put('/:name', async (req, resp) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {name : req.params.name},
        { $set : req.body}
    )
    console.log(req.body)
    resp.send({result : "Update"});
})

app.delete('/:id', async (req, resp) => {
    const data = await dbConnect();
    const result = await data.deleteMany({
        _id : new mongodb.ObjectId(req.params.id)
    })
    resp.send(result);
})

app.listen(5000); 