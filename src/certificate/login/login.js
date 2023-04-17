import React, { useState } from 'react';
 import "./login.css";
 import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from 'react-router-dom';
import { Form, Input} from 'reactstrap'
import {loginApi } from '../store/login API/useApi'

  

    // const { loginError, loading } = useSelector((state) => ({
    //       loginError: state.error,
    //       loading: state.loading,
    // }));
    function Login(){
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const [state,setState]=useState({username:"",password:""})
    
    const handleSubmitLogin=(e)=>{
       e.preventDefault()
        dispatch(loginApi(state,navigate));
    }
  return (
    <div className='login'>
      <Form onSubmit={(e)=>handleSubmitLogin(e)}>
      <div className='form'><h3>EDISONVALLEY</h3>
      <h5>Login</h5>
       <span>Username</span>
      
      <Input type="text" name='username' placeholder='Enter Username'
              onChange={(e)=> setState({...state,username:e.target.value})} />
      <span>Password</span>
      
      <Input type="password" name="password" placeholder="Enter Password"
              onChange={(e)=>setState({...state,password:e.target.value})} /><br />
      <button>Login</button>
      </div>
      </Form>
    </div>
  );
};

export default Login;