const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors({origin:'*'}))
app.use(express.json());
app.use(require('./routes/route'))
app.listen(5000,(req,res)=>{
    console.log("port is running")
})
