const mongoToConnect=require('./database')
mongoToConnect()

const compression=require('compression')
const express = require('express')
const app = express()
const port = 3000
const Cors=require('cors')


app.use(Cors())
app.use(express.json());
app.use(compression({level:6,threshold:0}))

const MenuItems=require('./Schemas').MenuItems

app.post("/AddMenuItems",async(req,res)=>{
    const data=req.body;

    await MenuItems.create({
        name:data.name,
        price:data.price,
        stock:data.stock,
        image:data.image,
        category:data.category
      }).then(items=>
        {
            
            res.sendStatus(200);

        })
      .catch(e=>console.log(e))

      //res.sendStatus(200);
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

