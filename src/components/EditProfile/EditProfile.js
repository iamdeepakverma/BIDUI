import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom'
import { User, Mail, Phone, MapPin, Building, Users } from 'lucide-react'


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
<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-4 px-6">
          <h2 className="text-2xl font-bold text-white">Edit Profile Settings</h2>
        </div>
        <form className="py-6 px-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name} onChange={e => setName(e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email} onChange={e => setEmail(e.target.value)}
                  className=" outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  value={mobile} onChange={e => setMobile(e.target.value)}
                  className="focus:ring-indigo-500  outline-none focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  // value={formData.address}
                  // onChange={handleChange}
                  className="focus:ring-indigo-500  outline-none focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="123 Main St"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city} onChange={e => setCity(e.target.value)}
                  className="focus:ring-indigo-500  outline-none focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="New York"
                />
              </div>
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="gender"
                  id="gender"
                  // value={formData.gender}
                  // onChange={handleChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                >
                  <option onChange={e => setGender(e.target.value)}  value="male">Male</option>
                  <option onChange={e => setGender(e.target.value)}  value="female">Female</option>
                  <option onChange={e => setGender(e.target.value)}  value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>

        </>
    );
    }

export default Editprofile;