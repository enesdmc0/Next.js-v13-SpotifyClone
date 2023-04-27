'use client';
import {useState, useEffect} from "react";
import {usePathname} from "next/navigation"
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import HeaderNoUser from "../headerNoUser";
import {useAuth} from "@/hooks/useAuth";

const Header = () => {
    const pathname = usePathname();
    const [sticky, setSticky] = useState(false)
    const auth = useAuth()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    })
    return  (
        <header className={` ${sticky ? "bg-headerBg" : "bg-transparent"} px-10 z-20 fixed top-0 right-0 w-middle h-16 flex items-center justify-between`}>
            <HeaderLeft pathname={pathname}/>
            {auth ? <HeaderRight/> : <HeaderNoUser/>}
        </header>
    )
};

export default Header;
