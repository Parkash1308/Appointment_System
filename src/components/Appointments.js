import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointments = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (

        <>
            <form>
                <div className="form-row">
                    {/*<div className="form-group col-md-6">*/}
                    {/*    <label htmlFor="inputEmail4">Full Name</label>*/}
                    {/*    <input*/}
                    {/*        type="email"*/}
                    {/*        className="form-control"*/}
                    {/*        id="inputEmail4"*/}
                    {/*        placeholder="Write your full name here"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*<div className="form-group col-md-6">*/}
                    {/*    <label htmlFor="inputEmail4">Email</label>*/}
                    {/*    <input*/}
                    {/*        type="email"*/}
                    {/*        className="form-control"*/}
                    {/*        id="inputEmail4"*/}
                    {/*        placeholder="Write your Email here"*/}
                    {/*    />*/}
                    {/*</div>*/}

                </div>

                <div className="form-row">

                    {/*<div className="form-group col-md-4 py-2">*/}
                    {/*    <label htmlFor="inputState">Select Semester</label>*/}
                    {/*    <select id="inputState" className="form-control">*/}
                    {/*        <option selected="">Select Semester</option>*/}
                    {/*        <option>1st</option>*/}
                    {/*        <option>2nd</option>*/}
                    {/*        <option>3rd</option>*/}
                    {/*        <option>4th</option>*/}
                    {/*        <option>5th</option>*/}
                    {/*        <option>6th</option>*/}
                    {/*        <option>7th</option>*/}
                    {/*        <option>8th</option>*/}

                    {/*    </select>*/}
                    {/*</div>*/}


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


                    {/*<div className="form-group col-md-4 py-2">*/}
                    {/*    <label htmlFor="inputState">Is your class teacher?</label>*/}
                    {/*    <select id="inputState" className="form-control">*/}
                    {/*        <option selected="">Yes or No</option>*/}
                    {/*        <option>Yes</option>*/}
                    {/*        <option>No</option>*/}


                    {/*    </select>*/}

                    {/*</div>*/}


                </div>


            </form>

            <div>

                <form>
                    <fieldset disabled="">
                        <div className="form-group py-2">
                            <label htmlFor="disabledTextInput">Query</label>
                            <input
                                type="text"
                                id="disabledTextInput"
                                className="form-control"
                                placeholder="Write your Query here"
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Select date</label>
                            <DatePicker
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />

                        </div>



                        <button type="submit" className="btn btn-primary btn-sm">
                            Scheduled Appointment
                        </button>
                    </fieldset>
                </form>


            </div>


        </>
    );

}

export default Appointments;