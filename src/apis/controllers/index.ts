import api from ".."
import endpoints from "../config/endpoint"
import type { IMetricsResponse } from "../dto/res"

const controllers = {
  getMetrics: async (): Promise<IMetricsResponse> => {
    return await api(endpoints.metrics)
  },
}

export default controllers
