const express=require('express');
const app=express();


app.use("/hello",(req,res)=>{
res.send("hello hello hello ");
}
);
app.use("/test/4",(req,res)=>{
res.send("hello from the  ");
}
);
app.use("/test",(req,res)=>{
res.send("hello from the server ");
}
);
//app.use("/",(req,res)=>{
//res.send("Namste node js ");
//}
//);

app.listen(7777,()=>{
    console.log("server running on port 3000");
});
