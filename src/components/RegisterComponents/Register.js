import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { _apiurluser } from '../../ApiUrl';

function Register() {
  
  const [ output , setOutput ] = useState();
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile] = useState() ;
  const [ city , setCity ] = useState();
  const [ address , setAddress ] = useState();
  const [gender,setGender] = useState();
  
 
  const handleSubmit=()=>{
    const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"city":city,"address":address,"gender":gender}; 
    axios.post(_apiurluser+"save",userDetails).then((response)=>{
    //  setOutput("User register successfully....");    
    alert("User register successfully....")
     setName("");
     setEmail("");
     setPassword("");
     setMobile("")
     setCity("")
     setAddress("");
    }).catch((error)=>{
     console.log(error); 
     alert("User register if Failed....")
     
    });
   };
      return(
       <>
            <section class="testimonial py-5" id="testimonial">
    <div class="container">
        <div class="row ">
            <div class="col-md-4 py-5 bg-primary text-white text-center ">
                <div class=" ">
                    <div class="card-body">
                        <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{"width":"30%"}}/>
                        <h2 class="py-3">Registration</h2>
                        <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.

</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8 py-5 border">
                <h4 class="pb-4">Please fill with your details</h4>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <input id="Full Name" name="Full Name" placeholder="Full Name" class="form-control" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                       
                        <div class="form-group col-md-6 ">
                          <input type="password" class="form-control"  placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div class="form-group col-md-6">
                            <input id="Mobile No." name="Mobile No." placeholder="Mobile No." class="form-control" required="required" type="text" value={mobile} onChange={e => setMobile(e.target.value)}/>
                        </div>
                      </div>
                    <div class="form-row">
                       
                        <div class="form-group col-md-6">
                        </div>
                        <div class="form-group col-md-6">
                                  
                                  <select id="inputState" class="form-control" value={gender} onChange={e => setGender(e.target.value)}>
                                    <option selected>Choose Gender</option>
                                    <option> Male</option>
                                    <option> Female</option>
                                  </select>
                        </div>
                        <div class="form-group col-md-12">
                                  <textarea id="comment" name="comment" cols="30" rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                        </div>
                    </div>
                   
                    <div class="form-row">
                        <button type="button" onClick={handleSubmit} class="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

       </>
    );
}

export default Register;