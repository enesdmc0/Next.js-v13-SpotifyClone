
import Link from 'next/link'
import React from 'react'

const HeaderNoUser = () => {
    const data = [
        {id: 1, text: "Premium", href: "/"},
        {id: 2, text: "Support", href: "/"},
        {id: 3, text: "Download", href: "/"},
    ]
  return (
    <div className='flex gap-6 items-center'>
        <nav className="flex gap-5 font-medium text-gray-300">
            {
                data.map(item => (
                    <Link className='hover:scale-105 hover:text-white' key={item.id} href={item.href}>{item.text}</Link>
                ))
            }
        </nav>
        <div className='h-7 border'></div>
        <div className='flex gap-5 items-center'>
            <Link href="/register" className="hover:text-white text-gray-300 hover:scale-105">Sign up</Link>
            <Link href="/login" className="bg-white px-7 font-medium hover:bg-gray-300 hover:scale-105 py-3 rounded-full">Log in</Link>
        </div>
    </div>
  )
}

export default HeaderNoUser