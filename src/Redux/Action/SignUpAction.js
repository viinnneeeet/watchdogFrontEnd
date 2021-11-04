import {
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    LOADING_USER_SIGNUP,
    RESET_USER_SIGNUP,
    USER_SIGNUP_NETWORK_ERROR,
} from '../Type'
import axios from '../../Config/axios'

const resetUserSignUp = () => {
    return {
        type: RESET_USER_SIGNUP,
    }
}

const userSignUp = (dispatch) => (userData) => {
    dispatch({ type: LOADING_USER_SIGNUP })
    axios
        .post('', userData)
        .then((res) => {
            switch (res.data.statusCode) {
                case 200:
                    dispatch(success(res.data))
                    break
                default:
                    dispatch(failed(res.data))
                    break
            }
        })
        .catch((err) => {
            dispatch({ type: USER_SIGNUP_NETWORK_ERROR, payload: err })
        })
}

function success(data) {
    return {
        type: USER_SIGNUP_SUCCESS,
        payload: data,
    }
}
function failed(data) {
    return {
        type: USER_SIGNUP_FAILED,
        payload: data,
    }
}
export { resetUserSignUp, userSignUp }
