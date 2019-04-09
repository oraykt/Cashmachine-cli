/* eslint-disable no-undef */
const exec = require('child_process').exec

/*
* npm run test
* _.search() method returns -1 if no match is found.
* stdout && !stderr => { return result }
* !stdout && stderr => { return exception error }
* !stdout && !stderr => { return unexpected error }
*/

describe('node app.js', () => {
  it('Should logged Result', (done) => {
    exec('node app.js', (_error, stdout, stderr) => {
      console.log('stdout', JSON.stringify(stdout))
      console.log('stderr', JSON.stringify(stderr))
      stdout = stdout.replace(/\s/g, '').search('Result') !== -1
      stderr = stderr.replace(/\s/g, '').search('Error') !== -1
      if (stdout && !stderr) {
        done()
      }
    })
  })

  it('Should logged Error', (done) => {
    exec('node app.js -5', (_error, stdout, stderr) => {
      console.log('stdout', JSON.stringify(stdout))
      console.log('stderr', JSON.stringify(stderr))
      stdout = stdout.replace(/\s/g, '').search('Result') !== -1
      stderr = stderr.replace(/\s/g, '').search('Error') !== -1
      if (!stdout && stderr) {
        done()
      }
    })
  })
})
