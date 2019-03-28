/* eslint-disable no-throw-literal */
module.exports = (userInput) => {
  if (!isNaN(userInput)) {
    if (userInput >= 0) {
      return userInput
    } else {
      throw 'InvalidArgumentException'
    }
  } else {
    throw 'InvalidArgumentException'
  }
}
