import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  PieChart as PieChartPlot,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"

interface PieChartProps{
  title: string,
}

const data = [
  { name: 'Yape', value: 60 },
  { name: 'Cash', value: 20 },
  { name: 'Transfer', value: 20 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChart: React.FC<PieChartProps> = ({title}) => {
  return (
    <Card className="w-full">
      <CardHeader>{title}</CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex h-40">
          <ResponsiveContainer width={'100%'} height={'100%'}>
          <PieChartPlot width={120} height={120}>
            <Pie dataKey={'value'} 
                cx="50%" cy="50%" 
                innerRadius={50} 
                data={data} 
                fill="#8884d8"
                cornerRadius={10}
                >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/> 
              ))}
              {/* radius change */}
            </Pie>
          </PieChartPlot>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-row justify-between">
          {data.map((item, index) => (
            <div key={`point-sales-${index}`} className="flex gap-1">
              <div className={`h-2 w-2 m-1 rounded-full bg-[${COLORS[index % COLORS.length]}]`}></div>
              <div className="flex flex-col items-start justify-center">
                <span className="font-bold text-xs">{item.value}%</span>
                <span className="text-[0.7em] text-gray-400">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PieChart;