import React, { useEffect,useState } from 'react'
import Layout from './layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Table,Row,Col} from 'reactstrap'
import {map,range} from 'lodash'
import {BsPencilFill,BsXLg} from 'react-icons/bs'
import { FormGroup } from 'react-bootstrap'
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'
import { allCourseApi,deleteCourseApi } from '../store/course API/useApi'



function Allcourse() {

  //all 
   const dispatch=useDispatch();
   const {allCourses}=useSelector((state)=>({
    allCourses:state.CourseReducer.allCourseDetails,
   })) 
   useEffect(()=>{
    dispatch(allCourseApi())
   },[])

  const tableData=allCourses?.results

  //delete
  const navigate=useNavigate()
  const params=useParams()
  useEffect(()=>{
    dispatch(allCourseApi(params.id))
  },[])
  const deleteCourse=(id)=>{
    dispatch(deleteCourseApi(id,navigate))
  }
  //pagination
  const [pages,setPages]=useState(1)
  useEffect(()=>{
    dispatch(allCourseApi(pages))

  },[dispatch,pages])
  const totalPages=Math.ceil(allCourses?.count/10)
  const pageArray=range(1,totalPages+1)


   return (

      <Layout>
      <div className='allstud'>
        <h5 className='head'> COURSES</h5>
        <div className='all2'
             style={{height:'640px'}}>
                 
                  <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Course Name</th>
                  <th>Progress</th>
                  <th>Update Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{map(tableData,(item,key)=>(

              
                <tr key={key}>
                  <th scope='row'>
                    <FormGroup check inline>
                      <input type="checkbox" />
                    </FormGroup>
                  </th> 
                  <td>{item?.id}</td>   
                  <td>{item?.course_name}</td>          
                  <td>{item?.duration}</td>   
                  <td>{item?.course_category}</td>
                  <td><BsPencilFill style={{color:'rgb(58,58,213)'}}
                  onClick={()=>navigate(`/updatecourses/${item?.id}`)} />
                  <BsXLg style={{color:'red',marginLeft:'15px'}}
                  onClick={()=>{deleteCourse(item?.id)}} />
                  </td>
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

export default Allcourse