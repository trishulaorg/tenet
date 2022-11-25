/* eslint-disable */
import React from 'react'

type Props = {
  authorUserId: string
  authorScreenName: string
  body: string
  likesCount: number
  repliesCount: number
  createdAt: Date
  userIcon?: string
  attachedImages?: string[]
}

export default function Card(props: Props) {
  const {
    authorUserId,
    authorScreenName,
    body,
    likesCount,
    repliesCount,
    createdAt,
    userIcon,
    attachedImages,
  } = props

  return <div>{/* TODO */}</div>
}
