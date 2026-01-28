// "use client";

// import { FC, useState } from "react";
// import { AlertCircle, Info } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Container from "@/lib/Container";
// import { Textarea } from "@/components/ui/textarea";
// import { Switch } from "@/components/ui/switch";
// import PageHeader from "./PageHeader";

// const SetQuoteSection: FC = () => {
//     const [jobDescription, setJobDescription] = useState("");
//     const [isEmergency, setIsEmergency] = useState(false);

//     const handleSubmit = () => {
//         // Handle form submission
//         console.log({
//             jobDescription,
//             isEmergency,
//         });
//     };

//     return (
//         <Container className="max-w-[1200px] mx-auto p-6">

//             <PageHeader
//                 title="Request Your Electrical Quote"
//                 subtitle="Describe your electrical work and get an instant, accurate quote from our qualified electrician"
//                 className="mb-6"
//             />

//             <h1 className="text-3xl font-semibold text-[#000000] mb-6">Job Details</h1>

//             <div className="bg-white rounded-lg border border-[#E5E5E5] p-6 space-y-6">
//                 {/* Job Description Input */}
//                 <div className="space-y-2">
//                     <label htmlFor="job-description" className="text-[16px] text-[#202020] block">
//                         What electrical work do you need?
//                     </label>
//                     <Textarea
//                         id="job-description"
//                         placeholder="Example: Install 3 new power sockets in the kitchen and replace 2 light fixtures in the living room. One socket needs to be weatherproof for outdoor use."
//                         value={jobDescription}
//                         onChange={(e) => setJobDescription(e.target.value)}
//                         className="min-h-[120px] resize-none text-sm placeholder:text-[#9E9E9E] border-[#CFCFCF] focus:border-orange-500 focus:ring-orange-500 bg-[#FAFAFA]"
//                     />
//                     <p className="text-sm text-[#5C5C5C] mt-2">
//                         The more details you provide, the more accurate your quote will be.
//                     </p>
//                 </div>

//                 {/* Emergency Toggle */}
//                 <div className="bg-[#FFF7ED] border border-[#FFD6A7] rounded-lg p-4">
//                     <div className="flex items-start justify-between gap-4">
//                         <div className="flex items-start gap-3 flex-1">
//                             <AlertCircle className="h-5 w-5 text-[#F54900] flex-shrink-0 mt-0.5" />
//                             <div className="space-y-1">
//                                 <h3 className="text-sm font-semibold text-[#7E2A0C]">
//                                     This is an emergency
//                                 </h3>
//                                 <p className="text-sm text-[#9F2D00] leading-relaxed">
//                                     Emergency work includes power outages, electrical faults, or safety hazards. An emergency fee of £50 will be added.
//                                 </p>
//                             </div>
//                         </div>
//                         <Switch
//                             checked={isEmergency}
//                             onCheckedChange={setIsEmergency}
//                             className="data-[state=checked]:bg-primary cursor-pointer"
//                         />
//                     </div>
//                 </div>

//                 {/* How it Works Info */}
//                 <div className="bg-[#FFFFFF] border border-[#CFCFCF] rounded-lg p-4">
//                     <div className="flex items-start gap-3">
//                         <Info className="h-5 w-5 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
//                         <div className="space-y-1">
//                             <h3 className="text-sm font-semibold text-[#252525]">
//                                 How it works:
//                             </h3>
//                             <p className="text-sm text-[#5C5C5C] leading-relaxed">
//                                 Our AI analyzes your job description to estimate the time required. The electrician's rates are then applied to calculate your quote. This is Estimated Quote. The final price is subject to electrician approval.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                     onClick={handleSubmit}
//                     className="w-full bg-primary text-white font-semibold py-6 text-base rounded-lg transition-colors cursor-pointer"
//                 >
//                     Get Instant Quote
//                 </Button>

//                 {/* Footer Text */}
//                 <p className="text-sm text-[#717182] text-center pt-2">
//                     Your quote will be sent to a qualified electrician for approval. You'll be notified once they respond.
//                 </p>
//             </div>
//         </Container>
//     );
// };

// export default SetQuoteSection;



"use client";

import { FC, useState } from "react";
import { AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/lib/Container";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import PageHeader from "./PageHeader";

const SetQuoteSection: FC = () => {
    const [jobDescription, setJobDescription] = useState("");
    const [isEmergency, setIsEmergency] = useState(false);

    const handleSubmit = () => {
        console.log({
            jobDescription,
            isEmergency,
        });
    };

    return (
        <Container className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6">

            <PageHeader
                title="Request Your Electrical Quote"
                subtitle="Describe your electrical work and get an instant, accurate quote from our qualified electrician"
                className="mb-6"
            />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#000000] mb-6">
                Job Details
            </h1>

            <div className="bg-white rounded-lg border border-[#E5E5E5] p-4 sm:p-6 md:p-8 space-y-6">

                {/* Job Description Input */}
                <div className="space-y-2">
                    <label
                        htmlFor="job-description"
                        className="text-sm sm:text-base md:text-[16px] text-[#202020] block"
                    >
                        What electrical work do you need?
                    </label>
                    <Textarea
                        id="job-description"
                        placeholder="Example: Install 3 new power sockets in the kitchen and replace 2 light fixtures in the living room. One socket needs to be weatherproof for outdoor use."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-none text-sm sm:text-base placeholder:text-[#9E9E9E] border-[#CFCFCF] focus:border-orange-500 focus:ring-orange-500 bg-[#FAFAFA]"
                    />
                    <p className="text-xs sm:text-sm md:text-sm text-[#5C5C5C] mt-2">
                        The more details you provide, the more accurate your quote will be.
                    </p>
                </div>

                {/* Emergency Toggle */}
                <div className="bg-[#FFF7ED] border border-[#FFD6A7] rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                            <AlertCircle className="h-5 w-5 text-[#F54900] flex-shrink-0 mt-0.5" />
                            <div className="space-y-1">
                                <h3 className="text-sm sm:text-base font-semibold text-[#7E2A0C]">
                                    This is an emergency
                                </h3>
                                <p className="text-xs sm:text-sm text-[#9F2D00] leading-relaxed">
                                    Emergency work includes power outages, electrical faults, or safety hazards. An emergency fee of £50 will be added.
                                </p>
                            </div>
                        </div>
                        <Switch
                            checked={isEmergency}
                            onCheckedChange={setIsEmergency}
                            className="data-[state=checked]:bg-primary cursor-pointer"
                        />
                    </div>
                </div>

                {/* How it Works Info */}
                <div className="bg-[#FFFFFF] border border-[#CFCFCF] rounded-lg p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <Info className="h-5 w-5 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <h3 className="text-sm sm:text-base font-semibold text-[#252525]">
                                How it works:
                            </h3>
                            <p className="text-xs sm:text-sm md:text-sm text-[#5C5C5C] leading-relaxed">
                                Our AI analyzes your job description to estimate the time required. The electrician's rates are then applied to calculate your quote. This is Estimated Quote. The final price is subject to electrician approval.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white font-semibold py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-base rounded-lg transition-colors cursor-pointer"
                >
                    Get Instant Quote
                </Button>

                {/* Footer Text */}
                <p className="text-xs sm:text-sm md:text-sm text-[#717182] text-center pt-2">
                    Your quote will be sent to a qualified electrician for approval. You'll be notified once they respond.
                </p>

            </div>
        </Container>
    );
};

export default SetQuoteSection;
