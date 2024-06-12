'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

/* interface SignInFormProps{} */

const formSchema = z.object({
  name: z.string().min(15),
  email: z.string().min(2),
  password: z.string().min(2)
})

export function SignUpForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  }) 

  async function onSubmit(values: z.infer<typeof formSchema>){
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:DP2ZFi7S/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }
      
      router.push('/auth/sign-in')
      //console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
    //console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription className="flex justify-end hover:text-blue-600">
                <Link
                  href={'#'}
                >
                  Forgot password?
                </Link>
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-2">
          <Button type="submit" className="w-full">Sign Up</Button>
          <div className="flex justify-center space-x-2 text-[0.8rem] text-muted-foreground">
            <span>Already have an account?</span>
            <Link
              className="text-blue-600"
              href={'/auth/sign-in'}
            >
              Sign in
            </Link>
          </div>
          {/* <div className="relative flex items-center w-full pt-4 pb-4">
            <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 z-10 text-gray-400 text-xs">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Button className="w-full">Sign up with Google</Button> */}
        </div>
      </form>
    </Form>
  )
}