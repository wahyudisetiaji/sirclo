import axios from 'axios'

const apiURL = 'http://localhost:4000'

export const getTotal = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_TOTAL_BERAT_REQUEST'
        })
        return axios.get(`${apiURL}/berat`)
                .then((result) => {
                    
                    let data = result.data.result

                    console.log(data.length)
                    if ( data.length === 0 ) {

                        let max = 0
                        let min = 0
                        let perbedaan = 0
                        let dataLength = 0

                        let dataTotal = {max, min, perbedaan, dataLength}

                        dispatch({
                            type: 'GET_TOTAL_BERAT_SUCCESS',
                            payload: dataTotal
                        })
                        
                    } else if ( data.length > 0) {

                        let max = 0
                        let min = 0
                        let perbedaan = 0
                        let dataLength = data.length

                        data.forEach(element => {
                            let result = element.max - element.min

                            max += Number(element.max)
                            min += Number(element.min)
                            perbedaan += result

                        });

                        let dataTotal = {max, min, perbedaan, dataLength}
                        console.log(dataTotal)
                        dispatch({
                            type: 'GET_TOTAL_BERAT_SUCCESS',
                            payload: dataTotal
                        })

                    }

                })
                .catch((err) => {
                    dispatch({
                        type: 'GET_TOTAL_BERAT_ERROR',
                        payload: err
                    })
                });
    }
}