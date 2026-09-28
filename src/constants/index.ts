// LOCAL IMAGES

import type { IQuantatitiveFeature } from "@/types"

export const LOGO = "/src/assets/logo.png"

// QUANTITATIVE FEATURES

export const QUANTITATIVE_FEATURES: IQuantatitiveFeature[] = [
  { feature: "Elevation", description: "Elevation in meters" },
  { feature: "Aspect", description: "Aspect in azimuth degrees" },
  { feature: "Slope", description: "Slope in degrees" },
  {
    feature: "Horizontal Distance to Hydrology",
    description: "Horizontal distance to nearby water features",
  },
  {
    feature: "Vertical Distance to Hydrology",
    description: "Vertical distance to nearby water features",
  },
  {
    feature: "Horizontal Distance to Roadways",
    description: "Horizontal distance to nearby roadways",
  },
  { feature: "Hillshade 9am", description: "Hillshade index measured at 9 AM" },
  {
    feature: "Hillshade Noon",
    description: "Hillshade index measured at noon",
  },
  { feature: "Hillshade 3pm", description: "Hillshade index measured at 3 PM" },
  {
    feature: "Horizontal Distance to Fire Points",
    description: "Horizontal distance to nearby wildfire ignition points",
  },
]
