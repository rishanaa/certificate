import { CREATE_FAIL, CREATE_REQUEST, CREATE_SUCCESS } from "./actionType";
import { ALLSTUDENTS_FAIL, ALLSTUDENTS_REQUEST, ALLSTUDENTS_SUCCESS } from "./actionType";
import { SINGLE_VIEW_FAIL, SINGLE_VIEW_REQUEST, SINGLE_VIEW_SUCCESS } from "./actionType";
import { DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS } from "./actionType";
import { UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionType";


//create student
export const createStudentRequest = (input) =>
({
type: CREATE_REQUEST,
payload: input,
});

export const createStudentSuccess = (createStudentDetails) => ({
type: CREATE_SUCCESS,
payload: createStudentDetails,
});

export const createStudentFail = (error) => ({
type: CREATE_FAIL,
payload: error,
});

 //all students
 export const allStudentsRequest = () =>
 ({
 type: ALLSTUDENTS_REQUEST,
 payload: "",
 });

 export const allStudentsSuccess = (allStudentsDetails) => ({
 type: ALLSTUDENTS_SUCCESS,
 payload: allStudentsDetails,
 });

 export const allStudentsFail = (error) => ({
 type: ALLSTUDENTS_FAIL,
 payload: error,
 });


 //single view
 export const singleViewRequest = () =>
 ({
 type: SINGLE_VIEW_REQUEST,
 payload: "",
 });

 export const singleViewSuccess = (singleViewDetails) => ({
 type: SINGLE_VIEW_SUCCESS,
 payload: singleViewDetails,
 });

 export const singleViewFail = (error) => ({
 type: SINGLE_VIEW_FAIL,
 payload: error,
 });


 //DELETE student
 export const deleteStudentRequest = () =>
 ({
 type: DELETE_STUDENT_REQUEST,
 payload: "",
 });

 export const deleteStudentSuccess = (id) => ({
 type: DELETE_STUDENT_SUCCESS,
 payload: id,
 });

 export const deleteStudentFail = (error) => ({
 type: DELETE_STUDENT_FAIL,
 payload: error,
 });


 //update students
 export const updateStudentRequest = (catId) =>
 ({
 type: UPDATE_REQUEST,
 payload: catId,
 });

 export const updateStudentSuccess = (updateStudentDetails,catId) => ({
 type: UPDATE_SUCCESS,
 payload: updateStudentDetails,catId,
 });

 export const updateStudentFail = (error) => ({
 type: UPDATE_FAIL,
 payload: error,
 });