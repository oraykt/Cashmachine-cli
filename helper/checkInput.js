module.exports = (userInput) => {
    if (!userInput)
        return;
    if (userInput < 0 || typeof (userInput) !== "number")
        throw "InvalidArgumentException"
}