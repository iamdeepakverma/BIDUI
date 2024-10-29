import './Login.css'
// import Nav from '../Navcomponent/Nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { _apiurluser } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react'


function Login(){
        const navigate = useNavigate(); // Navigate is function to redirect on place to another place
        const [ output , setOutput ] = useState();
        const [ email , setEmail ] = useState();
        const [ password , setPassword ] = useState();
        const [showPassword, setShowPassword] = useState(false)

    
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
            console.log("Login Error",error)
            
        });
    };



    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }
    return(
       <> 
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full space-y-8 p-6 sm:p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
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
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSubmit}
            >
              Sign in
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
            <a
              href="#"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Google</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Facebook</span>
              <FacebookIcon className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with X</span>
              <TwitterIcon className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Instagram</span>
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="flex justify-center text-sm mt-4">
              <span className="px-2 bg-white text-gray-500">Don't have an account? <Link to="/register" className='text-customBlue hover:text-black' >Sign Up</Link> </span>
            </div>
        </div>
      </div>
    </div>
       </>
    );
}

export default Login;