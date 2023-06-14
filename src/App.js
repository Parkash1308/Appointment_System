import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Appointments from "./components/Appointments";

function App() {
  return (
   <>
    <Navbar/>

       <div className='container-fluid bg-secondary min-vh-100'>

           <div className='row'>


               <div className='col-2 bg-white vh-100'>
                   <Sidebar />
               </div>

           </div>



       </div>




   </>
  );
}

export default App;
