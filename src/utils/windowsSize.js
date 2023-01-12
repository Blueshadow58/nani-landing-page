import { useEffect, useRef } from "react";

export const WindowSize = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleResize = () => {
            windowSize.current = [window.innerWidth, window.innerHeight];
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize.current;
}
