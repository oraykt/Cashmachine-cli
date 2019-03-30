const axios = require('axios')
const qs = require('querystring')
const ora = require('ora')

const resultOutput = require('../utils/result')
const errorOutput = require('../utils/error')

// import cashMachineService from somewhere
const cashMachineService = {
  withdraw: 'http://localhost:3000/withdraw'
}

const setRequestBody = (userInput) => {
  return qs.stringify({ amount: userInput })
}


module.exports = (userInput) => {
  const spinner = ora().start()
  axios.post(
    cashMachineService.withdraw,
    setRequestBody(userInput),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
    .then((response) => {
      spinner.stop()
      resultOutput(response.data.result)
    })
    .catch((error) => {
      spinner.stop()
      errorOutput(error.response.data.exception)
    })

}