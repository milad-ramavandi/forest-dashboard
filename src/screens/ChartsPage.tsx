import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Spinner } from "@/components/ui/spinner"
import { useGetCharts } from "@/hooks/queries"
import { Bar, BarChart, CartesianGrid, Scatter, ScatterChart, XAxis, YAxis } from "recharts"

const chartConfigAverageElevation = {
  Cover_Type: {
    label: "Cover Type",
  },
  Average_Elevation: {
    label: "Average Elevation",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const chartConfigAverageSlope = {
  Cover_Type: {
    label: "Cover Type",
  },
  Average_Slope: {
    label: "Average Slope",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const chartConfigElevationDistribution = {
  samples: {
    label: "Samples",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const chartConfigElevationVsSlope = {
  Elevation: {
    label: "Elevation",
  },
  Slope: {
    label: "Slope",
  },
} satisfies ChartConfig

const ChartsPage = () => {
  const { data, isLoading } = useGetCharts()
  if (!data) {
    return null
  }
  if (isLoading) {
    return <Spinner className="size-10" />
  }
  const chartDataAverageElevation =
    data.charts.average_elevation_by_cover_type.map((item) => ({
      ...item,
      Average_Elevation: Number(item.Average_Elevation.toFixed(2)),
    }))
  const chartDataAverageSlope = data.charts.average_slope_by_cover_type.map(
    (item) => ({
      ...item,
      Average_Slope: Number(item.Average_Slope.toFixed(2)),
    })
  )
  const chartDataElevationDistribution = data.charts.elevation_distribution.map(
    (item) => ({
      range: `${item.Elevation.min.toFixed(0)} - ${item.Elevation.max.toFixed(0)}`,
      samples: item.Samples_Count,
    })
  )
  const chartDataElevationVsSlope = data.charts.elevation_vs_slope
  console.log(data)
  return (
    <section className="space-y-8">
      <h1 className="text-center text-2xl font-light tracking-widest md:text-3xl lg:text-4xl">
        <span className="text-sm md:text-lg">Forest Data Insights</span>
        <br />
        <p className="mt-2">
          Explore key patterns and relationships in forest environmental and
          cartographic data through interactive visualizations.
        </p>
      </h1>
      <div className="mt-20 grid grid-cols-1 gap-8 xl:grid-cols-2 2xl:grid-cols-3">
        <section className="space-y-4">
          <h2 className="text-xl font-light md:text-2xl lg:text-3xl">
            Average Elevation by Cover Type
          </h2>
          <p className="text-muted-foreground">
            Compare the average elevation across different forest cover types.
          </p>
          <ChartContainer config={chartConfigAverageElevation}>
            <BarChart
              accessibilityLayer
              data={chartDataAverageElevation}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />

              <YAxis
                dataKey="Average_Elevation"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                unit="m"
              />
              <XAxis
                dataKey="Cover_Type"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  return `Cover Type ${value}`
                }}
              />
              <ChartTooltip
                content={<ChartTooltipContent indicator={"line"} />}
              />
              <Bar
                dataKey={"Average_Elevation"}
                fill={`var(--color-Average_Elevation)`}
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-light md:text-2xl lg:text-3xl">
            Average Slope by Cover Type
          </h2>
          <p className="text-muted-foreground">
            Compare the average slope across different forest cover types.
          </p>
          <ChartContainer config={chartConfigAverageSlope}>
            <BarChart
              accessibilityLayer
              data={chartDataAverageSlope}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />

              <YAxis
                dataKey="Average_Slope"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                unit="deg"
              />
              <XAxis
                dataKey="Cover_Type"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  return `Cover Type ${value}`
                }}
              />
              <ChartTooltip
                content={<ChartTooltipContent indicator={"line"} />}
              />
              <Bar
                dataKey={"Average_Slope"}
                fill={`var(--color-Average_Slope)`}
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-light md:text-2xl lg:text-3xl">
            Elevation Distribution
          </h2>
          <p className="text-muted-foreground">
            Distribution of forest observations across elevation ranges.
          </p>
          <ChartContainer config={chartConfigElevationDistribution}>
            <BarChart
              accessibilityLayer
              data={chartDataElevationDistribution}
              layout="vertical"
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />

              <XAxis type={"number"} tickLine={false} axisLine={false} />

              <YAxis
                type="category"
                dataKey="range"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={100}
                unit="m"
              />

              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
              />

              <Bar dataKey="samples" fill="var(--color-samples)" radius={4} />
            </BarChart>
          </ChartContainer>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-light md:text-2xl lg:text-3xl">
            Elevation vs Slope
          </h2>
          <p className="text-muted-foreground">
            Explore the relationship between elevation and slope across forest
            observations.
          </p>
          <ChartContainer config={chartConfigElevationVsSlope}>
            <ScatterChart>
              <CartesianGrid />

              <XAxis type="number" dataKey="Elevation" unit="m" domain={["dataMin", "dataMax"]}/>

              <YAxis type="number" dataKey="Slope" unit="deg"/>

              <ChartTooltip />

              <Scatter data={chartDataElevationVsSlope} fill="var(--color-chart-4)" />
            </ScatterChart>
          </ChartContainer>
        </section>
      </div>
    </section>
  )
}

export default ChartsPage
