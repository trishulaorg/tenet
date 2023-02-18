import type { ReactElement } from 'react'
import React from 'react'
import { ActivityCard } from '../../ui/home/ActivityCard'
import { PostState } from '../../states/PostState'
import type { PersonaState } from '../../states/UserState'

export default {
  title: 'Home/ActivityCard',
  component: ActivityCard,
}

const exampleAuthor: PersonaState = {
  screenName: 'Mitchell',
  name: 'MTL',
  iconUrl: 'https://i.pinimg.com/originals/ae/24/87/ae24874dd301843548c034a3d2973658.png',
  id: '',
  updateName: function (_name: string): void {
    throw new Error('Function not implemented.')
  },
  updateScreenName: function (_name: string): void {
    throw new Error('Function not implemented.')
  },
}

const examplePost = new PostState({
  id: '1',
  boardId: '1',
  title: 'Test post',
  author: exampleAuthor,
  content:
    "This is an example post. I'll put some text here for testing purposes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  upvote: 0,
  downvote: 0,
  createdAt: new Date(),
})

export const Card = (): ReactElement => <ActivityCard post={examplePost} />
