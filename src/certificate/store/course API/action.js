import { CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "./actionType";
import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS } from "./actionType";
import { DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS } from "./actionType";
import { UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS } from "./actionType";
import { SV_COURSE_FAIL, SV_COURSE_REQUEST, SV_COURSE_SUCCESS } from "./actionType";



//create course
export const createCourseRequest = (input) =>
({
type: CREATE_COURSE_REQUEST,
payload: input,
});

export const createCourseSuccess = (createCourseDetails) => ({
type: CREATE_COURSE_SUCCESS,
payload: createCourseDetails,
});

export const createCourseFail = (error) => ({
type: CREATE_COURSE_FAIL,
payload: error,
});

//all Course
export const allCourseRequest = () =>
({
type: ALL_COURSE_REQUEST,
payload: "",
});

export const allCourseSuccess = (allCourseDetails) => ({
type: ALL_COURSE_SUCCESS,
payload: allCourseDetails,
});

export const allCourseFail = (error) => ({
type: ALL_COURSE_FAIL,
payload: error,
});

//DELETE course
export const deleteCourseRequest = (id) =>
({
type: DELETE_COURSE_REQUEST,
payload: id,
});

export const deleteCourseSuccess = () => ({
type: DELETE_COURSE_SUCCESS,
payload: "",
});

export const deleteCourseFail = (error) => ({
type: DELETE_COURSE_FAIL,
payload: error,
});

//update Course
export const updateCourseRequest = (id) =>
({
type: UPDATE_COURSE_REQUEST,
payload: id,
});

export const updateCourseSuccess = (updateCourseDetails,id) => ({
type: UPDATE_COURSE_SUCCESS,
payload: updateCourseDetails,id
});

export const updateCourseFail = (error) => ({
type: UPDATE_COURSE_FAIL,
payload: error,
});

//sv Course
export const svCourseRequest = () =>
({
type: SV_COURSE_REQUEST,
payload: "",
});

export const svCourseSuccess = (svCourseDetails) => ({
type: SV_COURSE_SUCCESS,
payload: svCourseDetails,
});

export const svCourseFail = (error) => ({
type: SV_COURSE_FAIL,
payload: error,
});
