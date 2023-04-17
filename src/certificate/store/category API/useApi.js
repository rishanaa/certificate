import {axiosApi} from '../api_methods'
import { createCategoryFail, createCategoryRequest, createCategorySuccess } from "./action";
import { allCategoryFail, allCategoryRequest, allCategorySuccess } from "./action";
import { deleteCategoryFail, deleteCategoryRequest, deleteCategorySuccess } from "./action";
import { updateCategoryFail, updateCategoryRequest, updateCategorySuccess } from "./action";
import { svCategoryFail, svCategoryRequest, svCategorySuccess } from "./action";



//create category
export const CreateCategoryApi = (state,navigate) => { 
      return async (dispatch) => {
      
      dispatch(createCategoryRequest(state));
      
      try {
      
       const res =await axiosApi.post("/course/course_category/",state);
       console.log(res);
       dispatch(createCategorySuccess(res?.data))
       navigate("/allcategory")
      
      } catch (error) {
        console.log(error);
        dispatch(createCategoryFail(error?.res?.data));
      }
    };
    };

    //ALL category
export const allCategoryApi = (page) => { 
  return async (dispatch) => {
  
  dispatch(allCategoryRequest());
  
  try {
  
   const res =await axiosApi.get(`/course/course_category/?page= ${page ? page:1}`);
   if(res){
   dispatch(allCategorySuccess(res.data))}
   
  
  }catch(error){
    console.log(error);
    dispatch(allCategoryFail(error));
  }
};
};

 //delete category
 export const deleteCategoryApi = (id,navigate,page) => { 
  return async (dispatch) => {
  
  dispatch(deleteCategoryRequest(id));
  
  try {
  
   const res =await axiosApi.delete(`/course/course_category/${id}`);
   if(res){
   dispatch(deleteCategorySuccess(res?.data))
   navigate('/allcategory')
  try{
    const res2=await axiosApi.get(`/course/course_category/?page=${page? page:1}`)
    if (res2) {
      dispatch(allCategorySuccess(res2.data))
    }
  
  } catch (error) {
    console.log(error);
    dispatch(allCategoryFail(error));
  }}
}catch(error){
  console.log(error)
  dispatch(deleteCategoryFail(error))
}
}
 };

  //update category
export const updateCategoryApi = (id,state,navigate) => { 
  return async (dispatch) => {
  
  dispatch(updateCategoryRequest(id));
  
  try {
  
   const res =await axiosApi.put(`/course/course_category/${id}/`,state);
   if(res){
   dispatch(updateCategorySuccess(res?.data))
  navigate(`/allcategory`)
}
   
  
  }catch(error){
    console.log(error);
    dispatch(updateCategoryFail(error));
  }
};
}

 //sv category
 export const svCategoryApi = (id) => { 
  return async (dispatch) => {
  
  dispatch(svCategoryRequest());
  
  try {
  
   const res =await axiosApi.get(`/course/course_category/${id}`);
   if(res){
   dispatch(svCategorySuccess(res?.data))}
   
  
  }catch(error){
    console.log(error);
    dispatch(svCategoryFail(error));
  }
};
};