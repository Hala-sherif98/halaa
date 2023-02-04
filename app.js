const express = require('express');

const app = express();
const port = 3000;


app.use(express.json())
app.get ('/', (req,res,next)=>{

    res.status(200).send('hell world')
})

app.listen(port,()=>{

    console.log(`this app is listening on port${port}`)
})