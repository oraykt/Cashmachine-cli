/* eslint-disable no-throw-literal */
const findMultiple = (index, userInput, availableNodes) => {
  if (index === availableNodes.length - 1) {
    if (userInput % availableNodes[index] !== 0) {
      throw 'NoteUnavailableException'
    } else {
      return userInput / availableNodes[index]
    }
  } else {
    return Math.floor(userInput / availableNodes[index])
  }
}
module.exports = findMultiple
