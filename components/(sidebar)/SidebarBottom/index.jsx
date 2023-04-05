import React from 'react'

const SidebarBottom = ({playList}) => {
  return (
    <div className="overflow-y-auto flex flex-col gap-3 text-gray-300 hover:text-white focus:text-white">
                {playList?.map(item => (
                    <Link href={`/playlist/${item.id}`}>{item.name}</Link>
                ))}
    </div>
  )
}

export default SidebarBottom