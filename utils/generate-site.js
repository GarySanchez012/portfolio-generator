const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      //if there's an error, reject the Promise and send the error to the Promise's `.catch()` methid
      if (err) {
        reject(err);
        //return out of the function here to make sure the Promise doesn't accidently execute the resolve() function as well
        return;
      }

      //if everything went well, resolve the Promise and send the successfull data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile(
      "./src/module-9-stylesheet/style.css",
      "./dist/style.css",
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Style sheet copied successfully!",
        });
      }
    );
  });
};

//instead of writing property and its value as the same name we can just write it once and ES6 will assume the one instance written will be used for both the property and value
module.exports = {writeFile, copyFile};
