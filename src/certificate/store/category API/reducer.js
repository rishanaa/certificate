import { CREATE_CATEGORY_FAIL, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS } from "./actionType";
import { ALL_CATEGORY_FAIL, ALL_CATEGORY_REQUEST, ALL_CATEGORY_SUCCESS } from "./actionType";
import { DELETE_CATEGORY_FAIL, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS } from "./actionType";
import { UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "./actionType";
import { SV_CATEGORY_FAIL, SV_CATEGORY_REQUEST, SV_CATEGORY_SUCCESS } from "./actionType";



const initialState={
  loading:false,
  error:"",
  createCategoryDetails:[],
  allCategoryDetails:[],
  deleteCategoryDetails:[],
  svCategoryDetails:[],
  updateCategoryDetails:[],
}

//CREATE category

const CategoryReducer = (state = initialState, action) => {
      switch (action.type) {
        case CREATE_CATEGORY_REQUEST:
          return {
            ...state,
            loding: true,
          };
    
        case CREATE_CATEGORY_SUCCESS:
          return {
            ...state,
            loding: false,
            createCategoryDetails: action.payload,
            error: "",
          };
        case CREATE_CATEGORY_FAIL:
          return {
            ...state,
            loding: false,
            error: action.payload,
          };

//all category


    case ALL_CATEGORY_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loding: false,
        allCategoryDetails: action.payload,
        error: "",
      };
    case ALL_CATEGORY_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

//delete category


case DELETE_CATEGORY_REQUEST:
  return {
    ...state,
    loding: true,
  };

case DELETE_CATEGORY_SUCCESS:
  return {
    ...state,
    loding: false,
    deleteCategoryDetails: action.payload,
    error: "",
  };
case DELETE_CATEGORY_FAIL:
  return {
    ...state,
    loding: false,
    error: action.payload,
  };


  //update category


  case UPDATE_CATEGORY_REQUEST:
    return {
      ...state,
      loding: true,
    };

  case UPDATE_CATEGORY_SUCCESS:
    return {
      ...state,
      loding: false,
      updateCategoryDetails: action.payload,
      error: "",
    };
  case UPDATE_CATEGORY_FAIL:
    return {
      ...state,
      loding: false,
      error: action.payload,
    };


    //SV category


  case SV_CATEGORY_REQUEST:
    return {
      ...state,
      loding: true,
    };

  case SV_CATEGORY_SUCCESS:
    return {
      ...state,
      loding: false,
      svCategoryDetails: action.payload,
      error: "",
    };
  case SV_CATEGORY_FAIL:
    return {
      ...state,
      loding: false,
      error: action.payload,
    };

          default:
      return state;
    }
  };

  

  export default CategoryReducer;