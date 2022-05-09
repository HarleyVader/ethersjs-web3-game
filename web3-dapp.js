//node console
var ethers = require('ethers')
//using AlchemyProvider with shared project ID
const provider = new ethers.providers.AlchemyProvider()

//get current block number
await provider.getBlockNumber()

provider.network
//{
//  name: 'homestead',
//  chainId: 1,
//...
//}

// Get the balance of an account
balance = await provider.getBalance("ethers.eth")
ethers.utils.formatUnits(balance)