import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";

export const getMenuHeader = async () => {
  try {
    const result = await apiCaller.get(ENDPOINTS.config.menuHeader);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
