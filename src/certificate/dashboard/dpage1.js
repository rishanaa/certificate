import React, { useEffect } from 'react'
import { Row,Col,Card} from 'react-bootstrap'
import './dpage1.css'
import vector from './vector.jpg'
import women from './women.jpg'
import d1 from './d1.jpg'
import d2 from './d2.jpg'
import { profileApi } from '../store/login API/useApi'
import { useDispatch, useSelector } from 'react-redux'

function Dpage1 () {
     const dispatch= useDispatch();
     const {loginDetails}=useSelector((state)=>({
      loginDetails:state.reducer.loginDetails,
     }))
     useEffect(()=>{
      dispatch(profileApi())
     },[dispatch])

  return (
    <div className='dpage1'>
     <h5>DASHBOARD</h5>
     <div className='part1'>
      <Row>
        <Col md="4">
          <Card className="card">
            <div className='top-card d-flex'>
              <div>
                <h4 className='h4'>Welcome Back !</h4>
                <p>It will seem like simplified</p>
              </div>
              <div>
                 <img src={vector} />
                 </div>
            </div>
            <div className='bottom-card d-flex'>
              <Col md="4" className='section1'>
                <img src={women} />
                <h4 className='text'>{loginDetails?.username}</h4>
                <p>{loginDetails?.email}</p>
              </Col>
              <Col md="4" className='section-2'>
                <div className='one'>
                <h4>125</h4>
                <p>Projects</p>
                <button>View Profile <i class="fa-solid fa-arrow-right"></i></button></div>
                <div className='two'>
                <h4>$ 1245</h4>
                <p>Revenue</p></div>
              </Col>
            </div>
          </Card>
        </Col>
        <Col md="8" className='part2'>
          <Row className='section3'>
            <Col md="6">
              <Card className='cards'>
                <h5>Available Courses</h5>
                <div className='three'><p>3</p>
                <img src={d1} /></div>
              </Card>
            </Col>
            
            <Col md="6">
              <Card className='cards card5'>
              <h5>Course Completed Students</h5>
              <div className='three'><p>2</p>
                <img src={d1} /></div>
              </Card>
            </Col>
            <Col md="6" className='second-row'>
              <Card className='cards'>
              <h5>Total Students</h5>
              <div className='three'><p>5</p>
                <img src={d2} /></div>
              </Card>
            </Col>
            <Col md="6" className='second-row'>
              <Card className='cards card5'>
              <h5>Total Students</h5>
              <div className='three'><p>5</p>
                <img src={d2} /></div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
     </div>
    </div>
  )
}

export default Dpage1