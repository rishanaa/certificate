import React, { useEffect ,useState} from 'react'
import Layout from './layout'
import { Table,Row,Col} from 'reactstrap'
import { allCategoryApi,deleteCategoryApi } from '../store/category API/useApi'
import {map,range} from 'lodash'
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'
import {BsPencilFill,BsXLg} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FormGroup } from 'react-bootstrap'

function Allcategory() {

  //create
  const dispatch=useDispatch()
  const {allCategory}=useSelector((state)=>({
    allCategory:state.CategoryReducer.allCategoryDetails,
  }))
  const tableData=allCategory?.results

  //delete
  const navigate=useNavigate()
  const params=useParams()
  useEffect(()=>{
    dispatch(allCategoryApi(params.id));
  },[]);
      const deleteCategory=(id)=>{
      dispatch(deleteCategoryApi(id,navigate))
    }
    
    //pagination
    const [pages,setPages]=useState(1)
    useEffect(()=>{
      dispatch(allCategoryApi(pages))
    },[dispatch,pages])
  const totalPages=Math.ceil(allCategory?.count/10)
  const pageArray=range(1,totalPages +1)
  return (

      <Layout>
      <div className='allstud'>
        <h5 className='head'> COURSE CATEGORIES</h5>
        <div className='all2'>
                 
                  <Table>
              <thead>
                
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Course Category Name</th>
                  <th>Designation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{map(tableData,(item,key)=>(
               <tr key={key}>
                <th scope='row'>
                  <FormGroup check inline>
                    <input type='checkbox'/>
                  </FormGroup>
                </th>
                  <td>{item?.id}</td>
                 <td>{item?.course_category_name}</td>
                 <td>{item?.designation}</td> 
                 <td><BsPencilFill style={{color:'rgb(58,58,213)'}}
                   onClick={()=>navigate(`/updatecategory/${item.id}`)}/>
                 <BsXLg style={{color:'red',marginLeft:'15px'}}
                 onClick={()=>{deleteCategory(item?.id)}}/>
                 </td>
                </tr>
                
                
                 ))}
              </tbody>
            </Table>
          
      
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
        
        </Layout>
  )
}

export default Allcategory