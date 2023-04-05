"use client"
import {useState} from "react"
import {BsSearch} from "react-icons/all";

const HeaderSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleClick = () => {
        setSearchValue("")
    }
  return (
    <div className='flex items-center bg-white rounded-full py-1 px-3 gap-4'>
    <BsSearch size={25}/>
     <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className='outline-none bg-transparent text-xs font-medium text-black placeholder:text-gray-500' placeholder="What do you want to listen to ?" type="text" /> 
     <span onClick={handleClick} className={`${searchValue !== "" && "opacity-100"} text-xl opacity-0 cursor-pointer`}>X</span>
</div>
  )
}

export default HeaderSearch