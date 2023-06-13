import React, { useState } from 'react';
import axios from 'axios';
const  Registration = () =>{
      const [first_name, setFirstName] = useState('');
      const [last_name, setLastName] = useState('');
      const [CMS_ID, setCmsId] = useState('');
      const [email, setEmail] = useState('');
      const [phone_number, setPhoneNumber] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [gender, setGender] = useState('');
      const [department, setDepartment] = useState('');
      const [role, setRole] = useState('');

      const handleSubmit = async (e)=>{
        e.preventDefault();

        if (
              first_name.trim() === '' ||
              last_name.trim() === '' ||
              CMS_ID.trim() === '' ||
              email.trim() === '' ||
              phone_number.trim() === '' ||
              password.trim() === '' ||
              confirmPassword.trim() === '' ||
              gender.trim() === '' ||
              department.trim() === '' ||
              role.trim() === ''
            ) {
              alert('Please fill in all the fields.');
              return;
            }

            if (password !== confirmPassword) {
              alert('Passwords do not match.');
              return;
            }

            const formData = {
                first_name,
                last_name,
                CMS_ID,
                email,
                phone_number,
                password,
                gender,
                department,
                role
              };


              try {
                 // Make the API request
                 const response = await  axios.post('http://localhost:8081/appointment/users', formData);
                 console.log(JSON.stringify( response.data));
                 console.log(JSON.stringify( e.target.elements.firstName.value));
                 console.log(JSON.stringify( e.target.elements.lastName.value));
                 console.log(JSON.stringify( e.target.elements.cmsId.value));
                 console.log(JSON.stringify( e.target.elements.phoneNumber.value));



                 if (response.status === 201) {
                   // Reset the form fields after successful submission

                   setFirstName('');
                   setLastName('');
                   setCmsId('');
                   setEmail('');
                   setPhoneNumber('');
                   setPassword('');
                   setConfirmPassword('');
                   setGender('');
                   setDepartment('');
                   setRole('');

                   alert('Form submitted successfully!');
                 } else {
                   // Handle API errors
                   alert('Error submitting the form. Please try again.'+response.status);
                 }
               } catch (error) {
                 // Handle network errors
                 alert('An error occurred. Please check your internet connection and try again.');
               }
             };





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
                                    <form  onSubmit={handleSubmit}>
                                        <div className="row">

                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">

                                                    <label className="form-label" htmlFor="firstName">
                                                        First Name
                                                    </label>

                                                    <input
                                                        type="text"
                                                        id="fName"
                                                        name="first_name"
                                                        className="form-control form-control-lg"
                                                        value={first_name}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        required
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
                                                        id="lName"
                                                        name="last_name"
                                                        className="form-control form-control-lg"
                                                        value={last_name}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        required
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
                                                        id="CMS-ID"
                                                        name="CMS_ID"
                                                        className="form-control form-control-lg"
                                                        value={CMS_ID}
                                                        onChange={(e) => setCmsId(e.target.value)}
                                                        required
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
                                                        defaultValue="option1"
                                                        checked={gender === 'female'}
                                                        onChange={(e)=>setGender('female')}
                                                        required
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
                                                        defaultValue="option2"
                                                        checked={gender === 'male'}
                                                        onChange={(e)=>setGender('male')}
                                                        required
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
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
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
                                                       name="phone_number"
                                                       className="form-control form-control-lg"
                                                       value={phone_number}
                                                       onChange={(e) => setPhoneNumber(e.target.value)}
                                                       required
                                                   />


                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">

                                                <select className="select form-control-lg me-5"
                                                    value={department}
                                                    onChange={(e)=>setDepartment(e.target.value)}
                                                >
                                                    <option value="" disabled>Choose Dept</option>
                                                      <option value="Computer Science">Computer Science</option>
                                                      <option value="Software Engineering">Software Engineering</option>
                                                      <option value="Computer Science Engineering">Computer Science Engineering</option>
                                                      <option value="Business Administration">Business Administration</option>
                                                      <option value="Education">Education</option>
                                                      <option value="Physical">Physical</option>
                                                      <option value="Media and Science Communication">Media and Science Communication</option>
                                                      <option value="Accounting and Finance">Accounting and Finance</option>

                                                </select>


                                                <select className="select form-control-lg "
                                                     value={role}
                                                     onChange={(e)=>setRole(e.target.value)}
                                                >
                                                    <option value="" disabled=""> Choose Role </option>
                                                    <option value="Student">Student</option>
                                                    <option value="Teacher">Teacher</option>
                                                </select>

                                            </div>
                                        </div>
                                        <br />

                                        <div className="row">

                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName"> Password </label>
                                                    <input
                                                    type="password"
                                                    id="password"
                                                    className="form-control form-control-lg"
                                                    value={password}
                                                    onChange={(e) =>setPassword(e.target.value)}
                                                    required

                                                    />
                                                </div>

                                            </div>

                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName"> Confirm Password </label>
                                                    <input
                                                    type="password"
                                                    id="confirmPassword"
                                                    className="form-control form-control-lg"
                                                    value={confirmPassword}
                                                    onChange={(event) =>setConfirmPassword(event.target.value)}
                                                    required
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2">
                                            <input  className="btn btn-primary btn-lg" type="submit" defaultValue="Submit" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Registration;