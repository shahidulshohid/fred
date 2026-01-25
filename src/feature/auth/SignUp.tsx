/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import Container from "@/lib/Container";
import { useSignUpMutation } from "@/redux/api/auth/authApi";
import CustomInput from "@/ui/CustomeInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import AuthSide from "./AuthSide";

// Define Zod schema for validation
const formSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z
      .string()
      .email({ message: "Please enter a valid company email address" })
      .min(1, { message: "Company email is required" }),
    password: z
      .string()
      .min(6, { message: "Password should be at least 6 characters long" })
      .min(1, { message: "Password is required" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export default function SignUpPage() {
  const [signUp, { isLoading }] = useSignUpMutation();
  const router = useRouter();

  // Use React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    localStorage.setItem("email", data.email);
    console.log("Form Data:", data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data;

    // Add role to the payload
    const payload = {
      ...rest,
      role: "INDIVIDUAL",
    };

    try {
      const response = await signUp(payload).unwrap();
      if (response?.success) {
        router.push("/otp");
      }
    } catch (error: any) {
      console.error("Error during sign up:", error);
      toast(error?.data?.message || "Sign up failed");
    }
  };

  return (
    <Container>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        <AuthSide />
        <div className="md:col-span-2 flex items-center justify-center px-6">
          <div className="max-w-[540px] lg:w-[540px] h-auto mx-auto bg-[#FFF] p-6 rounded-2xl border border-[#6E51E01A] shadow-[0_0_20px_0_rgba(94,95,224,0.1)]">
            <h3 className="font-semibold text-3xl text-[#252525] mb-4">Create a new account</h3>
            <p className="text-lg font-semibold text-[#252525] mb-2">I’m a</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
              <div className="flex items-center gap-4">
                {/* First Name Input */}
                <CustomInput
                  id="firstName"
                  label="First Name"
                  placeholder="John"
                  leftIcon={<img src="/authImg/humanIcon.png" alt="icon" className="w-5 h-5" />}
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />

                {/* Last Name Input */}
                <CustomInput
                  id="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  leftIcon={<img src="/authImg/humanIcon.png" alt="icon" className="w-5 h-5" />}
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>

              {/* Company Email Input */}
              <CustomInput
                id="email"
                type="email"
                label="Email Address"
                placeholder="example@company.com"
                leftIcon={<img src="/authImg/mailIcon.png" alt="icon" className="w-5 h-5" />}
                error={errors.email?.message}
                {...register("email")}
              />

              {/* Password Input */}
              <CustomInput
                id="password"
                type="password"
                label="Password"
                placeholder="••••••••••"
                showPasswordToggle={true}
                error={errors.password?.message}
                leftIcon={<img src="/authImg/passwordIcon.png" alt="icon" className="w-5 h-5" />}
                {...register("password")}
              />

              {/* Confirm Password Input */}
              <CustomInput
                id="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="••••••••••"
                showPasswordToggle={true}
                error={errors.confirmPassword?.message}
                leftIcon={<img src="/authImg/passwordIcon.png" alt="icon" className="w-5 h-5" />}
                {...register("confirmPassword")}
              />

              {/* Sign Up Button */}
              <PrimaryButton type="submit" loading={isLoading} text="Sign Up" />
            </form>

            {/* Login Link */}
            <div className="text-center mb-3 mt-3 text-[16px] text-gray-600">
              Already have an accoun?{" "}
              <Link href="/signIn" className="text-primary text-[16px] font-semibold hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
