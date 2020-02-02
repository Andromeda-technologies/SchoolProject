import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_STUDENT } from "./types";
import { CREATE_STUDENT } from "./types";
import { UPDATE_STUDENT } from "./types";
import { DELETE_STUDENT} from "./types";



// Get Student
export const getStudent = (id) => dispatch => {
  axios
    .get(`http://54.70.245.62/api/v1/user/${id}`)
    .then(res =>
     
      dispatch({
        type: GET_STUDENT,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create Student
export const createStudent = (postData, history) => dispatch => {  
    axios
      .post("http://54.70.245.62/api/v1/user/post", postData)
      .then(res => {
        dispatch({
          type: CREATE_STUDENT,
          payload: res.data
        })
      
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  //Update Student
  export const updateStudent = (id, history) => dispatch => {  
    axios
      .patch(`http://54.70.245.62/api/v1/user/${id}`)
      .then(res => {
        dispatch({
          type: UPDATE_STUDENT,
          payload: res.data
        })
      
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

//Delete Student
  export const deleteStudent = (id, history) => dispatch => {  
    axios
      .delete(`http://54.70.245.62/api/v1/user/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_STUDENT,
          payload: res.data
        })
      
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };