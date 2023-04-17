import React from 'react'
import { Link } from 'react-router-dom';
import './dsidebar.css'
function Dsidebar() {
      
  return (
    <div className='dsidebar'>
      <h4>MENU</h4>
      <nav>
            <ul className='ul1'>
                  <li><h5><i class="fa-solid fa-house-user"></i>
                  <Link to='/dashboard'>Dashboard</Link>
                  </h5></li>
            <li><h5><i class="fa-regular fa-user"></i> Students</h5>
               <ul>
                  <Link to='/allstudents'>All Students</Link><br />
                  <Link to='/studentcourse'>Student Course</Link><br/>
                  <Link to='/createstudent'>Create Student</Link>
                  
               </ul></li>
            <li><h5><i class="fa-solid fa-book"></i> Courses </h5>
                  <ul>
                        <Link to='/allcourses'>All Courses</Link><br/>
                        <Link to='/updatecourses'>Update Courses</Link><br/>
                        <Link to='/createcourses'>Create Courses</Link>
                  </ul>
            </li>
            <li><h5><i class="fa-solid fa-users-between-lines"></i> Course Category</h5>
                  <ul>
                        <Link to='/allcategory'>All Courses Category</Link><br/>
                        <Link to='/updatecategory'>Update Courses Category</Link><br/>
                        <Link to='/createcategory'>Create Courses Category</Link>
                        </ul>
                        </li>
            </ul>
      </nav>
    </div>
  )
}

export default Dsidebar;