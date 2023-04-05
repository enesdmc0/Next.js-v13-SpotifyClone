'use client';
import {useSelector, useDispatch} from 'react-redux';
import Image from 'next/image';
import {AiOutlineLeft, AiOutlineRight, AiFillCaretDown} from 'react-icons/all'
import {openDropMenu} from '@/redux/globalStore';
import HeaderDrop from '@/components/(header)/headerDrop';

const Header = () => {
    const dispatch = useDispatch();
    const {headerDropOpen} = useSelector(state => state.global);


    const handleClick = () => {
        dispatch(openDropMenu(!headerDropOpen));
    };

    return (
        <header
            className={`px-10 z-20 fixed top-0 right-0 w-middle h-16 flex items-center justify-between`}>
            <div className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-headerCircle items-center justify-center flex"><AiOutlineLeft
                    className="text-gray-300" size={20}/></div>
                <div className="w-8 h-8 rounded-full bg-headerCircle items-center justify-center flex"><AiOutlineRight
                    className="text-gray-300" size={20}/></div>
            </div>
            <div onClick={handleClick}
                 className="pr-1 cursor-pointer text-white bg-headerButton rounded-full w-32 h-8 flex items-center justify-between">
                <div className="w-8 h-8 relative">
                    <Image className="rounded-full" fill
                           src="https://pbs.twimg.com/profile_images/1522265345779716096/x8ZnmfL-_400x400.jpg"
                           alt="enesdmc"/>
                </div>
                <span className="font-bold text-sm">Enesdmc</span>
                <AiFillCaretDown/>
            </div>
            {headerDropOpen && <HeaderDrop/>}
        </header>
    );
};

export default Header;
