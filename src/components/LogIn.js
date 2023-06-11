import React from 'react';
import '../App.css';
import {useHistory} from "use-history";

// import { useHistory } from "react-router-dom";





function LogIn(){


    // const history = useHistory();
    //
    // const coursesPage = () => {
    //
    //     history.push("/App")
    //
    // }




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
                            <form>
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
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                        // onClick={coursesPage}
                                    >
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <a href="#!" className="link-danger">
                                            Register
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




