import MetricsInfo from "@/components/metrics/MetricsInfo"
import PerClassAccuracyCharts from "@/components/metrics/PerClassAccuracyCharts"
// import { Card } from "@/components/ui/card"
// import { Skeleton } from "@/components/ui/skeleton"
import { useGetMetrics } from "@/hooks/queries"

const MetricsPage = () => {
  const { data, isLoading } = useGetMetrics()
  console.log(data)
  if (!data) {
    return null
  }
  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col gap-8">
  //       <Skeleton className="w-1/4" />
  //       <Skeleton className="w-1/2" />
  //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
  //         {Array.from({ length: 4 }).map((item) => {
  //           return (
  //             <Card className="flex flex-col items-center gap-4">
  //               <div className="flex items-center gap-4">
  //                 <Skeleton className="h-12 w-12 rounded-full" />
  //                 <Skeleton className="h-4 w-1/4" />
  //               </div>

  //               <Skeleton className="h-4 w-1/6" />
  //             </Card>
  //           )
  //         })}
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <section className="space-y-8">
      <h1 className="text-center text-2xl font-light tracking-widest md:text-3xl lg:text-4xl">
        <span className="text-sm md:text-lg">Metrics</span>
        <br />
        <p className="mt-2">
          Explore the key statistics of the Forest Cover dataset
        </p>
      </h1>
      <MetricsInfo
        metrics={data?.metrics}
        model_metrics={data?.model_metrics}
      />
      <PerClassAccuracyCharts
        per_class_accuracy={data?.model_metrics?.per_class_accuracy}
      />
    </section>
  )
}

export default MetricsPage
