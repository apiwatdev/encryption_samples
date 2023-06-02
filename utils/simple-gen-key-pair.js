"use strict";

const crypto = require("crypto");

const {privateKey, publicKey} = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048, // Key size
  publicKeyEncoding: {
    type: "pkcs1", // Public key format
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs1", // Private key format
    format: "pem",
  },
});

// Output the private and public keys
console.log('Private Key:');
console.log(privateKey);

console.log('Public Key:');
console.log(publicKey);

