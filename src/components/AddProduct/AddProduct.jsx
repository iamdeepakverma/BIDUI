import axios from 'axios';
import { useState, useEffect } from 'react';
import { _apiurlcategory, _apiurluser, _apiurlsubcategory, } from '../../ApiUrl';
import { _apiurlproduct } from '../../ApiUrl';
import { Upload, X, ChevronDown, Camera } from 'lucide-react'


function AddProduct() {
    const [categoryDetails, setCategoryDetails] = useState([]);
    const [scList, setSubCatList] = useState([]);
    const [catnm, setCatName] = useState();
    const [subcatnm, setSubCatName] = useState();
    const [Pprice, setPprice] = useState();
    const [file, setFile] = useState();
    const [PTitle, setPTitle] = useState();
    const [description, setdescription] = useState();
    const [Output, setOutput] = useState();


    useEffect(() => {
        axios.get(_apiurlcategory + "fetch").then((response) => {
            setCategoryDetails(response.data)
            // console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    })

    const fetchSubCategory = (catnm) => {
        axios.get(_apiurlsubcategory + "fetch?catnm=" + catnm).then((response) => {
            setCatName(catnm);
            setSubCatList(response.data);
            //console.log(response.data)
        })
    }

    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    const haldlesubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('ptitle', PTitle);
        formData.append('catnm', catnm);
        formData.append('subcatnm', subcatnm);
        formData.append('description', description);
        formData.append('baseprice', Pprice);
        formData.append('piconnm', file);
        formData.append('uid', localStorage.getItem("email"));
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiurlproduct + "save", formData, config).then((response) => {
            setPTitle("");
            setCatName("");
            setSubCatName("");
            setdescription("");
            setPprice("");
            setOutput("Product Added Sucessfull")
            setTimeout(()=>{
              setOutput("");
            },2000)
            // console.log(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }
 
    return (
        <>
            {/* add product */}

            <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <form className="bg-white shadow-2xl rounded-2xl p-8 transition-all duration-300 ease-in-out hover:shadow-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Add New Product</h2>
          
          <div className="space-y-6">
            <div className="group">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-indigo-600">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300"
                placeholder="Enter product title"
                required
                value={PTitle} onChange={(e) => { setPTitle(e.target.value) }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-indigo-600">
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none transition-all duration-300"
                    value={catnm} onChange={(e) => { fetchSubCategory(e.target.value) }}
                    required
                  >
                    <option value="">Select category</option>
                   {
                    categoryDetails.map((row) => (
                        <option className="p-">{row.catnm}</option>
                    ))
                   }
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none transition-all duration-300" />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-indigo-600">
                  Subcategory
                </label>
                <div className="relative">
                  <select
                    id="subcategory"
                    name="subcategory"
                    className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none transition-all duration-300"
                    value={subcatnm} onChange={e => setSubCatName(e.target.value)}
                    required
                  >
                    <option value="">Select subcategory</option>
                   {
                    scList.map((row) => (
                        <option className="p-">{row.subcatnm}</option>
                    ))
                   }
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none transition-all duration-300" />
                </div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-indigo-600">
                Base Price
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-7 transition-all duration-300"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                  value={Pprice} onChange={e => setPprice(e.target.value)} 
                />
              </div>
            </div>

            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md transition-all duration-300 hover:border-indigo-300">
                <div className="space-y-1 text-center">
                  {file ? (
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-600">{file.name}</span>
                      <button
                        type="button"
                        className="ml-2 text-sm text-red-600 hover:text-red-500 transition-colors duration-300"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Camera className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition-all duration-300"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-indigo-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300"
                placeholder="Enter product description"
                value={description} onChange={e => setdescription(e.target.value)}
              ></textarea>
            </div>
            <p className='text-green-700'>{Output}</p>
            <button
              type="button"
              onClick={haldlesubmit}
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>            

            {/* add product */}
            
        </>
    );
}

export default AddProduct;