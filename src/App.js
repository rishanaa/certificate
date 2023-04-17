import React from "react";
import {BrowserRouter as Router ,Routes ,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './certificate/login/login';
import Home from './certificate/home/home';
 import Dashboard from './certificate/dashboard/dashboard';
 import Dpage4 from './certificate/dashboard/dpage4'
 import Dpage2 from './certificate/dashboard/dpage2'
import Dpage3 from './certificate/dashboard/dpage3'
import Allstudents from './certificate/dashboard/allstudents'
import Allcourses from './certificate/dashboard/allcourse'
import Updatecourses from './certificate/dashboard/updatecourse'
import Createcourses from './certificate/dashboard/createcourse'
import Allcategory from './certificate/dashboard/allcategory'
import Updatecategory from './certificate/dashboard/updatecategory'
import Createcategory from './certificate/dashboard/createcategory'
import StudentCourse from './certificate/dashboard/studentcourse'
import Crtstdntcrs from './certificate/dashboard/createstudentcourse'
import Certificate from "./certificate/store/certificate/certificate";
function App () {
  return(
    <Router>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
         <Route path='/dashboard' element={<Dashboard/>} /> 
         <Route path='/allstudents' element={<Dpage2/>}/> 
        <Route path='/updatestudent/:id' element={<Dpage3/>}/>
        <Route path='/createstudent' element={<Dpage4/>}/>
        <Route path='/details/:id' element={<Allstudents/>}/>
        <Route path='/allcourses' element={<Allcourses/>}/>
        <Route path='/updatecourses/:id' element={<Updatecourses/>}/>
        <Route path='/createcourses' element={<Createcourses/>}/>
        <Route path='/allcategory' element={<Allcategory/>} />
        <Route path='/updatecategory/:id' element={<Updatecategory/>} />
        <Route path='/createcategory' element={<Createcategory/>} />
        <Route path='/studentcourse' element={<StudentCourse/>} />
        <Route path='/createstudentcourse' element={<Crtstdntcrs/>} />
        <Route path='/certificate' element={<Certificate/>}/>

      </Routes>
      
    </Router>
   
   
   
  );
};
export default App;