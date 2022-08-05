const express =require("express")
const app = express();
const http = require("http")
require("dotenv").config();
const bodyParser=require("body-parser")
const mongoose= require("mongoose")
var server=http.createServer(app)

// const jwt = require('jsonwebtoken')
// let bodyParser = require("body-parser");
mongoose.connect(process.env.DB,{ useUnifiedTopology: true,useNewUrlParser: true });
const db=mongoose.connection;


const publicRoute =require("./Routes/notesRoutes")
const adminRoutes =require("./Routes/adminRoutes")
const PORT =process.env.PORT

app.use(
    bodyParser.json({
      limit: "50mb"
    })
  );

app.use('/',publicRoute)
app.use("/admin", adminRoutes);


server.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`)
    
});
  