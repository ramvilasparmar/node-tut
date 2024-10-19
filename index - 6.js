const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String
});


const saveInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"M 10",
        price:1000,
        brand : "Maxx",
        category : "mobile"});
    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.updateOne(
        { brand : "Maxx" },
        {
            $set : {name:'Maxx 15'}
        }
    )
    console.warn(data);
}

const deleteInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.deleteOne({name:"M 10"});
    console.log(data);
}

const findInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.find();
    console.log(data);
}

findInDB();