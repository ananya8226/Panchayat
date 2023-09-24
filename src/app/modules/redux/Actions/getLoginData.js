import { getLoginDataType } from '../Types/typeLogin';

export const getLoginDataAction = (value) => {
    return async (dispatch) => {
        dispatch({
            type: getLoginDataType.GET_LOGIN_DATA,
            payload: value,
        });
    }
}