"use client";
import { usePathname } from "next/navigation";

function PageAnimation({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();

    return (
        <main key={pathname} className="animate-page-entry">
            {children}
        </main>
    )   
}

export default PageAnimation;