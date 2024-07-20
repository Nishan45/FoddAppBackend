const { default: axios } = require("axios");

const send=async()=>{

    await axios.post("http://192.168.175.175:3000/AddMenuItems",{
        name:"Pizza",
        price:399,
        stock:41,
        image:"ksksk",
        category:"ksksk"
    }).then(res=>{
    console.log(res.status);
    })
}
send()