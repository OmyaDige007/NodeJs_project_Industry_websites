const express=require('express')
const { route } = require('express/lib/application')


const Detail = require("../models/Detail");
const Slider = require('../models/Slider');
const Service =require("../models/Service");
const Contact =require("../models/Contact")


const routes=express.Router()

routes.get("/", async (req,res)=>{

   const details= await Detail.findOne({"_id":"64b252073389b4927d9a20ba"})
   const slides = await Slider.find()
   const services=await Service.find()

   // console.log(slides)
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.get("/gallery", async(req,res)=>{
    const details= await Detail.findOne({"_id":"64b252073389b4927d9a20ba"})

    res.render("gallery",{
        details:details
    });
});

//proces contact form
routes.post("/process-contact-form",async(request,response)=>{
    console.log(request.body)

    //save the data to db
    try{
        const data= await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    }
    catch(e){
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes