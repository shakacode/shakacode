#!/usr/bin/env node

const links = [
  ["Website", "https://www.shakacode.com/"],
  ["GitHub", "https://github.com/shakacode"],
  ["npm org", "https://www.npmjs.com/org/shakacode"],
  ["React on Rails", "https://github.com/shakacode/react_on_rails"],
  ["Shakapacker", "https://github.com/shakacode/shakapacker"],
];

console.log("ShakaCode");
console.log("Official ShakaCode npm package.");
console.log("");
console.log("Verified links:");

for (const [label, url] of links) {
  console.log(`- ${label}: ${url}`);
}

