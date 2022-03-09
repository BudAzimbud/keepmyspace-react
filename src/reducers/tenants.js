import { GET_ALL_TENANT, POST_CREATE_TENANT, GET_ONE_TENANT, EDIT_TENANT } from "../actions/ActionTenant"

const initialState = {
    listAllTenant: false,
    listAllTenantError: false,
    createTenantResponse: false,
    createTenantError: false,
    findTenantResponse: false,
    findTenantError: false,
    editTenantResponse: false,
    editTenantError: false
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
        case GET_ONE_TENANT:
            return {
                ...state,
                findTenantResponse: action.payload.data,
                findTenantError: action.payload

            }
        case EDIT_TENANT:
            return {
                ...state,
                editTenantResponse: action.payload.data,
                editTenantError: action.payload

            }
            


        default:
            return state
    }
}

export default tenants