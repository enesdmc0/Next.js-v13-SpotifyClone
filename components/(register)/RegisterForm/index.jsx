'use client';
import {useState} from 'react';

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
    const data = ['month', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    return (
        <form className="flex flex-col gap-3 border-b pb-6 border-b-font2">
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
            <div className="flex group cursor-pointer items-center gap-3">
                <div className={` ${activeGender === item.name && "border-4 border-yesil"} group-hover:border-yesil w-4 h-4 flex items-center justify-center p-1 rounded-full border`}/>
                <span className="text-sm">Please send me news and offers from Spotify</span>
            </div>
            <div className="flex group cursor-pointer items-center gap-3">
                <div className={` ${activeGender === item.name && "border-4 border-yesil"} group-hover:border-yesil w-4 h-4 flex items-center justify-center p-1 rounded-full border`}/>
                <span className="text-sm">Share my registration data with Spotify's content providers for marketing purposes. Note that your data may be transferred to a country outside of the EEA as described in our privacy policy.</span>
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

export default RegisterForm;
