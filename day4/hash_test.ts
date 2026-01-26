import crypto from "crypto";

let hash = crypto.createHash("md5").update("bgvyzdsv").digest("hex");

console.log(typeof hash);
