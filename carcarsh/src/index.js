const express = require('express')
// const cors =require('cors')
const app = express()
const port = process.env.port || 3000
const requests = require('requests')
app.use(express.json())


app.get('/crashcar' ,async (req,res)=>{
    try{
        requests('https://data.cityofnewyork.us/resource/h9gi-nx95.json').on('data', function(chunk){
            // console.log(chunk)
            res.write(chunk)
            res.end()
            
        }).on('end',function(err){
            if (err) console.log(err)
            console.log("end")
        })
    }
    catch(e)
    {
        res.send("Some error occured")
    }
})


app.listen(port,()=>{
    console.log("Listening over the port")
})
