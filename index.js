// Generate private key
console.log('Generating ETH address...');
var dk = keythereum.create();
var keyObject = keythereum.dump('password', dk.privateKey, dk.salt, dk.iv);
var privateKeyString = dk.privateKey.toString('hex');
console.log('Private key', privateKeyString);

// Get public key
// NOT WORKING. DEPENDS IN ethereumjs-wallet
//console.log('Get public key...');
//var wallet = Wallet.fromPrivateKey(dk.privateKey);
//var publicKey = wallet.getPublicKey();
//console.log('Public key', publicKey.toString('hex'));

// Get wallet address
// NOT WORKING. DEPENDS IN ethereumjs-wallet
//console.log('Get wallet address...');
//var address = wallet.getAddressString();
//console.log('Address', address);
