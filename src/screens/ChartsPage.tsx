import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Spinner } from "@/components/ui/spinner"
import { useGetCharts } from "@/hooks/queries"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts"

const chartConfigAverageElevation = {
  Cover_Type: {
    label: "Cover Type",
  },
  Average_Elevation: {
    label: "Average Elevation",
    color: "var(--chart-2)",
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
    color: "var(--chart-2)",
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

const chartConfigSamplesCountByCoverType = {
  Cover_Type: {
    label: "Cover Type",
  },
  Samples_Count: {
    label: "Samples Count",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const chartConfigSoilTypeDistribution = {
  Soil_Type: {
    label:"Soil Type"
  },
  Samples_Count: {
    label:"Samples Count",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

const ChartsPage = () => {
  const { data, isLoading } = useGetCharts()
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner className="size-10" />
      </div>
    )
  }
  if (!data) {
    return null
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
  const chartDataSamplesCountByCoverType =
    data.charts.samples_count_by_cover_type;
  
  const chartDataSoilTypeDistribution = data.charts.soil_type_distribution
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
      <div className="mt-20 grid grid-cols-1 gap-20 xl:grid-cols-2 2xl:grid-cols-3">
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
                width={110}
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

              <XAxis
                type="number"
                dataKey="Elevation"
                unit="m"
                domain={["dataMin", "dataMax"]}
              />

              <YAxis type="number" dataKey="Slope" unit="deg" />

              <ChartTooltip />

              <Scatter
                data={chartDataElevationVsSlope}
                fill="var(--color-chart-2)"
              />
            </ScatterChart>
          </ChartContainer>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-light md:text-2xl lg:text-3xl">
            Samples count by Cover Type
          </h2>
          <p className="text-muted-foreground">
            Compare the samples count across different forest cover types.
          </p>
          <ChartContainer config={chartConfigSamplesCountByCoverType}>
            <BarChart
              accessibilityLayer
              data={chartDataSamplesCountByCoverType}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />

              <YAxis
                dataKey="Samples_Count"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
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
                dataKey={"Samples_Count"}
                fill={`var(--color-Samples_Count)`}
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-light md:text-2xl lg:text-3xl">
            Soil Type Distribution
          </h2>
          <p className="text-muted-foreground">
            Distribution of forest observations across different Soil Types.
          </p>
          <ChartContainer config={chartConfigSoilTypeDistribution}>
            <BarChart
              accessibilityLayer
              data={chartDataSoilTypeDistribution}
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
                dataKey="Soil_Type"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={100}
                tickFormatter={(value) => {
                  return value.replace("_", " ")
                }}
              />

              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
              />

              <Bar dataKey="Samples_Count" fill="var(--color-Samples_Count)" radius={4} />
            </BarChart>
          </ChartContainer>
        </section>
      </div>
    </section>
  )
}

export default ChartsPage
