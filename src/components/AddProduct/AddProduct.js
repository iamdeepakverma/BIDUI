import axios from 'axios';
import './ViewProduct.css';
import { useState, useEffect } from 'react';
import { _apiurlcategory, _apiurluser, _apiurlsubcategory, } from '../../ApiUrl';
import { _apiurlproduct } from '../../ApiUrl';

function AddProduct() {
    const [categoryDetails, setCategoryDetails] = useState([]);
    const [scList, setSubCatList] = useState([]);
    const [catnm, setCatName] = useState();
    const [subcatnm, setSubCatName] = useState();
    const [Pprice, setPprice] = useState();
    const [file, setFile] = useState();
    const [PTitle, setPTitle] = useState();
    const [description, setdescription] = useState();
    const [Output, setOutput] = useState();


    useEffect(() => {
        axios.get(_apiurlcategory + "fetch").then((response) => {
            setCategoryDetails(response.data)
            // console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    })

    const fetchSubCategory = (catnm) => {
        axios.get(_apiurlsubcategory + "fetch?catnm=" + catnm).then((response) => {
            setCatName(catnm);
            setSubCatList(response.data);
            //console.log(response.data)
        })
    }

    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    const haldlesubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('ptitle', PTitle);
        formData.append('catnm', catnm);
        formData.append('subcatnm', subcatnm);
        formData.append('description', description);
        formData.append('baseprice', Pprice);
        formData.append('piconnm', file);
        formData.append('uid', localStorage.getItem("email"));
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiurlproduct + "save", formData, config).then((response) => {
            setPTitle("");
            setCatName("");
            setSubCatName("");
            setdescription("");
            setPprice("");
            setOutput("Product Added Sucessfull")
            //console.log(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <section className="testimonial py-5" id="testimonial">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 py-5 bg-primary text-white text-center ">
                            <div className=" ">
                                <div className="card-body">
                                    <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ "width": "30%" }} />
                                    <h2 className="py-3">Registration</h2>
                                    <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 py-5 border">
                            <h4 className="pb-4">Please fill with your details</h4>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input id="text" name="Full Name" placeholder="Product Title" className="form-control" type="text" value={PTitle} onChange={(e) => { setPTitle(e.target.value) }} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select id="inputState" class="form-control" value={catnm} onChange={(e) => { fetchSubCategory(e.target.value) }}>
                                            <option selected>Select Category</option>
                                            {
                                                categoryDetails.map((row) => (
                                                    <option>{row.catnm}</option>
                                                ))
                                            }
                                        </select>
                                        {/* <input type="text" className="form-control" id="inputEmail4" placeholder="Add Category" /> */}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select id="" class="form-control" value={subcatnm} onChange={e => setSubCatName(e.target.value)}>
                                            <option selected>Select Sub Category</option>
                                            {
                                                scList.map((row) => (
                                                    <option>{row.subcatnm}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group col-md-6 ">
                                        <input type="number" className="form-control" placeholder="Base Price" value={Pprice} onChange={e => setPprice(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="file" class="form-control" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <textarea id="comment" name="comment" cols="30" rows="5" className="form-control" value={description} onChange={e => setdescription(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <span>{Output}</span>
                                <div className="form-row">
                                    <button type="button" className="btn btn-danger" onClick={haldlesubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AddProduct;