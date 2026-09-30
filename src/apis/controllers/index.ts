import api from ".."
import endpoints from "../config/endpoint"
import type { IChartsResponse, IMetricsResponse } from "../dto/res"

const controllers = {
  getMetrics: async (): Promise<IMetricsResponse> => {
    return await api(endpoints.metrics)
  },
  getCharts: async (): Promise<IChartsResponse> => {
    return await api(endpoints.charts)
  }
}

export default controllers
