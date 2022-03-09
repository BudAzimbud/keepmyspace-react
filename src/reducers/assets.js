import { GET_ALL_ASSET, GET_ASSET, POST_CREATE_ASSET } from "../actions/ActionAsset"

const initialState = {
    listAllAssetResponse: false,
    listAllAssetError: false,
    createAssetResponse : false,
    createAssetError : false,
    getAssetResponse : false,
    getAssetError : false,
}

function assets(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ASSET:
            return {
                ...state,
                listAllAssetResponse: action.payload,
                listAllAssetError: action.payload

            }
        case POST_CREATE_ASSET:
            return {
                ...state,
                createAssetResponse : action.payload.data,
                createAssetError : action.payload
            }
        case GET_ASSET :
            return {
                ...state,
                getAssetResponse : action.payload.data,
                getAssetError : action.payload
                
            }
        default:
            return state
    }
}

export default assets