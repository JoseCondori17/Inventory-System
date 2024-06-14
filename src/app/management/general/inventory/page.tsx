'use client'
import { DataTableInventory } from "@/components/common/data-table/data-table-inventory/data-table";
import { Button } from "@/components/ui/button";
import { Product } from "@/utils/types/product";
import { columnsInventory } from "@/components/common/data-table/data-table-inventory/columns";
import SheetInventory from "@/components/common/sheet/sheetInventory";
import { useState, useEffect } from "react";

async function getData(){
  try {
    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:ELY8bnRj/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('Error al enviar la solicitud');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

interface InventoryProps {}

const Inventory: React.FC<InventoryProps> = ({}) => {   
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      if (fetchedData) {
        setData(fetchedData);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="m-5 h-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-black font-bold">Inventory</h1>
        <SheetInventory
          content={<Button className="rounded-xl" variant={'outline'} size={'sm'}>Add product</Button>}
        ></SheetInventory>
      </div>
      <div className="flex-1">
        <DataTableInventory columns={columnsInventory} data={data}></DataTableInventory>
      </div>
    </main>
  )
}

export default Inventory;