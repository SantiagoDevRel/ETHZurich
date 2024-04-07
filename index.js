//import web3
const { Web3 } = require("web3");

//initialize the provider
const web3 = new Web3("https://eth.llamarpc.com");

async function main() {
  const block = await web3.eth.getBlockNumber();
  console.log("ETH:", block);

  web3.setProvider("https://polygon.llamarpc.com");
  const block2 = await web3.eth.getBlockNumber();
  console.log("POLYGON:", block2);
}
main();
