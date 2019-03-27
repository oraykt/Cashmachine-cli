const _ = require('lodash');
const yargs = require('yargs');
const args = yargs.argv;
const findMultiple = require('./helper/findMultiple');

const availableNodes = [100, 50, 20, 10];

let userInput = args._[0];
console.log("Your command is ", userInput);
try {
    if (!typeof (userInput) === 'number') {
        throw "InvalidArgumentException"
    } else {
        const resultArr = [];
        if (!userInput) {
            console.log("Result: ", resultArr);
            return false;
        }
        if (userInput < 0) throw "InvalidArgumentException";
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
    }
} catch (exception) {
    console.log(exception);
}
