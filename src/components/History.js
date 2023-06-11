import React from 'react';

const History =() =>{


    return(
        <>


            <div>
                <h3 className='d-flex justify-content-center py-3 px-3 underline'><u>Meetings that have already taken place</u></h3>
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
                            <button className="btn btn-primary btn-sm">Scheduled Meetings</button>
                        </span>

                    </td>

                </tr>

                </tbody>
            </table>



        </>

    )
}

export default History;