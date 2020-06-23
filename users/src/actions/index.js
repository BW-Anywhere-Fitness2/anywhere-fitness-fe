import axios from 'axios'
export const ADD_USER='ADD_USER'
export const ADD_USER_SUCCESS='ADD_USER_SUCCESS'
export const ADD_USER_FAILED='ADD_USER_FAILED'

export const FETCH_DATA = 'FETCH_DATA'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export function addUser(name, age, height) {
    return (dispatch) => {
        dispatch({ type: ADD_USER})
  
        return axios.post('', {name, age, height})
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
  
    axios.get('')
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: FAILURE, payload: err })
        })
  }