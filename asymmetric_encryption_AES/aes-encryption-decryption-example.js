"use strict";
const crypto = require("crypto");

// Generate a random 256-bit (32-byte) AES key
const AESkey = crypto.randomBytes(32);

// Generate a random 128-bit (16-byte) initialization vector (IV)
const iv = crypto.randomBytes(16);

const originalObject = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};
const textForEncrypt = JSON.stringify(originalObject);

// Encrypt the object using AES-256-CBC
const cipher = crypto.createCipheriv("aes-256-cbc", AESkey, iv);
let encrypted = cipher.update(textForEncrypt, "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted :", encrypted);

// Decrypt the encrypted data using AES-256-CBC
const decipher = crypto.createDecipheriv("aes-256-cbc", AESkey, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
const objectDecrypted = JSON.parse(decrypted);

console.log("Decrypted Object:", objectDecrypted);

