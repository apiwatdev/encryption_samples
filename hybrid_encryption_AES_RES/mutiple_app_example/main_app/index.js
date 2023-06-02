"use strict";
const fs = require("fs");
const crypto = require("crypto");
// const publicKey = fs.readFileSync(__dirname + "/keys/public_key", "utf8");

function encryptDataWithAES(data, aesKey, aesIv) {
  const dataStr = JSON.stringify(data);
  const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, aesIv);

  let encryptedData = cipher.update(dataStr, "utf8", "hex");
  encryptedData += cipher.final("hex");

  return encryptedData;
}

function decryptData(encryptedData, encryptedAESKey, aesIv, appName) {
  const privateKey = fs.readFileSync(
    __dirname + "/keys/" + appName + "/private_key.pem",
    "utf8"
  );
  const decryptedAESKey = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedAESKey, "base64")
  );
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    decryptedAESKey,
    aesIv
  );
  let decryptedData = decipher.update(encryptedData, "hex", "utf8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}

module.exports = {
  //   encryptData,
  encryptDataWithAES,
  decryptData,
};
