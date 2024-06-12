"use client"
import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader } from "@/components/ui/card"


interface CardProgressProps{
  title: string,
}

const CardProgress: React.FC<CardProgressProps> = ({title}) => {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>{title}</CardHeader>
      <CardContent className="flex flex-col h-52 justify-between">
        <div className="flex flex-col">
          <span className="text-sm">Products with High Stock</span>
          <Progress value={progress} className="w-full h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Products with Average Stock</span>
          <Progress value={progress} className="w-full h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Products with Low Stock</span>
          <Progress value={progress} className="w-full h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Products out of Stock</span>
          <Progress value={progress} className="w-full h-4" />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardProgress