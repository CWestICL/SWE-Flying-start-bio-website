import server from "http";
import fs from "fs";

const PORT = 8080;

fs.readFile("./public/index.html", function (err, html) {
  if (err) throw err;

  server
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(PORT, () =>
      console.log(`You can find your website at http://localhost:${PORT}`)
    );
});
