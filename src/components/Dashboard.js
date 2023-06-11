import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import History from "./History";

const Dashboard =() =>{


    return(

        <>


            <div>
                <h3 className='d-flex justify-content-center py-3 px-3 underline'><u>Here Is Your All Scheduled Meetings!</u></h3>
            </div>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">INS-ID</th>
                    <th scope="col">Teacher's Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Action</th>




                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>INS-1204</td>
                    <td>Dr. Saif Hassan</td>
                    <td>12:45 pm</td>
                    <td>AB-1,R-09</td>
                    <td>
                        <span>
                            <button className="btn btn-primary btn-sm">Edit</button>
                        </span>

                    </td>

                </tr>

                </tbody>
            </table>

            <div>
                <button className="btn btn-success btn-sm"><Link to="/view-history" >View history </Link></button>
            </div>

                        <Routes>
                            <Route path='/appointments' element = { <History/> } />

                        </Routes>






        </>

    );
}

export default Dashboard;







// import React from 'react';
//
// const Dashboard = () =>{
//
//
//     return(
//         <>
//
//             <section className="vh-100">
//                 <div className="container-fluid h-custom">
//                     <div className="row d-flex align-items-center h-100">
//                         {/*<div className="col-md-9 col-lg-6 col-xl-5">*/}
//                         {/*    <img*/}
//                         {/*        src="https://www.isitwp.com/wp-content/uploads/2021/03/bestappointmentschedulingsoftware.png"*/}
//                         {/*        className="img-fluid"*/}
//                         {/*        alt="Sample image"*/}
//                         {/*    />*/}
//                         {/*</div>*/}
//                         <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                             <form>
//                                 {/* Email input */}
//                                 <div className="form-outline mb-4">
//
//                                     <label className="form-label" htmlFor="form3Example3">
//                                         CMS-ID
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="form3Example3"
//                                         className="form-control form-control"
//                                         placeholder="Enter CMS-ID"
//                                     />
//
//                                 </div>
//                                 {/* Password input */}
//                                 <div className="form-outline mb-3">
//
//                                     <label className="form-label" htmlFor="form3Example4">
//                                         Password
//                                     </label>
//                                     <input
//                                         type="password"
//                                         id="form3Example4"
//                                         className="form-control form-control"
//                                         placeholder="Enter password"
//                                     />
//
//                                 </div>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     {/* Checkbox */}
//                                     <div className="form-check mb-0">
//                                         <input
//                                             className="form-check-input me-2"
//                                             type="checkbox"
//                                             defaultValue=""
//                                             id="form2Example3"
//                                         />
//                                         <label className="form-check-label" htmlFor="form2Example3">
//                                             Remember me
//                                         </label>
//                                     </div>
//                                     <a href="#!" className="text-body">
//                                         Forgot password?
//                                     </a>
//                                 </div>
//                                 <div className="text-center text-lg-start mt-4 pt-2">
//                                     <button
//                                         type="button"
//                                         className="btn btn-primary btn-sm"
//                                         style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
//                                         // onClick={coursesPage}
//                                     >
//                                         Login
//                                     </button>
//                                     <p className="small fw-bold mt-2 pt-1 mb-0">
//                                         Don't have an account?{" "}
//                                         <a href="#!" className="link-danger">
//                                             Register
//                                         </a>
//                                     </p>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="col-md-9 col-lg-6 col-xl-6">
//                             <img
//                                 src="https://fullscale.io/wp-content/uploads/2022/04/top-appointment-scheduling-software-1.png"
//
//                                 height='1000'
//                                 width='700'
//                                 className="img-fluid img-thumbnail"
//                                 alt="Sample image"
//                             />
//                         </div>
//                     </div>
//                 </div>
//
//             </section>
//
//
//
//         </>
//     )
// }
//
// export default Dashboard