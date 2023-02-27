import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'
import type { PersonaState } from './UserState'

type NotificationType = 'follow' | 'like' | 'comment'

export interface NotificationData {
  type: NotificationType
  message?: string
  createdAt: Date
  sender?: PersonaState | undefined
}

export class NotificationState {
  private _type: NotificationType
  private _message?: string | undefined
  private _createdAt: Date
  sender: PersonaState | undefined
  recepient!: PersonaState

  constructor(data: NotificationData) {
    this._type = data.type
    this._message = data.message ? data.message : undefined
    this._createdAt = data.createdAt
    makeAutoObservable(this)
  }

  get type(): NotificationType {
    return this._type
  }

  set type(value: NotificationType) {
    this._type = value
  }

  get message(): string | undefined {
    return this._message
  }

  set message(value: string | undefined) {
    this._message = value
  }

  get createdAt(): Date {
    return this._createdAt
  }

  set createdAt(value: Date) {
    this._createdAt = value
  }
}

export const NotificationStateContext = createContext<NotificationState[]>([])