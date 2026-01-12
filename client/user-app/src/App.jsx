import React, { useEffect, useState } from 'react';
import './index.css'; // This brings in Tailwind
import './App.css';   // This brings in your .form-container border
import { Label, TextInput, Textarea, Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow  } from 'flowbite-react';
import Enquirylist from './Enquiry/Enquirylist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function App() {
  // State to manage form data
 
  let [enquirylist, setenquirylist] = useState([])
  let [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    _id: ''
  });



  let saveenquiry = (e) => { 

    e.preventDefault();


     if(formData._id ){
       axios.put(`http://localhost:8020/api/website/enquiry/Update/${formData._id}`, formData)
       .then((resp)=>{
             toast.success('Enquiry Updated successfully')
             setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
              _id: ''
 
             })
             getallenquiry();
           }).catch((err) => toast.error("Update failed"));

  }
  else{
    
  
  

  axios.post("http://localhost:8020/api/website/enquiry/Insert", formData).then((resp)=>{
    console.log(resp.data)
    toast.success("Enquiry Saved successfully")
    getallenquiry();
    setFormData({
    name: '',
    email: '',
    phone: '',
    message: ''
    })
  }).catch((err) => {
      console.error("Submission failed:", err);
      alert("Error: Could not connect to server.");
    });

  }
  }

 

  let getallenquiry = () => {
  axios.get("http://localhost:8020/api/website/enquiry/Veiw")
    .then((resp) => {
      return resp.data;
    })
    .then((finaldata) => {
      // Use === 1 because your backend sends status: 1
      if (finaldata.status === 1) {
        // Just use the variable name, NOT a <tag>
        setenquirylist(finaldata.enquiry || []); 
      }
      else {
        setenquirylist([]);
      }
    })
    .catch((err) => console.log("Fetch error:", err));
}

  let getvalue=(e)=>{
    let inputname = e.target.name
    let inputvalue = e.target.value
    let oldData = {...formData}

    oldData[inputname]=inputvalue;
    setFormData(oldData);

  }



 

  // // Function to update state when user types
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data Submitted:', formData);
  //   alert('Enquiry Sent Successfully!');
  // };
  
  useEffect(()=>{
    getallenquiry()
  },[])

  return (
   <>

    
  <div className="App min-h-screen bg-gray-50 p-6">
    
    
    <h2 className='text-4xl font-bold mb-10 text-center'>User Enquiry</h2>
    <div className="grid grid-cols-[30%_auto] gap-6 w-full">
    <div className="bg-white shadow-lg border rounded-2xl p-6 h-fit">
      <form onSubmit={saveenquiry} className="flex flex-col gap-4">
        <h2 className='text-4xl font-bold mb-8 text-gray-800'>Enquiry Form</h2>
        
        <div className="form-group">
          <Label htmlFor="name" value="Your Name" className="mb-2 block" />
          <TextInput 
            id="name" name="name" type="text" value={formData.name} onChange={getvalue}
            placeholder="Enter Your Name" 
             required //onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="email" value="Your Email" className="mb-2 block" />
          <TextInput 
            id="email" name="email" type="email" value={formData.email} onChange={getvalue}
            placeholder="Enter Your Email" 
              required //onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="phone" value="Your Phone" className="mb-2 block" />
          <TextInput 
            id="phone" name="phone" type="tel" value={formData.phone} onChange={getvalue}
            placeholder="Enter Your Phone Number" 
            required //onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="message" value="Your Message" className="mb-2 block" />
          <Textarea 
            id="message" name="message" value={formData.message} onChange={getvalue}
            placeholder="Enter your message here..." 
           //onChange={handleChange} 
            required rows={4} 
          />
        </div>

        <Button type="submit" color="blue" className="w-full">
  Submit {formData._id? 'Update' : 'Save' }
</Button>
      </form>
    </div>

    <Enquirylist data={enquirylist} getallenquiry={getallenquiry} setFormData={setFormData}/>




    

    

    
    
    

    
    </div>
   
  </div>
  <ToastContainer position="top-right" autoClose={3000} />
    </>
  
);
}

