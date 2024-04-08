const express=require("express");
const path=require("path");


const app=express();

const port=4000;

const disease=require("./MOCK_DATA (6).json")

const hospitals=require("./hospitals.json")



app.use(express.static(path.join(__dirname,"public")))



app.use(express.urlencoded({extended:false}))


// app.get("/disease",(req,res)=>{
//     const html=`
//     <ul>
//     ${disease.map((dis)=>{
//         `<li>${dis.name}</li>`})}
//     </ul>`
//     res.send(html)
// })


app.get("/api/disease",(req,res)=>{
    return res.json(disease)

})
app.get("/api/hospitals",(req,res)=>{
    return res.json(hospitals)

})
app.get("/api/disease/:id",(req,res)=>{
    
    const id=Number(req.params.id);
    const problem=disease.find((user)=>user.id===id);
    return res.json(problem);

})
app.get("/api/hospitals/:id",(req,res)=>{
    
    const id=Number(req.params.id);
    const hosp=hospitals.find((use)=>use.id===id);
    return res.json(hosp);

})





app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})