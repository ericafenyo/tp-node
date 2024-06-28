const http = require("http");
const https = require("https");
const { readFileSync } = require("fs");
const { resolve } = require("path");

function app(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      id: "7798ac29-7658-4208-84ad-1a43a7227a34",
      firstName: "Didier",
      lastName: "N'Diaye",
      birthDate: "1986-07-15",
      email: "didier.ndiaye@yopmail.com",
      photoUrl: "https://example.com/didier-ndiaye.jpg",
      createdAt: "2024-06-21T11:56:41.202459Z",
      updatedAt: "2024-06-21T11:56:41.202459Z",
      address: {
        id: "3a2a0acb-0fd3-41ce-8284-2d67471f7135",
        street: "45 Rue de Bonnel",
        postalCode: "69003",
        city: "Lyon",
        country: "France",
      },
    })
  );
}

http.createServer(app).listen(8080);
