import React from 'react'
import Layout from './layout'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import './updatecourse.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Form,Input } from 'reactstrap'
import {svCourseApi,updateCourseApi} from '../store/course API/useApi'

function Updatecourse() {

    const dispatch=useDispatch()
    const params=useParams()
    const navigate=useNavigate()

    const [state,setState]=useState();
    const id=params?.id
  
    const {singleCourse}=useSelector((state)=>({
      singleCourse:state.CourseReducer.svCourseDetails,
    }))
  
    console.log(singleCourse)
  
    useEffect(()=>{
      dispatch(svCourseApi(params.id))
    },[])
  
    useEffect(()=>{
      setState(singleCourse)
    },[singleCourse])
  
    const Handle=(e)=>{
      setState({
        ...state,
        [e.target.name]:e.target.value,
      })
    }
    const HandleUpdateCourse=(e)=>{
      e.preventDefault();
      dispatch(updateCourseApi(id,state,navigate))
    }
  return (
    <Layout>
      <div className='updatecourse'>
      <h5>UPDATE COURSE</h5>
        <div className='upcourse'>
          <Form onSubmit={(e)=>HandleUpdateCourse(e)}>
        <p>Course Name:</p>
        
        <input type="text"
        placeholder='Enter a Course'
        name='course_name'
        onChange={(e)=>Handle(e)} 
        value={state?.course_name}/>
        <p>Duration:</p>
        
        <input type="text"
        placeholder='Enter the Duration'
        name='duration'
        onChange={(e)=>Handle(e)} 
        value={state?.duration} />
        <p>Course Category:</p>
        
        <Input className='input0' 
        type="select"
       
        name='select'
        onChange={(e)=>Handle(e)} 
        value={state?.course_category} >
        <option>
          Select a Course Category...
          </option>
          <option>back-end</option>
          <option>front-end</option>
          <option>full stack</option>
        </Input>
        <button className='but1'
        type='submit'>Update</button>
        <button className='but2'>Back</button>
        </Form>
      </div></div>
    </Layout>
    
  )
}

export default Updatecourse