const res = require('express/lib/response');
const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({name : 'max 5'})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("Record Deleted");
    }
}

deleteData();