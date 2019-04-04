module.exports = (resultArray) => {
  if (resultArray.length === 0) {
    console.log('Result: ', resultArray)
  } else {
    console.log("Result: ")
    let amount = 1
    resultArray.forEach((val, index) => {
      if (resultArray[index + 1]) {
        if (resultArray[index + 1] === val) {
          amount++
        } else {
          console.log(val + ' x ' + amount)
          amount = 1
        }
      } else {
        console.log(val + ' x ' + amount)
      }
    });
  }
}