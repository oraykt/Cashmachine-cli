const axios = require('axios')
const qs = require('querystring')
const ora = require('ora')

const resultOutput = require('../utils/result')
const errorOutput = require('../utils/error')
const unExpectedError = require('../utils/unExpectedError')

// import cashMachineService from somewhere
const apiConfig = require('../config/api')

const setUrl = (url) => {
  return url
}

const setRequestBody = (userInput) => {
  return qs.stringify({ amount: userInput })
}

const setHeader = (contentType) => {
  return { 'headers': setContentType(contentType) }
}

const setContentType = (contentType) => {
  return { 'Content-Type': contentType }
}

module.exports = (userInput) => {
  const spinner = ora().start()
  axios.post(
    setUrl(apiConfig.cashMachineService.withdrawOnHeroku),
    setRequestBody(userInput),
    setHeader('application/x-www-form-urlencoded')
  )
    .then((response) => {
      spinner.stop()
      resultOutput(response.data.result)
    })
    .catch((error) => {
      spinner.stop()
      if (error.response.data.exception) {
        errorOutput(error.response.data.exception)
      } else {
        unExpectedError(error.response)
      }
    })

}