import './SubCategory.css'
import { useState, useEffect } from "react";
import { _apiurlsubcategory } from '../../ApiUrl';
import { _apiurlcategory } from '../../ApiUrl';
import { _apiurluser } from '../../ApiUrl';
import { ChevronDown, Upload } from 'lucide-react'
import axios from 'axios'

function SubCategory() {

    const [categoryDetails, setCategoryDetails] = useState([]);
    const [file, setFile] = useState();
    const [catName, setcatnm] = useState();
    const [subcatnm, setsubcatnm] = useState();
    const [output, setOutput] = useState();


    useEffect(() => {
        axios.get(_apiurlcategory + "fetch").then((response) => {
            setCategoryDetails(response.data);
            //console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
    });

    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault();//auto refresing ko rokne mai kaam aata hai 
        var formData = new FormData();
        formData.append('catnm', catName);
        formData.append('subcatnm', subcatnm);
        formData.append('caticon', file)
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiurlsubcategory + "save", formData, config).then(() => {
            setsubcatnm("")
            setcatnm("");
            setOutput("Sucessfully Added")
        })
    }


    return (
        <>
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4 px-6">
                        <h2 className="text-2xl font-bold text-white">Add Subcategory</h2>
                    </div>
                    <form className="py-6 px-8">
                        <div className="mb-6">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                Select Category
                            </label>
                            <div className="relative">
                                <select
                                    id="category"
                                    value={catName} onChange={e => setcatnm(e.target.value)}
                                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                                >
                                    <option value="">Select a category</option>
                                    {categoryDetails.map((row) => (
                                        <option>{row.catnm}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subcategoryName" className="block text-sm font-medium text-gray-700 mb-2">
                                Subcategory Name
                            </label>
                            <input
                                type="text"
                                id="subcategoryName"
                                value={subcatnm} onChange={e => setsubcatnm(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter subcategory name"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                                Choose File
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                            {file && (
                                <p className="mt-2 text-sm text-gray-600">
                                    Selected file: {file.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <p>{output}</p>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Subcategory
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    );
}

export default SubCategory;