"use strict";
const app1 = require("./app_1");
const app2 = require("./app_2");
const mainApp = require("./main_app");

console.log("---------------- app1 -> main_app --------------");
const dataFormApp1 = {
  name: "Apiwat App1",
  age: 27,
};
const app1Encrypted = app1.encryptData(dataFormApp1);

const decryptDataApp1 = mainApp.decryptData(
  app1Encrypted.encryptedData,
  app1Encrypted.encryptedAESKey,
  app1Encrypted.aesIv,
  "app_1"
);

console.log("Encrypt Key App 1 : ", app1Encrypted.encryptedAESKey);
console.log("Encrypt Data App 1 : ", app1Encrypted.encryptedData);
console.log("Decrypt Data App 1 : ", decryptDataApp1);

console.log("\n---------------- app2 -> main_app --------------");

const dataFormApp2 = {
  name: "Apiwat App2",
  age: 27,
};
const app2Encrypted = app2.encryptData(dataFormApp2);

const decryptDataApp2 = mainApp.decryptData(
  app2Encrypted.encryptedData,
  app2Encrypted.encryptedAESKey,
  app2Encrypted.aesIv,
  "app_2"
);

console.log("Encrypt Key App 2 : ", app2Encrypted.encryptedAESKey);
console.log("Encrypt Data App 2 : ", app2Encrypted.encryptedData);
console.log("Decrypt Data App 2 : ", decryptDataApp2);

console.log("\n---------------- main app response --------------");
const mainAppResponse = {
  result: "I am main app",
};

const mainAppResponseEncryptDataApp1 = mainApp.encryptDataWithAES(
  mainAppResponse,
  app1Encrypted.aesKey,
  app1Encrypted.aesIv
);
const mainAppResponseEncryptDataApp2 = mainApp.encryptDataWithAES(
  mainAppResponse,
  app2Encrypted.aesKey,
  app2Encrypted.aesIv
);

console.log(
  "Main app encrypted response for app1:",
  mainAppResponseEncryptDataApp1
);
console.log(
  "Main app encrypted response for app2:",
  mainAppResponseEncryptDataApp2
);

const mainAppResponseApp1 = app1.decryptData(
  mainAppResponseEncryptDataApp1,
  app1Encrypted.aesKey,
  app1Encrypted.aesIv
);

const mainAppResponseApp2 = app1.decryptData(
  mainAppResponseEncryptDataApp2,
  app2Encrypted.aesKey,
  app2Encrypted.aesIv
);

console.log("Decrypt main app response for app1", mainAppResponseApp1);
console.log("Decrypt main app response for app2", mainAppResponseApp2);
