/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});



$root.unleash = (function() {

    /**
     * Namespace unleash.
     * @exports unleash
     * @namespace
     */
    var unleash = {};

    unleash.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof unleash
         * @namespace
         */
        var v1 = {};

        /**
         * UnleashPlayerStatus enum.
         * @name unleash.v1.UnleashPlayerStatus
         * @enum {number}
         * @property {number} RPS_HALTING=0 RPS_HALTING value
         * @property {number} RPS_RUNNING=1 RPS_RUNNING value
         * @property {number} RPS_DEAD=2 RPS_DEAD value
         * @property {number} RPS_WIN=3 RPS_WIN value
         * @property {number} RPS_LOSE=4 RPS_LOSE value
         */
        v1.UnleashPlayerStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RPS_HALTING"] = 0;
            values[valuesById[1] = "RPS_RUNNING"] = 1;
            values[valuesById[2] = "RPS_DEAD"] = 2;
            values[valuesById[3] = "RPS_WIN"] = 3;
            values[valuesById[4] = "RPS_LOSE"] = 4;
            return values;
        })();

        v1.UnleashConfig = (function() {

            /**
             * Properties of an UnleashConfig.
             * @memberof unleash.v1
             * @interface IUnleashConfig
             * @property {number|null} [speed] UnleashConfig speed
             * @property {number|null} [maxGameDuration] UnleashConfig maxGameDuration
             */

            /**
             * Constructs a new UnleashConfig.
             * @memberof unleash.v1
             * @classdesc Represents an UnleashConfig.
             * @implements IUnleashConfig
             * @constructor
             * @param {unleash.v1.IUnleashConfig=} [properties] Properties to set
             */
            function UnleashConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UnleashConfig speed.
             * @member {number} speed
             * @memberof unleash.v1.UnleashConfig
             * @instance
             */
            UnleashConfig.prototype.speed = 0;

            /**
             * UnleashConfig maxGameDuration.
             * @member {number} maxGameDuration
             * @memberof unleash.v1.UnleashConfig
             * @instance
             */
            UnleashConfig.prototype.maxGameDuration = 0;

            /**
             * Creates a new UnleashConfig instance using the specified properties.
             * @function create
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {unleash.v1.IUnleashConfig=} [properties] Properties to set
             * @returns {unleash.v1.UnleashConfig} UnleashConfig instance
             */
            UnleashConfig.create = function create(properties) {
                return new UnleashConfig(properties);
            };

            /**
             * Encodes the specified UnleashConfig message. Does not implicitly {@link unleash.v1.UnleashConfig.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {unleash.v1.IUnleashConfig} message UnleashConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.speed);
                if (message.maxGameDuration != null && Object.hasOwnProperty.call(message, "maxGameDuration"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxGameDuration);
                return writer;
            };

            /**
             * Encodes the specified UnleashConfig message, length delimited. Does not implicitly {@link unleash.v1.UnleashConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {unleash.v1.IUnleashConfig} message UnleashConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnleashConfig message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.UnleashConfig} UnleashConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashConfig.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.UnleashConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.speed = reader.int32();
                            break;
                        }
                    case 2: {
                            message.maxGameDuration = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnleashConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.UnleashConfig} UnleashConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnleashConfig message.
             * @function verify
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnleashConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.speed != null && message.hasOwnProperty("speed"))
                    if (!$util.isInteger(message.speed))
                        return "speed: integer expected";
                if (message.maxGameDuration != null && message.hasOwnProperty("maxGameDuration"))
                    if (!$util.isInteger(message.maxGameDuration))
                        return "maxGameDuration: integer expected";
                return null;
            };

            /**
             * Creates an UnleashConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.UnleashConfig} UnleashConfig
             */
            UnleashConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.UnleashConfig)
                    return object;
                var message = new $root.unleash.v1.UnleashConfig();
                if (object.speed != null)
                    message.speed = object.speed | 0;
                if (object.maxGameDuration != null)
                    message.maxGameDuration = object.maxGameDuration | 0;
                return message;
            };

            /**
             * Creates a plain object from an UnleashConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {unleash.v1.UnleashConfig} message UnleashConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnleashConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.speed = 0;
                    object.maxGameDuration = 0;
                }
                if (message.speed != null && message.hasOwnProperty("speed"))
                    object.speed = message.speed;
                if (message.maxGameDuration != null && message.hasOwnProperty("maxGameDuration"))
                    object.maxGameDuration = message.maxGameDuration;
                return object;
            };

            /**
             * Converts this UnleashConfig to JSON.
             * @function toJSON
             * @memberof unleash.v1.UnleashConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnleashConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UnleashConfig
             * @function getTypeUrl
             * @memberof unleash.v1.UnleashConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UnleashConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.UnleashConfig";
            };

            return UnleashConfig;
        })();

        v1.GameInfo = (function() {

            /**
             * Properties of a GameInfo.
             * @memberof unleash.v1
             * @interface IGameInfo
             * @property {unleash.v1.IUnleashConfig|null} [config] GameInfo config
             * @property {number|null} [status] GameInfo status
             * @property {number|null} [betAmount] GameInfo betAmount
             * @property {Array.<number>|null} [scores] GameInfo scores
             * @property {number|Long|null} [firstBeginTime] GameInfo firstBeginTime
             * @property {number|Long|null} [stepBeginTime] GameInfo stepBeginTime
             * @property {number|Long|null} [stepPauseTime] GameInfo stepPauseTime
             * @property {number|Long|null} [winnerId] GameInfo winnerId
             * @property {number|Long|null} [winCoin] GameInfo winCoin
             * @property {Array.<number|Long>|null} [deadIds] GameInfo deadIds
             * @property {boolean|null} [stepWarned] GameInfo stepWarned
             * @property {number|Long|null} [prize] GameInfo prize
             * @property {number|Long|null} [endGameTime] GameInfo endGameTime
             * @property {number|Long|null} [firstPlayerId] GameInfo firstPlayerId
             */

            /**
             * Constructs a new GameInfo.
             * @memberof unleash.v1
             * @classdesc Represents a GameInfo.
             * @implements IGameInfo
             * @constructor
             * @param {unleash.v1.IGameInfo=} [properties] Properties to set
             */
            function GameInfo(properties) {
                this.scores = [];
                this.deadIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameInfo config.
             * @member {unleash.v1.IUnleashConfig|null|undefined} config
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.config = null;

            /**
             * GameInfo status.
             * @member {number} status
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.status = 0;

            /**
             * GameInfo betAmount.
             * @member {number} betAmount
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.betAmount = 0;

            /**
             * GameInfo scores.
             * @member {Array.<number>} scores
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.scores = $util.emptyArray;

            /**
             * GameInfo firstBeginTime.
             * @member {number|Long} firstBeginTime
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.firstBeginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo stepBeginTime.
             * @member {number|Long} stepBeginTime
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.stepBeginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo stepPauseTime.
             * @member {number|Long} stepPauseTime
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.stepPauseTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo winnerId.
             * @member {number|Long} winnerId
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.winnerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo winCoin.
             * @member {number|Long} winCoin
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.winCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo deadIds.
             * @member {Array.<number|Long>} deadIds
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.deadIds = $util.emptyArray;

            /**
             * GameInfo stepWarned.
             * @member {boolean} stepWarned
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.stepWarned = false;

            /**
             * GameInfo prize.
             * @member {number|Long} prize
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.prize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo endGameTime.
             * @member {number|Long} endGameTime
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.endGameTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo firstPlayerId.
             * @member {number|Long} firstPlayerId
             * @memberof unleash.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.firstPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @function create
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {unleash.v1.IGameInfo=} [properties] Properties to set
             * @returns {unleash.v1.GameInfo} GameInfo instance
             */
            GameInfo.create = function create(properties) {
                return new GameInfo(properties);
            };

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link unleash.v1.GameInfo.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {unleash.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                    $root.unleash.v1.UnleashConfig.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.betAmount);
                if (message.scores != null && message.scores.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.scores.length; ++i)
                        writer.int32(message.scores[i]);
                    writer.ldelim();
                }
                if (message.firstBeginTime != null && Object.hasOwnProperty.call(message, "firstBeginTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.firstBeginTime);
                if (message.stepBeginTime != null && Object.hasOwnProperty.call(message, "stepBeginTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.stepBeginTime);
                if (message.stepPauseTime != null && Object.hasOwnProperty.call(message, "stepPauseTime"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.stepPauseTime);
                if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.winnerId);
                if (message.winCoin != null && Object.hasOwnProperty.call(message, "winCoin"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int64(message.winCoin);
                if (message.deadIds != null && message.deadIds.length) {
                    writer.uint32(/* id 10, wireType 2 =*/82).fork();
                    for (var i = 0; i < message.deadIds.length; ++i)
                        writer.int64(message.deadIds[i]);
                    writer.ldelim();
                }
                if (message.stepWarned != null && Object.hasOwnProperty.call(message, "stepWarned"))
                    writer.uint32(/* id 11, wireType 0 =*/88).bool(message.stepWarned);
                if (message.prize != null && Object.hasOwnProperty.call(message, "prize"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int64(message.prize);
                if (message.endGameTime != null && Object.hasOwnProperty.call(message, "endGameTime"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int64(message.endGameTime);
                if (message.firstPlayerId != null && Object.hasOwnProperty.call(message, "firstPlayerId"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int64(message.firstPlayerId);
                return writer;
            };

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link unleash.v1.GameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {unleash.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.GameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.config = $root.unleash.v1.UnleashConfig.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
                            break;
                        }
                    case 3: {
                            message.betAmount = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.scores && message.scores.length))
                                message.scores = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.scores.push(reader.int32());
                            } else
                                message.scores.push(reader.int32());
                            break;
                        }
                    case 5: {
                            message.firstBeginTime = reader.int64();
                            break;
                        }
                    case 6: {
                            message.stepBeginTime = reader.int64();
                            break;
                        }
                    case 7: {
                            message.stepPauseTime = reader.int64();
                            break;
                        }
                    case 8: {
                            message.winnerId = reader.int64();
                            break;
                        }
                    case 9: {
                            message.winCoin = reader.int64();
                            break;
                        }
                    case 10: {
                            if (!(message.deadIds && message.deadIds.length))
                                message.deadIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.deadIds.push(reader.int64());
                            } else
                                message.deadIds.push(reader.int64());
                            break;
                        }
                    case 11: {
                            message.stepWarned = reader.bool();
                            break;
                        }
                    case 12: {
                            message.prize = reader.int64();
                            break;
                        }
                    case 13: {
                            message.endGameTime = reader.int64();
                            break;
                        }
                    case 14: {
                            message.firstPlayerId = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameInfo message.
             * @function verify
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.config != null && message.hasOwnProperty("config")) {
                    var error = $root.unleash.v1.UnleashConfig.verify(message.config);
                    if (error)
                        return "config." + error;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (!$util.isInteger(message.betAmount))
                        return "betAmount: integer expected";
                if (message.scores != null && message.hasOwnProperty("scores")) {
                    if (!Array.isArray(message.scores))
                        return "scores: array expected";
                    for (var i = 0; i < message.scores.length; ++i)
                        if (!$util.isInteger(message.scores[i]))
                            return "scores: integer[] expected";
                }
                if (message.firstBeginTime != null && message.hasOwnProperty("firstBeginTime"))
                    if (!$util.isInteger(message.firstBeginTime) && !(message.firstBeginTime && $util.isInteger(message.firstBeginTime.low) && $util.isInteger(message.firstBeginTime.high)))
                        return "firstBeginTime: integer|Long expected";
                if (message.stepBeginTime != null && message.hasOwnProperty("stepBeginTime"))
                    if (!$util.isInteger(message.stepBeginTime) && !(message.stepBeginTime && $util.isInteger(message.stepBeginTime.low) && $util.isInteger(message.stepBeginTime.high)))
                        return "stepBeginTime: integer|Long expected";
                if (message.stepPauseTime != null && message.hasOwnProperty("stepPauseTime"))
                    if (!$util.isInteger(message.stepPauseTime) && !(message.stepPauseTime && $util.isInteger(message.stepPauseTime.low) && $util.isInteger(message.stepPauseTime.high)))
                        return "stepPauseTime: integer|Long expected";
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId) && !(message.winnerId && $util.isInteger(message.winnerId.low) && $util.isInteger(message.winnerId.high)))
                        return "winnerId: integer|Long expected";
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (!$util.isInteger(message.winCoin) && !(message.winCoin && $util.isInteger(message.winCoin.low) && $util.isInteger(message.winCoin.high)))
                        return "winCoin: integer|Long expected";
                if (message.deadIds != null && message.hasOwnProperty("deadIds")) {
                    if (!Array.isArray(message.deadIds))
                        return "deadIds: array expected";
                    for (var i = 0; i < message.deadIds.length; ++i)
                        if (!$util.isInteger(message.deadIds[i]) && !(message.deadIds[i] && $util.isInteger(message.deadIds[i].low) && $util.isInteger(message.deadIds[i].high)))
                            return "deadIds: integer|Long[] expected";
                }
                if (message.stepWarned != null && message.hasOwnProperty("stepWarned"))
                    if (typeof message.stepWarned !== "boolean")
                        return "stepWarned: boolean expected";
                if (message.prize != null && message.hasOwnProperty("prize"))
                    if (!$util.isInteger(message.prize) && !(message.prize && $util.isInteger(message.prize.low) && $util.isInteger(message.prize.high)))
                        return "prize: integer|Long expected";
                if (message.endGameTime != null && message.hasOwnProperty("endGameTime"))
                    if (!$util.isInteger(message.endGameTime) && !(message.endGameTime && $util.isInteger(message.endGameTime.low) && $util.isInteger(message.endGameTime.high)))
                        return "endGameTime: integer|Long expected";
                if (message.firstPlayerId != null && message.hasOwnProperty("firstPlayerId"))
                    if (!$util.isInteger(message.firstPlayerId) && !(message.firstPlayerId && $util.isInteger(message.firstPlayerId.low) && $util.isInteger(message.firstPlayerId.high)))
                        return "firstPlayerId: integer|Long expected";
                return null;
            };

            /**
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.GameInfo} GameInfo
             */
            GameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.GameInfo)
                    return object;
                var message = new $root.unleash.v1.GameInfo();
                if (object.config != null) {
                    if (typeof object.config !== "object")
                        throw TypeError(".unleash.v1.GameInfo.config: object expected");
                    message.config = $root.unleash.v1.UnleashConfig.fromObject(object.config);
                }
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.betAmount != null)
                    message.betAmount = object.betAmount | 0;
                if (object.scores) {
                    if (!Array.isArray(object.scores))
                        throw TypeError(".unleash.v1.GameInfo.scores: array expected");
                    message.scores = [];
                    for (var i = 0; i < object.scores.length; ++i)
                        message.scores[i] = object.scores[i] | 0;
                }
                if (object.firstBeginTime != null)
                    if ($util.Long)
                        (message.firstBeginTime = $util.Long.fromValue(object.firstBeginTime)).unsigned = false;
                    else if (typeof object.firstBeginTime === "string")
                        message.firstBeginTime = parseInt(object.firstBeginTime, 10);
                    else if (typeof object.firstBeginTime === "number")
                        message.firstBeginTime = object.firstBeginTime;
                    else if (typeof object.firstBeginTime === "object")
                        message.firstBeginTime = new $util.LongBits(object.firstBeginTime.low >>> 0, object.firstBeginTime.high >>> 0).toNumber();
                if (object.stepBeginTime != null)
                    if ($util.Long)
                        (message.stepBeginTime = $util.Long.fromValue(object.stepBeginTime)).unsigned = false;
                    else if (typeof object.stepBeginTime === "string")
                        message.stepBeginTime = parseInt(object.stepBeginTime, 10);
                    else if (typeof object.stepBeginTime === "number")
                        message.stepBeginTime = object.stepBeginTime;
                    else if (typeof object.stepBeginTime === "object")
                        message.stepBeginTime = new $util.LongBits(object.stepBeginTime.low >>> 0, object.stepBeginTime.high >>> 0).toNumber();
                if (object.stepPauseTime != null)
                    if ($util.Long)
                        (message.stepPauseTime = $util.Long.fromValue(object.stepPauseTime)).unsigned = false;
                    else if (typeof object.stepPauseTime === "string")
                        message.stepPauseTime = parseInt(object.stepPauseTime, 10);
                    else if (typeof object.stepPauseTime === "number")
                        message.stepPauseTime = object.stepPauseTime;
                    else if (typeof object.stepPauseTime === "object")
                        message.stepPauseTime = new $util.LongBits(object.stepPauseTime.low >>> 0, object.stepPauseTime.high >>> 0).toNumber();
                if (object.winnerId != null)
                    if ($util.Long)
                        (message.winnerId = $util.Long.fromValue(object.winnerId)).unsigned = false;
                    else if (typeof object.winnerId === "string")
                        message.winnerId = parseInt(object.winnerId, 10);
                    else if (typeof object.winnerId === "number")
                        message.winnerId = object.winnerId;
                    else if (typeof object.winnerId === "object")
                        message.winnerId = new $util.LongBits(object.winnerId.low >>> 0, object.winnerId.high >>> 0).toNumber();
                if (object.winCoin != null)
                    if ($util.Long)
                        (message.winCoin = $util.Long.fromValue(object.winCoin)).unsigned = false;
                    else if (typeof object.winCoin === "string")
                        message.winCoin = parseInt(object.winCoin, 10);
                    else if (typeof object.winCoin === "number")
                        message.winCoin = object.winCoin;
                    else if (typeof object.winCoin === "object")
                        message.winCoin = new $util.LongBits(object.winCoin.low >>> 0, object.winCoin.high >>> 0).toNumber();
                if (object.deadIds) {
                    if (!Array.isArray(object.deadIds))
                        throw TypeError(".unleash.v1.GameInfo.deadIds: array expected");
                    message.deadIds = [];
                    for (var i = 0; i < object.deadIds.length; ++i)
                        if ($util.Long)
                            (message.deadIds[i] = $util.Long.fromValue(object.deadIds[i])).unsigned = false;
                        else if (typeof object.deadIds[i] === "string")
                            message.deadIds[i] = parseInt(object.deadIds[i], 10);
                        else if (typeof object.deadIds[i] === "number")
                            message.deadIds[i] = object.deadIds[i];
                        else if (typeof object.deadIds[i] === "object")
                            message.deadIds[i] = new $util.LongBits(object.deadIds[i].low >>> 0, object.deadIds[i].high >>> 0).toNumber();
                }
                if (object.stepWarned != null)
                    message.stepWarned = Boolean(object.stepWarned);
                if (object.prize != null)
                    if ($util.Long)
                        (message.prize = $util.Long.fromValue(object.prize)).unsigned = false;
                    else if (typeof object.prize === "string")
                        message.prize = parseInt(object.prize, 10);
                    else if (typeof object.prize === "number")
                        message.prize = object.prize;
                    else if (typeof object.prize === "object")
                        message.prize = new $util.LongBits(object.prize.low >>> 0, object.prize.high >>> 0).toNumber();
                if (object.endGameTime != null)
                    if ($util.Long)
                        (message.endGameTime = $util.Long.fromValue(object.endGameTime)).unsigned = false;
                    else if (typeof object.endGameTime === "string")
                        message.endGameTime = parseInt(object.endGameTime, 10);
                    else if (typeof object.endGameTime === "number")
                        message.endGameTime = object.endGameTime;
                    else if (typeof object.endGameTime === "object")
                        message.endGameTime = new $util.LongBits(object.endGameTime.low >>> 0, object.endGameTime.high >>> 0).toNumber();
                if (object.firstPlayerId != null)
                    if ($util.Long)
                        (message.firstPlayerId = $util.Long.fromValue(object.firstPlayerId)).unsigned = false;
                    else if (typeof object.firstPlayerId === "string")
                        message.firstPlayerId = parseInt(object.firstPlayerId, 10);
                    else if (typeof object.firstPlayerId === "number")
                        message.firstPlayerId = object.firstPlayerId;
                    else if (typeof object.firstPlayerId === "object")
                        message.firstPlayerId = new $util.LongBits(object.firstPlayerId.low >>> 0, object.firstPlayerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {unleash.v1.GameInfo} message GameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.scores = [];
                    object.deadIds = [];
                }
                if (options.defaults) {
                    object.config = null;
                    object.status = 0;
                    object.betAmount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.firstBeginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.firstBeginTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.stepBeginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.stepBeginTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.stepPauseTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.stepPauseTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winnerId = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winCoin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winCoin = options.longs === String ? "0" : 0;
                    object.stepWarned = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.prize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.prize = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endGameTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endGameTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.firstPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.firstPlayerId = options.longs === String ? "0" : 0;
                }
                if (message.config != null && message.hasOwnProperty("config"))
                    object.config = $root.unleash.v1.UnleashConfig.toObject(message.config, options);
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    object.betAmount = message.betAmount;
                if (message.scores && message.scores.length) {
                    object.scores = [];
                    for (var j = 0; j < message.scores.length; ++j)
                        object.scores[j] = message.scores[j];
                }
                if (message.firstBeginTime != null && message.hasOwnProperty("firstBeginTime"))
                    if (typeof message.firstBeginTime === "number")
                        object.firstBeginTime = options.longs === String ? String(message.firstBeginTime) : message.firstBeginTime;
                    else
                        object.firstBeginTime = options.longs === String ? $util.Long.prototype.toString.call(message.firstBeginTime) : options.longs === Number ? new $util.LongBits(message.firstBeginTime.low >>> 0, message.firstBeginTime.high >>> 0).toNumber() : message.firstBeginTime;
                if (message.stepBeginTime != null && message.hasOwnProperty("stepBeginTime"))
                    if (typeof message.stepBeginTime === "number")
                        object.stepBeginTime = options.longs === String ? String(message.stepBeginTime) : message.stepBeginTime;
                    else
                        object.stepBeginTime = options.longs === String ? $util.Long.prototype.toString.call(message.stepBeginTime) : options.longs === Number ? new $util.LongBits(message.stepBeginTime.low >>> 0, message.stepBeginTime.high >>> 0).toNumber() : message.stepBeginTime;
                if (message.stepPauseTime != null && message.hasOwnProperty("stepPauseTime"))
                    if (typeof message.stepPauseTime === "number")
                        object.stepPauseTime = options.longs === String ? String(message.stepPauseTime) : message.stepPauseTime;
                    else
                        object.stepPauseTime = options.longs === String ? $util.Long.prototype.toString.call(message.stepPauseTime) : options.longs === Number ? new $util.LongBits(message.stepPauseTime.low >>> 0, message.stepPauseTime.high >>> 0).toNumber() : message.stepPauseTime;
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (typeof message.winnerId === "number")
                        object.winnerId = options.longs === String ? String(message.winnerId) : message.winnerId;
                    else
                        object.winnerId = options.longs === String ? $util.Long.prototype.toString.call(message.winnerId) : options.longs === Number ? new $util.LongBits(message.winnerId.low >>> 0, message.winnerId.high >>> 0).toNumber() : message.winnerId;
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (typeof message.winCoin === "number")
                        object.winCoin = options.longs === String ? String(message.winCoin) : message.winCoin;
                    else
                        object.winCoin = options.longs === String ? $util.Long.prototype.toString.call(message.winCoin) : options.longs === Number ? new $util.LongBits(message.winCoin.low >>> 0, message.winCoin.high >>> 0).toNumber() : message.winCoin;
                if (message.deadIds && message.deadIds.length) {
                    object.deadIds = [];
                    for (var j = 0; j < message.deadIds.length; ++j)
                        if (typeof message.deadIds[j] === "number")
                            object.deadIds[j] = options.longs === String ? String(message.deadIds[j]) : message.deadIds[j];
                        else
                            object.deadIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.deadIds[j]) : options.longs === Number ? new $util.LongBits(message.deadIds[j].low >>> 0, message.deadIds[j].high >>> 0).toNumber() : message.deadIds[j];
                }
                if (message.stepWarned != null && message.hasOwnProperty("stepWarned"))
                    object.stepWarned = message.stepWarned;
                if (message.prize != null && message.hasOwnProperty("prize"))
                    if (typeof message.prize === "number")
                        object.prize = options.longs === String ? String(message.prize) : message.prize;
                    else
                        object.prize = options.longs === String ? $util.Long.prototype.toString.call(message.prize) : options.longs === Number ? new $util.LongBits(message.prize.low >>> 0, message.prize.high >>> 0).toNumber() : message.prize;
                if (message.endGameTime != null && message.hasOwnProperty("endGameTime"))
                    if (typeof message.endGameTime === "number")
                        object.endGameTime = options.longs === String ? String(message.endGameTime) : message.endGameTime;
                    else
                        object.endGameTime = options.longs === String ? $util.Long.prototype.toString.call(message.endGameTime) : options.longs === Number ? new $util.LongBits(message.endGameTime.low >>> 0, message.endGameTime.high >>> 0).toNumber() : message.endGameTime;
                if (message.firstPlayerId != null && message.hasOwnProperty("firstPlayerId"))
                    if (typeof message.firstPlayerId === "number")
                        object.firstPlayerId = options.longs === String ? String(message.firstPlayerId) : message.firstPlayerId;
                    else
                        object.firstPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.firstPlayerId) : options.longs === Number ? new $util.LongBits(message.firstPlayerId.low >>> 0, message.firstPlayerId.high >>> 0).toNumber() : message.firstPlayerId;
                return object;
            };

            /**
             * Converts this GameInfo to JSON.
             * @function toJSON
             * @memberof unleash.v1.GameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameInfo
             * @function getTypeUrl
             * @memberof unleash.v1.GameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.GameInfo";
            };

            return GameInfo;
        })();

        v1.UnleashPlayerInfo = (function() {

            /**
             * Properties of an UnleashPlayerInfo.
             * @memberof unleash.v1
             * @interface IUnleashPlayerInfo
             * @property {common.v1.IPlayerInfo|null} [playerInfo] UnleashPlayerInfo playerInfo
             * @property {unleash.v1.UnleashPlayerStatus|null} [playerStatus] UnleashPlayerInfo playerStatus
             * @property {number|Long|null} [playerDistance] UnleashPlayerInfo playerDistance
             */

            /**
             * Constructs a new UnleashPlayerInfo.
             * @memberof unleash.v1
             * @classdesc Represents an UnleashPlayerInfo.
             * @implements IUnleashPlayerInfo
             * @constructor
             * @param {unleash.v1.IUnleashPlayerInfo=} [properties] Properties to set
             */
            function UnleashPlayerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UnleashPlayerInfo playerInfo.
             * @member {common.v1.IPlayerInfo|null|undefined} playerInfo
             * @memberof unleash.v1.UnleashPlayerInfo
             * @instance
             */
            UnleashPlayerInfo.prototype.playerInfo = null;

            /**
             * UnleashPlayerInfo playerStatus.
             * @member {unleash.v1.UnleashPlayerStatus} playerStatus
             * @memberof unleash.v1.UnleashPlayerInfo
             * @instance
             */
            UnleashPlayerInfo.prototype.playerStatus = 0;

            /**
             * UnleashPlayerInfo playerDistance.
             * @member {number|Long} playerDistance
             * @memberof unleash.v1.UnleashPlayerInfo
             * @instance
             */
            UnleashPlayerInfo.prototype.playerDistance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new UnleashPlayerInfo instance using the specified properties.
             * @function create
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {unleash.v1.IUnleashPlayerInfo=} [properties] Properties to set
             * @returns {unleash.v1.UnleashPlayerInfo} UnleashPlayerInfo instance
             */
            UnleashPlayerInfo.create = function create(properties) {
                return new UnleashPlayerInfo(properties);
            };

            /**
             * Encodes the specified UnleashPlayerInfo message. Does not implicitly {@link unleash.v1.UnleashPlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {unleash.v1.IUnleashPlayerInfo} message UnleashPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashPlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.common.v1.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.playerStatus != null && Object.hasOwnProperty.call(message, "playerStatus"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerStatus);
                if (message.playerDistance != null && Object.hasOwnProperty.call(message, "playerDistance"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.playerDistance);
                return writer;
            };

            /**
             * Encodes the specified UnleashPlayerInfo message, length delimited. Does not implicitly {@link unleash.v1.UnleashPlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {unleash.v1.IUnleashPlayerInfo} message UnleashPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnleashPlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.UnleashPlayerInfo} UnleashPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashPlayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.UnleashPlayerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerInfo = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.playerStatus = reader.int32();
                            break;
                        }
                    case 3: {
                            message.playerDistance = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnleashPlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.UnleashPlayerInfo} UnleashPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnleashPlayerInfo message.
             * @function verify
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnleashPlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.playerStatus != null && message.hasOwnProperty("playerStatus"))
                    switch (message.playerStatus) {
                    default:
                        return "playerStatus: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (!$util.isInteger(message.playerDistance) && !(message.playerDistance && $util.isInteger(message.playerDistance.low) && $util.isInteger(message.playerDistance.high)))
                        return "playerDistance: integer|Long expected";
                return null;
            };

            /**
             * Creates an UnleashPlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.UnleashPlayerInfo} UnleashPlayerInfo
             */
            UnleashPlayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.UnleashPlayerInfo)
                    return object;
                var message = new $root.unleash.v1.UnleashPlayerInfo();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".unleash.v1.UnleashPlayerInfo.playerInfo: object expected");
                    message.playerInfo = $root.common.v1.PlayerInfo.fromObject(object.playerInfo);
                }
                switch (object.playerStatus) {
                default:
                    if (typeof object.playerStatus === "number") {
                        message.playerStatus = object.playerStatus;
                        break;
                    }
                    break;
                case "RPS_HALTING":
                case 0:
                    message.playerStatus = 0;
                    break;
                case "RPS_RUNNING":
                case 1:
                    message.playerStatus = 1;
                    break;
                case "RPS_DEAD":
                case 2:
                    message.playerStatus = 2;
                    break;
                case "RPS_WIN":
                case 3:
                    message.playerStatus = 3;
                    break;
                case "RPS_LOSE":
                case 4:
                    message.playerStatus = 4;
                    break;
                }
                if (object.playerDistance != null)
                    if ($util.Long)
                        (message.playerDistance = $util.Long.fromValue(object.playerDistance)).unsigned = false;
                    else if (typeof object.playerDistance === "string")
                        message.playerDistance = parseInt(object.playerDistance, 10);
                    else if (typeof object.playerDistance === "number")
                        message.playerDistance = object.playerDistance;
                    else if (typeof object.playerDistance === "object")
                        message.playerDistance = new $util.LongBits(object.playerDistance.low >>> 0, object.playerDistance.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an UnleashPlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {unleash.v1.UnleashPlayerInfo} message UnleashPlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnleashPlayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.playerInfo = null;
                    object.playerStatus = options.enums === String ? "RPS_HALTING" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerDistance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerDistance = options.longs === String ? "0" : 0;
                }
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.common.v1.PlayerInfo.toObject(message.playerInfo, options);
                if (message.playerStatus != null && message.hasOwnProperty("playerStatus"))
                    object.playerStatus = options.enums === String ? $root.unleash.v1.UnleashPlayerStatus[message.playerStatus] === undefined ? message.playerStatus : $root.unleash.v1.UnleashPlayerStatus[message.playerStatus] : message.playerStatus;
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (typeof message.playerDistance === "number")
                        object.playerDistance = options.longs === String ? String(message.playerDistance) : message.playerDistance;
                    else
                        object.playerDistance = options.longs === String ? $util.Long.prototype.toString.call(message.playerDistance) : options.longs === Number ? new $util.LongBits(message.playerDistance.low >>> 0, message.playerDistance.high >>> 0).toNumber() : message.playerDistance;
                return object;
            };

            /**
             * Converts this UnleashPlayerInfo to JSON.
             * @function toJSON
             * @memberof unleash.v1.UnleashPlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnleashPlayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UnleashPlayerInfo
             * @function getTypeUrl
             * @memberof unleash.v1.UnleashPlayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UnleashPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.UnleashPlayerInfo";
            };

            return UnleashPlayerInfo;
        })();

        v1.JoinRoomReq = (function() {

            /**
             * Properties of a JoinRoomReq.
             * @memberof unleash.v1
             * @interface IJoinRoomReq
             * @property {number|Long|null} [roomId] JoinRoomReq roomId
             */

            /**
             * Constructs a new JoinRoomReq.
             * @memberof unleash.v1
             * @classdesc Represents a JoinRoomReq.
             * @implements IJoinRoomReq
             * @constructor
             * @param {unleash.v1.IJoinRoomReq=} [properties] Properties to set
             */
            function JoinRoomReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRoomReq roomId.
             * @member {number|Long} roomId
             * @memberof unleash.v1.JoinRoomReq
             * @instance
             */
            JoinRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @function create
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {unleash.v1.IJoinRoomReq=} [properties] Properties to set
             * @returns {unleash.v1.JoinRoomReq} JoinRoomReq instance
             */
            JoinRoomReq.create = function create(properties) {
                return new JoinRoomReq(properties);
            };

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link unleash.v1.JoinRoomReq.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {unleash.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
                return writer;
            };

            /**
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link unleash.v1.JoinRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {unleash.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.JoinRoomReq} JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.JoinRoomReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.roomId = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.JoinRoomReq} JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinRoomReq message.
             * @function verify
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                        return "roomId: integer|Long expected";
                return null;
            };

            /**
             * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.JoinRoomReq} JoinRoomReq
             */
            JoinRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.JoinRoomReq)
                    return object;
                var message = new $root.unleash.v1.JoinRoomReq();
                if (object.roomId != null)
                    if ($util.Long)
                        (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                    else if (typeof object.roomId === "string")
                        message.roomId = parseInt(object.roomId, 10);
                    else if (typeof object.roomId === "number")
                        message.roomId = object.roomId;
                    else if (typeof object.roomId === "object")
                        message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {unleash.v1.JoinRoomReq} message JoinRoomReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoomReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.roomId = options.longs === String ? "0" : 0;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (typeof message.roomId === "number")
                        object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                    else
                        object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
                return object;
            };

            /**
             * Converts this JoinRoomReq to JSON.
             * @function toJSON
             * @memberof unleash.v1.JoinRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomReq
             * @function getTypeUrl
             * @memberof unleash.v1.JoinRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.JoinRoomReq";
            };

            return JoinRoomReq;
        })();

        v1.JoinRoomRes = (function() {

            /**
             * Properties of a JoinRoomRes.
             * @memberof unleash.v1
             * @interface IJoinRoomRes
             * @property {common.v1.IRoomInfo|null} [roomInfo] JoinRoomRes roomInfo
             * @property {unleash.v1.IGameInfo|null} [gameInfo] JoinRoomRes gameInfo
             * @property {number|null} [playersCount] JoinRoomRes playersCount
             * @property {unleash.v1.IUnleashPlayerInfo|null} [self] JoinRoomRes self
             * @property {Array.<common.v1.IPlayerInfo>|null} [watchers] JoinRoomRes watchers
             * @property {Array.<common.v1.IPlayerInfo>|null} [speakers] JoinRoomRes speakers
             * @property {Array.<unleash.v1.IUnleashPlayerInfo>|null} [players] JoinRoomRes players
             * @property {common.v1.IPlayerSettings|null} [playerSettings] JoinRoomRes playerSettings
             */

            /**
             * Constructs a new JoinRoomRes.
             * @memberof unleash.v1
             * @classdesc Represents a JoinRoomRes.
             * @implements IJoinRoomRes
             * @constructor
             * @param {unleash.v1.IJoinRoomRes=} [properties] Properties to set
             */
            function JoinRoomRes(properties) {
                this.watchers = [];
                this.speakers = [];
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRoomRes roomInfo.
             * @member {common.v1.IRoomInfo|null|undefined} roomInfo
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.roomInfo = null;

            /**
             * JoinRoomRes gameInfo.
             * @member {unleash.v1.IGameInfo|null|undefined} gameInfo
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.gameInfo = null;

            /**
             * JoinRoomRes playersCount.
             * @member {number} playersCount
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playersCount = 0;

            /**
             * JoinRoomRes self.
             * @member {unleash.v1.IUnleashPlayerInfo|null|undefined} self
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.self = null;

            /**
             * JoinRoomRes watchers.
             * @member {Array.<common.v1.IPlayerInfo>} watchers
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.watchers = $util.emptyArray;

            /**
             * JoinRoomRes speakers.
             * @member {Array.<common.v1.IPlayerInfo>} speakers
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.speakers = $util.emptyArray;

            /**
             * JoinRoomRes players.
             * @member {Array.<unleash.v1.IUnleashPlayerInfo>} players
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.players = $util.emptyArray;

            /**
             * JoinRoomRes playerSettings.
             * @member {common.v1.IPlayerSettings|null|undefined} playerSettings
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playerSettings = null;

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @function create
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {unleash.v1.IJoinRoomRes=} [properties] Properties to set
             * @returns {unleash.v1.JoinRoomRes} JoinRoomRes instance
             */
            JoinRoomRes.create = function create(properties) {
                return new JoinRoomRes(properties);
            };

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link unleash.v1.JoinRoomRes.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {unleash.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                    $root.common.v1.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.unleash.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playersCount);
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.unleash.v1.UnleashPlayerInfo.encode(message.self, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.watchers != null && message.watchers.length)
                    for (var i = 0; i < message.watchers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.watchers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.speakers != null && message.speakers.length)
                    for (var i = 0; i < message.speakers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.speakers[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.unleash.v1.UnleashPlayerInfo.encode(message.players[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.playerSettings != null && Object.hasOwnProperty.call(message, "playerSettings"))
                    $root.common.v1.PlayerSettings.encode(message.playerSettings, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link unleash.v1.JoinRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {unleash.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.JoinRoomRes} JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.JoinRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.roomInfo = $root.common.v1.RoomInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.gameInfo = $root.unleash.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.playersCount = reader.int32();
                            break;
                        }
                    case 4: {
                            message.self = $root.unleash.v1.UnleashPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            if (!(message.watchers && message.watchers.length))
                                message.watchers = [];
                            message.watchers.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.speakers && message.speakers.length))
                                message.speakers = [];
                            message.speakers.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.unleash.v1.UnleashPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.playerSettings = $root.common.v1.PlayerSettings.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.JoinRoomRes} JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinRoomRes message.
             * @function verify
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                    var error = $root.common.v1.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.unleash.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    if (!$util.isInteger(message.playersCount))
                        return "playersCount: integer expected";
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.unleash.v1.UnleashPlayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.watchers != null && message.hasOwnProperty("watchers")) {
                    if (!Array.isArray(message.watchers))
                        return "watchers: array expected";
                    for (var i = 0; i < message.watchers.length; ++i) {
                        var error = $root.common.v1.PlayerInfo.verify(message.watchers[i]);
                        if (error)
                            return "watchers." + error;
                    }
                }
                if (message.speakers != null && message.hasOwnProperty("speakers")) {
                    if (!Array.isArray(message.speakers))
                        return "speakers: array expected";
                    for (var i = 0; i < message.speakers.length; ++i) {
                        var error = $root.common.v1.PlayerInfo.verify(message.speakers[i]);
                        if (error)
                            return "speakers." + error;
                    }
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.unleash.v1.UnleashPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.playerSettings != null && message.hasOwnProperty("playerSettings")) {
                    var error = $root.common.v1.PlayerSettings.verify(message.playerSettings);
                    if (error)
                        return "playerSettings." + error;
                }
                return null;
            };

            /**
             * Creates a JoinRoomRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.JoinRoomRes} JoinRoomRes
             */
            JoinRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.JoinRoomRes)
                    return object;
                var message = new $root.unleash.v1.JoinRoomRes();
                if (object.roomInfo != null) {
                    if (typeof object.roomInfo !== "object")
                        throw TypeError(".unleash.v1.JoinRoomRes.roomInfo: object expected");
                    message.roomInfo = $root.common.v1.RoomInfo.fromObject(object.roomInfo);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".unleash.v1.JoinRoomRes.gameInfo: object expected");
                    message.gameInfo = $root.unleash.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".unleash.v1.JoinRoomRes.self: object expected");
                    message.self = $root.unleash.v1.UnleashPlayerInfo.fromObject(object.self);
                }
                if (object.watchers) {
                    if (!Array.isArray(object.watchers))
                        throw TypeError(".unleash.v1.JoinRoomRes.watchers: array expected");
                    message.watchers = [];
                    for (var i = 0; i < object.watchers.length; ++i) {
                        if (typeof object.watchers[i] !== "object")
                            throw TypeError(".unleash.v1.JoinRoomRes.watchers: object expected");
                        message.watchers[i] = $root.common.v1.PlayerInfo.fromObject(object.watchers[i]);
                    }
                }
                if (object.speakers) {
                    if (!Array.isArray(object.speakers))
                        throw TypeError(".unleash.v1.JoinRoomRes.speakers: array expected");
                    message.speakers = [];
                    for (var i = 0; i < object.speakers.length; ++i) {
                        if (typeof object.speakers[i] !== "object")
                            throw TypeError(".unleash.v1.JoinRoomRes.speakers: object expected");
                        message.speakers[i] = $root.common.v1.PlayerInfo.fromObject(object.speakers[i]);
                    }
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".unleash.v1.JoinRoomRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".unleash.v1.JoinRoomRes.players: object expected");
                        message.players[i] = $root.unleash.v1.UnleashPlayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.playerSettings != null) {
                    if (typeof object.playerSettings !== "object")
                        throw TypeError(".unleash.v1.JoinRoomRes.playerSettings: object expected");
                    message.playerSettings = $root.common.v1.PlayerSettings.fromObject(object.playerSettings);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {unleash.v1.JoinRoomRes} message JoinRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoomRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.watchers = [];
                    object.speakers = [];
                    object.players = [];
                }
                if (options.defaults) {
                    object.roomInfo = null;
                    object.gameInfo = null;
                    object.playersCount = 0;
                    object.self = null;
                    object.playerSettings = null;
                }
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                    object.roomInfo = $root.common.v1.RoomInfo.toObject(message.roomInfo, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.unleash.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.unleash.v1.UnleashPlayerInfo.toObject(message.self, options);
                if (message.watchers && message.watchers.length) {
                    object.watchers = [];
                    for (var j = 0; j < message.watchers.length; ++j)
                        object.watchers[j] = $root.common.v1.PlayerInfo.toObject(message.watchers[j], options);
                }
                if (message.speakers && message.speakers.length) {
                    object.speakers = [];
                    for (var j = 0; j < message.speakers.length; ++j)
                        object.speakers[j] = $root.common.v1.PlayerInfo.toObject(message.speakers[j], options);
                }
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.unleash.v1.UnleashPlayerInfo.toObject(message.players[j], options);
                }
                if (message.playerSettings != null && message.hasOwnProperty("playerSettings"))
                    object.playerSettings = $root.common.v1.PlayerSettings.toObject(message.playerSettings, options);
                return object;
            };

            /**
             * Converts this JoinRoomRes to JSON.
             * @function toJSON
             * @memberof unleash.v1.JoinRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomRes
             * @function getTypeUrl
             * @memberof unleash.v1.JoinRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.JoinRoomRes";
            };

            return JoinRoomRes;
        })();

        v1.StartGameReq = (function() {

            /**
             * Properties of a StartGameReq.
             * @memberof unleash.v1
             * @interface IStartGameReq
             */

            /**
             * Constructs a new StartGameReq.
             * @memberof unleash.v1
             * @classdesc Represents a StartGameReq.
             * @implements IStartGameReq
             * @constructor
             * @param {unleash.v1.IStartGameReq=} [properties] Properties to set
             */
            function StartGameReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StartGameReq instance using the specified properties.
             * @function create
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {unleash.v1.IStartGameReq=} [properties] Properties to set
             * @returns {unleash.v1.StartGameReq} StartGameReq instance
             */
            StartGameReq.create = function create(properties) {
                return new StartGameReq(properties);
            };

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link unleash.v1.StartGameReq.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {unleash.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link unleash.v1.StartGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {unleash.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.StartGameReq} StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.StartGameReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.StartGameReq} StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartGameReq message.
             * @function verify
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartGameReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StartGameReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.StartGameReq} StartGameReq
             */
            StartGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.StartGameReq)
                    return object;
                return new $root.unleash.v1.StartGameReq();
            };

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {unleash.v1.StartGameReq} message StartGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameReq to JSON.
             * @function toJSON
             * @memberof unleash.v1.StartGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameReq
             * @function getTypeUrl
             * @memberof unleash.v1.StartGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.StartGameReq";
            };

            return StartGameReq;
        })();

        v1.StartGameRes = (function() {

            /**
             * Properties of a StartGameRes.
             * @memberof unleash.v1
             * @interface IStartGameRes
             */

            /**
             * Constructs a new StartGameRes.
             * @memberof unleash.v1
             * @classdesc Represents a StartGameRes.
             * @implements IStartGameRes
             * @constructor
             * @param {unleash.v1.IStartGameRes=} [properties] Properties to set
             */
            function StartGameRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StartGameRes instance using the specified properties.
             * @function create
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {unleash.v1.IStartGameRes=} [properties] Properties to set
             * @returns {unleash.v1.StartGameRes} StartGameRes instance
             */
            StartGameRes.create = function create(properties) {
                return new StartGameRes(properties);
            };

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link unleash.v1.StartGameRes.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {unleash.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link unleash.v1.StartGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {unleash.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.StartGameRes} StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.StartGameRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartGameRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.StartGameRes} StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartGameRes message.
             * @function verify
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartGameRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StartGameRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.StartGameRes} StartGameRes
             */
            StartGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.StartGameRes)
                    return object;
                return new $root.unleash.v1.StartGameRes();
            };

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {unleash.v1.StartGameRes} message StartGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameRes to JSON.
             * @function toJSON
             * @memberof unleash.v1.StartGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameRes
             * @function getTypeUrl
             * @memberof unleash.v1.StartGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.StartGameRes";
            };

            return StartGameRes;
        })();

        v1.StartGameBroadcast = (function() {

            /**
             * Properties of a StartGameBroadcast.
             * @memberof unleash.v1
             * @interface IStartGameBroadcast
             * @property {unleash.v1.IGameInfo|null} [gameInfo] StartGameBroadcast gameInfo
             * @property {Array.<unleash.v1.IUnleashPlayerInfo>|null} [players] StartGameBroadcast players
             * @property {number|Long|null} [stepBeginTime] StartGameBroadcast stepBeginTime
             */

            /**
             * Constructs a new StartGameBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a StartGameBroadcast.
             * @implements IStartGameBroadcast
             * @constructor
             * @param {unleash.v1.IStartGameBroadcast=} [properties] Properties to set
             */
            function StartGameBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartGameBroadcast gameInfo.
             * @member {unleash.v1.IGameInfo|null|undefined} gameInfo
             * @memberof unleash.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.gameInfo = null;

            /**
             * StartGameBroadcast players.
             * @member {Array.<unleash.v1.IUnleashPlayerInfo>} players
             * @memberof unleash.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.players = $util.emptyArray;

            /**
             * StartGameBroadcast stepBeginTime.
             * @member {number|Long} stepBeginTime
             * @memberof unleash.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.stepBeginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new StartGameBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {unleash.v1.IStartGameBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.StartGameBroadcast} StartGameBroadcast instance
             */
            StartGameBroadcast.create = function create(properties) {
                return new StartGameBroadcast(properties);
            };

            /**
             * Encodes the specified StartGameBroadcast message. Does not implicitly {@link unleash.v1.StartGameBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {unleash.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.unleash.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.unleash.v1.UnleashPlayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.stepBeginTime != null && Object.hasOwnProperty.call(message, "stepBeginTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.stepBeginTime);
                return writer;
            };

            /**
             * Encodes the specified StartGameBroadcast message, length delimited. Does not implicitly {@link unleash.v1.StartGameBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {unleash.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.StartGameBroadcast} StartGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.StartGameBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.gameInfo = $root.unleash.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.unleash.v1.UnleashPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.stepBeginTime = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartGameBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.StartGameBroadcast} StartGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartGameBroadcast message.
             * @function verify
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartGameBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.unleash.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.unleash.v1.UnleashPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.stepBeginTime != null && message.hasOwnProperty("stepBeginTime"))
                    if (!$util.isInteger(message.stepBeginTime) && !(message.stepBeginTime && $util.isInteger(message.stepBeginTime.low) && $util.isInteger(message.stepBeginTime.high)))
                        return "stepBeginTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a StartGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.StartGameBroadcast} StartGameBroadcast
             */
            StartGameBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.StartGameBroadcast)
                    return object;
                var message = new $root.unleash.v1.StartGameBroadcast();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".unleash.v1.StartGameBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.unleash.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".unleash.v1.StartGameBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".unleash.v1.StartGameBroadcast.players: object expected");
                        message.players[i] = $root.unleash.v1.UnleashPlayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.stepBeginTime != null)
                    if ($util.Long)
                        (message.stepBeginTime = $util.Long.fromValue(object.stepBeginTime)).unsigned = false;
                    else if (typeof object.stepBeginTime === "string")
                        message.stepBeginTime = parseInt(object.stepBeginTime, 10);
                    else if (typeof object.stepBeginTime === "number")
                        message.stepBeginTime = object.stepBeginTime;
                    else if (typeof object.stepBeginTime === "object")
                        message.stepBeginTime = new $util.LongBits(object.stepBeginTime.low >>> 0, object.stepBeginTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a StartGameBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {unleash.v1.StartGameBroadcast} message StartGameBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    object.gameInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.stepBeginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.stepBeginTime = options.longs === String ? "0" : 0;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.unleash.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.unleash.v1.UnleashPlayerInfo.toObject(message.players[j], options);
                }
                if (message.stepBeginTime != null && message.hasOwnProperty("stepBeginTime"))
                    if (typeof message.stepBeginTime === "number")
                        object.stepBeginTime = options.longs === String ? String(message.stepBeginTime) : message.stepBeginTime;
                    else
                        object.stepBeginTime = options.longs === String ? $util.Long.prototype.toString.call(message.stepBeginTime) : options.longs === Number ? new $util.LongBits(message.stepBeginTime.low >>> 0, message.stepBeginTime.high >>> 0).toNumber() : message.stepBeginTime;
                return object;
            };

            /**
             * Converts this StartGameBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.StartGameBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.StartGameBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.StartGameBroadcast";
            };

            return StartGameBroadcast;
        })();

        v1.StepPauseBroadcast = (function() {

            /**
             * Properties of a StepPauseBroadcast.
             * @memberof unleash.v1
             * @interface IStepPauseBroadcast
             */

            /**
             * Constructs a new StepPauseBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a StepPauseBroadcast.
             * @implements IStepPauseBroadcast
             * @constructor
             * @param {unleash.v1.IStepPauseBroadcast=} [properties] Properties to set
             */
            function StepPauseBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StepPauseBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {unleash.v1.IStepPauseBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.StepPauseBroadcast} StepPauseBroadcast instance
             */
            StepPauseBroadcast.create = function create(properties) {
                return new StepPauseBroadcast(properties);
            };

            /**
             * Encodes the specified StepPauseBroadcast message. Does not implicitly {@link unleash.v1.StepPauseBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {unleash.v1.IStepPauseBroadcast} message StepPauseBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StepPauseBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StepPauseBroadcast message, length delimited. Does not implicitly {@link unleash.v1.StepPauseBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {unleash.v1.IStepPauseBroadcast} message StepPauseBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StepPauseBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StepPauseBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.StepPauseBroadcast} StepPauseBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StepPauseBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.StepPauseBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StepPauseBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.StepPauseBroadcast} StepPauseBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StepPauseBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StepPauseBroadcast message.
             * @function verify
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StepPauseBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StepPauseBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.StepPauseBroadcast} StepPauseBroadcast
             */
            StepPauseBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.StepPauseBroadcast)
                    return object;
                return new $root.unleash.v1.StepPauseBroadcast();
            };

            /**
             * Creates a plain object from a StepPauseBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {unleash.v1.StepPauseBroadcast} message StepPauseBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StepPauseBroadcast.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StepPauseBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.StepPauseBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StepPauseBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StepPauseBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.StepPauseBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StepPauseBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.StepPauseBroadcast";
            };

            return StepPauseBroadcast;
        })();

        v1.NextStepBroadcast = (function() {

            /**
             * Properties of a NextStepBroadcast.
             * @memberof unleash.v1
             * @interface INextStepBroadcast
             */

            /**
             * Constructs a new NextStepBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a NextStepBroadcast.
             * @implements INextStepBroadcast
             * @constructor
             * @param {unleash.v1.INextStepBroadcast=} [properties] Properties to set
             */
            function NextStepBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new NextStepBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {unleash.v1.INextStepBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.NextStepBroadcast} NextStepBroadcast instance
             */
            NextStepBroadcast.create = function create(properties) {
                return new NextStepBroadcast(properties);
            };

            /**
             * Encodes the specified NextStepBroadcast message. Does not implicitly {@link unleash.v1.NextStepBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {unleash.v1.INextStepBroadcast} message NextStepBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NextStepBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified NextStepBroadcast message, length delimited. Does not implicitly {@link unleash.v1.NextStepBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {unleash.v1.INextStepBroadcast} message NextStepBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NextStepBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NextStepBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.NextStepBroadcast} NextStepBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NextStepBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.NextStepBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NextStepBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.NextStepBroadcast} NextStepBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NextStepBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NextStepBroadcast message.
             * @function verify
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NextStepBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a NextStepBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.NextStepBroadcast} NextStepBroadcast
             */
            NextStepBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.NextStepBroadcast)
                    return object;
                return new $root.unleash.v1.NextStepBroadcast();
            };

            /**
             * Creates a plain object from a NextStepBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {unleash.v1.NextStepBroadcast} message NextStepBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NextStepBroadcast.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this NextStepBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.NextStepBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NextStepBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NextStepBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.NextStepBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NextStepBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.NextStepBroadcast";
            };

            return NextStepBroadcast;
        })();

        v1.ResetGameReq = (function() {

            /**
             * Properties of a ResetGameReq.
             * @memberof unleash.v1
             * @interface IResetGameReq
             */

            /**
             * Constructs a new ResetGameReq.
             * @memberof unleash.v1
             * @classdesc Represents a ResetGameReq.
             * @implements IResetGameReq
             * @constructor
             * @param {unleash.v1.IResetGameReq=} [properties] Properties to set
             */
            function ResetGameReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ResetGameReq instance using the specified properties.
             * @function create
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {unleash.v1.IResetGameReq=} [properties] Properties to set
             * @returns {unleash.v1.ResetGameReq} ResetGameReq instance
             */
            ResetGameReq.create = function create(properties) {
                return new ResetGameReq(properties);
            };

            /**
             * Encodes the specified ResetGameReq message. Does not implicitly {@link unleash.v1.ResetGameReq.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {unleash.v1.IResetGameReq} message ResetGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ResetGameReq message, length delimited. Does not implicitly {@link unleash.v1.ResetGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {unleash.v1.IResetGameReq} message ResetGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResetGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.ResetGameReq} ResetGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.ResetGameReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResetGameReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.ResetGameReq} ResetGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetGameReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResetGameReq message.
             * @function verify
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResetGameReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ResetGameReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.ResetGameReq} ResetGameReq
             */
            ResetGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.ResetGameReq)
                    return object;
                return new $root.unleash.v1.ResetGameReq();
            };

            /**
             * Creates a plain object from a ResetGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {unleash.v1.ResetGameReq} message ResetGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResetGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ResetGameReq to JSON.
             * @function toJSON
             * @memberof unleash.v1.ResetGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResetGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResetGameReq
             * @function getTypeUrl
             * @memberof unleash.v1.ResetGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResetGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.ResetGameReq";
            };

            return ResetGameReq;
        })();

        v1.ResetGameRes = (function() {

            /**
             * Properties of a ResetGameRes.
             * @memberof unleash.v1
             * @interface IResetGameRes
             */

            /**
             * Constructs a new ResetGameRes.
             * @memberof unleash.v1
             * @classdesc Represents a ResetGameRes.
             * @implements IResetGameRes
             * @constructor
             * @param {unleash.v1.IResetGameRes=} [properties] Properties to set
             */
            function ResetGameRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ResetGameRes instance using the specified properties.
             * @function create
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {unleash.v1.IResetGameRes=} [properties] Properties to set
             * @returns {unleash.v1.ResetGameRes} ResetGameRes instance
             */
            ResetGameRes.create = function create(properties) {
                return new ResetGameRes(properties);
            };

            /**
             * Encodes the specified ResetGameRes message. Does not implicitly {@link unleash.v1.ResetGameRes.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {unleash.v1.IResetGameRes} message ResetGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ResetGameRes message, length delimited. Does not implicitly {@link unleash.v1.ResetGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {unleash.v1.IResetGameRes} message ResetGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResetGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.ResetGameRes} ResetGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.ResetGameRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResetGameRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.ResetGameRes} ResetGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetGameRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResetGameRes message.
             * @function verify
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResetGameRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ResetGameRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.ResetGameRes} ResetGameRes
             */
            ResetGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.ResetGameRes)
                    return object;
                return new $root.unleash.v1.ResetGameRes();
            };

            /**
             * Creates a plain object from a ResetGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {unleash.v1.ResetGameRes} message ResetGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResetGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ResetGameRes to JSON.
             * @function toJSON
             * @memberof unleash.v1.ResetGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResetGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResetGameRes
             * @function getTypeUrl
             * @memberof unleash.v1.ResetGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResetGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.ResetGameRes";
            };

            return ResetGameRes;
        })();

        v1.ResetGameBroadcast = (function() {

            /**
             * Properties of a ResetGameBroadcast.
             * @memberof unleash.v1
             * @interface IResetGameBroadcast
             * @property {unleash.v1.IGameInfo|null} [gameInfo] ResetGameBroadcast gameInfo
             * @property {unleash.v1.IUnleashPlayerInfo|null} [self] ResetGameBroadcast self
             * @property {Array.<unleash.v1.IUnleashPlayerInfo>|null} [players] ResetGameBroadcast players
             */

            /**
             * Constructs a new ResetGameBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a ResetGameBroadcast.
             * @implements IResetGameBroadcast
             * @constructor
             * @param {unleash.v1.IResetGameBroadcast=} [properties] Properties to set
             */
            function ResetGameBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResetGameBroadcast gameInfo.
             * @member {unleash.v1.IGameInfo|null|undefined} gameInfo
             * @memberof unleash.v1.ResetGameBroadcast
             * @instance
             */
            ResetGameBroadcast.prototype.gameInfo = null;

            /**
             * ResetGameBroadcast self.
             * @member {unleash.v1.IUnleashPlayerInfo|null|undefined} self
             * @memberof unleash.v1.ResetGameBroadcast
             * @instance
             */
            ResetGameBroadcast.prototype.self = null;

            /**
             * ResetGameBroadcast players.
             * @member {Array.<unleash.v1.IUnleashPlayerInfo>} players
             * @memberof unleash.v1.ResetGameBroadcast
             * @instance
             */
            ResetGameBroadcast.prototype.players = $util.emptyArray;

            /**
             * Creates a new ResetGameBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {unleash.v1.IResetGameBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.ResetGameBroadcast} ResetGameBroadcast instance
             */
            ResetGameBroadcast.create = function create(properties) {
                return new ResetGameBroadcast(properties);
            };

            /**
             * Encodes the specified ResetGameBroadcast message. Does not implicitly {@link unleash.v1.ResetGameBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {unleash.v1.IResetGameBroadcast} message ResetGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetGameBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.unleash.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.unleash.v1.UnleashPlayerInfo.encode(message.self, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.unleash.v1.UnleashPlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResetGameBroadcast message, length delimited. Does not implicitly {@link unleash.v1.ResetGameBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {unleash.v1.IResetGameBroadcast} message ResetGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetGameBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResetGameBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.ResetGameBroadcast} ResetGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetGameBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.ResetGameBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.gameInfo = $root.unleash.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.self = $root.unleash.v1.UnleashPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.unleash.v1.UnleashPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResetGameBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.ResetGameBroadcast} ResetGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetGameBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResetGameBroadcast message.
             * @function verify
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResetGameBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.unleash.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.unleash.v1.UnleashPlayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.unleash.v1.UnleashPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ResetGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.ResetGameBroadcast} ResetGameBroadcast
             */
            ResetGameBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.ResetGameBroadcast)
                    return object;
                var message = new $root.unleash.v1.ResetGameBroadcast();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".unleash.v1.ResetGameBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.unleash.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".unleash.v1.ResetGameBroadcast.self: object expected");
                    message.self = $root.unleash.v1.UnleashPlayerInfo.fromObject(object.self);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".unleash.v1.ResetGameBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".unleash.v1.ResetGameBroadcast.players: object expected");
                        message.players[i] = $root.unleash.v1.UnleashPlayerInfo.fromObject(object.players[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ResetGameBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {unleash.v1.ResetGameBroadcast} message ResetGameBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResetGameBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    object.gameInfo = null;
                    object.self = null;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.unleash.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.unleash.v1.UnleashPlayerInfo.toObject(message.self, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.unleash.v1.UnleashPlayerInfo.toObject(message.players[j], options);
                }
                return object;
            };

            /**
             * Converts this ResetGameBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.ResetGameBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResetGameBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResetGameBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.ResetGameBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResetGameBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.ResetGameBroadcast";
            };

            return ResetGameBroadcast;
        })();

        v1.RunReq = (function() {

            /**
             * Properties of a RunReq.
             * @memberof unleash.v1
             * @interface IRunReq
             */

            /**
             * Constructs a new RunReq.
             * @memberof unleash.v1
             * @classdesc Represents a RunReq.
             * @implements IRunReq
             * @constructor
             * @param {unleash.v1.IRunReq=} [properties] Properties to set
             */
            function RunReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new RunReq instance using the specified properties.
             * @function create
             * @memberof unleash.v1.RunReq
             * @static
             * @param {unleash.v1.IRunReq=} [properties] Properties to set
             * @returns {unleash.v1.RunReq} RunReq instance
             */
            RunReq.create = function create(properties) {
                return new RunReq(properties);
            };

            /**
             * Encodes the specified RunReq message. Does not implicitly {@link unleash.v1.RunReq.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.RunReq
             * @static
             * @param {unleash.v1.IRunReq} message RunReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified RunReq message, length delimited. Does not implicitly {@link unleash.v1.RunReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.RunReq
             * @static
             * @param {unleash.v1.IRunReq} message RunReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RunReq message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.RunReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.RunReq} RunReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.RunReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RunReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.RunReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.RunReq} RunReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RunReq message.
             * @function verify
             * @memberof unleash.v1.RunReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RunReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a RunReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.RunReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.RunReq} RunReq
             */
            RunReq.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.RunReq)
                    return object;
                return new $root.unleash.v1.RunReq();
            };

            /**
             * Creates a plain object from a RunReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.RunReq
             * @static
             * @param {unleash.v1.RunReq} message RunReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RunReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this RunReq to JSON.
             * @function toJSON
             * @memberof unleash.v1.RunReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RunReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RunReq
             * @function getTypeUrl
             * @memberof unleash.v1.RunReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RunReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.RunReq";
            };

            return RunReq;
        })();

        v1.RunRes = (function() {

            /**
             * Properties of a RunRes.
             * @memberof unleash.v1
             * @interface IRunRes
             * @property {number|Long|null} [playerDistance] RunRes playerDistance
             */

            /**
             * Constructs a new RunRes.
             * @memberof unleash.v1
             * @classdesc Represents a RunRes.
             * @implements IRunRes
             * @constructor
             * @param {unleash.v1.IRunRes=} [properties] Properties to set
             */
            function RunRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RunRes playerDistance.
             * @member {number|Long} playerDistance
             * @memberof unleash.v1.RunRes
             * @instance
             */
            RunRes.prototype.playerDistance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RunRes instance using the specified properties.
             * @function create
             * @memberof unleash.v1.RunRes
             * @static
             * @param {unleash.v1.IRunRes=} [properties] Properties to set
             * @returns {unleash.v1.RunRes} RunRes instance
             */
            RunRes.create = function create(properties) {
                return new RunRes(properties);
            };

            /**
             * Encodes the specified RunRes message. Does not implicitly {@link unleash.v1.RunRes.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.RunRes
             * @static
             * @param {unleash.v1.IRunRes} message RunRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerDistance != null && Object.hasOwnProperty.call(message, "playerDistance"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerDistance);
                return writer;
            };

            /**
             * Encodes the specified RunRes message, length delimited. Does not implicitly {@link unleash.v1.RunRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.RunRes
             * @static
             * @param {unleash.v1.IRunRes} message RunRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RunRes message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.RunRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.RunRes} RunRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.RunRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerDistance = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RunRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.RunRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.RunRes} RunRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RunRes message.
             * @function verify
             * @memberof unleash.v1.RunRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RunRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (!$util.isInteger(message.playerDistance) && !(message.playerDistance && $util.isInteger(message.playerDistance.low) && $util.isInteger(message.playerDistance.high)))
                        return "playerDistance: integer|Long expected";
                return null;
            };

            /**
             * Creates a RunRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.RunRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.RunRes} RunRes
             */
            RunRes.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.RunRes)
                    return object;
                var message = new $root.unleash.v1.RunRes();
                if (object.playerDistance != null)
                    if ($util.Long)
                        (message.playerDistance = $util.Long.fromValue(object.playerDistance)).unsigned = false;
                    else if (typeof object.playerDistance === "string")
                        message.playerDistance = parseInt(object.playerDistance, 10);
                    else if (typeof object.playerDistance === "number")
                        message.playerDistance = object.playerDistance;
                    else if (typeof object.playerDistance === "object")
                        message.playerDistance = new $util.LongBits(object.playerDistance.low >>> 0, object.playerDistance.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a RunRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.RunRes
             * @static
             * @param {unleash.v1.RunRes} message RunRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RunRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerDistance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerDistance = options.longs === String ? "0" : 0;
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (typeof message.playerDistance === "number")
                        object.playerDistance = options.longs === String ? String(message.playerDistance) : message.playerDistance;
                    else
                        object.playerDistance = options.longs === String ? $util.Long.prototype.toString.call(message.playerDistance) : options.longs === Number ? new $util.LongBits(message.playerDistance.low >>> 0, message.playerDistance.high >>> 0).toNumber() : message.playerDistance;
                return object;
            };

            /**
             * Converts this RunRes to JSON.
             * @function toJSON
             * @memberof unleash.v1.RunRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RunRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RunRes
             * @function getTypeUrl
             * @memberof unleash.v1.RunRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RunRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.RunRes";
            };

            return RunRes;
        })();

        v1.RunBroadcast = (function() {

            /**
             * Properties of a RunBroadcast.
             * @memberof unleash.v1
             * @interface IRunBroadcast
             * @property {number|Long|null} [playerId] RunBroadcast playerId
             * @property {number|Long|null} [playerDistance] RunBroadcast playerDistance
             */

            /**
             * Constructs a new RunBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a RunBroadcast.
             * @implements IRunBroadcast
             * @constructor
             * @param {unleash.v1.IRunBroadcast=} [properties] Properties to set
             */
            function RunBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RunBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof unleash.v1.RunBroadcast
             * @instance
             */
            RunBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RunBroadcast playerDistance.
             * @member {number|Long} playerDistance
             * @memberof unleash.v1.RunBroadcast
             * @instance
             */
            RunBroadcast.prototype.playerDistance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RunBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {unleash.v1.IRunBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.RunBroadcast} RunBroadcast instance
             */
            RunBroadcast.create = function create(properties) {
                return new RunBroadcast(properties);
            };

            /**
             * Encodes the specified RunBroadcast message. Does not implicitly {@link unleash.v1.RunBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {unleash.v1.IRunBroadcast} message RunBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.playerDistance != null && Object.hasOwnProperty.call(message, "playerDistance"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerDistance);
                return writer;
            };

            /**
             * Encodes the specified RunBroadcast message, length delimited. Does not implicitly {@link unleash.v1.RunBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {unleash.v1.IRunBroadcast} message RunBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RunBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.RunBroadcast} RunBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.RunBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.playerDistance = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RunBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.RunBroadcast} RunBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RunBroadcast message.
             * @function verify
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RunBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (!$util.isInteger(message.playerDistance) && !(message.playerDistance && $util.isInteger(message.playerDistance.low) && $util.isInteger(message.playerDistance.high)))
                        return "playerDistance: integer|Long expected";
                return null;
            };

            /**
             * Creates a RunBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.RunBroadcast} RunBroadcast
             */
            RunBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.RunBroadcast)
                    return object;
                var message = new $root.unleash.v1.RunBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.playerDistance != null)
                    if ($util.Long)
                        (message.playerDistance = $util.Long.fromValue(object.playerDistance)).unsigned = false;
                    else if (typeof object.playerDistance === "string")
                        message.playerDistance = parseInt(object.playerDistance, 10);
                    else if (typeof object.playerDistance === "number")
                        message.playerDistance = object.playerDistance;
                    else if (typeof object.playerDistance === "object")
                        message.playerDistance = new $util.LongBits(object.playerDistance.low >>> 0, object.playerDistance.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a RunBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {unleash.v1.RunBroadcast} message RunBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RunBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerDistance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerDistance = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (typeof message.playerDistance === "number")
                        object.playerDistance = options.longs === String ? String(message.playerDistance) : message.playerDistance;
                    else
                        object.playerDistance = options.longs === String ? $util.Long.prototype.toString.call(message.playerDistance) : options.longs === Number ? new $util.LongBits(message.playerDistance.low >>> 0, message.playerDistance.high >>> 0).toNumber() : message.playerDistance;
                return object;
            };

            /**
             * Converts this RunBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.RunBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RunBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RunBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.RunBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RunBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.RunBroadcast";
            };

            return RunBroadcast;
        })();

        v1.HaltReq = (function() {

            /**
             * Properties of a HaltReq.
             * @memberof unleash.v1
             * @interface IHaltReq
             */

            /**
             * Constructs a new HaltReq.
             * @memberof unleash.v1
             * @classdesc Represents a HaltReq.
             * @implements IHaltReq
             * @constructor
             * @param {unleash.v1.IHaltReq=} [properties] Properties to set
             */
            function HaltReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new HaltReq instance using the specified properties.
             * @function create
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {unleash.v1.IHaltReq=} [properties] Properties to set
             * @returns {unleash.v1.HaltReq} HaltReq instance
             */
            HaltReq.create = function create(properties) {
                return new HaltReq(properties);
            };

            /**
             * Encodes the specified HaltReq message. Does not implicitly {@link unleash.v1.HaltReq.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {unleash.v1.IHaltReq} message HaltReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HaltReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified HaltReq message, length delimited. Does not implicitly {@link unleash.v1.HaltReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {unleash.v1.IHaltReq} message HaltReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HaltReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HaltReq message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.HaltReq} HaltReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HaltReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.HaltReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HaltReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.HaltReq} HaltReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HaltReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HaltReq message.
             * @function verify
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HaltReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a HaltReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.HaltReq} HaltReq
             */
            HaltReq.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.HaltReq)
                    return object;
                return new $root.unleash.v1.HaltReq();
            };

            /**
             * Creates a plain object from a HaltReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {unleash.v1.HaltReq} message HaltReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HaltReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this HaltReq to JSON.
             * @function toJSON
             * @memberof unleash.v1.HaltReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HaltReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HaltReq
             * @function getTypeUrl
             * @memberof unleash.v1.HaltReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HaltReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.HaltReq";
            };

            return HaltReq;
        })();

        v1.HaltRes = (function() {

            /**
             * Properties of a HaltRes.
             * @memberof unleash.v1
             * @interface IHaltRes
             * @property {number|Long|null} [playerDistance] HaltRes playerDistance
             */

            /**
             * Constructs a new HaltRes.
             * @memberof unleash.v1
             * @classdesc Represents a HaltRes.
             * @implements IHaltRes
             * @constructor
             * @param {unleash.v1.IHaltRes=} [properties] Properties to set
             */
            function HaltRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HaltRes playerDistance.
             * @member {number|Long} playerDistance
             * @memberof unleash.v1.HaltRes
             * @instance
             */
            HaltRes.prototype.playerDistance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new HaltRes instance using the specified properties.
             * @function create
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {unleash.v1.IHaltRes=} [properties] Properties to set
             * @returns {unleash.v1.HaltRes} HaltRes instance
             */
            HaltRes.create = function create(properties) {
                return new HaltRes(properties);
            };

            /**
             * Encodes the specified HaltRes message. Does not implicitly {@link unleash.v1.HaltRes.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {unleash.v1.IHaltRes} message HaltRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HaltRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerDistance != null && Object.hasOwnProperty.call(message, "playerDistance"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerDistance);
                return writer;
            };

            /**
             * Encodes the specified HaltRes message, length delimited. Does not implicitly {@link unleash.v1.HaltRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {unleash.v1.IHaltRes} message HaltRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HaltRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HaltRes message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.HaltRes} HaltRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HaltRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.HaltRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerDistance = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HaltRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.HaltRes} HaltRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HaltRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HaltRes message.
             * @function verify
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HaltRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (!$util.isInteger(message.playerDistance) && !(message.playerDistance && $util.isInteger(message.playerDistance.low) && $util.isInteger(message.playerDistance.high)))
                        return "playerDistance: integer|Long expected";
                return null;
            };

            /**
             * Creates a HaltRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.HaltRes} HaltRes
             */
            HaltRes.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.HaltRes)
                    return object;
                var message = new $root.unleash.v1.HaltRes();
                if (object.playerDistance != null)
                    if ($util.Long)
                        (message.playerDistance = $util.Long.fromValue(object.playerDistance)).unsigned = false;
                    else if (typeof object.playerDistance === "string")
                        message.playerDistance = parseInt(object.playerDistance, 10);
                    else if (typeof object.playerDistance === "number")
                        message.playerDistance = object.playerDistance;
                    else if (typeof object.playerDistance === "object")
                        message.playerDistance = new $util.LongBits(object.playerDistance.low >>> 0, object.playerDistance.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a HaltRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {unleash.v1.HaltRes} message HaltRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HaltRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerDistance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerDistance = options.longs === String ? "0" : 0;
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (typeof message.playerDistance === "number")
                        object.playerDistance = options.longs === String ? String(message.playerDistance) : message.playerDistance;
                    else
                        object.playerDistance = options.longs === String ? $util.Long.prototype.toString.call(message.playerDistance) : options.longs === Number ? new $util.LongBits(message.playerDistance.low >>> 0, message.playerDistance.high >>> 0).toNumber() : message.playerDistance;
                return object;
            };

            /**
             * Converts this HaltRes to JSON.
             * @function toJSON
             * @memberof unleash.v1.HaltRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HaltRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HaltRes
             * @function getTypeUrl
             * @memberof unleash.v1.HaltRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HaltRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.HaltRes";
            };

            return HaltRes;
        })();

        v1.HaltBroadcast = (function() {

            /**
             * Properties of a HaltBroadcast.
             * @memberof unleash.v1
             * @interface IHaltBroadcast
             * @property {number|Long|null} [playerId] HaltBroadcast playerId
             * @property {number|Long|null} [playerDistance] HaltBroadcast playerDistance
             */

            /**
             * Constructs a new HaltBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a HaltBroadcast.
             * @implements IHaltBroadcast
             * @constructor
             * @param {unleash.v1.IHaltBroadcast=} [properties] Properties to set
             */
            function HaltBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HaltBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof unleash.v1.HaltBroadcast
             * @instance
             */
            HaltBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * HaltBroadcast playerDistance.
             * @member {number|Long} playerDistance
             * @memberof unleash.v1.HaltBroadcast
             * @instance
             */
            HaltBroadcast.prototype.playerDistance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new HaltBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {unleash.v1.IHaltBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.HaltBroadcast} HaltBroadcast instance
             */
            HaltBroadcast.create = function create(properties) {
                return new HaltBroadcast(properties);
            };

            /**
             * Encodes the specified HaltBroadcast message. Does not implicitly {@link unleash.v1.HaltBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {unleash.v1.IHaltBroadcast} message HaltBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HaltBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.playerDistance != null && Object.hasOwnProperty.call(message, "playerDistance"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerDistance);
                return writer;
            };

            /**
             * Encodes the specified HaltBroadcast message, length delimited. Does not implicitly {@link unleash.v1.HaltBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {unleash.v1.IHaltBroadcast} message HaltBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HaltBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HaltBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.HaltBroadcast} HaltBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HaltBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.HaltBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.playerDistance = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HaltBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.HaltBroadcast} HaltBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HaltBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HaltBroadcast message.
             * @function verify
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HaltBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (!$util.isInteger(message.playerDistance) && !(message.playerDistance && $util.isInteger(message.playerDistance.low) && $util.isInteger(message.playerDistance.high)))
                        return "playerDistance: integer|Long expected";
                return null;
            };

            /**
             * Creates a HaltBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.HaltBroadcast} HaltBroadcast
             */
            HaltBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.HaltBroadcast)
                    return object;
                var message = new $root.unleash.v1.HaltBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.playerDistance != null)
                    if ($util.Long)
                        (message.playerDistance = $util.Long.fromValue(object.playerDistance)).unsigned = false;
                    else if (typeof object.playerDistance === "string")
                        message.playerDistance = parseInt(object.playerDistance, 10);
                    else if (typeof object.playerDistance === "number")
                        message.playerDistance = object.playerDistance;
                    else if (typeof object.playerDistance === "object")
                        message.playerDistance = new $util.LongBits(object.playerDistance.low >>> 0, object.playerDistance.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a HaltBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {unleash.v1.HaltBroadcast} message HaltBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HaltBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerDistance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerDistance = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (typeof message.playerDistance === "number")
                        object.playerDistance = options.longs === String ? String(message.playerDistance) : message.playerDistance;
                    else
                        object.playerDistance = options.longs === String ? $util.Long.prototype.toString.call(message.playerDistance) : options.longs === Number ? new $util.LongBits(message.playerDistance.low >>> 0, message.playerDistance.high >>> 0).toNumber() : message.playerDistance;
                return object;
            };

            /**
             * Converts this HaltBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.HaltBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HaltBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HaltBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.HaltBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HaltBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.HaltBroadcast";
            };

            return HaltBroadcast;
        })();

        v1.FirstRunBroadcast = (function() {

            /**
             * Properties of a FirstRunBroadcast.
             * @memberof unleash.v1
             * @interface IFirstRunBroadcast
             */

            /**
             * Constructs a new FirstRunBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a FirstRunBroadcast.
             * @implements IFirstRunBroadcast
             * @constructor
             * @param {unleash.v1.IFirstRunBroadcast=} [properties] Properties to set
             */
            function FirstRunBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new FirstRunBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {unleash.v1.IFirstRunBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.FirstRunBroadcast} FirstRunBroadcast instance
             */
            FirstRunBroadcast.create = function create(properties) {
                return new FirstRunBroadcast(properties);
            };

            /**
             * Encodes the specified FirstRunBroadcast message. Does not implicitly {@link unleash.v1.FirstRunBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {unleash.v1.IFirstRunBroadcast} message FirstRunBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FirstRunBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified FirstRunBroadcast message, length delimited. Does not implicitly {@link unleash.v1.FirstRunBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {unleash.v1.IFirstRunBroadcast} message FirstRunBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FirstRunBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FirstRunBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.FirstRunBroadcast} FirstRunBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FirstRunBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.FirstRunBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FirstRunBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.FirstRunBroadcast} FirstRunBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FirstRunBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FirstRunBroadcast message.
             * @function verify
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FirstRunBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a FirstRunBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.FirstRunBroadcast} FirstRunBroadcast
             */
            FirstRunBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.FirstRunBroadcast)
                    return object;
                return new $root.unleash.v1.FirstRunBroadcast();
            };

            /**
             * Creates a plain object from a FirstRunBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {unleash.v1.FirstRunBroadcast} message FirstRunBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FirstRunBroadcast.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this FirstRunBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.FirstRunBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FirstRunBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FirstRunBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.FirstRunBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FirstRunBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.FirstRunBroadcast";
            };

            return FirstRunBroadcast;
        })();

        v1.WarnBroadcast = (function() {

            /**
             * Properties of a WarnBroadcast.
             * @memberof unleash.v1
             * @interface IWarnBroadcast
             */

            /**
             * Constructs a new WarnBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a WarnBroadcast.
             * @implements IWarnBroadcast
             * @constructor
             * @param {unleash.v1.IWarnBroadcast=} [properties] Properties to set
             */
            function WarnBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new WarnBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {unleash.v1.IWarnBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.WarnBroadcast} WarnBroadcast instance
             */
            WarnBroadcast.create = function create(properties) {
                return new WarnBroadcast(properties);
            };

            /**
             * Encodes the specified WarnBroadcast message. Does not implicitly {@link unleash.v1.WarnBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {unleash.v1.IWarnBroadcast} message WarnBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WarnBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified WarnBroadcast message, length delimited. Does not implicitly {@link unleash.v1.WarnBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {unleash.v1.IWarnBroadcast} message WarnBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WarnBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WarnBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.WarnBroadcast} WarnBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WarnBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.WarnBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WarnBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.WarnBroadcast} WarnBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WarnBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WarnBroadcast message.
             * @function verify
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WarnBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a WarnBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.WarnBroadcast} WarnBroadcast
             */
            WarnBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.WarnBroadcast)
                    return object;
                return new $root.unleash.v1.WarnBroadcast();
            };

            /**
             * Creates a plain object from a WarnBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {unleash.v1.WarnBroadcast} message WarnBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WarnBroadcast.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this WarnBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.WarnBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WarnBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WarnBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.WarnBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WarnBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.WarnBroadcast";
            };

            return WarnBroadcast;
        })();

        v1.DeadBroadcast = (function() {

            /**
             * Properties of a DeadBroadcast.
             * @memberof unleash.v1
             * @interface IDeadBroadcast
             * @property {Array.<unleash.v1.IUnleashPlayerInfo>|null} [deadPlayers] DeadBroadcast deadPlayers
             * @property {number|Long|null} [firstPlayerId] DeadBroadcast firstPlayerId
             */

            /**
             * Constructs a new DeadBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a DeadBroadcast.
             * @implements IDeadBroadcast
             * @constructor
             * @param {unleash.v1.IDeadBroadcast=} [properties] Properties to set
             */
            function DeadBroadcast(properties) {
                this.deadPlayers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeadBroadcast deadPlayers.
             * @member {Array.<unleash.v1.IUnleashPlayerInfo>} deadPlayers
             * @memberof unleash.v1.DeadBroadcast
             * @instance
             */
            DeadBroadcast.prototype.deadPlayers = $util.emptyArray;

            /**
             * DeadBroadcast firstPlayerId.
             * @member {number|Long} firstPlayerId
             * @memberof unleash.v1.DeadBroadcast
             * @instance
             */
            DeadBroadcast.prototype.firstPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new DeadBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {unleash.v1.IDeadBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.DeadBroadcast} DeadBroadcast instance
             */
            DeadBroadcast.create = function create(properties) {
                return new DeadBroadcast(properties);
            };

            /**
             * Encodes the specified DeadBroadcast message. Does not implicitly {@link unleash.v1.DeadBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {unleash.v1.IDeadBroadcast} message DeadBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeadBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deadPlayers != null && message.deadPlayers.length)
                    for (var i = 0; i < message.deadPlayers.length; ++i)
                        $root.unleash.v1.UnleashPlayerInfo.encode(message.deadPlayers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.firstPlayerId != null && Object.hasOwnProperty.call(message, "firstPlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.firstPlayerId);
                return writer;
            };

            /**
             * Encodes the specified DeadBroadcast message, length delimited. Does not implicitly {@link unleash.v1.DeadBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {unleash.v1.IDeadBroadcast} message DeadBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeadBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeadBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.DeadBroadcast} DeadBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeadBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.DeadBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.deadPlayers && message.deadPlayers.length))
                                message.deadPlayers = [];
                            message.deadPlayers.push($root.unleash.v1.UnleashPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.firstPlayerId = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeadBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.DeadBroadcast} DeadBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeadBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeadBroadcast message.
             * @function verify
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeadBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deadPlayers != null && message.hasOwnProperty("deadPlayers")) {
                    if (!Array.isArray(message.deadPlayers))
                        return "deadPlayers: array expected";
                    for (var i = 0; i < message.deadPlayers.length; ++i) {
                        var error = $root.unleash.v1.UnleashPlayerInfo.verify(message.deadPlayers[i]);
                        if (error)
                            return "deadPlayers." + error;
                    }
                }
                if (message.firstPlayerId != null && message.hasOwnProperty("firstPlayerId"))
                    if (!$util.isInteger(message.firstPlayerId) && !(message.firstPlayerId && $util.isInteger(message.firstPlayerId.low) && $util.isInteger(message.firstPlayerId.high)))
                        return "firstPlayerId: integer|Long expected";
                return null;
            };

            /**
             * Creates a DeadBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.DeadBroadcast} DeadBroadcast
             */
            DeadBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.DeadBroadcast)
                    return object;
                var message = new $root.unleash.v1.DeadBroadcast();
                if (object.deadPlayers) {
                    if (!Array.isArray(object.deadPlayers))
                        throw TypeError(".unleash.v1.DeadBroadcast.deadPlayers: array expected");
                    message.deadPlayers = [];
                    for (var i = 0; i < object.deadPlayers.length; ++i) {
                        if (typeof object.deadPlayers[i] !== "object")
                            throw TypeError(".unleash.v1.DeadBroadcast.deadPlayers: object expected");
                        message.deadPlayers[i] = $root.unleash.v1.UnleashPlayerInfo.fromObject(object.deadPlayers[i]);
                    }
                }
                if (object.firstPlayerId != null)
                    if ($util.Long)
                        (message.firstPlayerId = $util.Long.fromValue(object.firstPlayerId)).unsigned = false;
                    else if (typeof object.firstPlayerId === "string")
                        message.firstPlayerId = parseInt(object.firstPlayerId, 10);
                    else if (typeof object.firstPlayerId === "number")
                        message.firstPlayerId = object.firstPlayerId;
                    else if (typeof object.firstPlayerId === "object")
                        message.firstPlayerId = new $util.LongBits(object.firstPlayerId.low >>> 0, object.firstPlayerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a DeadBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {unleash.v1.DeadBroadcast} message DeadBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeadBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.deadPlayers = [];
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.firstPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.firstPlayerId = options.longs === String ? "0" : 0;
                if (message.deadPlayers && message.deadPlayers.length) {
                    object.deadPlayers = [];
                    for (var j = 0; j < message.deadPlayers.length; ++j)
                        object.deadPlayers[j] = $root.unleash.v1.UnleashPlayerInfo.toObject(message.deadPlayers[j], options);
                }
                if (message.firstPlayerId != null && message.hasOwnProperty("firstPlayerId"))
                    if (typeof message.firstPlayerId === "number")
                        object.firstPlayerId = options.longs === String ? String(message.firstPlayerId) : message.firstPlayerId;
                    else
                        object.firstPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.firstPlayerId) : options.longs === Number ? new $util.LongBits(message.firstPlayerId.low >>> 0, message.firstPlayerId.high >>> 0).toNumber() : message.firstPlayerId;
                return object;
            };

            /**
             * Converts this DeadBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.DeadBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeadBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DeadBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.DeadBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeadBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.DeadBroadcast";
            };

            return DeadBroadcast;
        })();

        v1.WinBroadcast = (function() {

            /**
             * Properties of a WinBroadcast.
             * @memberof unleash.v1
             * @interface IWinBroadcast
             * @property {number|Long|null} [playerId] WinBroadcast playerId
             * @property {number|Long|null} [winCoin] WinBroadcast winCoin
             * @property {number|Long|null} [playerDistance] WinBroadcast playerDistance
             */

            /**
             * Constructs a new WinBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a WinBroadcast.
             * @implements IWinBroadcast
             * @constructor
             * @param {unleash.v1.IWinBroadcast=} [properties] Properties to set
             */
            function WinBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WinBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof unleash.v1.WinBroadcast
             * @instance
             */
            WinBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WinBroadcast winCoin.
             * @member {number|Long} winCoin
             * @memberof unleash.v1.WinBroadcast
             * @instance
             */
            WinBroadcast.prototype.winCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WinBroadcast playerDistance.
             * @member {number|Long} playerDistance
             * @memberof unleash.v1.WinBroadcast
             * @instance
             */
            WinBroadcast.prototype.playerDistance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new WinBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {unleash.v1.IWinBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.WinBroadcast} WinBroadcast instance
             */
            WinBroadcast.create = function create(properties) {
                return new WinBroadcast(properties);
            };

            /**
             * Encodes the specified WinBroadcast message. Does not implicitly {@link unleash.v1.WinBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {unleash.v1.IWinBroadcast} message WinBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WinBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.winCoin != null && Object.hasOwnProperty.call(message, "winCoin"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.winCoin);
                if (message.playerDistance != null && Object.hasOwnProperty.call(message, "playerDistance"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.playerDistance);
                return writer;
            };

            /**
             * Encodes the specified WinBroadcast message, length delimited. Does not implicitly {@link unleash.v1.WinBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {unleash.v1.IWinBroadcast} message WinBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WinBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WinBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.WinBroadcast} WinBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WinBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.WinBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.winCoin = reader.int64();
                            break;
                        }
                    case 4: {
                            message.playerDistance = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WinBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.WinBroadcast} WinBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WinBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WinBroadcast message.
             * @function verify
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WinBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (!$util.isInteger(message.winCoin) && !(message.winCoin && $util.isInteger(message.winCoin.low) && $util.isInteger(message.winCoin.high)))
                        return "winCoin: integer|Long expected";
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (!$util.isInteger(message.playerDistance) && !(message.playerDistance && $util.isInteger(message.playerDistance.low) && $util.isInteger(message.playerDistance.high)))
                        return "playerDistance: integer|Long expected";
                return null;
            };

            /**
             * Creates a WinBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.WinBroadcast} WinBroadcast
             */
            WinBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.WinBroadcast)
                    return object;
                var message = new $root.unleash.v1.WinBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.winCoin != null)
                    if ($util.Long)
                        (message.winCoin = $util.Long.fromValue(object.winCoin)).unsigned = false;
                    else if (typeof object.winCoin === "string")
                        message.winCoin = parseInt(object.winCoin, 10);
                    else if (typeof object.winCoin === "number")
                        message.winCoin = object.winCoin;
                    else if (typeof object.winCoin === "object")
                        message.winCoin = new $util.LongBits(object.winCoin.low >>> 0, object.winCoin.high >>> 0).toNumber();
                if (object.playerDistance != null)
                    if ($util.Long)
                        (message.playerDistance = $util.Long.fromValue(object.playerDistance)).unsigned = false;
                    else if (typeof object.playerDistance === "string")
                        message.playerDistance = parseInt(object.playerDistance, 10);
                    else if (typeof object.playerDistance === "number")
                        message.playerDistance = object.playerDistance;
                    else if (typeof object.playerDistance === "object")
                        message.playerDistance = new $util.LongBits(object.playerDistance.low >>> 0, object.playerDistance.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a WinBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {unleash.v1.WinBroadcast} message WinBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WinBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winCoin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winCoin = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerDistance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerDistance = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (typeof message.winCoin === "number")
                        object.winCoin = options.longs === String ? String(message.winCoin) : message.winCoin;
                    else
                        object.winCoin = options.longs === String ? $util.Long.prototype.toString.call(message.winCoin) : options.longs === Number ? new $util.LongBits(message.winCoin.low >>> 0, message.winCoin.high >>> 0).toNumber() : message.winCoin;
                if (message.playerDistance != null && message.hasOwnProperty("playerDistance"))
                    if (typeof message.playerDistance === "number")
                        object.playerDistance = options.longs === String ? String(message.playerDistance) : message.playerDistance;
                    else
                        object.playerDistance = options.longs === String ? $util.Long.prototype.toString.call(message.playerDistance) : options.longs === Number ? new $util.LongBits(message.playerDistance.low >>> 0, message.playerDistance.high >>> 0).toNumber() : message.playerDistance;
                return object;
            };

            /**
             * Converts this WinBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.WinBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WinBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WinBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.WinBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WinBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.WinBroadcast";
            };

            return WinBroadcast;
        })();

        v1.PrizeBroadcast = (function() {

            /**
             * Properties of a PrizeBroadcast.
             * @memberof unleash.v1
             * @interface IPrizeBroadcast
             * @property {number|Long|null} [winerId] PrizeBroadcast winerId
             * @property {number|Long|null} [winCoin] PrizeBroadcast winCoin
             * @property {number|Long|null} [winCompleteMilliseconds] PrizeBroadcast winCompleteMilliseconds
             * @property {Array.<unleash.v1.IUnleashPlayerInfo>|null} [players] PrizeBroadcast players
             */

            /**
             * Constructs a new PrizeBroadcast.
             * @memberof unleash.v1
             * @classdesc Represents a PrizeBroadcast.
             * @implements IPrizeBroadcast
             * @constructor
             * @param {unleash.v1.IPrizeBroadcast=} [properties] Properties to set
             */
            function PrizeBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PrizeBroadcast winerId.
             * @member {number|Long} winerId
             * @memberof unleash.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.winerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PrizeBroadcast winCoin.
             * @member {number|Long} winCoin
             * @memberof unleash.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.winCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PrizeBroadcast winCompleteMilliseconds.
             * @member {number|Long} winCompleteMilliseconds
             * @memberof unleash.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.winCompleteMilliseconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PrizeBroadcast players.
             * @member {Array.<unleash.v1.IUnleashPlayerInfo>} players
             * @memberof unleash.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.players = $util.emptyArray;

            /**
             * Creates a new PrizeBroadcast instance using the specified properties.
             * @function create
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {unleash.v1.IPrizeBroadcast=} [properties] Properties to set
             * @returns {unleash.v1.PrizeBroadcast} PrizeBroadcast instance
             */
            PrizeBroadcast.create = function create(properties) {
                return new PrizeBroadcast(properties);
            };

            /**
             * Encodes the specified PrizeBroadcast message. Does not implicitly {@link unleash.v1.PrizeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {unleash.v1.IPrizeBroadcast} message PrizeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.winerId != null && Object.hasOwnProperty.call(message, "winerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.winerId);
                if (message.winCoin != null && Object.hasOwnProperty.call(message, "winCoin"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.winCoin);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.unleash.v1.UnleashPlayerInfo.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.winCompleteMilliseconds != null && Object.hasOwnProperty.call(message, "winCompleteMilliseconds"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.winCompleteMilliseconds);
                return writer;
            };

            /**
             * Encodes the specified PrizeBroadcast message, length delimited. Does not implicitly {@link unleash.v1.PrizeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {unleash.v1.IPrizeBroadcast} message PrizeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PrizeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.PrizeBroadcast} PrizeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrizeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.PrizeBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.winerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.winCoin = reader.int64();
                            break;
                        }
                    case 5: {
                            message.winCompleteMilliseconds = reader.int64();
                            break;
                        }
                    case 4: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.unleash.v1.UnleashPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PrizeBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.PrizeBroadcast} PrizeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrizeBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PrizeBroadcast message.
             * @function verify
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrizeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.winerId != null && message.hasOwnProperty("winerId"))
                    if (!$util.isInteger(message.winerId) && !(message.winerId && $util.isInteger(message.winerId.low) && $util.isInteger(message.winerId.high)))
                        return "winerId: integer|Long expected";
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (!$util.isInteger(message.winCoin) && !(message.winCoin && $util.isInteger(message.winCoin.low) && $util.isInteger(message.winCoin.high)))
                        return "winCoin: integer|Long expected";
                if (message.winCompleteMilliseconds != null && message.hasOwnProperty("winCompleteMilliseconds"))
                    if (!$util.isInteger(message.winCompleteMilliseconds) && !(message.winCompleteMilliseconds && $util.isInteger(message.winCompleteMilliseconds.low) && $util.isInteger(message.winCompleteMilliseconds.high)))
                        return "winCompleteMilliseconds: integer|Long expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.unleash.v1.UnleashPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PrizeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.PrizeBroadcast} PrizeBroadcast
             */
            PrizeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.PrizeBroadcast)
                    return object;
                var message = new $root.unleash.v1.PrizeBroadcast();
                if (object.winerId != null)
                    if ($util.Long)
                        (message.winerId = $util.Long.fromValue(object.winerId)).unsigned = false;
                    else if (typeof object.winerId === "string")
                        message.winerId = parseInt(object.winerId, 10);
                    else if (typeof object.winerId === "number")
                        message.winerId = object.winerId;
                    else if (typeof object.winerId === "object")
                        message.winerId = new $util.LongBits(object.winerId.low >>> 0, object.winerId.high >>> 0).toNumber();
                if (object.winCoin != null)
                    if ($util.Long)
                        (message.winCoin = $util.Long.fromValue(object.winCoin)).unsigned = false;
                    else if (typeof object.winCoin === "string")
                        message.winCoin = parseInt(object.winCoin, 10);
                    else if (typeof object.winCoin === "number")
                        message.winCoin = object.winCoin;
                    else if (typeof object.winCoin === "object")
                        message.winCoin = new $util.LongBits(object.winCoin.low >>> 0, object.winCoin.high >>> 0).toNumber();
                if (object.winCompleteMilliseconds != null)
                    if ($util.Long)
                        (message.winCompleteMilliseconds = $util.Long.fromValue(object.winCompleteMilliseconds)).unsigned = false;
                    else if (typeof object.winCompleteMilliseconds === "string")
                        message.winCompleteMilliseconds = parseInt(object.winCompleteMilliseconds, 10);
                    else if (typeof object.winCompleteMilliseconds === "number")
                        message.winCompleteMilliseconds = object.winCompleteMilliseconds;
                    else if (typeof object.winCompleteMilliseconds === "object")
                        message.winCompleteMilliseconds = new $util.LongBits(object.winCompleteMilliseconds.low >>> 0, object.winCompleteMilliseconds.high >>> 0).toNumber();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".unleash.v1.PrizeBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".unleash.v1.PrizeBroadcast.players: object expected");
                        message.players[i] = $root.unleash.v1.UnleashPlayerInfo.fromObject(object.players[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PrizeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {unleash.v1.PrizeBroadcast} message PrizeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrizeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winerId = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winCoin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winCoin = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winCompleteMilliseconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winCompleteMilliseconds = options.longs === String ? "0" : 0;
                }
                if (message.winerId != null && message.hasOwnProperty("winerId"))
                    if (typeof message.winerId === "number")
                        object.winerId = options.longs === String ? String(message.winerId) : message.winerId;
                    else
                        object.winerId = options.longs === String ? $util.Long.prototype.toString.call(message.winerId) : options.longs === Number ? new $util.LongBits(message.winerId.low >>> 0, message.winerId.high >>> 0).toNumber() : message.winerId;
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (typeof message.winCoin === "number")
                        object.winCoin = options.longs === String ? String(message.winCoin) : message.winCoin;
                    else
                        object.winCoin = options.longs === String ? $util.Long.prototype.toString.call(message.winCoin) : options.longs === Number ? new $util.LongBits(message.winCoin.low >>> 0, message.winCoin.high >>> 0).toNumber() : message.winCoin;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.unleash.v1.UnleashPlayerInfo.toObject(message.players[j], options);
                }
                if (message.winCompleteMilliseconds != null && message.hasOwnProperty("winCompleteMilliseconds"))
                    if (typeof message.winCompleteMilliseconds === "number")
                        object.winCompleteMilliseconds = options.longs === String ? String(message.winCompleteMilliseconds) : message.winCompleteMilliseconds;
                    else
                        object.winCompleteMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.winCompleteMilliseconds) : options.longs === Number ? new $util.LongBits(message.winCompleteMilliseconds.low >>> 0, message.winCompleteMilliseconds.high >>> 0).toNumber() : message.winCompleteMilliseconds;
                return object;
            };

            /**
             * Converts this PrizeBroadcast to JSON.
             * @function toJSON
             * @memberof unleash.v1.PrizeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrizeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PrizeBroadcast
             * @function getTypeUrl
             * @memberof unleash.v1.PrizeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PrizeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.PrizeBroadcast";
            };

            return PrizeBroadcast;
        })();

        v1.GetUnleashPlayerHistoryReq = (function() {

            /**
             * Properties of a GetUnleashPlayerHistoryReq.
             * @memberof unleash.v1
             * @interface IGetUnleashPlayerHistoryReq
             * @property {number|Long|null} [startTime] GetUnleashPlayerHistoryReq startTime
             * @property {number|Long|null} [endTime] GetUnleashPlayerHistoryReq endTime
             * @property {number|null} [page] GetUnleashPlayerHistoryReq page
             */

            /**
             * Constructs a new GetUnleashPlayerHistoryReq.
             * @memberof unleash.v1
             * @classdesc Represents a GetUnleashPlayerHistoryReq.
             * @implements IGetUnleashPlayerHistoryReq
             * @constructor
             * @param {unleash.v1.IGetUnleashPlayerHistoryReq=} [properties] Properties to set
             */
            function GetUnleashPlayerHistoryReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetUnleashPlayerHistoryReq startTime.
             * @member {number|Long} startTime
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @instance
             */
            GetUnleashPlayerHistoryReq.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetUnleashPlayerHistoryReq endTime.
             * @member {number|Long} endTime
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @instance
             */
            GetUnleashPlayerHistoryReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetUnleashPlayerHistoryReq page.
             * @member {number} page
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @instance
             */
            GetUnleashPlayerHistoryReq.prototype.page = 0;

            /**
             * Creates a new GetUnleashPlayerHistoryReq instance using the specified properties.
             * @function create
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {unleash.v1.IGetUnleashPlayerHistoryReq=} [properties] Properties to set
             * @returns {unleash.v1.GetUnleashPlayerHistoryReq} GetUnleashPlayerHistoryReq instance
             */
            GetUnleashPlayerHistoryReq.create = function create(properties) {
                return new GetUnleashPlayerHistoryReq(properties);
            };

            /**
             * Encodes the specified GetUnleashPlayerHistoryReq message. Does not implicitly {@link unleash.v1.GetUnleashPlayerHistoryReq.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {unleash.v1.IGetUnleashPlayerHistoryReq} message GetUnleashPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUnleashPlayerHistoryReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTime);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTime);
                if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.page);
                return writer;
            };

            /**
             * Encodes the specified GetUnleashPlayerHistoryReq message, length delimited. Does not implicitly {@link unleash.v1.GetUnleashPlayerHistoryReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {unleash.v1.IGetUnleashPlayerHistoryReq} message GetUnleashPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUnleashPlayerHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUnleashPlayerHistoryReq message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.GetUnleashPlayerHistoryReq} GetUnleashPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUnleashPlayerHistoryReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.GetUnleashPlayerHistoryReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.startTime = reader.int64();
                            break;
                        }
                    case 2: {
                            message.endTime = reader.int64();
                            break;
                        }
                    case 3: {
                            message.page = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetUnleashPlayerHistoryReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.GetUnleashPlayerHistoryReq} GetUnleashPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUnleashPlayerHistoryReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUnleashPlayerHistoryReq message.
             * @function verify
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUnleashPlayerHistoryReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                        return "startTime: integer|Long expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.page != null && message.hasOwnProperty("page"))
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                return null;
            };

            /**
             * Creates a GetUnleashPlayerHistoryReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.GetUnleashPlayerHistoryReq} GetUnleashPlayerHistoryReq
             */
            GetUnleashPlayerHistoryReq.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.GetUnleashPlayerHistoryReq)
                    return object;
                var message = new $root.unleash.v1.GetUnleashPlayerHistoryReq();
                if (object.startTime != null)
                    if ($util.Long)
                        (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
                    else if (typeof object.startTime === "string")
                        message.startTime = parseInt(object.startTime, 10);
                    else if (typeof object.startTime === "number")
                        message.startTime = object.startTime;
                    else if (typeof object.startTime === "object")
                        message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
                if (object.endTime != null)
                    if ($util.Long)
                        (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = false;
                    else if (typeof object.endTime === "string")
                        message.endTime = parseInt(object.endTime, 10);
                    else if (typeof object.endTime === "number")
                        message.endTime = object.endTime;
                    else if (typeof object.endTime === "object")
                        message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber();
                if (object.page != null)
                    message.page = object.page | 0;
                return message;
            };

            /**
             * Creates a plain object from a GetUnleashPlayerHistoryReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {unleash.v1.GetUnleashPlayerHistoryReq} message GetUnleashPlayerHistoryReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUnleashPlayerHistoryReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endTime = options.longs === String ? "0" : 0;
                    object.page = 0;
                }
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (typeof message.startTime === "number")
                        object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                    else
                        object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (typeof message.endTime === "number")
                        object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                    else
                        object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
                if (message.page != null && message.hasOwnProperty("page"))
                    object.page = message.page;
                return object;
            };

            /**
             * Converts this GetUnleashPlayerHistoryReq to JSON.
             * @function toJSON
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUnleashPlayerHistoryReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetUnleashPlayerHistoryReq
             * @function getTypeUrl
             * @memberof unleash.v1.GetUnleashPlayerHistoryReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetUnleashPlayerHistoryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.GetUnleashPlayerHistoryReq";
            };

            return GetUnleashPlayerHistoryReq;
        })();

        v1.UnleashPlayerDetail = (function() {

            /**
             * Properties of an UnleashPlayerDetail.
             * @memberof unleash.v1
             * @interface IUnleashPlayerDetail
             * @property {string|null} [rank] UnleashPlayerDetail rank
             * @property {string|null} [nickname] UnleashPlayerDetail nickname
             * @property {string|null} [percentage] UnleashPlayerDetail percentage
             * @property {string|null} [avatar] UnleashPlayerDetail avatar
             * @property {boolean|null} [isSelf] UnleashPlayerDetail isSelf
             * @property {number|Long|null} [userId] UnleashPlayerDetail userId
             */

            /**
             * Constructs a new UnleashPlayerDetail.
             * @memberof unleash.v1
             * @classdesc Represents an UnleashPlayerDetail.
             * @implements IUnleashPlayerDetail
             * @constructor
             * @param {unleash.v1.IUnleashPlayerDetail=} [properties] Properties to set
             */
            function UnleashPlayerDetail(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UnleashPlayerDetail rank.
             * @member {string} rank
             * @memberof unleash.v1.UnleashPlayerDetail
             * @instance
             */
            UnleashPlayerDetail.prototype.rank = "";

            /**
             * UnleashPlayerDetail nickname.
             * @member {string} nickname
             * @memberof unleash.v1.UnleashPlayerDetail
             * @instance
             */
            UnleashPlayerDetail.prototype.nickname = "";

            /**
             * UnleashPlayerDetail percentage.
             * @member {string} percentage
             * @memberof unleash.v1.UnleashPlayerDetail
             * @instance
             */
            UnleashPlayerDetail.prototype.percentage = "";

            /**
             * UnleashPlayerDetail avatar.
             * @member {string} avatar
             * @memberof unleash.v1.UnleashPlayerDetail
             * @instance
             */
            UnleashPlayerDetail.prototype.avatar = "";

            /**
             * UnleashPlayerDetail isSelf.
             * @member {boolean} isSelf
             * @memberof unleash.v1.UnleashPlayerDetail
             * @instance
             */
            UnleashPlayerDetail.prototype.isSelf = false;

            /**
             * UnleashPlayerDetail userId.
             * @member {number|Long} userId
             * @memberof unleash.v1.UnleashPlayerDetail
             * @instance
             */
            UnleashPlayerDetail.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new UnleashPlayerDetail instance using the specified properties.
             * @function create
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {unleash.v1.IUnleashPlayerDetail=} [properties] Properties to set
             * @returns {unleash.v1.UnleashPlayerDetail} UnleashPlayerDetail instance
             */
            UnleashPlayerDetail.create = function create(properties) {
                return new UnleashPlayerDetail(properties);
            };

            /**
             * Encodes the specified UnleashPlayerDetail message. Does not implicitly {@link unleash.v1.UnleashPlayerDetail.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {unleash.v1.IUnleashPlayerDetail} message UnleashPlayerDetail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashPlayerDetail.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.rank);
                if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                if (message.percentage != null && Object.hasOwnProperty.call(message, "percentage"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.percentage);
                if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
                if (message.isSelf != null && Object.hasOwnProperty.call(message, "isSelf"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isSelf);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified UnleashPlayerDetail message, length delimited. Does not implicitly {@link unleash.v1.UnleashPlayerDetail.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {unleash.v1.IUnleashPlayerDetail} message UnleashPlayerDetail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashPlayerDetail.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnleashPlayerDetail message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.UnleashPlayerDetail} UnleashPlayerDetail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashPlayerDetail.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.UnleashPlayerDetail();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.rank = reader.string();
                            break;
                        }
                    case 2: {
                            message.nickname = reader.string();
                            break;
                        }
                    case 3: {
                            message.percentage = reader.string();
                            break;
                        }
                    case 4: {
                            message.avatar = reader.string();
                            break;
                        }
                    case 5: {
                            message.isSelf = reader.bool();
                            break;
                        }
                    case 6: {
                            message.userId = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnleashPlayerDetail message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.UnleashPlayerDetail} UnleashPlayerDetail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashPlayerDetail.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnleashPlayerDetail message.
             * @function verify
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnleashPlayerDetail.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rank != null && message.hasOwnProperty("rank"))
                    if (!$util.isString(message.rank))
                        return "rank: string expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.percentage != null && message.hasOwnProperty("percentage"))
                    if (!$util.isString(message.percentage))
                        return "percentage: string expected";
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    if (!$util.isString(message.avatar))
                        return "avatar: string expected";
                if (message.isSelf != null && message.hasOwnProperty("isSelf"))
                    if (typeof message.isSelf !== "boolean")
                        return "isSelf: boolean expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates an UnleashPlayerDetail message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.UnleashPlayerDetail} UnleashPlayerDetail
             */
            UnleashPlayerDetail.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.UnleashPlayerDetail)
                    return object;
                var message = new $root.unleash.v1.UnleashPlayerDetail();
                if (object.rank != null)
                    message.rank = String(object.rank);
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.percentage != null)
                    message.percentage = String(object.percentage);
                if (object.avatar != null)
                    message.avatar = String(object.avatar);
                if (object.isSelf != null)
                    message.isSelf = Boolean(object.isSelf);
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an UnleashPlayerDetail message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {unleash.v1.UnleashPlayerDetail} message UnleashPlayerDetail
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnleashPlayerDetail.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.rank = "";
                    object.nickname = "";
                    object.percentage = "";
                    object.avatar = "";
                    object.isSelf = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.rank != null && message.hasOwnProperty("rank"))
                    object.rank = message.rank;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.percentage != null && message.hasOwnProperty("percentage"))
                    object.percentage = message.percentage;
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    object.avatar = message.avatar;
                if (message.isSelf != null && message.hasOwnProperty("isSelf"))
                    object.isSelf = message.isSelf;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this UnleashPlayerDetail to JSON.
             * @function toJSON
             * @memberof unleash.v1.UnleashPlayerDetail
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnleashPlayerDetail.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UnleashPlayerDetail
             * @function getTypeUrl
             * @memberof unleash.v1.UnleashPlayerDetail
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UnleashPlayerDetail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.UnleashPlayerDetail";
            };

            return UnleashPlayerDetail;
        })();

        v1.UnleashPlayerHistory = (function() {

            /**
             * Properties of an UnleashPlayerHistory.
             * @memberof unleash.v1
             * @interface IUnleashPlayerHistory
             * @property {string|null} [gameCode] UnleashPlayerHistory gameCode
             * @property {number|Long|null} [endTime] UnleashPlayerHistory endTime
             * @property {number|null} [result] UnleashPlayerHistory result
             * @property {string|null} [timeRecord] UnleashPlayerHistory timeRecord
             * @property {number|Long|null} [cost] UnleashPlayerHistory cost
             * @property {number|Long|null} [reward] UnleashPlayerHistory reward
             * @property {Array.<unleash.v1.IUnleashPlayerDetail>|null} [players] UnleashPlayerHistory players
             */

            /**
             * Constructs a new UnleashPlayerHistory.
             * @memberof unleash.v1
             * @classdesc Represents an UnleashPlayerHistory.
             * @implements IUnleashPlayerHistory
             * @constructor
             * @param {unleash.v1.IUnleashPlayerHistory=} [properties] Properties to set
             */
            function UnleashPlayerHistory(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UnleashPlayerHistory gameCode.
             * @member {string} gameCode
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             */
            UnleashPlayerHistory.prototype.gameCode = "";

            /**
             * UnleashPlayerHistory endTime.
             * @member {number|Long} endTime
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             */
            UnleashPlayerHistory.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UnleashPlayerHistory result.
             * @member {number} result
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             */
            UnleashPlayerHistory.prototype.result = 0;

            /**
             * UnleashPlayerHistory timeRecord.
             * @member {string} timeRecord
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             */
            UnleashPlayerHistory.prototype.timeRecord = "";

            /**
             * UnleashPlayerHistory cost.
             * @member {number|Long} cost
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             */
            UnleashPlayerHistory.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UnleashPlayerHistory reward.
             * @member {number|Long} reward
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             */
            UnleashPlayerHistory.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UnleashPlayerHistory players.
             * @member {Array.<unleash.v1.IUnleashPlayerDetail>} players
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             */
            UnleashPlayerHistory.prototype.players = $util.emptyArray;

            /**
             * Creates a new UnleashPlayerHistory instance using the specified properties.
             * @function create
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {unleash.v1.IUnleashPlayerHistory=} [properties] Properties to set
             * @returns {unleash.v1.UnleashPlayerHistory} UnleashPlayerHistory instance
             */
            UnleashPlayerHistory.create = function create(properties) {
                return new UnleashPlayerHistory(properties);
            };

            /**
             * Encodes the specified UnleashPlayerHistory message. Does not implicitly {@link unleash.v1.UnleashPlayerHistory.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {unleash.v1.IUnleashPlayerHistory} message UnleashPlayerHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashPlayerHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameCode != null && Object.hasOwnProperty.call(message, "gameCode"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameCode);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTime);
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
                if (message.timeRecord != null && Object.hasOwnProperty.call(message, "timeRecord"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.timeRecord);
                if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.cost);
                if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.reward);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.unleash.v1.UnleashPlayerDetail.encode(message.players[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UnleashPlayerHistory message, length delimited. Does not implicitly {@link unleash.v1.UnleashPlayerHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {unleash.v1.IUnleashPlayerHistory} message UnleashPlayerHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnleashPlayerHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnleashPlayerHistory message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.UnleashPlayerHistory} UnleashPlayerHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashPlayerHistory.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.UnleashPlayerHistory();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.gameCode = reader.string();
                            break;
                        }
                    case 2: {
                            message.endTime = reader.int64();
                            break;
                        }
                    case 3: {
                            message.result = reader.int32();
                            break;
                        }
                    case 4: {
                            message.timeRecord = reader.string();
                            break;
                        }
                    case 5: {
                            message.cost = reader.int64();
                            break;
                        }
                    case 6: {
                            message.reward = reader.int64();
                            break;
                        }
                    case 7: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.unleash.v1.UnleashPlayerDetail.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnleashPlayerHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.UnleashPlayerHistory} UnleashPlayerHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnleashPlayerHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnleashPlayerHistory message.
             * @function verify
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnleashPlayerHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    if (!$util.isString(message.gameCode))
                        return "gameCode: string expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                if (message.timeRecord != null && message.hasOwnProperty("timeRecord"))
                    if (!$util.isString(message.timeRecord))
                        return "timeRecord: string expected";
                if (message.cost != null && message.hasOwnProperty("cost"))
                    if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                        return "cost: integer|Long expected";
                if (message.reward != null && message.hasOwnProperty("reward"))
                    if (!$util.isInteger(message.reward) && !(message.reward && $util.isInteger(message.reward.low) && $util.isInteger(message.reward.high)))
                        return "reward: integer|Long expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.unleash.v1.UnleashPlayerDetail.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an UnleashPlayerHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.UnleashPlayerHistory} UnleashPlayerHistory
             */
            UnleashPlayerHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.UnleashPlayerHistory)
                    return object;
                var message = new $root.unleash.v1.UnleashPlayerHistory();
                if (object.gameCode != null)
                    message.gameCode = String(object.gameCode);
                if (object.endTime != null)
                    if ($util.Long)
                        (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = false;
                    else if (typeof object.endTime === "string")
                        message.endTime = parseInt(object.endTime, 10);
                    else if (typeof object.endTime === "number")
                        message.endTime = object.endTime;
                    else if (typeof object.endTime === "object")
                        message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber();
                if (object.result != null)
                    message.result = object.result | 0;
                if (object.timeRecord != null)
                    message.timeRecord = String(object.timeRecord);
                if (object.cost != null)
                    if ($util.Long)
                        (message.cost = $util.Long.fromValue(object.cost)).unsigned = false;
                    else if (typeof object.cost === "string")
                        message.cost = parseInt(object.cost, 10);
                    else if (typeof object.cost === "number")
                        message.cost = object.cost;
                    else if (typeof object.cost === "object")
                        message.cost = new $util.LongBits(object.cost.low >>> 0, object.cost.high >>> 0).toNumber();
                if (object.reward != null)
                    if ($util.Long)
                        (message.reward = $util.Long.fromValue(object.reward)).unsigned = false;
                    else if (typeof object.reward === "string")
                        message.reward = parseInt(object.reward, 10);
                    else if (typeof object.reward === "number")
                        message.reward = object.reward;
                    else if (typeof object.reward === "object")
                        message.reward = new $util.LongBits(object.reward.low >>> 0, object.reward.high >>> 0).toNumber();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".unleash.v1.UnleashPlayerHistory.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".unleash.v1.UnleashPlayerHistory.players: object expected");
                        message.players[i] = $root.unleash.v1.UnleashPlayerDetail.fromObject(object.players[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an UnleashPlayerHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {unleash.v1.UnleashPlayerHistory} message UnleashPlayerHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnleashPlayerHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    object.gameCode = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endTime = options.longs === String ? "0" : 0;
                    object.result = 0;
                    object.timeRecord = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.cost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.cost = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.reward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.reward = options.longs === String ? "0" : 0;
                }
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    object.gameCode = message.gameCode;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (typeof message.endTime === "number")
                        object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                    else
                        object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                if (message.timeRecord != null && message.hasOwnProperty("timeRecord"))
                    object.timeRecord = message.timeRecord;
                if (message.cost != null && message.hasOwnProperty("cost"))
                    if (typeof message.cost === "number")
                        object.cost = options.longs === String ? String(message.cost) : message.cost;
                    else
                        object.cost = options.longs === String ? $util.Long.prototype.toString.call(message.cost) : options.longs === Number ? new $util.LongBits(message.cost.low >>> 0, message.cost.high >>> 0).toNumber() : message.cost;
                if (message.reward != null && message.hasOwnProperty("reward"))
                    if (typeof message.reward === "number")
                        object.reward = options.longs === String ? String(message.reward) : message.reward;
                    else
                        object.reward = options.longs === String ? $util.Long.prototype.toString.call(message.reward) : options.longs === Number ? new $util.LongBits(message.reward.low >>> 0, message.reward.high >>> 0).toNumber() : message.reward;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.unleash.v1.UnleashPlayerDetail.toObject(message.players[j], options);
                }
                return object;
            };

            /**
             * Converts this UnleashPlayerHistory to JSON.
             * @function toJSON
             * @memberof unleash.v1.UnleashPlayerHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnleashPlayerHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UnleashPlayerHistory
             * @function getTypeUrl
             * @memberof unleash.v1.UnleashPlayerHistory
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UnleashPlayerHistory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.UnleashPlayerHistory";
            };

            return UnleashPlayerHistory;
        })();

        v1.GetUnleashPlayerHistoryRes = (function() {

            /**
             * Properties of a GetUnleashPlayerHistoryRes.
             * @memberof unleash.v1
             * @interface IGetUnleashPlayerHistoryRes
             * @property {Array.<unleash.v1.IUnleashPlayerHistory>|null} [unleashPlayerHistory] GetUnleashPlayerHistoryRes unleashPlayerHistory
             */

            /**
             * Constructs a new GetUnleashPlayerHistoryRes.
             * @memberof unleash.v1
             * @classdesc Represents a GetUnleashPlayerHistoryRes.
             * @implements IGetUnleashPlayerHistoryRes
             * @constructor
             * @param {unleash.v1.IGetUnleashPlayerHistoryRes=} [properties] Properties to set
             */
            function GetUnleashPlayerHistoryRes(properties) {
                this.unleashPlayerHistory = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetUnleashPlayerHistoryRes unleashPlayerHistory.
             * @member {Array.<unleash.v1.IUnleashPlayerHistory>} unleashPlayerHistory
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @instance
             */
            GetUnleashPlayerHistoryRes.prototype.unleashPlayerHistory = $util.emptyArray;

            /**
             * Creates a new GetUnleashPlayerHistoryRes instance using the specified properties.
             * @function create
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {unleash.v1.IGetUnleashPlayerHistoryRes=} [properties] Properties to set
             * @returns {unleash.v1.GetUnleashPlayerHistoryRes} GetUnleashPlayerHistoryRes instance
             */
            GetUnleashPlayerHistoryRes.create = function create(properties) {
                return new GetUnleashPlayerHistoryRes(properties);
            };

            /**
             * Encodes the specified GetUnleashPlayerHistoryRes message. Does not implicitly {@link unleash.v1.GetUnleashPlayerHistoryRes.verify|verify} messages.
             * @function encode
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {unleash.v1.IGetUnleashPlayerHistoryRes} message GetUnleashPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUnleashPlayerHistoryRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.unleashPlayerHistory != null && message.unleashPlayerHistory.length)
                    for (var i = 0; i < message.unleashPlayerHistory.length; ++i)
                        $root.unleash.v1.UnleashPlayerHistory.encode(message.unleashPlayerHistory[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetUnleashPlayerHistoryRes message, length delimited. Does not implicitly {@link unleash.v1.GetUnleashPlayerHistoryRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {unleash.v1.IGetUnleashPlayerHistoryRes} message GetUnleashPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUnleashPlayerHistoryRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUnleashPlayerHistoryRes message from the specified reader or buffer.
             * @function decode
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {unleash.v1.GetUnleashPlayerHistoryRes} GetUnleashPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUnleashPlayerHistoryRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.unleash.v1.GetUnleashPlayerHistoryRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.unleashPlayerHistory && message.unleashPlayerHistory.length))
                                message.unleashPlayerHistory = [];
                            message.unleashPlayerHistory.push($root.unleash.v1.UnleashPlayerHistory.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetUnleashPlayerHistoryRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {unleash.v1.GetUnleashPlayerHistoryRes} GetUnleashPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUnleashPlayerHistoryRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUnleashPlayerHistoryRes message.
             * @function verify
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUnleashPlayerHistoryRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.unleashPlayerHistory != null && message.hasOwnProperty("unleashPlayerHistory")) {
                    if (!Array.isArray(message.unleashPlayerHistory))
                        return "unleashPlayerHistory: array expected";
                    for (var i = 0; i < message.unleashPlayerHistory.length; ++i) {
                        var error = $root.unleash.v1.UnleashPlayerHistory.verify(message.unleashPlayerHistory[i]);
                        if (error)
                            return "unleashPlayerHistory." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetUnleashPlayerHistoryRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {unleash.v1.GetUnleashPlayerHistoryRes} GetUnleashPlayerHistoryRes
             */
            GetUnleashPlayerHistoryRes.fromObject = function fromObject(object) {
                if (object instanceof $root.unleash.v1.GetUnleashPlayerHistoryRes)
                    return object;
                var message = new $root.unleash.v1.GetUnleashPlayerHistoryRes();
                if (object.unleashPlayerHistory) {
                    if (!Array.isArray(object.unleashPlayerHistory))
                        throw TypeError(".unleash.v1.GetUnleashPlayerHistoryRes.unleashPlayerHistory: array expected");
                    message.unleashPlayerHistory = [];
                    for (var i = 0; i < object.unleashPlayerHistory.length; ++i) {
                        if (typeof object.unleashPlayerHistory[i] !== "object")
                            throw TypeError(".unleash.v1.GetUnleashPlayerHistoryRes.unleashPlayerHistory: object expected");
                        message.unleashPlayerHistory[i] = $root.unleash.v1.UnleashPlayerHistory.fromObject(object.unleashPlayerHistory[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetUnleashPlayerHistoryRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {unleash.v1.GetUnleashPlayerHistoryRes} message GetUnleashPlayerHistoryRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUnleashPlayerHistoryRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.unleashPlayerHistory = [];
                if (message.unleashPlayerHistory && message.unleashPlayerHistory.length) {
                    object.unleashPlayerHistory = [];
                    for (var j = 0; j < message.unleashPlayerHistory.length; ++j)
                        object.unleashPlayerHistory[j] = $root.unleash.v1.UnleashPlayerHistory.toObject(message.unleashPlayerHistory[j], options);
                }
                return object;
            };

            /**
             * Converts this GetUnleashPlayerHistoryRes to JSON.
             * @function toJSON
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUnleashPlayerHistoryRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetUnleashPlayerHistoryRes
             * @function getTypeUrl
             * @memberof unleash.v1.GetUnleashPlayerHistoryRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetUnleashPlayerHistoryRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/unleash.v1.GetUnleashPlayerHistoryRes";
            };

            return GetUnleashPlayerHistoryRes;
        })();

        return v1;
    })();

    return unleash;
})();

module.exports = $root;
