import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";

export const getTrailer = async () => {
  try {
    const result = await apiCaller.get(ENDPOINTS.homePage.trailer);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHome = async (page: number) => {
  try {
    const result = await apiCaller.get(ENDPOINTS.homePage.home, {
      params: {
        page,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
