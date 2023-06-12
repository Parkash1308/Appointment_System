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

function App() {
  return (
   <>

       <Navbar/>
       <LogIn/>

        <Routes>

            <Route path='/registration' element={ <Registration />} />

        </Routes>



       {/*<Teacher />*/}




       {/*<div className='container-fluid bg-secondary min-vh-100 px-0'>*/}

       {/*       <div className='row'>*/}

       {/*        <div className='col-2 bg-white vh-100'>*/}

       {/*            <SidebarForTeacher />*/}

       {/*        </div>*/}
       {/*        <div className='col bg-white vh-100'>*/}
       {/*            <Routes>*/}

       {/*                <Route path='/appointments' element = { <NewRequestForAppointments /> } />*/}
       {/*                /!*<Route path='/appointments' element = { <Appointments /> } />*!/*/}
       {/*                /!*<Route path='/change-appoints' element = { <ChangeAppointments /> } />*!/*/}
       {/*                /!*<Route path='/all-meetings' element = { <Meetings /> } />*!/*/}
       {/*                <Route path='/dashboard' element = { <DashboardForTeacher /> } />*/}
       {/*                /!*<Route path='/cancel-appoints' element = { <CancelAppointments /> } />*!/*/}
       {/*                /!*<Route path='/log-out' element = { <LogOut /> } />*!/*/}
       {/*                /!*<Route path='/all-files' element = { <App /> } />}*!/*/}
       {/*                <Route path='/view-history' element={ <History/>} />*/}
       {/*                /!*<Route path='/App' element={ <App /> } />*!/*/}
       {/*                /!*<Route path='/registration' element={ <Registration /> } />*!/*/}
       {/*                <Route path='/new-request' element={ <NewRequestForAppointments /> } />*/}




       {/*            </Routes>*/}
       {/*        </div>*/}
       {/*    </div>*/}
       {/*</div>*/}












       {/*<div className='container-fluid bg-secondary min-vh-100 px-0'>*/}

       {/*       <div className='row'>*/}

       {/*        <div className='col-2 bg-white vh-100'>*/}

       {/*                <Sidebar />*/}

       {/*        </div>*/}
       {/*        <div className='col bg-white vh-100'>*/}
       {/*            <Routes>*/}
       {/*                <Route path='/appointments' element = { <Appointments /> } />*/}
       {/*                <Route path='/change-appoints' element = { <ChangeAppointments /> } />*/}
       {/*                /!*<Route path='/all-meetings' element = { <Meetings /> } />*!/*/}
       {/*                <Route path='/dashboard' element = { <Dashboard /> } />*/}
       {/*                /!*<Route path='/cancel-appoints' element = { <CancelAppointments /> } />*!/*/}
       {/*                /!*<Route path='/log-out' element = { <LogOut /> } />*!/*/}
       {/*                /!*<Route path='/all-files' element = { <App /> } />}*!/*/}
       {/*                <Route path='/view-history' element={ <History/>} />*/}
       {/*                /!*<Route path='/App' element={ <App /> } />*!/*/}
       {/*                <Route path='/registration' element={ <Registration /> } />*/}
       {/*                <Route path='/Login' element={ <LogIn /> } />*/}



       {/*            </Routes>*/}
       {/*        </div>*/}
       {/*    </div>*/}
       {/*</div>*/}



       {/*<History />*/}


   </>
  );
}

export default App;
