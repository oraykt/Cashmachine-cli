/* eslint-disable no-undef */
const exec = require('child_process').exec

/*
* npm run test
* _.search() method returns -1 if no match is found.
* stdout && !stderr => { return result }
* !stdout && stderr => { return exception error }
* !stdout && stderr => { return unexpected error }
*/

describe('node app.js', () => {
  it('Should logged Result', (done) => {
    exec('node app.js', (_error, stdout, stderr) => {
      stdout = stdout.replace(/\s/g, '').search('Result') !== -1
      stderr = stderr.replace(/\s/g, '').search('Error') !== -1
      if (stdout && !stderr) {
        done()
      }
    })
  })

  it('Should logged Error', (done) => {
    exec('node app.js -5', (_error, stdout, stderr) => {
      stdout = stdout.replace(/\s/g, '').search('Result') !== -1
      stderr = stderr.replace(/\s/g, '').search('Error') !== -1
      if (!stdout && stderr) {
        done()
      }
    })
  })
  /*
    TELL ME HOW CAN I TEST UNEXPECTED ERROR?
    There is one method to catch unexpected error. But This api usage cli-app should get api-url on console.
  */
})
