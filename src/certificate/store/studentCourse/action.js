import { CREATESTUDENT_COURSE_FAIL, CREATESTUDENT_COURSE_REQUEST, CREATESTUDENT_COURSE_SUCCESS } from "./actionType";
import { ALLSTUDENT_COURSE_FAIL, ALLSTUDENT_COURSE_REQUEST, ALLSTUDENT_COURSE_SUCCESS } from "./actionType";
import { DELETESTUDENT_COURSE_FAIL, DELETESTUDENT_COURSE_REQUEST, DELETESTUDENT_COURSE_SUCCESS } from "./actionType";

//create student Course
export const createStudentCourseRequest = (input) =>
({
type: CREATESTUDENT_COURSE_REQUEST,
payload: input,
});

export const createStudentCourseSuccess = (createStudentCourseDetails) => ({
type: CREATESTUDENT_COURSE_SUCCESS,
payload: createStudentCourseDetails,
});

export const createStudentCourseFail = (error) => ({
type: CREATESTUDENT_COURSE_FAIL,
payload: error,
});

 //all students
 export const allStudentCourseRequest = () =>
 ({
 type: ALLSTUDENT_COURSE_REQUEST,
 payload: "",
 });

 export const allStudentCourseSuccess = (allStudentCourseDetails) => ({
 type: ALLSTUDENT_COURSE_SUCCESS,
 payload: allStudentCourseDetails,
 });

 export const allStudentCourseFail = (error) => ({
 type: ALLSTUDENT_COURSE_FAIL,
 payload: error,
 });

 //DELETE student
 export const deleteStudentCourseRequest = (id) =>
 ({
 type: DELETESTUDENT_COURSE_REQUEST,
 payload: id,
 });

 export const deleteStudentCourseSuccess = () => ({
 type: DELETESTUDENT_COURSE_SUCCESS,
 payload: "",
 });

 export const deleteStudentCourseFail = (error) => ({
 type: DELETESTUDENT_COURSE_FAIL,
 payload: error,
 });