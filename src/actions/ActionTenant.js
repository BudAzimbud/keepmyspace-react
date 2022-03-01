import httpRequest from "./helper/http"

export const GET_ALL_TENANT = 'GET_ALL_TENANT'
export const POST_CREATE_TENANT = 'POST_CREATE_TENANT'



export const listAllTenant = (data) => {
    return dispatch => {
        httpRequest.get('tenants/', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
        ).then((res) => {
            dispatch({
                type: GET_ALL_TENANT,
                payload: {
                    data: res.data.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_TENANT,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}




export const createTenant = (data) => {
    return dispatch => {
        httpRequest.post('tenants/', data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
        ).then((res) => {
            dispatch({
                type: POST_CREATE_TENANT,
                payload: {
                    data: res.data.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: POST_CREATE_TENANT,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}


