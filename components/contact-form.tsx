"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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


const contactFormSchema = z.object({
  username: z
    .string({
      required_error: "Name is mandatory",
    })
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(50, {
      message: "Name must not be longer than 50 characters.",
    }),
  email: z
    .string({
      required_error: "Email is mandatory",
    })
    .email(),
  message: z.string({
    required_error: "Message is mandatory",
  })
  .max(1000, {
    message: "Message must not be longer than 1000 characters.",
  })
  .min(20,  {
    message: "Message must minimum of 20 characters.",
  }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const defaultValues: Partial<ContactFormValues> = {
  username: '',
  email: '',
  message: ''
}

export function ContactForm() {

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onSubmit",
  })

  async function onSubmit(data: ContactFormValues) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your Name" {...field} />
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Can Tekwerke help me build a rocket?"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                (max 1000 chars)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-end md:gap-x-2">
          <Button variant="outline" onClick={resetContactForm}>Reset</Button>
          <Button type="submit">Submit</Button>
        </div>
        
      </form>
      
      <ContactFormLoader show={isLoading} />
    </Form>
  )
}

function ContactFormLoader({ show } : { show: boolean }) {
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