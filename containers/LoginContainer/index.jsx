import React from 'react';
import LoginHeader from '@/components/(login)/loginHeader';
import LoginBottom from '@/components/(login)/loginBottom';

const LoginContainer = () => {
    return (
        <div className="bg-white flex flex-col items-center w-screen gap-10">
            <LoginHeader/>
            <LoginBottom/>
        </div>
    );
};

export default LoginContainer;
