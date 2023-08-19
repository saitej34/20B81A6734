const express = require('express')
const app = express();
app.use(express.json());
app.use(require('./routes/route'))
app.listen(5000,(req,res)=>{
    console.log("port is running")
})
