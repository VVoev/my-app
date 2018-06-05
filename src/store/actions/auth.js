import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        console.log('x');
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyACmj8YFwG-yDUMZ_X4Fgq9x1Q9oqyFFEQ'
        if (!isSignUp)
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyACmj8YFwG-yDUMZ_X4Fgq9x1Q9oqyFFEQ'

        axios.post(url, authData)
            .then((res) => {
                dispatch(authSuccess(res.data));
                console.log(res);
            }).catch((error) => {
                dispatch(authFail(error));
            })
    }
}