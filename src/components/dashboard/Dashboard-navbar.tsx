"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LogOut } from "lucide-react";
import Image from "next/image";
import Container from "@/lib/Container";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { IoIosMenu } from "react-icons/io";

const DashboardNavbar = () => {
    const pathName = usePathname();

    return (
        <div className="sticky top-0 left-0 w-full z-50 pt-6 px-3 lg:px-0">
            <Container className='max-w-[1200px] mx-auto'>
                <div className="py-3 px-6 backdrop-blur-sm flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center gap-2 sm:gap-3">

                            {/* Logo Image */}
                            <Image
                                src="/nvabarImg/navbarImg.svg"
                                width={44}
                                height={44}
                                alt="WireQuote Logo"
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
                            />

                            {/* Logo Text */}
                            <span className="flex text-black font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                                WireQuote
                            </span>

                        </div>
                    </Link>


                    {/* Center Navigation Links */}
                    <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                        {[
                            { name: "Set Quote", path: "/set-pricing" },
                            { name: "View Quotes", path: "/view-quotes" },
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
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Notification Bell */}
                        <button
                            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
                            aria-label="Notifications"
                        >
                            <Bell size={18} strokeWidth={1.5} />
                            <span className="absolute -top-0.5 right-0.5 w-[20px] h-[20px] bg-red-700 text-white text-[11px] font-semibold rounded-full flex items-center justify-center border-2 border-white">
                                1
                            </span>
                        </button>

                        {/* Logout Button - Desktop */}
                        <button className="hidden md:flex items-center gap-2 text-[16px] font-medium text-[#0A0A0A] transition-all cursor-pointer hover:text-primary">
                            <LogOut size={16} strokeWidth={1.5} />
                            <span className="mb-1">Logout</span>
                        </button>
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
                                    <Link href="/set-pricing">Set Pricing</Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/view-quotes">View Quotes</Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/" className="hover:text-primary">
                                        <LogOut size={16} strokeWidth={1.5} className="hover:text-primary" />
                                        Log out
                                    </Link>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashboardNavbar;