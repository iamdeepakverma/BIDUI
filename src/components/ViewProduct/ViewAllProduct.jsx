import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { _apiurlproduct } from '../../ApiUrl'

const ViewAllProduct = () => {

    const [ allProduct , setallProduct ] = useState([])
    useEffect(() => {
        axios.get(_apiurlproduct + "fetch").then((response) => {
            // console.log(response.data)
            setallProduct(response.data)

        }).catch((error) => {
            console.log(error)
        })
    },[])
  return (
  <>
   <div className="bg-gradient-to-r from-purple-50 to-indigo-50 min-h-screen py-12 px-5 sm:px-6 lg:px-8" >
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        All Product
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {allProduct.map((row) => (
          <div key={row._id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-64 w-full md:w-96 md:h-full relative">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={`../../assets/uploads/producticons/${row.piconnm}`}
                    alt={row.ptitle}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x350?text=Image+Not+Found';
                    }}
                  />
                </div>
              </div>
              <div className="p-8 md:flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{row.ptitle}</h2>
                  <p className="text-gray-600 mb-4">{row.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-indigo-600">₹{row.baseprice}</span>
                    <span className="ml-2 text-sm text-gray-500">Base Price</span>
                  </div>
                </div>
                <div>
                  {Date.now() - row.info < 172800000 ? (
                    <Link
                      to={`/bidproduct/${row._id}`}
                      className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full px-6 py-3 text-sm font-semibold hover:from-yellow-500 hover:to-yellow-600 transition duration-300 shadow-md"
                    >
                      Bid Running
                    </Link>
                  ) : (
                    <Link
                      to={`/showbid/${row._id}`}
                      className="inline-block bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full px-6 py-3 text-sm font-semibold hover:from-green-500 hover:to-green-600 transition duration-300 shadow-md"
                    >
                      Bid Completed
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </>
  )
}

export default ViewAllProduct
