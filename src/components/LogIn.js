import React,{useState} from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";
import { Routes, Route, Link} from 'react-router-dom';
import Sidebar from "./Sidebar";
import Appointments from "./Appointments";
import ChangeAppointments from "./ChangeAppointments";
import Dashboard from "./Dashboard";
import LogOut from "./LogOut";
import History from "./History";
import App from "../App";
import axios from 'axios';
import cors from '../cors';


// import { useHistory } from "react-router-dom";





function LogIn(){
     //const history = useHistory();
    const [cmsId, setCmsId] = useState('');
    const [password, setPassword] = useState('');


    // const history = useHistory();
    //
    // const coursesPage = () => {
    //
    //     history.push("/App")
    //
    // }


    const handleLogin = async(e) => {
            e.preventDefault();
            if (
                  cmsId.trim() === '' ||
                  password.trim() === ''
            ){
               alert('Please fill in all the fields.');
               return;
            }
    const formData={
        cmsId,
        password
    }
    try{
            const response = await axios.get('http://localhost:8081/appointment/users/' +cmsId)
            console.log(JSON.stringify(response.data));


            if(response.status === 201){
                setCmsId('');
                setPassword('');
               // alert('login successfully!');
                const { cmsId: responseCmsId, password: responsePassword } = response.data;

                        if (responseCmsId === cmsId && responsePassword === password) {
                          setCmsId('');
                          setPassword('');
                          alert('Login successful!');
                         // history.push("/home"); // Redirect to the home page after successful login
                        } else {
                          alert("Invalid CMS-ID or password");
                        }

            }else{
                alert("login failed")
            }
       }catch(err){
        alert("network error: " + err)
       }


    }



    return(

        <>

            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://www.isitwp.com/wp-content/uploads/2021/03/bestappointmentschedulingsoftware.png"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleLogin}>
                                {/* Email input */}
                                <div className="form-outline mb-4">

                                    <label className="form-label" htmlFor="form3Example3">
                                        CMS-ID
                                    </label>
                                    <input
                                        type="text"
                                        id="form3Example3"
                                        className="form-control form-control"
                                        placeholder="Enter CMS-ID"
                                        name="cmsId"
                                        value={cmsId}
                                        onChange={(e)=>setCmsId(e.target.value)}
                                        required
                                    />

                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">

                                    <label className="form-label" htmlFor="form3Example4">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control"
                                        placeholder="Enter password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />

                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            defaultValue=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">
                                        <Link to="/forget-password" className="text-danger">Forget Password </Link>
                                    </a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                                                              login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <a href="#!" className="link-danger">
                                            <Link to="/registration" className="text-success" >Register </Link>
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    {/* Copyright */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2023. All rights reserved.
                    </div>

                </div>
            </section>















        </>


    );


}


export default LogIn




