import React from 'react'
import { FormGroup,Form,Row,Col} from 'react-bootstrap'
import {Input} from 'reactstrap'
import Layout from './layout'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { allCourseApi } from '../store/course API/useApi';
import { allStudentsApi } from '../store/student API/useApi';
import {createStudentCourseApi } from '../store/studentCourse/useApi';
import {map} from 'lodash'



function Createstudentcourse() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [input,setInput]=useState()

    const HandleSubmit=(e)=>{
      e.preventDefault();
      if(input) {
        dispatch(createStudentCourseApi(input,navigate))
      }
    };
    useEffect(()=>{
      dispatch(allStudentsApi())
    },[dispatch])

    const {allstudents}=useSelector((state)=>({
      allstudents:state.StudentReducer.allStudentsDetails,
    }))
    
    useEffect(()=>{
      dispatch(allCourseApi())
    },[dispatch])
    const {allCourseDetails}=useSelector((state)=>({
      allCourseDetails: state.CourseReducer.allCourseDetails,
    }))
   

  return (
    <Layout>
      
     <div className='updatecourse'>
      <h5>CREATE STUDENT COURSE</h5>

      <Form 
      onSubmit={HandleSubmit}
      >
        <div className='upcourse'>
          <Col md={6}>
            <Row>
              <FormGroup>
        <p>Student Name:</p>
        
        <Input type="select" 
        name='student'
         onChange={(e)=>
          setInput({...input,student: e.target.value})}
         >
          <option>
            Select Student Name...
            </option>
          {map(allstudents?.results,(item)=>(
            <option value={item.id}>
              {item.full_name}</option>
          ))}
          </Input>
      
        </FormGroup>
        </Row>
       
        <Row>
          <FormGroup>
          <p>Course name:</p>
        
        <Input type="select"
       name='course'
       onChange={(e)=>setInput({...input,course:e.target.value})}
       >
        <option>Select a Course Name...</option>
        {map(allCourseDetails?.results,(item)=>(
          <option value={item.id}>{item.course_name}</option>
        ))}
        
          </Input>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
          <p>Progress:</p>
        
        <input
         name='progress'
         placeholder='example 8/10'
         type='string'
         onChange={(e)=>setInput({...input,progress:e.target.value})}/>
          </FormGroup>
        </Row>
        </Col>
        
        <button className='but1'
        type='submit'
        >Create</button>
        <button className='but2'
        >Back</button>
       
      </div>
      </Form>
     
      </div>
    </Layout>
  )
}

export default Createstudentcourse