"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useState } from 'react';

import DashboardIcon from '@/components/icon/dashboardIcon';
import StoreIcon from '@/components/icon/storeIcon';
import BoxIcon from '@/components/icon/boxIcon';
import TaskIcon from '@/components/icon/taskIcon';
import CheckTaskIcon from '@/components/icon/checkTaskIcon';
import FileEditIcon from '@/components/icon/fileEditIcon';
import CalendarIcon from '@/components/icon/calendarIcon';
import InvoiceIcon from '@/components/icon/invoiceIcon';
import TransactionIcon from '@/components/icon/transactionIcon';
import CreditCardIcon from '@/components/icon/creditCardIcon';
import SettingIcon from '@/components/icon/settingIcon';
import SecurityCheckIcon from '@/components/icon/securityCheckIcon';
import HelpIcon from '@/components/icon/helpIcon';
import SidebarLeftIcon from '@/components/icon/sidebarLeftIcon';
import SidebarRightIcon from '@/components/icon/sidebarRightIcon';

import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  {
    label: 'GENERAL',
    items: [
      { name: 'Dashboard', href: '/management/general/dashboard', icon: DashboardIcon },
      { name: 'Warehouse', href: '/management/general/warehouse', icon: StoreIcon },
      { name: 'Inventory', href: '/management/general/inventory', icon: BoxIcon },
      { name: 'Orders', href: '/management/general/orders', icon: TaskIcon }, 
    ]
  },
  {
    label: 'WORKSPACE',
    items: [
      { name: 'Task', href: '/management/workspace/task', icon: CheckTaskIcon },
      { name: 'Calendar', href: '/management/workspace/calendar', icon: CalendarIcon },
      { name: 'Documents', href: '/management/workspace/documents', icon: FileEditIcon },
    ]
  },
  {
    label: 'FINANCE',
    items: [
      { name: 'Invoices', href: '/management/finance/invoices', icon: InvoiceIcon },
      { name: 'Transactions', href: '/management/finance/transactions', icon: TransactionIcon },
      { name: 'Payments', href: '/management/finance/payments', icon: CreditCardIcon },
    ]
  },
  {
    label: 'SUPPORT',
    items: [
      { name: 'Settings', href: '#', icon: SettingIcon },
      { name: 'Security', href: '#', icon: SecurityCheckIcon },
      { name: 'Help', href: '#', icon: HelpIcon },
    ]
  },
]

export function SideBar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${isExpanded ? 'w-64' : 'w-14'} h-full bg-white transition-all duration-300 ease-in-out`}>
      <nav className="space-y-3 mt-3">
        <div className="h-5 flex items-center justify-end ml-2 mr-2">
          <Button className="flex bg-transparent hover:bg-transparent shadow-none" onClick={() => setIsExpanded(prev => !prev)} size="sm">
            {isExpanded ? <SidebarLeftIcon className="size-4 text-black" /> : <SidebarRightIcon className="size-4 text-black" />}
          </Button>
        </div>
        {navItems.map((section, index) => (
          <div key={index} className="space-y-4">
            <Separator className={index === 0 ? 'bg-neutral-200' : undefined} />
            <div className="flex flex-col select-none ml-2 mr-2">
              <TooltipProvider>
                <ul className="flex flex-col space-y-2 text-xs">
                  {section.items.map(item => (
                    <li
                      key={item.name}
                      className={`flex items-center h-9 rounded-md ${pathname === item.href ? 'bg-black text-white' : 'text-black'}`}
                    >
                      <Link href={item.href} className={`flex w-full h-full items-center ${isExpanded ? 'p-3' : 'justify-center'} space-x-2`}>
                        {!isExpanded ? (
                          <Tooltip delayDuration={0}>
                            <TooltipTrigger>
                              <item.icon className={`size-4 ${pathname === item.href ? 'text-white' : 'text-black'}`} />
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={8}>{item.name}</TooltipContent>
                          </Tooltip>
                        ) : (
                          <>
                            <item.icon className={`size-4 ${pathname === item.href ? 'text-white' : 'text-black'}`} />
                            <span>{item.name}</span>
                          </>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}