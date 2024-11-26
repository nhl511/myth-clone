import {apiCaller} from "@/axios/client";
import {ENDPOINTS} from "@/services/apis/api-endpoints.service";

export const getUpcomming = async ({typeId, cateId}: { typeId: number, cateId: number }) => {
    try {
        const result = await apiCaller.get(ENDPOINTS.content.list, {
            params: {
                type_id: typeId,
                cate_id: cateId,
            },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};