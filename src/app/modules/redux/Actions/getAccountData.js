import { toast } from "react-toastify";
import { GET } from "../../../../services/api/api";
import { getAccountDataType } from "../Types/typeAccountData";

export const getAccountDataAction = () => {
    return async (dispatch) => {
       
        GET("users/profile")
            .then((res) => {
                if (res?.data?.success) {
                    dispatch({
                        type: getAccountDataType.GET_ACCOUNT_DATA,
                        payload: res?.data?.result,
                    });
                }
                else {
                    toast.error(res.data.message);
                }
            })
    }
}