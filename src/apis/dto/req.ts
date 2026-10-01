export interface ICreatePredictRequest {
  elevation: number,
  slope: number,
  aspect: number,
  horizontal_distance_to_hydrology: number,
  vertical_distance_to_hydrology: number,
  horizontal_distance_to_roadways: number,
  horizontal_distance_to_fire_points: number,
  hillshade_9am: number,
  hillshade_noon: number,
  hillshade_3pm: number,
  wilderness_area: string
  soil_type: string
}
