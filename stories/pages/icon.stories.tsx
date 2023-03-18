import type { PersonaIconUrl } from '@/models/persona/PersonaIconUrl'
import type { PersonaId } from '@/models/persona/PersonaId'
import type { PersonaName } from '@/models/persona/PersonaName'
import type { PersonaScreenName } from '@/models/persona/PersonaScreenName'
import type { ComponentStory } from '@storybook/react'
import { ComponentMeta } from '@storybook/react'
import SetPersonaIconPage from '../../pages/persona/settings/icon'
import { UserStateContext, UserState, PersonaState } from '../../states/UserState'
import iconImage from '../static/icon.png'

export default {
  title: 'Pages/SetPersonaIconPage',
  component: SetPersonaIconPage,
} satisfies ComponentMeta<typeof SetPersonaIconPage>

export const SignedIn: ComponentStory<typeof SetPersonaIconPage> = (args) => (
  <UserStateContext.Provider
    value={
      new UserState(
        [
          new PersonaState({
            id: '1' as PersonaId,
            name: 'john_doe' as PersonaName,
            iconUrl: iconImage as unknown as PersonaIconUrl,
            screenName: 'John Doe' as PersonaScreenName,
          }),
        ],
        0
      )
    }
  >
    <SetPersonaIconPage {...args} />
  </UserStateContext.Provider>
)
