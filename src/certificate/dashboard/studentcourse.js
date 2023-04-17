
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { Table,Row,Col} from 'reactstrap'
import {map,range} from 'lodash'
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'
import { allStudentCourseApi,deleteStudentCourseApi } from '../store/studentCourse/useApi'
// 
import Layout from './layout'


function StudentCourse() {
 
   const dispatch=useDispatch();

   useEffect(()=>{
    dispatch(allStudentCourseApi())
   },[])

   const {allstudentCourse}=useSelector((state)=>({
    allstudentCourse:state.StudentCourseReducer.allStudentCourseDetails,
   })) 
  
  const tableData=allstudentCourse?.results;

  //delete
  const navigate=useNavigate()
  const params=useParams()

  useEffect(()=>{
    dispatch(allStudentCourseApi(params.id))
  },[])
  const deleteStudentCourse=(id)=>{
    dispatch(deleteStudentCourseApi(id,navigate))
  }

     //pagination
  const [pages,setPages]=useState(1)
  useEffect(()=>{
    dispatch(allStudentCourseApi(pages))
},[dispatch,pages])

  const totalPages=Math.ceil(allstudentCourse?.count/10)
  const pageArray=range(1,totalPages+1)


  return (
    <Layout>
      <div className='allstud'>
      <div className='all2'>
      <div className='next'> <h5>STUDENT COURSE</h5>
       <Link to={'/createstudentcourse'} >
            <button className='bu0'>+ Create New Course</button>
            </Link>
            </div>
      <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>Course Name</th>
      <th>Progress</th>
      
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {" "}
    {map(tableData,(item,key)=>(

    <tr key={key}>
      <th scope="row">{(key=key+1)} </th>
      <td>{item?.id}</td>
      <td>{item?.course_name}</td>
      <td>{item?.progress}</td>
      
      <td>
      <button className='bu3'
      onClick={()=>{deleteStudentCourse(item?.id)}}>Delete</button></td>
    </tr>
    
    ))}
  </tbody>
</Table>
{/* pagination */}

<div >
      <Row>
          <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <BiLeftArrow onClick={()=>{
              setPages(pages - 1)
            }}/>
          </Col>
          {map(pageArray,(page)=>(
            <Col onClick={()=>setPages(page)}
            className={pages === page && "active"}
            style={{
              display:'flex',
              alignContent:'center',
              justifyContent:'center'
            }}
            >
              {page}
            </Col>
          ))}
           <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <BiRightArrow onClick={()=>{
              setPages(pages + 1)
            }}
            />
           </Col>
        </Row>

            </div> 
</div>
</div>
</Layout>
  )
}

export default StudentCourse
