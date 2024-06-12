/* 'use client' */
import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  LineChart as LineChartPlot,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface LineChartProps{
  title: string
}

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thur',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sun',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
]

const LineChart: React.FC<LineChartProps> = ({title}) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('week')

  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between">
          <h2>{title}</h2>
          <Select
            value={selectedOption}
            onValueChange={(value) => {setSelectedOption(value)}}
          >
            <SelectTrigger className="w-24">
              <SelectValue placeholder={'Week'}></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChartPlot width={600} height={400} data={data} >
            <CartesianGrid strokeDasharray='8' vertical={false}/>
            <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs"/>
            <YAxis axisLine={false} tickLine={false} tickMargin={15} className="text-xs"/>
            <Tooltip />
            <Line type='monotone' dataKey="pv" stroke="#4284d8"/>
            <Line type='monotone' dataKey="uv" stroke="#5253d8"/>
          </LineChartPlot>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default LineChart;