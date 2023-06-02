"use strict";

const server_a = require("./server-a");
const server_b = require("./server-b");

const AMessage = "Say hi form A";
const BMessage = "Say hi form B";

console.log("================== A -> B ==============================");
console.log("Sever A the message for send to B server:", AMessage);
const AMessageEncrypted = server_a.encryptWithB(AMessage);
console.log("Encrypted : ", AMessageEncrypted);

const AMessageDecrypted = server_b.decrypt(AMessageEncrypted);
console.log("Decrypted : ", AMessageDecrypted);

console.log("================== B -> A ==============================");
console.log("Sever B the message for send to B server:", BMessage);
const BMessageEncrypted = server_a.encryptWithB(BMessage);
console.log("Encrypted :", BMessageEncrypted);

const BMessageDecrypted = server_b.decrypt(BMessageEncrypted);
console.log("Decrypted :", BMessageDecrypted);
