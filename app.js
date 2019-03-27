const _ = require('lodash');
const yargs = require('yargs');
const args = yargs.argv;
const findMultiple = require('./helper/findMultiple');
const checkInput = require('./helper/checkInput');
const availableNodes = [100, 50, 20, 10];

let userInput = args._[0];
userInput = !userInput ? null : userInput;
try {
    const resultArr = [];
    checkInput(userInput);
    availableNodes.forEach((node, index) => {
        let tempDiv = findMultiple(index, userInput, availableNodes);
        if (tempDiv) {
            userInput -= tempDiv * node;
            do {
                resultArr.push(node);
                tempDiv--;
            } while (tempDiv !== 0)
        }
    });
    console.log("Result: ", resultArr);

} catch (exception) {
    console.log(exception);
}
