import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from './layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Form } from 'reactstrap'
import {svCategoryApi,updateCategoryApi} from '../store/category API/useApi'

function Updatecategory() {
  const dispatch=useDispatch()
  const params=useParams()
  const navigate=useNavigate()
  const [state,setState]=useState();
  const id=params?.id

  const {singleCategory}=useSelector((state)=>({
    singleCategory:state.CategoryReducer.svCategoryDetails,
  }))

  console.log(singleCategory)

  useEffect(()=>{
    dispatch(svCategoryApi(params.id))
  },[])

  useEffect(()=>{
    setState(singleCategory)
  },[singleCategory])

  const Handle=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  const HandleUpdateCategory=(e)=>{
    e.preventDefault();
    dispatch(updateCategoryApi(id,state,navigate))
  }
  return (
      <Layout>
      <div className='updatecourse'>
      <h5>UPDATE COURSE</h5>
        <div className='upcourse'>
          <Form onSubmit={(e)=>HandleUpdateCategory(e)}>
        <p>Course Category:</p>
        
        <input type="text"
        placeholder='lorem ipsum'
        name='course_category_name'
        onChange={(e)=>Handle(e)}
         value={state?.course_category_name} />
        <p>Designation:</p>
       
        <input type="text" 
         placeholder='lorem ipsum'
         name='designation'
         onChange={(e)=>Handle(e)}
         value={state?.designation}/>
        <br />
        
        <button className='but1' 
        type='submit'
        style={{marginTop:'200px'}}>Update</button>
        <button className='but2' style={{marginTop:'200px'}}>Back</button>
      
      </Form>
      </div>
      </div>
    </Layout>
  )
}

export default Updatecategory