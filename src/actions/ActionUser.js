import axios from 'axios'

export const POST_CREATE_USER = 'POST_CREATE_USER'
export const USER_CREATE_ACCESS_TOKEN = 'USER_CREATE_ACCESS_TOKEN'
export const GET_USER_PROFILE = 'GET_USER_PROFILE'


export const createUser = (data) => {
    return dispatch => {
        axios.post('http://localhost:8080/auth/signup', data).then((res) => {
            dispatch({
                type: POST_CREATE_USER,
                payload: {
                    data: res.data,
                    errorMessage: false,
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



export const createAccessToken = (data) => {
    return dispatch => {
        axios.post('http://localhost:8080/auth/login', data).then((res) => {
            console.log(res)
            dispatch({
                type: USER_CREATE_ACCESS_TOKEN,
                payload: {
                    data: res.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: USER_CREATE_ACCESS_TOKEN,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}


export const getProfileUser = (data) => {
    return dispatch => {
        axios.get('http://localhost:8080/settings/profile', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res)
            dispatch({
                type: GET_USER_PROFILE,
                payload: {
                    data: res.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            console.log(err)
            dispatch({
                type: GET_USER_PROFILE,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}

