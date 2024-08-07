import Admin from './Admin';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adminlogin from './Adminlogin';
import Admindas from './Admindas';
import Stundentsignup from './Stundentsignup';
import Studentlogin from './Studentlogin';
import Header from './Header';
import Studentsdash from './Studentsdash';
import Uploadvideo from './Uploadvideo';
import Subcategory from './Subcategory';
import Updatecourse from './Udatecourse';


function App() {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Admin />}/>
          <Route path='/students/dashboard/:id' element={<Studentsdash />} /> 
          <Route path='/students/login' element={<Studentlogin/>} /> 
          <Route path='/students/signup' element={<Stundentsignup />} /> 
          <Route path='/adminlogin' element={<Adminlogin />} /> 
          <Route path='/admindashboard/:id' element={<Admindas />} /> 
          <Route path='/uploadVideo/:courseId' element={<Uploadvideo />} /> 
          <Route path="/course/:courseId" element={<Subcategory/>} />
          <Route path="/editcourse/:courseId" element={<Updatecourse/>} />
         
        </Routes>
    </>
  );
}

export default App;
