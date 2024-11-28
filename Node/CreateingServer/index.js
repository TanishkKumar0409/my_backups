import http from "http";
import fs from "fs";

const app = http.createServer((req, res) => {
  const log = `You got a request from ${req.url} at ${Date.now()}`;
  fs.appendFile("log.txt", log, () => {});
  res.end("Hello i am Server");
});

app.listen(5000, () => console.log(`Server Running at http://localhost:5000`));
