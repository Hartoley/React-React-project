import Admin from './Admin';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adminlogin from './Adminlogin';
import Admindas from './Admindas';
import Stundentsignup from './Stundentsignup';
import Studentlogin from './Studentlogin';
import Header from './Header';
import Studentsdash from './Studentsdash';


function App() {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Admin />}/>
          <Route path='/students/dashboard' element={<Studentsdash />} /> 
          <Route path='/students/login' element={<Studentlogin/>} /> 
          <Route path='/students/signup' element={<Stundentsignup />} /> 
          <Route path='/adminlogin' element={<Adminlogin />} /> 
          <Route path='/admindashboard/:id' exact element={<Admindas />} /> 
        </Routes>
    </>
  );
}

export default App;
