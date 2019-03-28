module.exports = (availableNotes, userInput) => {
  availableNotes.forEach((value, index) => {
    if (availableNotes.length - 1 === index) {
      if (userInput % value === 0) {
        // TODO
      }
    } else {
      userInput -= value * index
    }
  })
}
