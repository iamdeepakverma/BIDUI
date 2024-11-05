
import { useState , useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function Footer(){
    const [ FooterContent , setFooterContent ] = useState();
    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="admin")
        {
            setFooterContent(
                <>
                </>
            )
        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="user")
        {
            setFooterContent(
                <>
                </>
            )
        }
        else{
            setFooterContent(
                <>
               <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Awesome Company</h3>
            <p className="text-gray-400 text-white">Innovating for a better tomorrow</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects', 'Blog', 'Careers', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'Data Analytics', 'Digital Marketing'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-gray-400" />
              <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">{localStorage.getItem("email") || "info@example.com"}</a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-gray-400" />
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-1" />
              <p className="text-gray-400 ">123 Innovation Street, Tech City, TC 12345, Country</p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-white">Subscribe to Our Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Awesome Company. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm mr-4">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
    
    {/* Footer End */}
                </>
            )
        }
    })
    return(
        <>
         { FooterContent }
        </>
    );
}

export default Footer;