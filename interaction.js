//import web3
const { Web3 } = require("web3");
const abi = require("./abi.json");

//initialize the provider
const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");

async function readMsg() {
  //initialize a contract
  const myContract = new web3.eth.Contract(abi, "0xC36250560C7c7830C9eDe30Ebb52E26890c2E356");

  //make call
  const response = await myContract.methods.getMsg().call();
  console.log(response);
}
readMsg();

async function setMsg() {
  //initialize a wallet
  const myWallet = web3.eth.wallet.add("0x590deee7395f6cb6d2ad5e0ae8a4e32fd74c47e2bd157022dafbda4539fe637e");

  //initialize a contract
  const myContract = new web3.eth.Contract(abi, "0xC36250560C7c7830C9eDe30Ebb52E26890c2E356");

  //send transaction
  const txReceipt = await myContract.methods.updateMsg("🚀").send({ from: myWallet[0].address });
  console.log(txReceipt);
}

//setMsg();
