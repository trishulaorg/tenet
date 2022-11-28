import type { MouseEventHandler } from 'react'
import React, { useContext, useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { HeaderStateContext } from '../../states/HeaderState'
import { MenuIcon } from '@heroicons/react/solid'
import { Switch } from '../common/Switch'
import {useTheme} from "next-themes"
import Link from 'next/link'

export const UserMenu: React.FC = observer(() => {
  const state = useContext(HeaderStateContext)
  const {theme, setTheme} = useTheme()

  return (
    <>
      <div className="flex-initial mx-3 my-auto flex items-center justify-center text-high dark:text-high-dark">
        <div className="my-auto">
          <button onClick={() => state.toggleMenu()}>
            <MenuIcon className="h-5 w-5 text-slate-700 dark:text-med-dark dark:hover:text-high-dark transition-colors" />{' '}
          </button>
          <Switch visibility={state.menuVisibility}>
            <UserMenuItems>
              <Switch visibility={state.isLoggedIn}>
                <UserMenuItem onClick={() => state.togglePersonaList()}>
                  {state.userState?.currentPersona?.name}
                  <Switch visibility={state.personaListVisibility}>
                    <Switch visibility={state.userState.isValidUser}>
                      <ul className="bg-contentbg dark:bg-contentbg-dark width-100">
                        {state.userState?.personas.map((p, idx) => (
                          <li key={idx} className="border-solid border-b-2">
                            <button
                              onClick={() => {
                                if (state.userState) {
                                  state.userState.currentPersonaIndex = idx
                                }
                              }}
                            >
                              {p.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </Switch>
                  </Switch>
                </UserMenuItem>
                <UserMenuItem onClick={() => state.closeMenu()}>
                  <Link href="/notifications">Notifications</Link>
                </UserMenuItem>
                <UserMenuItem onClick={() => state.closeMenu()}>
                  <Link href="/auth">
                    <a
                      onClick={() => state.logOut()}
                      onKeyDown={() => state.logOut()}
                      role="link"
                      tabIndex={0}
                    >
                      Sign out
                    </a>
                  </Link>
                </UserMenuItem>
              </Switch>
              <Switch visibility={state.isLoggedIn}>
                <UserMenuItem onClick={() => state.closeMenu()}>
                  <Link href="/persona/settings/icon">Change Persona Icon</Link>
                </UserMenuItem>
              </Switch>
              <Switch visibility={!state.isLoggedIn}>
                <UserMenuItem onClick={() => state.closeMenu()}>
                  <Link href="/auth">Sign in / Sign up</Link>
                </UserMenuItem>
              </Switch>
              <UserMenuItem onClick={() => {
                setTheme(theme == "dark" ? "light" : "dark")
                // window.localStorage.setItem('theme', theme)
                // console.log(theme, window.localStorage.getItem('theme'))
              }}>
                Switch Theme
              </UserMenuItem>
            </UserMenuItems>
          </Switch>
        </div>
      </div>
    </>
  )
})

export const UserMenuItems: React.FC = observer((props) => {
  const state = useContext(HeaderStateContext)
  const ref = useRef<HTMLDivElement>(null)
  const mouseDownHandler = (ev: MouseEvent): void => {
    if (ref.current && !ref.current.contains(ev.target as HTMLElement)) state.closeMenu()
  }
  useEffect(() => {
    document.addEventListener('mousedown', mouseDownHandler)
    return () => document.removeEventListener('mousedown', mouseDownHandler)
  }, [ref])
  return (
    <div className="relative inline-block float-right" ref={ref}>
      <ul className={`absolute right-0 z-10 bg-contentbg dark:bg-contentbg-dark w-48 rounded-sm border-2`}>
        {props.children}
      </ul>
    </div>
  )
})

export const UserMenuItem: React.FC<{ onClick?: MouseEventHandler }> = observer((props) => {
  return (
    <li className="p-4">
      <button onClick={(e) => props.onClick?.(e)}>{props.children}</button>
    </li>
  )
})
