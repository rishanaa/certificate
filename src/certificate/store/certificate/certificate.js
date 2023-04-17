import React from 'react'
import xanthron from './xantron.png'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import './certificate.css'
import {singleViewApi} from '../student API/useApi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {map} from 'lodash'

function Certificate() {
  
   const dispatch=useDispatch()
   const params=useParams()
   const {singleView}=useSelector((state)=>({
    singleView:state.StudentReducer.singleViewDetails,
   }))
   console.log(singleView)

   useEffect(()=>{
    dispatch(singleViewApi(params.id))
   },[dispatch])

   const student_courses=singleView?.student_courses;
   const Totalstars=10
   const ratingTotalstars=10
   const progressArray=student_courses?.map((item)=>
   parseInt(item?.progress))

   const Total=progressArray?.reduce((x,y)=>x+y,0)
   const length=singleView?.student_courses.length;
   const rating=(Total/length).toFixed(2)
   const HandlePrint=(e)=>{
    e.preventDefault()
    window.print()
   }

  return (
    <div className='certificate'>
      <div className='page1'>
            <img src={xanthron} />
            <h1>Certificate</h1>
            <h6>for Achievement</h6>
            <h3 className='name'>{singleView.full_name}</h3>
            <h6>Completed the following Achievement</h6>
            <h3>{singleView.designation} </h3>
            <h6>this is to certify that {singleView.full_name} has successfully completed {singleView.designation} course on {singleView.start_date}</h6>
             <h6 className='para1'>We wish you the best for your future endeavours</h6>
             <h4>CEO</h4>
       </div>
       <div className='page2'>
        <h4>Score Card</h4>
        <h6>(Based on Practices and Assessment)</h6>
        <h3>{singleView.designation} </h3>
        <h6>{rating}/10</h6>
        <h5>{[...new Array(ratingTotalstars)].map((Array,index)=>{
          return index < Math.floor(rating)?(
            <AiFillStar style={{color:'#00514b'}}/>
          ):(
            <AiOutlineStar style={{color:'#00514b'}}/>
          )
        })} </h5>
        <div className='review-main'>
          {map(student_courses,(item,key)=>(

         
        <div  className='review'>
          <h5>{item.course.course_name} </h5>
          <h5>{[...Array(Totalstars)].map((star,index)=>{
          return index < item.progress?(
            <AiFillStar style={{color:'#00514b'}}/>
          ):(
            <AiOutlineStar style={{color:'#00514b'}}/>
          )
        })} </h5>
          </div>
          
           ))}
          </div>
         
          <button onClick={HandlePrint}
          type='button'>Print</button>
       </div>
    </div>
  )
}

export default Certificate;