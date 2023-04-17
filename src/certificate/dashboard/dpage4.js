import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {studentCreateApi } from '../store/student API/useApi';
import {Form,Row,Col,FormGroup} from 'react-bootstrap'
import Layout from './layout'

function Dpage4() {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [state,setState]=useState({});
  console.log(state);

  const HandleCreateStudent=(e)=>{
    e.preventDefault()
    dispatch(studentCreateApi(state,navigate));
  }
  return (
      <Layout>
      <div className='dpage3'>
        <h5>CREATE STUDENT</h5>
        <div className='mains'
         >
          <Form onSubmit={HandleCreateStudent}>
          <Row>
          <Col md={6}>
          <FormGroup>
            <h3>Full Name:</h3>
            <input type="text" 
                    name='full_name' 
                    placeholder='Enter Your Full name'                   
                    onChange={(e)=>setState({...state,full_name: e.target.value})}/>
                    </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Designation:</h3>
           
            <input type="text" 
                  name='designation'
                  placeholder='Enter your Designation'
                  onChange={(e)=> setState({...state,designation:e.target.value})}/>
                  </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Email:</h3>           
            <input type="email"
                   name='email'
                   placeholder='Enter Your Email'
                   onChange={(e)=> setState({...state,email: e.target.value})}/> 
                   </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Joining Date:</h3>
           
            <input type="date"
                    name='start_date'
                    placeholder='pick a date'
                    onChange={(e)=> setState({...state,start_date:e.target.value})}/> 
                    </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Date of Birth:</h3>           
            <input type="date"
                    name='dob'
                    placeholder='Enter your Date of Birth'
                    onChange={(e)=> setState({...state,dob:e.target.value})}/> 
                    </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Date of Leaving:</h3>
            
            <input type="date" 
                    name='end_date'
                    placeholder='pick a date'
                    onChange={(e)=> setState({...state,end_date:e.target.value})}/>
                    </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Address:</h3>
            
            <input type="string"
                    name='address'
                    placeholder='Enter your District'
                    onChange={(e)=> setState({...state,address:e.target.value})}/> 
                    </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Phone Number</h3>
           
            <input type="number"
                     name='phone'
                     placeholder='Enter your Phone Number'
                     onChange={(e)=> setState({...state,phone:e.target.value})}/> 
                     </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <p>Image:</p>
            <div className='smain'>
              <input name='img'
                style={{backgroundColor:'white'}}
              placeholder='Choose file'
                     type='file'
                     onChange={(e)=> setState({...state,img:e.target.value})}/></div>
                     </FormGroup>
         </Col>        
         <Col md={6}>
          <FormGroup>
            <div className='button'><button className='but1'>Back</button>
            <button className='but2'
                    type='submit'>Create</button></div>
                    </FormGroup>
         </Col>
          </Row>
          </Form>
        </div>
      </div>
    </Layout>
    
  )
}

export default Dpage4