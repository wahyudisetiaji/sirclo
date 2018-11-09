import axios from 'axios'

const apiURL = 'http://localhost:4000'

export const getOneBerat = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_ONE_BERAT_REQUEST'
        })
        return axios.get(`${apiURL}/berat/${id}`)
                .then((result) => {
                    dispatch({
                        type: 'GET_ONE_BERAT_SUCCESS',
                        payload: result.data.result
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: 'GET_ONE_BERAT_ERROR',
                        payload: err
                    })
                });
    }
}