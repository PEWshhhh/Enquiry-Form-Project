const enquirymodel = require("../../Model/enquiry.model")

let enquiryinsert = (req, resp)=>{
    let enquiryobj =new enquirymodel ({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message:req.body.message
    })
    enquiryobj.save().then(()=>{
        console.log("data saved")
        resp.send({
            status: 1,
            msg: "Enquiry saved successfully"
        })
    }).catch((err)=>{
            resp.send({
                status: 0,
                msg:"Error Occured! enquiry not saved"
            })
            
        })
    // console.log(obj)

}

let enquirylist= async (req,resp) =>{
    let enquiry = await enquirymodel.find();
    resp.send({
      status:1,
      enquiry:enquiry
    })

  }

let enquirydelete = async (req,resp) =>{
    let enID = req.params.id
    let enquiry = await enquirymodel.deleteOne({_id:enID})
    resp.send({
        status:1,
        message:"Enquiry Deleted Successfully", 
        enquiry

    })

}

let enquirysinglerow=async (req,resp)=>{
    let enID = req.params.id
    let enquiry = await enquirymodel.findOne({_id:enID})
    resp.send({
        status:1,
        enquiry
    })
}

let enquiryupdate = async (req,resp)=>{
    let enID = req.params.id
    let enquiryobj = ({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message:req.body.message
    })
     let enquiry = await enquirymodel.updateOne({_id:enID}, enquiryobj)
     resp.send({
        status:1,
        message:"Enquiry Updated Successfully",
        enquiry
    })
}

module.exports = {enquiryinsert, enquirylist, enquirydelete, enquirysinglerow, enquiryupdate}