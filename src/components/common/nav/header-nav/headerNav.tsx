import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"
import { Separator } from "@radix-ui/react-separator"

export function HeaderNav({name, role}: {name: string, role: string}){
  return (
    <div className="flex items-center justify-end h-7 m-2 mr-6 space-x-4">
      <p>Icon</p>
      <Separator className="bg-gray-200 w-[1px] h-6" orientation="vertical"></Separator>
      <div className="flex space-x-2">
        <Avatar className="w-7 h-7">
          <AvatarImage src="https://github.com/shadcn.png"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xs">{name}</p>
          <span className="text-[0.65rem] text-gray-400">{role}</span>
        </div>
      </div>
    </div>
  )   
}