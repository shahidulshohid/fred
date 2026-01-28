
"use client";
import Container from "@/lib/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    const pathName = usePathname()

    return (
        <div className="sticky top-0 left-0 w-full z-50 pt-6 px-3 lg:px-0 pb-10">

            <Container className="bg-[#FFFFFF] border border-[#F3F3F3CC] rounded-2xl py-2 px-3 backdrop-blur-[2px] flex items-center justify-between  max-w-[1200px] mx-auto">
                {/* Logo */}
                <Link href="/">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image src="/nvabarImg/navbarImg.svg" width={44} height={44} alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
                        <span className="text-[#000000] font-bold text-xl -mr-4">WireQuote</span>
                    </div>
                </Link>
                <div className="hidden md:flex items-center md:gap-6 lg:gap-12 text-[16px] font-medium">

                    {[
                        { name: "Home", path: "/" },
                        { name: "How It Works", path: "/how-it-works" },
                        { name: "Why Choose Us", path: "/why-choose-us" },
                        { name: "FAQ", path: "/faq" },
                    ].map((item) => {
                        const isActive =
                            item.path === "/"
                                ? pathName === "/" || pathName === ""
                                : pathName === item.path;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`
                                     leading-none transition-all duration-200
                                     ${isActive
                                        ? "text-primary font-semibold"
                                        : "text-black hover:text-primary"
                                    }
                                   `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>


                {/* Right Section for large device */}
                <div className="hidden md:flex items-center gap-2 lg:gap-3">
                    <Link href="/signUp" className="group">
                        <span className="px-4 lg:px-5 py-3 rounded-lg bg-primary text-white hidden md:flex">
                            Get Started
                        </span>
                    </Link>
                </div>
                {/* mobile device  */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="cursor-pointer">
                                <IoIosMenu size={20} />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="md:hidden -ml-16">

                            <DropdownMenuItem asChild>
                                <Link href="/">Home</Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link href="/how-it-works">How It Works</Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link href="/why-choose-us">Why Choose Us</Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link href="/faq">FAQ</Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild>
                                <Link href="/signUp" className="text-red-500">
                                    Get Started
                                </Link>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
