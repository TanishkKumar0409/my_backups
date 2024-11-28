import http from "http";
import fs from "fs";

const app = http.createServer((req, res) => {
  const now = new Date();

  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();

  switch (req.url) {
    case "/":
      var page = "homePage";
      break;

    default:
      var page = "404 Page Not Found";
      break;
  }

  const log = `You got a request from ${page} on ${date} at ${time}.\n`;

  if (req.url !== "/favicon.ico") {
    if (log) {
      fs.appendFile("log.txt", log, (error) => {
        if (!error) {
          res.end("Hello i am Server");
        } else if (error) {
          res.end(error.message);
        }
      });
    } else {
      res.end("There are no Request");
    }
  }
});

app.listen(5000, () => console.log(`Server Running at http://localhost:5000`));
