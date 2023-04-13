
// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  const [deployer] = await ethers.getSigners();

  const Verifier = await ethers.getContractFactory("Verifier");
  const verifier = await Verifier.deploy();
  await verifier.deployed();
  console.log("verifier address:", verifier.address);
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
