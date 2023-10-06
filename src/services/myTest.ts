import type { BaseData } from "@/types/sensorData"
import { http } from "@/utils/http"


export const getTodayDatAPI = () => {
    return http<BaseData[]>({
      method: 'GET',
      url: '/api/22',
    })
    // console.log("点击了");
    
  }