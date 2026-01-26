"use client"

import useScrollY from "@/hooks/useScrollY";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../shared/Navbar/Navbar";

const FloatingNavbar = () => {
    const pathname = usePathname();
    const showHeader = useScrollY(30);

    if (pathname !== "/") {
        return (
            <div className="fixed z-50 top-0 left-0 w-full">
                <Navbar />
            </div>
        );
    }

    return (
        <>
            {showHeader && (
                <motion.div
                    className="fixed z-50 top-0 left-0 w-full"
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Navbar />
                </motion.div>
            )}
        </>
    );
};

export default FloatingNavbar;
