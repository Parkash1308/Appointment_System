import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Appointments from "./components/Appointments";
import ChangeAppointments from "./components/ChangeAppointments";
import Meetings from "./components/Meetings";
import Dashboard from "./components/Dashboard";
import CancelAppointments from "./components/CancelAppointments";
import LogOut from "./components/LogOut";
import React from "react";
import LogIn from "./components/LogIn";
import History from "./components/History";
import Registration from "./components/Registration";
import Teacher from "./components/Teacher";
import SidebarForTeacher from "./components/SidebarForTeacher";
import NewRequestForAppointments from "./components/NewRequestForAppointments";
import DashboardForTeacher from "./components/DashboardForTeacher";
import ForgetPassword from "./components/ForgetPassword";
import Home from "./components/Home/Home";

function App() {
  return (
   <>
       <Navbar/>
        <Routes>
            <Route path='/' element={ <LogIn/> } />
            <Route path='/home' element={ <Home/> } />
            <Route path='/registration' element={ <Registration />} />
            <Route path='/forget-password' element={ <ForgetPassword />} />
            <Route path='/teacher' element={ <Teacher />} />
            <Route path='/teacher-appointments' element = { <NewRequestForAppointments /> } />
            <Route path='/dashboard-teacher' element = { <DashboardForTeacher /> } />
            <Route path='/view-history' element={ <History/>} />
            <Route path='/new-request' element={ <NewRequestForAppointments /> } />
            <Route path='/change-appoints' element={ <ChangeAppointments /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
            <Route path='/appointments' element={ <Appointments /> } />


        </Routes>


       {/*<Teacher />*/}




       {/*<div className='container-fluid bg-secondary min-vh-100 px-0'>*/}

       {/*       <div className='row'>*/}

       {/*        <div className='col-2 bg-white vh-100'>*/}

       {/*            <SidebarForTeacher />*/}

       {/*        </div>*/}
       {/*        <div className='col bg-white vh-100'>*/}
       {/*            <Routes>*/}


       {/*                <Route path='/appointments' element = { <Appointments /> } />*/}
       {/*                <Route path='/change-appoints' element = { <ChangeAppointments /> } />*/}
       {/*                <Route path='/all-meetings' element = { <Meetings /> } />*/}

       {/*                <Route path='/cancel-appoints' element = { <CancelAppointments /> } />*/}
       {/*                <Route path='/log-out' element = { <LogOut /> } />*/}
       {/*                <Route path='/all-files' element = { <App /> } />}*/}

       {/*                <Route path='/App' element={ <App /> } />*/}
       {/*                <Route path='/registration' element={ <Registration /> } />*/}





       {/*            </Routes>*/}
       {/*        </div>*/}
       {/*    </div>*/}
       {/*</div>*/}










        {/*For user Dashboard and other options*/}





       {/*<History />*/}


   </>
  );
}

export default App;
