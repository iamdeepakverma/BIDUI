import './Service.css'
import Nav from '../Navcomponent/Nav';
import Footer from '../Footercomponents/Footer';
import { Palette, Code, Smartphone, Globe, Megaphone, Camera } from 'lucide-react';


function Service(){
    
const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Create stunning visuals that capture your brand's essence and captivate your audience."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build responsive, fast, and user-friendly websites tailored to your specific needs."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Develop innovative mobile applications for iOS and Android platforms."
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Improve your online visibility and drive organic traffic to your website."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Create and execute comprehensive digital marketing strategies to grow your business."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capture high-quality, professional images for your brand and marketing materials."
    }
  ];
  
    return(
       <>
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Comprehensive solutions to elevate your brand and drive your business forward
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    
       </>
    );
}

export default Service;