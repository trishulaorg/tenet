import { Header } from '../ui/header/Header'
import { HeaderState, HeaderStateContext } from '../states/HeaderState'
import React from 'react'
import { defaultUser, UserState } from '../states/UserState'
import { getGqlToken } from '../libs/cookies'
import { Layout } from '../ui/layouts/Layout'
import { PersonaCreateSteps } from '../ui/onboarding/PersonaCreateSteps'

const OnboardingPage: React.FC = () => {
  const token = getGqlToken()
  let user = defaultUser()
  if (token) user = new UserState(token, [], 0)

  const main: React.FC = () => (
    <>
      <PersonaCreateSteps />
    </>
  )
  return (
    <div className="bg-gray-100 h-full">
      <HeaderStateContext.Provider value={new HeaderState(user)}>
        <Header />
      </HeaderStateContext.Provider>
      <Layout Main={main} Side={() => <div className="max-w-xs">test</div>} />

      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next {
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default OnboardingPage
