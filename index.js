const express=require("express");
const path=require("path");


const app=express();

const port=4000;

const disease=require("./MOCK_DATA (6).json")



app.use(express.static(path.join(__dirname,"public")))



app.use(express.urlencoded({extended:false}))


app.get("/disease",(req,res)=>{
    const html=`<ul>
    ${disease.map((dis)=>{
        `<li>${dis.disease_name}</li>`
    
    })}</ul>`
    res.send(html)
})


app.get("/api/disease",(req,res)=>{
    return res.json(disease)

})





app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})