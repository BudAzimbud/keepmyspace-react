import { GET_ALL_TENANT } from "../actions/ActionTenant"

const initialState = {
    listAllTenant: false,
    listAllTenantError: false,
    title: 'keepmyspace'
}

function tenants(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TENANT:
            return {
                ...state,
                listAllTenant: action.payload,
                listAllTenantError: action.payload

            }

        default:
            return state
    }
}

export default tenants