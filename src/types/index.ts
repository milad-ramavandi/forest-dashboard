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
  correct: number
  incorrect: number
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
