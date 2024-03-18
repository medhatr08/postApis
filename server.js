const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.sendFile("./index.html");
})
app.post("/addData",(req,res=>{
    const {data}=req.body.dat;
    let da=[];
    let ob={
        is_succcess:"true",
        user_id:"john_doe_17091999",
        email:"john@xyz.com",
        roll_number:"ABCD123",
        oddnumbers:[],
        even_numbers:[],
        alphabets:[],
    }
    let i=0,j=0,k=0;
    data.forEach(element => {
        if(Character.isDigit(element)){
            if(element%2==0){
                ob.even_numbers[i++]=element;
            }
            else{
                ob.oddnumbers[j++]=element;
            }
        }else{
            ob.alphabets[k++]=element.toUpperCase();
        }
        
    });
    da.push(ob);
    res.status("200").json(da);
}))

app.listen(5000,(err)=>{
    console.log("server Started")
})