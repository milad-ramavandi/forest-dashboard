import MetricsInfo from "@/components/metrics/MetricsInfo"
import PerClassAccuracyCharts from "@/components/metrics/PerClassAccuracyCharts"
import { useGetMetrics } from "@/hooks/queries"


const MetricsPage = () => {
  const { data } = useGetMetrics()
  console.log(data)
  if (!data) {
    return null
  }
  return (
    <section className="space-y-8">
      <h1 className="text-center text-2xl font-light tracking-widest md:text-3xl lg:text-4xl">
        <span className="text-sm md:text-lg">Metrics</span>
        <br />
        <p className="mt-2">
          Explore the key statistics of the Forest Cover dataset
        </p>
      </h1>
      <MetricsInfo metrics={data?.metrics} model_metrics={data?.model_metrics}/>
      <PerClassAccuracyCharts per_class_accuracy={data?.model_metrics?.per_class_accuracy}/>
    </section>
  )
}

export default MetricsPage
