const express = require('express')
const app = express();
require('./routes/route')
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{console.log("Running on port")});

