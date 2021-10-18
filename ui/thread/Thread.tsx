import { observer } from 'mobx-react'
import React from 'react'
import { PostState } from '../../states/PostState'

import { UserIcon } from '../common/UserIcon'
import { Reply } from './Reply'

export interface ThreadProps {
  posts: PostState[]
}

export const Thread: React.FC<ThreadProps> = observer((props) => {
  return (
    <ul className="pl-4 bg-gray-50">
      {props.posts.map((v, i) => {
        return (
          <li key={i} className="py-4">
            <div className="text-xl">{v.title}</div>
            <div>
              <UserIcon size="small" />
              {v.author.name}
            </div>
            <div>{v.content}</div>
            {v.hasRepsponse ? <Reply posts={v.responses} /> : undefined}
          </li>
        )
      })}
    </ul>
  )
})
