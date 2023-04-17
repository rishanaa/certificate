import { CREATESTUDENT_COURSE_FAIL, CREATESTUDENT_COURSE_REQUEST, CREATESTUDENT_COURSE_SUCCESS } from "./actionType";
import { ALLSTUDENT_COURSE_FAIL, ALLSTUDENT_COURSE_REQUEST, ALLSTUDENT_COURSE_SUCCESS } from "./actionType";
import { DELETESTUDENT_COURSE_FAIL, DELETESTUDENT_COURSE_REQUEST, DELETESTUDENT_COURSE_SUCCESS } from "./actionType";

const initialState={
      loading:false,
      error:"",
      createStudentCourseDetails:{},
      deleteStudentCourseDetails:{},
      allStudentCourseDetails:{}
};


  //CREATE STUDNT course

const StudentCourseReducer = (state = initialState, action) => {
      switch (action.type) {
        case CREATESTUDENT_COURSE_REQUEST:
          return {
            ...state,
            loding: true,
          };
    
        case CREATESTUDENT_COURSE_SUCCESS:
          return {
            ...state,
            loding: false,
            createStudentCourseDetails: action.payload,
            error: "",
          };
        case CREATESTUDENT_COURSE_FAIL:
          return {
            ...state,
            loding: false,
            error: action.payload,
          };
          
      
      //all studnts_COURSE

         case ALLSTUDENT_COURSE_REQUEST:
            return {
              ...state,
              loding: true,
            };
          case ALLSTUDENT_COURSE_SUCCESS:
                return {
                  ...state,
                  loding: false,
                  allStudentCourseDetails: action.payload,
                  error: "",
                };
         case ALLSTUDENT_COURSE_FAIL:
                return {
                  ...state,
                  loding: false,
                  error: action.payload,
                };

                      //delete studnts_COURSE

      case DELETESTUDENT_COURSE_REQUEST:
            return {
              ...state,
              loding: true,
            };
          case DELETESTUDENT_COURSE_SUCCESS:
                return {
                  ...state,
                  loding: false,
                  deleteStudentCourseDetails: action.payload,
                  error: "",
                };
         case DELETESTUDENT_COURSE_FAIL:
                return {
                  ...state,
                  loding: false,
                  error: action.payload,
                };

                default:
                  return state;
                }
              };
            
              export default StudentCourseReducer;