import React from "react";
import { Routes, Route, Link} from 'react-router-dom';
import History from "./History";
import Sidebar from "./Sidebar";

const Dashboard =() =>{


    return(

        <>


            <div className='container-fluid bg-secondary min-vh-100 px-0'>

                <div className='row'>

                    <div className='col-2 bg-white vh-100'>

                        <Sidebar />

                    </div>
                    <div className='col bg-white vh-100'>


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
                            <button className="btn btn-success btn-sm"><Link to="/view-history" className="text-white" >View history </Link></button>
                        </div>

                        <Routes>
                            <Route path='/view-history' element = { <History/> } />

                        </Routes>





                    </div>
                </div>
            </div>




























        </>

    );
}

export default Dashboard;

