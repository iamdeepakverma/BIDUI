// import './ShowBid.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory,_apiurlproduct,_apiurlsubcategory,_apiurluser,_apiurlbid} from '../../ApiUrl';
import { Link , useParams } from 'react-router-dom';

function ShowBid() {
 
  const params = useParams();
  const [ bidDetails , setBidDetails ] = useState([]);
  
  useEffect(()=>{
    axios.get(_apiurlbid+"fetch?pid="+params.pid).then((response)=>{
      setBidDetails(response.data);
    })
  });  
  // useEffect(()=>{
  //   axios.get("http://localhost:8080/bid/fetch").then((response)=>{
  //     console.log("its working",response);
  //   }).catch((err)=>{
  //     console.log("error is alow working",err);
  //   })
  // })
    
  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Show Bid <span class="text-primary">Here!!!</span></h1>

<table class="table table-bordered" cellspacing="10" cellpadding="10">
<tr>
<th>BidID</th>
<th>ProductID</th>
<th>UserID</th>
<th>Bid Price</th>
<th>Info</th>    
</tr>   

{
 bidDetails.map((row)=>(
    <tr>
    <td>{row._id}</td>
    <td>{row.pid}</td>
    <td>{row.uid}</td>
    <td>{row.bidprice}</td>
    <td>{row.info}</td>
    </tr>
 ))   
}
<tr></tr>

</table>    

</div>
        </div>
    </div>
    {/* About End */}    
    </div>  );
}

export default ShowBid;
