import type { ComponentStory } from '@storybook/react'
import { ComponentMeta } from '@storybook/react'
import { Board } from '../../ui/board/Board'
import iconImage from '../static/icon.png'
import type { PersonaIconUrl } from '@/domain/models/persona/PersonaIconUrl'
import type { PersonaId } from '@/domain/models/persona/PersonaId'
import type { PersonaName } from '@/domain/models/persona/PersonaName'
import type { PersonaScreenName } from '@/domain/models/persona/PersonaScreenName'
import type { BoardId } from '@/domain/models/board/BoardId'
import type { BoardTitle } from '@/domain/models/board/BoardTitle'
import type { BoardDescription } from '@/domain/models/board/BoardDescription'
import { UserStateProvider } from '@/states/UserState'
import { UserStateImpl } from '@/infrastructure/states/UserStateImpl'
import { BoardProvider } from '@/states/BoardState'
import type { PostId } from '@/domain/models/post/PostId'
import type { PostTitle } from '@/domain/models/post/PostTitle'
import type { PostContent } from '@/domain/models/post/PostContent'
import type { DateString } from '@/domain/models/common/DateString'

export default {
  title: 'Board/Board',
  component: Board,
  decorators: [
    (Story) => (
      <UserStateProvider
        value={
          new UserStateImpl(
            [
              {
                id: '1' as PersonaId,
                name: 'john_doe' as PersonaName,
                iconUrl: iconImage as unknown as PersonaIconUrl,
                screenName: 'John Doe' as PersonaScreenName,
              },
            ],
            0
          )
        }
      >
        <BoardProvider
          value={{
            id: '1' as BoardId,
            title: 'lorem ipsum' as BoardTitle,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." as BoardDescription,
            privilege: {
              deleteSelf: true,
            },
            posts: Array(5)
              .fill(null)
              .map((_, i) => ({
                id: String(i + 1) as PostId,
                title: 'lorem ipsum' as PostTitle,
                content:
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." as PostContent,
                createdAt: `${2023 - i}-10-05T14:48:00.000Z` as DateString,
                imageUrls: [],
                board: {
                  id: '1' as BoardId,
                  title: 'lorem ipsum' as BoardTitle,
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." as BoardDescription,
                },
                privilege: {
                  deleteSelf: true,
                },
                upvote: 0,
                downvote: 0,
                threads: [],
                author: {
                  id: '1' as PersonaId,
                  name: 'john_doe' as PersonaName,
                  iconUrl: iconImage as unknown as PersonaIconUrl,
                  screenName: 'John Doe' as PersonaScreenName,
                },
              })),
          }}
        >
          <Story />
        </BoardProvider>
      </UserStateProvider>
    ),
  ],
  argTypes: {
    showPostCreate: { control: 'boolean' },
    followButtonType: { control: { type: 'select', options: ['follow', 'unfollow'] } },
    onFollowButtonClick: { action: 'clicked' },
  },
  args: {
    showPostCreate: true,
    followButtonType: 'follow',
  },
} satisfies ComponentMeta<typeof Board>

export const Default: ComponentStory<typeof Board> = (args) => <Board {...args} />
