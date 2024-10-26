import './SubCategory.css'
import { useState , useEffect } from "react";
import { _apiurlsubcategory } from '../../ApiUrl';
import { _apiurlcategory } from '../../ApiUrl';
import { _apiurluser } from '../../ApiUrl';
import axios from 'axios'

function SubCategory(){

    const [ categoryDetails , setCategoryDetails] = useState([]);
    const [ file , setFile ] = useState();
    const [ catName , setcatnm ] = useState();
    const [ subcatnm , setsubcatnm ] = useState();
    const [ output , setOutput ] = useState();

    useEffect(()=>{
        axios.get(_apiurlcategory+"fetch").then((response)=>{
            setCategoryDetails(response.data);
            //console.log(response.data)
          }).catch((error)=>{
          console.log(error);   
        });  
      });

      const handleChange=(event)=>{
        setFile(event.target.files[0])
      }

      const handleSubmit=(event)=>{
        event.preventDefault();//auto refresing ko rokne mai kaam aata hai 
        var formData = new FormData();
        formData.append('catnm' , catName);
        formData.append('subcatnm' , subcatnm );
        formData.append('caticon' , file)
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiurlsubcategory+"save",formData, config).then(()=>{
            setsubcatnm("")
            setcatnm("");
            setOutput("Sucessfully Added")
        })
      }
    return(
        <>
        <br/>
             <div  class="container header-1">
              <h1>Add Sub Category </h1>
              </div>
              
              {/* <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger ">Add Category</button> */}
              <br/>
              <br/>
              <div className="container bg-secondary my-5">
        <div className="container-fluid">
            <div className="row align-items-end class">
                <div className="col-lg-10">
                    <div className="bg-white py-5 px- px-sm-5 from-2">
                        <form className="py-5 ">
                        <div className="form-group form-form">
                                <select className="custom-select form-control px-4" style={{"height": "47px"}} value={catName} onChange={e => setcatnm(e.target.value)}> 
                                <option selected>Select Category</option>
                                    {
                                        categoryDetails.map((row)=>(
                                            
                                            <option>{row.catnm}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group form-form">
                                <input type="text" className="form-control border-0 p-4" placeholder="Sub Category Name" required="required" value={subcatnm} onChange={e => setsubcatnm(e.target.value)}/>
                            </div>
                            <div className="form-group form-form">
                                <input type="file" className="form-control border-0 p-4" placeholder="Sub Category Icon" required="required" onChange={handleChange}/>
                            </div>
                           <span>{output}</span>
                           <br/>
                            <div>
                                <button onClick={handleSubmit} className="btn btn-danger btn-block border-0 py-3 buttonn" type="submit">Submit</button>
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

export default SubCategory;