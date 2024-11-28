import http from "http";
import fs from "fs";

const app = http.createServer((req, res) => {
  const log = `You got a request from ${req.url} at ${Date.now()}`;
  fs.appendFile("log.txt", log, (error) => {
    if (!error) {
      res.end("Hello i am Server");
    } else if (error) {
      res.end(error.message);
    }
  });
});

app.listen(5000, () => console.log(`Server Running at http://localhost:5000`));
