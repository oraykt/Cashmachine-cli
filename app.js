const yargs = require('yargs')
const args = yargs.argv
const cashMachineService = require('./src/services/CashMachine')

cashMachineService(args._[0])
