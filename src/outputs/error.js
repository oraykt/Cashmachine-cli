module.exports = (exception) => {
  console.error(`
  Error: ${exception.error}
  Message: ${exception.error_msg}
  `)
}
