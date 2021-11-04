/* eslint-disable import/no-anonymous-default-export */
import {
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    LOADING_USER_SIGNUP,
    RESET_USER_SIGNUP,
    USER_SIGNUP_NETWORK_ERROR,
} from '../Type'

const initialState = {
    isLoading: false,
    success: false,
    failed: false,
    networkError: false,
    data: {},
    message: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_USER_SIGNUP:
            return {
                isLoading: true,
                success: false,
                failed: false,
                networkError: false,
                data: {},
                message: '',
            }
        case USER_SIGNUP_SUCCESS:
            return {
                isLoading: false,
                success: true,
                failed: false,
                networkError: false,
                data: action.payload,
                message: '',
            }
        case USER_SIGNUP_FAILED:
            return {
                isLoading: false,
                success: false,
                failed: true,
                networkError: false,
                data: action.payload,
                message: '',
            }
        case USER_SIGNUP_NETWORK_ERROR:
            return {
                isLoading: false,
                success: false,
                failed: false,
                networkError: true,
                data: action.payload,
                message: '',
            }
        case RESET_USER_SIGNUP:
            return (state = initialState)
        default:
            return state
    }
}
