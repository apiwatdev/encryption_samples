"use strict";
const fs = require("fs");
const crypto = require("crypto")
const publicKey = fs.readFileSync(__dirname + "/keys/public_key.pem", "utf8");

function encryptData(data) {
  const aesKey = crypto.randomBytes(32);
  const aesIv = crypto.randomBytes(16);
  const encryptedAESKey = crypto
    .publicEncrypt(publicKey, Buffer.from(aesKey, "utf8"))
    .toString("base64");

  const dataStr = JSON.stringify(data);

  const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, aesIv);

  let encryptedData = cipher.update(dataStr, "utf8", "hex");
  encryptedData += cipher.final("hex");

  return {
    encryptedAESKey,
    aesKey,
    aesIv,
    encryptedData,
  };
}

function decryptData(encryptedData, aesIv, aesKey) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, aesIv);
  let decryptedData = decipher.update(encryptedData, "hex", "utf8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}

module.exports = {
  encryptData,
  decryptData,
};
