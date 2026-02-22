import fs from "fs"

fs.readFile("data.txt" , "utf8" , (err:NodeJS. , data)=>{
  console.log(data)
})
