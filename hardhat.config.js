require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL

const MNEMONIC_SEED = process.env.MNEMONIC_SEED

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

const REPORT_GAS = process.env.REPORT_GAS

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: MAINNET_RPC_URL,
      },
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    localhost: {
      chainId: 31337,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    ganache: {
      chainId: 1337,
      url: GANACHE_RPC_URL,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    goerli: {
      chainId: 5,
      url: GOERLI_RPC_URL,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
      saveDeployments: true,
    },
    mainnet: {
      chainId: 1,
      url: MAINNET_RPC_URL,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
      saveDeployments: true,
    },
  },
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
      mainnet: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
  contractSizer: {
    runOnCompile: false,
    only: ["OurToken"],
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    user1: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
}
