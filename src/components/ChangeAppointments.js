import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ChangeAppointments = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (

        <>
            <h1 className="d-flex justify-content-center "><u>Change Appointment</u></h1>

            <div className="form-group col-md-4 py-1">
                <label htmlFor="inputState">Teacher</label>
                <select id="inputState" className="form-control">
                    <option selected="">Select Teacher</option>
                    <option>Dr. Farzeel Anwar</option>
                    <option>Dr. Saif Hassan</option>
                    <option>Mr. Khalid Detho</option>
                    <option>Engr. Fayyazuddin</option>
                    <option>Dr. Muhammad Hussain Mughal</option>
                    <option>Mr. Sohail Khan</option>
                </select>
            </div>



            <div>

                <form>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"><h5>Write a reason for re-scheduled your meeting.</h5></label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                </form>

            </div>



                <div className="form-group col-md-4">
                    <label htmlFor="inputState"><h5>Select Expected Date</h5></label>
                    <DatePicker
                        showIcon
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />

                </div>

            <br/>


            <div>
                <br />
                <h5><u>Note</u></h5>

                <p>Your request to change the date will be forwarded to your teacher, who will inform you as soon as possible.</p>
            </div>

            <button className="btn btn-primary btn-sm">Send Request</button>













        </>
    );


}

export default ChangeAppointments;