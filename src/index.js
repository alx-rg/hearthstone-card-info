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
        while (_) try {
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
/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
var axios = require("axios");
require('dotenv').config();
var myApiKey = process.env.MYAPIKEY;
var HearthstoneInfo = /** @class */ (function () {
    function HearthstoneInfo(apiKey) {
        this.apiKey = apiKey;
    }
    HearthstoneInfo.prototype.getFileInfo = function (lookup) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            method: 'GET',
                            url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/".concat(lookup),
                            headers: {
                                'X-RapidAPI-Key': this.apiKey,
                                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
                            }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, axios.request(options)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HearthstoneInfo.prototype.getSingleCard = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var cardInfo, cleanData, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getFileInfo("cards/".concat(card))];
                    case 1:
                        cardInfo = _a.sent();
                        cleanData = cardInfo.map(function (e) {
                            var name = e.name, img = e.img, flavor = e.flavor;
                            return {
                                name: name,
                                img: img,
                                flavor: flavor
                            };
                        });
                        // console.log(cleanData)
                        return [2 /*return*/, cleanData];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HearthstoneInfo.prototype.getRaceCard = function (race) {
        return __awaiter(this, void 0, void 0, function () {
            var raceInfo, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getFileInfo("cards/races/".concat(race))];
                    case 1:
                        raceInfo = _a.sent();
                        return [4 /*yield*/, raceInfo
                            // console.log(data)
                        ];
                    case 2:
                        data = _a.sent();
                        // console.log(data)
                        return [2 /*return*/, data];
                    case 3:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HearthstoneInfo.prototype.getTypeCard = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var typeInfo, data, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getFileInfo("cards/types/".concat(type))];
                    case 1:
                        typeInfo = _a.sent();
                        return [4 /*yield*/, typeInfo
                            // console.log(data)
                        ];
                    case 2:
                        data = _a.sent();
                        // console.log(data)
                        return [2 /*return*/, data];
                    case 3:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HearthstoneInfo.prototype.getFactionCard = function (faction) {
        return __awaiter(this, void 0, void 0, function () {
            var factionInfo, data, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getFileInfo("cards/factions/".concat(faction))];
                    case 1:
                        factionInfo = _a.sent();
                        return [4 /*yield*/, factionInfo
                            // console.log(data)
                        ];
                    case 2:
                        data = _a.sent();
                        // console.log(data)
                        return [2 /*return*/, data];
                    case 3:
                        err_5 = _a.sent();
                        console.error(err_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return HearthstoneInfo;
}());
var hsinfo = new HearthstoneInfo(myApiKey);
// hsinfo.getFileInfo("info").then(data => console.log(data))
// console.log(hsinfo.getFileInfo("info"))
// hsinfo.getSingleCard("Leeroy Jenkins").then(data => console.log(data[5]))
// console.log(hsinfo.getRaceCard("Pirate"))
// hsinfo.getRaceCard("Pirate").then(data => console.log(data[1]))
// console.log(hsinfo.getTypeCard("Minion"))
hsinfo.getTypeCard("Minion").then(function (data) { return console.log(data[0]); });
// console.log(hsinfo.getFactionCard("Neutral"))
hsinfo.getFactionCard("Neutral").then(function (data) { return console.log(data[0]); });
module.exports = HearthstoneInfo;
