
import Container from "@/lib/Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-16 px-6 bg-[#0F172A]">
            <Container className="max-w-7xl mx-auto">
                <div className="mb-4">
                    {/* Logo */}
                    <Link href="/">
                        {/* Logo */}
                        <div className="">
                            <h3 className="font-bold text-3xl text-white -mb-2">your</h3>
                            <span className="text-[#DD3C3C] font-bold text-xl -mr-4">teach</span>
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <p className="text-[#9BA4B0] text-sm font-medium">
                            Figma ipsum component variant main layer. Outline blur link pixel create. Flatten duplicate.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-[16px] mb-4">
                            Plafform
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors text-[16px] front-semibold text-[#9BA4B0]"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors text-[16px] front-semibold text-[#9BA4B0]"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors text-[16px] front-semibold text-[#9BA4B0]"
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white font-semibold text-[16px] mb-4">
                            Contact us
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-[#9BA4B0] text-[16px]">+971123 456 789</li>
                            <li className="text-[#9BA4B0] text-[16px]">support@p181ux.com</li>
                        </ul>
                    </div>

                    {/* Stay Updated */}
                    <div>
                        <h3 className="text-white font-semibold text-[16px] mb-4">Contact</h3>
                        <p className="text-[#9BA4B0] text-[16px] mb-4">
                            Contact
                        </p>
                        <div className="flex items-center gap-3">
                            <Image src="/footer/github.svg" alt="" width={20} height={20} />
                            <Image src="/footer/twitter.svg" alt="" width={20} height={20} />
                            <Image src="/footer/linkedin.svg" alt="" width={20} height={20} />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-4 text-center">
                    <p className="text-[#9BA4B0] text-[16px]">
                        © 2025 SalesMind.com. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer >
    );
}
