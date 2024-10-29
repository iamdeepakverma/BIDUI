import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { _apiurluser } from '../../ApiUrl';
import { EyeIcon, EyeOffIcon, FacebookIcon} from 'lucide-react'


function Register() {
  
  // const [ output , setOutput ] = useState();
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile] = useState() ;
  const [ city , setCity ] = useState();
  const [ address , setAddress ] = useState();
  const [gender,setGender] = useState(
    {
      male: false,
      female: false,
      other: false
  
    }
  );
  const [showPassword, setShowPassword] = useState(false)

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
 
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
     console.log("User Registraion Failed",error); 
     alert("User register if Failed....")
     
    });
   };

      return(
       <>
            {/* <section class="testimonial py-5" id="testimonial">
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
                        <select id="inputState" class="form-control" value={city} onChange={e => setCity(e.target.value)}>
                                    <option selected>Choose City</option>
                                    <option> Indore</option>
                                    <option> Dewas</option>
                                    <option> Ujjain</option>
                                    <option> Bhopal</option>
                                  </select>
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
</section> */}

{/* dsokfgrwhgoren */}
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-2xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">Join us and start your journey</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="John Doe"
                value={name} onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                value={email} onChange={e => setEmail(e.target.value)}
          
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2  bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
                value={password} onChange={e => setPassword(e.target.value)}
             
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center top-6"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            <div>
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                id="mobileNo"
                name="mobileNo"
                type="tel"
                autoComplete="tel"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="+1 (555) 123-4567"
                value={mobile} onChange={e => setMobile(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <select
                id="city"
                name="city"
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={city} onChange={e => setCity(e.target.value)}
              >
                <option value="">Select a city</option>
                <option value="new-york">New York</option>
                <option value="london">London</option>
                <option value="paris">Paris</option>
                <option value="tokyo">Tokyo</option>
                <option value="sydney">Sydney</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className=" mt-2 space-y-2">
                {/* fiugiusbg */}
                                  
                                  <select id="inputState" class="form-control" value={gender} onChange={e => setGender(e.target.value)}>
                                    <option selected>Choose Gender</option>
                                    <option> Male</option>
                                    <option> Female</option>
                                  </select>
              
                </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tell us about yourself"
                value={address} onChange={e => setAddress(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              <span className="sr-only">Sign up with Google</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </button>

            <button
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              <span className="sr-only">Sign up with Facebook</span>
              <FacebookIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center text-sm mt-4">
              <span className="px-2 bg-white text-gray-500">Already have an account? <Link to="/login" className='text-customBlue hover:text-black' >Login</Link> </span>
            </div>
        </div>
      </div>
    </div>

       </>
    );
}

export default Register;