import { DELETE_ASSET, EDIT_ASSET, EMPTY_ASSET, GET_ALL_ASSET, GET_ASSET, POST_CREATE_ASSET } from "../actions/ActionAsset"

const initialState = {
    listAllAssetResponse: false,
    listAllAssetError: false,
    createAssetResponse: false,
    createAssetError: false,
    getAssetResponse: false,
    getAssetError: false,
    deleteAssetResponse: false,
    deleteAsserError: false,
    editAssetResponse: false,
    editAssetError: false
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
                createAssetResponse: action.payload.data,
                createAssetError: action.payload
            }
        case GET_ASSET:
            return {
                ...state,
                getAssetResponse: action.payload.data,
                getAssetError: action.payload

            }
        case DELETE_ASSET:
            return {
                ...state,
                deleteAssetResponse: action.payload.data,
                deleteAsserError: action.payload
            }
        case EDIT_ASSET:
            return {
                ...state,
                editAssetResponse: action.payload.data,
                editAssetError: action.payload
            }
        case EMPTY_ASSET:
            return {
                ...state,
                getAssetResponse: false,
                getAssetError: false
            }
        default:
            return state
    }
}

export default assets