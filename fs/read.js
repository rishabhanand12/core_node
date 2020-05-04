var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
fs.readFile(`./theory.md`,(err,data) => {
  if(err) {
    console.log(err);
  } else  {
   console.log(data);
  }
})
// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.

fs.readFile("./theory.md",(err,data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
})
// 3. Write script to read file Synchronously and console the output.
var data = fs.readFileSync("./theory.md");
console.log(data);

// 4. Write script to create a file 'write.js' and write content of read.js in there.
function requestHander(req, res) {
  fs.readFile('./read.js', (err, data) => {
    fs.writeFile('write.js', data, (err) => {
      console.log(err);
      res.end("File Written Successfully")
    });  
  })
}

server.listen(3000);

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

// 6. Delete the content of write.js using fs.unlink or unlinkSync method
const server = http.createServer(requestHander);
const fd = fs.openSync('./write.js', 'r+');

function requestHander(req, res) {
  fs.open('./write.js', 'r+', (err, data) => {
    if (err) return console.log(err);
    fs.ftruncate(fd, (err) => {
      console.log(err);
      fs.writeFile('./write.js', 'I am Updated', (err) => {
        console.log(err);
        fs.close(fd, (err) => {
          res.end("File Updated")
        })
      })
    });  
  })
}

server.listen(3000);
// 6. Delete the content of write.js using fs.unlink or unlinkSync method

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  fs.unlink("./write.js", (err) => {
    console.log(err);
    res.end("File Deleted Successfully")
  })
}

server.listen(3000);