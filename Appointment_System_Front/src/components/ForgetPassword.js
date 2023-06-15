import React from "react";

const ForgetPassword =()=>{

    return(

        <>

            <section
                className="vh-100 bg-image"
                style={{
                    backgroundImage:
                        'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
                }}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">
                                            Create an account
                                        </h2>
                                        <form>
                                            <div className="form-outline mb-4">

                                                <label className="form-label" htmlFor="form3Example1cg">
                                                    CMS-ID
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control "
                                                    placeholder="Enter CMS-ID"
                                                />

                                            </div>

                                            <div className="form-outline mb-4">

                                                <label className="form-label" htmlFor="form3Example4cg">
                                                    Password
                                                </label>

                                                <input
                                                    type="password"
                                                    id="form3Example4cg"
                                                    className="form-control "
                                                    placeholder="Enter Password"
                                                />

                                            </div>
                                            <div className="form-outline mb-4">

                                                <label className="form-label" htmlFor="form3Example4cdg">
                                                    Repeat your password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="form3Example4cdg"
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                />

                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-white"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default ForgetPassword;