import React from 'react'
import Layout from './layout'
import './dpage3.css'
import {Form,Row,Col,FormGroup} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect ,useState} from 'react';
import { updateStudentApi } from '../store/student API/useApi';
const Dpage3 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params=useParams();

  const [state,setState]=useState();
  const{updatestdnts}=useSelector((state)=>({
    updatestdnts:state.StudentReducer.singleViewDetails,
  }));
  console.log(updatestdnts);
  const catId=params.id;

  useEffect(()=>{
    dispatch(updateStudentApi(catId));
  },[dispatch]);

  useEffect(()=>{
    setState(updatestdnts);  
  },[updatestdnts])

  const Handle=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value,
    });
  };

  const HandleUpdateStudent=(e)=>{
    e.preventDefault();
    dispatch(updateStudentApi(catId,navigate,state));
  };


  return (
    <Layout>
      <div className='dpage3'>
        <h5>UPDATE STUDENT</h5>
        <div className='mains'>
          <Form onSubmit={HandleUpdateStudent}>
          <Row>
         <Col md={6}>
          <FormGroup>
     
            <h3>Full Name:</h3>
            
            <input type="text"
            placeholder='Fasil Paloli'
            name='full_name'
            onChange={(e)=>Handle(e)} 
            value={state?.full_name}/>
            </FormGroup>
         </Col>
          <Col md={6}>
          <FormGroup>
            <h3>Designation:</h3>
            
            <input type="text"
            placeholder='lorem ipsum'
            name='designation'
            onChange={(e)=>Handle(e)} 
            value={state?.designation} /></FormGroup>
            </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Email:</h3>
            
            <input type="email" 
            placeholder='dev.osperb@gmail.com'
            name='email'
            onChange={(e)=>Handle(e)} 
            value={state?.email}
            />
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Joining Date:</h3>
           
            <input type="date"
            placeholder='09 jun,2022'
            name='start_date'
            onChange={(e)=>Handle(e)} 
            value={state?.start_date}
            /></FormGroup>
            </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Date of Birth:</h3>
            
            <input type="date"
            placeholder='09 june,2022'
            name='Date of Birth'
            onChange={(e)=>Handle(e)} 
            value={state?.dob} />
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Date of Leaving:</h3>
            
            <input type="date" 
            placeholder='09 jun,2022'
            name='end_date'
            onChange={(e)=>Handle(e)} 
            value={state?.end_date}/>
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Address :</h3>
            
            <input type="text"
            placeholder='Malappuram' 
            name='address'
            onChange={(e)=>Handle(e)} 
            value={state?.address}/>
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <h3>Phone Number</h3>
           
            <input type="number" 
            placeholder='+91 1234567890'
            name='phone'
            onChange={(e)=>Handle(e)} 
            value={state?.phone}/>
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <p>Image:</p>
            <div className='smain'><button>Choose File</button>
            <p>No file chosen</p></div>
            </FormGroup>
         </Col>
      
         <Col md={6}>
          <FormGroup>
            <div className='button'><button className='but1'>Back</button>
            <button className='but2'
            type='submit'>Update</button></div>
            </FormGroup>
         </Col>
            </Row> 
          
          </Form>  
        </div>
      </div>
    </Layout>
  )
}

export default Dpage3