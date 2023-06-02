"use strict";
const crypto = require("crypto");
const fs = require("fs");
const privateKey_A_server = fs.readFileSync(__dirname+ "/keys/private_key_server_A.pem");

function decrypt(encryptedData) {
  const decryptedData = crypto.privateDecrypt(
    privateKey_A_server,
    Buffer.from(encryptedData, "base64")
  );
  return decryptedData.toString("utf8");
}

module.exports = { decrypt };
