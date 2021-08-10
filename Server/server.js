const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors');
const router = require('./routers/studentRouters')
const db = require('./DB/Index')
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
db.on('error',()=>{console.log("fgfgfghfhgf");})

app.use('/student', router);

// app.get('/', (req, res)=>{
//   res.send("gooooooood")
// })

app.listen(PORT, (error) => {
  if (error) return "error"
  console.log("The Server is on air, in port:27017");
});

//*************************/
if(process.env.NODE_ENV === 'production'){
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../Client/build')));
  // Handle React routing 
  app.get('*',(req,res)=>{
      res.sendFile(path.join(__dirname, '../Client/build','index.html'))
  })
}
//*************************/
