const http = require("http");
const https = require("https");
const { readFileSync } = require("fs");
const { resolve } = require("path");

function app(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify([
      {
        id: "f8c9bd3a-e561-4cb7-9d95-763942388777",
        name: "ADMINISTRATOR",
        slug: "administrator",
        description: "Manages all aspects within a specific team.",
      },
      {
        id: "3bca1db5-37ee-4b25-a404-ff615a4d6945",
        name: "COORDINATOR",
        slug: "coordinator",
        description: "Manages care activities and schedules within a team.",
      },
      {
        id: "b40391c6-5f82-4740-9fb9-525d9c7e49a0",
        name: "CONSULTANT",
        slug: "consultant",
        description:
          "Provides expert care, advice, and guidance, with read and comment access to most resources.",
      },
      {
        id: "6409a170-1639-4cfc-81ed-9dd7bcd007b2",
        name: "AID",
        slug: "aid",
        description:
          "Provides direct care with access to tasks and reminders relevant to their responsibilities.",
      },
    ])
  );
}

http
  .createServer((req, res) => {
    /* redirection sur https */
  })
  .listen(8080);
https
  .createServer(
    {
      cert: readFileSync(resolve("ssl", "default.crt")),
      key: readFileSync(resolve("ssl", "default.key")),
    },
    app
  )
  .listen(4433);
