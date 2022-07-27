import React from 'react'

export interface UserIconProps {
  size: 'small' | 'medium'
  src?: string
}

export const UserIcon: React.FC<UserIconProps> = (props) => {
  return !props.src ? (
    <div
      className={props.size === 'small' ? 'w-5 h-5 border rounded-sm inline-block' : 'w-40 h-40'}
    />
  ) : (
    <img src={'https://picsum.photos/20'} alt="avater" className="rounded-sm" />
  )
}
