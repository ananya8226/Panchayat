import { getLoginDataType } from "../Types/typeLogin";

let initialState =  {
    designationId: null
}

export const loginDataReducer = (state=initialState, action) => {

    switch(action.type) {
        case getLoginDataType.GET_LOGIN_DATA:
           
            return {
                ...state,
                user: action.payload,
            }

        default:
            return state;
    }
}