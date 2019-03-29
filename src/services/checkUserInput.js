/* eslint-disable no-throw-literal */
module.exports = (userInput) => {
  if (!isNaN(userInput)) {
    if (userInput >= 0 && userInput <= 1000) {
      return userInput
    }
    if (userInput > 1000) {
      throw 'Max Limit: 1000'
    } else {
      throw 'InvalidArgumentException'
    }
  } else {
    throw 'InvalidArgumentException'
  }
}
