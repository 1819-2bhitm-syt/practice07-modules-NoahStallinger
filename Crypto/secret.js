const encrypt = require('./encrypt.js');
const decrypt = require('./decrypt.js')

const plaintext = 'Hier steht ein geheimer Text!';
const secret = 'HAON';

console.log("Der verschlüsselte Text lautet:");
const ciphertext = encrypt(secret, plaintext);

console.log("\nDer wieder entschlüsselte Text lautet:");
decrypt(ciphertext, secret);