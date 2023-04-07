import React from 'react'
import { observer } from 'mobx-react'

export const HomeTab: React.FC<{
  onClick: React.MouseEventHandler
  selected: boolean
}> = observer((props) => {
  const style = props.selected
    ? 'text-xl font-bold mr-5 pb-1 border-solid text-gray-600 border-b-2 border-orange-600 border-opacity-80'
    : 'text-xl font-bold mr-5 pb-1 border-solid text-gray-600 border-b-2 border-gray-600 border-opacity-70 opacity-30'
  return (
    <button className="cursor-pointer" onClick={props.onClick}>
      <h3 className={style}>{props.children}</h3>
    </button>
  )
})
