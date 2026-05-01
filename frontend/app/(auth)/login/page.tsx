"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { FaGoogle } from "react-icons/fa"

import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { FieldGroup } from "@/components/ui/field"
import { InputController, PasswordController } from "@/components/form"

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(15, "Username must be at most 10 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password must be at most 20 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/,
      "Password must contain at least 1 uppercase letter and 1 special character."
    ),
})

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your username and password below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-login-input" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <FieldGroup>
              <div className="grid gap-2">
                <InputController
                  control={form.control}
                  name="username"
                  label="Username"
                  placeholder="username"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <PasswordController
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="password"
                  />
                </div>
              </div>
            </FieldGroup>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" form="form-login-input" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          <FaGoogle />
          Login with Google
        </Button>
        <div className="text-center">
          Dont have an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
