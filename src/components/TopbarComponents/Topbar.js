 import './Header.css'
import { useState , useEffect} from "react";
import Auth from '../AuthComponent/Auth';

function Topbar(){
      const [ TopbarContent , setTopbarContent ] = useState();
    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="admin")
        {
            setTopbarContent(
                <>
                 {/* { TopbarContent } */}
               
                 <div className="container-fluid bg-dark">
                 <div className="row py-2 px-lg-5">
                     <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                         <div className="d-inline-flex align-items-center text-white">
                             {/* <small><i className="fa fa-phone-alt mr-2"></i>+91 7828758247</small> */}
                             <small className="px-3"></small>
                             <small>{localStorage.getItem("email")}</small>
                         </div>
                     </div>
                     <div className="col-lg-6 text-center text-lg-right">
                         <div className="d-inline-flex align-items-center">
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-facebook-f"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-twitter"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-linkedin-in"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-instagram"></i>
                             </a>
                             <a className="text-white pl-2" href="">
                                 <i className="fab fa-youtube"></i>
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
              {/* Topbar End */}
                </>
            )
        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="user")
        {
            setTopbarContent(
                <>
                {/* { TopbarContent } */}
               
                <div className="container-fluid bg-dark">
                 <div className="row py-2 px-lg-5">
                     <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                         <div className="d-inline-flex align-items-center text-white">
                             <small><i className="fa fa-phone-alt mr-2"></i>+91 7828758247</small>
                             <small className="px-3">|</small>
                             <small>Welecmoe {localStorage.getItem("email")}</small>
                         </div>
                     </div>
                     <div className="col-lg-6 text-center text-lg-right">
                         <div className="d-inline-flex align-items-center">
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-facebook-f"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-twitter"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-linkedin-in"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-instagram"></i>
                             </a>
                             <a className="text-white pl-2" href="">
                                 <i className="fab fa-youtube"></i>
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
              {/* Topbar End */}
                </>
            )
        }
        else
        {
            setTopbarContent(
                <>
                    {/* { TopbarContent } */}
               
                    <div className="container-fluid bg-dark">
                 <div className="row py-2 px-lg-5">
                     <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                         <div className="d-inline-flex align-items-center text-white">
                             <small><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                             <small className="px-3">|</small>
                             <small><i className="fa fa-envelope mr-2"></i>info@example.com</small>
                         </div>
                     </div>
                     <div className="col-lg-6 text-center text-lg-right">
                         <div className="d-inline-flex align-items-center">
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-facebook-f"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-twitter"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-linkedin-in"></i>
                             </a>
                             <a className="text-white px-2" href="">
                                 <i className="fab fa-instagram"></i>
                             </a>
                             <a className="text-white pl-2" href="">
                                 <i className="fab fa-youtube"></i>
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
              {/* Topbar End */}
                </>
            )
        }
    })
    return(
        <>
        <Auth/>
        {TopbarContent}
        </>
    );
}
export default Topbar;

  {/* { TopbarContent } */}
                {/* Topbar Start */}
            //      <div className="container-fluid bg-dark">
            //      <div className="row py-2 px-lg-5">
            //          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            //              <div className="d-inline-flex align-items-center text-white">
            //                  <small><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
            //                  <small className="px-3">|</small>
            //                  <small><i className="fa fa-envelope mr-2"></i>info@example.com</small>
            //              </div>
            //          </div>
            //          <div className="col-lg-6 text-center text-lg-right">
            //              <div className="d-inline-flex align-items-center">
            //                  <a className="text-white px-2" href="">
            //                      <i className="fab fa-facebook-f"></i>
            //                  </a>
            //                  <a className="text-white px-2" href="">
            //                      <i className="fab fa-twitter"></i>
            //                  </a>
            //                  <a className="text-white px-2" href="">
            //                      <i className="fab fa-linkedin-in"></i>
            //                  </a>
            //                  <a className="text-white px-2" href="">
            //                      <i className="fab fa-instagram"></i>
            //                  </a>
            //                  <a className="text-white pl-2" href="">
            //                      <i className="fab fa-youtube"></i>
            //                  </a>
            //              </div>
            //          </div>
            //      </div>
            //  </div>
              {/* Topbar End */}