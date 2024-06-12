import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import React from "react";
import { InventoryForm } from "../form/inventory/inventoryForm";

interface SheetInventoryProps{
  content: React.ReactNode,
}
const SheetInventory: React.FC<SheetInventoryProps> = ({content, ...props}) => {
  return (
    <Sheet> {/* agrego */}
      <SheetTrigger asChild>         
        {content}
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]" {...props}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            <InventoryForm></InventoryForm>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SheetInventory;