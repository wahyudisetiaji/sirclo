import axios from 'axios'

const apiURL = 'http://localhost:4000'

export const getAllBerat = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_ALL_BERAT_REQUEST'
        })
        return axios.get(`${apiURL}/berat`)
                .then((result) => {
                    dispatch({
                        type: 'GET_ALL_BERAT_SUCCESS',
                        payload: result.data.result
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: 'GET_ALL_BERAT_ERROR',
                        payload: err
                    })
                });
    }
}