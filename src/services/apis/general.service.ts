import {apiCaller} from "@/axios/client";
import {ENDPOINTS} from "@/services/apis/api-endpoints.service";

export const getCountry = async () => {
    try {
        const result = await apiCaller.get(ENDPOINTS.general.country)
        return result.data
    } catch (e) {
        console.log(e);
    }
}

export const getContentType = async () => {
    try {
        const result = await apiCaller.get(ENDPOINTS.general.contentType)
        return result.data
    } catch (e) {
        console.log(e)
    }
}