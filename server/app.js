const express  = require('express')



const port=3001;
const app = express();

app.get('/',(req,res) => {
    res.send("hello world!");
})

app.listen(port,() =>{
    console.log(`app listening at ${port}`)
})