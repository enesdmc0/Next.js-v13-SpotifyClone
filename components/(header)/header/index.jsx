'use client';

import {usePathname} from "next/navigation"
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import HeaderNoUser from "../headerNoUser";
import store from "@/redux";
import { useSelector } from "react-redux";

const Header = () => {
    const pathname = usePathname();
    const {user} = useSelector(state => state.global)
    return (
        <header className={`px-10 z-20 fixed top-0 right-0 w-middle h-16 flex items-center justify-between`}>
            <HeaderLeft pathname={pathname}/>
            {user ? <HeaderRight/> : <HeaderNoUser/>}
        </header>
    );
};

export default Header;
