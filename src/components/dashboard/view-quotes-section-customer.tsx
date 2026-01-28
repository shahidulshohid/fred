"use client";

import { FC } from "react";
import { Clock, AlertCircle, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/lib/Container";
import PageHeader from "./PageHeader";
import { Separator } from "../ui/separator";

const QuotesSectionCustomer: FC = () => {
    const handleRequestAnotherQuote = () => {
        // Handle request another quote
        console.log("Request another quote");
    };

    return (
        <Container className="max-w-[1200px] mx-auto px-6 my-6 space-y-6">
            <PageHeader
                title="Your Quote is Ready!"
                subtitle="Here's the estimated cost for your electrical job."
                className="mb-6"
            />
            {/* Quote Summary Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="px-6 py-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold text-[#000000]">Quote Summary</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-[16px] font-semibold uppercase text-[#FF2525] bg-[#FF25253D] px-3 py-1.5 rounded-lg">
                                EMERGENCY
                            </span>
                            <span className="text-[16px] font-semibold uppercase text-white bg-[#FD7C1F] px-3 py-1.5 rounded-lg">
                                Awaiting Response
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-5 space-y-5">
                    {/* Job Description */}
                    <div>
                        <h3 className="text-sm text-[#5C5C5C] mb-2">Job Description</h3>
                        <p className="text-sm text-[#252525] font-semibold leading-relaxed">
                            Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there's existing lighting I want to replace...
                        </p>
                    </div>

                    {/* AI Time Estimate */}
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="h-4 w-4 text-[#5C5C5C]" />
                            <span className="text-[#5C5C5C] text-[16px] font-semibold">Ai Time Estimate</span>
                        </div>
                        <span className="text-lg font-medium text-[#252525]">3.5 hours</span>
                    </div>

                    <Separator className="text-[#E8E8E8]"/>

                    {/* Cost Breakdown */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-[16px] text-[#5C5C5C]">Call-out fee</span>
                            <span className="text-[18px] font-medium text-[#252525]">£65</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[16px] text-[#5C5C5C]">Labour (3h x £100)</span>
                            <span className="text-[18px] font-medium text-[#252525]">£300</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-primary" />
                                <span className="text-[16px] text-[#7E2A0C]">
                                    Emergency uplift (50%)
                                </span>
                            </div>
                            <span className="text-[18px] font-medium text-[#7E2A0C]">£120</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <Separator className="text-[#E8E8E8]"/>

                    {/* Total */}
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-[#252525]">Total Quote</span>
                        <span className="text-2xl font-semibold text-[#252525]">£420</span>
                    </div>

                    {/* Action Button */}
                    <Button
                        onClick={handleRequestAnotherQuote}
                        className="w-full bg-primary hover:bg-[primary] text-white font-semibold py-6 text-base rounded-lg transition-colors cursor-pointer"
                    >
                        Request Another Quote
                    </Button>
                </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-[#F9FAFB] rounded-xl border border-[#CFCFCF] p-6">
                <div className="flex items-center gap-2 mb-5">
                    <Mail className="h-5 w-5 text-[#0A0A0A]" />
                    <h3 className="text-[16px] font-bold text-[#252525]">What Happens Next?</h3>
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00A63E] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[#5C5C5C] leading-relaxed">
                            Your quote request has been sent to a qualified electrician
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00A63E] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[#5C5C5C] leading-relaxed">
                            The electrician will review your job description and the quote
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00A63E] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[#5C5C5C] leading-relaxed">
                            You'll receive a notification once they accept or decline the job
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00A63E] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[#5C5C5C] leading-relaxed">
                            If accepted, the electrician will contact you to schedule the work
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default QuotesSectionCustomer;