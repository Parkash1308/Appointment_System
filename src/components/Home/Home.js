import React from 'react';
import Sidebar from "../Sidebar";
import {Route, Routes} from "react-router-dom";
import Appointments from "../Appointments";
import ChangeAppointments from "../ChangeAppointments";
import Dashboard from "../Dashboard";
import History from "../History";
import Registration from "../Registration";
import LogIn from "../LogIn";

const Home = () => {
    return (
        <>
            <div className='container-fluid bg-secondary min-vh-100 px-0'>

                <div className='row'>

                    <div className='col-2 bg-white vh-100'>

                        <Sidebar />

                    </div>
                    <div className='col bg-white vh-100'>
                        <Routes>
                            <Route path='/appointments' element = { <Appointments /> } />
                            <Route path='/change-appoints' element = { <ChangeAppointments /> } />
                            {/*<Route path='/all-meetings' element = { <Meetings /> } />*/}
                            <Route path='/dashboard' element = { <Dashboard /> } />
                            {/*<Route path='/cancel-appoints' element = { <CancelAppointments /> } />*/}
                            {/*<Route path='/log-out' element = { <LogOut /> } />*/}
                            {/*<Route path='/all-files' element = { <App /> } />}*/}
                            <Route path='/view-history' element={ <History/>} />
                            {/*<Route path='/App' element={ <App /> } />*/}
                            <Route path='/registration' element={ <Registration /> } />
                            <Route path='/Login' element={ <LogIn /> } />



                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;