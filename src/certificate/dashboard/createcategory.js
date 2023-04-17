import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Form} from 'react-bootstrap'
import {CreateCategoryApi } from '../store/category API/useApi';
import Layout from './layout'

function CreateCategory() {
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const [state,setState]=useState({})
   console.log(state)

   const HandleCreateCategory=(e)=>{
    e.preventDefault()
    dispatch(CreateCategoryApi(state,navigate))
   }
  return (
      <Layout>
      <div className='updatecourse'>
       <h5>CREATE COURSE</h5>
         <Form onSubmit={HandleCreateCategory}>
         <div className='upcourse'>
         <p>Course Category:</p>
         
         <input type="text"
         placeholder='Enter a Course Category'
         name='course_category_name'
         onChange={(e)=>setState({...state,course_category_name:e.target.value})} />
         <p>Designation:</p>
        
         <input type="text"
         placeholder='Enter a Designation'
         name='designation'
         onChange={(e)=>setState({...state,designation:e.target.value})} />
         <br />
         
         <button className='but1'
          style={{marginTop:'200px'}}
          type='submit'>Create</button>
         <button className='but2' style={{marginTop:'200px'}}>Back</button>
         
       </div>
       </Form></div>
     </Layout>
  )
}

export default CreateCategory