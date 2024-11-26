import {apiCaller} from "@/axios/client";
import {ENDPOINTS} from "@/services/apis/api-endpoints.service";

export const getSearch = async () => {
    try {
        const result = await apiCaller.get(ENDPOINTS.search.home)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const search = async (keyword: string | null) => {
    try {
        const result = await apiCaller.get(ENDPOINTS.search.filter, {
            params: {
                keyword,
            }
        });
        return result.data
    } catch (error) {
        console.log(error);
    }
}