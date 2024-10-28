import './Header.css'
import { useState, useEffect } from "react";
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import Auth from '../AuthComponent/Auth';

function Topbar() {
    const [TopbarContent, setTopbarContent] = useState();
    useEffect(() => {
        if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "admin") {
            setTopbarContent(
                <>
                    {/* { TopbarContent } */}

                    <div className="bg-gray-900 text-white py-3 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto flex text-center flex-col sm:flex-row justify-between items-center text-center">
                            <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0 space-y-1 sm:space-y-0 sm:space-x-4">
                                <a href="tel:+012 345 6789" className="flex items-center hover:text-gray-300 transition-colors duration-200">
                                    <Phone className="h-4 w-4 mr-2" />
                                    <span className="text-sm">+012 345 6789</span>
                                </a>
                                <a href="mailto:info@example.com" className="flex items-center hover:text-gray-300 transition-colors duration-200">
                                    <Mail className="h-4 w-4 mr-2" />
                                    <span className="text-sm">Welecmoe {localStorage.getItem("email")}</span>
                                </a>
                            </div>
                            <div className="flex justify-center items-center space-x-4 mt-2 sm:mt-0">
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Facebook">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Twitter">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Instagram">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="YouTube">
                                    <Youtube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "user") {
            setTopbarContent(
                <>
                    {/* { TopbarContent } */}

                    <div className="bg-gray-900 text-white py-3 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto flex text-center flex-col sm:flex-row justify-between items-center text-center">
                            <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0 space-y-1 sm:space-y-0 sm:space-x-4">
                                <a href="tel:+012 345 6789" className="flex items-center hover:text-gray-300 transition-colors duration-200">
                                    <Phone className="h-4 w-4 mr-2" />
                                    <span className="text-sm">+012 345 6789</span>
                                </a>
                                <a href="mailto:info@example.com" className="flex items-center hover:text-gray-300 transition-colors duration-200">
                                    <Mail className="h-4 w-4 mr-2" />
                                    <span className="text-sm">Welecmoe {localStorage.getItem("email")}</span>
                                </a>
                            </div>
                            <div className="flex justify-center items-center space-x-4 mt-2 sm:mt-0">
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Facebook">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Twitter">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Instagram">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="YouTube">
                                    <Youtube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            setTopbarContent(
                <>
                    {/* { TopbarContent } */}

                     <div className="bg-gray-900 text-white py-3 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto flex text-center flex-col sm:flex-row justify-between items-center text-center">
                            <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0 space-y-1 sm:space-y-0 sm:space-x-4">
                                <a href="tel:+012 345 6789" className="flex items-center hover:text-gray-300 transition-colors duration-200">
                                    <Phone className="h-4 w-4 mr-2" />
                                    <span className="text-sm">+012 345 6789</span>
                                </a>
                                <a href="mailto:info@example.com" className="flex items-center hover:text-gray-300 transition-colors duration-200">
                                    <Mail className="h-4 w-4 mr-2" />
                                    <span className="text-sm">info@example.com</span>
                                </a>
                            </div>
                            <div className="flex justify-center items-center space-x-4 mt-2 sm:mt-0">
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Facebook">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Twitter">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="Instagram">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors duration-200" aria-label="YouTube">
                                    <Youtube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    })
    return (
        <>
            <Auth />
            {TopbarContent}
        </>
    );
}
export default Topbar;