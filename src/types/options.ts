type Emoji = {
  content: string
  name: string
}

type Color = {
  value: string
  name: string
}
const optionsKeys = [
  'greetings',
  'greetingsFollowUp',
  'opening',
  'visit',
  'page',
  'dontBelieve',
  'colorsAndWords',
  'everyTime',
  'selected',
  'thisVersion',
  'youGetIt',
  'alreadyDone',
  'refresh',
  'purposes',
  'colorAdjective',
  'emoji',
  'colors',
] as const

export type OptionsKeys = typeof optionsKeys[number]

export type Options = Record<OptionsKeys, string[]> & {
  emoji: Emoji[]
  colors: Color[]
}
