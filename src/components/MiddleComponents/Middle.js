import { ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import {  ChevronDown,  Shield } from 'lucide-react';


function Middle(){

    return(
        <>
   
    {/* kjfbewbifheqbwihfb */}
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <main>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Fast Delivery", description: "We pride ourselves on quick and efficient service delivery." },
                { icon: Users, title: "Expert Team", description: "Our team of experts brings years of experience to every project." },
                { icon: TrendingUp, title: "Proven Results", description: "Our track record speaks for itself with consistent growth for our clients." }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <item.icon className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Web Development", "Mobile Apps", "UI/UX Design",
                "Cloud Solutions", "Data Analytics", "Digital Marketing"
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Learn more →</a>
                </div>
              ))}
            </div>
          </section> */}

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Jane Doe", role: "CEO of TechCorp", quote: "Their efficient work and strategic insights were instrumental in achieving our project goals. Their expertise and attention to detail delivered exceptional results." },
                { name: "John Smith", role: "CTO of InnovateCo", quote: "The team's collaborative spirit and positive attitude made the entire process enjoyable. Their passion and commitment were evident in every aspect of the project."}
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-purple-600 mr-2" />
                      <span>contact@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-purple-600 mr-2" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-purple-600 mr-2" />
                      <span>123 Business Ave, City, State 12345</span>
                    </div>
                  </div>
                </div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-20 text-center text-gray-600">
          <p>&copy; 2024 Awesome Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
        </>
    );
}
export default Middle;