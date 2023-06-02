"use strict";
const crypto = require("crypto");
const fs = require("fs");
const publicKey_B_server = fs.readFileSync(
  __dirname + "/partner-keys/public_key_server_B.pem"
);

function encryptWithB(data) {
  const encryptedData = crypto.publicEncrypt(
    publicKey_B_server,
    Buffer.from(data, "utf8")
  );
  const encryptedDataBase64 = encryptedData.toString("base64");
  return encryptedDataBase64;
}

module.exports = { encryptWithB };
