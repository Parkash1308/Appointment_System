import React from "react";

const NewRequestForAppointments =()=>{

    return(
        <>


            <div>
                <h3 className='d-flex justify-content-center py-3 px-3 underline'><u>Meeting Requests Received from Students</u></h3>
            </div>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">CMS-ID</th>
                    <th scope="col">Student Name</th>


                    <th scope="col">Date</th>
                    <th scope="col">Write time</th>
                    <th scope="col">Action</th>


                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>021-00-0000</td>
                    <td>Yaseen</td>


                    <td>22th June,2023</td>
                    <td>
                        <div>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" />

                        </div>
                    </td>
                    <td>
                        <span>
                            <button className="btn btn-danger btn-sm me-2">Delete</button>
                            <button className="btn btn-success btn-sm">Accept</button>
                        </span>

                    </td>

                </tr>

                </tbody>
            </table>


        </>
    );


}

export default NewRequestForAppointments;