import { useState , useEffect } from "react";

function Footer(){
    const [ FooterContent , setFooterContent ] = useState();
    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="admin")
        {
            setFooterContent(
                <>
                </>
            )
        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="user")
        {
            setFooterContent(
                <>
                </>
            )
        }
        else{
            setFooterContent(
                <>
                {/* Footer Start */}
    <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-7 col-md-6">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Get In Touch</h3>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Pricing Plan</a>
                            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Newsletter</h3>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{"padding": "30px","placeholder":"Your Email Address"}}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {/* Footer End */}
                </>
            )
        }
    })
    return(
        <>
         { FooterContent }
        </>
    );
}

export default Footer;