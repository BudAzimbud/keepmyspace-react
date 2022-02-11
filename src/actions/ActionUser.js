import axios from 'axios'

export const POST_CREATE_USER = 'POST_CREATE_USER'

export const createUser = (data) => {
    return dispatch => {
        axios.post('http://localhost:8080/auth/signup', data).then((res) => {
            console.log(res)
            console.log(res.response)
            dispatch({
                type: POST_CREATE_USER,
                payload: {
                    data: res.data,
                    errorMessage: false,
                    statusCode: res.response.status
                }

            })
        }).catch((err) => {
            dispatch({
                type: POST_CREATE_USER,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}