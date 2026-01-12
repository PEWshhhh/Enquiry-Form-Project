let mongoose = require("mongoose")
let Schema = mongoose.Schema

let enquiryschema = new Schema({

    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },

    phone:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }
})

let enquirymodel = mongoose.model('Enquiry', enquiryschema)
module.exports = enquirymodel