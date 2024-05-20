import React from 'react'

export const userItem = ({name,email,fallback}) => {
  return (
    <div className='flex item-center justify-center gap-2 border rounded-[8px] p-4'>
<div className="avatar rounded-full min-h-12 min-w-12 bg-purple-800 text-white flex item-center justify-center"><p>{fallback}</p></div>
<div className="text-[16px] font-bold">{name}</div>
<div className="truncate text-neutral-500">{email}</div>

    </div>
  )
}
