import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { _apiurluser } from '../../ApiUrl';
import { useEffect } from "react";  

function Verifyuser() {
  const navigate = useNavigate();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');

    if (token) {
      axios.get(`http://localhost:8080/user/verify-email?token=${token}`)
        .then(response => {
          console.log(response.data);
          if (response.data.result === "Email verified successfully.") {
            // Agar verification successful ho, toh login page par navigate karein
            navigate('/login'); // Ensure karein ki yeh path aapke frontend par sahi hai
          }
        })
        .catch(error => {
          console.error("Verification failed:", error);
          alert("Verification failed! Link check karein.");
        });
    } else {
      alert("Verification ke liye koi token nahi diya gaya.");
    }
  }, [navigate]);

return (
<>
<div>Verifying your email...</div>;
</>
  
)}

export default Verifyuser;
