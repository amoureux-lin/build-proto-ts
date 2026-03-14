/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});



$root.mines = (function() {

    /**
     * Namespace mines.
     * @exports mines
     * @namespace
     */
    var mines = {};

    mines.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof mines
         * @namespace
         */
        var v1 = {};

        /**
         * CellType enum.
         * @name mines.v1.CellType
         * @enum {number}
         * @property {number} CELL_TYPE_UNOPENED=0 CELL_TYPE_UNOPENED value
         * @property {number} CELL_TYPE_COIN=1 CELL_TYPE_COIN value
         * @property {number} CELL_TYPE_HURT=2 CELL_TYPE_HURT value
         * @property {number} CELL_TYPE_SHIELD=3 CELL_TYPE_SHIELD value
         * @property {number} CELL_TYPE_ATTACK=4 CELL_TYPE_ATTACK value
         * @property {number} CELL_TYPE_RADAR=5 CELL_TYPE_RADAR value
         * @property {number} CELL_TYPE_RADAR_MARK=6 CELL_TYPE_RADAR_MARK value
         */
        v1.CellType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CELL_TYPE_UNOPENED"] = 0;
            values[valuesById[1] = "CELL_TYPE_COIN"] = 1;
            values[valuesById[2] = "CELL_TYPE_HURT"] = 2;
            values[valuesById[3] = "CELL_TYPE_SHIELD"] = 3;
            values[valuesById[4] = "CELL_TYPE_ATTACK"] = 4;
            values[valuesById[5] = "CELL_TYPE_RADAR"] = 5;
            values[valuesById[6] = "CELL_TYPE_RADAR_MARK"] = 6;
            return values;
        })();

        v1.MinesGameConfig = (function() {

            /**
             * Properties of a MinesGameConfig.
             * @memberof mines.v1
             * @interface IMinesGameConfig
             * @property {Array.<number>|null} [scores] MinesGameConfig scores
             */

            /**
             * Constructs a new MinesGameConfig.
             * @memberof mines.v1
             * @classdesc Represents a MinesGameConfig.
             * @implements IMinesGameConfig
             * @constructor
             * @param {mines.v1.IMinesGameConfig=} [properties] Properties to set
             */
            function MinesGameConfig(properties) {
                this.scores = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MinesGameConfig scores.
             * @member {Array.<number>} scores
             * @memberof mines.v1.MinesGameConfig
             * @instance
             */
            MinesGameConfig.prototype.scores = $util.emptyArray;

            /**
             * Creates a new MinesGameConfig instance using the specified properties.
             * @function create
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {mines.v1.IMinesGameConfig=} [properties] Properties to set
             * @returns {mines.v1.MinesGameConfig} MinesGameConfig instance
             */
            MinesGameConfig.create = function create(properties) {
                return new MinesGameConfig(properties);
            };

            /**
             * Encodes the specified MinesGameConfig message. Does not implicitly {@link mines.v1.MinesGameConfig.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {mines.v1.IMinesGameConfig} message MinesGameConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesGameConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.scores != null && message.scores.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.scores.length; ++i)
                        writer.int32(message.scores[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified MinesGameConfig message, length delimited. Does not implicitly {@link mines.v1.MinesGameConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {mines.v1.IMinesGameConfig} message MinesGameConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesGameConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MinesGameConfig message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.MinesGameConfig} MinesGameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesGameConfig.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.MinesGameConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
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
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MinesGameConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.MinesGameConfig} MinesGameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesGameConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MinesGameConfig message.
             * @function verify
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MinesGameConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.scores != null && message.hasOwnProperty("scores")) {
                    if (!Array.isArray(message.scores))
                        return "scores: array expected";
                    for (var i = 0; i < message.scores.length; ++i)
                        if (!$util.isInteger(message.scores[i]))
                            return "scores: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a MinesGameConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.MinesGameConfig} MinesGameConfig
             */
            MinesGameConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.MinesGameConfig)
                    return object;
                var message = new $root.mines.v1.MinesGameConfig();
                if (object.scores) {
                    if (!Array.isArray(object.scores))
                        throw TypeError(".mines.v1.MinesGameConfig.scores: array expected");
                    message.scores = [];
                    for (var i = 0; i < object.scores.length; ++i)
                        message.scores[i] = object.scores[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a MinesGameConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {mines.v1.MinesGameConfig} message MinesGameConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MinesGameConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.scores = [];
                if (message.scores && message.scores.length) {
                    object.scores = [];
                    for (var j = 0; j < message.scores.length; ++j)
                        object.scores[j] = message.scores[j];
                }
                return object;
            };

            /**
             * Converts this MinesGameConfig to JSON.
             * @function toJSON
             * @memberof mines.v1.MinesGameConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MinesGameConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MinesGameConfig
             * @function getTypeUrl
             * @memberof mines.v1.MinesGameConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MinesGameConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.MinesGameConfig";
            };

            return MinesGameConfig;
        })();

        v1.MinesConfig = (function() {

            /**
             * Properties of a MinesConfig.
             * @memberof mines.v1
             * @interface IMinesConfig
             * @property {number|null} [operationSeconds] MinesConfig operationSeconds
             * @property {number|null} [resetGameSeconds] MinesConfig resetGameSeconds
             * @property {number|null} [coinWinMinAmount] MinesConfig coinWinMinAmount
             * @property {number|null} [cellAmount] MinesConfig cellAmount
             * @property {number|null} [hurtAmount] MinesConfig hurtAmount
             * @property {number|null} [betAmount] MinesConfig betAmount
             * @property {Array.<number>|null} [scores] MinesConfig scores
             */

            /**
             * Constructs a new MinesConfig.
             * @memberof mines.v1
             * @classdesc Represents a MinesConfig.
             * @implements IMinesConfig
             * @constructor
             * @param {mines.v1.IMinesConfig=} [properties] Properties to set
             */
            function MinesConfig(properties) {
                this.scores = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MinesConfig operationSeconds.
             * @member {number} operationSeconds
             * @memberof mines.v1.MinesConfig
             * @instance
             */
            MinesConfig.prototype.operationSeconds = 0;

            /**
             * MinesConfig resetGameSeconds.
             * @member {number} resetGameSeconds
             * @memberof mines.v1.MinesConfig
             * @instance
             */
            MinesConfig.prototype.resetGameSeconds = 0;

            /**
             * MinesConfig coinWinMinAmount.
             * @member {number} coinWinMinAmount
             * @memberof mines.v1.MinesConfig
             * @instance
             */
            MinesConfig.prototype.coinWinMinAmount = 0;

            /**
             * MinesConfig cellAmount.
             * @member {number} cellAmount
             * @memberof mines.v1.MinesConfig
             * @instance
             */
            MinesConfig.prototype.cellAmount = 0;

            /**
             * MinesConfig hurtAmount.
             * @member {number} hurtAmount
             * @memberof mines.v1.MinesConfig
             * @instance
             */
            MinesConfig.prototype.hurtAmount = 0;

            /**
             * MinesConfig betAmount.
             * @member {number} betAmount
             * @memberof mines.v1.MinesConfig
             * @instance
             */
            MinesConfig.prototype.betAmount = 0;

            /**
             * MinesConfig scores.
             * @member {Array.<number>} scores
             * @memberof mines.v1.MinesConfig
             * @instance
             */
            MinesConfig.prototype.scores = $util.emptyArray;

            /**
             * Creates a new MinesConfig instance using the specified properties.
             * @function create
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {mines.v1.IMinesConfig=} [properties] Properties to set
             * @returns {mines.v1.MinesConfig} MinesConfig instance
             */
            MinesConfig.create = function create(properties) {
                return new MinesConfig(properties);
            };

            /**
             * Encodes the specified MinesConfig message. Does not implicitly {@link mines.v1.MinesConfig.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {mines.v1.IMinesConfig} message MinesConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operationSeconds != null && Object.hasOwnProperty.call(message, "operationSeconds"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.operationSeconds);
                if (message.resetGameSeconds != null && Object.hasOwnProperty.call(message, "resetGameSeconds"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.resetGameSeconds);
                if (message.coinWinMinAmount != null && Object.hasOwnProperty.call(message, "coinWinMinAmount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.coinWinMinAmount);
                if (message.cellAmount != null && Object.hasOwnProperty.call(message, "cellAmount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cellAmount);
                if (message.hurtAmount != null && Object.hasOwnProperty.call(message, "hurtAmount"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.hurtAmount);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.betAmount);
                if (message.scores != null && message.scores.length) {
                    writer.uint32(/* id 9, wireType 2 =*/74).fork();
                    for (var i = 0; i < message.scores.length; ++i)
                        writer.int32(message.scores[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified MinesConfig message, length delimited. Does not implicitly {@link mines.v1.MinesConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {mines.v1.IMinesConfig} message MinesConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MinesConfig message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.MinesConfig} MinesConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesConfig.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.MinesConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            message.operationSeconds = reader.int32();
                            break;
                        }
                    case 3: {
                            message.resetGameSeconds = reader.int32();
                            break;
                        }
                    case 4: {
                            message.coinWinMinAmount = reader.int32();
                            break;
                        }
                    case 5: {
                            message.cellAmount = reader.int32();
                            break;
                        }
                    case 6: {
                            message.hurtAmount = reader.int32();
                            break;
                        }
                    case 8: {
                            message.betAmount = reader.int32();
                            break;
                        }
                    case 9: {
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
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MinesConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.MinesConfig} MinesConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MinesConfig message.
             * @function verify
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MinesConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operationSeconds != null && message.hasOwnProperty("operationSeconds"))
                    if (!$util.isInteger(message.operationSeconds))
                        return "operationSeconds: integer expected";
                if (message.resetGameSeconds != null && message.hasOwnProperty("resetGameSeconds"))
                    if (!$util.isInteger(message.resetGameSeconds))
                        return "resetGameSeconds: integer expected";
                if (message.coinWinMinAmount != null && message.hasOwnProperty("coinWinMinAmount"))
                    if (!$util.isInteger(message.coinWinMinAmount))
                        return "coinWinMinAmount: integer expected";
                if (message.cellAmount != null && message.hasOwnProperty("cellAmount"))
                    if (!$util.isInteger(message.cellAmount))
                        return "cellAmount: integer expected";
                if (message.hurtAmount != null && message.hasOwnProperty("hurtAmount"))
                    if (!$util.isInteger(message.hurtAmount))
                        return "hurtAmount: integer expected";
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
                return null;
            };

            /**
             * Creates a MinesConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.MinesConfig} MinesConfig
             */
            MinesConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.MinesConfig)
                    return object;
                var message = new $root.mines.v1.MinesConfig();
                if (object.operationSeconds != null)
                    message.operationSeconds = object.operationSeconds | 0;
                if (object.resetGameSeconds != null)
                    message.resetGameSeconds = object.resetGameSeconds | 0;
                if (object.coinWinMinAmount != null)
                    message.coinWinMinAmount = object.coinWinMinAmount | 0;
                if (object.cellAmount != null)
                    message.cellAmount = object.cellAmount | 0;
                if (object.hurtAmount != null)
                    message.hurtAmount = object.hurtAmount | 0;
                if (object.betAmount != null)
                    message.betAmount = object.betAmount | 0;
                if (object.scores) {
                    if (!Array.isArray(object.scores))
                        throw TypeError(".mines.v1.MinesConfig.scores: array expected");
                    message.scores = [];
                    for (var i = 0; i < object.scores.length; ++i)
                        message.scores[i] = object.scores[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a MinesConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {mines.v1.MinesConfig} message MinesConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MinesConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.scores = [];
                if (options.defaults) {
                    object.operationSeconds = 0;
                    object.resetGameSeconds = 0;
                    object.coinWinMinAmount = 0;
                    object.cellAmount = 0;
                    object.hurtAmount = 0;
                    object.betAmount = 0;
                }
                if (message.operationSeconds != null && message.hasOwnProperty("operationSeconds"))
                    object.operationSeconds = message.operationSeconds;
                if (message.resetGameSeconds != null && message.hasOwnProperty("resetGameSeconds"))
                    object.resetGameSeconds = message.resetGameSeconds;
                if (message.coinWinMinAmount != null && message.hasOwnProperty("coinWinMinAmount"))
                    object.coinWinMinAmount = message.coinWinMinAmount;
                if (message.cellAmount != null && message.hasOwnProperty("cellAmount"))
                    object.cellAmount = message.cellAmount;
                if (message.hurtAmount != null && message.hasOwnProperty("hurtAmount"))
                    object.hurtAmount = message.hurtAmount;
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    object.betAmount = message.betAmount;
                if (message.scores && message.scores.length) {
                    object.scores = [];
                    for (var j = 0; j < message.scores.length; ++j)
                        object.scores[j] = message.scores[j];
                }
                return object;
            };

            /**
             * Converts this MinesConfig to JSON.
             * @function toJSON
             * @memberof mines.v1.MinesConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MinesConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MinesConfig
             * @function getTypeUrl
             * @memberof mines.v1.MinesConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MinesConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.MinesConfig";
            };

            return MinesConfig;
        })();

        v1.RoomInfo = (function() {

            /**
             * Properties of a RoomInfo.
             * @memberof mines.v1
             * @interface IRoomInfo
             * @property {number|Long|null} [roomId] RoomInfo roomId
             * @property {string|null} [roomName] RoomInfo roomName
             * @property {number|null} [roomStatus] RoomInfo roomStatus
             * @property {number|null} [roomMode] RoomInfo roomMode
             */

            /**
             * Constructs a new RoomInfo.
             * @memberof mines.v1
             * @classdesc Represents a RoomInfo.
             * @implements IRoomInfo
             * @constructor
             * @param {mines.v1.IRoomInfo=} [properties] Properties to set
             */
            function RoomInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoomInfo roomId.
             * @member {number|Long} roomId
             * @memberof mines.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RoomInfo roomName.
             * @member {string} roomName
             * @memberof mines.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomName = "";

            /**
             * RoomInfo roomStatus.
             * @member {number} roomStatus
             * @memberof mines.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomStatus = 0;

            /**
             * RoomInfo roomMode.
             * @member {number} roomMode
             * @memberof mines.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomMode = 0;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @function create
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {mines.v1.IRoomInfo=} [properties] Properties to set
             * @returns {mines.v1.RoomInfo} RoomInfo instance
             */
            RoomInfo.create = function create(properties) {
                return new RoomInfo(properties);
            };

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link mines.v1.RoomInfo.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {mines.v1.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
                if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomName);
                if (message.roomStatus != null && Object.hasOwnProperty.call(message, "roomStatus"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomStatus);
                if (message.roomMode != null && Object.hasOwnProperty.call(message, "roomMode"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.roomMode);
                return writer;
            };

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link mines.v1.RoomInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {mines.v1.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.RoomInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.roomId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.roomName = reader.string();
                            break;
                        }
                    case 3: {
                            message.roomStatus = reader.int32();
                            break;
                        }
                    case 4: {
                            message.roomMode = reader.int32();
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
             * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoomInfo message.
             * @function verify
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                        return "roomId: integer|Long expected";
                if (message.roomName != null && message.hasOwnProperty("roomName"))
                    if (!$util.isString(message.roomName))
                        return "roomName: string expected";
                if (message.roomStatus != null && message.hasOwnProperty("roomStatus"))
                    if (!$util.isInteger(message.roomStatus))
                        return "roomStatus: integer expected";
                if (message.roomMode != null && message.hasOwnProperty("roomMode"))
                    if (!$util.isInteger(message.roomMode))
                        return "roomMode: integer expected";
                return null;
            };

            /**
             * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.RoomInfo} RoomInfo
             */
            RoomInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.RoomInfo)
                    return object;
                var message = new $root.mines.v1.RoomInfo();
                if (object.roomId != null)
                    if ($util.Long)
                        (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                    else if (typeof object.roomId === "string")
                        message.roomId = parseInt(object.roomId, 10);
                    else if (typeof object.roomId === "number")
                        message.roomId = object.roomId;
                    else if (typeof object.roomId === "object")
                        message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
                if (object.roomName != null)
                    message.roomName = String(object.roomName);
                if (object.roomStatus != null)
                    message.roomStatus = object.roomStatus | 0;
                if (object.roomMode != null)
                    message.roomMode = object.roomMode | 0;
                return message;
            };

            /**
             * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {mines.v1.RoomInfo} message RoomInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.roomId = options.longs === String ? "0" : 0;
                    object.roomName = "";
                    object.roomStatus = 0;
                    object.roomMode = 0;
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (typeof message.roomId === "number")
                        object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                    else
                        object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
                if (message.roomName != null && message.hasOwnProperty("roomName"))
                    object.roomName = message.roomName;
                if (message.roomStatus != null && message.hasOwnProperty("roomStatus"))
                    object.roomStatus = message.roomStatus;
                if (message.roomMode != null && message.hasOwnProperty("roomMode"))
                    object.roomMode = message.roomMode;
                return object;
            };

            /**
             * Converts this RoomInfo to JSON.
             * @function toJSON
             * @memberof mines.v1.RoomInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomInfo
             * @function getTypeUrl
             * @memberof mines.v1.RoomInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.RoomInfo";
            };

            return RoomInfo;
        })();

        v1.GameInfo = (function() {

            /**
             * Properties of a GameInfo.
             * @memberof mines.v1
             * @interface IGameInfo
             * @property {mines.v1.IMinesConfig|null} [config] GameInfo config
             * @property {number|null} [status] GameInfo status
             * @property {Object.<string,mines.v1.IOpenedCellList>|null} [openedCells] GameInfo openedCells
             * @property {number|Long|null} [deadUserId] GameInfo deadUserId
             * @property {number|Long|null} [winnerId] GameInfo winnerId
             * @property {number|Long|null} [winCoin] GameInfo winCoin
             */

            /**
             * Constructs a new GameInfo.
             * @memberof mines.v1
             * @classdesc Represents a GameInfo.
             * @implements IGameInfo
             * @constructor
             * @param {mines.v1.IGameInfo=} [properties] Properties to set
             */
            function GameInfo(properties) {
                this.openedCells = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameInfo config.
             * @member {mines.v1.IMinesConfig|null|undefined} config
             * @memberof mines.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.config = null;

            /**
             * GameInfo status.
             * @member {number} status
             * @memberof mines.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.status = 0;

            /**
             * GameInfo openedCells.
             * @member {Object.<string,mines.v1.IOpenedCellList>} openedCells
             * @memberof mines.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.openedCells = $util.emptyObject;

            /**
             * GameInfo deadUserId.
             * @member {number|Long} deadUserId
             * @memberof mines.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.deadUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo winnerId.
             * @member {number|Long} winnerId
             * @memberof mines.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.winnerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo winCoin.
             * @member {number|Long} winCoin
             * @memberof mines.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.winCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @function create
             * @memberof mines.v1.GameInfo
             * @static
             * @param {mines.v1.IGameInfo=} [properties] Properties to set
             * @returns {mines.v1.GameInfo} GameInfo instance
             */
            GameInfo.create = function create(properties) {
                return new GameInfo(properties);
            };

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link mines.v1.GameInfo.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.GameInfo
             * @static
             * @param {mines.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                    $root.mines.v1.MinesConfig.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                if (message.openedCells != null && Object.hasOwnProperty.call(message, "openedCells"))
                    for (var keys = Object.keys(message.openedCells), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                        $root.mines.v1.OpenedCellList.encode(message.openedCells[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.deadUserId != null && Object.hasOwnProperty.call(message, "deadUserId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.deadUserId);
                if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.winnerId);
                if (message.winCoin != null && Object.hasOwnProperty.call(message, "winCoin"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.winCoin);
                return writer;
            };

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link mines.v1.GameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.GameInfo
             * @static
             * @param {mines.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.GameInfo(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.config = $root.mines.v1.MinesConfig.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
                            break;
                        }
                    case 3: {
                            if (message.openedCells === $util.emptyObject)
                                message.openedCells = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int64();
                                    break;
                                case 2:
                                    value = $root.mines.v1.OpenedCellList.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.openedCells[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 4: {
                            message.deadUserId = reader.int64();
                            break;
                        }
                    case 5: {
                            message.winnerId = reader.int64();
                            break;
                        }
                    case 6: {
                            message.winCoin = reader.int64();
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
             * @memberof mines.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.GameInfo} GameInfo
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
             * @memberof mines.v1.GameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.config != null && message.hasOwnProperty("config")) {
                    var error = $root.mines.v1.MinesConfig.verify(message.config);
                    if (error)
                        return "config." + error;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.openedCells != null && message.hasOwnProperty("openedCells")) {
                    if (!$util.isObject(message.openedCells))
                        return "openedCells: object expected";
                    var key = Object.keys(message.openedCells);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "openedCells: integer|Long key{k:int64} expected";
                        {
                            var error = $root.mines.v1.OpenedCellList.verify(message.openedCells[key[i]]);
                            if (error)
                                return "openedCells." + error;
                        }
                    }
                }
                if (message.deadUserId != null && message.hasOwnProperty("deadUserId"))
                    if (!$util.isInteger(message.deadUserId) && !(message.deadUserId && $util.isInteger(message.deadUserId.low) && $util.isInteger(message.deadUserId.high)))
                        return "deadUserId: integer|Long expected";
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId) && !(message.winnerId && $util.isInteger(message.winnerId.low) && $util.isInteger(message.winnerId.high)))
                        return "winnerId: integer|Long expected";
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (!$util.isInteger(message.winCoin) && !(message.winCoin && $util.isInteger(message.winCoin.low) && $util.isInteger(message.winCoin.high)))
                        return "winCoin: integer|Long expected";
                return null;
            };

            /**
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.GameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.GameInfo} GameInfo
             */
            GameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.GameInfo)
                    return object;
                var message = new $root.mines.v1.GameInfo();
                if (object.config != null) {
                    if (typeof object.config !== "object")
                        throw TypeError(".mines.v1.GameInfo.config: object expected");
                    message.config = $root.mines.v1.MinesConfig.fromObject(object.config);
                }
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.openedCells) {
                    if (typeof object.openedCells !== "object")
                        throw TypeError(".mines.v1.GameInfo.openedCells: object expected");
                    message.openedCells = {};
                    for (var keys = Object.keys(object.openedCells), i = 0; i < keys.length; ++i) {
                        if (typeof object.openedCells[keys[i]] !== "object")
                            throw TypeError(".mines.v1.GameInfo.openedCells: object expected");
                        message.openedCells[keys[i]] = $root.mines.v1.OpenedCellList.fromObject(object.openedCells[keys[i]]);
                    }
                }
                if (object.deadUserId != null)
                    if ($util.Long)
                        (message.deadUserId = $util.Long.fromValue(object.deadUserId)).unsigned = false;
                    else if (typeof object.deadUserId === "string")
                        message.deadUserId = parseInt(object.deadUserId, 10);
                    else if (typeof object.deadUserId === "number")
                        message.deadUserId = object.deadUserId;
                    else if (typeof object.deadUserId === "object")
                        message.deadUserId = new $util.LongBits(object.deadUserId.low >>> 0, object.deadUserId.high >>> 0).toNumber();
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
                return message;
            };

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.GameInfo
             * @static
             * @param {mines.v1.GameInfo} message GameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.openedCells = {};
                if (options.defaults) {
                    object.config = null;
                    object.status = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.deadUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.deadUserId = options.longs === String ? "0" : 0;
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
                }
                if (message.config != null && message.hasOwnProperty("config"))
                    object.config = $root.mines.v1.MinesConfig.toObject(message.config, options);
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                var keys2;
                if (message.openedCells && (keys2 = Object.keys(message.openedCells)).length) {
                    object.openedCells = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.openedCells[keys2[j]] = $root.mines.v1.OpenedCellList.toObject(message.openedCells[keys2[j]], options);
                }
                if (message.deadUserId != null && message.hasOwnProperty("deadUserId"))
                    if (typeof message.deadUserId === "number")
                        object.deadUserId = options.longs === String ? String(message.deadUserId) : message.deadUserId;
                    else
                        object.deadUserId = options.longs === String ? $util.Long.prototype.toString.call(message.deadUserId) : options.longs === Number ? new $util.LongBits(message.deadUserId.low >>> 0, message.deadUserId.high >>> 0).toNumber() : message.deadUserId;
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
                return object;
            };

            /**
             * Converts this GameInfo to JSON.
             * @function toJSON
             * @memberof mines.v1.GameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameInfo
             * @function getTypeUrl
             * @memberof mines.v1.GameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.GameInfo";
            };

            return GameInfo;
        })();

        v1.MinesPlayer = (function() {

            /**
             * Properties of a MinesPlayer.
             * @memberof mines.v1
             * @interface IMinesPlayer
             * @property {common.v1.IPlayerInfo|null} [playerInfo] MinesPlayer playerInfo
             * @property {number|Long|null} [currentEndTime] MinesPlayer currentEndTime
             * @property {number|null} [coinCount] MinesPlayer coinCount
             * @property {number|null} [hurtCount] MinesPlayer hurtCount
             * @property {number|null} [shieldCount] MinesPlayer shieldCount
             * @property {number|null} [beAttackedCount] MinesPlayer beAttackedCount
             * @property {Array.<number>|null} [betRates] MinesPlayer betRates
             * @property {number|null} [playerStatus] MinesPlayer playerStatus
             */

            /**
             * Constructs a new MinesPlayer.
             * @memberof mines.v1
             * @classdesc Represents a MinesPlayer.
             * @implements IMinesPlayer
             * @constructor
             * @param {mines.v1.IMinesPlayer=} [properties] Properties to set
             */
            function MinesPlayer(properties) {
                this.betRates = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MinesPlayer playerInfo.
             * @member {common.v1.IPlayerInfo|null|undefined} playerInfo
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.playerInfo = null;

            /**
             * MinesPlayer currentEndTime.
             * @member {number|Long} currentEndTime
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.currentEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MinesPlayer coinCount.
             * @member {number} coinCount
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.coinCount = 0;

            /**
             * MinesPlayer hurtCount.
             * @member {number} hurtCount
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.hurtCount = 0;

            /**
             * MinesPlayer shieldCount.
             * @member {number} shieldCount
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.shieldCount = 0;

            /**
             * MinesPlayer beAttackedCount.
             * @member {number} beAttackedCount
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.beAttackedCount = 0;

            /**
             * MinesPlayer betRates.
             * @member {Array.<number>} betRates
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.betRates = $util.emptyArray;

            /**
             * MinesPlayer playerStatus.
             * @member {number} playerStatus
             * @memberof mines.v1.MinesPlayer
             * @instance
             */
            MinesPlayer.prototype.playerStatus = 0;

            /**
             * Creates a new MinesPlayer instance using the specified properties.
             * @function create
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {mines.v1.IMinesPlayer=} [properties] Properties to set
             * @returns {mines.v1.MinesPlayer} MinesPlayer instance
             */
            MinesPlayer.create = function create(properties) {
                return new MinesPlayer(properties);
            };

            /**
             * Encodes the specified MinesPlayer message. Does not implicitly {@link mines.v1.MinesPlayer.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {mines.v1.IMinesPlayer} message MinesPlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesPlayer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.common.v1.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.currentEndTime != null && Object.hasOwnProperty.call(message, "currentEndTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.currentEndTime);
                if (message.coinCount != null && Object.hasOwnProperty.call(message, "coinCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.coinCount);
                if (message.hurtCount != null && Object.hasOwnProperty.call(message, "hurtCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hurtCount);
                if (message.shieldCount != null && Object.hasOwnProperty.call(message, "shieldCount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.shieldCount);
                if (message.beAttackedCount != null && Object.hasOwnProperty.call(message, "beAttackedCount"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.beAttackedCount);
                if (message.betRates != null && message.betRates.length) {
                    writer.uint32(/* id 7, wireType 2 =*/58).fork();
                    for (var i = 0; i < message.betRates.length; ++i)
                        writer.int32(message.betRates[i]);
                    writer.ldelim();
                }
                if (message.playerStatus != null && Object.hasOwnProperty.call(message, "playerStatus"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.playerStatus);
                return writer;
            };

            /**
             * Encodes the specified MinesPlayer message, length delimited. Does not implicitly {@link mines.v1.MinesPlayer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {mines.v1.IMinesPlayer} message MinesPlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesPlayer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MinesPlayer message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.MinesPlayer} MinesPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesPlayer.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.MinesPlayer();
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
                            message.currentEndTime = reader.int64();
                            break;
                        }
                    case 3: {
                            message.coinCount = reader.int32();
                            break;
                        }
                    case 4: {
                            message.hurtCount = reader.int32();
                            break;
                        }
                    case 5: {
                            message.shieldCount = reader.int32();
                            break;
                        }
                    case 6: {
                            message.beAttackedCount = reader.int32();
                            break;
                        }
                    case 7: {
                            if (!(message.betRates && message.betRates.length))
                                message.betRates = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.betRates.push(reader.int32());
                            } else
                                message.betRates.push(reader.int32());
                            break;
                        }
                    case 8: {
                            message.playerStatus = reader.int32();
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
             * Decodes a MinesPlayer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.MinesPlayer} MinesPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesPlayer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MinesPlayer message.
             * @function verify
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MinesPlayer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.currentEndTime != null && message.hasOwnProperty("currentEndTime"))
                    if (!$util.isInteger(message.currentEndTime) && !(message.currentEndTime && $util.isInteger(message.currentEndTime.low) && $util.isInteger(message.currentEndTime.high)))
                        return "currentEndTime: integer|Long expected";
                if (message.coinCount != null && message.hasOwnProperty("coinCount"))
                    if (!$util.isInteger(message.coinCount))
                        return "coinCount: integer expected";
                if (message.hurtCount != null && message.hasOwnProperty("hurtCount"))
                    if (!$util.isInteger(message.hurtCount))
                        return "hurtCount: integer expected";
                if (message.shieldCount != null && message.hasOwnProperty("shieldCount"))
                    if (!$util.isInteger(message.shieldCount))
                        return "shieldCount: integer expected";
                if (message.beAttackedCount != null && message.hasOwnProperty("beAttackedCount"))
                    if (!$util.isInteger(message.beAttackedCount))
                        return "beAttackedCount: integer expected";
                if (message.betRates != null && message.hasOwnProperty("betRates")) {
                    if (!Array.isArray(message.betRates))
                        return "betRates: array expected";
                    for (var i = 0; i < message.betRates.length; ++i)
                        if (!$util.isInteger(message.betRates[i]))
                            return "betRates: integer[] expected";
                }
                if (message.playerStatus != null && message.hasOwnProperty("playerStatus"))
                    if (!$util.isInteger(message.playerStatus))
                        return "playerStatus: integer expected";
                return null;
            };

            /**
             * Creates a MinesPlayer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.MinesPlayer} MinesPlayer
             */
            MinesPlayer.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.MinesPlayer)
                    return object;
                var message = new $root.mines.v1.MinesPlayer();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".mines.v1.MinesPlayer.playerInfo: object expected");
                    message.playerInfo = $root.common.v1.PlayerInfo.fromObject(object.playerInfo);
                }
                if (object.currentEndTime != null)
                    if ($util.Long)
                        (message.currentEndTime = $util.Long.fromValue(object.currentEndTime)).unsigned = false;
                    else if (typeof object.currentEndTime === "string")
                        message.currentEndTime = parseInt(object.currentEndTime, 10);
                    else if (typeof object.currentEndTime === "number")
                        message.currentEndTime = object.currentEndTime;
                    else if (typeof object.currentEndTime === "object")
                        message.currentEndTime = new $util.LongBits(object.currentEndTime.low >>> 0, object.currentEndTime.high >>> 0).toNumber();
                if (object.coinCount != null)
                    message.coinCount = object.coinCount | 0;
                if (object.hurtCount != null)
                    message.hurtCount = object.hurtCount | 0;
                if (object.shieldCount != null)
                    message.shieldCount = object.shieldCount | 0;
                if (object.beAttackedCount != null)
                    message.beAttackedCount = object.beAttackedCount | 0;
                if (object.betRates) {
                    if (!Array.isArray(object.betRates))
                        throw TypeError(".mines.v1.MinesPlayer.betRates: array expected");
                    message.betRates = [];
                    for (var i = 0; i < object.betRates.length; ++i)
                        message.betRates[i] = object.betRates[i] | 0;
                }
                if (object.playerStatus != null)
                    message.playerStatus = object.playerStatus | 0;
                return message;
            };

            /**
             * Creates a plain object from a MinesPlayer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {mines.v1.MinesPlayer} message MinesPlayer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MinesPlayer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.betRates = [];
                if (options.defaults) {
                    object.playerInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.currentEndTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.currentEndTime = options.longs === String ? "0" : 0;
                    object.coinCount = 0;
                    object.hurtCount = 0;
                    object.shieldCount = 0;
                    object.beAttackedCount = 0;
                    object.playerStatus = 0;
                }
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.common.v1.PlayerInfo.toObject(message.playerInfo, options);
                if (message.currentEndTime != null && message.hasOwnProperty("currentEndTime"))
                    if (typeof message.currentEndTime === "number")
                        object.currentEndTime = options.longs === String ? String(message.currentEndTime) : message.currentEndTime;
                    else
                        object.currentEndTime = options.longs === String ? $util.Long.prototype.toString.call(message.currentEndTime) : options.longs === Number ? new $util.LongBits(message.currentEndTime.low >>> 0, message.currentEndTime.high >>> 0).toNumber() : message.currentEndTime;
                if (message.coinCount != null && message.hasOwnProperty("coinCount"))
                    object.coinCount = message.coinCount;
                if (message.hurtCount != null && message.hasOwnProperty("hurtCount"))
                    object.hurtCount = message.hurtCount;
                if (message.shieldCount != null && message.hasOwnProperty("shieldCount"))
                    object.shieldCount = message.shieldCount;
                if (message.beAttackedCount != null && message.hasOwnProperty("beAttackedCount"))
                    object.beAttackedCount = message.beAttackedCount;
                if (message.betRates && message.betRates.length) {
                    object.betRates = [];
                    for (var j = 0; j < message.betRates.length; ++j)
                        object.betRates[j] = message.betRates[j];
                }
                if (message.playerStatus != null && message.hasOwnProperty("playerStatus"))
                    object.playerStatus = message.playerStatus;
                return object;
            };

            /**
             * Converts this MinesPlayer to JSON.
             * @function toJSON
             * @memberof mines.v1.MinesPlayer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MinesPlayer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MinesPlayer
             * @function getTypeUrl
             * @memberof mines.v1.MinesPlayer
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MinesPlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.MinesPlayer";
            };

            return MinesPlayer;
        })();

        v1.OpenedCellList = (function() {

            /**
             * Properties of an OpenedCellList.
             * @memberof mines.v1
             * @interface IOpenedCellList
             * @property {Object.<string,mines.v1.ICell>|null} [cells] OpenedCellList cells
             */

            /**
             * Constructs a new OpenedCellList.
             * @memberof mines.v1
             * @classdesc Represents an OpenedCellList.
             * @implements IOpenedCellList
             * @constructor
             * @param {mines.v1.IOpenedCellList=} [properties] Properties to set
             */
            function OpenedCellList(properties) {
                this.cells = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OpenedCellList cells.
             * @member {Object.<string,mines.v1.ICell>} cells
             * @memberof mines.v1.OpenedCellList
             * @instance
             */
            OpenedCellList.prototype.cells = $util.emptyObject;

            /**
             * Creates a new OpenedCellList instance using the specified properties.
             * @function create
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {mines.v1.IOpenedCellList=} [properties] Properties to set
             * @returns {mines.v1.OpenedCellList} OpenedCellList instance
             */
            OpenedCellList.create = function create(properties) {
                return new OpenedCellList(properties);
            };

            /**
             * Encodes the specified OpenedCellList message. Does not implicitly {@link mines.v1.OpenedCellList.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {mines.v1.IOpenedCellList} message OpenedCellList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenedCellList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cells != null && Object.hasOwnProperty.call(message, "cells"))
                    for (var keys = Object.keys(message.cells), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                        $root.mines.v1.Cell.encode(message.cells[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified OpenedCellList message, length delimited. Does not implicitly {@link mines.v1.OpenedCellList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {mines.v1.IOpenedCellList} message OpenedCellList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenedCellList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenedCellList message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.OpenedCellList} OpenedCellList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenedCellList.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.OpenedCellList(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.cells === $util.emptyObject)
                                message.cells = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int64();
                                    break;
                                case 2:
                                    value = $root.mines.v1.Cell.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.cells[typeof key === "object" ? $util.longToHash(key) : key] = value;
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
             * Decodes an OpenedCellList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.OpenedCellList} OpenedCellList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenedCellList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenedCellList message.
             * @function verify
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenedCellList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cells != null && message.hasOwnProperty("cells")) {
                    if (!$util.isObject(message.cells))
                        return "cells: object expected";
                    var key = Object.keys(message.cells);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "cells: integer|Long key{k:int64} expected";
                        {
                            var error = $root.mines.v1.Cell.verify(message.cells[key[i]]);
                            if (error)
                                return "cells." + error;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates an OpenedCellList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.OpenedCellList} OpenedCellList
             */
            OpenedCellList.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.OpenedCellList)
                    return object;
                var message = new $root.mines.v1.OpenedCellList();
                if (object.cells) {
                    if (typeof object.cells !== "object")
                        throw TypeError(".mines.v1.OpenedCellList.cells: object expected");
                    message.cells = {};
                    for (var keys = Object.keys(object.cells), i = 0; i < keys.length; ++i) {
                        if (typeof object.cells[keys[i]] !== "object")
                            throw TypeError(".mines.v1.OpenedCellList.cells: object expected");
                        message.cells[keys[i]] = $root.mines.v1.Cell.fromObject(object.cells[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OpenedCellList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {mines.v1.OpenedCellList} message OpenedCellList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenedCellList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.cells = {};
                var keys2;
                if (message.cells && (keys2 = Object.keys(message.cells)).length) {
                    object.cells = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.cells[keys2[j]] = $root.mines.v1.Cell.toObject(message.cells[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this OpenedCellList to JSON.
             * @function toJSON
             * @memberof mines.v1.OpenedCellList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenedCellList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OpenedCellList
             * @function getTypeUrl
             * @memberof mines.v1.OpenedCellList
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OpenedCellList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.OpenedCellList";
            };

            return OpenedCellList;
        })();

        v1.Cell = (function() {

            /**
             * Properties of a Cell.
             * @memberof mines.v1
             * @interface ICell
             * @property {number|null} [cellId] Cell cellId
             * @property {mines.v1.CellType|null} [cellType] Cell cellType
             * @property {boolean|null} [afterDead] Cell afterDead
             * @property {number|Long|null} [rand] Cell rand
             * @property {Object.<string,number|Long>|null} [weights] Cell weights
             */

            /**
             * Constructs a new Cell.
             * @memberof mines.v1
             * @classdesc Represents a Cell.
             * @implements ICell
             * @constructor
             * @param {mines.v1.ICell=} [properties] Properties to set
             */
            function Cell(properties) {
                this.weights = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Cell cellId.
             * @member {number} cellId
             * @memberof mines.v1.Cell
             * @instance
             */
            Cell.prototype.cellId = 0;

            /**
             * Cell cellType.
             * @member {mines.v1.CellType} cellType
             * @memberof mines.v1.Cell
             * @instance
             */
            Cell.prototype.cellType = 0;

            /**
             * Cell afterDead.
             * @member {boolean} afterDead
             * @memberof mines.v1.Cell
             * @instance
             */
            Cell.prototype.afterDead = false;

            /**
             * Cell rand.
             * @member {number|Long} rand
             * @memberof mines.v1.Cell
             * @instance
             */
            Cell.prototype.rand = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Cell weights.
             * @member {Object.<string,number|Long>} weights
             * @memberof mines.v1.Cell
             * @instance
             */
            Cell.prototype.weights = $util.emptyObject;

            /**
             * Creates a new Cell instance using the specified properties.
             * @function create
             * @memberof mines.v1.Cell
             * @static
             * @param {mines.v1.ICell=} [properties] Properties to set
             * @returns {mines.v1.Cell} Cell instance
             */
            Cell.create = function create(properties) {
                return new Cell(properties);
            };

            /**
             * Encodes the specified Cell message. Does not implicitly {@link mines.v1.Cell.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.Cell
             * @static
             * @param {mines.v1.ICell} message Cell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cell.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cellId != null && Object.hasOwnProperty.call(message, "cellId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cellId);
                if (message.cellType != null && Object.hasOwnProperty.call(message, "cellType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cellType);
                if (message.afterDead != null && Object.hasOwnProperty.call(message, "afterDead"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.afterDead);
                if (message.rand != null && Object.hasOwnProperty.call(message, "rand"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.rand);
                if (message.weights != null && Object.hasOwnProperty.call(message, "weights"))
                    for (var keys = Object.keys(message.weights), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.weights[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Cell message, length delimited. Does not implicitly {@link mines.v1.Cell.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.Cell
             * @static
             * @param {mines.v1.ICell} message Cell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cell.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Cell message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.Cell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.Cell} Cell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cell.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.Cell(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cellId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.cellType = reader.int32();
                            break;
                        }
                    case 3: {
                            message.afterDead = reader.bool();
                            break;
                        }
                    case 4: {
                            message.rand = reader.int64();
                            break;
                        }
                    case 5: {
                            if (message.weights === $util.emptyObject)
                                message.weights = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.weights[key] = value;
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
             * Decodes a Cell message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.Cell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.Cell} Cell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cell.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Cell message.
             * @function verify
             * @memberof mines.v1.Cell
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Cell.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cellId != null && message.hasOwnProperty("cellId"))
                    if (!$util.isInteger(message.cellId))
                        return "cellId: integer expected";
                if (message.cellType != null && message.hasOwnProperty("cellType"))
                    switch (message.cellType) {
                    default:
                        return "cellType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.afterDead != null && message.hasOwnProperty("afterDead"))
                    if (typeof message.afterDead !== "boolean")
                        return "afterDead: boolean expected";
                if (message.rand != null && message.hasOwnProperty("rand"))
                    if (!$util.isInteger(message.rand) && !(message.rand && $util.isInteger(message.rand.low) && $util.isInteger(message.rand.high)))
                        return "rand: integer|Long expected";
                if (message.weights != null && message.hasOwnProperty("weights")) {
                    if (!$util.isObject(message.weights))
                        return "weights: object expected";
                    var key = Object.keys(message.weights);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "weights: integer key{k:int32} expected";
                        if (!$util.isInteger(message.weights[key[i]]) && !(message.weights[key[i]] && $util.isInteger(message.weights[key[i]].low) && $util.isInteger(message.weights[key[i]].high)))
                            return "weights: integer|Long{k:int32} expected";
                    }
                }
                return null;
            };

            /**
             * Creates a Cell message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.Cell
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.Cell} Cell
             */
            Cell.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.Cell)
                    return object;
                var message = new $root.mines.v1.Cell();
                if (object.cellId != null)
                    message.cellId = object.cellId | 0;
                switch (object.cellType) {
                default:
                    if (typeof object.cellType === "number") {
                        message.cellType = object.cellType;
                        break;
                    }
                    break;
                case "CELL_TYPE_UNOPENED":
                case 0:
                    message.cellType = 0;
                    break;
                case "CELL_TYPE_COIN":
                case 1:
                    message.cellType = 1;
                    break;
                case "CELL_TYPE_HURT":
                case 2:
                    message.cellType = 2;
                    break;
                case "CELL_TYPE_SHIELD":
                case 3:
                    message.cellType = 3;
                    break;
                case "CELL_TYPE_ATTACK":
                case 4:
                    message.cellType = 4;
                    break;
                case "CELL_TYPE_RADAR":
                case 5:
                    message.cellType = 5;
                    break;
                case "CELL_TYPE_RADAR_MARK":
                case 6:
                    message.cellType = 6;
                    break;
                }
                if (object.afterDead != null)
                    message.afterDead = Boolean(object.afterDead);
                if (object.rand != null)
                    if ($util.Long)
                        (message.rand = $util.Long.fromValue(object.rand)).unsigned = false;
                    else if (typeof object.rand === "string")
                        message.rand = parseInt(object.rand, 10);
                    else if (typeof object.rand === "number")
                        message.rand = object.rand;
                    else if (typeof object.rand === "object")
                        message.rand = new $util.LongBits(object.rand.low >>> 0, object.rand.high >>> 0).toNumber();
                if (object.weights) {
                    if (typeof object.weights !== "object")
                        throw TypeError(".mines.v1.Cell.weights: object expected");
                    message.weights = {};
                    for (var keys = Object.keys(object.weights), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.weights[keys[i]] = $util.Long.fromValue(object.weights[keys[i]])).unsigned = false;
                        else if (typeof object.weights[keys[i]] === "string")
                            message.weights[keys[i]] = parseInt(object.weights[keys[i]], 10);
                        else if (typeof object.weights[keys[i]] === "number")
                            message.weights[keys[i]] = object.weights[keys[i]];
                        else if (typeof object.weights[keys[i]] === "object")
                            message.weights[keys[i]] = new $util.LongBits(object.weights[keys[i]].low >>> 0, object.weights[keys[i]].high >>> 0).toNumber();
                }
                return message;
            };

            /**
             * Creates a plain object from a Cell message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.Cell
             * @static
             * @param {mines.v1.Cell} message Cell
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Cell.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.weights = {};
                if (options.defaults) {
                    object.cellId = 0;
                    object.cellType = options.enums === String ? "CELL_TYPE_UNOPENED" : 0;
                    object.afterDead = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.rand = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.rand = options.longs === String ? "0" : 0;
                }
                if (message.cellId != null && message.hasOwnProperty("cellId"))
                    object.cellId = message.cellId;
                if (message.cellType != null && message.hasOwnProperty("cellType"))
                    object.cellType = options.enums === String ? $root.mines.v1.CellType[message.cellType] === undefined ? message.cellType : $root.mines.v1.CellType[message.cellType] : message.cellType;
                if (message.afterDead != null && message.hasOwnProperty("afterDead"))
                    object.afterDead = message.afterDead;
                if (message.rand != null && message.hasOwnProperty("rand"))
                    if (typeof message.rand === "number")
                        object.rand = options.longs === String ? String(message.rand) : message.rand;
                    else
                        object.rand = options.longs === String ? $util.Long.prototype.toString.call(message.rand) : options.longs === Number ? new $util.LongBits(message.rand.low >>> 0, message.rand.high >>> 0).toNumber() : message.rand;
                var keys2;
                if (message.weights && (keys2 = Object.keys(message.weights)).length) {
                    object.weights = {};
                    for (var j = 0; j < keys2.length; ++j)
                        if (typeof message.weights[keys2[j]] === "number")
                            object.weights[keys2[j]] = options.longs === String ? String(message.weights[keys2[j]]) : message.weights[keys2[j]];
                        else
                            object.weights[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.weights[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.weights[keys2[j]].low >>> 0, message.weights[keys2[j]].high >>> 0).toNumber() : message.weights[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this Cell to JSON.
             * @function toJSON
             * @memberof mines.v1.Cell
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Cell.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Cell
             * @function getTypeUrl
             * @memberof mines.v1.Cell
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Cell.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.Cell";
            };

            return Cell;
        })();

        v1.JoinRoomReq = (function() {

            /**
             * Properties of a JoinRoomReq.
             * @memberof mines.v1
             * @interface IJoinRoomReq
             * @property {number|Long|null} [roomId] JoinRoomReq roomId
             */

            /**
             * Constructs a new JoinRoomReq.
             * @memberof mines.v1
             * @classdesc Represents a JoinRoomReq.
             * @implements IJoinRoomReq
             * @constructor
             * @param {mines.v1.IJoinRoomReq=} [properties] Properties to set
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
             * @memberof mines.v1.JoinRoomReq
             * @instance
             */
            JoinRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @function create
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {mines.v1.IJoinRoomReq=} [properties] Properties to set
             * @returns {mines.v1.JoinRoomReq} JoinRoomReq instance
             */
            JoinRoomReq.create = function create(properties) {
                return new JoinRoomReq(properties);
            };

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link mines.v1.JoinRoomReq.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {mines.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
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
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link mines.v1.JoinRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {mines.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.JoinRoomReq} JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.JoinRoomReq();
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
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.JoinRoomReq} JoinRoomReq
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
             * @memberof mines.v1.JoinRoomReq
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
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.JoinRoomReq} JoinRoomReq
             */
            JoinRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.JoinRoomReq)
                    return object;
                var message = new $root.mines.v1.JoinRoomReq();
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
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {mines.v1.JoinRoomReq} message JoinRoomReq
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
             * @memberof mines.v1.JoinRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomReq
             * @function getTypeUrl
             * @memberof mines.v1.JoinRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.JoinRoomReq";
            };

            return JoinRoomReq;
        })();

        v1.JoinRoomRes = (function() {

            /**
             * Properties of a JoinRoomRes.
             * @memberof mines.v1
             * @interface IJoinRoomRes
             * @property {mines.v1.IRoomInfo|null} [roomInfo] JoinRoomRes roomInfo
             * @property {mines.v1.IGameInfo|null} [gameInfo] JoinRoomRes gameInfo
             * @property {mines.v1.IMinesPlayer|null} [self] JoinRoomRes self
             * @property {Array.<common.v1.IPlayerInfo>|null} [watchers] JoinRoomRes watchers
             * @property {number|null} [playersCount] JoinRoomRes playersCount
             * @property {Array.<mines.v1.IMinesPlayer>|null} [players] JoinRoomRes players
             * @property {Array.<common.v1.IPlayerInfo>|null} [speakers] JoinRoomRes speakers
             * @property {common.v1.IPlayerSettings|null} [playerSettings] JoinRoomRes playerSettings
             */

            /**
             * Constructs a new JoinRoomRes.
             * @memberof mines.v1
             * @classdesc Represents a JoinRoomRes.
             * @implements IJoinRoomRes
             * @constructor
             * @param {mines.v1.IJoinRoomRes=} [properties] Properties to set
             */
            function JoinRoomRes(properties) {
                this.watchers = [];
                this.players = [];
                this.speakers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRoomRes roomInfo.
             * @member {mines.v1.IRoomInfo|null|undefined} roomInfo
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.roomInfo = null;

            /**
             * JoinRoomRes gameInfo.
             * @member {mines.v1.IGameInfo|null|undefined} gameInfo
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.gameInfo = null;

            /**
             * JoinRoomRes self.
             * @member {mines.v1.IMinesPlayer|null|undefined} self
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.self = null;

            /**
             * JoinRoomRes watchers.
             * @member {Array.<common.v1.IPlayerInfo>} watchers
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.watchers = $util.emptyArray;

            /**
             * JoinRoomRes playersCount.
             * @member {number} playersCount
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playersCount = 0;

            /**
             * JoinRoomRes players.
             * @member {Array.<mines.v1.IMinesPlayer>} players
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.players = $util.emptyArray;

            /**
             * JoinRoomRes speakers.
             * @member {Array.<common.v1.IPlayerInfo>} speakers
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.speakers = $util.emptyArray;

            /**
             * JoinRoomRes playerSettings.
             * @member {common.v1.IPlayerSettings|null|undefined} playerSettings
             * @memberof mines.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playerSettings = null;

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @function create
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {mines.v1.IJoinRoomRes=} [properties] Properties to set
             * @returns {mines.v1.JoinRoomRes} JoinRoomRes instance
             */
            JoinRoomRes.create = function create(properties) {
                return new JoinRoomRes(properties);
            };

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link mines.v1.JoinRoomRes.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {mines.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                    $root.mines.v1.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.mines.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.mines.v1.MinesPlayer.encode(message.self, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.watchers != null && message.watchers.length)
                    for (var i = 0; i < message.watchers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.watchers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.playersCount);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.mines.v1.MinesPlayer.encode(message.players[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.speakers != null && message.speakers.length)
                    for (var i = 0; i < message.speakers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.speakers[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.playerSettings != null && Object.hasOwnProperty.call(message, "playerSettings"))
                    $root.common.v1.PlayerSettings.encode(message.playerSettings, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link mines.v1.JoinRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {mines.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.JoinRoomRes} JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.JoinRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.roomInfo = $root.mines.v1.RoomInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.gameInfo = $root.mines.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.self = $root.mines.v1.MinesPlayer.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            if (!(message.watchers && message.watchers.length))
                                message.watchers = [];
                            message.watchers.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            message.playersCount = reader.int32();
                            break;
                        }
                    case 6: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.mines.v1.MinesPlayer.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.speakers && message.speakers.length))
                                message.speakers = [];
                            message.speakers.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
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
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.JoinRoomRes} JoinRoomRes
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
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                    var error = $root.mines.v1.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.mines.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.mines.v1.MinesPlayer.verify(message.self);
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
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    if (!$util.isInteger(message.playersCount))
                        return "playersCount: integer expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.mines.v1.MinesPlayer.verify(message.players[i]);
                        if (error)
                            return "players." + error;
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
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.JoinRoomRes} JoinRoomRes
             */
            JoinRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.JoinRoomRes)
                    return object;
                var message = new $root.mines.v1.JoinRoomRes();
                if (object.roomInfo != null) {
                    if (typeof object.roomInfo !== "object")
                        throw TypeError(".mines.v1.JoinRoomRes.roomInfo: object expected");
                    message.roomInfo = $root.mines.v1.RoomInfo.fromObject(object.roomInfo);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".mines.v1.JoinRoomRes.gameInfo: object expected");
                    message.gameInfo = $root.mines.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".mines.v1.JoinRoomRes.self: object expected");
                    message.self = $root.mines.v1.MinesPlayer.fromObject(object.self);
                }
                if (object.watchers) {
                    if (!Array.isArray(object.watchers))
                        throw TypeError(".mines.v1.JoinRoomRes.watchers: array expected");
                    message.watchers = [];
                    for (var i = 0; i < object.watchers.length; ++i) {
                        if (typeof object.watchers[i] !== "object")
                            throw TypeError(".mines.v1.JoinRoomRes.watchers: object expected");
                        message.watchers[i] = $root.common.v1.PlayerInfo.fromObject(object.watchers[i]);
                    }
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".mines.v1.JoinRoomRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".mines.v1.JoinRoomRes.players: object expected");
                        message.players[i] = $root.mines.v1.MinesPlayer.fromObject(object.players[i]);
                    }
                }
                if (object.speakers) {
                    if (!Array.isArray(object.speakers))
                        throw TypeError(".mines.v1.JoinRoomRes.speakers: array expected");
                    message.speakers = [];
                    for (var i = 0; i < object.speakers.length; ++i) {
                        if (typeof object.speakers[i] !== "object")
                            throw TypeError(".mines.v1.JoinRoomRes.speakers: object expected");
                        message.speakers[i] = $root.common.v1.PlayerInfo.fromObject(object.speakers[i]);
                    }
                }
                if (object.playerSettings != null) {
                    if (typeof object.playerSettings !== "object")
                        throw TypeError(".mines.v1.JoinRoomRes.playerSettings: object expected");
                    message.playerSettings = $root.common.v1.PlayerSettings.fromObject(object.playerSettings);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {mines.v1.JoinRoomRes} message JoinRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoomRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.watchers = [];
                    object.players = [];
                    object.speakers = [];
                }
                if (options.defaults) {
                    object.roomInfo = null;
                    object.gameInfo = null;
                    object.self = null;
                    object.playersCount = 0;
                    object.playerSettings = null;
                }
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                    object.roomInfo = $root.mines.v1.RoomInfo.toObject(message.roomInfo, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.mines.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.mines.v1.MinesPlayer.toObject(message.self, options);
                if (message.watchers && message.watchers.length) {
                    object.watchers = [];
                    for (var j = 0; j < message.watchers.length; ++j)
                        object.watchers[j] = $root.common.v1.PlayerInfo.toObject(message.watchers[j], options);
                }
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.mines.v1.MinesPlayer.toObject(message.players[j], options);
                }
                if (message.speakers && message.speakers.length) {
                    object.speakers = [];
                    for (var j = 0; j < message.speakers.length; ++j)
                        object.speakers[j] = $root.common.v1.PlayerInfo.toObject(message.speakers[j], options);
                }
                if (message.playerSettings != null && message.hasOwnProperty("playerSettings"))
                    object.playerSettings = $root.common.v1.PlayerSettings.toObject(message.playerSettings, options);
                return object;
            };

            /**
             * Converts this JoinRoomRes to JSON.
             * @function toJSON
             * @memberof mines.v1.JoinRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomRes
             * @function getTypeUrl
             * @memberof mines.v1.JoinRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.JoinRoomRes";
            };

            return JoinRoomRes;
        })();

        v1.OpenCellReq = (function() {

            /**
             * Properties of an OpenCellReq.
             * @memberof mines.v1
             * @interface IOpenCellReq
             * @property {number|null} [cellId] OpenCellReq cellId
             */

            /**
             * Constructs a new OpenCellReq.
             * @memberof mines.v1
             * @classdesc Represents an OpenCellReq.
             * @implements IOpenCellReq
             * @constructor
             * @param {mines.v1.IOpenCellReq=} [properties] Properties to set
             */
            function OpenCellReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OpenCellReq cellId.
             * @member {number} cellId
             * @memberof mines.v1.OpenCellReq
             * @instance
             */
            OpenCellReq.prototype.cellId = 0;

            /**
             * Creates a new OpenCellReq instance using the specified properties.
             * @function create
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {mines.v1.IOpenCellReq=} [properties] Properties to set
             * @returns {mines.v1.OpenCellReq} OpenCellReq instance
             */
            OpenCellReq.create = function create(properties) {
                return new OpenCellReq(properties);
            };

            /**
             * Encodes the specified OpenCellReq message. Does not implicitly {@link mines.v1.OpenCellReq.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {mines.v1.IOpenCellReq} message OpenCellReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenCellReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cellId != null && Object.hasOwnProperty.call(message, "cellId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cellId);
                return writer;
            };

            /**
             * Encodes the specified OpenCellReq message, length delimited. Does not implicitly {@link mines.v1.OpenCellReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {mines.v1.IOpenCellReq} message OpenCellReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenCellReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenCellReq message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.OpenCellReq} OpenCellReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenCellReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.OpenCellReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cellId = reader.int32();
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
             * Decodes an OpenCellReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.OpenCellReq} OpenCellReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenCellReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenCellReq message.
             * @function verify
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenCellReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cellId != null && message.hasOwnProperty("cellId"))
                    if (!$util.isInteger(message.cellId))
                        return "cellId: integer expected";
                return null;
            };

            /**
             * Creates an OpenCellReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.OpenCellReq} OpenCellReq
             */
            OpenCellReq.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.OpenCellReq)
                    return object;
                var message = new $root.mines.v1.OpenCellReq();
                if (object.cellId != null)
                    message.cellId = object.cellId | 0;
                return message;
            };

            /**
             * Creates a plain object from an OpenCellReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {mines.v1.OpenCellReq} message OpenCellReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenCellReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.cellId = 0;
                if (message.cellId != null && message.hasOwnProperty("cellId"))
                    object.cellId = message.cellId;
                return object;
            };

            /**
             * Converts this OpenCellReq to JSON.
             * @function toJSON
             * @memberof mines.v1.OpenCellReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenCellReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OpenCellReq
             * @function getTypeUrl
             * @memberof mines.v1.OpenCellReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OpenCellReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.OpenCellReq";
            };

            return OpenCellReq;
        })();

        v1.OpenCellRes = (function() {

            /**
             * Properties of an OpenCellRes.
             * @memberof mines.v1
             * @interface IOpenCellRes
             * @property {mines.v1.ICell|null} [cell] OpenCellRes cell
             * @property {mines.v1.ICell|null} [radarSignCell] OpenCellRes radarSignCell
             * @property {number|Long|null} [recvId] OpenCellRes recvId
             */

            /**
             * Constructs a new OpenCellRes.
             * @memberof mines.v1
             * @classdesc Represents an OpenCellRes.
             * @implements IOpenCellRes
             * @constructor
             * @param {mines.v1.IOpenCellRes=} [properties] Properties to set
             */
            function OpenCellRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OpenCellRes cell.
             * @member {mines.v1.ICell|null|undefined} cell
             * @memberof mines.v1.OpenCellRes
             * @instance
             */
            OpenCellRes.prototype.cell = null;

            /**
             * OpenCellRes radarSignCell.
             * @member {mines.v1.ICell|null|undefined} radarSignCell
             * @memberof mines.v1.OpenCellRes
             * @instance
             */
            OpenCellRes.prototype.radarSignCell = null;

            /**
             * OpenCellRes recvId.
             * @member {number|Long} recvId
             * @memberof mines.v1.OpenCellRes
             * @instance
             */
            OpenCellRes.prototype.recvId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OpenCellRes instance using the specified properties.
             * @function create
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {mines.v1.IOpenCellRes=} [properties] Properties to set
             * @returns {mines.v1.OpenCellRes} OpenCellRes instance
             */
            OpenCellRes.create = function create(properties) {
                return new OpenCellRes(properties);
            };

            /**
             * Encodes the specified OpenCellRes message. Does not implicitly {@link mines.v1.OpenCellRes.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {mines.v1.IOpenCellRes} message OpenCellRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenCellRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cell != null && Object.hasOwnProperty.call(message, "cell"))
                    $root.mines.v1.Cell.encode(message.cell, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.radarSignCell != null && Object.hasOwnProperty.call(message, "radarSignCell"))
                    $root.mines.v1.Cell.encode(message.radarSignCell, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.recvId != null && Object.hasOwnProperty.call(message, "recvId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.recvId);
                return writer;
            };

            /**
             * Encodes the specified OpenCellRes message, length delimited. Does not implicitly {@link mines.v1.OpenCellRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {mines.v1.IOpenCellRes} message OpenCellRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenCellRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenCellRes message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.OpenCellRes} OpenCellRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenCellRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.OpenCellRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cell = $root.mines.v1.Cell.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.radarSignCell = $root.mines.v1.Cell.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.recvId = reader.int64();
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
             * Decodes an OpenCellRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.OpenCellRes} OpenCellRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenCellRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenCellRes message.
             * @function verify
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenCellRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cell != null && message.hasOwnProperty("cell")) {
                    var error = $root.mines.v1.Cell.verify(message.cell);
                    if (error)
                        return "cell." + error;
                }
                if (message.radarSignCell != null && message.hasOwnProperty("radarSignCell")) {
                    var error = $root.mines.v1.Cell.verify(message.radarSignCell);
                    if (error)
                        return "radarSignCell." + error;
                }
                if (message.recvId != null && message.hasOwnProperty("recvId"))
                    if (!$util.isInteger(message.recvId) && !(message.recvId && $util.isInteger(message.recvId.low) && $util.isInteger(message.recvId.high)))
                        return "recvId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OpenCellRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.OpenCellRes} OpenCellRes
             */
            OpenCellRes.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.OpenCellRes)
                    return object;
                var message = new $root.mines.v1.OpenCellRes();
                if (object.cell != null) {
                    if (typeof object.cell !== "object")
                        throw TypeError(".mines.v1.OpenCellRes.cell: object expected");
                    message.cell = $root.mines.v1.Cell.fromObject(object.cell);
                }
                if (object.radarSignCell != null) {
                    if (typeof object.radarSignCell !== "object")
                        throw TypeError(".mines.v1.OpenCellRes.radarSignCell: object expected");
                    message.radarSignCell = $root.mines.v1.Cell.fromObject(object.radarSignCell);
                }
                if (object.recvId != null)
                    if ($util.Long)
                        (message.recvId = $util.Long.fromValue(object.recvId)).unsigned = false;
                    else if (typeof object.recvId === "string")
                        message.recvId = parseInt(object.recvId, 10);
                    else if (typeof object.recvId === "number")
                        message.recvId = object.recvId;
                    else if (typeof object.recvId === "object")
                        message.recvId = new $util.LongBits(object.recvId.low >>> 0, object.recvId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OpenCellRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {mines.v1.OpenCellRes} message OpenCellRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenCellRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.cell = null;
                    object.radarSignCell = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.recvId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.recvId = options.longs === String ? "0" : 0;
                }
                if (message.cell != null && message.hasOwnProperty("cell"))
                    object.cell = $root.mines.v1.Cell.toObject(message.cell, options);
                if (message.radarSignCell != null && message.hasOwnProperty("radarSignCell"))
                    object.radarSignCell = $root.mines.v1.Cell.toObject(message.radarSignCell, options);
                if (message.recvId != null && message.hasOwnProperty("recvId"))
                    if (typeof message.recvId === "number")
                        object.recvId = options.longs === String ? String(message.recvId) : message.recvId;
                    else
                        object.recvId = options.longs === String ? $util.Long.prototype.toString.call(message.recvId) : options.longs === Number ? new $util.LongBits(message.recvId.low >>> 0, message.recvId.high >>> 0).toNumber() : message.recvId;
                return object;
            };

            /**
             * Converts this OpenCellRes to JSON.
             * @function toJSON
             * @memberof mines.v1.OpenCellRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenCellRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OpenCellRes
             * @function getTypeUrl
             * @memberof mines.v1.OpenCellRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OpenCellRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.OpenCellRes";
            };

            return OpenCellRes;
        })();

        v1.OpenCellBroadcast = (function() {

            /**
             * Properties of an OpenCellBroadcast.
             * @memberof mines.v1
             * @interface IOpenCellBroadcast
             * @property {number|Long|null} [bcUid] OpenCellBroadcast bcUid
             * @property {number|Long|null} [userId] OpenCellBroadcast userId
             * @property {mines.v1.ICell|null} [cell] OpenCellBroadcast cell
             * @property {mines.v1.ICell|null} [radarSignCell] OpenCellBroadcast radarSignCell
             */

            /**
             * Constructs a new OpenCellBroadcast.
             * @memberof mines.v1
             * @classdesc Represents an OpenCellBroadcast.
             * @implements IOpenCellBroadcast
             * @constructor
             * @param {mines.v1.IOpenCellBroadcast=} [properties] Properties to set
             */
            function OpenCellBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OpenCellBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof mines.v1.OpenCellBroadcast
             * @instance
             */
            OpenCellBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OpenCellBroadcast userId.
             * @member {number|Long} userId
             * @memberof mines.v1.OpenCellBroadcast
             * @instance
             */
            OpenCellBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OpenCellBroadcast cell.
             * @member {mines.v1.ICell|null|undefined} cell
             * @memberof mines.v1.OpenCellBroadcast
             * @instance
             */
            OpenCellBroadcast.prototype.cell = null;

            /**
             * OpenCellBroadcast radarSignCell.
             * @member {mines.v1.ICell|null|undefined} radarSignCell
             * @memberof mines.v1.OpenCellBroadcast
             * @instance
             */
            OpenCellBroadcast.prototype.radarSignCell = null;

            /**
             * Creates a new OpenCellBroadcast instance using the specified properties.
             * @function create
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {mines.v1.IOpenCellBroadcast=} [properties] Properties to set
             * @returns {mines.v1.OpenCellBroadcast} OpenCellBroadcast instance
             */
            OpenCellBroadcast.create = function create(properties) {
                return new OpenCellBroadcast(properties);
            };

            /**
             * Encodes the specified OpenCellBroadcast message. Does not implicitly {@link mines.v1.OpenCellBroadcast.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {mines.v1.IOpenCellBroadcast} message OpenCellBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenCellBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                if (message.cell != null && Object.hasOwnProperty.call(message, "cell"))
                    $root.mines.v1.Cell.encode(message.cell, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.radarSignCell != null && Object.hasOwnProperty.call(message, "radarSignCell"))
                    $root.mines.v1.Cell.encode(message.radarSignCell, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OpenCellBroadcast message, length delimited. Does not implicitly {@link mines.v1.OpenCellBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {mines.v1.IOpenCellBroadcast} message OpenCellBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenCellBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenCellBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.OpenCellBroadcast} OpenCellBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenCellBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.OpenCellBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 2: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.cell = $root.mines.v1.Cell.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.radarSignCell = $root.mines.v1.Cell.decode(reader, reader.uint32());
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
             * Decodes an OpenCellBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.OpenCellBroadcast} OpenCellBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenCellBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenCellBroadcast message.
             * @function verify
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenCellBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.cell != null && message.hasOwnProperty("cell")) {
                    var error = $root.mines.v1.Cell.verify(message.cell);
                    if (error)
                        return "cell." + error;
                }
                if (message.radarSignCell != null && message.hasOwnProperty("radarSignCell")) {
                    var error = $root.mines.v1.Cell.verify(message.radarSignCell);
                    if (error)
                        return "radarSignCell." + error;
                }
                return null;
            };

            /**
             * Creates an OpenCellBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.OpenCellBroadcast} OpenCellBroadcast
             */
            OpenCellBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.OpenCellBroadcast)
                    return object;
                var message = new $root.mines.v1.OpenCellBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.cell != null) {
                    if (typeof object.cell !== "object")
                        throw TypeError(".mines.v1.OpenCellBroadcast.cell: object expected");
                    message.cell = $root.mines.v1.Cell.fromObject(object.cell);
                }
                if (object.radarSignCell != null) {
                    if (typeof object.radarSignCell !== "object")
                        throw TypeError(".mines.v1.OpenCellBroadcast.radarSignCell: object expected");
                    message.radarSignCell = $root.mines.v1.Cell.fromObject(object.radarSignCell);
                }
                return message;
            };

            /**
             * Creates a plain object from an OpenCellBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {mines.v1.OpenCellBroadcast} message OpenCellBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenCellBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.cell = null;
                    object.radarSignCell = null;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.cell != null && message.hasOwnProperty("cell"))
                    object.cell = $root.mines.v1.Cell.toObject(message.cell, options);
                if (message.radarSignCell != null && message.hasOwnProperty("radarSignCell"))
                    object.radarSignCell = $root.mines.v1.Cell.toObject(message.radarSignCell, options);
                return object;
            };

            /**
             * Converts this OpenCellBroadcast to JSON.
             * @function toJSON
             * @memberof mines.v1.OpenCellBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenCellBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OpenCellBroadcast
             * @function getTypeUrl
             * @memberof mines.v1.OpenCellBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OpenCellBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.OpenCellBroadcast";
            };

            return OpenCellBroadcast;
        })();

        v1.NewBetRatesBroadcast = (function() {

            /**
             * Properties of a NewBetRatesBroadcast.
             * @memberof mines.v1
             * @interface INewBetRatesBroadcast
             * @property {number|Long|null} [bcUid] NewBetRatesBroadcast bcUid
             * @property {number|Long|null} [userId] NewBetRatesBroadcast userId
             * @property {Array.<number>|null} [newBetRates] NewBetRatesBroadcast newBetRates
             */

            /**
             * Constructs a new NewBetRatesBroadcast.
             * @memberof mines.v1
             * @classdesc Represents a NewBetRatesBroadcast.
             * @implements INewBetRatesBroadcast
             * @constructor
             * @param {mines.v1.INewBetRatesBroadcast=} [properties] Properties to set
             */
            function NewBetRatesBroadcast(properties) {
                this.newBetRates = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NewBetRatesBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof mines.v1.NewBetRatesBroadcast
             * @instance
             */
            NewBetRatesBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * NewBetRatesBroadcast userId.
             * @member {number|Long} userId
             * @memberof mines.v1.NewBetRatesBroadcast
             * @instance
             */
            NewBetRatesBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * NewBetRatesBroadcast newBetRates.
             * @member {Array.<number>} newBetRates
             * @memberof mines.v1.NewBetRatesBroadcast
             * @instance
             */
            NewBetRatesBroadcast.prototype.newBetRates = $util.emptyArray;

            /**
             * Creates a new NewBetRatesBroadcast instance using the specified properties.
             * @function create
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {mines.v1.INewBetRatesBroadcast=} [properties] Properties to set
             * @returns {mines.v1.NewBetRatesBroadcast} NewBetRatesBroadcast instance
             */
            NewBetRatesBroadcast.create = function create(properties) {
                return new NewBetRatesBroadcast(properties);
            };

            /**
             * Encodes the specified NewBetRatesBroadcast message. Does not implicitly {@link mines.v1.NewBetRatesBroadcast.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {mines.v1.INewBetRatesBroadcast} message NewBetRatesBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewBetRatesBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                if (message.newBetRates != null && message.newBetRates.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.newBetRates.length; ++i)
                        writer.int32(message.newBetRates[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified NewBetRatesBroadcast message, length delimited. Does not implicitly {@link mines.v1.NewBetRatesBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {mines.v1.INewBetRatesBroadcast} message NewBetRatesBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewBetRatesBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NewBetRatesBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.NewBetRatesBroadcast} NewBetRatesBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewBetRatesBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.NewBetRatesBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 2: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 3: {
                            if (!(message.newBetRates && message.newBetRates.length))
                                message.newBetRates = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.newBetRates.push(reader.int32());
                            } else
                                message.newBetRates.push(reader.int32());
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
             * Decodes a NewBetRatesBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.NewBetRatesBroadcast} NewBetRatesBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewBetRatesBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NewBetRatesBroadcast message.
             * @function verify
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NewBetRatesBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.newBetRates != null && message.hasOwnProperty("newBetRates")) {
                    if (!Array.isArray(message.newBetRates))
                        return "newBetRates: array expected";
                    for (var i = 0; i < message.newBetRates.length; ++i)
                        if (!$util.isInteger(message.newBetRates[i]))
                            return "newBetRates: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a NewBetRatesBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.NewBetRatesBroadcast} NewBetRatesBroadcast
             */
            NewBetRatesBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.NewBetRatesBroadcast)
                    return object;
                var message = new $root.mines.v1.NewBetRatesBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.newBetRates) {
                    if (!Array.isArray(object.newBetRates))
                        throw TypeError(".mines.v1.NewBetRatesBroadcast.newBetRates: array expected");
                    message.newBetRates = [];
                    for (var i = 0; i < object.newBetRates.length; ++i)
                        message.newBetRates[i] = object.newBetRates[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a NewBetRatesBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {mines.v1.NewBetRatesBroadcast} message NewBetRatesBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NewBetRatesBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.newBetRates = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.newBetRates && message.newBetRates.length) {
                    object.newBetRates = [];
                    for (var j = 0; j < message.newBetRates.length; ++j)
                        object.newBetRates[j] = message.newBetRates[j];
                }
                return object;
            };

            /**
             * Converts this NewBetRatesBroadcast to JSON.
             * @function toJSON
             * @memberof mines.v1.NewBetRatesBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NewBetRatesBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NewBetRatesBroadcast
             * @function getTypeUrl
             * @memberof mines.v1.NewBetRatesBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NewBetRatesBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.NewBetRatesBroadcast";
            };

            return NewBetRatesBroadcast;
        })();

        v1.BagInReq = (function() {

            /**
             * Properties of a BagInReq.
             * @memberof mines.v1
             * @interface IBagInReq
             */

            /**
             * Constructs a new BagInReq.
             * @memberof mines.v1
             * @classdesc Represents a BagInReq.
             * @implements IBagInReq
             * @constructor
             * @param {mines.v1.IBagInReq=} [properties] Properties to set
             */
            function BagInReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new BagInReq instance using the specified properties.
             * @function create
             * @memberof mines.v1.BagInReq
             * @static
             * @param {mines.v1.IBagInReq=} [properties] Properties to set
             * @returns {mines.v1.BagInReq} BagInReq instance
             */
            BagInReq.create = function create(properties) {
                return new BagInReq(properties);
            };

            /**
             * Encodes the specified BagInReq message. Does not implicitly {@link mines.v1.BagInReq.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.BagInReq
             * @static
             * @param {mines.v1.IBagInReq} message BagInReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BagInReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified BagInReq message, length delimited. Does not implicitly {@link mines.v1.BagInReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.BagInReq
             * @static
             * @param {mines.v1.IBagInReq} message BagInReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BagInReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BagInReq message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.BagInReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.BagInReq} BagInReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BagInReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.BagInReq();
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
             * Decodes a BagInReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.BagInReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.BagInReq} BagInReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BagInReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BagInReq message.
             * @function verify
             * @memberof mines.v1.BagInReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BagInReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a BagInReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.BagInReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.BagInReq} BagInReq
             */
            BagInReq.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.BagInReq)
                    return object;
                return new $root.mines.v1.BagInReq();
            };

            /**
             * Creates a plain object from a BagInReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.BagInReq
             * @static
             * @param {mines.v1.BagInReq} message BagInReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BagInReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this BagInReq to JSON.
             * @function toJSON
             * @memberof mines.v1.BagInReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BagInReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BagInReq
             * @function getTypeUrl
             * @memberof mines.v1.BagInReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BagInReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.BagInReq";
            };

            return BagInReq;
        })();

        v1.BagInRes = (function() {

            /**
             * Properties of a BagInRes.
             * @memberof mines.v1
             * @interface IBagInRes
             */

            /**
             * Constructs a new BagInRes.
             * @memberof mines.v1
             * @classdesc Represents a BagInRes.
             * @implements IBagInRes
             * @constructor
             * @param {mines.v1.IBagInRes=} [properties] Properties to set
             */
            function BagInRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new BagInRes instance using the specified properties.
             * @function create
             * @memberof mines.v1.BagInRes
             * @static
             * @param {mines.v1.IBagInRes=} [properties] Properties to set
             * @returns {mines.v1.BagInRes} BagInRes instance
             */
            BagInRes.create = function create(properties) {
                return new BagInRes(properties);
            };

            /**
             * Encodes the specified BagInRes message. Does not implicitly {@link mines.v1.BagInRes.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.BagInRes
             * @static
             * @param {mines.v1.IBagInRes} message BagInRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BagInRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified BagInRes message, length delimited. Does not implicitly {@link mines.v1.BagInRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.BagInRes
             * @static
             * @param {mines.v1.IBagInRes} message BagInRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BagInRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BagInRes message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.BagInRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.BagInRes} BagInRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BagInRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.BagInRes();
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
             * Decodes a BagInRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.BagInRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.BagInRes} BagInRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BagInRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BagInRes message.
             * @function verify
             * @memberof mines.v1.BagInRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BagInRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a BagInRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.BagInRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.BagInRes} BagInRes
             */
            BagInRes.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.BagInRes)
                    return object;
                return new $root.mines.v1.BagInRes();
            };

            /**
             * Creates a plain object from a BagInRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.BagInRes
             * @static
             * @param {mines.v1.BagInRes} message BagInRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BagInRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this BagInRes to JSON.
             * @function toJSON
             * @memberof mines.v1.BagInRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BagInRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BagInRes
             * @function getTypeUrl
             * @memberof mines.v1.BagInRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BagInRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.BagInRes";
            };

            return BagInRes;
        })();

        v1.BagInBroadcast = (function() {

            /**
             * Properties of a BagInBroadcast.
             * @memberof mines.v1
             * @interface IBagInBroadcast
             * @property {number|Long|null} [bcUid] BagInBroadcast bcUid
             * @property {number|Long|null} [userId] BagInBroadcast userId
             */

            /**
             * Constructs a new BagInBroadcast.
             * @memberof mines.v1
             * @classdesc Represents a BagInBroadcast.
             * @implements IBagInBroadcast
             * @constructor
             * @param {mines.v1.IBagInBroadcast=} [properties] Properties to set
             */
            function BagInBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BagInBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof mines.v1.BagInBroadcast
             * @instance
             */
            BagInBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BagInBroadcast userId.
             * @member {number|Long} userId
             * @memberof mines.v1.BagInBroadcast
             * @instance
             */
            BagInBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new BagInBroadcast instance using the specified properties.
             * @function create
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {mines.v1.IBagInBroadcast=} [properties] Properties to set
             * @returns {mines.v1.BagInBroadcast} BagInBroadcast instance
             */
            BagInBroadcast.create = function create(properties) {
                return new BagInBroadcast(properties);
            };

            /**
             * Encodes the specified BagInBroadcast message. Does not implicitly {@link mines.v1.BagInBroadcast.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {mines.v1.IBagInBroadcast} message BagInBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BagInBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified BagInBroadcast message, length delimited. Does not implicitly {@link mines.v1.BagInBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {mines.v1.IBagInBroadcast} message BagInBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BagInBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BagInBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.BagInBroadcast} BagInBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BagInBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.BagInBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 2: {
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
             * Decodes a BagInBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.BagInBroadcast} BagInBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BagInBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BagInBroadcast message.
             * @function verify
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BagInBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a BagInBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.BagInBroadcast} BagInBroadcast
             */
            BagInBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.BagInBroadcast)
                    return object;
                var message = new $root.mines.v1.BagInBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
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
             * Creates a plain object from a BagInBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {mines.v1.BagInBroadcast} message BagInBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BagInBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this BagInBroadcast to JSON.
             * @function toJSON
             * @memberof mines.v1.BagInBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BagInBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BagInBroadcast
             * @function getTypeUrl
             * @memberof mines.v1.BagInBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BagInBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.BagInBroadcast";
            };

            return BagInBroadcast;
        })();

        v1.DeadBroadcast = (function() {

            /**
             * Properties of a DeadBroadcast.
             * @memberof mines.v1
             * @interface IDeadBroadcast
             * @property {number|Long|null} [bcUid] DeadBroadcast bcUid
             * @property {number|Long|null} [userId] DeadBroadcast userId
             * @property {number|null} [playerStatus] DeadBroadcast playerStatus
             */

            /**
             * Constructs a new DeadBroadcast.
             * @memberof mines.v1
             * @classdesc Represents a DeadBroadcast.
             * @implements IDeadBroadcast
             * @constructor
             * @param {mines.v1.IDeadBroadcast=} [properties] Properties to set
             */
            function DeadBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeadBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof mines.v1.DeadBroadcast
             * @instance
             */
            DeadBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DeadBroadcast userId.
             * @member {number|Long} userId
             * @memberof mines.v1.DeadBroadcast
             * @instance
             */
            DeadBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DeadBroadcast playerStatus.
             * @member {number} playerStatus
             * @memberof mines.v1.DeadBroadcast
             * @instance
             */
            DeadBroadcast.prototype.playerStatus = 0;

            /**
             * Creates a new DeadBroadcast instance using the specified properties.
             * @function create
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {mines.v1.IDeadBroadcast=} [properties] Properties to set
             * @returns {mines.v1.DeadBroadcast} DeadBroadcast instance
             */
            DeadBroadcast.create = function create(properties) {
                return new DeadBroadcast(properties);
            };

            /**
             * Encodes the specified DeadBroadcast message. Does not implicitly {@link mines.v1.DeadBroadcast.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {mines.v1.IDeadBroadcast} message DeadBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeadBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                if (message.playerStatus != null && Object.hasOwnProperty.call(message, "playerStatus"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerStatus);
                return writer;
            };

            /**
             * Encodes the specified DeadBroadcast message, length delimited. Does not implicitly {@link mines.v1.DeadBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {mines.v1.IDeadBroadcast} message DeadBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeadBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeadBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.DeadBroadcast} DeadBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeadBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.DeadBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 2: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.playerStatus = reader.int32();
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
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.DeadBroadcast} DeadBroadcast
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
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeadBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.playerStatus != null && message.hasOwnProperty("playerStatus"))
                    if (!$util.isInteger(message.playerStatus))
                        return "playerStatus: integer expected";
                return null;
            };

            /**
             * Creates a DeadBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.DeadBroadcast} DeadBroadcast
             */
            DeadBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.DeadBroadcast)
                    return object;
                var message = new $root.mines.v1.DeadBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.playerStatus != null)
                    message.playerStatus = object.playerStatus | 0;
                return message;
            };

            /**
             * Creates a plain object from a DeadBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {mines.v1.DeadBroadcast} message DeadBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeadBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.playerStatus = 0;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.playerStatus != null && message.hasOwnProperty("playerStatus"))
                    object.playerStatus = message.playerStatus;
                return object;
            };

            /**
             * Converts this DeadBroadcast to JSON.
             * @function toJSON
             * @memberof mines.v1.DeadBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeadBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DeadBroadcast
             * @function getTypeUrl
             * @memberof mines.v1.DeadBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeadBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.DeadBroadcast";
            };

            return DeadBroadcast;
        })();

        v1.PrizeBroadcast = (function() {

            /**
             * Properties of a PrizeBroadcast.
             * @memberof mines.v1
             * @interface IPrizeBroadcast
             * @property {number|Long|null} [bcUid] PrizeBroadcast bcUid
             * @property {number|Long|null} [winerId] PrizeBroadcast winerId
             * @property {number|Long|null} [winCoin] PrizeBroadcast winCoin
             * @property {Array.<mines.v1.IMinesPlayer>|null} [players] PrizeBroadcast players
             * @property {Object.<string,mines.v1.IOpenedCellList>|null} [allOpenedCells] PrizeBroadcast allOpenedCells
             */

            /**
             * Constructs a new PrizeBroadcast.
             * @memberof mines.v1
             * @classdesc Represents a PrizeBroadcast.
             * @implements IPrizeBroadcast
             * @constructor
             * @param {mines.v1.IPrizeBroadcast=} [properties] Properties to set
             */
            function PrizeBroadcast(properties) {
                this.players = [];
                this.allOpenedCells = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PrizeBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof mines.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PrizeBroadcast winerId.
             * @member {number|Long} winerId
             * @memberof mines.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.winerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PrizeBroadcast winCoin.
             * @member {number|Long} winCoin
             * @memberof mines.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.winCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PrizeBroadcast players.
             * @member {Array.<mines.v1.IMinesPlayer>} players
             * @memberof mines.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.players = $util.emptyArray;

            /**
             * PrizeBroadcast allOpenedCells.
             * @member {Object.<string,mines.v1.IOpenedCellList>} allOpenedCells
             * @memberof mines.v1.PrizeBroadcast
             * @instance
             */
            PrizeBroadcast.prototype.allOpenedCells = $util.emptyObject;

            /**
             * Creates a new PrizeBroadcast instance using the specified properties.
             * @function create
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {mines.v1.IPrizeBroadcast=} [properties] Properties to set
             * @returns {mines.v1.PrizeBroadcast} PrizeBroadcast instance
             */
            PrizeBroadcast.create = function create(properties) {
                return new PrizeBroadcast(properties);
            };

            /**
             * Encodes the specified PrizeBroadcast message. Does not implicitly {@link mines.v1.PrizeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {mines.v1.IPrizeBroadcast} message PrizeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.winerId != null && Object.hasOwnProperty.call(message, "winerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.winerId);
                if (message.winCoin != null && Object.hasOwnProperty.call(message, "winCoin"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.winCoin);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.mines.v1.MinesPlayer.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.allOpenedCells != null && Object.hasOwnProperty.call(message, "allOpenedCells"))
                    for (var keys = Object.keys(message.allOpenedCells), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                        $root.mines.v1.OpenedCellList.encode(message.allOpenedCells[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified PrizeBroadcast message, length delimited. Does not implicitly {@link mines.v1.PrizeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {mines.v1.IPrizeBroadcast} message PrizeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PrizeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.PrizeBroadcast} PrizeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrizeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.PrizeBroadcast(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 2: {
                            message.winerId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.winCoin = reader.int64();
                            break;
                        }
                    case 4: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.mines.v1.MinesPlayer.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (message.allOpenedCells === $util.emptyObject)
                                message.allOpenedCells = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int64();
                                    break;
                                case 2:
                                    value = $root.mines.v1.OpenedCellList.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.allOpenedCells[typeof key === "object" ? $util.longToHash(key) : key] = value;
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
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.PrizeBroadcast} PrizeBroadcast
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
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrizeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.winerId != null && message.hasOwnProperty("winerId"))
                    if (!$util.isInteger(message.winerId) && !(message.winerId && $util.isInteger(message.winerId.low) && $util.isInteger(message.winerId.high)))
                        return "winerId: integer|Long expected";
                if (message.winCoin != null && message.hasOwnProperty("winCoin"))
                    if (!$util.isInteger(message.winCoin) && !(message.winCoin && $util.isInteger(message.winCoin.low) && $util.isInteger(message.winCoin.high)))
                        return "winCoin: integer|Long expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.mines.v1.MinesPlayer.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.allOpenedCells != null && message.hasOwnProperty("allOpenedCells")) {
                    if (!$util.isObject(message.allOpenedCells))
                        return "allOpenedCells: object expected";
                    var key = Object.keys(message.allOpenedCells);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "allOpenedCells: integer|Long key{k:int64} expected";
                        {
                            var error = $root.mines.v1.OpenedCellList.verify(message.allOpenedCells[key[i]]);
                            if (error)
                                return "allOpenedCells." + error;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a PrizeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.PrizeBroadcast} PrizeBroadcast
             */
            PrizeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.PrizeBroadcast)
                    return object;
                var message = new $root.mines.v1.PrizeBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
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
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".mines.v1.PrizeBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".mines.v1.PrizeBroadcast.players: object expected");
                        message.players[i] = $root.mines.v1.MinesPlayer.fromObject(object.players[i]);
                    }
                }
                if (object.allOpenedCells) {
                    if (typeof object.allOpenedCells !== "object")
                        throw TypeError(".mines.v1.PrizeBroadcast.allOpenedCells: object expected");
                    message.allOpenedCells = {};
                    for (var keys = Object.keys(object.allOpenedCells), i = 0; i < keys.length; ++i) {
                        if (typeof object.allOpenedCells[keys[i]] !== "object")
                            throw TypeError(".mines.v1.PrizeBroadcast.allOpenedCells: object expected");
                        message.allOpenedCells[keys[i]] = $root.mines.v1.OpenedCellList.fromObject(object.allOpenedCells[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PrizeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {mines.v1.PrizeBroadcast} message PrizeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrizeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.objects || options.defaults)
                    object.allOpenedCells = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
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
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
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
                        object.players[j] = $root.mines.v1.MinesPlayer.toObject(message.players[j], options);
                }
                var keys2;
                if (message.allOpenedCells && (keys2 = Object.keys(message.allOpenedCells)).length) {
                    object.allOpenedCells = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.allOpenedCells[keys2[j]] = $root.mines.v1.OpenedCellList.toObject(message.allOpenedCells[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this PrizeBroadcast to JSON.
             * @function toJSON
             * @memberof mines.v1.PrizeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrizeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PrizeBroadcast
             * @function getTypeUrl
             * @memberof mines.v1.PrizeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PrizeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.PrizeBroadcast";
            };

            return PrizeBroadcast;
        })();

        v1.EndGameBroadcast = (function() {

            /**
             * Properties of an EndGameBroadcast.
             * @memberof mines.v1
             * @interface IEndGameBroadcast
             * @property {number|Long|null} [bcUid] EndGameBroadcast bcUid
             * @property {mines.v1.IGameInfo|null} [gameInfo] EndGameBroadcast gameInfo
             * @property {mines.v1.IMinesPlayer|null} [self] EndGameBroadcast self
             * @property {Array.<mines.v1.IMinesPlayer>|null} [players] EndGameBroadcast players
             */

            /**
             * Constructs a new EndGameBroadcast.
             * @memberof mines.v1
             * @classdesc Represents an EndGameBroadcast.
             * @implements IEndGameBroadcast
             * @constructor
             * @param {mines.v1.IEndGameBroadcast=} [properties] Properties to set
             */
            function EndGameBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EndGameBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof mines.v1.EndGameBroadcast
             * @instance
             */
            EndGameBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * EndGameBroadcast gameInfo.
             * @member {mines.v1.IGameInfo|null|undefined} gameInfo
             * @memberof mines.v1.EndGameBroadcast
             * @instance
             */
            EndGameBroadcast.prototype.gameInfo = null;

            /**
             * EndGameBroadcast self.
             * @member {mines.v1.IMinesPlayer|null|undefined} self
             * @memberof mines.v1.EndGameBroadcast
             * @instance
             */
            EndGameBroadcast.prototype.self = null;

            /**
             * EndGameBroadcast players.
             * @member {Array.<mines.v1.IMinesPlayer>} players
             * @memberof mines.v1.EndGameBroadcast
             * @instance
             */
            EndGameBroadcast.prototype.players = $util.emptyArray;

            /**
             * Creates a new EndGameBroadcast instance using the specified properties.
             * @function create
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {mines.v1.IEndGameBroadcast=} [properties] Properties to set
             * @returns {mines.v1.EndGameBroadcast} EndGameBroadcast instance
             */
            EndGameBroadcast.create = function create(properties) {
                return new EndGameBroadcast(properties);
            };

            /**
             * Encodes the specified EndGameBroadcast message. Does not implicitly {@link mines.v1.EndGameBroadcast.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {mines.v1.IEndGameBroadcast} message EndGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EndGameBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.mines.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.mines.v1.MinesPlayer.encode(message.self, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.mines.v1.MinesPlayer.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EndGameBroadcast message, length delimited. Does not implicitly {@link mines.v1.EndGameBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {mines.v1.IEndGameBroadcast} message EndGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EndGameBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EndGameBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.EndGameBroadcast} EndGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EndGameBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.EndGameBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 2: {
                            message.gameInfo = $root.mines.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.self = $root.mines.v1.MinesPlayer.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.mines.v1.MinesPlayer.decode(reader, reader.uint32()));
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
             * Decodes an EndGameBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.EndGameBroadcast} EndGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EndGameBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EndGameBroadcast message.
             * @function verify
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EndGameBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.mines.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.mines.v1.MinesPlayer.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.mines.v1.MinesPlayer.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EndGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.EndGameBroadcast} EndGameBroadcast
             */
            EndGameBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.EndGameBroadcast)
                    return object;
                var message = new $root.mines.v1.EndGameBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".mines.v1.EndGameBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.mines.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".mines.v1.EndGameBroadcast.self: object expected");
                    message.self = $root.mines.v1.MinesPlayer.fromObject(object.self);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".mines.v1.EndGameBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".mines.v1.EndGameBroadcast.players: object expected");
                        message.players[i] = $root.mines.v1.MinesPlayer.fromObject(object.players[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EndGameBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {mines.v1.EndGameBroadcast} message EndGameBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EndGameBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    object.gameInfo = null;
                    object.self = null;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.mines.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.mines.v1.MinesPlayer.toObject(message.self, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.mines.v1.MinesPlayer.toObject(message.players[j], options);
                }
                return object;
            };

            /**
             * Converts this EndGameBroadcast to JSON.
             * @function toJSON
             * @memberof mines.v1.EndGameBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EndGameBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EndGameBroadcast
             * @function getTypeUrl
             * @memberof mines.v1.EndGameBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EndGameBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.EndGameBroadcast";
            };

            return EndGameBroadcast;
        })();

        v1.ChangeViewReq = (function() {

            /**
             * Properties of a ChangeViewReq.
             * @memberof mines.v1
             * @interface IChangeViewReq
             */

            /**
             * Constructs a new ChangeViewReq.
             * @memberof mines.v1
             * @classdesc Represents a ChangeViewReq.
             * @implements IChangeViewReq
             * @constructor
             * @param {mines.v1.IChangeViewReq=} [properties] Properties to set
             */
            function ChangeViewReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ChangeViewReq instance using the specified properties.
             * @function create
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {mines.v1.IChangeViewReq=} [properties] Properties to set
             * @returns {mines.v1.ChangeViewReq} ChangeViewReq instance
             */
            ChangeViewReq.create = function create(properties) {
                return new ChangeViewReq(properties);
            };

            /**
             * Encodes the specified ChangeViewReq message. Does not implicitly {@link mines.v1.ChangeViewReq.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {mines.v1.IChangeViewReq} message ChangeViewReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeViewReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ChangeViewReq message, length delimited. Does not implicitly {@link mines.v1.ChangeViewReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {mines.v1.IChangeViewReq} message ChangeViewReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeViewReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangeViewReq message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.ChangeViewReq} ChangeViewReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeViewReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.ChangeViewReq();
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
             * Decodes a ChangeViewReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.ChangeViewReq} ChangeViewReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeViewReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangeViewReq message.
             * @function verify
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeViewReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ChangeViewReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.ChangeViewReq} ChangeViewReq
             */
            ChangeViewReq.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.ChangeViewReq)
                    return object;
                return new $root.mines.v1.ChangeViewReq();
            };

            /**
             * Creates a plain object from a ChangeViewReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {mines.v1.ChangeViewReq} message ChangeViewReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeViewReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ChangeViewReq to JSON.
             * @function toJSON
             * @memberof mines.v1.ChangeViewReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeViewReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChangeViewReq
             * @function getTypeUrl
             * @memberof mines.v1.ChangeViewReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChangeViewReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.ChangeViewReq";
            };

            return ChangeViewReq;
        })();

        v1.ChangeViewRes = (function() {

            /**
             * Properties of a ChangeViewRes.
             * @memberof mines.v1
             * @interface IChangeViewRes
             * @property {mines.v1.IGameInfo|null} [gameInfo] ChangeViewRes gameInfo
             */

            /**
             * Constructs a new ChangeViewRes.
             * @memberof mines.v1
             * @classdesc Represents a ChangeViewRes.
             * @implements IChangeViewRes
             * @constructor
             * @param {mines.v1.IChangeViewRes=} [properties] Properties to set
             */
            function ChangeViewRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChangeViewRes gameInfo.
             * @member {mines.v1.IGameInfo|null|undefined} gameInfo
             * @memberof mines.v1.ChangeViewRes
             * @instance
             */
            ChangeViewRes.prototype.gameInfo = null;

            /**
             * Creates a new ChangeViewRes instance using the specified properties.
             * @function create
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {mines.v1.IChangeViewRes=} [properties] Properties to set
             * @returns {mines.v1.ChangeViewRes} ChangeViewRes instance
             */
            ChangeViewRes.create = function create(properties) {
                return new ChangeViewRes(properties);
            };

            /**
             * Encodes the specified ChangeViewRes message. Does not implicitly {@link mines.v1.ChangeViewRes.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {mines.v1.IChangeViewRes} message ChangeViewRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeViewRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.mines.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ChangeViewRes message, length delimited. Does not implicitly {@link mines.v1.ChangeViewRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {mines.v1.IChangeViewRes} message ChangeViewRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeViewRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangeViewRes message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.ChangeViewRes} ChangeViewRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeViewRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.ChangeViewRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.gameInfo = $root.mines.v1.GameInfo.decode(reader, reader.uint32());
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
             * Decodes a ChangeViewRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.ChangeViewRes} ChangeViewRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeViewRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangeViewRes message.
             * @function verify
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeViewRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.mines.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                return null;
            };

            /**
             * Creates a ChangeViewRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.ChangeViewRes} ChangeViewRes
             */
            ChangeViewRes.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.ChangeViewRes)
                    return object;
                var message = new $root.mines.v1.ChangeViewRes();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".mines.v1.ChangeViewRes.gameInfo: object expected");
                    message.gameInfo = $root.mines.v1.GameInfo.fromObject(object.gameInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a ChangeViewRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {mines.v1.ChangeViewRes} message ChangeViewRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeViewRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.gameInfo = null;
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.mines.v1.GameInfo.toObject(message.gameInfo, options);
                return object;
            };

            /**
             * Converts this ChangeViewRes to JSON.
             * @function toJSON
             * @memberof mines.v1.ChangeViewRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeViewRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChangeViewRes
             * @function getTypeUrl
             * @memberof mines.v1.ChangeViewRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChangeViewRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.ChangeViewRes";
            };

            return ChangeViewRes;
        })();

        v1.StartGameReq = (function() {

            /**
             * Properties of a StartGameReq.
             * @memberof mines.v1
             * @interface IStartGameReq
             */

            /**
             * Constructs a new StartGameReq.
             * @memberof mines.v1
             * @classdesc Represents a StartGameReq.
             * @implements IStartGameReq
             * @constructor
             * @param {mines.v1.IStartGameReq=} [properties] Properties to set
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
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {mines.v1.IStartGameReq=} [properties] Properties to set
             * @returns {mines.v1.StartGameReq} StartGameReq instance
             */
            StartGameReq.create = function create(properties) {
                return new StartGameReq(properties);
            };

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link mines.v1.StartGameReq.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {mines.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link mines.v1.StartGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {mines.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.StartGameReq} StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.StartGameReq();
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
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.StartGameReq} StartGameReq
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
             * @memberof mines.v1.StartGameReq
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
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.StartGameReq} StartGameReq
             */
            StartGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.StartGameReq)
                    return object;
                return new $root.mines.v1.StartGameReq();
            };

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {mines.v1.StartGameReq} message StartGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameReq to JSON.
             * @function toJSON
             * @memberof mines.v1.StartGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameReq
             * @function getTypeUrl
             * @memberof mines.v1.StartGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.StartGameReq";
            };

            return StartGameReq;
        })();

        v1.StartGameRes = (function() {

            /**
             * Properties of a StartGameRes.
             * @memberof mines.v1
             * @interface IStartGameRes
             */

            /**
             * Constructs a new StartGameRes.
             * @memberof mines.v1
             * @classdesc Represents a StartGameRes.
             * @implements IStartGameRes
             * @constructor
             * @param {mines.v1.IStartGameRes=} [properties] Properties to set
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
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {mines.v1.IStartGameRes=} [properties] Properties to set
             * @returns {mines.v1.StartGameRes} StartGameRes instance
             */
            StartGameRes.create = function create(properties) {
                return new StartGameRes(properties);
            };

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link mines.v1.StartGameRes.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {mines.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link mines.v1.StartGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {mines.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.StartGameRes} StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.StartGameRes();
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
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.StartGameRes} StartGameRes
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
             * @memberof mines.v1.StartGameRes
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
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.StartGameRes} StartGameRes
             */
            StartGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.StartGameRes)
                    return object;
                return new $root.mines.v1.StartGameRes();
            };

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {mines.v1.StartGameRes} message StartGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameRes to JSON.
             * @function toJSON
             * @memberof mines.v1.StartGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameRes
             * @function getTypeUrl
             * @memberof mines.v1.StartGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.StartGameRes";
            };

            return StartGameRes;
        })();

        v1.StartGameBroadcast = (function() {

            /**
             * Properties of a StartGameBroadcast.
             * @memberof mines.v1
             * @interface IStartGameBroadcast
             * @property {number|Long|null} [bcUid] StartGameBroadcast bcUid
             * @property {mines.v1.IGameInfo|null} [gameInfo] StartGameBroadcast gameInfo
             * @property {Array.<mines.v1.IMinesPlayer>|null} [players] StartGameBroadcast players
             */

            /**
             * Constructs a new StartGameBroadcast.
             * @memberof mines.v1
             * @classdesc Represents a StartGameBroadcast.
             * @implements IStartGameBroadcast
             * @constructor
             * @param {mines.v1.IStartGameBroadcast=} [properties] Properties to set
             */
            function StartGameBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartGameBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof mines.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * StartGameBroadcast gameInfo.
             * @member {mines.v1.IGameInfo|null|undefined} gameInfo
             * @memberof mines.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.gameInfo = null;

            /**
             * StartGameBroadcast players.
             * @member {Array.<mines.v1.IMinesPlayer>} players
             * @memberof mines.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.players = $util.emptyArray;

            /**
             * Creates a new StartGameBroadcast instance using the specified properties.
             * @function create
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {mines.v1.IStartGameBroadcast=} [properties] Properties to set
             * @returns {mines.v1.StartGameBroadcast} StartGameBroadcast instance
             */
            StartGameBroadcast.create = function create(properties) {
                return new StartGameBroadcast(properties);
            };

            /**
             * Encodes the specified StartGameBroadcast message. Does not implicitly {@link mines.v1.StartGameBroadcast.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {mines.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.mines.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.mines.v1.MinesPlayer.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StartGameBroadcast message, length delimited. Does not implicitly {@link mines.v1.StartGameBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {mines.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.StartGameBroadcast} StartGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.StartGameBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 2: {
                            message.gameInfo = $root.mines.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.mines.v1.MinesPlayer.decode(reader, reader.uint32()));
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
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.StartGameBroadcast} StartGameBroadcast
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
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartGameBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.mines.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.mines.v1.MinesPlayer.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a StartGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.StartGameBroadcast} StartGameBroadcast
             */
            StartGameBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.StartGameBroadcast)
                    return object;
                var message = new $root.mines.v1.StartGameBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".mines.v1.StartGameBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.mines.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".mines.v1.StartGameBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".mines.v1.StartGameBroadcast.players: object expected");
                        message.players[i] = $root.mines.v1.MinesPlayer.fromObject(object.players[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a StartGameBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {mines.v1.StartGameBroadcast} message StartGameBroadcast
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    object.gameInfo = null;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.mines.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.mines.v1.MinesPlayer.toObject(message.players[j], options);
                }
                return object;
            };

            /**
             * Converts this StartGameBroadcast to JSON.
             * @function toJSON
             * @memberof mines.v1.StartGameBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameBroadcast
             * @function getTypeUrl
             * @memberof mines.v1.StartGameBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.StartGameBroadcast";
            };

            return StartGameBroadcast;
        })();

        v1.EndGameReq = (function() {

            /**
             * Properties of an EndGameReq.
             * @memberof mines.v1
             * @interface IEndGameReq
             */

            /**
             * Constructs a new EndGameReq.
             * @memberof mines.v1
             * @classdesc Represents an EndGameReq.
             * @implements IEndGameReq
             * @constructor
             * @param {mines.v1.IEndGameReq=} [properties] Properties to set
             */
            function EndGameReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new EndGameReq instance using the specified properties.
             * @function create
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {mines.v1.IEndGameReq=} [properties] Properties to set
             * @returns {mines.v1.EndGameReq} EndGameReq instance
             */
            EndGameReq.create = function create(properties) {
                return new EndGameReq(properties);
            };

            /**
             * Encodes the specified EndGameReq message. Does not implicitly {@link mines.v1.EndGameReq.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {mines.v1.IEndGameReq} message EndGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EndGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified EndGameReq message, length delimited. Does not implicitly {@link mines.v1.EndGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {mines.v1.IEndGameReq} message EndGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EndGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EndGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.EndGameReq} EndGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EndGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.EndGameReq();
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
             * Decodes an EndGameReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.EndGameReq} EndGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EndGameReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EndGameReq message.
             * @function verify
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EndGameReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an EndGameReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.EndGameReq} EndGameReq
             */
            EndGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.EndGameReq)
                    return object;
                return new $root.mines.v1.EndGameReq();
            };

            /**
             * Creates a plain object from an EndGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {mines.v1.EndGameReq} message EndGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EndGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this EndGameReq to JSON.
             * @function toJSON
             * @memberof mines.v1.EndGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EndGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EndGameReq
             * @function getTypeUrl
             * @memberof mines.v1.EndGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EndGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.EndGameReq";
            };

            return EndGameReq;
        })();

        v1.EndGameRes = (function() {

            /**
             * Properties of an EndGameRes.
             * @memberof mines.v1
             * @interface IEndGameRes
             */

            /**
             * Constructs a new EndGameRes.
             * @memberof mines.v1
             * @classdesc Represents an EndGameRes.
             * @implements IEndGameRes
             * @constructor
             * @param {mines.v1.IEndGameRes=} [properties] Properties to set
             */
            function EndGameRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new EndGameRes instance using the specified properties.
             * @function create
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {mines.v1.IEndGameRes=} [properties] Properties to set
             * @returns {mines.v1.EndGameRes} EndGameRes instance
             */
            EndGameRes.create = function create(properties) {
                return new EndGameRes(properties);
            };

            /**
             * Encodes the specified EndGameRes message. Does not implicitly {@link mines.v1.EndGameRes.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {mines.v1.IEndGameRes} message EndGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EndGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified EndGameRes message, length delimited. Does not implicitly {@link mines.v1.EndGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {mines.v1.IEndGameRes} message EndGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EndGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EndGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.EndGameRes} EndGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EndGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.EndGameRes();
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
             * Decodes an EndGameRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.EndGameRes} EndGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EndGameRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EndGameRes message.
             * @function verify
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EndGameRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an EndGameRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.EndGameRes} EndGameRes
             */
            EndGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.EndGameRes)
                    return object;
                return new $root.mines.v1.EndGameRes();
            };

            /**
             * Creates a plain object from an EndGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {mines.v1.EndGameRes} message EndGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EndGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this EndGameRes to JSON.
             * @function toJSON
             * @memberof mines.v1.EndGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EndGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EndGameRes
             * @function getTypeUrl
             * @memberof mines.v1.EndGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EndGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.EndGameRes";
            };

            return EndGameRes;
        })();

        /**
         * MinesGameResult enum.
         * @name mines.v1.MinesGameResult
         * @enum {number}
         * @property {number} MINES_RESULT_UNKNOWN=0 MINES_RESULT_UNKNOWN value
         * @property {number} MINES_RESULT_WIN=1 MINES_RESULT_WIN value
         * @property {number} MINES_RESULT_BOMBED=2 MINES_RESULT_BOMBED value
         * @property {number} MINES_RESULT_CASH_OUT=3 MINES_RESULT_CASH_OUT value
         * @property {number} MINES_RESULT_OPPONENT_WIN=4 MINES_RESULT_OPPONENT_WIN value
         */
        v1.MinesGameResult = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MINES_RESULT_UNKNOWN"] = 0;
            values[valuesById[1] = "MINES_RESULT_WIN"] = 1;
            values[valuesById[2] = "MINES_RESULT_BOMBED"] = 2;
            values[valuesById[3] = "MINES_RESULT_CASH_OUT"] = 3;
            values[valuesById[4] = "MINES_RESULT_OPPONENT_WIN"] = 4;
            return values;
        })();

        v1.GetPlayerHistoryReq = (function() {

            /**
             * Properties of a GetPlayerHistoryReq.
             * @memberof mines.v1
             * @interface IGetPlayerHistoryReq
             * @property {number|null} [page] GetPlayerHistoryReq page
             * @property {number|Long|null} [startTime] GetPlayerHistoryReq startTime
             * @property {number|Long|null} [endTime] GetPlayerHistoryReq endTime
             */

            /**
             * Constructs a new GetPlayerHistoryReq.
             * @memberof mines.v1
             * @classdesc Represents a GetPlayerHistoryReq.
             * @implements IGetPlayerHistoryReq
             * @constructor
             * @param {mines.v1.IGetPlayerHistoryReq=} [properties] Properties to set
             */
            function GetPlayerHistoryReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetPlayerHistoryReq page.
             * @member {number} page
             * @memberof mines.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.page = 0;

            /**
             * GetPlayerHistoryReq startTime.
             * @member {number|Long} startTime
             * @memberof mines.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetPlayerHistoryReq endTime.
             * @member {number|Long} endTime
             * @memberof mines.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GetPlayerHistoryReq instance using the specified properties.
             * @function create
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {mines.v1.IGetPlayerHistoryReq=} [properties] Properties to set
             * @returns {mines.v1.GetPlayerHistoryReq} GetPlayerHistoryReq instance
             */
            GetPlayerHistoryReq.create = function create(properties) {
                return new GetPlayerHistoryReq(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryReq message. Does not implicitly {@link mines.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {mines.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
                if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.startTime);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
                return writer;
            };

            /**
             * Encodes the specified GetPlayerHistoryReq message, length delimited. Does not implicitly {@link mines.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {mines.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.GetPlayerHistoryReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.page = reader.int32();
                            break;
                        }
                    case 2: {
                            message.startTime = reader.int64();
                            break;
                        }
                    case 3: {
                            message.endTime = reader.int64();
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
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetPlayerHistoryReq message.
             * @function verify
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetPlayerHistoryReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.page != null && message.hasOwnProperty("page"))
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                        return "startTime: integer|Long expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a GetPlayerHistoryReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             */
            GetPlayerHistoryReq.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.GetPlayerHistoryReq)
                    return object;
                var message = new $root.mines.v1.GetPlayerHistoryReq();
                if (object.page != null)
                    message.page = object.page | 0;
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
                return message;
            };

            /**
             * Creates a plain object from a GetPlayerHistoryReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {mines.v1.GetPlayerHistoryReq} message GetPlayerHistoryReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetPlayerHistoryReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.page = 0;
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
                }
                if (message.page != null && message.hasOwnProperty("page"))
                    object.page = message.page;
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
                return object;
            };

            /**
             * Converts this GetPlayerHistoryReq to JSON.
             * @function toJSON
             * @memberof mines.v1.GetPlayerHistoryReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryReq
             * @function getTypeUrl
             * @memberof mines.v1.GetPlayerHistoryReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.GetPlayerHistoryReq";
            };

            return GetPlayerHistoryReq;
        })();

        v1.GetPlayerHistoryRes = (function() {

            /**
             * Properties of a GetPlayerHistoryRes.
             * @memberof mines.v1
             * @interface IGetPlayerHistoryRes
             * @property {Array.<mines.v1.IMinesHistoryRecord>|null} [records] GetPlayerHistoryRes records
             */

            /**
             * Constructs a new GetPlayerHistoryRes.
             * @memberof mines.v1
             * @classdesc Represents a GetPlayerHistoryRes.
             * @implements IGetPlayerHistoryRes
             * @constructor
             * @param {mines.v1.IGetPlayerHistoryRes=} [properties] Properties to set
             */
            function GetPlayerHistoryRes(properties) {
                this.records = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetPlayerHistoryRes records.
             * @member {Array.<mines.v1.IMinesHistoryRecord>} records
             * @memberof mines.v1.GetPlayerHistoryRes
             * @instance
             */
            GetPlayerHistoryRes.prototype.records = $util.emptyArray;

            /**
             * Creates a new GetPlayerHistoryRes instance using the specified properties.
             * @function create
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {mines.v1.IGetPlayerHistoryRes=} [properties] Properties to set
             * @returns {mines.v1.GetPlayerHistoryRes} GetPlayerHistoryRes instance
             */
            GetPlayerHistoryRes.create = function create(properties) {
                return new GetPlayerHistoryRes(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message. Does not implicitly {@link mines.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {mines.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.records != null && message.records.length)
                    for (var i = 0; i < message.records.length; ++i)
                        $root.mines.v1.MinesHistoryRecord.encode(message.records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message, length delimited. Does not implicitly {@link mines.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {mines.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.GetPlayerHistoryRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push($root.mines.v1.MinesHistoryRecord.decode(reader, reader.uint32()));
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
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetPlayerHistoryRes message.
             * @function verify
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetPlayerHistoryRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.records != null && message.hasOwnProperty("records")) {
                    if (!Array.isArray(message.records))
                        return "records: array expected";
                    for (var i = 0; i < message.records.length; ++i) {
                        var error = $root.mines.v1.MinesHistoryRecord.verify(message.records[i]);
                        if (error)
                            return "records." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetPlayerHistoryRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             */
            GetPlayerHistoryRes.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.GetPlayerHistoryRes)
                    return object;
                var message = new $root.mines.v1.GetPlayerHistoryRes();
                if (object.records) {
                    if (!Array.isArray(object.records))
                        throw TypeError(".mines.v1.GetPlayerHistoryRes.records: array expected");
                    message.records = [];
                    for (var i = 0; i < object.records.length; ++i) {
                        if (typeof object.records[i] !== "object")
                            throw TypeError(".mines.v1.GetPlayerHistoryRes.records: object expected");
                        message.records[i] = $root.mines.v1.MinesHistoryRecord.fromObject(object.records[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetPlayerHistoryRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {mines.v1.GetPlayerHistoryRes} message GetPlayerHistoryRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetPlayerHistoryRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.records = [];
                if (message.records && message.records.length) {
                    object.records = [];
                    for (var j = 0; j < message.records.length; ++j)
                        object.records[j] = $root.mines.v1.MinesHistoryRecord.toObject(message.records[j], options);
                }
                return object;
            };

            /**
             * Converts this GetPlayerHistoryRes to JSON.
             * @function toJSON
             * @memberof mines.v1.GetPlayerHistoryRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryRes
             * @function getTypeUrl
             * @memberof mines.v1.GetPlayerHistoryRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.GetPlayerHistoryRes";
            };

            return GetPlayerHistoryRes;
        })();

        v1.MinesHistoryRecord = (function() {

            /**
             * Properties of a MinesHistoryRecord.
             * @memberof mines.v1
             * @interface IMinesHistoryRecord
             * @property {string|null} [gameCode] MinesHistoryRecord gameCode
             * @property {number|Long|null} [endTime] MinesHistoryRecord endTime
             * @property {number|Long|null} [cost] MinesHistoryRecord cost
             * @property {number|Long|null} [reward] MinesHistoryRecord reward
             * @property {mines.v1.MinesGameResult|null} [result] MinesHistoryRecord result
             * @property {number|null} [finalMultiplier] MinesHistoryRecord finalMultiplier
             * @property {Array.<mines.v1.IMinesHistoryCell>|null} [openedCells] MinesHistoryRecord openedCells
             */

            /**
             * Constructs a new MinesHistoryRecord.
             * @memberof mines.v1
             * @classdesc Represents a MinesHistoryRecord.
             * @implements IMinesHistoryRecord
             * @constructor
             * @param {mines.v1.IMinesHistoryRecord=} [properties] Properties to set
             */
            function MinesHistoryRecord(properties) {
                this.openedCells = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MinesHistoryRecord gameCode.
             * @member {string} gameCode
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             */
            MinesHistoryRecord.prototype.gameCode = "";

            /**
             * MinesHistoryRecord endTime.
             * @member {number|Long} endTime
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             */
            MinesHistoryRecord.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MinesHistoryRecord cost.
             * @member {number|Long} cost
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             */
            MinesHistoryRecord.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MinesHistoryRecord reward.
             * @member {number|Long} reward
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             */
            MinesHistoryRecord.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MinesHistoryRecord result.
             * @member {mines.v1.MinesGameResult} result
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             */
            MinesHistoryRecord.prototype.result = 0;

            /**
             * MinesHistoryRecord finalMultiplier.
             * @member {number} finalMultiplier
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             */
            MinesHistoryRecord.prototype.finalMultiplier = 0;

            /**
             * MinesHistoryRecord openedCells.
             * @member {Array.<mines.v1.IMinesHistoryCell>} openedCells
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             */
            MinesHistoryRecord.prototype.openedCells = $util.emptyArray;

            /**
             * Creates a new MinesHistoryRecord instance using the specified properties.
             * @function create
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {mines.v1.IMinesHistoryRecord=} [properties] Properties to set
             * @returns {mines.v1.MinesHistoryRecord} MinesHistoryRecord instance
             */
            MinesHistoryRecord.create = function create(properties) {
                return new MinesHistoryRecord(properties);
            };

            /**
             * Encodes the specified MinesHistoryRecord message. Does not implicitly {@link mines.v1.MinesHistoryRecord.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {mines.v1.IMinesHistoryRecord} message MinesHistoryRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesHistoryRecord.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameCode != null && Object.hasOwnProperty.call(message, "gameCode"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameCode);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTime);
                if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.cost);
                if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.reward);
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.result);
                if (message.finalMultiplier != null && Object.hasOwnProperty.call(message, "finalMultiplier"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.finalMultiplier);
                if (message.openedCells != null && message.openedCells.length)
                    for (var i = 0; i < message.openedCells.length; ++i)
                        $root.mines.v1.MinesHistoryCell.encode(message.openedCells[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MinesHistoryRecord message, length delimited. Does not implicitly {@link mines.v1.MinesHistoryRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {mines.v1.IMinesHistoryRecord} message MinesHistoryRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesHistoryRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MinesHistoryRecord message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.MinesHistoryRecord} MinesHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesHistoryRecord.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.MinesHistoryRecord();
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
                            message.cost = reader.int64();
                            break;
                        }
                    case 4: {
                            message.reward = reader.int64();
                            break;
                        }
                    case 5: {
                            message.result = reader.int32();
                            break;
                        }
                    case 6: {
                            message.finalMultiplier = reader.int32();
                            break;
                        }
                    case 7: {
                            if (!(message.openedCells && message.openedCells.length))
                                message.openedCells = [];
                            message.openedCells.push($root.mines.v1.MinesHistoryCell.decode(reader, reader.uint32()));
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
             * Decodes a MinesHistoryRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.MinesHistoryRecord} MinesHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesHistoryRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MinesHistoryRecord message.
             * @function verify
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MinesHistoryRecord.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    if (!$util.isString(message.gameCode))
                        return "gameCode: string expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.cost != null && message.hasOwnProperty("cost"))
                    if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                        return "cost: integer|Long expected";
                if (message.reward != null && message.hasOwnProperty("reward"))
                    if (!$util.isInteger(message.reward) && !(message.reward && $util.isInteger(message.reward.low) && $util.isInteger(message.reward.high)))
                        return "reward: integer|Long expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    switch (message.result) {
                    default:
                        return "result: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.finalMultiplier != null && message.hasOwnProperty("finalMultiplier"))
                    if (!$util.isInteger(message.finalMultiplier))
                        return "finalMultiplier: integer expected";
                if (message.openedCells != null && message.hasOwnProperty("openedCells")) {
                    if (!Array.isArray(message.openedCells))
                        return "openedCells: array expected";
                    for (var i = 0; i < message.openedCells.length; ++i) {
                        var error = $root.mines.v1.MinesHistoryCell.verify(message.openedCells[i]);
                        if (error)
                            return "openedCells." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MinesHistoryRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.MinesHistoryRecord} MinesHistoryRecord
             */
            MinesHistoryRecord.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.MinesHistoryRecord)
                    return object;
                var message = new $root.mines.v1.MinesHistoryRecord();
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
                switch (object.result) {
                default:
                    if (typeof object.result === "number") {
                        message.result = object.result;
                        break;
                    }
                    break;
                case "MINES_RESULT_UNKNOWN":
                case 0:
                    message.result = 0;
                    break;
                case "MINES_RESULT_WIN":
                case 1:
                    message.result = 1;
                    break;
                case "MINES_RESULT_BOMBED":
                case 2:
                    message.result = 2;
                    break;
                case "MINES_RESULT_CASH_OUT":
                case 3:
                    message.result = 3;
                    break;
                case "MINES_RESULT_OPPONENT_WIN":
                case 4:
                    message.result = 4;
                    break;
                }
                if (object.finalMultiplier != null)
                    message.finalMultiplier = object.finalMultiplier | 0;
                if (object.openedCells) {
                    if (!Array.isArray(object.openedCells))
                        throw TypeError(".mines.v1.MinesHistoryRecord.openedCells: array expected");
                    message.openedCells = [];
                    for (var i = 0; i < object.openedCells.length; ++i) {
                        if (typeof object.openedCells[i] !== "object")
                            throw TypeError(".mines.v1.MinesHistoryRecord.openedCells: object expected");
                        message.openedCells[i] = $root.mines.v1.MinesHistoryCell.fromObject(object.openedCells[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MinesHistoryRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {mines.v1.MinesHistoryRecord} message MinesHistoryRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MinesHistoryRecord.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.openedCells = [];
                if (options.defaults) {
                    object.gameCode = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endTime = options.longs === String ? "0" : 0;
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
                    object.result = options.enums === String ? "MINES_RESULT_UNKNOWN" : 0;
                    object.finalMultiplier = 0;
                }
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    object.gameCode = message.gameCode;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (typeof message.endTime === "number")
                        object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                    else
                        object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
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
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.mines.v1.MinesGameResult[message.result] === undefined ? message.result : $root.mines.v1.MinesGameResult[message.result] : message.result;
                if (message.finalMultiplier != null && message.hasOwnProperty("finalMultiplier"))
                    object.finalMultiplier = message.finalMultiplier;
                if (message.openedCells && message.openedCells.length) {
                    object.openedCells = [];
                    for (var j = 0; j < message.openedCells.length; ++j)
                        object.openedCells[j] = $root.mines.v1.MinesHistoryCell.toObject(message.openedCells[j], options);
                }
                return object;
            };

            /**
             * Converts this MinesHistoryRecord to JSON.
             * @function toJSON
             * @memberof mines.v1.MinesHistoryRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MinesHistoryRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MinesHistoryRecord
             * @function getTypeUrl
             * @memberof mines.v1.MinesHistoryRecord
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MinesHistoryRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.MinesHistoryRecord";
            };

            return MinesHistoryRecord;
        })();

        v1.MinesHistoryCell = (function() {

            /**
             * Properties of a MinesHistoryCell.
             * @memberof mines.v1
             * @interface IMinesHistoryCell
             * @property {number|null} [cellId] MinesHistoryCell cellId
             * @property {mines.v1.CellType|null} [cellType] MinesHistoryCell cellType
             * @property {number|null} [flipOrder] MinesHistoryCell flipOrder
             * @property {number|null} [multiplier] MinesHistoryCell multiplier
             */

            /**
             * Constructs a new MinesHistoryCell.
             * @memberof mines.v1
             * @classdesc Represents a MinesHistoryCell.
             * @implements IMinesHistoryCell
             * @constructor
             * @param {mines.v1.IMinesHistoryCell=} [properties] Properties to set
             */
            function MinesHistoryCell(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MinesHistoryCell cellId.
             * @member {number} cellId
             * @memberof mines.v1.MinesHistoryCell
             * @instance
             */
            MinesHistoryCell.prototype.cellId = 0;

            /**
             * MinesHistoryCell cellType.
             * @member {mines.v1.CellType} cellType
             * @memberof mines.v1.MinesHistoryCell
             * @instance
             */
            MinesHistoryCell.prototype.cellType = 0;

            /**
             * MinesHistoryCell flipOrder.
             * @member {number} flipOrder
             * @memberof mines.v1.MinesHistoryCell
             * @instance
             */
            MinesHistoryCell.prototype.flipOrder = 0;

            /**
             * MinesHistoryCell multiplier.
             * @member {number} multiplier
             * @memberof mines.v1.MinesHistoryCell
             * @instance
             */
            MinesHistoryCell.prototype.multiplier = 0;

            /**
             * Creates a new MinesHistoryCell instance using the specified properties.
             * @function create
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {mines.v1.IMinesHistoryCell=} [properties] Properties to set
             * @returns {mines.v1.MinesHistoryCell} MinesHistoryCell instance
             */
            MinesHistoryCell.create = function create(properties) {
                return new MinesHistoryCell(properties);
            };

            /**
             * Encodes the specified MinesHistoryCell message. Does not implicitly {@link mines.v1.MinesHistoryCell.verify|verify} messages.
             * @function encode
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {mines.v1.IMinesHistoryCell} message MinesHistoryCell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesHistoryCell.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cellId != null && Object.hasOwnProperty.call(message, "cellId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cellId);
                if (message.cellType != null && Object.hasOwnProperty.call(message, "cellType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cellType);
                if (message.flipOrder != null && Object.hasOwnProperty.call(message, "flipOrder"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.flipOrder);
                if (message.multiplier != null && Object.hasOwnProperty.call(message, "multiplier"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.multiplier);
                return writer;
            };

            /**
             * Encodes the specified MinesHistoryCell message, length delimited. Does not implicitly {@link mines.v1.MinesHistoryCell.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {mines.v1.IMinesHistoryCell} message MinesHistoryCell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinesHistoryCell.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MinesHistoryCell message from the specified reader or buffer.
             * @function decode
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mines.v1.MinesHistoryCell} MinesHistoryCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesHistoryCell.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mines.v1.MinesHistoryCell();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cellId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.cellType = reader.int32();
                            break;
                        }
                    case 3: {
                            message.flipOrder = reader.int32();
                            break;
                        }
                    case 4: {
                            message.multiplier = reader.int32();
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
             * Decodes a MinesHistoryCell message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mines.v1.MinesHistoryCell} MinesHistoryCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinesHistoryCell.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MinesHistoryCell message.
             * @function verify
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MinesHistoryCell.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cellId != null && message.hasOwnProperty("cellId"))
                    if (!$util.isInteger(message.cellId))
                        return "cellId: integer expected";
                if (message.cellType != null && message.hasOwnProperty("cellType"))
                    switch (message.cellType) {
                    default:
                        return "cellType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.flipOrder != null && message.hasOwnProperty("flipOrder"))
                    if (!$util.isInteger(message.flipOrder))
                        return "flipOrder: integer expected";
                if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                    if (!$util.isInteger(message.multiplier))
                        return "multiplier: integer expected";
                return null;
            };

            /**
             * Creates a MinesHistoryCell message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mines.v1.MinesHistoryCell} MinesHistoryCell
             */
            MinesHistoryCell.fromObject = function fromObject(object) {
                if (object instanceof $root.mines.v1.MinesHistoryCell)
                    return object;
                var message = new $root.mines.v1.MinesHistoryCell();
                if (object.cellId != null)
                    message.cellId = object.cellId | 0;
                switch (object.cellType) {
                default:
                    if (typeof object.cellType === "number") {
                        message.cellType = object.cellType;
                        break;
                    }
                    break;
                case "CELL_TYPE_UNOPENED":
                case 0:
                    message.cellType = 0;
                    break;
                case "CELL_TYPE_COIN":
                case 1:
                    message.cellType = 1;
                    break;
                case "CELL_TYPE_HURT":
                case 2:
                    message.cellType = 2;
                    break;
                case "CELL_TYPE_SHIELD":
                case 3:
                    message.cellType = 3;
                    break;
                case "CELL_TYPE_ATTACK":
                case 4:
                    message.cellType = 4;
                    break;
                case "CELL_TYPE_RADAR":
                case 5:
                    message.cellType = 5;
                    break;
                case "CELL_TYPE_RADAR_MARK":
                case 6:
                    message.cellType = 6;
                    break;
                }
                if (object.flipOrder != null)
                    message.flipOrder = object.flipOrder | 0;
                if (object.multiplier != null)
                    message.multiplier = object.multiplier | 0;
                return message;
            };

            /**
             * Creates a plain object from a MinesHistoryCell message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {mines.v1.MinesHistoryCell} message MinesHistoryCell
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MinesHistoryCell.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.cellId = 0;
                    object.cellType = options.enums === String ? "CELL_TYPE_UNOPENED" : 0;
                    object.flipOrder = 0;
                    object.multiplier = 0;
                }
                if (message.cellId != null && message.hasOwnProperty("cellId"))
                    object.cellId = message.cellId;
                if (message.cellType != null && message.hasOwnProperty("cellType"))
                    object.cellType = options.enums === String ? $root.mines.v1.CellType[message.cellType] === undefined ? message.cellType : $root.mines.v1.CellType[message.cellType] : message.cellType;
                if (message.flipOrder != null && message.hasOwnProperty("flipOrder"))
                    object.flipOrder = message.flipOrder;
                if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                    object.multiplier = message.multiplier;
                return object;
            };

            /**
             * Converts this MinesHistoryCell to JSON.
             * @function toJSON
             * @memberof mines.v1.MinesHistoryCell
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MinesHistoryCell.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MinesHistoryCell
             * @function getTypeUrl
             * @memberof mines.v1.MinesHistoryCell
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MinesHistoryCell.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mines.v1.MinesHistoryCell";
            };

            return MinesHistoryCell;
        })();

        return v1;
    })();

    return mines;
})();

module.exports = $root;
