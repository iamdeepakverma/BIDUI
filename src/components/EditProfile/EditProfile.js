import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom'

function Editprofile(){
    const navigate = useNavigate();  
    const [ output , setOutput ] = useState();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ address , setAddress ] = useState();
    const [ city , setCity ] = useState();
    const [ gender , setGender ] = useState();

    useEffect(()=>{
        axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")).then((response)=>{
          setName(response.data[0].name);
          setEmail(response.data[0].email);
          setMobile(response.data[0].mobile);
          setAddress(response.data[0].address);
          setCity(response.data[0].city);
        }).catch((error)=>{
          console.log(error);  
        });  
      },[]); 
      
      const handleSubmit=()=>{
        let updateDetails={"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
          setOutput("Profile edited successfully....");
          navigate("/epadmin");
          // setName("");
          // setEmail("");
          // setMobile("");
          // setAddress("");
          // setCity("");
          // setGender("");
        });       
       };
      
    return(
        <>
        <br/><br/>
       {/* About Start */}
<div class="container  shadow p-5">
<div class="row g-0">
<div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Edit Profile <span class="text-primary">Here!!!</span></h1>
<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea rows="5" class="form-control"  ></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
    <option>Select City</option>
    <option>Indore</option>
    <option>Bhopal</option>
    <option>Ujjain</option>
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    Male <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} checked />
    &nbsp;&nbsp;
    Female <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
  </div>
  <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-danger" >Submit</button>
  <br/><br/>
</form>
</div>
</div>
</div>
{/* About End */}

<br/>
<br/>

        </>
    );
    }

export default Editprofile;