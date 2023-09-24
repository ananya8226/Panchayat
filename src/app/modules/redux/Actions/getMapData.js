import { GET } from '../../../../services/api/api';
import { getMapDataType } from '../Types/typeMapData';
import { toast } from "react-toastify";

export const getMapDataAction = (value) => {
    return async (dispatch) => {

        GET(`panchayat/map-data?districtId=${value}`)
        .then((res)=> {
            if(res.status === 200) {
                dispatch({
                    type: getMapDataType.MAP_DATA,
                    payload: res.data.result,
                });
            }
            else
            {
                toast.error(res.data.message);
            } 
        })
        
    }
}