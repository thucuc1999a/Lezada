import axiosClient from "./axiosApi";
import * as URL from "../utils/url";
const userApi={
    register(data){
        const url ='/user';
        return axiosClient.post(url, data)

    }
}
export default userApi;