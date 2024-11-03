// import './BidProduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlproduct, _apiurlsubcategory, _apiurluser, _apiurlbid } from '../../ApiUrl';
import { Link, useParams } from 'react-router-dom';

function BidProduct() {

  const params = useParams();
  const [pDetails, setPDetails] = useState([]);
  const [bidprice, setBidPrice] = useState();
  const [output, setOutput] = useState();
  const [cprice, setCPrice] = useState();

  useEffect(() => {

    axios.get(_apiurlproduct + "fetch?_id=" + params.pid).then((response) => {
      setPDetails(response.data[0]);
    })

    axios.get(_apiurlbid + "fetch?pid=" + params.pid).then((response) => {
      var l = response.data.length
      var p = l == 0 ? pDetails.baseprice : response.data[l - 1].bidprice;
      setCPrice(p);
    })

  });

  const handleSubmit = () => {
    var bidDetails = { "pid": params.pid, "uid": localStorage.getItem("email"), "bidprice": bidprice };

    axios.post(_apiurlbid + "save", bidDetails).then((response) => {
      setOutput(response.data.result);
      setBidPrice("");
    }).catch((err) => {
      console.log(err);
    })

  }




  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
      <div className="p-8 sm:p-12">
        {output && (
          <div className="mb-6 p-4 bg-blue-100 text-blue-800 rounded-lg">
            {output}
          </div>
        )}
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Bid Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Here!!!</span>
        </h1>
        
        <div className="space-y-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Product ID:</h2>
            <p className="text-2xl font-bold text-indigo-600">{pDetails._id}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Product Base Price:</h2>
            <p className="text-2xl font-bold text-green-600">₹{pDetails.baseprice}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Product Current Bid Price:</h2>
            <p className="text-2xl font-bold text-blue-600">₹{cprice}</p>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="bidPrice" className="block text-xl font-semibold text-gray-700 mb-2">
              Enter Your Bid Price
            </label>
            <input
              type="text"
              id="bidPrice"
              value={bidprice}
              onChange={(e) => setBidPrice(e.target.value)}
              className="w-full px-4 py-2 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
          
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
          >
            Bid Your Price
          </button>
        </form>
      </div>
    </div>
  </div>
)}

export default BidProduct;
