import { CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "./actionType";
import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS } from "./actionType";
import {DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS } from "./actionType";
import { UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS } from "./actionType";
import { SV_COURSE_FAIL, SV_COURSE_REQUEST, SV_COURSE_SUCCESS } from "./actionType";



const initialState={
      loading:false,
      error:"",
      createCourseDetails:[],
      allCourseDetails:[],
      singleviewCourseDetails:{},
      deleteCourseDetails:{},
      updateCourseDetails:{}
};

//CREATE course

const CourseReducer = (state = initialState, action) => {
      switch (action.type) {
        case CREATE_COURSE_REQUEST:
          return {
            ...state,
            loding: true,
          };
    
        case CREATE_COURSE_SUCCESS:
          return {
            ...state,
            loding: false,
            createCourseDetails: action.payload,
            error: "",
          };
        case CREATE_COURSE_FAIL:
          return {
            ...state,
            loding: false,
            error: action.payload,
          };


          //all Course

         case ALL_COURSE_REQUEST:
            return {
              ...state,
              loding: true,
            };
          case ALL_COURSE_SUCCESS:
                return {
                  ...state,
                  loding: false,
                  allCourseDetails: action.payload,
                  error: "",
                };
         case ALL_COURSE_FAIL:
                return {
                  ...state,
                  loding: false,
                  error: action.payload,
                };

       //delete course

       case DELETE_COURSE_REQUEST:
            return {
              ...state,
              loding: true,
            };
          case DELETE_COURSE_SUCCESS:
                return {
                  ...state,
                  loding: false,
                  deleteCourseDetails: action.payload,
                  error: "",
                };
         case DELETE_COURSE_FAIL:
                return {
                  ...state,
                  loding: false,
                  error: action.payload,
                };

//update COURSE


case UPDATE_COURSE_REQUEST:
  return {
    ...state,
    loding: true,
  };

case UPDATE_COURSE_SUCCESS:
  return {
    ...state,
    loding: false,
    updateCourseDetails: action.payload,
    error: "",
  };
case UPDATE_COURSE_FAIL:
  return {
    ...state,
    loding: false,
    error: action.payload,
  };


  //SV COURSE


case SV_COURSE_REQUEST:
  return {
    ...state,
    loding: true,
  };

case SV_COURSE_SUCCESS:
  return {
    ...state,
    loding: false,
    svCourseDetails: action.payload,
    error: "",
  };
case SV_COURSE_FAIL:
  return {
    ...state,
    loding: false,
    error: action.payload,
  };



          default:
            return state;
          }
        };
      
        export default CourseReducer;
