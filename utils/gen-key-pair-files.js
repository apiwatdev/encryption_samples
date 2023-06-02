"use strict";

const crypto = require("crypto");
const fs = require("fs")
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

fs.writeFileSync('private_key.pem', privateKey)
fs.writeFileSync('public_key.pem', publicKey)

console.log('Keys saved successfully.');