import type { IMetrics, IModelMetrics } from "@/types"


export interface IMetricsResponse {
  metrics: IMetrics,
  model_metrics: IModelMetrics
}
