/* eslint-disable no-throw-literal */
const yargs = require('yargs')
const args = yargs.argv
const checkUserInput = require('./utils/checkUserInput')
const findResultArray = require('./services/findResultArray')
const calculateAmount = require('./services/calculateAmount')
const availableNodes = [100, 50, 20, 10]
try {
  let userInput = checkUserInput(args._[0])
  if (userInput % availableNodes[3] === 0) {
    let resultArray = []
    findResultArray(availableNodes, userInput, resultArray)
    calculateAmount(resultArray)
  } else {
    throw 'NoteUnavailableException'
  }
} catch (exception) {
  console.log(exception)
}
