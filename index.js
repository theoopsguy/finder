const { LosslessReporting, provider, ethers } = require('@losslesscash/lossless-sdk');

const TOKEN_TO_PROTECT = "0x...";
const ADMIN_CONTRACT = "0x...";
const TOPICS = [ethers.utils.id("OwnershipTransferred(address,address)")];

const filter = {
  address: ADMIN_CONTRACT,
  topics: TOPICS,
}

const reporting = new LosslessReporting();

async function handleEvent(event) {
  const [newAdmin] =  ethers.utils.defaultAbiCoder.decode(['address'], event.topics[2]);
  await reporting.report(TOKEN_TO_PROTECT, newAdmin);
  console.log("Report submitted!");
}

function main() {
  console.log("Starting monitoring");
  provider.on(filter, handleEvent);
}

main();
