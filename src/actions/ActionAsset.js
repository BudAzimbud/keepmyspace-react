import axios from "axios"
import httpRequest from "./helper/http"
export const GET_ALL_ASSET = 'GET_ALL_ASSET'
export const POST_CREATE_ASSET = 'POST_CREATE_ASSET'


export const listAllAsset = (data) => {
    return dispatch => {
        httpRequest.get('assets/', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                tenantid: '621edb31c4cf8d544c9ab54a'
            }
        }
        ).then((res) => {
            dispatch({
                type: GET_ALL_ASSET,
                payload: {
                    data: res.data.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_ASSET,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}



export const createAsset = (data) => {
    return dispatch => {
        httpRequest.post('assets/', data, {
            headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    tenantid: '621edb31c4cf8d544c9ab54a'
            }
        }
        ).then((res) => {
            dispatch({
                type: POST_CREATE_ASSET,
                payload: {
                    data: res.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: POST_CREATE_ASSET,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}


