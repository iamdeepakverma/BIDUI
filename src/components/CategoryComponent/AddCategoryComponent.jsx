import "./category.css";
import { useState, useEffect } from "react";
import { _apiurlcategory, _apiurluser } from "../../ApiUrl";
import axios from "axios";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CloudUploadIcon } from "lucide-react";
// import { Navigate, useNavigate } from 'react-router-dom';

function AddCategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();
  const [clist, setCategoryList] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };
    axios.post(_apiurlcategory + "save", formData, config).then((response) => {
      setCatName("");
      setOutput("Add sucessfully");
    });
  };
  useEffect(() => {
    axios
      .get(_apiurlcategory + "fetch")
      .then((response) => {
        setCategoryDetails(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deleteCategory = (_id) => {
    let s = window.confirm("Are u sure u want to delete?");
    if (s == true) {
      let deleteCategoryDetails = { data: { _id: _id } };
      axios
        .delete(_apiurlcategory + "delete", deleteCategoryDetails)
        .then((response) => {});
    } else {
      alert("User not removed.....");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <>
      {/* <div class="container header-1">
        <h1>Add Category</h1>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          class="btn btn-danger "
        >
          Add Category
        </button>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header" id="add-category">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Category
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
                <font>{output}</font>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="catnm" class="col-form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="file" class="col-form-label">
                    Category Icon
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br /> */}
      {/* this is add category modaal */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Category
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 ,mb:2}}>
              <TextField
                id="outlined-basic"
                label="Category Name"
                variant="outlined"
                sx={{ width: "300px" }}
                onChange={(e) => setCatName(e.target.value)}
              />
            </Typography>
            {/* <Typography sx={{mb:2}}>
            Category Icon
            </Typography> */}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Product Photo
              <VisuallyHiddenInput
               onChange={handleChange}
                type="file"
                // onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
            <Box sx={{mt:5,display:"flex",justifyContent:"flex-end",columnGap:"5px"}}>
            <Button  onClick={handleSubmit} variant="contained">Save</Button>
            <Button  variant="outlined">Cancel</Button>
            </Box>
          </Box>
        </Modal>
      </div>
      {/* <!-- Team Start --> */}
      {/* <div class="container-fluid pt-5  ">
        <div class="container  ">
          <div class="row ff ">
            {clist.map((row) => (
              <div class="col-lg-4 col-md-3 ">
                <div class="team card overflow-hidden border-0 mb-5 ">
                  <img
                    class="card-img-top "
                    src={`assets/uploads/caticons/${row.caticonnm}`}
                    alt=""
                  />
                  <div class="card-body text-center p-0">
                    <div class="team-text d-flex flex-column justify-content-end bg-secondary">
                      <h5 class="font-weight-bold">
                        <b>{row.catnm}</b>
                      </h5>
                      <span>Designation</span>
                    </div>
                    <div class="team-social d-flex align-items-center justify-content-center bg-primary">
                      <a class="btn btn-outline-dark btn-social mr-2" href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a class="btn btn-outline-dark btn-social mr-2" href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a class="btn btn-outline-dark btn-social mr-2" href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a class="btn btn-outline-dark btn-social" href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      sdvbiadbida */}

      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        <div className="flex justify-between m-2">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Add Category
          </h1>
          <button
            onClick={handleOpen}
            class="bg-blue-500 text-white font-bold py-2 px-4 h-12 rounded hover:bg-blue-700 hover:text-gray-200 transition duration-300 focus:outline-none"
          >
            Add Category
          </button>
        </div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  S.No
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Product Name
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Product Icon
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            {categoryDetails.map((Product) => (
              <tbody className="divide-y divide-gray-200">
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 text-sm text-gray-500">
                    {Product._id}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {Product.catnm}
                  </td>
                  <td className="py-4 px-6">
                    <div className="relative w-20 h-20 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={`assets/uploads/caticons/${Product.caticonnm}`}
                        alt={Product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300 transform hover:scale-105"
                      onClick={() => {
                        deleteCategory(Product._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {categoryDetails.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No products available.
          </p>
        )}
      </div>
    </>
  );
}

export default AddCategory;
