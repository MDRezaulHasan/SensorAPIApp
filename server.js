const express = require("express"),
mongoose = require("mongoose"),
bodyParser = require("body-parser");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

const path = require("path");
const exphbs = require("express-handlebars");


const appRouter = require("./routes")

const app = express();
const PORT = 3000;
const URL = "mongodb://localhost:27017/raspberryPiDB?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("views",path.join(__dirname,"/views/"));
app.engine("hbs", exphbs({extname:"hbs",defaultLayout:"mainLayout",layoutsDir:__dirname + "/views/layouts"}));
app.set("view endine","hbs")
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection;

app.get("/",(req,res)=>{
    res.send("Express is running successfully!");
})

app.use("/api",appRouter)
//console.log(appRouter)
app.listen(PORT, ()=>{
    console.log("server is running in port: "+PORT);
})
