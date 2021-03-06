import { POST_CREATE_USER, USER_CREATE_ACCESS_TOKEN, GET_USER_PROFILE } from '../actions/ActionUser'

const initialState = {
    createUserResponse: false,
    createUserError: false,
    accessTokenResponse: false,
    accessTokenError: false,
    profile: false,
    title: 'keepmyspace'
}

function users(state = initialState, action) {
    switch (action.type) {
        case POST_CREATE_USER:
            return {
                ...state,
                createUserResponse: action.payload,
                createUserError: action.payload

            }
        case USER_CREATE_ACCESS_TOKEN:
            return {
                ...state,
                accessTokenResponse: action.payload.data,
                accessTokenError: action.payload.statusCode,
            }
        case GET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload.data
            }

        default:
            return state
    }
}

export default users