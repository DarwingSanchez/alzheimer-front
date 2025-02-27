import { getAxiosIns } from "@/core/config/axios-config";
import type { FormDTO } from "@/core/interface/form";
import type { FormResponse } from "@/core/interface/response";


export const diagnostic = async (form: FormDTO): Promise<FormResponse | undefined> => {
  const axiosIns = getAxiosIns();
  try {
    const response = await axiosIns.post('/diagnostic', form);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}