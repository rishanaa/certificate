import React, { useEffect } from 'react'
import Layout from "./layout";
import './allstudents.css'
import Women from './women.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {deleteStudentApi,singleViewApi} from '../store/student API/useApi'
import { Link } from 'react-router-dom'

import { Row,Card,Container} from 'reactstrap'
import {map} from 'lodash'

function Allstudents() {
     const dispatch=useDispatch()
     const params=useParams()
     const navigate=useNavigate()
     const {singleView}=useSelector((state)=>({
      singleView:state.StudentReducer.singleViewDetails,
     }))
     console.log(singleView)
    
     useEffect(()=>{
      dispatch(singleViewApi(params.id))
     },[dispatch])

     const deleteStudents=()=>{
      dispatch(deleteStudentApi(params.id,navigate))
     }
     const course=singleView?.student_courses;

  return (
      <Layout>
            <div className='allstud'>
                  <h5 className='head'>STUDENT VIEW</h5>
            <div className='all1'>
                  <div className='stud1'><h3>{singleView.full_name}</h3>
                  <p>DoB:{singleView.dob}</p>
                  <p><i class="fa-sharp fa-solid fa-location-dot"></i> Address:{singleView.address}</p>
                  <p><i class="fa-solid fa-address-book"></i> Phone:{singleView.phone}</p>
                  <h5>Contact Details:</h5>
                  <p><i class="fa-regular fa-address-book"></i> Email:{singleView.email}</p>
                  <p><i class="fa-solid fa-gear"></i> Mobile:{singleView.phone}</p></div>
                  <div className='stud2'>
                        <img src={Women} />
                        <p>Designation:{singleView.designation}</p>
                        <div className='bclass'><button className='butt1' type='submit' onClick={()=>navigate(`/updatestudent/${params.id}`)}
                        >Update</button>
                        <button className='butt2' onClick={deleteStudents}>Delete</button></div>
                  </div>
            </div>
            <div>
            <Row>
      {map(course, (item,key)=>(
        <Card style={{width:'40%',height:'200px',borderRadius:'5px',marginLeft:'35px',border:'none',display:'flex',marginTop:'20px'}}>
          <Container>
            <div style={{display:'flex'}}>
              <div style={{marginTop:'30px',marginLeft:'20px'}}>
                <h6>COURSE NAME :</h6>
                <h6>DURATION :</h6>
                <h6>PROGRESS :</h6>
                <h6>COURSE CATEGORY NAME :</h6>
                <h6>DESIGNATION :</h6>
              </div>
              <div style={{color:'red',marginTop:'30px',marginLeft:'20px'}}>
                 <h6>{item.course.course_name}</h6>
                 <h6>{item.course.duration} </h6>
                 <h6>{item.progress ? item.progress : 'NO'} </h6>
                 <h6>{item.course.course_category.course_category_name} </h6>
                 <h6>{item.course.course_category.designation} </h6>
              </div>
             
            </div>
          </Container>
        </Card>
      ))}
      </Row>
      </div>
         <div style={{display:'flex',margin:'40px',justifyContent:'space-between'}}>
                <div><Link to={'/createstudentcourse'} >
            <button className='bu0'>+ Create New Course</button>
            </Link></div>
             <div>
             <Link to={'/certificate'} >
            <button className='bu3' style={{padding:'5px 18px'}}>Certificate</button>
            </Link>
             </div>
              </div>
           
                  </div>
      </Layout>
    
  )
}

export default Allstudents