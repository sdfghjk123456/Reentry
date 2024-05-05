const mongoose = require("mongoose");

const DB = "mongodb+srv://lakkuntlanaveen03:geErb3RDcWnRrkiW@cluster0.nkkw0jx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const DB = process.env.DATABASE
mongoose.set("strictQuery", false);
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})