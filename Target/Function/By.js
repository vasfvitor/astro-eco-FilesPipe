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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function `By` takes in a file pattern or an array of file patterns, a set of input and output paths, and a map of results, and returns the updated map of results after matching the file patterns with the input paths.
 *
 * @param {Pattern | Pattern[]} File - The `File` parameter is either a single file pattern or an array of file patterns. These patterns are used to match files in the input directory (`Input`) that will be processed.
 *
 * @param Paths - Paths is an array of tuples that represent the input and output paths. Each tuple contains two elements: the input path and the output path.
 *
 * @param Results - The `Results` parameter is a Map object that stores the mapping between the output file paths and their corresponding input file paths. It is used to keep track of the files that have been processed and their respective destinations.
 *
 * @returns {Results}
 *
 */
exports.default = (function (File, Paths, Results) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, Paths_1, _a, Input, Output, _b, _c, _File;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _i = 0, Paths_1 = Paths;
                _d.label = 1;
            case 1:
                if (!(_i < Paths_1.length)) return [3 /*break*/, 7];
                _a = Paths_1[_i], Input = _a[0], Output = _a[1];
                _b = 0;
                return [4 /*yield*/, Promise.resolve().then(function () { return require("fast-glob"); })];
            case 2: return [4 /*yield*/, (_d.sent()).default(File, {
                    cwd: Input,
                    onlyFiles: true,
                })];
            case 3:
                _c = _d.sent();
                _d.label = 4;
            case 4:
                if (!(_b < _c.length)) return [3 /*break*/, 6];
                _File = _c[_b];
                Results.set("".concat(Output).concat(_File), "".concat(Input).concat(_File));
                _d.label = 5;
            case 5:
                _b++;
                return [3 /*break*/, 4];
            case 6:
                _i++;
                return [3 /*break*/, 1];
            case 7: return [2 /*return*/, Results];
        }
    });
}); });
