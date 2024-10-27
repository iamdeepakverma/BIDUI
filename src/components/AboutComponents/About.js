import './About.css'
import {useEffect , useState } from 'react';
import axios from 'axios';
import Footer from '../Footercomponents/Footer';
import Topbar from '../TopbarComponents/Topbar';
import Nav from '../Navcomponent/Nav';
import { Dribbble, Github, Twitter, Instagram, Linkedin } from 'lucide-react';


const teamMembers = [
    { name: "Alice Johnson", role: "CEO", img: "https://via.placeholder.com/150" },
    { name: "Bob Smith", role: "CTO", img: "https://via.placeholder.com/150" },
    { name: "Charlie Brown", role: "CFO", img: "https://via.placeholder.com/150" },
  ];

function About(){
    const[ pDetails, setPDetails]= useState([]);
    useEffect(()=>{
        var apiurl="https://jjsonplaceholder.typicode.com/posts";
        axios.get(apiurl).then((result)=>{
            // console.log(result.data);
            setPDetails(result.data);
        }).catch((error)=>{
            console.log(error);
        });
    });
    return(
        <>

                    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-pink-500 opacity-50"></div>
            <img
              src="assets/img/about.jpg"
              alt="Designer silhouette"
              className="w-full h-full object-cover brightness-75"
            />
          </div>
          <div className="md:w-3/5 p-6 md:p-8 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">ABOUT ME</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-pink-600">VEDANT PATEL - DESIGNER</h2>
            <p className="text-gray-600 leading-relaxed">
              As a passionate and innovative designer, I bring ideas to life through creative visual solutions. With a keen
              eye for detail and a deep understanding of user-centric design principles, I strive to create impactful and
              memorable experiences across various digital platforms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My expertise spans from UI/UX design to branding and illustration, always aiming to push the boundaries of
              what's possible in the digital realm. I believe in the power of collaboration and continuous learning to stay
              at the forefront of design trends and technologies.
            </p>
            <div className="flex space-x-4">
              {[Dribbble, Github, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button key={index} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                  <Icon className="w-5 h-5 text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
        </>
    );
}

export default About;