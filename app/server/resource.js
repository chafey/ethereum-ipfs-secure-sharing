import web3 from './web3.js'

var abi = [{"constant":true,"inputs":[],"name":"url","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"recipient","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_recipient","type":"address"},{"name":"_url","type":"string"}],"payable":false,"type":"constructor"}];
var contract = web3.eth.contract(abi);

export default {
  abi: abi,
  contract: contract
}
