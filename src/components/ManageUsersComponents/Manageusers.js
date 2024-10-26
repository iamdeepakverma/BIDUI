import { useState , useEffect } from "react";
import axios from "axios";
import { _apiurluser } from "../../ApiUrl";
import { useNavigate } from 'react-router-dom';

function Manageusers(){
    const navigate = useNavigate();
    const [ userDetails , setUserDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_apiurluser+"fetch").then((response)=>(
            // console.log(response.data)
            setUserDetails(response.data)
        )).catch((error)=>{
            console.log(error)
        })
    });  
    const changeStatus=(_id,status)=>{
        //alert(_id+"-----"+status);
        if(status=="active")
        {
          let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};
          axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            navigate("/manageusers");
          });       
        }
        else if(status=="Inactive")
        {
          let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};
          axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            navigate("/manageusers");
          });
        }
        else
        {
          let s=window.confirm("Are u sure u want to delete?");
          if(s==true)
          {
           let deleteDetails={"data":{"_id":_id}};
           axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
             navigate("/manageusers");
           });
          }
          else
           alert("User not removed....."); 
        }
      };
    return(
        <>
        <br/>
        <table class="table table-bordered">
            <tr>
                <th>RegId</th>
                <th>Name</th>
                <th>Emails</th>
                <th>Mobile No</th>
                <th>Gender</th>
                <th>Password</th>
                <th>Address</th>
                <th>Info</th> 
                <th>status</th>
                <th>Action</th>
                
            </tr>

            {
                userDetails.map((row)=>(
                    <tr>
                        <th>{row._id}</th>
                        <th>{row.name}</th>
                        <th>{row.email}</th>
                        <th>{row.mobile}</th>
                        <th>{row.gender}</th>
                        <th>{row.password}</th>
                        <th>{row.address}</th>
                        <th>{row.info}</th>
                        <th>
                            {row.status==1 && <font color="green">Active</font>}
                             {row.status==0 && <font color="orange">Inactive</font>}
                             </th>
                        <th>
                            {row.status==1 && <font onClick={()=>{changeStatus(row._id,"active")}}><i class="fa-solid fa-pencil" style={{"color": "#47469b"}}></i></font>}
                            {row.status==0 && <font onClick={()=>{changeStatus(row._id,"Inactive")}}><i class="fa-solid fa-pencil" style={{"color": "#47469b"}}></i></font>}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <font onClick={()=>{changeStatus(row._id,"delete")}}><i class="fa-solid fa-trash-arrow-up" style={{"color": "#ff0000"}}></i></font>
                        </th> 
                        </tr>
                ))
            }
        </table>
        </>
    );
}
export default Manageusers;