import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarCheck} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Appointments Scheduling System
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        </ul>

                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCalendarCheck} beat size="lg" style={{"--fa-primary-color": "#4278d7", "--fa-secondary-color": "#2143ca",}} />    </div>
                    </div>
                </div>
            </nav>






        </>
    )

}

export default Navbar;