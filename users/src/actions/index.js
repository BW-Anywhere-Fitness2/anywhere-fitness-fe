import axios from 'axios'
export const ADD_USER='ADD_USER'
export const ADD_USER_SUCCESS='ADD_USER_SUCCESS'
export const ADD_USER_FAILED='ADD_USER_FAILED'
export const ADD_CLASS = 'ADD_CLASS'
export const ADD_CLASS_SUCCESS = 'ADD_CLASS_SUCCESS'
export const ADD_CLASS_FAILED = 'ADD_CLASS_FAILED'


export const FETCH_DATA = 'FETCH_DATA'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export function addUser(name, username, email, password, role) {
    return (dispatch) => {
        dispatch({ type: ADD_USER})
  
        return axios.post('https://bw-anywhere-fitness-be.herokuapp.com//api/auth/register', {name, username, email, password, role})
            .then(() => {
                dispatch({ type: ADD_USER_SUCCESS })
            })
            .catch((err) => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: ADD_USER_FAILED, payload})
            })
    }
  }
  
  export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA })
  
    axios.get('https://bw-anywhere-fitness-be.herokuapp.com//api/auth/register')
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: FAILURE, payload: err })
        })
  }

  export function addClass(class_name, instructor_name, class_type) {
    return (dispatch) => {
        dispatch({ type: ADD_CLASS})
  
        return axios.post('https://bw-anywhere-fitness-be.herokuapp.com/api/instructor/classes/', {class_name, instructor_name, class_type})
            .then(() => {
                dispatch({ type: ADD_CLASS_SUCCESS })
            })
            .catch((err) => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: ADD_CLASS_FAILED, payload})
            })
    }
  }
  
  export const fetchData2 = () => dispatch => {
    dispatch({ type: FETCH_DATA })
  
    axios.get('https://bw-anywhere-fitness-be.herokuapp.com/api/instructor/classes/')
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: FAILURE, payload: err })
        })
  }