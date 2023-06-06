# Encryption Samples

This repository contains code samples and examples related to different encryption techniques, including asymmetric, symmetric, and hybrid encryption. It also includes a sample project and utility files.


## What is? 
ใน Repository นี้ ผมการเขียนตัวอย่างการ encryption ด้วย Nodejs โดยจะมีการใช้วิธีการ encrypttion อยู่ 3 แบบคือ Asymmetric, Symmetric และ Hybrid encrytion ซึ่งใช้ในกระบวนการเข้ารหัสข้อมูลที่แตกต่างกัน. สำหรับ Asymmetric encryption ผมจะใช้ จะใช้ RSA (Rivest-Shamir-Adleman) algorithm. สำหรับ Symmetric encryption algorithm จะใช้ AES (Advanced Encryption Standard) และ Hybrid จะใช้ AES และ RSA ร่วมกันในกระบวนการเข้ารหัสข้อมูล 

### Symmetric Encrytion คืออะไร?
Symmetric encryption (การเข้ารหัสแบบสมมาตร) เป็นกระบวนการเข้ารหัสข้อมูลที่ใช้คีย์ส่วนเดียวเพื่อเข้ารหัสและถอดรหัสข้อมูล คีย์ส่วนเดียวนี้จะถูกใช้ทั้งในกระบวนการ encrypt(เข้ารหัส)และ decryt (การถอดรหั
ส) ซึ่งทำให้การส่งข้อมูลระหว่างผู้ส่งและผู้รับที่ใช้คีย์เดียวกันเป็นเรื่องง่ายและรวดเร็วกว่า อย่างไรก็ตาม การใช้ Symmetric encryption ต้องมีการแบ่งแยกและจัดการคีย์อย่างปลอดภัยเนื่องจากคีย์ส่วนเดียวที่ใช้ในการเข้ารหัสและถอดรหัสเหมือนกัน

![encryption_diagram drawio (1)](https://github.com/apiwatdev/encryption_samples/assets/82103342/3b171e56-b518-4166-86f1-c70678c081ba)

### Asymmetric Encrytion คืออะไร?
Asymmetric encryption (การเข้ารหัสแบบอสมมิติ) เป็นกระบวนการเข้ารหัสข้อมูลที่ใช้คู่กุญแจสองส่วนที่แตกต่างกัน ประกอบด้วยคีย์สาธารณะ (public key) และคีย์ส่วนตัว (private key) โดยที่ public key สามารถแจกจ่ายได้อย่างเสรีให้กับผู้อื่น ซึ่งใช้สำหรับการเข้ารหัสข้อมูล ส่วน private key จะถูกเก็บเป็นความลับและใช้สำหรับการถอดรหัสข้อมูลที่ถูกเข้ารหัสไว้ การใช้ Asymmetric encryption ช่วยให้เราสามารถส่งข้อมูลไปยังผู้รับโดยปลอดภัยโดยไม่ต้องกังวลเรื่องความลับของคีย์ส่วนตัว

![encryption_diagram drawio](https://github.com/apiwatdev/encryption_samples/assets/82103342/0baeadb7-1d70-4706-9c25-6d55db00f6f7)


### Hybrid Encrytion คืออะไร?
Hybrid encryption (การเข้ารหัสแบบผสมผสาน) เป็นกระบวนการเข้ารหัสข้อมูลที่ใช้การผสมผสานระหว่าง Asymmetric encryption และ Symmetric encryption ในกระบวนการเข้ารหัสและถอดรหัส ในกระบวนการ Hybrid encryption เราจะใช้ Asymmetric encryption เพื่อเข้ารหัส Symmetric key (คีย์สมมาตร) และ Symmetric encryption เพื่อเข้ารหัสข้อมูลที่จะถูกส่งไปยังผู้รับ นั่นคือเราจะใช้ Asymmetric encryption เพื่อเข้ารหัสคีย์สมมาตรและใช้ Symmetric encryption เพื่อเข้ารหัสข้อมูลจริงที่จะถูกส่งผ่านเครือข่าย

> การใช้ฟังก์ชั่น hash เข้ามาช่วยในกระบวนการเข้ารหัสช่วยให้เราสามารถยืนยันได้ว่าข้อมูลที่ถูกส่งผ่านเครือข่ายไม่ถูกแก้ไขระหว่างทาง **

## Folder Structure

- `asymmetric_encryption_AES`: Contains code samples and resources related to asymmetric encryption using AES algorithm.
- `symmetric_encryption_RSA`: Contains code samples and resources related to symmetric encryption using RSA algorithm.
- `hybrid_encryption_AES_RES`: Contains code samples and resources related to hybrid encryption combining AES and RSA algorithms.
- `sample_project`: Contains a sample project demonstrating the use of hybrid encryption.
  - `server_using_hybrid_encryption`: Contains server-side code demonstrating the implementation of hybrid encryption in a server application.
- `utils`: Contains utility files and scripts.
  - `genKeyPair.js`: A utility script for generating key pairs for encryption.

## Usage

You can explore each folder to find code samples, resources, and instructions related to specific encryption techniques. The `sample_project` folder provides a complete sample project showcasing the usage of hybrid encryption in a server application. The `utils` folder contains the `genKeyPair.js` script, which can be used to generate key pairs for encryption purposes.

Feel free to explore, modify, and use the code samples and resources in this repository according to your needs.

## License

This repository is licensed under the [MIT License](LICENSE).

