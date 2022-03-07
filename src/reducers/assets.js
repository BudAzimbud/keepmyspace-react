import { GET_ALL_ASSET } from "../actions/ActionAsset"

const initialState = {
    listAllAssetResponse: false,
    listAllAssetError: false,
}

function assets(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ASSET:
            return {
                ...state,
                listAllAssetResponse: action.payload,
                listAllAssetError: action.payload

            }

        default:
            return state
    }
}

export default assets