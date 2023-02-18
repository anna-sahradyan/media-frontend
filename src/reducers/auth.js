import * as actionType from '../constants/actionTypes.js';

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));

            return {...state, authData: action.data, loading: false, errors: null};
        case actionType.LOGOUT:
            localStorage.clear();
            sessionStorage.clear();

            return {...state, authData: null, loading: false, errors: null};
        default:
            return state;
    }
};
export default authReducer;