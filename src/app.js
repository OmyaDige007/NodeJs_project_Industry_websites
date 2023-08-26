const express= require("express")
const { request } = require("http")

const hbs = require("hbs")
const app= express()
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const routes =require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")



//static/css/style.css
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)


//(template engine)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")


//db connection
 mongoose.connect("mongodb://localhost/website_tut",

// Service.create([
//     {
//         icon:'fab fa-accusoft',
//         title:'Provide Best Courses',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.learncodewithdurgesh.com',
//         link:'Check'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'Software Development',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.learncodewithdurgesh.com',
//         link:'Learn'
//     },
//     {
//         icon:'fa fa-life-ring',
//         title:'Provide Best Courses',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.learncodewithdurgesh.com',
//         link:'Check'
//     },
//     {
//         icon:'fa fa-adjust',
//         title:'Support for projects',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.learncodewithdurgesh.com',
//         link:'Check'
//     },
//     {
//         icon:'fa fa-audio-description',
//         title:'24 hour Support',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.learncodewithdurgesh.com',
//         link:'Check'
//     },
//     {
//         icon:'fa fa-life-ring',
//         title:'Learn projects',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.learncodewithdurgesh.com',
//         link:'Check'
//     }
// ])


//  Slider.create([
//     {
//         title:"Learn Java in very easy method",
//         subTitle:"Java is one of most popular programming langauge",
//         imageUrl:"https://images7.alphacoders.com/122/1228014.png",
//          class:"active"
        
//     },
//     {
//         title:"What is Django in python?",
//         subTitle:"Django is most famous web framework of python programming",
//         imageUrl:"https://e0.pxfuel.com/wallpapers/963/402/desktop-wallpaper-computer-programming-coding-technology.jpg"
//     },
//     {
//         title:"Learn Java in very easy method",
//         subTitle:"Java is one of most popular programming langauge",
//         imageUrl:"https://c4.wallpaperflare.com/wallpaper/371/264/21/itzmauuuroo-hackers-anonymous-hd-wallpaper-preview.jpg"
//     }
// ])


    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"services"
    //         },
    //         {
    //            label:"Gallery",
    //            url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
)

app.listen(process.env.PORT | 5556, ()=>{
    console.log("server start")
});
    