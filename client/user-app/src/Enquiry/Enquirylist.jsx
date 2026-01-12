import React from 'react';
import { Label, TextInput, Textarea, Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow  } from 'flowbite-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Enquirylist({data, getallenquiry, setFormData}){
  let deleteRow =(delid)=>{
    axios.delete(`http://localhost:8020/api/website/enquiry/Delete/${delid}`)
    .then((resp)=>{
      toast.success('Enquiry Deleted successfully')
      getallenquiry();
    }).catch((err) => toast.error("Delete failed"));


  }

  let editrow = (editID) =>{
    axios.get(`http://localhost:8020/api/website/enquiry/single/${editID}`)
    .then((resp)=>{
      let data= resp.data
      setFormData(data.enquiry)
      
      getallenquiry();
    }).catch((err) => toast.error("Edit failed"));
  }

  return(
    <>
    <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 overflow-x-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Enquiry List</h3>
          
          {/* Changed Table tags to match your named imports */}
          <Table hoverable>
            <TableHead>
              <TableHeadCell>SR NO</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell>
                  Edit
                </TableHeadCell>
                <TableHeadCell>
                  Delete
                </TableHeadCell>
            </TableHead>
            
            <TableBody className="divide-y">
              {/* Added 'data &&' to prevent the undefined length crash */}
          {data && data.length >= 1 ? (
            data.map((item, index) => {
              return (
                <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.message}</TableCell>
                  
                  {/* Action Buttons styled like the video */}
                  <TableCell>
                    <button onClick={()=>deleteRow(item._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                      Delete
                    </button>
                  </TableCell>
                  
                  <TableCell>
                    <button onClick={()=>editrow(item._id)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell colSpan={7} className="text-center py-4 font-medium text-gray-900">
                No Data Found
              </TableCell>
            </TableRow>
          )}
              
            </TableBody>
          </Table>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
            </>

  )
}