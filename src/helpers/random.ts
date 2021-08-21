const getRandomInt = (max: number): number => Math.floor(Math.random() * max)

const getRandomSample = <T>(options: T[], remove?: boolean): T => {
  if (remove) {
    return options.splice(getRandomInt(options.length), 1)[0]
  }
  return options[getRandomInt(options.length)]
}

export default getRandomSample
