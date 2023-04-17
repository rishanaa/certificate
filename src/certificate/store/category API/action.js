import { CREATE_CATEGORY_FAIL, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS } from "./actionType";
import { ALL_CATEGORY_FAIL, ALL_CATEGORY_REQUEST, ALL_CATEGORY_SUCCESS } from "./actionType";
import { DELETE_CATEGORY_FAIL,  DELETE_CATEGORY_REQUEST,  DELETE_CATEGORY_SUCCESS } from "./actionType";
import { UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "./actionType";
import { SV_CATEGORY_FAIL, SV_CATEGORY_REQUEST, SV_CATEGORY_SUCCESS } from "./actionType";




//create category
export const createCategoryRequest = (input) =>
({
type: CREATE_CATEGORY_REQUEST,
payload: input,
});

export const createCategorySuccess = (createCategoryDetails) => ({
type: CREATE_CATEGORY_SUCCESS,
payload: createCategoryDetails,
});

export const createCategoryFail = (error) => ({
type: CREATE_CATEGORY_FAIL,
payload: error,
});

//ALL category
export const allCategoryRequest = () =>
({
type: ALL_CATEGORY_REQUEST,
payload: "",
});

export const allCategorySuccess = (allCategoryDetails) => ({
type: ALL_CATEGORY_SUCCESS,
payload: allCategoryDetails,
});

export const allCategoryFail = (error) => ({
type: ALL_CATEGORY_FAIL,
payload: error,
});

//delete category
export const deleteCategoryRequest = (id) =>
({
type: DELETE_CATEGORY_REQUEST,
payload: id,
});

export const deleteCategorySuccess = () => ({
type: DELETE_CATEGORY_SUCCESS,
payload: "",
});

export const deleteCategoryFail = (error) => ({
type: DELETE_CATEGORY_FAIL,
payload: error,
});

//update category
export const updateCategoryRequest = (id) =>
({
type: UPDATE_CATEGORY_REQUEST,
payload: id,
});

export const updateCategorySuccess = (updateCategoryDetails,id) => ({
type: UPDATE_CATEGORY_SUCCESS,
payload: updateCategoryDetails,id
});

export const updateCategoryFail = (error) => ({
type: UPDATE_CATEGORY_FAIL,
payload: error,
});

//sv category
export const svCategoryRequest = () =>
({
type: SV_CATEGORY_REQUEST,
payload: "",
});

export const svCategorySuccess = (svCategoryDetails) => ({
type: SV_CATEGORY_SUCCESS,
payload: svCategoryDetails,
});

export const svCategoryFail = (error) => ({
type: SV_CATEGORY_FAIL,
payload: error,
});