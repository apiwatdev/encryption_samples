"use strict";
const crypto = require("crypto");

function encryptObject(text, aesKey, aesIv) {
  const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, aesIv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decryptObject(encryptObject, aesKey, aesIV) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, aesIV);
  let decrypted = decipher.update(encryptObject, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return JSON.parse(decrypted);
}


function run() {
  const aesKey = crypto.randomBytes(32);
  const aesIV = crypto.randomBytes(16);
  const originalObject = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  };
  const originalObjectText = JSON.stringify(originalObject);

  const objectEncrypted = encryptObject(originalObjectText, aesKey, aesIV);

  console.log("Encrypted :", objectEncrypted);

  const objectDecrypted = decryptObject(objectEncrypted, aesKey, aesIV);

  console.log("Decrypted Object:", objectDecrypted);
}

run();
