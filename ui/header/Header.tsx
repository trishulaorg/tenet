import React from 'react'
import { observer } from 'mobx-react'
import { Title } from './Title'
import { UserMenu } from './UserMenu'

export const Header = observer(() => {
  return (
    <nav className="flex item-center justify bg-white px-4 py-2 shadow-md">
      <Title />
      <UserMenu />
    </nav>
  )
})
