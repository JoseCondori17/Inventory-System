import Image from "next/image"

export default function AuthLayout({ 
  children,
 }: Readonly<{
  children: React.ReactNode
}>){  
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex justify-center items-center">{children}</div>
      <div className="w-1/2 bg-black">
        <p>ahh</p>
      </div>
    </div>
  )
}