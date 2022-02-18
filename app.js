const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
const staticFilePath = path.join(__dirname,"public");
app.use(express.static(staticFilePath));
app.listen(3000,()=>{
    console.log("Server Running...");
});