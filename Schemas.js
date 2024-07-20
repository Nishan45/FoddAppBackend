const mongoose=require('mongoose')

const MenuItemsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:25
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
    },
    category:{
        type:String
    }


},{timestamps:true});
    


const MenuItems=mongoose.model("MenuItems",MenuItemsSchema);

module.exports={
    MenuItems
};