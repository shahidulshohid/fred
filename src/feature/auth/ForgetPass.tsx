"use client";

import Logo from "@/components/shared/Logo";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import Container from "@/lib/Container";
import { useForgetPasswordMutation } from "@/redux/api/auth/authApi";
import CustomInput from "@/ui/CustomeInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import AuthSide from "./AuthSide";
import { GoArrowLeft } from "react-icons/go";

// Define Zod schema for validation
const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ForgetPassPage() {
  const router = useRouter();
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  // Use React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form Data:", data);
    router.push("/otp")
    // try {
    //   const response = await forgetPassword(data).unwrap();
    //   if (response?.success) {
    //     console.log("OTP sent successfully");
    //     toast.success("OTP sent successfully to your email");
    //     router.push("/signIn");
    //   }
    //   // router.push("/otp")
    // } catch (error) {
    //   console.error("Error:", error);
    //   toast.error("Error sending OTP. Please try again.");
    // }
  };

  return (
    <Container>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        <AuthSide />
        <div className="md:col-span-2 flex items-center justify-center px-6">
          <div className="max-w-[540px] lg:w-[540px] h-auto mx-auto bg-[#FFF] p-6 rounded-2xl border border-[#6E51E01A] shadow-[0_0_20px_0_rgba(94,95,224,0.1)]">
            <div className="flex flex-col mb-8">
              <div className="flex items-center gap-2">
                <Link href="/signIn" className="mb-4">
                  <GoArrowLeft size={22} className="-mt-2 text-[#64748B]" />
                </Link>
                <h3 className="font-bold text-3xl mb-6 text-[#2D2D2D]">Reset Password</h3>
              </div>
              <p className="text-gray-500 text-[16px]">
                Enter your email address, and we’ll send you a one-time password (OTP) to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
              {/* Email Input */}
              <CustomInput
                id="email"
                type="email"
                label="Email Address"
                placeholder="example@company.com"
                leftIcon={<img src="/authImg/mailIcon.png" alt="icon" className="w-5 h-5" />}
                error={errors.email?.message}
                {...register("email")}
              />

              {/* Login Button */}
              <PrimaryButton type="submit" loading={isLoading} text="Send Otp" />
            </form>

            {/* Register Link */}
            <div className="text-center mb-3 mt-3 text-sm text-gray-600">
              Remember your password?{" "}
              <Link href="/signIn" className="text-primary hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
