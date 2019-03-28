const yargs = require('yargs')
const args = yargs.argv
const checkUserInput = require('./services/checkUserInput')
const findResultArray = require('./services/findResultArray')
const availableNodes = [100, 50, 20, 10]
try {
  let userInput = checkUserInput(args[0])
  findResultArray(availableNodes, userInput)
} catch (exception) {
  console.log(exception)
}
