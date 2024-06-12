import AddIcon from "@/components/icon/addIcon";
import { Button } from "@/components/ui/button";

interface WarehouseProps {}

const Warehouse: React.FC<WarehouseProps> = ({}) => {    
  return (
    <main>
      <main className="m-5 h-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-black font-bold">Warehouse</h1>
        <Button variant={'outline'} size={'sm'} className="flex items-center space-x-2 rounded-xl">
          <AddIcon className="size-3"/>
          <span>Add store</span>
        </Button>
      </div>
      <div>
        <p>hola</p>
      </div>
    </main>
    </main>
  )
}

export default Warehouse;