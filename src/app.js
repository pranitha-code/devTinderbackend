const express=require('express');
const app=express();

app.use("/",(req,res)=>{
res.send("Namste node js ");
}
);
app.use("/hello",(req,res)=>{
res.send("hello hello hello ");
}
);
app.use("/test",(req,res)=>{
res.send("hello from the server ");
}
);

app.listen(7777,()=>{
    console.log("server running on port 3000");
});
