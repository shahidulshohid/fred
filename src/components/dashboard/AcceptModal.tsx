"use client";

import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { Separator } from "../ui/separator";

interface AcceptModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const AcceptModal: FC<AcceptModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden">
                {/* Header */}
                <div className="p-4">
                    <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-bold text-[#252525]">Quote Details</h2>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="px-3 py-1 bg-[#FF25253D] text-[#FF2525] text-sm rounded-lg">
                                EMERGENCY
                            </span>
                            <span className="px-3 py-1 text-sm rounded-lg text-white bg-[#FD7C1F]">
                                Pending
                            </span>
                            <span className="text-sm text-[#5C5C5C]">2 hours ago</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 space-y-5">
                    {/* From */}
                    <p className="text-sm text-[#5C5C5C]">
                        from <span>electrician@wirequote.com</span>
                    </p>

                    {/* Job Description */}
                    <div>
                        <h3 className="text-sm text-[#5C5C5C] mb-2">Job Description</h3>
                        <p className="text-sm text-[#252525] font-semibold">
                            Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there's existing lighting I want to replace…
                        </p>
                    </div>
                    {/* AI Time Estimate */}
                    <div className="flex items-center justify-between text-[#5C5C5C] text-sm">
                        <div className="flex items-center justify-between gap-2">
                            <Clock className="h-5 w-5 text-[#5C5C5C]" />
                            <span>Ai Time Estimate</span>
                        </div>
                        <span className="text-[18px] text-[#252525] font-medium">3.5 hours</span>
                    </div>

                    {/* Pricing Breakdown */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-base">
                            <span className="text-[#5C5C5C] text-sm">Call-out fee</span>
                            <span className="text-[18px] text-[#252525] font-medium">£65</span>
                        </div>
                        <div className="flex justify-between items-center text-base">
                            <span className="text-[#5C5C5C] text-sm">Labour (3h x £100)</span>
                            <span className="text-[18px] text-[#252525] font-medium">£300</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <Separator className="text-[#CFCFCF]" />

                    {/* Total */}
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-[#252525]">Total Quote</span>
                        <span className="text-2xl font-semibold text-primary">£300</span>
                    </div>

                    {children}
                </div>

                {/* Footer Actions */}
                <div className="px-6 py-6 flex justify-end gap-3">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="w-1/2 px-8 py-6 text-[18px] font-medium border border-[#CFCFCF] hover:bg-[#08BA23] hover:text-white cursor-pointer"
                    >
                        Accept
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="w-1/2 px-8 py-6 text-[18px] font-medium border border-[#CFCFCF] hover:bg-[#08BA23] hover:text-white cursor-pointer"
                    >
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AcceptModal;