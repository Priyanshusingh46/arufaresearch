"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.hasOnly = void 0;
var ava_1 = __importDefault(require("ava"));
var fs_1 = require("fs");
var lodash_1 = require("lodash");
var path_1 = require("path");
var src_1 = require("../src");
var utils_1 = require("../src/utils");
var dir = __dirname + '/e2e';
function hasOnly() {
    return (0, fs_1.readdirSync)(dir)
        .filter(function (_) { return /^.*\.js$/.test(_); })
        .map(function (_) { return require((0, path_1.join)(dir, _)); })
        .some(function (_) { return _.only; });
}
exports.hasOnly = hasOnly;
function run() {
    // [filename, absolute dirname, contents][]
    var modules = (0, fs_1.readdirSync)(dir)
        .filter(function (_) { return !_.includes('.ignore.'); })
        .filter(function (_) { return /^.*\.js$/.test(_); })
        .map(function (_) { return [_, require((0, path_1.join)(dir, _))]; });
    // exporting `const only=true` will only run that test
    // exporting `const exclude=true` will not run that test
    var only = (0, lodash_1.find)(modules, function (_) { return Boolean(_[1].only); });
    if (only) {
        runOne(only[1], only[0]);
    }
    else {
        modules.filter(function (_) { return !_[1].exclude; }).forEach(function (_) { return runOne(_[1], _[0]); });
    }
}
exports.run = run;
function runOne(exports, name) {
    var _this = this;
    (0, utils_1.log)('blue', 'Running test', name);
    (0, ava_1.default)(name, function (t) { return __awaiter(_this, void 0, void 0, function () {
        var e_1, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!exports.error) return [3 /*break*/, 5];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, src_1.compile)(exports.input, (0, utils_1.stripExtension)(name), exports.options)];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _c.sent();
                    t.true(e_1 instanceof Error);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 7];
                case 5:
                    _b = (_a = t).snapshot;
                    return [4 /*yield*/, (0, src_1.compile)(exports.input, (0, utils_1.stripExtension)(name), exports.options)];
                case 6:
                    _b.apply(_a, [_c.sent(), "Expected output to match snapshot for e2e test: ".concat(name)]);
                    _c.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); });
}
//# sourceMappingURL=testE2E.js.map