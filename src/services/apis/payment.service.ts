import {Simulate} from "react-dom/test-utils";
import {apiCaller} from "@/axios/client";
import {ENDPOINTS} from "@/services/apis/api-endpoints.service";

export const getProduct = async () => {
    try {
        const result = await apiCaller(ENDPOINTS.payment.product)
        return result.data
    } catch (error) {
        console.log(error)
    }
}