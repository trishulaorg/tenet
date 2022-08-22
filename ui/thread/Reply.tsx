import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import type { PostState } from '../../states/PostState'
import { UserStateContext } from '../../states/UserState'

import { AuthorAndBoardLink } from '../common/AuthorAndBoardLink'
import { CardContent } from '../common/CardContent'
import { CardIcons } from '../common/CardIcons'
import { CardMeta } from '../common/CardMeta'
import { CreatedAt } from '../common/CreatedAt'

export interface ReplyProps {
  replies: PostState[]
}

export const Reply: React.FC<ReplyProps> = observer((props) => {
  const userState = useContext(UserStateContext)
  return (
    <ul className="pl-4">
      {props.replies.map((reply, i) => {
        return (
          <li key={i} className="pt-4">
            <AuthorAndBoardLink
              screenName={reply.author.screenName}
              name={reply.author.name}
              iconUrl={reply.author.iconUrl}
            />
            <div className="ml-2 border-gray-200	border-l-4">
              <CardContent content={reply.content} isPost={false} imageUrls={reply.imageUrls} />
              <CardMeta isPost={false}>
                <CardIcons
                  commentNumber={reply.responseNumber}
                  upvote={reply.upvote}
                  downvote={reply.downvote}
                  isPost={false}
                  showCommentNumber={false}
                  showTrashIcon={reply.author.name === userState.currentPersona?.name}
                />
                <div className="pb-2" />
                <CreatedAt created={reply.createdAt} />
              </CardMeta>
            </div>
          </li>
        )
      })}
    </ul>
  )
})
