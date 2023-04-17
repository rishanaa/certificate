import { combineReducers } from "redux"
import reducer from "./login API/reducer"
import StudentReducer from "./student API/reducer"
import CategoryReducer from "./category API/reducer"
import CourseReducer from "./course API/reducer"
import StudentCourseReducer from './studentCourse/reducer'
   
const rootReducer = combineReducers({
reducer,
StudentReducer,
CategoryReducer,
CourseReducer,
StudentCourseReducer
})

export default rootReducer