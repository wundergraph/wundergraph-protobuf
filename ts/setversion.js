var gitVersion = require('git-tag-version');
var fs = require("fs");

console.log("setting version to: " + gitVersion());

const packageJSON = JSON.parse(fs.readFileSync("package.json").toString());
console.log(packageJSON);

packageJSON.version = gitVersion();

fs.writeFileSync("package.json",JSON.stringify(packageJSON,null,"  "));