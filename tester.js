const fs = require("fs");
let dbURI;
function readContent(callback) {
  fs.readFile("./dbURI.txt", "utf8", function (err, content) {
    if (err) return callback(err);
    callback(null, content);
  });
}

readContent(function (err, content) {
  console.log(content);
});
