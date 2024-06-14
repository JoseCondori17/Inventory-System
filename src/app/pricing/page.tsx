interface PricingProps{}

import CheckFillIcon from "@/components/icon/checkFillIcon";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";

const Pricing: React.FC<PricingProps> = ({}) => {
  return (
    <div className="flex justify-center w-full gap-4">
      <Card className="w-64 bg-inherit rounded-2xl border-zinc-900">
        <CardHeader>
          <CardTitle className="text-xl text-white">Basic</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2 text-white">
          <div className="flex space-x-2 h-16">
            <span className="inline-block align-middle text-xl">$</span>
            <span className="text-5xl font-bold">0</span>
          </div>
          <Button size={'sm'} className="text-[0.5em] bg-white hover:bg-white text-black font-bold">GET STARTED</Button>
          <div className="flex flex-col space-y-6 pt-6">
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>  
            <Separator className="bg-zinc-900"></Separator>
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
            <Separator className="bg-zinc-900"></Separator>
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
          </div>
        </CardContent>
      </Card>
      <Card className="h-90 w-64 bg-inherit rounded-2xl border-zinc-900">
        <CardHeader>
          <CardTitle className="text-xl text-white">Premium</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2 text-white">
          <div className="flex space-x-2 h-16">
            <span className="inline-block align-middle text-xl">$</span>
            <span className="text-5xl font-bold">9.99</span>
          </div>
          <Button size={'sm'} className="text-[0.5em] bg-white hover:bg-white text-black font-bold">GET STARTED</Button>
          <div className="flex flex-col space-y-6 pt-6">
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
            <Separator className="bg-zinc-900"></Separator>
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
            <Separator className="bg-zinc-900"></Separator>
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
          </div>
        </CardContent>
      </Card>
      <Card className="h-90 w-64 bg-inherit rounded-2xl border-zinc-900">
        <CardHeader>
          <CardTitle className="text-xl text-white">Enterprise</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2 text-white">
          <div className="flex space-y-2 h-16"></div>
          <Button size={'sm'} variant={'outline'} className="text-[0.5em] bg-inherit hover:bg-violet-500 hover:text-white hover:border-none transition-all delay-100 font-bold">REQUEST A DEMO</Button>
          <div className="flex flex-col space-y-6 pt-6">
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
            <Separator className="bg-zinc-900"></Separator>
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
            <Separator className="bg-zinc-900"></Separator>
            <CheckFillIcon className="text-violet-500 size-5"></CheckFillIcon>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Pricing;