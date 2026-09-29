import controllers from "@/apis/controllers"
import { useQuery } from "@tanstack/react-query"

export const useGetMetrics = () => {
    return useQuery({queryKey:["metrics"], queryFn: () => controllers.getMetrics()})
}