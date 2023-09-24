import { getBlockFilterType } from '../Types/typeBlockFilter';
import { GET } from '../../../../services/api/api';
import { toast } from "react-toastify";

export const getBlockFilterAction = (value) => {
    return async (dispatch) => {
        GET(`panchayat/map-data?districtId=${value}`)
            .then((res) => {
                if (res.status == 200) {
                    const blockNames = res?.data?.result?.districtBlockData.map((block) => {
                        return block;
                        // return block.blockName;
                    })             
                    dispatch({
                        type: getBlockFilterType.BLOCK_FILTER_DATA,
                        payload: blockNames,
                    });
                    console.log(blockNames,"blockkkkkk");
                }
                else
                {
                    toast.error(res.data.message);
                }
            })

    }
}