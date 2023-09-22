 import { http } from "@/utils/http"

export const getTodayDatAPI = () => {
    return http({
      method: 'GET',
      url: '/api/22',
    })
    // console.log("点击了");
    
  }