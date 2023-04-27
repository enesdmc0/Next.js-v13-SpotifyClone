import React from 'react';
import RegisterForm from '@/components/register/RegisterForm';
import {AiFillApple, BsFacebook, FcGoogle} from 'react-icons/all';
import Link from 'next/link';

const RegisterBottom = () => {
    const data = [
        {id: 1, text: 'CONTINUE WITH FACEBOOK', icon: <BsFacebook size={20}/>, color: '#405a93'},
        {id: 2, text: 'CONTINUE WITH GOOGLE', icon: <FcGoogle size={20}/>, color: '#ffffff'}
    ];
    return (
        <div className="w-450 flex flex-col gap-3 pb-6">
            <h1 className="text-2xl font-black">Sign up for free to start listening.</h1>
            <div className="flex flex-col gap-3">
                {data.map(item => (
                    <Link
                        className="flex hover:scale-105 rounded-full py-3 gap-3 tracking-wider border border-gray-600 hover:border-hbg font-medium items-center justify-center text-white"
                        style={{backgroundColor: `${item.color}`}} href="">{item.icon} <span
                        className={`${item.id === 2 && 'text-font2'} text-font`}>{item.text}</span></Link>
                ))}
            </div>
            <div className="flex items-center justify-between gap-3">
                <div className="flex-1 border-b border-b-font2"></div>
                <div>OR</div>
                <div className="flex-1  border-b border-b-font2"></div>
            </div>
            <h2>Sign up with your email address</h2>
            <RegisterForm/>
        </div>
    );
};

export default RegisterBottom;
