'use client'
import * as React from "react"
import DashBoardMetrics from "@/components/common/chart/dashboardMetrics";
import DashboardIcon from "@/components/icon/dashboardIcon";
import CoinIcon from "@/components/icon/coinIcon";
import ShoppingCartCheckIcon from "@/components/icon/shoppingCartCheckIcon";
import DiscountTagIcon from "@/components/icon/discountTagIcon";
import LineChart from "@/components/common/chart/lineChart";
import BarChart from "@/components/common/chart/barChart";
import PieChart from "@/components/common/chart/pieChart";
import StackedBarChart from "@/components/common/chart/stackedBarChart";
import TableBasic from "@/components/common/table/tableBasic";
import CardProgress from "@/components/common/card/card-dashboard/cardProgress";

const data1 = {
  header: [
    { key: 'sku', label: 'SKU' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price', align: 'right' },
  ],
  body: [
    { sku: 'INV001', name: 'Tablet', category: 'Yape', price: 250.00 },
    { sku: 'INV002', name: 'Tablet', category: 'Transfer', price: 150.50 },
    { sku: 'INV003', name: 'Paid', category: 'Transfer', price: 350.75 },
  ]
}

const data2 = {
  header: [
    { key: 'id', label: 'ID' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'payment', label: 'Payment Method' },
    { key: 'amount', label: 'Amount', align: 'right' },
  ],
  body: [
    { id: 'INV001', quantity: 2, payment: 'Yape', amount: 250.00 },
    { id: 'INV002', quantity: 2, payment: 'Yape', amount: 150.50 },
    { id: 'INV003', quantity: 2, payment: 'Transfer', amount: 350.75 },
  ]
}

const DashboardPage: React.FC = () => {
  
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col lg:flex-row w-full h-full mx-auto gap-4 select-none">
      <div className="flex flex-col w-full lg:w-2/3 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashBoardMetrics
            icon={DashboardIcon}
            title={'Total sales'}
            quantity={'124'}
            chart={<p>s</p>}
          />
          <DashBoardMetrics
            icon={CoinIcon}
            title={'Total Profit'}
            quantity={'124'}
            chart={<p>s</p>}
          />
          <DashBoardMetrics
            icon={ShoppingCartCheckIcon}
            title={'Total orders'}
            quantity={'124'}
            chart={<p>s</p>}
          />
          <DashBoardMetrics
            icon={DiscountTagIcon}
            title={'Products Offer'}
            quantity={'124'}
            chart={<p>s</p>}
          />
        </div>
        <div className="w-full">
          <LineChart
            title="Sales Analysis"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full">
            <PieChart
              title="Payment Methods"
            />
          </div>
          <div className="w-full">
            <CardProgress
              title="Availability of Stock"
            />
          </div>
          <div className="w-full">
            <CardProgress
              title="Availability of Stock"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/3 gap-4">
        <div className="w-full h-auto lg:h-1/3">
          <StackedBarChart
            title="Top Selling Category"
          />
        </div>
        <div className="w-full h-auto lg:h-1/3">
          <TableBasic
            title="Top Products"
            data={data1}
          />
        </div>
        <div className="w-full h-auto lg:h-1/3">
          <TableBasic
            title="New Sales"
            data={data2}
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;