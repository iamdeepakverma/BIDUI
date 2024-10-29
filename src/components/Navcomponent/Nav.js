import './Nav.css'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



function Nav(child) {

  const [NavComponent, setNavbarComponent] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isuser , setIsuser ] = useState(false)



  useEffect(() => {
    if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == ("admin")) {
      setNavbarComponent(
        <>
          <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex-shrink-0 flex items-center">

                    <span className="ml-2 text-xl font-bold text-gray-900"> BID ME</span>
                  </Link>
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  {/* <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Home</Link> */}
                  {/* <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">About</Link> */}
                  {/* <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Contact</Link> */}
                  {/* <Link to="/service" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Services</Link> */}
                  <div className="relative">
                    <button
                      onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                      Manage Category                <svg
                        className={`ml-1 h-4 w-4 inline-block transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isDetailsOpen && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <Link to="/addcategory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Add Category</Link>
                        <Link to="/SubCategory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Add Sub Category</Link>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsuser(!isuser)}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                      Admin                <svg
                        className={`ml-1 h-4 w-4 inline-block transition-transform ${isuser ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isuser && (
                      <div className="absolute z-10 right-1.5 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <Link to="/manageusers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Mange Users</Link>
                        <Link to="*" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Settings</Link>
                        <Link to="/EditProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Edit Profile</Link>
                        <Link to="/ChangePassword" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Change Password</Link>
                        <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Logout</Link>
                      </div>
                    )}
                  </div>

                </div>
                <div className="flex items-center sm:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    ) : (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
                  <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
                  <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
                  <button
                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                    className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
                  >
                    Details
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDetailsOpen && (
                    <div className="pl-4 space-y-1">
                      <a href="/team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Our Team</a>
                      <a href="/locations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Locations</a>
                      <a href="/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">History</a>
                    </div>
                  )}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="px-2 space-y-1">
                    <Link to="/login">
                      <button className="w-full px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-gray-50">
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="w-full px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign Up
                      </button>

                    </Link >
                  </div>
                </div>
              </div>
            )}
          </nav>
        </>
      )
    }
    else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == ("user")) {
      setNavbarComponent(
        <>
          <nav className="bg-white shadow-md">
            <div className="max-w-7-oxl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex-shrink-0 flex items-center">

                    <span className="ml-2 text-xl font-bold text-gray-900"> BID ME</span>
                  </Link>
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <Link to="/" className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Home</Link>
                  <Link to="/about" className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">About</Link>
                  <Link to="/service" className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Services</Link>
                  <Link to="/viewcategory" className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Search Products</Link>

                  <div className="relative">
                    <button
                      onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                      className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                      Manage Product
                      <svg
                        className={`ml-1 h-4 w-4 inline-block transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isDetailsOpen && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <Link to="/addproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Add Product</Link>
                        <Link to="/viewproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">View Product</Link>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsuser(!isuser)}
                      className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                      User
                      <svg
                        className={`ml-1 h-4 w-4 inline-block transition-transform ${isuser ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isuser && (
                      <div className="absolute z-10 mt-2 right-1.5 mr-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Edit Password</Link>
                        <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Edit Profile</Link>
                        <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Settings</Link>
                        <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Logout</Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center sm:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    ) : (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
                  <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
                  <Link to="/service" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
                  <button
                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                    className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
                  >
                    Details
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDetailsOpen && (
                    <div className="pl-4 space-y-1">
                      <a href="/team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Our Team</a>
                      <a href="/locations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Locations</a>
                      <a href="/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">History</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </nav>
        </>
      )
    }
    else {
      setNavbarComponent(

        <>

          <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex-shrink-0 flex items-center">

                    <span className="ml-2 text-xl font-bold text-gray-900"> BID ME</span>
                  </Link>
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Home</Link>
                  <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">About</Link>
                  <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Contact</Link>
                  <Link to="/service" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Services</Link>
                  <div className="relative">
                    <button
                      onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                      Details
                      <svg
                        className={`ml-1 h-4 w-4 inline-block transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isDetailsOpen && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Our Team</Link>
                        <Link to="/locations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Locations</Link>
                        <Link to="/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">History</Link>
                      </div>
                    )}
                  </div>
                  <Link to="/login">
                    <button className="ml-4 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                      Sign Up
                    </button>
                  </Link>
                </div>
                <div className="flex items-center sm:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    ) : (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
                  <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
                  <Link to="/service" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
                  <button
                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                    className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
                  >
                    Details
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDetailsOpen && (
                    <div className="pl-4 space-y-1">
                      <a href="/team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Our Team</a>
                      <a href="/locations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Locations</a>
                      <a href="/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">History</a>
                    </div>
                  )}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="px-2 space-y-1">
                    <Link to="/login">
                      <button className="w-full px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-gray-50">
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="w-full px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign Up
                      </button>

                    </Link >
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* xd;ngiarsgyu8 */}
          

        </>
      )
    }
  });
  return (
    <>
      {NavComponent}
    </>
  );
}

export default Nav;