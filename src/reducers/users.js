import { POST_CREATE_USER } from '../actions/ActionUser'

const initialState = {
    createUserResponse: false,
    createUserError: false,
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

        default:
            return state
    }
}

export default users