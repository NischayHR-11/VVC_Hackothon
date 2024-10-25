const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mo") 

app.set("view engine","ejs");                                    // When The Response Is 'Rendered' default path to access.
app.set("views",path.join(__dirname,"/views"));               
app.use(express.static(path.join(__dirname,"/public")));         // Default middleware : for default paths.
app.use(express.urlencoded({extended:true}));    

app.listen(port,(req,res)=>{
    console.log("Server Started..");
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/email",(req,res)=>{
    res.render("email.ejs");
});

app.get("/scan",(req,res)=>{
    res.render("scan.ejs");
});

app.post("/scaning",(req,res)=>{
    res.render("scaning.ejs");
});

app.post("/report",(req,res)=>{
    res.render("report.ejs");
});

app.post("/it",(req,res)=>{
    res.render("it.ejs");
})