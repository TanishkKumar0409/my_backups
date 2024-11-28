import http from "http";
import fs from "fs"

const app = http.createServer((req, res) => {
  res.end("Hello i am Server");
});

app.listen(5000, () => console.log(`Server Running at http://localhost:5000`));
