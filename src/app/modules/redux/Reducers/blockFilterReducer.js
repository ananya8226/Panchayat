import { getBlockFilterType } from "../Types/typeBlockFilter";

let initialState =  {
    blockFilter:[]
}

export const blockFilterReducer = (state=initialState, action) => {
 // console.log(action, "getFormAction");

    switch(action.type) {
        case getBlockFilterType.BLOCK_FILTER_DATA:
            return {
                ...state,
                blockFilter: action.payload?.push({id: '', blockName:'ALL'}),
                
                // blockFilter: [...state.blockFilter, action.payload],
                msg:"success"
            }

        default:
            return state;
    }
}