import http from "http";

const app = http.createServer((req, res) => {
  console.log("Requested");
  res.end("Hello i am Server");
});

app.listen(5000, () => console.log(`Server Running at http://localhost:5000`));
