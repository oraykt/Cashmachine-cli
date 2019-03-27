const findMultiple = require('./findMultiple');
const checkInput = require('./checkInput');
module.exports = (availableNotes, userInput) => {
    checkInput(userInput);
    const tempArray = [];
    availableNotes.forEach((node, index) => {
        let tempDiv = findMultiple(index, userInput, availableNotes);
        if (tempDiv) {
            userInput -= tempDiv * node;
            do {
                tempArray.push(node);
                tempDiv--;
            } while (tempDiv !== 0)
        }
    });
    return tempArray;
}