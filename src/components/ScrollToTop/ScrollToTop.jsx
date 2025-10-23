import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) setIsScrollToTopVisible(true);
            else setIsScrollToTopVisible(false);
        }

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
        {
            isScrollToTopVisible && 
            <button 
                className="bg-blue-600 text-white fixed bottom-4 right-2 w-8 h-8 rounded-full shadow-lg active:scale-95 cursor-pointer"
                onClick={scrollToTop}
            >
                ↑
            </button>
        }
        </>
    )
}

export default ScrollToTop;