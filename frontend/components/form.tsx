"use client"

import { Control, FieldValues, Path, Controller } from "react-hook-form"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"

type BaseControllerProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  autoComplete?: string
}

type InputControllerProps<T extends FieldValues> = BaseControllerProps<T> & {
  type?: string
}

type PasswordControllerProps<T extends FieldValues> = BaseControllerProps<T> & {
  forgotHref?: string
}

export function InputController<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete = "off",
}: InputControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>

          <Input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={fieldState.invalid}
          />

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

export function PasswordController<T extends FieldValues>({
  control,
  name,
  label = "Password",
  placeholder = "Password",
  autoComplete = "off",
  forgotHref = "",
}: PasswordControllerProps<T>) {
  const [show, setShow] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <div className="flex items-center">
            <FieldLabel htmlFor={name}>{label}</FieldLabel>

            {forgotHref && (
              <Link
                href={forgotHref}
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            )}
          </div>

          <div className="relative">
            <Input
              {...field}
              id={name}
              placeholder={placeholder}
              autoComplete={autoComplete}
              aria-invalid={fieldState.invalid}
              type={show ? "text" : "password"}
            />
            <Button
              className="absolute top-0 right-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShow(!show)}
              size="icon"
              type="button"
              variant="ghost"
            >
              {show ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
