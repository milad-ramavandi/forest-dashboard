import type { IPerClassAccuracyChartsProps } from "@/types"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart"
import { Bar, BarChart, XAxis } from "recharts"

const chartConfig = {
  correct: {
    label: "Correct",
    color: "var(--chart-1)",
  },
  incorrect: {
    label: "Incorrect",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const PerClassAccuracyCharts = ({
  per_class_accuracy,
}: IPerClassAccuracyChartsProps) => {
  const chartData = per_class_accuracy
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold">Accuracy score for per cover type.</p>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="accuracy_score"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              return `${value.toFixed(2)}%`
            }}
          />
          <Bar
            dataKey="correct"
            stackId="a"
            fill="var(--color-correct)"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="incorrect"
            stackId="a"
            fill="var(--color-incorrect)"
            radius={[4, 4, 0, 0]}
          />
          <ChartTooltip
            content={<ChartTooltipContent />}
            // cursor={false}
            // defaultIndex={1}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default PerClassAccuracyCharts
