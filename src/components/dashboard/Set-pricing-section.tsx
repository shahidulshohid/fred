'use client';

import Container from '@/lib/Container';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PrimaryButton from '../shared/primaryButton/PrimaryButton';
import { useRouter } from 'next/navigation';

// Zod validation schema
const pricingSchema = z.object({
  hourlyRate: z
    .string()
    .min(1, 'Hourly rate is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: 'Must be a positive number',
    }),
  callOutFee: z
    .string()
    .min(1, 'Call-out fee is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: 'Must be a valid number',
    }),
  minimumCharge: z
    .string()
    .min(1, 'Minimum charge is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: 'Must be a valid number',
    }),
  emergencyUplift: z
    .string()
    .min(1, 'Emergency uplift is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: 'Must be a valid number',
    }),
});

type PricingFormData = z.infer<typeof pricingSchema>;

export default function SetPricingSection() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PricingFormData>({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      hourlyRate: '150',
      callOutFee: '150',
      minimumCharge: '150',
      emergencyUplift: '150',
    },
  });

  const onSubmit = (data: PricingFormData) => {
    console.log('Form Data:', data);
    router.push("/view-quotes")
  };

  return (
    <div className="py-6">
      <Container className='max-w-[1200px] mx-auto'>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#252525] mb-1">
            Welcome back, Rakib
          </h1>
          <p className="text-[#5C5C5C] text-[16px]">
            Manage your pricing and quote requests
          </p>
        </div>

        {/* Form Card */}
        <div className="p-6">
          {/* Title with Icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#000000]">
              Set Your Work Rate
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border border-[#E5E5E5] rounded-xl p-6">
            {/* Hourly Rate */}
            <div>
              <label
                htmlFor="hourlyRate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Hourly Rate
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  £
                </span>
                <input
                  id="hourlyRate"
                  type="text"
                  {...register('hourlyRate')}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>
              {errors.hourlyRate && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.hourlyRate.message}
                </p>
              )}
            </div>

            {/* Call-Out Fee */}
            <div>
              <label
                htmlFor="callOutFee"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Call-Out Fee (£)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  £
                </span>
                <input
                  id="callOutFee"
                  type="text"
                  {...register('callOutFee')}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>
              {errors.callOutFee && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.callOutFee.message}
                </p>
              )}
            </div>

            {/* Minimum Charge */}
            <div>
              <label
                htmlFor="minimumCharge"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Minimum Charge (£)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  £
                </span>
                <input
                  id="minimumCharge"
                  type="text"
                  {...register('minimumCharge')}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>
              {errors.minimumCharge && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.minimumCharge.message}
                </p>
              )}
            </div>

            {/* Emergency Uplift */}
            <div>
              <label
                htmlFor="emergencyUplift"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Emergency Uplift (£)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  £
                </span>
                <input
                  id="emergencyUplift"
                  type="text"
                  {...register('emergencyUplift')}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>
              {errors.emergencyUplift && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.emergencyUplift.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <PrimaryButton type='submit' text='Save Pricing' />
          </form>
        </div>
      </Container>
    </div>
  );
}