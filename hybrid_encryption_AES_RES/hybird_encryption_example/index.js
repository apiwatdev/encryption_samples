"use strict";
const crypto = require("crypto");
const fs = require("fs");

const aesKey = crypto.randomBytes(32);
const aesIv = crypto.randomBytes(16);
const publicKey = fs.readFileSync(__dirname + "/keys/public_key.pem", "utf8");
const privateKey = fs.readFileSync(__dirname + "/keys/private_key.pem", "utf8");

const encryptedAESKey = crypto.publicEncrypt(
  publicKey,
  Buffer.from(aesKey, "utf8")
).toString("base64");

const data = {
  name: "Apiwat Dev",
  age: 27,
};

const dataStr = JSON.stringify(data);

const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, aesIv);

let encryptedData = cipher.update(dataStr, "utf8", "hex");
encryptedData += cipher.final("hex");
console.log("--------------- Encrypted -------------------")
console.log("AES key: ", aesKey.toString("base64"));
console.log("AES key encrypted: ", encryptedAESKey);
console.log("Data encrypted: ", encryptedData);


const decryptedAESKey = crypto.privateDecrypt(privateKey, Buffer.from(encryptedAESKey, "base64"))
const decipher = crypto.createDecipheriv("aes-256-cbc", decryptedAESKey, aesIv)
let decryptedData = decipher.update(encryptedData, "hex", "utf8")
decryptedData += decipher.final("utf8")
const objectDecrypted = JSON.parse(decryptedData);
console.log("--------------- Decrypted -------------------")
console.log("AES key decrypted: ", decryptedAESKey.toString("base64"));
console.log("Data decrypted: ", objectDecrypted);




