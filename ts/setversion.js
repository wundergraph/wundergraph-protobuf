var gitVersion = require('git-tag-version');
var fs = require("fs");

console.log("setting version to: " + gitVersion());

const packageJSON = JSON.parse(fs.readFileSync("package.json").toString());
packageJSON.version = gitVersion();
delete packageJSON.scripts.postinstall;

fs.writeFileSync("package.json",JSON.stringify(packageJSON,null,"  "));
