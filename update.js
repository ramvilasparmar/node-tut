const res = require('express/lib/response');
const dbConnect = require('./mongodb');

const updateData = async()=>{
    let db = await dbConnect();
    let result = await db.updateOne(
        { name:'max pro 6' },{
            $set:{name:'max pro 6',price:550}
        }
    );
    console.warn(result);
}

updateData();