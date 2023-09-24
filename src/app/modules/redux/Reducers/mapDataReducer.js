import { getMapDataType } from "../Types/typeMapData";

let initialState =  {
    getMapData: null
}

export const mapDataReducer = (state=initialState, action) => {
 // console.log(action, "getFormAction");

    switch(action.type) {
        case getMapDataType.MAP_DATA:
            return {
                ...state,
                getMapData: action.payload,
            }

        default:
            return state;
    }
}