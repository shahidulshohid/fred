"use client"
import { useEffect, useState } from "react";

const useScrollY = (targetY: number) => {
    const [reached, setReached] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setReached(window.scrollY >= targetY);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [targetY]);

    return reached;
};

export default useScrollY;
