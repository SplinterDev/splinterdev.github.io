const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomSample = (options, remove) => {
  if (remove) {
    return options.splice(getRandomInt(options.length), 1);
  }
  return options[getRandomInt(options.length)];
}

export default getRandomSample;