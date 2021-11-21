const a=require('express');
const app=a();

const b=require('./MOCK_DATA.json');
console.log(b);

app.get("/users",(req,res)=>{

 res.send(b);
});
app.get("",(req,res)=>{

    return res.send("welcome to home page");
    });


app.listen(2345,function(){
    console.log("listen on 2345");
})