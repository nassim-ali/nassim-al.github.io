// test.js

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Charger le contenu de la page HTML
const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

// Initialiser JSDOM
const { window } = new JSDOM(html);
global.document = window.document;

// Tester si un élément est présent sur la page HTML
test("Vérifier la présence d'un élément", () => {
  const element = document.querySelector(".mon-element");
  expect(element).toBeTruthy();
});
