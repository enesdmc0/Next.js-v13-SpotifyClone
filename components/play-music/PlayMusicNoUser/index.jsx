import React from 'react'

const PlayMusicNoUser = () => {
  return (
    <div className='flex items-center justify-between w-full h-full'>
        <div className='text-white'>
            <h4 className='text-xs'>PREVIEW OF SPOTIFY</h4>
            <p className='font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <button className='bg-white text-black px-8 py-3 font-medium hover:scale-105 rounded-full'>Sign up free</button>
    </div>
  )
}

export default PlayMusicNoUser