'use client';
import {useState} from 'react';
import Link from 'next/link';

const RegisterForm = () => {
    const [activeGender, setActiveGender] = useState("")
    const [agreement1, setAgreement1] = useState(false);
    const [agreement2, setAgreement2] = useState(false);
    const checkboxes = [
        {name: 'male', text: 'Male', checked: false},
        {name: 'female', text: 'Female', checked: false},
        {name: 'non_binary', text: 'Non-binary', checked: true},
        {name: 'other', text: 'Other', checked: false},
        {name: 'prefer_not_to_say', text: 'Prefer not to say', checked: false}
    ];

    const handleClick = (name) => {
        setActiveGender(name)
    };

    const handleAgreement1 = () => {
        setAgreement1(!agreement1)
    }
    const handleAgreement2 = () => {
        setAgreement2(!agreement2)
    }
    const data = ['month', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    return (
        <form className="flex flex-col gap-8 pb-6">
            {/*input1*/}
            <div className="flex flex-col gap-1">
                <label className="font-medium text-sm">What's your email?</label>
                <input type="text"
                       className="border focus:outline focus:outline-black transition-all duration-150 placeholder:text-gray-400  border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                       placeholder="What's your email?"/>
            </div>
            {/*input2*/}
            <div className="flex flex-col gap-1">
                <label>Confirm your email</label>
                <input
                    className="border focus:outline transition-all focus:outline-black duration-150 placeholder:text-gray-400 border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                    type="password" placeholder="Confirm your email"/>
            </div>
            {/*input3*/}
            <div className="flex flex-col gap-1">
                <label className="font-medium text-sm">Create a password</label>
                <input type="text"
                       className="border focus:outline focus:outline-black transition-all duration-150 placeholder:text-gray-400  border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                       placeholder="Create a password"/>
            </div>
            {/*input4*/}
            <div className="flex flex-col gap-1">
                <label>What should we call you?</label>
                <input
                    className="border focus:outline transition-all focus:outline-black duration-150 placeholder:text-gray-400 border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                    type="password" placeholder="What should we call you?"/>
            </div>
            <h5>What's your date of birth?</h5>
            <div className="flex gap-5">
                {/*Day*/}
                <div className="flex flex-col gap-1 w-20">
                    <label>Day</label>
                    <input
                        className="border focus:outline transition-all focus:outline-black duration-150 placeholder:text-gray-400 border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                        type="password" placeholder="DD" max={2}/>
                </div>
                {/*Month*/}
                <div className="flex flex-col gap-1 flex-1">
                    <label>Month</label>
                    <select
                        className="border focus:outline transition-all focus:outline-black duration-150 placeholder:text-gray-400 border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                        placeholder="Month">
                        {data.map(item => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>
                </div>
                {/*Year*/}
                <div className="flex flex-col gap-1 w-24">
                    <label>Year</label>
                    <input
                        className="border focus:outline transition-all focus:outline-black duration-150 placeholder:text-gray-400 border-gray-300 hover:border-black bg-inputBg p-2 border-black rounded"
                        type="password" placeholder="YYYY" max={4}/>
                </div>
            </div>
            <h5>What's your gender?</h5>
            <div className="flex items-center justify-between flex-wrap gap-2">
                {checkboxes.map(item => (
                    <div key={item.name} onClick={() => handleClick(item.name)} className="flex group cursor-pointer items-center gap-3">
                        <div className={` ${activeGender === item.name && "border-4 border-yesil"} group-hover:border-yesil w-4 h-4 flex items-center justify-center p-1 rounded-full border`}/>
                        <span className="text-sm">{item.text}</span>
                    </div>
                ))}
            </div>

            <div onClick={handleAgreement1} className="flex group cursor-pointer items-center gap-3">
                <div className={` ${agreement1 && "border-4 border-yesil"} group-hover:border-yesil w-4 h-4 flex items-center justify-center p-1 rounded border`}/>
                <span className="text-sm">Please send me news and offers from Spotify</span>
            </div>
            <div onClick={handleAgreement2} className="flex group cursor-pointer items-center gap-3">
                <div className={` ${agreement2 && "border-4 border-yesil"} group-hover:border-yesil w-4 h-4 flex items-center justify-center p-1 rounded border`}/>
                <span className="text-sm flex-1">Share my registration data with Spotify's content providers for marketing purposes. Note that your data may be transferred to a country outside of the EEA as described in our privacy policy.</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <span className="text-11 text-center">By clicking on sign-up, you agree to Spotify's <span className="underline text-yesil cursor-pointer">Terms and Conditions of Use  </span>.</span>
                <span className="text-11 text-center">To learn more about how Spotify collects, uses, shares and protects your personal data, please see <span className="underline text-yesil cursor-pointer">Spotify's Privacy Policy</span>.</span>
            </div>
            <div className="flex flex-col items-center gap-5">
                <button className="bg-yesil rounded-full px-8 py-3 hover:scale-105 font-medium">SIGN UP</button>
                <span>Have an account? <Link href="/login" className="text-yesil underline cursor-pointer">Log in</Link>.</span>
            </div>
        </form>
    );
};

export default RegisterForm;
