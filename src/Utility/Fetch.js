import axios from 'axios'
import * as fetchActions from '../Store/Actions'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchActions.fetchPost())
    return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchActions.successPost(response.data)) 
        })
        .catch(error => {
          dispatch(fetchActions.errorPost(error))
        })
      }
}