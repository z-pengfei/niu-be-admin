// 导入jsencrypt库
import * as JSEncrypt from "jsencrypt";

// RSA密钥对
const privateKey =
  "MIICWgIBAAKBgFh+ySRMploTBczwtZNZvm0Bb+7/pij+fYJr3hlQszeX8OBYm+KM" +
  "fM5jzSryDYRwKHbC8PCK88zQDIlyGcpq0p5fNkFW6bDzzC7jZ35UMFjuuS4LH3Ll" +
  "JTLNNtZmsNnzz7VoQcNn1T47L0uryqLsoqnrJG5NpEoKrRXkFSyGmLz/AgMBAAEC" +
  "gYBWvLYTYRlvkdOOoqOl8EFoAA+hFmvbJE0KRwWilGmEZOVQTylDLOWrOUDABg1f" +
  "sLrIZJvZeKgrKAQRt4c10evq7TKltE/uJW2J4fWAuAe+xjJzC9RPjbmg1FY6F3C/" +
  "sg8OhtiObSbxUn4O/8IJICP+qb42IsYWvlp40FKA4b9myQJBAJwIIFB1rgrGx0jq" +
  "vGDG1akmj1C+fOSL/1+oU0VpD/kTMpgPgsHF2ut3aWgsz3df5j40GEY1elUuUljD" +
  "NBzCtX0CQQCRMYVcZy05tcioOCimzr3qqmdasE3X+ZGeRQQxhHc0Qxs+9hSUZDn9" +
  "SJEOF8hcscwlPt07jnsjQl938CcY1RUrAkBsigaYkdQY8P/uDEQwegBlI0qsm2Xb" +
  "wjtKOph6f0Q6Oo2GU7vcuZq5E58CdbF4VAChIrIEHO1VVdy4nEmi/BstAkBpADok" +
  "yA0B1kAFv49Oiub3pUJXaHbzQO4ZWmoc8WJPrlQu5UGeyxjQ3kDgwzxIJOCw8tSF" +
  "dJYCusZV85wirj6/AkBferMDU/soKguTIMMBQdy8aJsWCHcj5ErDxqKLXacPzaRD" +
  "N/LEi1EAAoReliO4v1Jyg99r0A6o87rWFCkr7p1Z";
const publicKey =
  "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFh+ySRMploTBczwtZNZvm0Bb+7/" +
  "pij+fYJr3hlQszeX8OBYm+KMfM5jzSryDYRwKHbC8PCK88zQDIlyGcpq0p5fNkFW" +
  "6bDzzC7jZ35UMFjuuS4LH3LlJTLNNtZmsNnzz7VoQcNn1T47L0uryqLsoqnrJG5N" +
  "pEoKrRXkFSyGmLz/AgMBAAE=";

// 加密数据
const encryptData = (data: string, publicKey: string) => {
  const encryptor = new JSEncrypt.JSEncrypt();
  encryptor.setPublicKey(publicKey);
  const encrypted = encryptor.encrypt(data);
  return encrypted as string;
};

// 解密数据
const decryptData = (encryptedData: string, privateKey: string) => {
  const decryptor = new JSEncrypt.JSEncrypt();
  decryptor.setPrivateKey(privateKey);
  const decrypted = decryptor.decrypt(encryptedData);
  return decrypted as string;
};

// 使用公钥加密数据
export const encrypt = (data: string) => {
  return encryptData(data, publicKey) as string;
};

// 使用私钥解密数据
export const decrypt = (data: string) => {
  return decryptData(data, privateKey);
};
