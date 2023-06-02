"use strict";
const crypto = require("crypto");
const fs = require("fs");

// Read the private key from file
const privateKey = fs.readFileSync("private_key.pem");

// Read the public key from file
const publicKey = fs.readFileSync("public_key.pem");

// Function to run the encryption and decryption
function run() {
    const message = "Hello, I am data";

    // Encrypt the message using the public key
    const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(message, 'utf8'));
    const encryptedDataBase64 = encryptedData.toString('base64');

    console.log('Encrypted Data:');
    console.log(encryptedData.toString('base64'));

    // Decrypt the encrypted data using the private key
    const decryptedData = crypto.privateDecrypt(privateKey, Buffer.from(encryptedDataBase64, 'base64'));

    console.log('Decrypted Data:');
    console.log(decryptedData.toString('utf8'));
}

run();
