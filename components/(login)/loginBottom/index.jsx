import React from 'react';
import Link from 'next/link';
import {AiFillApple, BsFacebook, FcGoogle} from 'react-icons/all';
import LoginForm from '@/components/(login)/loginForm';

const LoginBottom = () => {
    const data = [
        {id: 1, text: 'CONTINUE WITH FACEBOOK', icon: <BsFacebook size={20}/>, color: '#405a93'},
        {id: 2, text: 'CONTINUE WITH APPLE', icon: <AiFillApple size={20}/>, color: '#191919'},
        {id: 3, text: 'CONTINUE WITH GOOGLE', icon: <FcGoogle size={20}/>, color: '#ffffff'}
    ];
    return (
        <div className="w-450 flex flex-col gap-3 pb-6">
            <h3 className="text-center text-sm font-bold">To continue, log in to Spotify.</h3>
            <div className="flex flex-col gap-3">
                {data.map(item => (
                    <Link
                        className="flex rounded-full py-3 gap-3 tracking-wider border border-gray-600 hover:border-hbg font-medium items-center justify-center text-white"
                        style={{backgroundColor: `${item.color}`}} href="">{item.icon} <span
                        className={`${item.id === 3 && 'text-font2'} text-font`}>{item.text}</span></Link>
                ))}
            </div>
            <div className="flex items-center justify-between gap-3">
                <div className="flex-1 border-b border-b-font2"></div>
                <div>OR</div>
                <div className="flex-1  border-b border-b-font2"></div>
            </div>
            <LoginForm/>
            <div className="flex flex-col gap-5">
                <div className="text-center font-medium">Don't have an account?</div>
                <Link
                    className="border text-center border-gray-400 hover:border-black py-3 rounded-full font-medium text-font2"
                    href="/register">SIGN UP FOR SPOTIFY</Link>
            </div>
        </div>
    );
};

export default LoginBottom;
