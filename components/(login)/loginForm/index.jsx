import React from 'react';
import {BiHide, AiOutlineEye} from 'react-icons/all';


const LoginForm = () => {

    return (
        <form className="flex flex-col gap-3 border-b pb-6 border-b-font2">
            <div className="flex flex-col gap-1">
                <label className="font-medium text-sm">Email address or username</label>
                <input type="text"
                       className="border focus:outline focus:outline-black transition-all duration-150 placeholder:text-gray-400  border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                       placeholder="Email address or username"/>
            </div>
            <div className="flex flex-col gap-1">
                <label>Password</label>
                <input
                    className="border focus:outline transition-all focus:outline-black duration-150 placeholder:text-gray-400 border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                    type="password" placeholder="Password"/>
            </div>
            <span className="underline hover:text-yesil text-sm transition-all duration-150 font-medium cursor-pointer">Forget your password?</span>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <input className="focus:outline focus:outline-black " type="checkbox"/>
                    <span className="text-xs">Remember me</span>
                </div>
                <button className="bg-yesil rounded-full px-8 py-3 hover:scale-105 text-medium">LOG IN</button>
            </div>
        </form>
    );
};

export default LoginForm;
