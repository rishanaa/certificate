import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Img1 from './certificate.jpg';
import fb from './facebook.png';
import tr from './twitter.png';
import gl from './google.png';



function Home() {
  let navigate=useNavigate();
  return (
    <div className='main'>
      <div className='header'>
        <h5>EDISONVALLEY</h5>
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
        <p>Team</p>
        <button>Sign in</button>
      </div>
      <div className='body'>
        <div className='left'><h1>Maker Your Carrier With EdisonValley</h1>
        <p>we are a bunch of tech enthusiasts determined to uplift the society utilising the
          latest technologies around us </p>
          <button onClick={()=>{navigate('/login');
        }}>Login</button>
          </div>
        <div className='right'>
          <img src={Img1} />
        </div>
      </div>
      <div className='footer'>
        <div className='edi'>
          <h6>EDISONVALLEY</h6>
          <p>2020 c Edisonvalley.Design & Develop by Osperb <br />We are a bunch of tech enthusiats determined to uplift 
          the society utilising the latest technologies around us</p>
        </div>
        <div><h6>Resources</h6>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p></div>
        <div><h6>Company</h6>
        <p>About Us</p>
        <p>Features</p></div>
        <div><h6>Social Links</h6>
        <p className='logos'>
          <img src={fb} />
          <img src={tr} />
          <img src={gl} /></p></div>
      </div>
      
    </div>
  )
}

export default Home;