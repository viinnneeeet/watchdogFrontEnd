import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import signUpReducer from './signUpReducer'

//root reducer

export const rootReducer = combineReducers({
    login: loginReducer,
    signUp: signUpReducer,
})
