// import { useState , useEffect } from './react'
import { useState , useEffect } from "react";
import axios from "axios";
import { _apiurluser } from "../../ApiUrl";
import { useNavigate } from "react-router-dom";


function ChangePassword(){

    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ opassword , setOldPassword ] =useState();
    const [ nPassword , setNewPassword ] = useState();
    const [ cnewpassword , setConfirmnNewPassword ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();

    
    const handleSubmit=()=>{
        
        axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
            if(nPassword==cnewpassword)
            {
                let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnewpassword}};
                axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
                setOutput("Password changed successfully");
                setOldPassword("");
                setNewPassword("");
                setConfirmnNewPassword("");
        });
            }
            else
            {
            setOutput("New & Confirm New Password Not Match")
            setNewPassword("")
            setConfirmnNewPassword("")
            }
    }).catch((error)=>{
         console.log(error)  
         setOutput("Invalid OldPassword")     
    });
}
    
    
    return(
  
        <>
        <div  class="container display-8 mb-4 header-1">
              <h1>Change Password</h1>
              </div>
              <div className="container-fluid bg-secondary my-5">
        <div className="container ">
            <div className="row ">
                <div className="col-lg-5">
                    <div className="bg-white py-2 px- px-sm-5 from-2">
                        <form className="py-5 ">
                            <div className="form-group form-form">
                                <input type="text" className="form-control border-0 p-4" placeholder="Old Password" required="required" value={opassword} onChange={e => setOldPassword(e.target.value)}/>
                            </div>
                            <div className="form-group form-form">
                                <input type="text" className="form-control border-0 p-4" placeholder="New Password" required="required" value={nPassword} onChange={e => setNewPassword(e.target.value)}/>
                            </div>
                            <div className="form-group form-form">
                                <input type="text" className="form-control border-0 p-4" placeholder="Confirm New Password" required="required" value={cnewpassword} onChange={e => setConfirmnNewPassword(e.target.value)}/>
                            </div>
                            <div>
                                <font>{output}</font>
                                <button className="btn btn-danger btn-block border-0 py-3 buttonn" onClick={handleSubmit} type="button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        </>
    );
    }

export default ChangePassword;