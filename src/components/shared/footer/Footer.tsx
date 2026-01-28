
import Container from "@/lib/Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 sm:py-12 md:py-16 bg-white">
            <Container className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/nvabarImg/navbarImg.svg"
                                    width={44}
                                    height={44}
                                    alt="WireQuote Logo"
                                />
                                <span className="text-[#000000] font-bold text-xl">WireQuote</span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-5 text-center">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/why-choose-us"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Why Choose Us
                        </Link>
                        <Link
                            href="/faq"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            FAQ
                        </Link>
                    </nav>
                </div>
                <p className="mt-5 text-sm text-center md:text-left text-[#5C5C5C]">© 2026 WireQuote. Automated quotes for UK electricians.</p>
            </Container>
        </footer>
    );
}
