import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-solid-svg-icons";
import app from '../SVGs/calendar.png'
import change from '../SVGs/change.png'
import meeting from '../SVGs/meeting.png'
import cancel2 from '../SVGs/cancel.png'
import Appointments from "./Appointments";
import {Routes, Route, Link} from "react-router-dom";
import ChangeAppointments from "./ChangeAppointments";
import Meetings from "./Meetings";
import Dashboard from "./Dashboard";
// import CancelAppointments from "./CancelAppointments";
import LogOut from "./LogOut";


const Sidebar =() => {

        return (

            <>
            <div className='bg-white sidebar p-2'>

                <div className='m-2'>
                    <FontAwesomeIcon className='me-3' icon={faUser} size="lg" style={{color: "#578be5",}} />

                    <span className='brand-name fs-7'>User</span>
                </div>

                <hr className='text-dark'/>
                <div className='list-group list-group-flush'>

                    <a className='list-group-item py-2'>
                        <i className='bi bi-speedometer2 fs-5 me-3'></i>
                        <span className='fs-7'><Link to="/dashboard" >Dashboard </Link></span>
                    </a>

                    <a className='list-group-item py-2'>

                        <img src={app} alt="A log of Appointments" className='me-3 fs-5' />
                         <span className='fs-7'> <Link to="/appointments" >Appointments </Link> </span>

                    </a>

                    <a className='list-group-item py-2'>
                        <img src={change} alt="A log of Appointments" className='me-3 fs-7' />
                        <span className='fs-9'><Link to="/change-appoints" >Change Appoint </Link> </span>
                    </a>

                    {/*<a className='list-group-item py-2'>*/}
                    {/*    <img src={meeting} alt="A log of Appointments" className='me-3 fs-7' />*/}

                    {/*    <span className='fs-7' ><Link to="/all-meetings" >Meetings </Link></span>*/}
                    {/*</a>*/}

                    {/*<a className='list-group-item py-2'>*/}
                    {/*    <img src={cancel2} alt="A log of Appointments" className='me-3 fs-7' />*/}
                    {/*    <span className='fs-9'><Link to="/cancel-appoints" >Cancel Appoint </Link></span>*/}
                    {/*</a>*/}

                    <a className='list-group-item py-2'>
                        <i className='bi bi-power fs-7 me-3'></i>

                        <span className='fs-7'><Link to="/log-out" >Log Out </Link></span>
                    </a>

                </div>


            </div>



            </>









        );

}

export default Sidebar;