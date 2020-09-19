import web3 from './web3';

const address = '0x7FDD9C6207a1723Eb167596568cd80E74c15664E';

const abi = 
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "enrollmentNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_instituteName",
				"type": "string"
			}
		],
		"name": "newIdentityCard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_instituteName",
				"type": "string"
			}
		],
		"name": "registerInstitute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "enrollmentNumber",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "instituteAddress",
				"type": "address"
			}
		],
		"name": "getIdentityCard",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);