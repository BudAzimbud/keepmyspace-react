import { combineReducers } from 'redux'
import users from './users'
import tenants from './tenants'
import assets from './assets'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users,
    tenants,
    assets,
    form: formReducer,
})