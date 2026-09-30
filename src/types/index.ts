export interface IQuantatitiveFeature {
  feature: string
  description: string
}

export interface IMetrics {
  average_elevation: number
  average_slope: number
  forest_cover_types: number
  total_samples: number
}

export interface IPerClassAccuracy {
  cover_type: number
  accuracy_score: number
}

export interface IModelMetrics {
  n_features: number
  n_trees: number
  overall_accuracy: number
  per_class_accuracy: IPerClassAccuracy[]
}

export interface IMetricsInfoProps {
  metrics: IMetrics
  model_metrics: IModelMetrics
}

export interface IPerClassAccuracyChartsProps {
  per_class_accuracy: IPerClassAccuracy[]
}

export interface IAverageElevationByCoverType {
  Cover_Type:number
  Average_Elevation: number
}

export interface IAverageSlopeByCoverType {
  Cover_Type:number
  Average_Slope:number
}

export interface ISamplesCountByCoverType {
  Cover_Type:number
  Samples_Count:number
}

export interface IElevationVsSlope {
  Elevation:number
  Slope:number
}

interface IElevation {
  min:number,
  max:number
}

export interface IElevationDistribution {
  Elevation: IElevation,
  Samples_Count:number
}

export interface ISoilTypeDistribution {
  Soil_Type: string
  Samples_Count:number
}
