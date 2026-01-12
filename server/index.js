let express = require("express")
let mongoose = require("mongoose")
const enquiryroute = require("./App/routes/web/enquiryRoutes")
var cors = require("cors")
require("dotenv").config()
let app = express()
app.use(cors())
app.use(express.json())
//routes
app.use('/api/website/enquiry', enquiryroute)



mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT || 3000, ()=>{
        console.log("Server is running." )
    })
}).catch((err)=>{
    console.log(err)
})
