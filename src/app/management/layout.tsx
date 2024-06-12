"use client"
import { HeaderNav } from "@/components/common/nav/header-nav/headerNav"
import { SideBar } from "@/components/common/nav/side-bar/sideBar"
import { Separator } from "@/components/ui/separator"

export default function ManagementLayout({ 
  children,
 }: Readonly<{
  children: React.ReactNode
}>){  
  return (
    <div className="flex h-screen">
      <SideBar/>
      <Separator className="w-[1px] bg-neutral-200" orientation="vertical"></Separator>
      <div className="flex-1">
        <HeaderNav name={'Eduardo Condori'} role={'Administrator'}></HeaderNav>
        <Separator className="bg-neutral-200 h-[1px]"></Separator>
        <div className="flex-1 ml-4 mr-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}