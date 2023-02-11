"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testCLI_1 = require("./testCLI");
var testCompileFromFile_1 = require("./testCompileFromFile");
var testE2E_1 = require("./testE2E");
var testIdempotence_1 = require("./testIdempotence");
var testLinker_1 = require("./testLinker");
var testNormalizer_1 = require("./testNormalizer");
var testUtils_1 = require("./testUtils");
(0, testE2E_1.run)();
if (!(0, testE2E_1.hasOnly)()) {
    (0, testCompileFromFile_1.run)();
    (0, testCLI_1.run)();
    (0, testIdempotence_1.run)();
    (0, testLinker_1.run)();
    (0, testNormalizer_1.run)();
    (0, testUtils_1.run)();
}
//# sourceMappingURL=test.js.map