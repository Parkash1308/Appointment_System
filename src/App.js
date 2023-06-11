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

function App() {
  return (
   <>
       <div className='container-fluid bg-secondary min-vh-100 px-0'>
           <Navbar/>

           <div className='row'>


               <div className='col-2 bg-white vh-100'>
                   <Sidebar />
               </div>
               <div className='col bg-white vh-100'>
                   <Routes>
                       <Route path='/appointments' element = { <Appointments /> } />
                       <Route path='/change-appoints' element = { <ChangeAppointments /> } />
                       <Route path='/all-meetings' element = { <Meetings /> } />
                       {/*<Route path='/dashboard' element = { <Dashboard /> } />*/}
                       {/*<Route path='/cancel-appoints' element = { <CancelAppointments /> } />*/}
                       <Route path='/log-out' element = { <LogOut /> } />

                   </Routes>
               </div>

           </div>



       </div>



       {/*<LogIn />*/}














   </>
  );
}

export default App;
