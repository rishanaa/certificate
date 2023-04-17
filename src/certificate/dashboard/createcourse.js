import React from 'react'
import { FormGroup,Form,Row,Col } from 'react-bootstrap'
import Layout from './layout'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { CreateCourseApi } from '../store/course API/useApi';
import {allCategoryApi } from '../store/category API/useApi';
import {map} from 'lodash'



function Createcourse() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [input,setInput]=useState()

    const HandleCreateCourse=(e)=>{
      e.preventDefault()
      if(input){
        dispatch(CreateCourseApi(input,navigate))
      }
    }
    useEffect(()=>{
      dispatch(allCategoryApi())
    },[dispatch])

    const {allCategoryDetails}=useSelector((state)=>({
      allCategoryDetails:state.CategoryReducer.allCategoryDetails,
    }))
    console.log(allCategoryDetails.results)

  return (
    <Layout>
      
     <div className='updatecourse'>
      <h5>CREATE COURSE</h5>

      <Form onSubmit={HandleCreateCourse}>
        <div className='upcourse'>
          <Col md={6}>
            <Row>
              <FormGroup>
        <p>Course Name:</p>
        
        <input type="text" 
        placeholder='Enter a Course'
        name='course_name'
        onChange={(e)=>setInput({...input,course_name:e.target.value})}/>
      
        </FormGroup>
        </Row>
       
        <Row>
          <FormGroup>
          <p>Duration:</p>
        
        <input type="text"
        placeholder='Enter a Duration'
        name='duration'
        onChange={(e)=>setInput({...input,duration:e.target.value})} />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
          <p>Course Category:</p>
        
        <select style={{border:'1px solid rgba(128, 128, 128, 0.151)',paddingRight:' 115px',paddingTop:'5px',paddingBottom:'5px',color:'grey'}}
        onChange={(e)=>
        setInput({...input,course_category:e.target.value})}>
         <option>
          Select a Course Category...
         </option>
         {map(allCategoryDetails?.results,(item)=>(
          <option value={item.id}>
            {item.course_category_name}
          </option>
         ))}
        </select>
          </FormGroup>
        </Row>
        </Col>
        
        <button className='but1'
        type='submit'>Create</button>
        <button className='but2'
        >Back</button>
       
      </div>
      </Form>
      </div>
    </Layout>
  )
}

export default Createcourse