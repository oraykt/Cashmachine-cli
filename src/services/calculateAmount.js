const output = require('../utils/output')
module.exports = (resultArray) => {
  let amount = 1
  // TODO output will declare with a global variable
  resultArray.forEach((value, index) => {
    if (resultArray[index + 1]) {
      if (value === resultArray[index + 1]) {
        amount++
      } else {
        console.log(output(value, amount))
      }
    } else {
      console.log(output(value, amount))
    }
  })
}
