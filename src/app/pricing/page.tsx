

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
import Link from "next/link";

interface PricingProps{}
const Pricing: React.FC<PricingProps> = ({}) => {
  return (
    <div className="flex flex-col h-screen p-5 bg-gradient-to-r from-blue-500 to-green-500"> {/*bg-gradient-to-r from-blue-500 to-green-500 */}
      <nav className="flex w-full justify-between">
      <span>icon</span>
      <div className="flex space-x-2 text-white">
        <Link
          href={"/"}
        >
          <Button variant={'ghost'} size={'sm'}>Home</Button>
        </Link>
        <Link
          href={"/features"}
        >
          <Button variant={'ghost'} size={'sm'}>Feature</Button>
        </Link>
        <Link
          href={"/pricing"}
        >
          <Button variant={'ghost'} size={'sm'}>Pricing</Button>
        </Link>
        <Link
          href={"/blogs"}
        >
          <Button variant={'ghost'} size={'sm'}>Blogs</Button>
        </Link>
        <Link
          href={"contact-us"}
        >
          <Button variant={'ghost'} size={'sm'}>Contact us</Button> 
        </Link>
      </div>
      <Link href={'/auth/sign-in'}>
        <Button variant={'outline'} size={'sm'} className="rounded-xl">Login</Button>
      </Link>
      </nav>
      <main className="flex-1 flex items-center justify-bewteen"> {/* flex-col items-center justify-between p-24 */}
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
      </main>
      </div>
  )
}

export default Pricing;