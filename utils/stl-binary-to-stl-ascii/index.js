const stl = require("stl");
const fs = require("fs");

const facets = stl.toObject(fs.readFileSync("./space-invader.stl"));
fs.writeFileSync("./space-invader-ascii.stl", stl.fromObject(facets));
