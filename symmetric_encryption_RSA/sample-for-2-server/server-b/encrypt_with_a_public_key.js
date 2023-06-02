"use strict";
const crypto = require("crypto");
const fs = require("fs");
const publicKey_A_server = fs.readFileSync(
  __dirname + "/partner-keys/public_key_server_A.pem"
);

function encryptWithA(data) {
  const encryptedData = crypto.publicEncrypt(
    publicKey_A_server,
    Buffer.from(data, "utf8")
  );
  const encryptedDataBase64 = encryptedData.toString("base64");
  return encryptedDataBase64;
}

module.exports = { encryptWithA };
