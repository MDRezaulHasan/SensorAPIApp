const express = require("express");
const dataController = require("./controllers/DataController")
const Router = express.Router();
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
Data = require("./models/DataModel");

Router.get("/",(req,res)=>{
    res.sendFile("index.html",{
        root: __dirname
            });
})

var tmpData = null

Router.get("/data",(req,res)=>{
    Data.get((err,datas)=>{
        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }
      
        res.send(datas)
        tmpData = datas;
        console.log(tmpData)
    })
})

//document.getElementById("displayData").innerHTML= tmpData;
const dom = new JSDOM(`file:///D:/Scientific%20Writting_II2202/SensoreDataReaderApp/index.html`).window.document;
console.log(dom.getElementById("input"));
module.exports = Router;