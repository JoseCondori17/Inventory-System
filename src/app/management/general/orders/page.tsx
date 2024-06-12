import { DataTable } from "@/components/common/data-table/data-table";
import { Button } from "@/components/ui/button";
import { Product } from "@/utils/types/product";
import { columns } from "@/components/common/data-table/columns";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SheetInventory from "@/components/common/sheet/sheetInventory";

function example(): Product[]{
  const date = new Date("15-12-2024")
  return [
    {
      "id": "1SF3SA",
      "name": "Product A",
      "category": "Electronics",
      "sku": "PROD001",
      "entryDate": date,
      "lastUpdateDate": date,
      "stock": 100,
      "unitPrice": 29.99,
      "status": "available"
    },
    {
      "id": "1SF3SA",
      "name": "Product B",
      "category": "Clothing",
      "sku": "PROD002",
      "entryDate": date,
      "lastUpdateDate": date,
      "stock": 50,
      "unitPrice": 19.99,
      "status": "out of stock"
    },
    {
      "id": "1SF3SA",
      "name": "Product C",
      "category": "Home & Kitchen",
      "sku": "PROD003",
      "entryDate": date,
      "lastUpdateDate": date,
      "stock": 75,
      "unitPrice": 39.99,
      "status": "available"
    },{
      "id": "1SF3SA",
      "name": "Product A",
      "category": "Electronics",
      "sku": "PROD001",
      "entryDate": date,
      "lastUpdateDate": date,
      "stock": 100,
      "unitPrice": 29.99,
      "status": "available"
    },
    {
      "id": "1SF3SA",
      "name": "Product B",
      "category": "Clothing",
      "sku": "PROD002",
      "entryDate": date,
      "lastUpdateDate": date,
      "stock": 50,
      "unitPrice": 19.99,
      "status": "out of stock"
    },
    {
      "id": "1SF3SA",
      "name": "Product C",
      "category": "Home & Kitchen",
      "sku": "PROD003",
      "entryDate": date,
      "lastUpdateDate": date,
      "stock": 75,
      "unitPrice": 39.99,
      "status": "available"
    },
    {
      "id": "1SF3SA",
      "name": "Product A",
      "category": "Electronics",
      "sku": "PROD001",
      "entryDate": date,
      "lastUpdateDate": date,
      "stock": 100,
      "unitPrice": 29.99,
      "status": "available"
    },
  ]  
}

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = ({}) => {   
  const data = example()

  return (
    <main className="m-5 h-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-black font-bold">Orders</h1>
      </div>
      <div>
        <DataTable columns={columns} data={data}></DataTable>
      </div>
    </main>
  )
}

export default Orders;