/* eslint-disable no-throw-literal */
const yargs = require('yargs')
const args = yargs.argv
const cashMachineService = require('./services/CashMachine')

cashMachineService(args._[0])