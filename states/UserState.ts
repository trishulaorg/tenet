import { makeAutoObservable } from 'mobx'

export class UserState {
  personas: PersonaState[] = []
  token
  currentPersonaIndex: number
  constructor(token: string, personas: PersonaState[], currentPersonaIndex: number) {
    this.token = token
    this.personas = personas
    this.currentPersonaIndex = currentPersonaIndex
    makeAutoObservable(this, { request: false })
  }
  async request(): Promise<void> {
    const result = await fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.token,
      },
      body: JSON.stringify({ query: `query  { me { personas { name } } }` }),
    }).then((r) => r.json())
    console.log(result)
  }
  get currentPersona(): PersonaState {
    return this.personas[this.currentPersonaIndex]
  }
}

export class PersonaState {
  name: string
  constructor(name: string) {
    this.name = name
    makeAutoObservable(this)
  }
}
