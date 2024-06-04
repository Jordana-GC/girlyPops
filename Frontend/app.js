const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bookingId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "houseId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "renter",
				"type": "address"
			}
		],
		"name": "CheckedIn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bookingId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "houseId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "late",
				"type": "bool"
			}
		],
		"name": "CheckedOut",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bookingId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "houseId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			}
		],
		"name": "HouseBooked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "houseId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pricePerDay",
				"type": "uint256"
			}
		],
		"name": "HouseListed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "houseId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			}
		],
		"name": "bookHouse",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bookingCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bookings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "houseId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isCheckedIn",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isCheckedOut",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bookingId",
				"type": "uint256"
			}
		],
		"name": "checkIn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bookingId",
				"type": "uint256"
			}
		],
		"name": "checkOut",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "houseCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "houses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "pricePerDay",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isBooked",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "checkinTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkoutTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lateCheckoutFine",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pricePerDay",
				"type": "uint256"
			}
		],
		"name": "listHouse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

let web3;
let contract;

async function init() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        contract = new web3.eth.Contract(contractABI, contractAddress);
    } else {
        console.error("Metamask not detected");
    }
}

async function listHouse() {
    const pricePerDay = document.getElementById('pricePerDay').value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.listHouse(web3.utils.toWei(pricePerDay, 'ether')).send({ from: accounts[0] });
}

async function bookHouse() {
    const houseId = document.getElementById('houseIdToBook').value;
    const startDate = new Date(document.getElementById('startDate').value).getTime() / 1000;
    const endDate = new Date(document.getElementById('endDate').value).getTime() / 1000;
    const accounts = await web3.eth.getAccounts();
    const house = await contract.methods.houses(houseId).call();
    const amount = house.pricePerDay * (endDate - startDate) / (60 * 60 * 24);
    await contract.methods.bookHouse(houseId, startDate, endDate).send({ from: accounts[0], value: amount });
}

async function checkIn() {
    const bookingId = document.getElementById('bookingIdToCheckIn').value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.checkIn(bookingId).send({ from: accounts[0] });
}

async function checkOut() {
    const bookingId = document.getElementById('bookingIdToCheckOut').value;
    const accounts = await web3.eth.getAccounts();
    const booking = await contract.methods.bookings(bookingId).call();
    const isLate = Date.now() / 1000 > booking.endDate;
    if (isLate) {
        await contract.methods.checkOut(bookingId).send({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
    } else {
        await contract.methods.checkOut(bookingId).send({ from: accounts[0] });
    }
}

window.onload = init;
