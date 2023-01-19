const { System } = require('systemjs/dist/system-node.cjs')
global.systemRegister = System.register

require('jest-fetch-mock').enableMocks()
const Enzyme = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
Enzyme.configure({ adapter: new Adapter() })
