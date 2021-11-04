import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    RESET_USER_LOGIN,
    LOADING_USER_LOGIN,
    USER_LOGIN_NETWORK_ERROR,
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
        case LOADING_USER_LOGIN:
            return {
                isLoading: true,
                success: false,
                failed: false,
                networkError: false,
                data: {},
                message: '',
            }
        case USER_LOGIN_SUCCESS:
            return {
                isLoading: false,
                success: true,
                failed: false,
                networkError: false,
                data: action.payload,
                message: '',
            }
        case USER_LOGIN_FAILED:
            return {
                isLoading: false,
                success: false,
                failed: true,
                networkError: false,
                data: action.payload,
                message: '',
            }
        case USER_LOGIN_NETWORK_ERROR:
            return {
                isLoading: false,
                success: false,
                failed: false,
                networkError: true,
                data: action.payload,
                message: '',
            }
        case RESET_USER_LOGIN:
            return (state = initialState)
        default:
            return state
    }
}
