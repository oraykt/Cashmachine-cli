const _ = require('lodash');
const yargs = require('yargs');
const args = yargs.argv;
const findMultiple = require('./helper/findMultiple');
const findResult = require('./helper/findResult');
const availableNodes = [100, 50, 20, 10];

try {
    let userInput = args._[0];
    userInput = !userInput ? null : userInput;
    const resultArr = findResult(availableNodes, userInput);
    console.log("Result: ", resultArr);

} catch (exception) {
    console.log(exception);
}
