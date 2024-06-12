import { 
  Card, 
  CardContent, 
  CardHeader 
} from "@/components/ui/card";
import React from "react"
import {
  ResponsiveContainer,
  BarChart as BarChartPlot,
  Bar,
  XAxis,
  YAxis,

} from "recharts";

interface BarChartProps{
  title: string
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 1122,
    amt: 2290,
  },
  {
    name: 'Page C',
    uv: 6512,
    pv: 1332,
    amt: 1245,
  },
  {
    name: 'Page C',
    uv: 2442,
    pv: 2441,
    amt: 2290,
  },
]

const BarChart: React.FC<BarChartProps> = ({title}) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent className="flex h-60">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <BarChartPlot width={100} height={300} data={data} layout="vertical">
            <YAxis></YAxis>
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#d8d8d8' }}></Bar>
          </BarChartPlot>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default BarChart;