const hre = require("hardhat");

   async function main() {
     const Swisstronik = await hre.ethers.getContractFactory("Swisstronik");
     const swisstronik = await Swisstronik.deploy("Hello Swisstronik!!");
     await swisstronik.deployed();

     console.log(`Swisstronik contract deployed to ${swisstronik.address}`);
   }

   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
