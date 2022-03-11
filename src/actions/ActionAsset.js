import httpRequest from "./helper/http"
export const GET_ALL_ASSET = 'GET_ALL_ASSET'
export const POST_CREATE_ASSET = 'POST_CREATE_ASSET'
export const GET_ASSET = 'GET_ASSET'
export const DELETE_ASSET = 'DELETE_ASSET'
export const EDIT_ASSET = 'EDIT_ASSET'
export const EMPTY_ASSET = 'EMPTY_ASSET'

export const listAllAsset = (data) => {
    return dispatch => {
        httpRequest.get('assets/', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                tenantid: '6228489b88ca3666f51c365a'
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
                tenantid: '6228489b88ca3666f51c365a'
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



export const getAsset = (id) => {
    return dispatch => {
        httpRequest.get('assets/' + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                tenantid: '6228489b88ca3666f51c365a'
            }
        }
        ).then((res) => {
            dispatch({
                type: GET_ASSET,
                payload: {
                    data: res.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: GET_ASSET,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}

export const emptyAsset = () => {
    return dispatch => {

        dispatch({
            type: GET_ASSET,
            payload: {
                data: false,
                errorMessage: false
            }
        })
    }
}


export const deleteAsset = (id) => {
    return (dispatch) => {
        httpRequest.delete('assets/' + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                tenantid: '6228489b88ca3666f51c365a'
            }
        }
        ).then((res) => {
            dispatch({
                type: DELETE_ASSET,
                payload: {
                    data: res.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: DELETE_ASSET,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}



export const editAsset = (id, data) => {
    return dispatch => {
        httpRequest.put('assets/' + id, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                tenantid: '6228489b88ca3666f51c365a'
            }
        }
        ).then((res) => {
            dispatch({
                type: EDIT_ASSET,
                payload: {
                    data: res.data,
                    errorMessage: false,
                }

            })
        }).catch((err) => {
            dispatch({
                type: EDIT_ASSET,
                payload: {
                    data: false,
                    errorMessage: err.message,
                    statusCode: err.response.status
                }

            })
        })
    }
}
