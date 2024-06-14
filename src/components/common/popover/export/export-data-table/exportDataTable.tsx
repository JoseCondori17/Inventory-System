import { Button } from "@/components/ui/button";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { exportCSV } from "@/utils/tools";
import { exportPDF } from "@/utils/tools";

export function ExportDataTable({data} : {data: any}) {
  const getFileName = (): string => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString().replace(/\//g, "-"); // Reemplaza las barras con guiones para evitar problemas en el nombre del archivo
    const time = date.toLocaleTimeString().replace(/:/g, "-"); // Reemplaza los dos puntos con guiones para evitar problemas en el nombre del archivo
    const fileName = `product_list_${formattedDate}_${time}`; // Nombre del archivo más descriptivo
    return fileName;
  };

  const handleExportPDF = () => {
    exportPDF(data, getFileName());
  };

  const handleExportCSV = () => {
    exportCSV(data, getFileName());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'sm'} className="flex space-x-2 rounded-xl select-none">
          <ArrowUpTrayIcon className="size-3"/>
          <span>Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleExportPDF}>Export to pdf</DropdownMenuItem>
        <DropdownMenuItem onClick={handleExportCSV}>Export to csv</DropdownMenuItem>
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