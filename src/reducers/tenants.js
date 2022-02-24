import { GET_ALL_TENANT, POST_CREATE_TENANT } from "../actions/ActionTenant"

const initialState = {
    listAllTenant: false,
    listAllTenantError: false,
    createTenantResponse : false ,
    createTenantError : false ,
}

function tenants(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TENANT:
            return {
                ...state,
                listAllTenant: action.payload,
                listAllTenantError: action.payload

            }
        case POST_CREATE_TENANT:
            return {
                ...state,
                createTenantResponse: action.payload,
                createTenantError: action.payload

            }

        default:
            return state
    }
}

export default tenants