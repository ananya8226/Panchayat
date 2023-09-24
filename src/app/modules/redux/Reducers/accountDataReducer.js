import { getAccountDataType } from "../Types/typeAccountData";

let initialState =  {
    accountData: null,
}

export const accountDataReducer = (state=initialState, action) => {

    switch(action.type) {
        case getAccountDataType.GET_ACCOUNT_DATA:
            // console.log("aaraa h");
            return {
                ...state,
                accountData: action.payload,
            }

        default:
            return state;
    }
}