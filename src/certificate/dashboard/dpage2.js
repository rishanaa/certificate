import React, {useState} from "react";
import Layout from "./layout";
import "./dpage2.css";
import { useNavigate ,Link} from 'react-router-dom';
import { Row,Col, Card } from "react-bootstrap";
import { Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {allStudentsApi} from '../store/student API/useApi'
import {map,range} from "lodash";
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'



function Dpage2() {
   
  const dispatch=useDispatch();
  const {allstudents}=useSelector((state)=>({
    allstudents:state.StudentReducer.allStudentsDetails,
  }));
  useEffect(()=>{
    dispatch(allStudentsApi())
  },[])

  const tableData=allstudents?.results

   //pagination
   const [pages,setPages]=useState(1)
   useEffect(()=>{
     dispatch(allStudentsApi(pages))
 
   },[dispatch,pages])
   const totalPages=Math.ceil(allstudents?.count/10)
   const pageArray=range(1,totalPages+1)

  return (
    <Layout>
      <div className="dpage2">
        <div className="tablecard">
          <h5 >
            STUDENTS
          </h5>
          <Card
            className="card">
            <div className="card1">
              <div className="show1">
            <label htmlFor=""><i class="fa-solid fa-magnifying-glass"></i> Search...</label>
            <input type="text" /></div>
            <div className="show" >
              <p className="p1">Show</p>
              <label htmlFor="">10</label>
              <input type="text" className="input" />
              <p>entries</p>
            </div>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Joining Date</th>
                  <th>DOB</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{map(tableData,(item,key)=>(
                <tr key={key}>
                  <th scope='row'>{key=key+1}</th>
                  <td>{item?.full_name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.email}</td>
                  <td>{item?.start_date}</td>
                  <td>{item?.dob}</td>
                  <td>{item?.designation}</td>
                  <td>{item?.img}</td>
                  <td> <Link to={`/details/${item?.id}`}><i class="fa-solid fa-eye"></i></Link></td>
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
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Dpage2;
