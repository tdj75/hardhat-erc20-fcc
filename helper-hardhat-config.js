const networkConfig = {
  31337: {
    name: "localhost",
  },
  1337: {
    name: "ganache",
  },
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
}
const INITIAL_SUPPLY = "1000000000000000000000000"

const developmentChains = ["hardhat", "localhost", "ganache"]

module.exports = {
  networkConfig,
  developmentChains,
  INITIAL_SUPPLY,
}
