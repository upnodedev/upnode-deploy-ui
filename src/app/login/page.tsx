"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Login() {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });
  return (
    <div className="relative h-screen bg-primary-dark">
      <img
        src="/login-bg.png"
        alt=""
        className="absolute h-full w-full object-cover opacity-45"
      />
      <div className="relative z-10 mx-auto flex max-w-[360px] flex-col items-center pt-20">
        <div className="flex">
          <div className="mb-6 rounded-full bg-gradient-to-r from-[#fff] to-[#D0D5DD]">
            <Image src="/upnode-logo.svg" width={46} height={46} alt="" />
          </div>
        </div>
        <div className="text-3xl font-semibold text-primary-dark">
          Log in to your account
        </div>
        <div className="mt-3 text-base text-tertiary-dark">
          Welcome back! Please enter your details.
        </div>
        <div className="mt-8 w-full">
          <Form {...form}>
            <form onSubmit={() => {}} className="w-full space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="username"
                      className="mb-1.5 text-secondary-dark"
                    >
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        placeholder="Enter your username"
                        className="rounded-full border-primary-dark bg-primary-dark px-3.5 py-2.5 text-base text-placeholder-dark"
                        {...field}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="username"
                      className="mt-5 text-secondary-dark"
                    >
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="••••••••"
                        className="rounded-full border-primary-dark bg-primary-dark px-3.5 py-2.5 text-base text-placeholder-dark"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#1E61F2] px-4 py-2.5 text-text-md font-semibold text-white"
              >
                Sign in
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}