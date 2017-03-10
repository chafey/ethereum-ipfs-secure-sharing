import web3 from './web3.js'
import eutil from 'ethereumjs-util';

export default function(senderAddress) {
  var currentNonce = web3.eth.getTransactionCount(senderAddress);
  var futureAddress =  eutil.bufferToHex(eutil.generateAddress(senderAddress, currentNonce));
  return futureAddress;
}
