import React from "react"

const  Registration = () =>{


    return(

        <>


            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div
                                className="card shadow-2-strong card-registration"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">

                                                    <label className="form-label" htmlFor="firstName">
                                                        First Name
                                                    </label>

                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        className="form-control form-control-lg"
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">

                                                    <label className="form-label" htmlFor="lastName">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        className="form-control form-control-lg"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">

                                                    <label htmlFor="CMS-ID" className="form-label">
                                                        CMS-ID
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="CMS-ID"
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <h6 className="mb-2 pb-1">Gender: </h6>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="femaleGender"
                                                        defaultValue="option1"
                                                        defaultChecked=""
                                                    />
                                                    <label className="form-check-label" htmlFor="femaleGender">
                                                        Female
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="maleGender"
                                                        defaultValue="option2"
                                                    />
                                                    <label className="form-check-label" htmlFor="maleGender">
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="otherGender"
                                                        defaultValue="option3"
                                                    />
                                                    <label className="form-check-label" htmlFor="otherGender">
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">

                                                    <label className="form-label" htmlFor="emailAddress">
                                                        Email
                                                    </label>

                                                    <input
                                                        type="email"
                                                        id="emailAddress"
                                                        className="form-control form-control-lg"
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">

                                                    <label className="form-label" htmlFor="phoneNumber">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phoneNumber"
                                                        className="form-control form-control-lg"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <select className="select form-control-lg">

                                                    <label className="form-label select-label">
                                                        Choose option
                                                    </label>
                                                    <br />
                                                    <br />
                                                    <option value={1} disabled="">
                                                        Choose Dept
                                                    </option>
                                                    <option value={2}>Computer Science</option>
                                                    <option value={3}>Software Engineering</option>
                                                    <option value={5}>Computer Science Engineering</option>
                                                    <option value={5}>Business Administration</option>
                                                    <option value={6}>Education</option>
                                                    <option value={7}>Physical</option>
                                                    <option value={8}>Media and Science Communication</option>
                                                    <option value={9}>Accounting and Finance</option>

                                                </select>

                                            </div>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <input
                                                className="btn btn-primary btn-lg"
                                                type="submit"
                                                defaultValue="Submit"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>














            {/*<form>*/}
            {/*    <div className="form-row">*/}
            {/*        <div className="form-group col-md-6">*/}
            {/*            <label htmlFor="inputEmail4">First Name</label>*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                className="form-control"*/}
            {/*                id="inputEmail4"*/}
            {/*                placeholder="Write your First name here"*/}
            {/*            />*/}
            {/*        </div>*/}

            {/*        <div className="form-group col-md-6">*/}
            {/*            <label htmlFor="inputEmail4">Last Name</label>*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                className="form-control"*/}
            {/*                id="inputEmail4"*/}
            {/*                placeholder="Write your Last name here"*/}
            {/*            />*/}
            {/*        </div>*/}


            {/*        <div className="form-group col-md-6">*/}
            {/*            <label htmlFor="inputEmail4">CMS-ID</label>*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                className="form-control"*/}
            {/*                id="inputEmail4"*/}
            {/*                placeholder="Enter CMS-ID"*/}
            {/*            />*/}
            {/*        </div>*/}

            {/*        <div className="form-group col-md-6">*/}
            {/*            <label htmlFor="inputEmail4">Email</label>*/}
            {/*            <input*/}
            {/*                type="email"*/}
            {/*                className="form-control"*/}
            {/*                id="inputEmail4"*/}
            {/*                placeholder="Enter Email"*/}
            {/*            />*/}
            {/*        </div>*/}


            {/*        <div className="form-group col-md-4 py-2">*/}
            {/*            <label htmlFor="inputState">Department</label>*/}
            {/*            <select id="inputState" className="form-control">*/}
            {/*                <option selected="">Select your department</option>*/}
            {/*                <option>Computer Science</option>*/}
            {/*                <option>Software Engineering</option>*/}
            {/*                <option>Computer System Engineering</option>*/}
            {/*                <option>Business Administration</option>*/}
            {/*                <option>Education</option>*/}
            {/*                <option>Physical</option>*/}
            {/*                <option>Media and Science Communication</option>*/}
            {/*                <option>Accounting and Finance</option>*/}

            {/*            </select>*/}
            {/*        </div>*/}











            {/*    </div>*/}

            {/*    <div className="form-row">*/}

            {/*        /!*<div className="form-group col-md-4 py-2">*!/*/}
            {/*        /!*    <label htmlFor="inputState">Select Semester</label>*!/*/}
            {/*        /!*    <select id="inputState" className="form-control">*!/*/}
            {/*        /!*        <option selected="">Select Semester</option>*!/*/}
            {/*        /!*        <option>1st</option>*!/*/}
            {/*        /!*        <option>2nd</option>*!/*/}
            {/*        /!*        <option>3rd</option>*!/*/}
            {/*        /!*        <option>4th</option>*!/*/}
            {/*        /!*        <option>5th</option>*!/*/}
            {/*        /!*        <option>6th</option>*!/*/}
            {/*        /!*        <option>7th</option>*!/*/}
            {/*        /!*        <option>8th</option>*!/*/}

            {/*        /!*    </select>*!/*/}
            {/*        /!*</div>*!/*/}


            {/*        /!*<div className="form-group col-md-4 py-1">*!/*/}
            {/*        /!*    <label htmlFor="inputState">Teacher</label>*!/*/}
            {/*        /!*    <select id="inputState" className="form-control">*!/*/}
            {/*        /!*        <option selected="">Select Teacher</option>*!/*/}
            {/*        /!*        <option>Dr. Farzeel Anwar</option>*!/*/}
            {/*        /!*        <option>Dr. Saif Hassan</option>*!/*/}
            {/*        /!*        <option>Mr. Khalid Detho</option>*!/*/}
            {/*        /!*        <option>Engr. Fayyazuddin</option>*!/*/}
            {/*        /!*        <option>Dr. Muhammad Hussain Mughal</option>*!/*/}
            {/*        /!*        <option>Mr. Sohail Khan</option>*!/*/}
            {/*        /!*    </select>*!/*/}
            {/*        /!*</div>*!/*/}


            {/*        /!*<div className="form-group col-md-4 py-2">*!/*/}
            {/*        /!*    <label htmlFor="inputState">Is your class teacher?</label>*!/*/}
            {/*        /!*    <select id="inputState" className="form-control">*!/*/}
            {/*        /!*        <option selected="">Yes or No</option>*!/*/}
            {/*        /!*        <option>Yes</option>*!/*/}
            {/*        /!*        <option>No</option>*!/*/}


            {/*        /!*    </select>*!/*/}

            {/*        /!*</div>*!/*/}


            {/*    </div>*/}


            {/*</form>*/}

            {/*<div>*/}

            {/*    <form>*/}
            {/*        <fieldset disabled="">*/}
            {/*            /!*<div className="form-group py-2">*!/*/}
            {/*            /!*    <label htmlFor="disabledTextInput">Query</label>*!/*/}
            {/*            /!*    <input*!/*/}
            {/*            /!*        type="text"*!/*/}
            {/*            /!*        id="disabledTextInput"*!/*/}
            {/*            /!*        className="form-control"*!/*/}
            {/*            /!*        placeholder="Write your Query here"*!/*/}
            {/*            /!*    />*!/*/}
            {/*            /!*</div>*!/*/}

            {/*            /!*<div className="form-group col-md-4">*!/*/}
            {/*            /!*    <label htmlFor="inputState">Select date</label>*!/*/}
            {/*            /!*    <DatePicker*!/*/}
            {/*            /!*        showIcon*!/*/}
            {/*            /!*        selected={startDate}*!/*/}
            {/*            /!*        onChange={(date) => setStartDate(date)}*!/*/}
            {/*            /!*    />*!/*/}

            {/*            /!*</div>*!/*/}



            {/*            <button type="submit" className="btn btn-primary btn-sm">*/}
            {/*                Save*/}
            {/*            </button>*/}
            {/*        </fieldset>*/}
            {/*    </form>*/}


            {/*</div>*/}



        </>

    );
}

export default Registration;