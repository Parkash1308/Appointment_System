import React from "react";
import { Routes, Route, Link} from 'react-router-dom';
import History from "./History";

const DashboardForTeacher =() =>{


    return(

        <>


            <div>
                <h3 className='d-flex justify-content-center py-3 px-3 underline'><u>Here Is Your All Scheduled Meetings!</u></h3>
            </div>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">CMS-ID</th>
                    <th scope="col">Student's Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>




                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>021-21-0000</td>
                    <td>Yaseen</td>
                    <td>12:45 pm</td>
                    <td>AB-1,R-09</td>
                    <td>22th June,2023</td>
                    <td>
                        <span>
                            <button className="btn btn-danger btn-sm me-2">Delete</button>
                            <button className="btn btn-primary btn-sm">Edit</button>
                        </span>

                    </td>

                </tr>

                </tbody>
            </table>

            <div>
                <button className="btn btn-success btn-sm text-white"><Link to="/view-history"  className="text-white">View history </Link></button>
            </div>

            <Routes>
                <Route path='/view-history' element = { <History/> } />

            </Routes>






        </>

    );
}

export default DashboardForTeacher;

