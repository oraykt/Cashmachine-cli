const axios = require('axios')
const qs = require('querystring');

// import cashMachineService from somewhere
const cashMachineService = {
  withdraw: 'http://localhost:3000/withdraw'
}

const setRequestBody = (userInput) => {
  return qs.stringify({ amount: userInput })
}


module.exports = (userInput) => {
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
      // console.log(response)
      console.log(response.data)
    })
    .catch((error) => {
      // console.log(error)
      console.log(error.response.data)
    })

}