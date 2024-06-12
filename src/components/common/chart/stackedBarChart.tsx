import {
  Card, 
  CardContent, 
  CardHeader 
} from "@/components/ui/card";
import React from "react"
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';

interface StackedBarChart{
  title: string
}

const data = [
  {
    name: 'Category 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Category 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Category 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Category 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Category 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const StackedBarChart: React.FC<StackedBarChart> = ({title}) => {
  return (
    <Card className="w-full">
      <CardHeader>{title}</CardHeader>
      <CardContent className='h-40'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="name" className="text-xs"/>
            <Tooltip/>
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default StackedBarChart;