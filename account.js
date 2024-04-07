//import web3
const { Web3 } = require("web3");

//initialize the provider
const web3 = new Web3("https://eth.llamarpc.com");

//initialize a wallet
const myWallet = web3.eth.wallet.add("0x590deee7395f6cb6d2ad5e0ae8a4e32fd74c47e2bd157022dafbda4539fe637e");

console.log(myWallet);
