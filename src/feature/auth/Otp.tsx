/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import { useResendCodeMutation, useVerifyEmailMutation} from "@/redux/api/auth/authApi";
import { toast } from "sonner";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import Container from "@/lib/Container";
import AuthSide from "./AuthSide";

interface OtpFormValues {
  otp: string[];
}

export default function OtpVerification() {
  const { register, handleSubmit, setValue, formState } =
    useForm<OtpFormValues>({
      defaultValues: {
        otp: ["", "", "", "", "", ""],
      },
    });

  const router = useRouter();
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  //   const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  // const [resendCode] = useResendCodeMutation();

  // Resend OTP Timer - Initialize from localStorage or default to 300 seconds
  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTime = localStorage.getItem("otpTimer");
      return savedTime ? parseInt(savedTime) : 300;
    }
    return 300;
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        const newTime = timeLeft - 1;
        setTimeLeft(newTime);
        localStorage.setItem("otpTimer", newTime.toString());
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      localStorage.removeItem("otpTimer");
    }
  }, [timeLeft]);

  // Convert timeLeft to MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Resend OTP handler
  const handleResendOTP = () => {
    const email = localStorage.getItem("email");
    localStorage.setItem("otpTimer", "300"); // Reset timer in localStorage
    setTimeLeft(300); // Reset timer in state
    console.log("Resending OTP...");
    // resendCode({ email });
  };

  // Focus the first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const onSubmit = async (data: OtpFormValues) => {
    const email = localStorage.getItem("email");
    const otpValue = data.otp.join("");
    console.log("OTP submitted:", otpValue);
    router.push("/reset-password");
    // try {
    //   const response = await verifyEmail({ email, otp: otpValue }).unwrap();
    //   if (response?.success) {
    //     toast.success("Verification successful!");
    //     localStorage.removeItem("otpTimer"); // Clear timer on success
    //     router.push("/signIn");
    //   }
    // } catch (error: any) {
    //   toast.error(
    //     error?.data?.message || "Verification failed. Please try again."
    //   );
    // }
  };

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value.length > 1) return;
    setValue(`otp.${index}`, value);

    if (value !== "" && index < 5) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !inputRefs.current[index]?.value
    ) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, ""); // only digits

    // Only allow exactly 4 digits
    if (pastedData.length === 4) {
      pastedData.split("").forEach((digit, index) => {
        setValue(`otp.${index}`, digit);
        if (inputRefs.current[index]) {
          inputRefs.current[index]!.value = digit;
        }
      });

      setActiveInput(3);
      inputRefs.current[3]?.focus();
    }
  };


  return (
    <Container>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        <AuthSide />
        <div className="md:col-span-2 flex items-center justify-center px-6">
          <div className="max-w-[540px] lg:w-[540px] h-auto mx-auto bg-[#FFF] p-6 rounded-2xl border border-[#6E51E01A] shadow-[0_0_20px_0_rgba(94,95,224,0.1)]">
            <div className="flex flex-col mt-8">
              <div className="flex items-center gap-4">
                <Link href="/signIn" className="mb-4">
                  <GoArrowLeft size={22} className="-mt-2 text-[#64748B]" />
                </Link>
                <h3 className="font-bold text-3xl mb-6 text-[#2D2D2D]">Enter OTP Code</h3>
              </div>
              <p className="text-gray-500 text-[16px]">
                Please enter the 6-digit verification code sent to your email.
              </p>
              <p className="my-3 text-[#2D2D2D] text-[16px]">OTP</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-center gap-5">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className={`h-12 md:h-16 w-12 md:w-16 rounded-md border border-gray-300 text-center text-xl focus:border-primaryColor focus:outline-none focus:ring-0.5 focus:primaryColor ${activeInput === index
                      ? "border-primaryColor ring-0.5 ring-primaryColor"
                      : ""
                      }`}
                    {...register(`otp.${index}`, {
                      required: true,
                      pattern: /^[0-9]$/,
                    })}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    autoComplete="off"
                  />
                ))}
              </div>

              <PrimaryButton>Submit</PrimaryButton>
            </form>

            {/* <div className="text-center mb-3 mt-3 text-[16px] text-gray-600">
          Remember your password? Sign in{" "}
          <Link href="/signIn" className="text-primaryColor text-[16px] font-semibold hover:underline">
            Sign in
          </Link>
        </div> */}

            {/* Resend OTP Section */}
            <div className="text-center mt-4">
              {timeLeft > 0 ? (
                <p className="text-sm text-primary">
                  Resend code {" "}
                  <span className="font-medium text-primary">
                    ({formatTime(timeLeft)})
                  </span>
                </p>
              ) : (
                <button
                  onClick={handleResendOTP}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Resend code
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
