import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [cmsId, setCmsId] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [teacher_cms, setTeacherId] = useState('');
  const [showTeacherId, setShowTeacherId] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      first_name.trim() === '' ||
      last_name.trim() === '' ||
      cmsId.trim() === '' ||
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
      cmsId,
      email,
      phone_number,
      password,
      gender,
      department,
      role,
      teacher_cms: role === 'Student' ? teacher_cms : null,
    };

    try {
      // Make the API request
      const response = await axios.post('http://localhost:8081/appointment/users', formData);
      console.log(JSON.stringify(response.data));

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
        setTeacherId('');

        alert('Form submitted successfully!');
      } else {
        // Handle API errors
        alert('Error submitting the form. Please try again.' + response.status);
      }
    } catch (error) {
      // Handle network errors
      alert('An error occurred. Please check your internet connection and try again.' + error);
    }
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === 'Student') {
      setShowTeacherId(true);
    } else {
      setShowTeacherId(false);
      setTeacherId('');
    }
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form onSubmit={handleSubmit}>
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
                            name="cmsId"
                            className="form-control form-control-lg"
                            value={cmsId}
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
                            value="female"
                            checked={gender === 'female'}
                            onChange={() => setGender('female')}
                            required
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
                            value="male"
                            checked={gender === 'male'}
                            onChange={() => setGender('male')}
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
                            value="other"
                            checked={gender === 'other'}
                            onChange={() => setGender('other')}
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
                            className="form-control form-control-lg"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="confirmPassword">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control form-control-lg"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="role">
                            Role
                          </label>
                          <select
                            id="role"
                            name="role"
                            className="form-select form-control-lg"
                            value={role}
                            onChange={handleRoleChange}
                            required
                          >
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="department">
                            Department
                          </label>
                          <select
                            className="select form-control-lg me-5"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                          >
                            <option value="" disabled>
                              Choose Department
                            </option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Computer Science Engineering">Computer Science Engineering</option>
                            <option value="Business Administration">Business Administration</option>
                            <option value="Education">Education</option>
                            <option value="Physical">Physical</option>
                            <option value="Media and Science Communication">Media and Science Communication</option>
                            <option value="Accounting and Finance">Accounting and Finance</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {showTeacherId && (
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="teacherId">
                              Teacher ID
                            </label>
                            <input
                              type="text"
                              id="teacherId"
                              name="teacher_cms"
                              className="form-control form-control-lg"
                              value={teacher_cms}
                              onChange={(e) => setTeacherId(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">
                          Submit
                        </button>
                      </div>
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
};

export default Registration;
