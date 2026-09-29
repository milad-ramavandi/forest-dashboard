import {
  ChartNoAxesCombined,
  Database,
  GitBranch,
  Mountain,
  SlidersHorizontal,
  Trees,
  TriangleRight,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import type { IMetricsInfoProps } from "@/types"

const MetricsInfo = ({ metrics, model_metrics }: IMetricsInfoProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <Card className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2.5">
          <Mountain />
          <span className="text-nowrap">Average Elevation</span>
        </div>
        <span>{metrics.average_elevation.toFixed(2)} meter</span>
      </Card>
      <Card className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2.5">
          <TriangleRight />
          <span className="text-nowrap">Average Slope</span>
        </div>
        <span>{metrics.average_slope.toFixed(2)} degree</span>
      </Card>
      <Card className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2.5">
          <Trees />
          <span className="text-nowrap">Forest Cover Types</span>
        </div>
        <span>{metrics.forest_cover_types}</span>
      </Card>
      <Card className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2.5">
          <Database />
          <span className="text-nowrap">Total Samples</span>
        </div>
        <span>{metrics.total_samples}</span>
      </Card>
      <Card className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal />
          <span className="text-nowrap">Number of Features in Model</span>
        </div>
        <span>{model_metrics.n_features}</span>
      </Card>
      <Card className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2.5">
          <GitBranch />
          <span className="text-nowrap">Number of Trees in Model</span>
        </div>
        <span>{model_metrics.n_trees}</span>
      </Card>
      <Card className="flex flex-col gap-4 p-2">
        <div className="flex items-center gap-2.5">
          <ChartNoAxesCombined />
          <span className="text-nowrap">Overall Accuracy</span>
        </div>
        <span>{model_metrics.overall_accuracy.toFixed(2)}%</span>
      </Card>
    </div>
  )
}

export default MetricsInfo
