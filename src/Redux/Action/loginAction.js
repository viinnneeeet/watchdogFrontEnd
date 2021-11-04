import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    RESET_USER_LOGIN,
    LOADING_USER_LOGIN,
    USER_LOGIN_NETWORK_ERROR,
} from '../Type'
import axios from '../../Config/axios'

const resetUserLogin = () => {
    return {
        type: RESET_USER_LOGIN,
    }
}

const userLogin = (userData) => (dispatch) => {
    dispatch({ type: LOADING_USER_LOGIN })
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
        .catch((err) =>
            dispatch({ type: USER_LOGIN_NETWORK_ERROR, payload: err })
        )
}

function success(data) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: data,
    }
}

function failed(data) {
    return {
        type: USER_LOGIN_FAILED,
        payload: data,
    }
}

export { resetUserLogin, userLogin }
