const { default: mongoose } = require("mongoose");
const { version, hostname } = require("os");

// main().then((res)=>{

//     console.log("database connected.....");
// }).catch((err)=>{

//     console.error(err);
// });

// async function main() {
    
//     await mongoose.connect("mongodb://127.0.0.1:27017/hacko");
// }

    const dataschema= new mongoose.Schema({

        name:{
    
            type:String,
            return:true,
        },
        version:{
    
            type:String,
            return:true,
        },
        hostname:{
    
            type:String,
            return:true,
        },
        contactNo:{
    
            type:Number,
            return:true,
        },
        concern:{
    
            type:String,
            return:true,
        },
        email:{
    
            type:String,
            return:true,
        },
        ProjectId:{
    
            type:String,
            return:true,
        },
        
    
    });

    const data= mongoose.model("data",dataschema);

    module.exports=data;