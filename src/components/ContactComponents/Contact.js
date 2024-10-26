import './Contact.css'
import Nav from '../Navcomponent/Nav';
import Footer from '../Footercomponents/Footer';

function Contact(){
    return(
        <>
    <div className="container-fluid bg-secondary my-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 py-5 py-lg-0">
                    <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
                    <h1 className="mb-4">Request A Free Quote</h1>
                    <p className="mb-4">India's most trusted online Biding platform, where you can sell all sorts of items with easy. With our popular e-BIDING house, several clients have been benefited as we strive for their one hundred percent satisfaction.</p>
                    <div className="row">
                        <div className="col-sm-4">
                            <h1 className="text-primary mb-2" data-toggle="counter-up">1</h1>
                            <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                        </div>
                        <div className="col-sm-4">
                            <h1 className="text-primary mb-2" data-toggle="counter-up">1</h1>
                            <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                        </div>
                        <div className="col-sm-4">
                            <h1 className="text-primary mb-2" data-toggle="counter-up">1</h1>
                            <h6 className="font-weight-bold mb-4">Complete Projects</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-white py-5 px-4 px-sm-5 contact">
                        <form className="py-5">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select form-control px-4" style={{"height": "47px"}}>
                                    <option selected>Select A Service</option>
                                    <option value="1">Service 1</option>
                                    <option value="2">Service 1</option>
                                    <option value="3">Service 1</option>
                                </select>
                            </div>
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit">Get A Quote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Quote Request Start */}

        </>
    );
}

export default Contact;