import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      <div className="flex items-center justify-center w-1/2">
        <div className="flex flex-col space-y-8 w-1/2">
          <h1 className="text-5xl font-bold text-white">Empower your management with our streamlined platform</h1>
          <p className="text-white">Take control of your operations like never before with our user-friendly platform, designed to simplify management tasks and drive efficiency.</p>
          <Button className="text-xs rounded-xl w-1/4 bg-white text-black">Learn More</Button>
        </div>
      </div>
      <div className="flex text-white w-1/2">
        <Image
          src={'/img/bg-landing.png'}
          alt="landing page"
          width={563}
          height={443}
        ></Image>
      </div>
      </main>
    </div>  
  );
}
