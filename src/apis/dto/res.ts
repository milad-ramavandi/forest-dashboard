import type {
  IAverageElevationByCoverType,
  IAverageSlopeByCoverType,
  IElevationDistribution,
  IElevationVsSlope,
  IMetrics,
  IModelMetrics,
  ISamplesCountByCoverType,
  ISoilTypeDistribution,
} from "@/types"

export interface IMetricsResponse {
  metrics: IMetrics
  model_metrics: IModelMetrics
}

export interface IChartsResponse {
  charts: {
    average_elevation_by_cover_type: IAverageElevationByCoverType[]
    average_slope_by_cover_type: IAverageSlopeByCoverType[]
    samples_count_by_cover_type: ISamplesCountByCoverType[]
    elevation_vs_slope: IElevationVsSlope[]
    elevation_distribution: IElevationDistribution[]
    soil_type_distribution: ISoilTypeDistribution[]
  }
}
