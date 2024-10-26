import './category.css'
import { useState , useEffect } from "react";
import { _apiurlcategory, _apiurluser } from '../../ApiUrl';
import axios from 'axios'
// import { Navigate, useNavigate } from 'react-router-dom';

function AddCategory(){
  const [ file , setFile ] = useState();
  const [catName , setCatName ] = useState();
  const [output , setOutput] = useState();
  const [ clist , setCategoryList ] = useState([]);
  const [ categoryDetails , setCategoryDetails ] = useState([]);

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon' , file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post( _apiurlcategory+"save", formData, config ).then((response)=>{
      setCatName("");
      setOutput("Add sucessfully")
    });
    
    }
    useEffect(()=>{
      axios.get(_apiurlcategory+"fetch").then((response)=>{
          setCategoryDetails(response.data);
          // console.log(response.data)
        }).catch((error)=>{
         console.log(error);   
      });  
    });


       const deleteCategory=(_id)=>{
      let s=window.confirm("Are u sure u want to delete?");
      if(s==true)
      {
         let deleteCategoryDetails={"data":{"_id":_id}};
         axios.delete(_apiurlcategory+"delete",deleteCategoryDetails).then((response)=>{
        
         })
      }
      else
      {
        alert("User not removed.....");
      }

     }
    return(
        <>
             <div  class="container header-1">
              <h1>Add Category</h1>
              <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger ">Add Category</button>
             </div>
         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" id="add-category">
                          <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          <font>{output}</font>
                          </button>
                        </div>
                      
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                          
                            <label for="catnm" class="col-form-label">Category Name</label>
                            <input type="text" class="form-control" id="recipient-name" value={catName} onChange={e => setCatName(e.target.value)}/>
                          </div>
                          <div class="form-group">
                            <label for="file" class="col-form-label">Category Icon</label>
                            <input type="file" class="form-control" onChange={handleChange} />
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                          <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save</button>
                      </div>
                    </div>
            </div>
        </div>
        <br/>
        <table class="container table">
          <tr>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Product IconIcon</th>
            <th>Action</th>
          </tr>
          {
            categoryDetails.map((row)=>(
              <tr>
                <th>{row._id}</th>
                <th>{row.catnm}</th>
                <th>{<img class="catimg" src={`assets/uploads/caticons/${row.caticonnm}`}alt=""/>}</th>
                <th>
                  <button type="button" onClick={()=>{deleteCategory(row._id)}} class="btn btn-danger">Delete</button>
                  </th>
              </tr>
            ))
          }
        </table>
        <br/>
        {/* <!-- Team Start --> */}
        <div class="container-fluid pt-5  ">
                    <div class="container  ">
                    <div class= "row ff ">
                {
                clist.map((row)=>(
                        <div class="col-lg-4 col-md-3 ">
                        <div class="team card overflow-hidden border-0 mb-5 ">
                        <img class="card-img-top " src={`assets/uploads/caticons/${row.caticonnm}`}alt=""/>
                        <div class="card-body text-center p-0">
                            <div class="team-text d-flex flex-column justify-content-end bg-secondary">
                                <h5 class="font-weight-bold"><b>{ row.catnm }</b></h5>
                                <span>Designation</span>
                            </div>
                            <div class="team-social d-flex align-items-center justify-content-center bg-primary">
                                <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-dark btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-dark btn-social" href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
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

export default AddCategory;