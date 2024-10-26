import './About.css'
import {useEffect , useState } from 'react';
import axios from 'axios';
import Footer from '../Footercomponents/Footer';
import Topbar from '../TopbarComponents/Topbar';
import Nav from '../Navcomponent/Nav';

function About(){
    const[ pDetails, setPDetails]= useState([]);
    useEffect(()=>{
        var apiurl="https://jsonplaceholder.typicode.com/posts";
        axios.get(apiurl).then((result)=>{
            // console.log(result.data);
            setPDetails(result.data);
        }).catch((error)=>{
            console.log(error);
        });
    });
    return(
        <>

        <br/>
    {/* About Start
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0">
                    <img className="img-fluid w-100" src="assets/img/about.jpg" alt=""/>
                    <div className="bg-primary text-dark text-center p-4">
                        <h3 className="m-0">25+ Years Experience</h3>
                    </div>
                </div>
                <div className="col-lg-7">
                    <h6 className="text-primary text-uppercase font-weight-bold">About Us</h6>
                    <h1 className="mb-4">Trusted & Faster<br/> BID Service Provider</h1>
                    <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p> */}
                    <table border="2" class="table table-striped table-dark">
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>body</th>
                        </tr>
                        {
                            pDetails.map((row)=>(
                                <tr>
                                <td>{row.userId}</td>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                                <td>{row.body}</td>
                            </tr>
                            ))
                        }
                         
                    </table> 
                    {/* {/* <div className="d-flex align-items-center pt-2">
                        <button type="button" className="btn-play" data-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="font-weight-bold m-0 ml-4">Play Video</h5>
                    </div> */}
                {/* </div>
            </div>
        </div> */}
        {/* Video Modal */}
        {/*<div className="modal fade" id="videoModal" Tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>        
                        {/* 16:9 aspect ratio */}
                        {/* <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  */}
    {/* About End */}
    <Footer/>
        </>
    );
}

export default About;