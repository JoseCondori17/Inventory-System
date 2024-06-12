import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/outline";

interface Filter {
  option: string;
  query: string;
  value: string;
}

export function FilterDataTable() {
  const [filters, setFilters] = useState<Filter[]>([{ option: '', query: '', value: '' }]);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleAddFilter = () => {
    setFilters([...filters, { option: '', query: '', value: '' }]);
  };

  const handleDeleteFilter = (index: number) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  const handleFilterChange = (index: number, field: keyof Filter, value: string) => {
    const newFilters = [...filters];
    newFilters[index][field] = value;
    setFilters(newFilters);
  };

  return (
    <Popover open={filterOpen} onOpenChange={setFilterOpen}>
      <PopoverTrigger asChild>
        <Button variant={'outline'} size={'sm'} className="space-x-2 rounded-xl select-none">
          <FunnelIcon className="size-3"/>
          <span>Filter</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-[30rem] space-y-2" align="end">
        {filters.map((filter, index) => (
          <div key={index} className="flex justify-between w-full space-x-2">
            <Select
              value={filter.option}
              onValueChange={(value) => handleFilterChange(index, 'option', value)}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="entry_date">Entry Date</SelectItem>
                <SelectItem value="last_update_date">Last Update Date</SelectItem>
                <SelectItem value="stock">Stock</SelectItem>
                <SelectItem value="unit_price">Unit Price</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filter.query}
              onValueChange={(value) => handleFilterChange(index, 'query', value)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Query" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contains">Contains</SelectItem>
                <SelectItem value="is">Is</SelectItem>
                <SelectItem value="is_higher_than">Is higher than</SelectItem>
                <SelectItem value="is_low_than">Is low than</SelectItem>   
              </SelectContent>
            </Select>
            <Input
              value={filter.value}
              onChange={(e) => handleFilterChange(index, 'value', e.target.value)}
              className="rounded-md w-[100px]"
            />
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => handleDeleteFilter(index)}
            >
              <TrashIcon className="size-4"/>
            </Button>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1">
          <Button variant={'outline'} size={'sm'} onClick={handleAddFilter} className="flex items-center justify-center space-x-2">
            <PlusIcon className="size-3"/>
            <span>Add filter</span>
          </Button>
          <Button variant={'outline'} size={'sm'} onClick={()=>{setFilterOpen(false)}}>
            <span>Save</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterDataTable;