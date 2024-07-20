
const mongoose=require('mongoose')

const mongoURI='mongodb+srv://Hulk:rzXh7tHs7rtxMZ9s@cluster0.ep0pd5y.mongodb.net/FoodApp'


const mongoToConnect=()=>{
    mongoose.connect(mongoURI).then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})
}

module.exports=mongoToConnect




