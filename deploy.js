//import web3
const { Web3 } = require("web3");
const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

//initialize the provider
const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");

async function main() {
  //initialize a wallet
  const myWallet = web3.eth.wallet.add("0x590deee7395f6cb6d2ad5e0ae8a4e32fd74c47e2bd157022dafbda4539fe637e");

  //initialize a contract
  const myContract = new web3.eth.Contract(abi);

  //contract deployer
  const deployer = myContract.deploy({
    data: bytecode,
    arguments: ["Hello Zurich!"],
  });

  //send transaction to deploy the contract
  //0xEA9eEca67682Cd9c6Ce3DdD1681049D7A897289F
  const txReceipt = await deployer.send({ from: myWallet[0].address });
  console.log(txReceipt.options.address);
}

main();
