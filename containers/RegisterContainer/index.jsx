import React from 'react';
import RegisterHeader from '@/components/(register)/RegisterHeader';
import RegisterBottom from '@/components/(register)/RegisterBottom';

const RegisterContainer = () => {
    return (
        <div className="bg-white flex flex-col items-center w-screen gap-5">
            <RegisterHeader/>
            <RegisterBottom/>
        </div>
    );
};

export default RegisterContainer;
