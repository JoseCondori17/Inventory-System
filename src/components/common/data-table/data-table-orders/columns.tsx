'use client'
import { ColumnDef } from '@tanstack/react-table'
import { Order } from '@/utils/types/order'
import { format } from 'date-fns';
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

export const columnsOrders: ColumnDef<Order>[] = [
  {
    accessorKey: 'nOrden',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Num. Order
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'product',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
        >
          Products
        </Button>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'))
      const formatted = new Intl.NumberFormat("es-PE",{
        style: "currency",
        currency: "PEN"
      }).format(price)
      return <div className='font-medium'>{formatted}</div>
    },
  },
  {
    accessorKey: "purchaseTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className='text-center'>{row.getValue("purchaseTime")}</div>
    },
  },
  {
    accessorKey: 'seller',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Seller
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]