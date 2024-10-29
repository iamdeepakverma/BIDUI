import { useState , useEffect } from "react";
import axios from "axios";
import { _apiurluser } from "../../ApiUrl";
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'

function Manageusers(){
    const navigate = useNavigate();
    const [ userDetails , setUserDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_apiurluser+"fetch").then((response)=>(
            // console.log(response.data)
            setUserDetails(response.data)
        )).catch((error)=>{
            console.log(error)
        })
    });  
    const changeStatus=(_id,status)=>{
        //alert(_id+"-----"+status);
        if(status=="active")
        {
          let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};
          axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            navigate("/manageusers");
          });       
        }
        else if(status=="Inactive")
        {
          let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};
          axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            navigate("/manageusers");
          });
        }
        else
        {
          let s=window.confirm("Are u sure u want to delete?");
          if(s==true)
          {
           let deleteDetails={"data":{"_id":_id}};
           axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
             navigate("/manageusers");
           });
          }
          else
           alert("User not removed....."); 
        }
      };
      // PDSFHOaeu
      const initialUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' },
        { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
      ]
      
        const [users, setUsers] = useState(initialUsers)
        const [searchTerm, setSearchTerm] = useState('')
        const [currentPage, setCurrentPage] = useState(1)
        const [usersPerPage] = useState(5)
      
        const filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase())
        )
      
        const indexOfLastUser = currentPage * usersPerPage
        const indexOfFirstUser = indexOfLastUser - usersPerPage
        const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
      
        const totalPages = Math.ceil(filteredUsers.length / usersPerPage)
      
        // const handleDelete = (id) => {
        //   setUsers(users.filter(user => user.id !== id))
        // }
      
        // const handleAddUser = () => {
        //   // Implement add user functionality
        //   console.log('Add user')
        // }
      
        // const handleEditUser = (id) => {
        //   // Implement edit user functionality
        //   console.log('Edit user', id)
        // }
      

    return(
        <>
          {/* <br/>
          <table class="table table-bordered">
              <tr>
                  <th>RegId</th>
                  <th>Name</th>
                  <th>Emails</th>
                  <th>Mobile No</th>
                  <th>Gender</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>Info</th> 
                  <th>status</th>
                  <th>Action</th>
                  
              </tr>

              {
                  userDetails.map((row)=>(
                      <tr>
                          <th>{row._id}</th>
                          <th>{row.name}</th>
                          <th>{row.email}</th>
                          <th>{row.mobile}</th>
                          <th>{row.gender}</th>
                          <th>{row.password}</th>
                          <th>{row.address}</th>
                          <th>{row.info}</th>
                          <th>
                              {row.status==1 && <font color="green">Active</font>}
                              {row.status==0 && <font color="orange">Inactive</font>}
                              </th>
                          <th>
                              {row.status==1 && <font onClick={()=>{changeStatus(row._id,"active")}}><i class="fa-solid fa-pencil" style={{"color": "#47469b"}}></i></font>}
                              {row.status==0 && <font onClick={()=>{changeStatus(row._id,"Inactive")}}><i class="fa-solid fa-pencil" style={{"color": "#47469b"}}></i></font>}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <font onClick={()=>{changeStatus(row._id,"delete")}}><i class="fa-solid fa-trash-arrow-up" style={{"color": "#ff0000"}}></i></font>
                          </th> 
                          </tr>
                  ))
              }
          </table> */}

        {/* fdsljnvijbviseBU */}
        <div className="container mx-auto px-4 py-8 ">
     
      
      <div className="mb-4 p-4 flex flex-col sm:flex-row justify-between items-center text-center bg-[#6c5ce7] rounded-[20px] ">
      <h1 className="text-2xl font-bold text-white ">User Management</h1>
        <div className="relative w-full sm:w-64 sm:mb-0">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4  border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button
          // onClick={handleAddUser}
          className="w-full sm:w-auto px-4 py-2 bg-yellow-50 text-black rounded-lg border-2 border-transparent hover:border-white hover:text-white hover:bg-[#6c5ce7] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
          >
          <Plus size={20} className="mr-2" />
          Add User
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.no</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userDetails.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 whitespace-nowrap">{user._id}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.mobile}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.gender}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.password}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.role}</td>
                <td>
                    {user.status==1 && <font color="green">Active</font>}
                    {user.status==0 && <font color="orange">Inactive</font>}
                </td>
               
                <td className="px-4 py-2 whitespace-nowrap">
                  <button>
                    {user.status==1 && <Edit size={18} className="text-blue-600 hover:text-blue-800 mr-2" onClick={()=>{changeStatus(user._id,"active")}}/>}
                      {user.status==0 && <Edit size={18} className="text-blue-600 hover:text-blue-800 mr-2" onClick={()=>{changeStatus(user._id,"Inactive")}}/>}
                  </button>
                  <button
                  onClick={()=>{changeStatus(user._id,"delete")}}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
        </>
    );
}
export default Manageusers;