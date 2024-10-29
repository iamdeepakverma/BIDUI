import { useState, useEffect } from "react";
import axios from "axios";
import { _apiurlcategory } from "../../ApiUrl";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { _apiurlsubcategory } from "../../ApiUrl";
import { ArrowLeft } from 'lucide-react'


function ViewSubCategory() {

    const obj = useParams();
    const [sclist, setSubCategoryList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(_apiurlsubcategory + "fetch?catnm=" + obj.catnm).then((response) => {
            setSubCategoryList(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleClick=()=>{
        navigate("/viewcategory")
    }
    return (
        <>
           
            {/* dsiJUHgviuhgvi */}
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
               <div className="flex justify-around flex-col items-center text-center mb-10" >
               
                    <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
                        Our Categories
                    </h1>
               <button
                    onClick={handleClick}
                    className="group flex justify-center items-center space-x-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                    <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="font-medium flex items-center text">Back</span>
                </button>
               </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {sclist.map((category) => (
                            
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <img
                                        src={`../assets/uploads/subcaticons/${category.subcaticonnm}`}
                                        alt={category.caticonnm}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.subcatnm}</h2>
                                        <Link to={`/viewproduct/${category._id}`}
                                            
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

export default ViewSubCategory;