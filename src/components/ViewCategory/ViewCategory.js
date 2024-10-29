import './ViewCategory.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { _apiurlcategory } from "../../ApiUrl";
import { Link } from 'react-router-dom'
import { Plus, X } from 'lucide-react'

function Viewcategory() {
    const [clist, setCategoryList] = useState([]);

    useEffect(() => {
        axios.get(_apiurlcategory + "fetch").then((response) => {
            setCategoryList(response.data);
        }).catch((error) => {
            console.log(error);
        });
    });
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
                        Our Categories
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clist.map((category) => (
                            
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <img
                                        src={`assets/uploads/caticons/${category.caticonnm}`}
                                        alt={category.caticonnm}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.catnm}</h2>
                                        <Link to={`/viewSubCategory/${category.catnm}`}
                                            
                                            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-300"
                                        >
                                            View Products &rarr;
                                        </Link>
                                    </div>
                                </div>
                        
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Viewcategory;