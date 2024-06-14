'use client'
import { DataTableOrders } from "@/components/common/data-table/data-table-orders/data-table";
import { Order } from "@/utils/types/order";
import { columnsOrders } from "@/components/common/data-table/data-table-orders/columns";
import { useState, useEffect } from "react";

async function getData(){
  try {
    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:uRLR9xAm/order', {
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

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = ({}) => {   
  const [data, setData] = useState<Order[]>([]);

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
        <h1 className="text-2xl text-black font-bold">Orders</h1>
      </div>
      <div>
        <DataTableOrders columns={columnsOrders} data={data}></DataTableOrders>
      </div>
    </main>
  )
}

export default Orders;