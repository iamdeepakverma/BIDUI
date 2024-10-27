import React from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomeComponent/Home';
import Topbar from './components/TopbarComponents/Topbar';
import Header from './components/Headercomponents/Header';
import Footer from './components/Footercomponents/Footer';
import Nav from './components/Navcomponent/Nav';
import About from './components/AboutComponents/About'
import Contact from './components/ContactComponents/Contact'
import Service from './components/ServiceComponents/Service'
import Register from './components/RegisterComponents/Register'
import Login from './components/LoginComponents/Login'
import Admin from './components/AdminComponent/Admin';
import User from './components/UserComponent/User';
import { useLocation } from 'react-router-dom';
import Logout from './components/LogoutComponent/Logout';
import Manageusers from './components/ManageUsersComponents/Manageusers';
import AddCategory from './components/CategoryComponent/AddCategoryComponent';
import SubCategory from './components/SubCategory/SubCategory';
import Editprofile from './components/EditProfile/EditProfile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Viewcategory from './components/ViewCategory/ViewCategory';
import ViewSubCategory from './components/ViewSubCategory/ViewSubCategory';
import AddProduct from './components/AddProduct/AddProduct';
import ViewProduct from './components/ViewProduct/ViewProduct';
import Bidproduct from './components/BidProduct/BidProduct';
import ShowBid from './components/ShowBid/Showbid';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';


function App() {

  return (
    <>
    
    <Topbar/>
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/about" element={<About/>}>About</Route>
            <Route path="/contact" element={<Contact/>}>Contact</Route>
            <Route path="/service" element={<Service/>}>Service</Route>
            <Route path="/register" element={<Register/>}>Register</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/logout" element={<Logout/>}>Logout</Route>
            <Route path="/admin" element={<Admin/>}>Admin</Route>
            <Route path="/user" element={<User/>}>User</Route>
            <Route path="/manageusers" element={<Manageusers/>}>Manageusers</Route>
            <Route path="/addcategory" element={<AddCategory/>}>Add Category</Route>
            <Route path="/SubCategory" element={<SubCategory/>}>Sub Category</Route>
            <Route path="/ChangePassword" element={<ChangePassword/>}>ChangePassword</Route>
            <Route path="/EditProfile" element={<Editprofile/>}>Edit Profile</Route>
            <Route path="/viewcategory" element={<Viewcategory/>}>Search Products</Route>
            <Route path="/viewSubCategory/:catnm" element={<ViewSubCategory/>}>ViewSubCategory</Route>
            <Route path="/addproduct" element={<AddProduct/>}>View Product</Route>
            <Route path="/viewproduct/:_id" element={<ViewProduct/>}>View Product</Route>
            <Route path="/bidproduct/:pid" element={<Bidproduct/>}>View Product</Route>
            <Route path="/showbid/:pid" element={<ShowBid/>}>View Product</Route>
            <Route path="/verifyuser/:vemail" element={<Verifyuser/>}>View Product</Route>

            
            
            </Routes> 
        <Footer/>
      
          
         {/* <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{"borderColor":" #3E3E4E"}}>
        <div className="row">
            <div className="col-lg-12 text-center mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; <a href="#">Your Site Name</a>. All Rights Reserved. 
				
				Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
           
        </div>
    </div> */}
         
     </>
  );
}

export default App;
