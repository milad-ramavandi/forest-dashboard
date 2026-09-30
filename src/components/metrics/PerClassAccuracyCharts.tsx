import type { IPerClassAccuracyChartsProps } from "@/types"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartConfig = {
  cover_type: {
    label: "Cover Type",
  },
  accuracy_score: {
    label: "Accuracy Score",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const PerClassAccuracyCharts = ({
  per_class_accuracy,
}: IPerClassAccuracyChartsProps) => {
  const chartData = per_class_accuracy.map((item) => ({
    ...item,
    accuracy_score: Number(item.accuracy_score.toFixed(2)),
  }))
  return (
    <div className="space-y-4 mt-20">
      <h2 className="text-xl font-light md:text-2xl lg:text-3xl">
        Accuracy by Forest Cover Type
      </h2>
      <p className="text-muted-foreground">
        Classification accuracy for each forest cover type on the test dataset.
      </p>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false}/>
          <YAxis
            dataKey="accuracy_score"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              return `${value}%`
            }}
          />
           <XAxis
            dataKey="cover_type"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              return `Cover Type ${value}`
            }}
          />
          <Bar
            dataKey="accuracy_score"
            fill="var(--color-accuracy_score)"
            radius={4}
          />

          <ChartTooltip content={<ChartTooltipContent indicator={"line"} />} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default PerClassAccuracyCharts
