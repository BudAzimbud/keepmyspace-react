import { combineReducers } from 'redux'
import users from './users'
import tenants from './tenants'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users,
    tenants,
    form: formReducer,
})