// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Bell, LogOut } from "lucide-react";
// import Image from "next/image";
// import Container from "@/lib/Container";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { IoIosMenu } from "react-icons/io";

// import { Separator } from "@/components/ui/separator";

// type UserRole = "Customer" | "Electrician";

// const DashboardNavbar = () => {
//     const pathName = usePathname();

//     const role: UserRole = "Electrician";

//     const menuByRole: Record<
//         UserRole,
//         { name: string; path: string }[]
//     > = {
//         Electrician: [
//             { name: "Set Pricing", path: "/electrician/set-pricing" },
//             { name: "View Quotes", path: "/electrician/view-quotes" },
//         ],
//         Customer: [
//             { name: "Set Quote", path: "/customer/set-quote" },
//             { name: "View Quotes", path: "/customer/view-quotes" },
//         ],
//     };

//     const menuItems = menuByRole[role] ?? [];

//     return (
//         <div className="sticky top-0 left-0 w-full z-50 pt-6 px-3 lg:px-0">
//             <Container className="max-w-[1200px] mx-auto">
//                 <div className="py-3 px-6 backdrop-blur-sm flex items-center justify-between relative">

//                     {/* Logo */}
//                     <Link href="/">
//                         <div className="flex items-center gap-2 sm:gap-3">
//                             <Image
//                                 src="/nvabarImg/navbarImg.svg"
//                                 width={44}
//                                 height={44}
//                                 alt="WireQuote Logo"
//                                 className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
//                             />
//                             <span className="text-black font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
//                                 WireQuote
//                             </span>
//                         </div>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
//                         {menuItems.map((item) => {
//                             const isActive =
//                                 item.path === "/"
//                                     ? pathName === "/" || pathName === ""
//                                     : pathName === item.path;

//                             return (
//                                 <Link
//                                     key={item.path}
//                                     href={item.path}
//                                     className={`transition-all duration-200 ${isActive
//                                         ? "text-primary font-semibold"
//                                         : "text-black hover:text-primary"
//                                         }`}
//                                 >
//                                     {item.name}
//                                 </Link>
//                             );
//                         })}
//                     </nav>

//                     {/* Right Section */}
//                     <div className="flex items-center gap-3">
//                         {/* Notification */}
//                         <button className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors text-gray-600">
//                             <Bell size={18} strokeWidth={1.5} />
//                             <span className="absolute -top-0.5 right-0.5 w-5 h-5 bg-red-700 text-white text-[11px] font-semibold rounded-full flex items-center justify-center border-2 border-white">
//                                 1
//                             </span>
//                         </button>

//                         {/* Logout - Desktop */}
//                         <button className="hidden md:flex items-center gap-2 text-[16px] font-medium text-[#0A0A0A] hover:text-primary transition-all">
//                             <LogOut size={16} strokeWidth={1.5} />
//                             <span>Logout</span>
//                         </button>
//                     </div>

//                     {/* Mobile Menu */}
//                     <div className="md:hidden">
//                         <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                                 <Button variant="outline">
//                                     <IoIosMenu size={20} />
//                                 </Button>
//                             </DropdownMenuTrigger>

//                             <DropdownMenuContent className="-ml-16">
//                                 {menuItems.map((item) => (
//                                     <DropdownMenuItem key={item.path} asChild>
//                                         <Link href={item.path}>{item.name}</Link>
//                                     </DropdownMenuItem>
//                                 ))}

//                                 <DropdownMenuItem asChild>
//                                     <Link href="/" className="flex items-center gap-2">
//                                         <LogOut size={16} strokeWidth={1.5} />
//                                         Log out
//                                     </Link>
//                                 </DropdownMenuItem>
//                             </DropdownMenuContent>
//                         </DropdownMenu>
//                     </div>

//                 </div>
//             </Container>
//             <Separator className="bg-[#E5E5E5]" />
//         </div>
//     );
// };

// export default DashboardNavbar;



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
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoIosMenu } from "react-icons/io";
import { Separator } from "@/components/ui/separator";

const DashboardNavbar = () => {
    const pathName = usePathname();

    // Extract base path
    // "/electrician/view-quotes" -> "electrician"
    const basePath = pathName.split("/")[1];

    const menuByPath: Record<string, { name: string; path: string }[]> = {
        electrician: [
            { name: "Set Pricing", path: "/electrician/set-pricing" },
            { name: "View Quotes", path: "/electrician/view-quotes" },
        ],
        customer: [
            { name: "Set Quote", path: "/customer/set-quote" },
            { name: "View Quotes", path: "/customer/view-quotes" },
        ],
    };

    const menuItems = menuByPath[basePath] ?? [];

    return (
        <div className="sticky top-0 left-0 w-full z-50 pt-6 px-3 lg:px-0">
            <Container className="max-w-[1200px] mx-auto">
                <div className="py-3 px-6 backdrop-blur-sm flex items-center justify-between relative">

                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Image
                                src="/nvabarImg/navbarImg.svg"
                                width={44}
                                height={44}
                                alt="WireQuote Logo"
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
                            />
                            <span className="text-black font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                                WireQuote
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                        {menuItems.map((item) => {
                            const isActive = pathName === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`transition-all duration-200 ${isActive
                                            ? "text-primary font-semibold"
                                            : "text-black hover:text-primary"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">

                        {/* Notification */}
                        <button className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors text-gray-600">
                            <Bell size={18} strokeWidth={1.5} />
                            <span className="absolute -top-0.5 right-0.5 w-5 h-5 bg-red-700 text-white text-[11px] font-semibold rounded-full flex items-center justify-center border-2 border-white">
                                1
                            </span>
                        </button>

                        {/* Logout - Desktop */}
                        <button className="hidden md:flex items-center gap-2 text-[16px] font-medium text-[#0A0A0A] hover:text-primary transition-all">
                            <LogOut size={16} strokeWidth={1.5} />
                            <span>Logout</span>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <IoIosMenu size={20} />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="-ml-16">
                                {menuItems.map((item) => (
                                    <DropdownMenuItem key={item.path} asChild>
                                        <Link
                                            href={item.path}
                                            className={
                                                pathName === item.path
                                                    ? "text-primary font-semibold"
                                                    : ""
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}

                                <DropdownMenuItem asChild>
                                    <Link href="/" className="flex items-center gap-2">
                                        <LogOut size={16} strokeWidth={1.5} />
                                        Log out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>
            </Container>

            <Separator className="bg-[#E5E5E5]" />
        </div>
    );
};

export default DashboardNavbar;
