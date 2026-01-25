/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import Container from "@/lib/Container";
import { useSignInMutation } from "@/redux/api/auth/authApi";
import { setUser } from "@/redux/features/user/userSlice";
import CustomInput from "@/ui/CustomeInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import * as z from "zod";
import AuthSide from "./AuthSide";

// Define Zod schema for validation
const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters long" })
    .min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignInPage() {
  // Use React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const [signIn, { isLoading }] = useSignInMutation();

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await signIn(data).unwrap();
      if (response?.success) {
        if (response.data.verify) {
          Cookies.set("token", response.data.accessToken);
          dispatch(
            setUser({
              token: response.data.accessToken,
            })
          );
          toast.success("Login successful");
          router.push("/");
        } else {
          router.push("/otp");
        }
      }
    } catch (error: any) {
      console.log("Error during sign-in:", error);
      return toast.error(error?.data?.message || "Login failed");
    }
  };

  return (
    <Container>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden">

        {/* Left Side Image (1 column) */}
        <AuthSide />
        {/* Right Side Form (2 columns) */}
        <div className="md:col-span-2 flex items-center justify-center px-6">
          <div className="w-full max-w-lg">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Email Input */}
              <CustomInput
                id="email"
                type="email"
                label="Email"
                placeholder="georgiayoung@example.com"
                {...register("email")}
                error={errors.email?.message}
              />

              {/* Password Input */}
              <CustomInput
                id="password"
                type="password"
                label="Password"
                placeholder="••••••••••"
                showPasswordToggle={true}
                error={errors.password?.message}
                {...register("password")}
              />

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    {...register("rememberMe")}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                </div>

                <Link
                  href="/forget-password"
                  className="text-sm text-red-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <PrimaryButton
                type="submit"
                loading={isLoading}
                text="Sign In"
              />

            </form>

          </div>
        </div>

      </div>
    </Container>

  );
}
