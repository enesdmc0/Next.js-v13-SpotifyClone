"use client";
import {useState} from "react";
import {useSearchParams, useRouter} from 'next/navigation';



const LoginForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) => {
        setForm(prev => ({...prev, [e.target.name] : e.target.value}));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/login",
            {method: "POST", body: JSON.stringify({username: form.username, password: form.password})})

        const {success} = await res.json();
        if (success){
            const nextUrl = searchParams.get("next");
            router.push(nextUrl ?? "/")
        }else {
            alert("Invalid username or password")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-b pb-6 border-b-font2">
            <div className="flex flex-col gap-1">
                <label className="font-medium text-sm">Email address or username</label>
                <input type="text" value={form.username} onChange={handleChange} name="username"
                       className="border focus:outline focus:outline-black transition-all duration-150 placeholder:text-gray-400  border-gray-300 hover:border-black bg-inputBg p-2 rounded"
                       placeholder="Email address or username"/>
            </div>
            <div className="flex flex-col gap-1">
                <label>Password</label>
                <input value={form.password} onChange={handleChange} name="password"
                    className="border focus:outline transition-all focus:outline-black duration-150 placeholder:text-gray-400 border-gray-300 hover:border-black bg-inputBg p-2 rounded"
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
