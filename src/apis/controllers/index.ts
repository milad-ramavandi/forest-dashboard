import api from ".."
import endpoints from "../config/endpoint"
import type { ICreatePredictRequest } from "../dto/req"
import type { IChartsResponse, IMetricsResponse } from "../dto/res"

const controllers = {
  getMetrics: async (): Promise<IMetricsResponse> => {
    return await api(endpoints.metrics)
  },
  getCharts: async (): Promise<IChartsResponse> => {
    return await api(endpoints.charts)
  },
  createPredict: async (data: ICreatePredictRequest) => {
    return await api(endpoints.predict, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
  },
}

export default controllers
