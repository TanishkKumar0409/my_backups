import http from "http";
import fs from "fs";

const app = http.createServer((req, res) => {
  const log = `at ${Date.now()} You Received a new Request from ${req.url}\n`;
  if (req.url !== "/favicon.ico") {
    fs.appendFile("log.txt", log, (error) => {
      if (error) {
        console.log({ error: error.message });
      } else {
        return res.end("Hello I am Start");
      }
    });
  }
});

app.listen(5000, () => console.log("Server Start"));
