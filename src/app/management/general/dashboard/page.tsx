import DashboardPage from "@/containers/dashboard-page/dashboard-page";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {    
  return (
    <main className="flex flex-col m-5 h-full space-y-4">
      <div className="flex">
        <h1 className="text-black text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex">
        <DashboardPage/>    
      </div>
    </main>
  )
}

export default Dashboard;