import './Nav.css'
import { Link, useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';



function Nav(child){ 

    const [ NavComponent , setNavbarComponent] = useState();

    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")==("admin"))
        {
            setNavbarComponent(
                <>
                <div className="container-fluid p-0 Navbar">
        <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand ml-lg-3">
                <h1 className="m-0 display-5 text-uppercase text-primary"><Link to="/">BID ME</Link></h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            </button>
            <div className="collapse navbar-collapse justify-content-end px-lg-3" id="navbarCollapse">
                <div className="navbar-nav py-0">
                    <a className="nav-item nav-link active font-weight-bold"><Link to="/admin">Home</Link></a>
                        
                </div>
                    <div className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle font-weight-bold" data-toggle="dropdown"><Link to="#">Manage Category</Link></a>
                        <div className="dropdown-menu rounded-0 m-0">
                        {/* <button class="dropdown-item" type="button"><i class="fa-solid fa-layer-group"></i><Link to="/addcategory">Add Category</Link></button> */}
                        <button type="button" class="dropdown-item" data-toggle="modal" data-whatever="@mdo"><i class="fa-solid fa-layer-group"></i><Link to="/addcategory">Add Category</Link></button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-layer-group"></i><Link to="/SubCategory">Add Sub Category</Link></button>
                                             
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle font-weight-bold" data-toggle="dropdown"><i class="fa-sharp fa-solid fa-user-tie" style={{"color": "#000000"}}></i><Link to="#">&nbsp;Admin</Link></a>
                        <div className="dropdown-menu rounded-0 m-0">
                        <button class="dropdown-item" type="button"><i class="a"></i><Link to="/manageusers">Mange Users</Link></button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-gear"></i>Settings</button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-key"></i><Link to="/EditProfile">Edit Profile</Link></button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-key"></i><Link to="/ChangePassword">Change Password</Link></button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-right-from-bracket"></i><Link to="/logout">Logout</Link></button>
                                             
                        </div>
                    </div>
                    
            </div>
        </nav>
    </div>
    {/* Navbar End */}
                </>
            )
        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")==("user"))
        {
            setNavbarComponent(
                <>
                 {/* Navbar Start */}
    <div className="container-fluid p-0 Navbar">
        <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand ml-lg-3">
                <h1 className="m-0 display-5 text-uppercase text-primary"><Link to="/">BID ME</Link></h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end px-lg-3" id="navbarCollapse">
                <div className="navbar-nav py-0">
                    <a className="nav-item nav-link active"><Link to="/">Home</Link></a>
                    <a className="nav-item nav-link"><Link to="/about">About</Link></a>
                {/* <a className="nav-item nav-link"><Link to="/contact">Contact</Link></a> */}
                    <a className="nav-item nav-link"><Link to="/service">Service</Link></a>
                    <a  className="nav-item nav-link"><Link to="/viewcategory">Search Products</Link></a>
                    <div className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle" data-toggle="dropdown"><Link to="">Manage Product</Link></a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <a  className="dropdown-item"><Link to="/viewproduct">Add Product</Link></a>                      
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle" data-toggle="dropdown"><Link to="#"><i class="fa-solid fa-user-tie"></i>&nbsp;User</Link></a>
                        <div className="dropdown-menu rounded-0 m-0">
                        
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-key"></i>Edit Password</button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-key"></i>Edit Profile</button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-gear"></i>Settings</button>
                        <button class="dropdown-item" type="button"><i class="fa-solid fa-right-from-bracket"></i><Link to="/logout">Logout</Link></button>
                                             
                        </div>
                    </div>
                </div>
                {/* <a className="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a> */}
               
            </div>
        </nav>
    </div>
    {/* Navbar End */}
                </>
            )
        }
        else
        {
            setNavbarComponent(
                <>
                 {/* Navbar Start */}
    <div className="container-fluid p-0 Navbar">
        <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-2 px-lg-5">
            <a href="index.html" className="navbar-brand ml-lg-3">
                <h1 className="m-0 display-5 text-uppercase text-primary"><Link to="/">BID ME</Link></h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav m-auto py-0">
                    <a className="nav-item nav-link active"><Link to="/">Home</Link></a>
                    <a className="nav-item nav-link"><Link to="/about">About</Link></a>
                <a className="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                    <a className="nav-item nav-link"><Link to="/service">Service</Link></a>
                    <a  className="nav-item nav-link"><Link to="/login">Login</Link></a>
                    <a  className="nav-item nav-link"><Link to="/register">Register</Link></a>
                    <div className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle" data-toggle="dropdown"><Link to="">Details</Link></a>
                        <div className="dropdown-menu rounded-0 m-0">
            
                            <a  className="dropdown-item">Blog Detai</a>
                        </div>
                    </div>
                </div>
                <a className="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a>
            </div>
        </nav>
    </div>
    {/* Navbar End */}

                </>
            )
        }
    });
    return(
       <>
      { NavComponent}
       </>
    );
}

export default Nav;