module.exports = (availableNotes, userInput, resultArray) => {
  availableNotes.forEach((value, index) => {
    const division = Math.floor(userInput / value)
    userInput -= value * division
    for (let i = 0; i < division; i++) {
      resultArray.push(value)
    }
  })
}
