import { 
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    ADD_CLASS,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILED,
    FETCH_DATA,
    SUCCESS,
    FAILURE
  } from '../actions'
  


   const initialState = {
     users: [],
     fetchingUsers: false,
     addingUser: false,
     error: null
   }

  
  

  
  export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_USER: {
        return {
          ...state,
          fetchingUsers: true
        }
      }
  
      case ADD_USER_SUCCESS: {
        return {
          ...state,
          fetchingUsers: false,
          error: null
        }
      }
  
      case ADD_USER_FAILED: {
        return {
          ...state,
          fetchingUsers: false,
          error: action.payload
        }
      }
  
      case FETCH_DATA: {
        return {
          ...state,
          fetchingUsers: true,
          error: action.payload
        }
      }
  
      case SUCCESS: {
        return {
          ...state,
          fetchingUsers: false,
          error: null,
          users: [...state.users, ...action.payload]
        }
      }
  
      case FAILURE: {
        return {
          ...state,
          fetchingUsers: false,
          error: action.payload
        }
      }
  
      default:
        return state
    }
  } 