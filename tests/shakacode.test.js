const assert = require("node:assert/strict");
const { execFile } = require("node:child_process");
const path = require("node:path");
const test = require("node:test");
const { promisify } = require("node:util");

const execFileAsync = promisify(execFile);

test("CLI prints official ShakaCode links", async () => {
  const cliPath = path.join(__dirname, "..", "bin", "shakacode.js");
  const { stdout } = await execFileAsync(process.execPath, [cliPath]);

  assert.match(stdout, /Official ShakaCode npm package/);
  assert.match(stdout, /https:\/\/github\.com\/shakacode/);
  assert.match(stdout, /https:\/\/www\.npmjs\.com\/org\/shakacode/);
});

