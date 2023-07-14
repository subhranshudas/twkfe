"use client"

import Link from "next/link"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { FcGoogle } from "react-icons/fc"

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

import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"



const signupFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is mandatory",
    })
    .email(),
  password: z.string({
    required_error: "Password is mandatory",
  })
  .min(6,  {
    message: "Password must minimum of 6 characters.",
  }),
})

type SignupFormValues = z.infer<typeof signupFormSchema>

const defaultValues: Partial<SignupFormValues> = {
    email: '',
    password: ''
}

export function SignupForm() {

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues,
    mode: "onSubmit",
  })

  async function onSubmit(data: SignupFormValues) {
    try {
      setIsLoading(true)

      await delay(3000)

      console.log(JSON.stringify(data, null, 2))

      toast({
        variant: "success",
        title: "Email Sent",
        description: (
          <div className="flex justify-center items-center">
            <p>Thank you for your email!</p>
          </div>
        ),
      })

      form.reset(defaultValues)
    } catch (err) {

      toast({
        variant: "destructive",
        title: "Email Not Sent",
        description: (
          <div className="flex flex-col justify-center items-center">
            <p>Something went wrong!</p>
            <p>Please try again later.</p>
          </div>
        ),
      })

    } finally {
      setIsLoading(false)
    }
  }

  function resetContactForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    form.reset(defaultValues)
  }

  return (
    <div className="flex flex-col">
        <Button variant="secondary" size="lg" className="my-4 flex gap-x-2 border text-lg">
            <FcGoogle size={24} />
            <span>Signup with Google</span>
        </Button>
        
        <div className="flex justify-center items-center gap-x-4 my-8">
            <span className="border border-t-1 w-[100px]"></span>
            <span className="text-center flex-grow-1 text-sm text-muted-foreground">Or, sign up with your email</span>
            <span className="border border-t-1 w-[100px]"></span>
        </div>

        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-lg">Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="Your Email" {...field} />
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
                    <FormLabel className="text-lg">Password</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="Your Password" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />

            <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 text-sm">
                <p>{`Already have an account?`} <Link href="/login" className="text-blue-500 hover:text-blue-400 font-semibold">Login</Link></p>
            </div>

            <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-end md:gap-x-2">
                <Button variant="outline" onClick={resetContactForm}>Reset</Button>
                <Button type="submit">Signup with Email</Button>
            </div>
            
        </form>
        
        <SignupFormLoader show={isLoading} />
        </Form>
    </div>
  )
}

function SignupFormLoader({ show } : { show: boolean }) {
  if (!show) return null

  return (
    <div className="bg-background rounded-xl absolute top-0 left-0 h-full w-full flex flex-col gap-y-2 px-12 pt-12">    
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-8 w-full" />

      <div className="h-6"></div>

      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-8 w-full" />

      <div className="h-6"></div>

      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-20 w-full" />

      <div className="h-6"></div>

      <div className="flex justify-end mt-8">
        <Skeleton className="h-8 w-[100px]" />
        <div className="h-6 w-2"></div>
        <Skeleton className="h-8 w-[100px]" />
      </div>
    </div>
  )
}

async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}