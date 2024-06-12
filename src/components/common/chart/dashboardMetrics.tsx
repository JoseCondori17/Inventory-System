import React from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface DashBoardMetrics {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string
  quantity: string
  chart: React.ReactNode
}

const DashBoardMetrics: React.FC<DashBoardMetrics> = ({icon: Icon, title, quantity, chart}) => {
  return (
    <Card className="flex-1"> {/* change */}
      <CardContent className="flex-1 m-2 mt-5 mb-5 p-2">
        <div className="flex justify-between space-x-4">
          <div className="flex items-center justify-center">
            <Icon className="size-5"></Icon>
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-xs"> {title} </span>
            <span className="text-xl font-bold"> {quantity} </span>
          </div>
          <div className="flex items-center justify-center">
            {chart}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DashBoardMetrics;