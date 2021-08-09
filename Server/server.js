const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
const router = require('./routers/studentRouters')
const db = require('./DB/Index')
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
db.on('error',()=>{console.log("fgfgfghfhgf");})

app.use('/student', router);

app.get('/', (req, res)=>{
  res.send("gooooooood")
})

app.listen(27017, (error) => {
  if (error) return "error"
  console.log("The Server is on air, in port:27017");
});


