$NodeJS
   //fs model 
Commands in node REPL (interactive mode/read-evaluate-print loop). Run REPL
using`node`.
    //REPL stands for Read, Exicute, Print, Loop

```js
//tarminal command
const fs = require("fs");
fs.mkdirSync("foldername");
// Final argument is unnecessary if you do not want to handle errors
fs.writeFileSync("name", "content", (e) => console.log(e));
fs.appendFileSync("name", "content");//update file
fs.readFileSync("name"); // Returns Buffer<>, read file with the parformance
fs.readFileSync("name", "encoding"); // Decodes buffer into string (use "utf-8")
fs.renameSync("old", "new");
fs.unlinkSync("filename"); // Delete (can also use rmSync)                       
fs.rmdirSync("foldername"); // Delete folder
// .exit to exit repl
```
-
node index.js
-


$Creating modules for work with`require`:

```js
// require_test.js
class Test {
  print() {
    console.log("inside require_test.js");
  }
}

class Test2 {
  print() {
    console.log("not exported to other files");
  }
}

module.exports = Test;   //this is a expot class
```

```js
// index.js
const Test = require("./require_test.js");
const object = new Test();
object.print();
 // inside require_test.js
```


**THA

Study how to handle arguments and implement all above commands.
   >How to parse command line arguments:(syntax)
   domain.com/shoes?type=sneakers&sort=price_ascending
         //type:variable name or key
         //&:parameter separator
         //sneakers:value
         //?:start of the query string