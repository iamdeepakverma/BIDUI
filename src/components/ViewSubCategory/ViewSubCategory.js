import { useState , useEffect } from "react";
import axios from "axios";
import { _apiurlcategory } from "../../ApiUrl";
import { Link , useParams  } from 'react-router-dom'
import { _apiurlsubcategory } from "../../ApiUrl";

function ViewSubCategory(){

    const obj= useParams();
    const [ sclist , setSubCategoryList ] = useState([]);

  useEffect(()=>{
    axios.get(_apiurlsubcategory+"fetch?catnm="+obj.catnm).then((response)=>{
        setSubCategoryList(response.data);
        console.log(response.data)
      }).catch((error)=>{
      console.log(error);  
    });  
  },[]);
    return(
        <>
        <br/>
        <div  class="container display-5 h1-head ">
        <h1>View Sub Category <i class="fa-solid fa-arrows-left-right" style={{"color": "#ff3300"}}></i> {obj.catnm}</h1>
        </div>
        <div class="container-fluid ">
                    <div class="container  ">
                    <div class="row ff ">
                {
                sclist.map((row)=>(
                        // <div class="col-lg-4 col-md-3 ">
                        // <div class="team card overflow-hidden border-0 mb-5 ">
                        // <Link to={`/viewSubCategory/${row.catnm}`}>
                        // <img class="card-img-top " src={`../assets/uploads/subcaticons/${row.subcaticonnm}`}alt=""/>
                        // <div class="card-body text-center p-0">
                        //     <div class="team-text d-flex flex-column justify-content-end bg-secondary">
                        //         <h5 class="font-weight-bold"><b>{ row.subcatnm }</b></h5>
                        //         <span>Designation</span>
                        //     </div>
                        //     <div class="team-social d-flex align-items-center justify-content-center bg-primary">
                        //         <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                        //         <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                        //         <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                        //         <a class="btn btn-outline-dark btn-social" href="#"><i class="fab fa-instagram"></i></a>
                        //     </div>
                        // </div>
                        // </Link>
                        // </div> 
                        // </div>
                         <div class="col-lg-4 col-md-3 container-form-view-subcategory">
                         <div class="team card position-relative overflow-hidden border-0 mb-0">
                         <Link to={`/viewSubCategory/${row.catnm}`}>
                         <img class="card-img-top class-img" src={`../assets/uploads/subcaticons/${row.subcaticonnm}`}alt=""/>
                         <div class="card-body text-center p-0">
                             <div class="team-text d-flex flex-column justify-content-end bg-secondary">
                                 <h5 class="font-weight-bold"></h5>
                                 <h4 style={{"border": "2px solid black","border-radius": "5px","color":"black"}}>{ row.subcatnm }</h4>
                             </div>
                             <div class="team-social d-flex align-items-center justify-content-center bg-primary">
                                 <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                                 <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                 <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                 <a class="btn btn-outline-dark btn-social" href="#"><i class="fab fa-instagram"></i></a>
                             </div>
                         </div>
                         </Link>
                         </div> 
                         </div>
            
                    ))
                }
                </div>
                   
                </div>
            </div>
            
        </>
    );
}

export default ViewSubCategory;