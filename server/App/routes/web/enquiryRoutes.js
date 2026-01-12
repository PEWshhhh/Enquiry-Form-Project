let express = require("express")
const { enquiryinsert, enquirylist, enquirysinglerow, enquirydelete, enquiryupdate } = require("../../Controller/web/enquirycontrol")
let enquiryroute=express.Router()

enquiryroute.post('/Insert', enquiryinsert)
enquiryroute.get('/Veiw', enquirylist)
enquiryroute.delete('/Delete/:id', enquirydelete)
enquiryroute.get('/single/:id', enquirysinglerow )
enquiryroute.put('/Update/:id', enquiryupdate )
module.exports = enquiryroute
