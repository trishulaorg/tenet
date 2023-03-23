import type { NotificationState } from '@/application/states/NotificationState'
import { createContext, useContext } from 'react'

export const NotificationStateContext = createContext<NotificationState[]>([])

export const NotificationStateProvider = NotificationStateContext.Provider

export function useNotificationState(): NotificationState[] {
  return useContext(NotificationStateContext)
}
