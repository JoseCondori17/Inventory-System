{/* <Button variant={'outline'} className="rounded-xl text-xs">Export</Button> */}
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ExportDataTable() {
  {/* cambiarlo regresar a popover */}
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'sm'} className="flex space-x-2 rounded-xl select-none">
          <ArrowUpTrayIcon className="size-3"/>
          <span>Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Export to pdf</DropdownMenuItem>
        <DropdownMenuItem>Export to csv</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

{/* <Popover>
      <PopoverTrigger asChild>
        <Button variant={'outline'} className="rounded-xl text-xs space-x-2">
          <ArrowUpTrayIcon className="size-4"/>
          <span>Export</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-36 space-y-2" align="end">
        <div>

        </div>
      </PopoverContent>
    </Popover> */}

export default ExportDataTable;