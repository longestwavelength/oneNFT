const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("OneNFT");

  const deployedNFTContract = await nftContract.deploy();

  await deployedNFTContract.deployed();

  console.log("OneNFT contract address: ", deployedNFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });