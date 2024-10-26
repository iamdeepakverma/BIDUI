import './Login.css'
// import Nav from '../Navcomponent/Nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { _apiurluser } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';

function Login(){
        const navigate = useNavigate(); // Navigate is function to redirect on place to another place
        const [ output , setOutput ] = useState();
        const [ email , setEmail ] = useState();
        const [ password , setPassword ] = useState();
    
        const handleSubmit=()=>{
            const userDetails={"email":email, "password":password,};
            axios.post(_apiurluser+"login",userDetails).then((response)=>{
                console.log(response.data.userDetails);
              if(response.data.token!="error")
              {
                var obj=response.data.userDetails;
                
                localStorage.setItem("token",response.data.token);
                 localStorage.setItem("_id",obj._id);
                 localStorage.setItem("name",obj.name)
                 localStorage.setItem("email",obj.email);
                 localStorage.setItem("role",obj.role);
                 localStorage.setItem("status",obj.status);
                 (obj.role=="admin")?navigate("/admin"):navigate("/user");
                setOutput("Login Succsess");
                //alert("Login Succsessfully")
              } 
              console.log(response.data)
            
        }).catch((error)=>{
           //console.log(error.response.data.token)
            if(error.response.data.token=="error")
            {
                // setOutput("Invalid user")
                alert("Invalid User") 
                setEmail("");
                setPassword("");
            }
            
        });
    };
    return(
       <> 
       <div class="sign-up" >
        <Link to="/"><i class="fa-solid fa-xmark"></i></Link>
        
       {/* <div class="login-form">
    <form>
		<div class="avatar">
			<img src="/assets/img/pp.png" alt="Avatar"/>
		</div>
        <h2 class="text-center">Login</h2>   
        <div class="form-group">
        	<input type="text" class="form-control" name="username" placeholder="Username" required="required" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>              
        <div class="form-group">
            <button type="button"  onClick={handleSubmit} class="btn btn-primary btn-lg btn-block">Sign in</button>
            <span>{output}</span>
        </div>
		<div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" class="pull-right">Forgot Password?</a>
        </div>
    </form>
    <p class="text-center small">Don't have an account? <Link to="/register"class="text-dark">Sign up here!</Link></p>
</div>*/}
</div> 
<br/>
<br/>

<div class="container-form">
        
        <form id="login-form-form">
          <h1>Login</h1>
            <label for="email">Email:</label>
            <input class="input-field-input" type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)}/>

            <label class="label1"for="password">Password:</label>
            <input class="input-field-input"type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
            <br/>
            <button type="button" class="button1" onClick={handleSubmit}>Login</button>
            <br/>
            <p class="text-center small "><Link to="/register"class="text-danger">Forget Password</Link></p>
            <p class="text-center small">Don't have an account? <Link to="/register"class="text-dark">Sign up here!</Link></p>
        </form>
    </div>
    <br/>

       </>
    );
}

export default Login;