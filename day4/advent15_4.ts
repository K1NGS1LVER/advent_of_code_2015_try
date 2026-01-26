import crypto from "crypto";

let found: boolean = false;
let i: number = 0;

while (!found) {
  const hashed = crypto.createHash("md5").update(`bgvyzdsv${i}`).digest("hex");

  if (hashed.startsWith("00000")) {
    console.log(i);
    found = true;
  } else {
    i++;
  }
}
