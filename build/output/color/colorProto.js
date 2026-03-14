/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.color = (function() {

    /**
     * Namespace color.
     * @exports color
     * @namespace
     */
    var color = {};

    color.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof color
         * @namespace
         */
        var v1 = {};

        v1.ColorGameConfig = (function() {

            /**
             * Properties of a ColorGameConfig.
             * @memberof color.v1
             * @interface IColorGameConfig
             * @property {Array.<number>|null} [betList] ColorGameConfig betList
             */

            /**
             * Constructs a new ColorGameConfig.
             * @memberof color.v1
             * @classdesc Represents a ColorGameConfig.
             * @implements IColorGameConfig
             * @constructor
             * @param {color.v1.IColorGameConfig=} [properties] Properties to set
             */
            function ColorGameConfig(properties) {
                this.betList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ColorGameConfig betList.
             * @member {Array.<number>} betList
             * @memberof color.v1.ColorGameConfig
             * @instance
             */
            ColorGameConfig.prototype.betList = $util.emptyArray;

            /**
             * Creates a new ColorGameConfig instance using the specified properties.
             * @function create
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {color.v1.IColorGameConfig=} [properties] Properties to set
             * @returns {color.v1.ColorGameConfig} ColorGameConfig instance
             */
            ColorGameConfig.create = function create(properties) {
                return new ColorGameConfig(properties);
            };

            /**
             * Encodes the specified ColorGameConfig message. Does not implicitly {@link color.v1.ColorGameConfig.verify|verify} messages.
             * @function encode
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {color.v1.IColorGameConfig} message ColorGameConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorGameConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.betList != null && message.betList.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.betList.length; ++i)
                        writer.int32(message.betList[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified ColorGameConfig message, length delimited. Does not implicitly {@link color.v1.ColorGameConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {color.v1.IColorGameConfig} message ColorGameConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorGameConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ColorGameConfig message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.ColorGameConfig} ColorGameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorGameConfig.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.ColorGameConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.betList && message.betList.length))
                                message.betList = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.betList.push(reader.int32());
                            } else
                                message.betList.push(reader.int32());
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
             * Decodes a ColorGameConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.ColorGameConfig} ColorGameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorGameConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ColorGameConfig message.
             * @function verify
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ColorGameConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.betList != null && message.hasOwnProperty("betList")) {
                    if (!Array.isArray(message.betList))
                        return "betList: array expected";
                    for (var i = 0; i < message.betList.length; ++i)
                        if (!$util.isInteger(message.betList[i]))
                            return "betList: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a ColorGameConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.ColorGameConfig} ColorGameConfig
             */
            ColorGameConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.ColorGameConfig)
                    return object;
                var message = new $root.color.v1.ColorGameConfig();
                if (object.betList) {
                    if (!Array.isArray(object.betList))
                        throw TypeError(".color.v1.ColorGameConfig.betList: array expected");
                    message.betList = [];
                    for (var i = 0; i < object.betList.length; ++i)
                        message.betList[i] = object.betList[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a ColorGameConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {color.v1.ColorGameConfig} message ColorGameConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ColorGameConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.betList = [];
                if (message.betList && message.betList.length) {
                    object.betList = [];
                    for (var j = 0; j < message.betList.length; ++j)
                        object.betList[j] = message.betList[j];
                }
                return object;
            };

            /**
             * Converts this ColorGameConfig to JSON.
             * @function toJSON
             * @memberof color.v1.ColorGameConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ColorGameConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ColorGameConfig
             * @function getTypeUrl
             * @memberof color.v1.ColorGameConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ColorGameConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.ColorGameConfig";
            };

            return ColorGameConfig;
        })();

        v1.ColorPlayerInfo = (function() {

            /**
             * Properties of a ColorPlayerInfo.
             * @memberof color.v1
             * @interface IColorPlayerInfo
             * @property {common.v1.IPlayerInfo|null} [playerInfo] ColorPlayerInfo playerInfo
             * @property {Array.<color.v1.IBetInfo>|null} [betInfos] ColorPlayerInfo betInfos
             */

            /**
             * Constructs a new ColorPlayerInfo.
             * @memberof color.v1
             * @classdesc Represents a ColorPlayerInfo.
             * @implements IColorPlayerInfo
             * @constructor
             * @param {color.v1.IColorPlayerInfo=} [properties] Properties to set
             */
            function ColorPlayerInfo(properties) {
                this.betInfos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ColorPlayerInfo playerInfo.
             * @member {common.v1.IPlayerInfo|null|undefined} playerInfo
             * @memberof color.v1.ColorPlayerInfo
             * @instance
             */
            ColorPlayerInfo.prototype.playerInfo = null;

            /**
             * ColorPlayerInfo betInfos.
             * @member {Array.<color.v1.IBetInfo>} betInfos
             * @memberof color.v1.ColorPlayerInfo
             * @instance
             */
            ColorPlayerInfo.prototype.betInfos = $util.emptyArray;

            /**
             * Creates a new ColorPlayerInfo instance using the specified properties.
             * @function create
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {color.v1.IColorPlayerInfo=} [properties] Properties to set
             * @returns {color.v1.ColorPlayerInfo} ColorPlayerInfo instance
             */
            ColorPlayerInfo.create = function create(properties) {
                return new ColorPlayerInfo(properties);
            };

            /**
             * Encodes the specified ColorPlayerInfo message. Does not implicitly {@link color.v1.ColorPlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {color.v1.IColorPlayerInfo} message ColorPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorPlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.common.v1.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.betInfos != null && message.betInfos.length)
                    for (var i = 0; i < message.betInfos.length; ++i)
                        $root.color.v1.BetInfo.encode(message.betInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ColorPlayerInfo message, length delimited. Does not implicitly {@link color.v1.ColorPlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {color.v1.IColorPlayerInfo} message ColorPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ColorPlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.ColorPlayerInfo} ColorPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorPlayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.ColorPlayerInfo();
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
                            if (!(message.betInfos && message.betInfos.length))
                                message.betInfos = [];
                            message.betInfos.push($root.color.v1.BetInfo.decode(reader, reader.uint32()));
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
             * Decodes a ColorPlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.ColorPlayerInfo} ColorPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ColorPlayerInfo message.
             * @function verify
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ColorPlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.betInfos != null && message.hasOwnProperty("betInfos")) {
                    if (!Array.isArray(message.betInfos))
                        return "betInfos: array expected";
                    for (var i = 0; i < message.betInfos.length; ++i) {
                        var error = $root.color.v1.BetInfo.verify(message.betInfos[i]);
                        if (error)
                            return "betInfos." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ColorPlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.ColorPlayerInfo} ColorPlayerInfo
             */
            ColorPlayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.ColorPlayerInfo)
                    return object;
                var message = new $root.color.v1.ColorPlayerInfo();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".color.v1.ColorPlayerInfo.playerInfo: object expected");
                    message.playerInfo = $root.common.v1.PlayerInfo.fromObject(object.playerInfo);
                }
                if (object.betInfos) {
                    if (!Array.isArray(object.betInfos))
                        throw TypeError(".color.v1.ColorPlayerInfo.betInfos: array expected");
                    message.betInfos = [];
                    for (var i = 0; i < object.betInfos.length; ++i) {
                        if (typeof object.betInfos[i] !== "object")
                            throw TypeError(".color.v1.ColorPlayerInfo.betInfos: object expected");
                        message.betInfos[i] = $root.color.v1.BetInfo.fromObject(object.betInfos[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ColorPlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {color.v1.ColorPlayerInfo} message ColorPlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ColorPlayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.betInfos = [];
                if (options.defaults)
                    object.playerInfo = null;
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.common.v1.PlayerInfo.toObject(message.playerInfo, options);
                if (message.betInfos && message.betInfos.length) {
                    object.betInfos = [];
                    for (var j = 0; j < message.betInfos.length; ++j)
                        object.betInfos[j] = $root.color.v1.BetInfo.toObject(message.betInfos[j], options);
                }
                return object;
            };

            /**
             * Converts this ColorPlayerInfo to JSON.
             * @function toJSON
             * @memberof color.v1.ColorPlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ColorPlayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ColorPlayerInfo
             * @function getTypeUrl
             * @memberof color.v1.ColorPlayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ColorPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.ColorPlayerInfo";
            };

            return ColorPlayerInfo;
        })();

        v1.BetInfo = (function() {

            /**
             * Properties of a BetInfo.
             * @memberof color.v1
             * @interface IBetInfo
             * @property {number|null} [area] BetInfo area
             * @property {number|null} [betAmount] BetInfo betAmount
             * @property {number|null} [odds] BetInfo odds
             * @property {number|null} [payoutAmount] BetInfo payoutAmount
             */

            /**
             * Constructs a new BetInfo.
             * @memberof color.v1
             * @classdesc Represents a BetInfo.
             * @implements IBetInfo
             * @constructor
             * @param {color.v1.IBetInfo=} [properties] Properties to set
             */
            function BetInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BetInfo area.
             * @member {number} area
             * @memberof color.v1.BetInfo
             * @instance
             */
            BetInfo.prototype.area = 0;

            /**
             * BetInfo betAmount.
             * @member {number} betAmount
             * @memberof color.v1.BetInfo
             * @instance
             */
            BetInfo.prototype.betAmount = 0;

            /**
             * BetInfo odds.
             * @member {number} odds
             * @memberof color.v1.BetInfo
             * @instance
             */
            BetInfo.prototype.odds = 0;

            /**
             * BetInfo payoutAmount.
             * @member {number} payoutAmount
             * @memberof color.v1.BetInfo
             * @instance
             */
            BetInfo.prototype.payoutAmount = 0;

            /**
             * Creates a new BetInfo instance using the specified properties.
             * @function create
             * @memberof color.v1.BetInfo
             * @static
             * @param {color.v1.IBetInfo=} [properties] Properties to set
             * @returns {color.v1.BetInfo} BetInfo instance
             */
            BetInfo.create = function create(properties) {
                return new BetInfo(properties);
            };

            /**
             * Encodes the specified BetInfo message. Does not implicitly {@link color.v1.BetInfo.verify|verify} messages.
             * @function encode
             * @memberof color.v1.BetInfo
             * @static
             * @param {color.v1.IBetInfo} message BetInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.area);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.betAmount);
                if (message.odds != null && Object.hasOwnProperty.call(message, "odds"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.odds);
                if (message.payoutAmount != null && Object.hasOwnProperty.call(message, "payoutAmount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.payoutAmount);
                return writer;
            };

            /**
             * Encodes the specified BetInfo message, length delimited. Does not implicitly {@link color.v1.BetInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.BetInfo
             * @static
             * @param {color.v1.IBetInfo} message BetInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BetInfo message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.BetInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.BetInfo} BetInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.BetInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.area = reader.int32();
                            break;
                        }
                    case 2: {
                            message.betAmount = reader.int32();
                            break;
                        }
                    case 3: {
                            message.odds = reader.int32();
                            break;
                        }
                    case 4: {
                            message.payoutAmount = reader.int32();
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
             * Decodes a BetInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.BetInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.BetInfo} BetInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BetInfo message.
             * @function verify
             * @memberof color.v1.BetInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BetInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.area != null && message.hasOwnProperty("area"))
                    if (!$util.isInteger(message.area))
                        return "area: integer expected";
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (!$util.isInteger(message.betAmount))
                        return "betAmount: integer expected";
                if (message.odds != null && message.hasOwnProperty("odds"))
                    if (!$util.isInteger(message.odds))
                        return "odds: integer expected";
                if (message.payoutAmount != null && message.hasOwnProperty("payoutAmount"))
                    if (!$util.isInteger(message.payoutAmount))
                        return "payoutAmount: integer expected";
                return null;
            };

            /**
             * Creates a BetInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.BetInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.BetInfo} BetInfo
             */
            BetInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.BetInfo)
                    return object;
                var message = new $root.color.v1.BetInfo();
                if (object.area != null)
                    message.area = object.area | 0;
                if (object.betAmount != null)
                    message.betAmount = object.betAmount | 0;
                if (object.odds != null)
                    message.odds = object.odds | 0;
                if (object.payoutAmount != null)
                    message.payoutAmount = object.payoutAmount | 0;
                return message;
            };

            /**
             * Creates a plain object from a BetInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.BetInfo
             * @static
             * @param {color.v1.BetInfo} message BetInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BetInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.area = 0;
                    object.betAmount = 0;
                    object.odds = 0;
                    object.payoutAmount = 0;
                }
                if (message.area != null && message.hasOwnProperty("area"))
                    object.area = message.area;
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    object.betAmount = message.betAmount;
                if (message.odds != null && message.hasOwnProperty("odds"))
                    object.odds = message.odds;
                if (message.payoutAmount != null && message.hasOwnProperty("payoutAmount"))
                    object.payoutAmount = message.payoutAmount;
                return object;
            };

            /**
             * Converts this BetInfo to JSON.
             * @function toJSON
             * @memberof color.v1.BetInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BetInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BetInfo
             * @function getTypeUrl
             * @memberof color.v1.BetInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BetInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.BetInfo";
            };

            return BetInfo;
        })();

        v1.DoubleUpBetInfo = (function() {

            /**
             * Properties of a DoubleUpBetInfo.
             * @memberof color.v1
             * @interface IDoubleUpBetInfo
             * @property {number|null} [betAmount] DoubleUpBetInfo betAmount
             * @property {number|null} [payoutAmount] DoubleUpBetInfo payoutAmount
             * @property {string|null} [gameCode] DoubleUpBetInfo gameCode
             * @property {number|null} [bonusSeq] DoubleUpBetInfo bonusSeq
             * @property {number|null} [basePayoutAmount] DoubleUpBetInfo basePayoutAmount
             * @property {number|Long|null} [baseStartTime] DoubleUpBetInfo baseStartTime
             */

            /**
             * Constructs a new DoubleUpBetInfo.
             * @memberof color.v1
             * @classdesc Represents a DoubleUpBetInfo.
             * @implements IDoubleUpBetInfo
             * @constructor
             * @param {color.v1.IDoubleUpBetInfo=} [properties] Properties to set
             */
            function DoubleUpBetInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleUpBetInfo betAmount.
             * @member {number} betAmount
             * @memberof color.v1.DoubleUpBetInfo
             * @instance
             */
            DoubleUpBetInfo.prototype.betAmount = 0;

            /**
             * DoubleUpBetInfo payoutAmount.
             * @member {number} payoutAmount
             * @memberof color.v1.DoubleUpBetInfo
             * @instance
             */
            DoubleUpBetInfo.prototype.payoutAmount = 0;

            /**
             * DoubleUpBetInfo gameCode.
             * @member {string} gameCode
             * @memberof color.v1.DoubleUpBetInfo
             * @instance
             */
            DoubleUpBetInfo.prototype.gameCode = "";

            /**
             * DoubleUpBetInfo bonusSeq.
             * @member {number} bonusSeq
             * @memberof color.v1.DoubleUpBetInfo
             * @instance
             */
            DoubleUpBetInfo.prototype.bonusSeq = 0;

            /**
             * DoubleUpBetInfo basePayoutAmount.
             * @member {number} basePayoutAmount
             * @memberof color.v1.DoubleUpBetInfo
             * @instance
             */
            DoubleUpBetInfo.prototype.basePayoutAmount = 0;

            /**
             * DoubleUpBetInfo baseStartTime.
             * @member {number|Long} baseStartTime
             * @memberof color.v1.DoubleUpBetInfo
             * @instance
             */
            DoubleUpBetInfo.prototype.baseStartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new DoubleUpBetInfo instance using the specified properties.
             * @function create
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {color.v1.IDoubleUpBetInfo=} [properties] Properties to set
             * @returns {color.v1.DoubleUpBetInfo} DoubleUpBetInfo instance
             */
            DoubleUpBetInfo.create = function create(properties) {
                return new DoubleUpBetInfo(properties);
            };

            /**
             * Encodes the specified DoubleUpBetInfo message. Does not implicitly {@link color.v1.DoubleUpBetInfo.verify|verify} messages.
             * @function encode
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {color.v1.IDoubleUpBetInfo} message DoubleUpBetInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleUpBetInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betAmount);
                if (message.payoutAmount != null && Object.hasOwnProperty.call(message, "payoutAmount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payoutAmount);
                if (message.gameCode != null && Object.hasOwnProperty.call(message, "gameCode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameCode);
                if (message.bonusSeq != null && Object.hasOwnProperty.call(message, "bonusSeq"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bonusSeq);
                if (message.basePayoutAmount != null && Object.hasOwnProperty.call(message, "basePayoutAmount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.basePayoutAmount);
                if (message.baseStartTime != null && Object.hasOwnProperty.call(message, "baseStartTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.baseStartTime);
                return writer;
            };

            /**
             * Encodes the specified DoubleUpBetInfo message, length delimited. Does not implicitly {@link color.v1.DoubleUpBetInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {color.v1.IDoubleUpBetInfo} message DoubleUpBetInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleUpBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleUpBetInfo message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.DoubleUpBetInfo} DoubleUpBetInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleUpBetInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.DoubleUpBetInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.betAmount = reader.int32();
                            break;
                        }
                    case 2: {
                            message.payoutAmount = reader.int32();
                            break;
                        }
                    case 3: {
                            message.gameCode = reader.string();
                            break;
                        }
                    case 4: {
                            message.bonusSeq = reader.int32();
                            break;
                        }
                    case 5: {
                            message.basePayoutAmount = reader.int32();
                            break;
                        }
                    case 6: {
                            message.baseStartTime = reader.int64();
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
             * Decodes a DoubleUpBetInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.DoubleUpBetInfo} DoubleUpBetInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleUpBetInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleUpBetInfo message.
             * @function verify
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleUpBetInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (!$util.isInteger(message.betAmount))
                        return "betAmount: integer expected";
                if (message.payoutAmount != null && message.hasOwnProperty("payoutAmount"))
                    if (!$util.isInteger(message.payoutAmount))
                        return "payoutAmount: integer expected";
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    if (!$util.isString(message.gameCode))
                        return "gameCode: string expected";
                if (message.bonusSeq != null && message.hasOwnProperty("bonusSeq"))
                    if (!$util.isInteger(message.bonusSeq))
                        return "bonusSeq: integer expected";
                if (message.basePayoutAmount != null && message.hasOwnProperty("basePayoutAmount"))
                    if (!$util.isInteger(message.basePayoutAmount))
                        return "basePayoutAmount: integer expected";
                if (message.baseStartTime != null && message.hasOwnProperty("baseStartTime"))
                    if (!$util.isInteger(message.baseStartTime) && !(message.baseStartTime && $util.isInteger(message.baseStartTime.low) && $util.isInteger(message.baseStartTime.high)))
                        return "baseStartTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a DoubleUpBetInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.DoubleUpBetInfo} DoubleUpBetInfo
             */
            DoubleUpBetInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.DoubleUpBetInfo)
                    return object;
                var message = new $root.color.v1.DoubleUpBetInfo();
                if (object.betAmount != null)
                    message.betAmount = object.betAmount | 0;
                if (object.payoutAmount != null)
                    message.payoutAmount = object.payoutAmount | 0;
                if (object.gameCode != null)
                    message.gameCode = String(object.gameCode);
                if (object.bonusSeq != null)
                    message.bonusSeq = object.bonusSeq | 0;
                if (object.basePayoutAmount != null)
                    message.basePayoutAmount = object.basePayoutAmount | 0;
                if (object.baseStartTime != null)
                    if ($util.Long)
                        (message.baseStartTime = $util.Long.fromValue(object.baseStartTime)).unsigned = false;
                    else if (typeof object.baseStartTime === "string")
                        message.baseStartTime = parseInt(object.baseStartTime, 10);
                    else if (typeof object.baseStartTime === "number")
                        message.baseStartTime = object.baseStartTime;
                    else if (typeof object.baseStartTime === "object")
                        message.baseStartTime = new $util.LongBits(object.baseStartTime.low >>> 0, object.baseStartTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a DoubleUpBetInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {color.v1.DoubleUpBetInfo} message DoubleUpBetInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleUpBetInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.betAmount = 0;
                    object.payoutAmount = 0;
                    object.gameCode = "";
                    object.bonusSeq = 0;
                    object.basePayoutAmount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.baseStartTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.baseStartTime = options.longs === String ? "0" : 0;
                }
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    object.betAmount = message.betAmount;
                if (message.payoutAmount != null && message.hasOwnProperty("payoutAmount"))
                    object.payoutAmount = message.payoutAmount;
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    object.gameCode = message.gameCode;
                if (message.bonusSeq != null && message.hasOwnProperty("bonusSeq"))
                    object.bonusSeq = message.bonusSeq;
                if (message.basePayoutAmount != null && message.hasOwnProperty("basePayoutAmount"))
                    object.basePayoutAmount = message.basePayoutAmount;
                if (message.baseStartTime != null && message.hasOwnProperty("baseStartTime"))
                    if (typeof message.baseStartTime === "number")
                        object.baseStartTime = options.longs === String ? String(message.baseStartTime) : message.baseStartTime;
                    else
                        object.baseStartTime = options.longs === String ? $util.Long.prototype.toString.call(message.baseStartTime) : options.longs === Number ? new $util.LongBits(message.baseStartTime.low >>> 0, message.baseStartTime.high >>> 0).toNumber() : message.baseStartTime;
                return object;
            };

            /**
             * Converts this DoubleUpBetInfo to JSON.
             * @function toJSON
             * @memberof color.v1.DoubleUpBetInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleUpBetInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoubleUpBetInfo
             * @function getTypeUrl
             * @memberof color.v1.DoubleUpBetInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoubleUpBetInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.DoubleUpBetInfo";
            };

            return DoubleUpBetInfo;
        })();

        v1.SettlePlayer = (function() {

            /**
             * Properties of a SettlePlayer.
             * @memberof color.v1
             * @interface ISettlePlayer
             * @property {number|Long|null} [playerId] SettlePlayer playerId
             * @property {Array.<color.v1.IBetInfo>|null} [winInfos] SettlePlayer winInfos
             */

            /**
             * Constructs a new SettlePlayer.
             * @memberof color.v1
             * @classdesc Represents a SettlePlayer.
             * @implements ISettlePlayer
             * @constructor
             * @param {color.v1.ISettlePlayer=} [properties] Properties to set
             */
            function SettlePlayer(properties) {
                this.winInfos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SettlePlayer playerId.
             * @member {number|Long} playerId
             * @memberof color.v1.SettlePlayer
             * @instance
             */
            SettlePlayer.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SettlePlayer winInfos.
             * @member {Array.<color.v1.IBetInfo>} winInfos
             * @memberof color.v1.SettlePlayer
             * @instance
             */
            SettlePlayer.prototype.winInfos = $util.emptyArray;

            /**
             * Creates a new SettlePlayer instance using the specified properties.
             * @function create
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {color.v1.ISettlePlayer=} [properties] Properties to set
             * @returns {color.v1.SettlePlayer} SettlePlayer instance
             */
            SettlePlayer.create = function create(properties) {
                return new SettlePlayer(properties);
            };

            /**
             * Encodes the specified SettlePlayer message. Does not implicitly {@link color.v1.SettlePlayer.verify|verify} messages.
             * @function encode
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {color.v1.ISettlePlayer} message SettlePlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SettlePlayer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.winInfos != null && message.winInfos.length)
                    for (var i = 0; i < message.winInfos.length; ++i)
                        $root.color.v1.BetInfo.encode(message.winInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SettlePlayer message, length delimited. Does not implicitly {@link color.v1.SettlePlayer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {color.v1.ISettlePlayer} message SettlePlayer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SettlePlayer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SettlePlayer message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.SettlePlayer} SettlePlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SettlePlayer.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.SettlePlayer();
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
                            if (!(message.winInfos && message.winInfos.length))
                                message.winInfos = [];
                            message.winInfos.push($root.color.v1.BetInfo.decode(reader, reader.uint32()));
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
             * Decodes a SettlePlayer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.SettlePlayer} SettlePlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SettlePlayer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SettlePlayer message.
             * @function verify
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SettlePlayer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.winInfos != null && message.hasOwnProperty("winInfos")) {
                    if (!Array.isArray(message.winInfos))
                        return "winInfos: array expected";
                    for (var i = 0; i < message.winInfos.length; ++i) {
                        var error = $root.color.v1.BetInfo.verify(message.winInfos[i]);
                        if (error)
                            return "winInfos." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SettlePlayer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.SettlePlayer} SettlePlayer
             */
            SettlePlayer.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.SettlePlayer)
                    return object;
                var message = new $root.color.v1.SettlePlayer();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.winInfos) {
                    if (!Array.isArray(object.winInfos))
                        throw TypeError(".color.v1.SettlePlayer.winInfos: array expected");
                    message.winInfos = [];
                    for (var i = 0; i < object.winInfos.length; ++i) {
                        if (typeof object.winInfos[i] !== "object")
                            throw TypeError(".color.v1.SettlePlayer.winInfos: object expected");
                        message.winInfos[i] = $root.color.v1.BetInfo.fromObject(object.winInfos[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SettlePlayer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {color.v1.SettlePlayer} message SettlePlayer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SettlePlayer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.winInfos = [];
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.winInfos && message.winInfos.length) {
                    object.winInfos = [];
                    for (var j = 0; j < message.winInfos.length; ++j)
                        object.winInfos[j] = $root.color.v1.BetInfo.toObject(message.winInfos[j], options);
                }
                return object;
            };

            /**
             * Converts this SettlePlayer to JSON.
             * @function toJSON
             * @memberof color.v1.SettlePlayer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SettlePlayer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SettlePlayer
             * @function getTypeUrl
             * @memberof color.v1.SettlePlayer
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SettlePlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.SettlePlayer";
            };

            return SettlePlayer;
        })();

        v1.GameInfo = (function() {

            /**
             * Properties of a GameInfo.
             * @memberof color.v1
             * @interface IGameInfo
             * @property {number|null} [status] GameInfo status
             * @property {number|Long|null} [statusEndTime] GameInfo statusEndTime
             * @property {string|null} [roundNum] GameInfo roundNum
             * @property {Array.<number>|null} [scores] GameInfo scores
             * @property {Array.<color.v1.IBetInfo>|null} [betInfos] GameInfo betInfos
             * @property {Array.<number>|null} [diceInfos] GameInfo diceInfos
             * @property {Array.<color.v1.ISettlePlayer>|null} [settlePlayers] GameInfo settlePlayers
             * @property {Array.<number>|null} [playerBetLimit] GameInfo playerBetLimit
             */

            /**
             * Constructs a new GameInfo.
             * @memberof color.v1
             * @classdesc Represents a GameInfo.
             * @implements IGameInfo
             * @constructor
             * @param {color.v1.IGameInfo=} [properties] Properties to set
             */
            function GameInfo(properties) {
                this.scores = [];
                this.betInfos = [];
                this.diceInfos = [];
                this.settlePlayers = [];
                this.playerBetLimit = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameInfo status.
             * @member {number} status
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.status = 0;

            /**
             * GameInfo statusEndTime.
             * @member {number|Long} statusEndTime
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.statusEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo roundNum.
             * @member {string} roundNum
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.roundNum = "";

            /**
             * GameInfo scores.
             * @member {Array.<number>} scores
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.scores = $util.emptyArray;

            /**
             * GameInfo betInfos.
             * @member {Array.<color.v1.IBetInfo>} betInfos
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.betInfos = $util.emptyArray;

            /**
             * GameInfo diceInfos.
             * @member {Array.<number>} diceInfos
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.diceInfos = $util.emptyArray;

            /**
             * GameInfo settlePlayers.
             * @member {Array.<color.v1.ISettlePlayer>} settlePlayers
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.settlePlayers = $util.emptyArray;

            /**
             * GameInfo playerBetLimit.
             * @member {Array.<number>} playerBetLimit
             * @memberof color.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.playerBetLimit = $util.emptyArray;

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @function create
             * @memberof color.v1.GameInfo
             * @static
             * @param {color.v1.IGameInfo=} [properties] Properties to set
             * @returns {color.v1.GameInfo} GameInfo instance
             */
            GameInfo.create = function create(properties) {
                return new GameInfo(properties);
            };

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link color.v1.GameInfo.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GameInfo
             * @static
             * @param {color.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.statusEndTime != null && Object.hasOwnProperty.call(message, "statusEndTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.statusEndTime);
                if (message.roundNum != null && Object.hasOwnProperty.call(message, "roundNum"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roundNum);
                if (message.scores != null && message.scores.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.scores.length; ++i)
                        writer.int32(message.scores[i]);
                    writer.ldelim();
                }
                if (message.betInfos != null && message.betInfos.length)
                    for (var i = 0; i < message.betInfos.length; ++i)
                        $root.color.v1.BetInfo.encode(message.betInfos[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.diceInfos != null && message.diceInfos.length) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork();
                    for (var i = 0; i < message.diceInfos.length; ++i)
                        writer.int32(message.diceInfos[i]);
                    writer.ldelim();
                }
                if (message.settlePlayers != null && message.settlePlayers.length)
                    for (var i = 0; i < message.settlePlayers.length; ++i)
                        $root.color.v1.SettlePlayer.encode(message.settlePlayers[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.playerBetLimit != null && message.playerBetLimit.length) {
                    writer.uint32(/* id 8, wireType 2 =*/66).fork();
                    for (var i = 0; i < message.playerBetLimit.length; ++i)
                        writer.int32(message.playerBetLimit[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link color.v1.GameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GameInfo
             * @static
             * @param {color.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.int32();
                            break;
                        }
                    case 2: {
                            message.statusEndTime = reader.int64();
                            break;
                        }
                    case 3: {
                            message.roundNum = reader.string();
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
                            if (!(message.betInfos && message.betInfos.length))
                                message.betInfos = [];
                            message.betInfos.push($root.color.v1.BetInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.diceInfos && message.diceInfos.length))
                                message.diceInfos = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.diceInfos.push(reader.int32());
                            } else
                                message.diceInfos.push(reader.int32());
                            break;
                        }
                    case 7: {
                            if (!(message.settlePlayers && message.settlePlayers.length))
                                message.settlePlayers = [];
                            message.settlePlayers.push($root.color.v1.SettlePlayer.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            if (!(message.playerBetLimit && message.playerBetLimit.length))
                                message.playerBetLimit = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.playerBetLimit.push(reader.int32());
                            } else
                                message.playerBetLimit.push(reader.int32());
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
             * @memberof color.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GameInfo} GameInfo
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
             * @memberof color.v1.GameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.statusEndTime != null && message.hasOwnProperty("statusEndTime"))
                    if (!$util.isInteger(message.statusEndTime) && !(message.statusEndTime && $util.isInteger(message.statusEndTime.low) && $util.isInteger(message.statusEndTime.high)))
                        return "statusEndTime: integer|Long expected";
                if (message.roundNum != null && message.hasOwnProperty("roundNum"))
                    if (!$util.isString(message.roundNum))
                        return "roundNum: string expected";
                if (message.scores != null && message.hasOwnProperty("scores")) {
                    if (!Array.isArray(message.scores))
                        return "scores: array expected";
                    for (var i = 0; i < message.scores.length; ++i)
                        if (!$util.isInteger(message.scores[i]))
                            return "scores: integer[] expected";
                }
                if (message.betInfos != null && message.hasOwnProperty("betInfos")) {
                    if (!Array.isArray(message.betInfos))
                        return "betInfos: array expected";
                    for (var i = 0; i < message.betInfos.length; ++i) {
                        var error = $root.color.v1.BetInfo.verify(message.betInfos[i]);
                        if (error)
                            return "betInfos." + error;
                    }
                }
                if (message.diceInfos != null && message.hasOwnProperty("diceInfos")) {
                    if (!Array.isArray(message.diceInfos))
                        return "diceInfos: array expected";
                    for (var i = 0; i < message.diceInfos.length; ++i)
                        if (!$util.isInteger(message.diceInfos[i]))
                            return "diceInfos: integer[] expected";
                }
                if (message.settlePlayers != null && message.hasOwnProperty("settlePlayers")) {
                    if (!Array.isArray(message.settlePlayers))
                        return "settlePlayers: array expected";
                    for (var i = 0; i < message.settlePlayers.length; ++i) {
                        var error = $root.color.v1.SettlePlayer.verify(message.settlePlayers[i]);
                        if (error)
                            return "settlePlayers." + error;
                    }
                }
                if (message.playerBetLimit != null && message.hasOwnProperty("playerBetLimit")) {
                    if (!Array.isArray(message.playerBetLimit))
                        return "playerBetLimit: array expected";
                    for (var i = 0; i < message.playerBetLimit.length; ++i)
                        if (!$util.isInteger(message.playerBetLimit[i]))
                            return "playerBetLimit: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GameInfo} GameInfo
             */
            GameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GameInfo)
                    return object;
                var message = new $root.color.v1.GameInfo();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.statusEndTime != null)
                    if ($util.Long)
                        (message.statusEndTime = $util.Long.fromValue(object.statusEndTime)).unsigned = false;
                    else if (typeof object.statusEndTime === "string")
                        message.statusEndTime = parseInt(object.statusEndTime, 10);
                    else if (typeof object.statusEndTime === "number")
                        message.statusEndTime = object.statusEndTime;
                    else if (typeof object.statusEndTime === "object")
                        message.statusEndTime = new $util.LongBits(object.statusEndTime.low >>> 0, object.statusEndTime.high >>> 0).toNumber();
                if (object.roundNum != null)
                    message.roundNum = String(object.roundNum);
                if (object.scores) {
                    if (!Array.isArray(object.scores))
                        throw TypeError(".color.v1.GameInfo.scores: array expected");
                    message.scores = [];
                    for (var i = 0; i < object.scores.length; ++i)
                        message.scores[i] = object.scores[i] | 0;
                }
                if (object.betInfos) {
                    if (!Array.isArray(object.betInfos))
                        throw TypeError(".color.v1.GameInfo.betInfos: array expected");
                    message.betInfos = [];
                    for (var i = 0; i < object.betInfos.length; ++i) {
                        if (typeof object.betInfos[i] !== "object")
                            throw TypeError(".color.v1.GameInfo.betInfos: object expected");
                        message.betInfos[i] = $root.color.v1.BetInfo.fromObject(object.betInfos[i]);
                    }
                }
                if (object.diceInfos) {
                    if (!Array.isArray(object.diceInfos))
                        throw TypeError(".color.v1.GameInfo.diceInfos: array expected");
                    message.diceInfos = [];
                    for (var i = 0; i < object.diceInfos.length; ++i)
                        message.diceInfos[i] = object.diceInfos[i] | 0;
                }
                if (object.settlePlayers) {
                    if (!Array.isArray(object.settlePlayers))
                        throw TypeError(".color.v1.GameInfo.settlePlayers: array expected");
                    message.settlePlayers = [];
                    for (var i = 0; i < object.settlePlayers.length; ++i) {
                        if (typeof object.settlePlayers[i] !== "object")
                            throw TypeError(".color.v1.GameInfo.settlePlayers: object expected");
                        message.settlePlayers[i] = $root.color.v1.SettlePlayer.fromObject(object.settlePlayers[i]);
                    }
                }
                if (object.playerBetLimit) {
                    if (!Array.isArray(object.playerBetLimit))
                        throw TypeError(".color.v1.GameInfo.playerBetLimit: array expected");
                    message.playerBetLimit = [];
                    for (var i = 0; i < object.playerBetLimit.length; ++i)
                        message.playerBetLimit[i] = object.playerBetLimit[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GameInfo
             * @static
             * @param {color.v1.GameInfo} message GameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.scores = [];
                    object.betInfos = [];
                    object.diceInfos = [];
                    object.settlePlayers = [];
                    object.playerBetLimit = [];
                }
                if (options.defaults) {
                    object.status = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.statusEndTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.statusEndTime = options.longs === String ? "0" : 0;
                    object.roundNum = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.statusEndTime != null && message.hasOwnProperty("statusEndTime"))
                    if (typeof message.statusEndTime === "number")
                        object.statusEndTime = options.longs === String ? String(message.statusEndTime) : message.statusEndTime;
                    else
                        object.statusEndTime = options.longs === String ? $util.Long.prototype.toString.call(message.statusEndTime) : options.longs === Number ? new $util.LongBits(message.statusEndTime.low >>> 0, message.statusEndTime.high >>> 0).toNumber() : message.statusEndTime;
                if (message.roundNum != null && message.hasOwnProperty("roundNum"))
                    object.roundNum = message.roundNum;
                if (message.scores && message.scores.length) {
                    object.scores = [];
                    for (var j = 0; j < message.scores.length; ++j)
                        object.scores[j] = message.scores[j];
                }
                if (message.betInfos && message.betInfos.length) {
                    object.betInfos = [];
                    for (var j = 0; j < message.betInfos.length; ++j)
                        object.betInfos[j] = $root.color.v1.BetInfo.toObject(message.betInfos[j], options);
                }
                if (message.diceInfos && message.diceInfos.length) {
                    object.diceInfos = [];
                    for (var j = 0; j < message.diceInfos.length; ++j)
                        object.diceInfos[j] = message.diceInfos[j];
                }
                if (message.settlePlayers && message.settlePlayers.length) {
                    object.settlePlayers = [];
                    for (var j = 0; j < message.settlePlayers.length; ++j)
                        object.settlePlayers[j] = $root.color.v1.SettlePlayer.toObject(message.settlePlayers[j], options);
                }
                if (message.playerBetLimit && message.playerBetLimit.length) {
                    object.playerBetLimit = [];
                    for (var j = 0; j < message.playerBetLimit.length; ++j)
                        object.playerBetLimit[j] = message.playerBetLimit[j];
                }
                return object;
            };

            /**
             * Converts this GameInfo to JSON.
             * @function toJSON
             * @memberof color.v1.GameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameInfo
             * @function getTypeUrl
             * @memberof color.v1.GameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GameInfo";
            };

            return GameInfo;
        })();

        v1.JoinRoomReq = (function() {

            /**
             * Properties of a JoinRoomReq.
             * @memberof color.v1
             * @interface IJoinRoomReq
             * @property {number|Long|null} [roomId] JoinRoomReq roomId
             */

            /**
             * Constructs a new JoinRoomReq.
             * @memberof color.v1
             * @classdesc Represents a JoinRoomReq.
             * @implements IJoinRoomReq
             * @constructor
             * @param {color.v1.IJoinRoomReq=} [properties] Properties to set
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
             * @memberof color.v1.JoinRoomReq
             * @instance
             */
            JoinRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @function create
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {color.v1.IJoinRoomReq=} [properties] Properties to set
             * @returns {color.v1.JoinRoomReq} JoinRoomReq instance
             */
            JoinRoomReq.create = function create(properties) {
                return new JoinRoomReq(properties);
            };

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link color.v1.JoinRoomReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {color.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
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
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link color.v1.JoinRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {color.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.JoinRoomReq} JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.JoinRoomReq();
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
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.JoinRoomReq} JoinRoomReq
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
             * @memberof color.v1.JoinRoomReq
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
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.JoinRoomReq} JoinRoomReq
             */
            JoinRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.JoinRoomReq)
                    return object;
                var message = new $root.color.v1.JoinRoomReq();
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
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {color.v1.JoinRoomReq} message JoinRoomReq
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
             * @memberof color.v1.JoinRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomReq
             * @function getTypeUrl
             * @memberof color.v1.JoinRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.JoinRoomReq";
            };

            return JoinRoomReq;
        })();

        v1.JoinRoomRes = (function() {

            /**
             * Properties of a JoinRoomRes.
             * @memberof color.v1
             * @interface IJoinRoomRes
             * @property {common.v1.IRoomInfo|null} [roomInfo] JoinRoomRes roomInfo
             * @property {color.v1.IGameInfo|null} [gameInfo] JoinRoomRes gameInfo
             * @property {number|null} [playersCount] JoinRoomRes playersCount
             * @property {Array.<color.v1.IColorPlayerInfo>|null} [players] JoinRoomRes players
             * @property {color.v1.IColorPlayerInfo|null} [self] JoinRoomRes self
             * @property {common.v1.IPlayerSettings|null} [playerSettings] JoinRoomRes playerSettings
             */

            /**
             * Constructs a new JoinRoomRes.
             * @memberof color.v1
             * @classdesc Represents a JoinRoomRes.
             * @implements IJoinRoomRes
             * @constructor
             * @param {color.v1.IJoinRoomRes=} [properties] Properties to set
             */
            function JoinRoomRes(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRoomRes roomInfo.
             * @member {common.v1.IRoomInfo|null|undefined} roomInfo
             * @memberof color.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.roomInfo = null;

            /**
             * JoinRoomRes gameInfo.
             * @member {color.v1.IGameInfo|null|undefined} gameInfo
             * @memberof color.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.gameInfo = null;

            /**
             * JoinRoomRes playersCount.
             * @member {number} playersCount
             * @memberof color.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playersCount = 0;

            /**
             * JoinRoomRes players.
             * @member {Array.<color.v1.IColorPlayerInfo>} players
             * @memberof color.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.players = $util.emptyArray;

            /**
             * JoinRoomRes self.
             * @member {color.v1.IColorPlayerInfo|null|undefined} self
             * @memberof color.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.self = null;

            /**
             * JoinRoomRes playerSettings.
             * @member {common.v1.IPlayerSettings|null|undefined} playerSettings
             * @memberof color.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playerSettings = null;

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @function create
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {color.v1.IJoinRoomRes=} [properties] Properties to set
             * @returns {color.v1.JoinRoomRes} JoinRoomRes instance
             */
            JoinRoomRes.create = function create(properties) {
                return new JoinRoomRes(properties);
            };

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link color.v1.JoinRoomRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {color.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                    $root.common.v1.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.color.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playersCount);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.color.v1.ColorPlayerInfo.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.color.v1.ColorPlayerInfo.encode(message.self, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.playerSettings != null && Object.hasOwnProperty.call(message, "playerSettings"))
                    $root.common.v1.PlayerSettings.encode(message.playerSettings, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link color.v1.JoinRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {color.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.JoinRoomRes} JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.JoinRoomRes();
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
                            message.gameInfo = $root.color.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.playersCount = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.color.v1.ColorPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            message.self = $root.color.v1.ColorPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
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
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.JoinRoomRes} JoinRoomRes
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
             * @memberof color.v1.JoinRoomRes
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
                    var error = $root.color.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    if (!$util.isInteger(message.playersCount))
                        return "playersCount: integer expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.color.v1.ColorPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.color.v1.ColorPlayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
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
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.JoinRoomRes} JoinRoomRes
             */
            JoinRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.JoinRoomRes)
                    return object;
                var message = new $root.color.v1.JoinRoomRes();
                if (object.roomInfo != null) {
                    if (typeof object.roomInfo !== "object")
                        throw TypeError(".color.v1.JoinRoomRes.roomInfo: object expected");
                    message.roomInfo = $root.common.v1.RoomInfo.fromObject(object.roomInfo);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".color.v1.JoinRoomRes.gameInfo: object expected");
                    message.gameInfo = $root.color.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".color.v1.JoinRoomRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".color.v1.JoinRoomRes.players: object expected");
                        message.players[i] = $root.color.v1.ColorPlayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".color.v1.JoinRoomRes.self: object expected");
                    message.self = $root.color.v1.ColorPlayerInfo.fromObject(object.self);
                }
                if (object.playerSettings != null) {
                    if (typeof object.playerSettings !== "object")
                        throw TypeError(".color.v1.JoinRoomRes.playerSettings: object expected");
                    message.playerSettings = $root.common.v1.PlayerSettings.fromObject(object.playerSettings);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {color.v1.JoinRoomRes} message JoinRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoomRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
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
                    object.gameInfo = $root.color.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.color.v1.ColorPlayerInfo.toObject(message.players[j], options);
                }
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.color.v1.ColorPlayerInfo.toObject(message.self, options);
                if (message.playerSettings != null && message.hasOwnProperty("playerSettings"))
                    object.playerSettings = $root.common.v1.PlayerSettings.toObject(message.playerSettings, options);
                return object;
            };

            /**
             * Converts this JoinRoomRes to JSON.
             * @function toJSON
             * @memberof color.v1.JoinRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomRes
             * @function getTypeUrl
             * @memberof color.v1.JoinRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.JoinRoomRes";
            };

            return JoinRoomRes;
        })();

        v1.StartGameReq = (function() {

            /**
             * Properties of a StartGameReq.
             * @memberof color.v1
             * @interface IStartGameReq
             */

            /**
             * Constructs a new StartGameReq.
             * @memberof color.v1
             * @classdesc Represents a StartGameReq.
             * @implements IStartGameReq
             * @constructor
             * @param {color.v1.IStartGameReq=} [properties] Properties to set
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
             * @memberof color.v1.StartGameReq
             * @static
             * @param {color.v1.IStartGameReq=} [properties] Properties to set
             * @returns {color.v1.StartGameReq} StartGameReq instance
             */
            StartGameReq.create = function create(properties) {
                return new StartGameReq(properties);
            };

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link color.v1.StartGameReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.StartGameReq
             * @static
             * @param {color.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link color.v1.StartGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.StartGameReq
             * @static
             * @param {color.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.StartGameReq} StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.StartGameReq();
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
             * @memberof color.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.StartGameReq} StartGameReq
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
             * @memberof color.v1.StartGameReq
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
             * @memberof color.v1.StartGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.StartGameReq} StartGameReq
             */
            StartGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.StartGameReq)
                    return object;
                return new $root.color.v1.StartGameReq();
            };

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.StartGameReq
             * @static
             * @param {color.v1.StartGameReq} message StartGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameReq to JSON.
             * @function toJSON
             * @memberof color.v1.StartGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameReq
             * @function getTypeUrl
             * @memberof color.v1.StartGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.StartGameReq";
            };

            return StartGameReq;
        })();

        v1.StartGameRes = (function() {

            /**
             * Properties of a StartGameRes.
             * @memberof color.v1
             * @interface IStartGameRes
             */

            /**
             * Constructs a new StartGameRes.
             * @memberof color.v1
             * @classdesc Represents a StartGameRes.
             * @implements IStartGameRes
             * @constructor
             * @param {color.v1.IStartGameRes=} [properties] Properties to set
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
             * @memberof color.v1.StartGameRes
             * @static
             * @param {color.v1.IStartGameRes=} [properties] Properties to set
             * @returns {color.v1.StartGameRes} StartGameRes instance
             */
            StartGameRes.create = function create(properties) {
                return new StartGameRes(properties);
            };

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link color.v1.StartGameRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.StartGameRes
             * @static
             * @param {color.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link color.v1.StartGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.StartGameRes
             * @static
             * @param {color.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.StartGameRes} StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.StartGameRes();
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
             * @memberof color.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.StartGameRes} StartGameRes
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
             * @memberof color.v1.StartGameRes
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
             * @memberof color.v1.StartGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.StartGameRes} StartGameRes
             */
            StartGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.StartGameRes)
                    return object;
                return new $root.color.v1.StartGameRes();
            };

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.StartGameRes
             * @static
             * @param {color.v1.StartGameRes} message StartGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameRes to JSON.
             * @function toJSON
             * @memberof color.v1.StartGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameRes
             * @function getTypeUrl
             * @memberof color.v1.StartGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.StartGameRes";
            };

            return StartGameRes;
        })();

        v1.GameStateChangeBroadcast = (function() {

            /**
             * Properties of a GameStateChangeBroadcast.
             * @memberof color.v1
             * @interface IGameStateChangeBroadcast
             * @property {color.v1.IGameInfo|null} [gameInfo] GameStateChangeBroadcast gameInfo
             */

            /**
             * Constructs a new GameStateChangeBroadcast.
             * @memberof color.v1
             * @classdesc Represents a GameStateChangeBroadcast.
             * @implements IGameStateChangeBroadcast
             * @constructor
             * @param {color.v1.IGameStateChangeBroadcast=} [properties] Properties to set
             */
            function GameStateChangeBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameStateChangeBroadcast gameInfo.
             * @member {color.v1.IGameInfo|null|undefined} gameInfo
             * @memberof color.v1.GameStateChangeBroadcast
             * @instance
             */
            GameStateChangeBroadcast.prototype.gameInfo = null;

            /**
             * Creates a new GameStateChangeBroadcast instance using the specified properties.
             * @function create
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {color.v1.IGameStateChangeBroadcast=} [properties] Properties to set
             * @returns {color.v1.GameStateChangeBroadcast} GameStateChangeBroadcast instance
             */
            GameStateChangeBroadcast.create = function create(properties) {
                return new GameStateChangeBroadcast(properties);
            };

            /**
             * Encodes the specified GameStateChangeBroadcast message. Does not implicitly {@link color.v1.GameStateChangeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {color.v1.IGameStateChangeBroadcast} message GameStateChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStateChangeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.color.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GameStateChangeBroadcast message, length delimited. Does not implicitly {@link color.v1.GameStateChangeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {color.v1.IGameStateChangeBroadcast} message GameStateChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStateChangeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameStateChangeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GameStateChangeBroadcast} GameStateChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStateChangeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GameStateChangeBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.gameInfo = $root.color.v1.GameInfo.decode(reader, reader.uint32());
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
             * Decodes a GameStateChangeBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GameStateChangeBroadcast} GameStateChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStateChangeBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameStateChangeBroadcast message.
             * @function verify
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameStateChangeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.color.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                return null;
            };

            /**
             * Creates a GameStateChangeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GameStateChangeBroadcast} GameStateChangeBroadcast
             */
            GameStateChangeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GameStateChangeBroadcast)
                    return object;
                var message = new $root.color.v1.GameStateChangeBroadcast();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".color.v1.GameStateChangeBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.color.v1.GameInfo.fromObject(object.gameInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a GameStateChangeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {color.v1.GameStateChangeBroadcast} message GameStateChangeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameStateChangeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.gameInfo = null;
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.color.v1.GameInfo.toObject(message.gameInfo, options);
                return object;
            };

            /**
             * Converts this GameStateChangeBroadcast to JSON.
             * @function toJSON
             * @memberof color.v1.GameStateChangeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameStateChangeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameStateChangeBroadcast
             * @function getTypeUrl
             * @memberof color.v1.GameStateChangeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameStateChangeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GameStateChangeBroadcast";
            };

            return GameStateChangeBroadcast;
        })();

        v1.BetReq = (function() {

            /**
             * Properties of a BetReq.
             * @memberof color.v1
             * @interface IBetReq
             * @property {Array.<color.v1.IBetInfo>|null} [betInfos] BetReq betInfos
             */

            /**
             * Constructs a new BetReq.
             * @memberof color.v1
             * @classdesc Represents a BetReq.
             * @implements IBetReq
             * @constructor
             * @param {color.v1.IBetReq=} [properties] Properties to set
             */
            function BetReq(properties) {
                this.betInfos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BetReq betInfos.
             * @member {Array.<color.v1.IBetInfo>} betInfos
             * @memberof color.v1.BetReq
             * @instance
             */
            BetReq.prototype.betInfos = $util.emptyArray;

            /**
             * Creates a new BetReq instance using the specified properties.
             * @function create
             * @memberof color.v1.BetReq
             * @static
             * @param {color.v1.IBetReq=} [properties] Properties to set
             * @returns {color.v1.BetReq} BetReq instance
             */
            BetReq.create = function create(properties) {
                return new BetReq(properties);
            };

            /**
             * Encodes the specified BetReq message. Does not implicitly {@link color.v1.BetReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.BetReq
             * @static
             * @param {color.v1.IBetReq} message BetReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.betInfos != null && message.betInfos.length)
                    for (var i = 0; i < message.betInfos.length; ++i)
                        $root.color.v1.BetInfo.encode(message.betInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BetReq message, length delimited. Does not implicitly {@link color.v1.BetReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.BetReq
             * @static
             * @param {color.v1.IBetReq} message BetReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BetReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.BetReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.BetReq} BetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.BetReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.betInfos && message.betInfos.length))
                                message.betInfos = [];
                            message.betInfos.push($root.color.v1.BetInfo.decode(reader, reader.uint32()));
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
             * Decodes a BetReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.BetReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.BetReq} BetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BetReq message.
             * @function verify
             * @memberof color.v1.BetReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BetReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.betInfos != null && message.hasOwnProperty("betInfos")) {
                    if (!Array.isArray(message.betInfos))
                        return "betInfos: array expected";
                    for (var i = 0; i < message.betInfos.length; ++i) {
                        var error = $root.color.v1.BetInfo.verify(message.betInfos[i]);
                        if (error)
                            return "betInfos." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BetReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.BetReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.BetReq} BetReq
             */
            BetReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.BetReq)
                    return object;
                var message = new $root.color.v1.BetReq();
                if (object.betInfos) {
                    if (!Array.isArray(object.betInfos))
                        throw TypeError(".color.v1.BetReq.betInfos: array expected");
                    message.betInfos = [];
                    for (var i = 0; i < object.betInfos.length; ++i) {
                        if (typeof object.betInfos[i] !== "object")
                            throw TypeError(".color.v1.BetReq.betInfos: object expected");
                        message.betInfos[i] = $root.color.v1.BetInfo.fromObject(object.betInfos[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BetReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.BetReq
             * @static
             * @param {color.v1.BetReq} message BetReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BetReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.betInfos = [];
                if (message.betInfos && message.betInfos.length) {
                    object.betInfos = [];
                    for (var j = 0; j < message.betInfos.length; ++j)
                        object.betInfos[j] = $root.color.v1.BetInfo.toObject(message.betInfos[j], options);
                }
                return object;
            };

            /**
             * Converts this BetReq to JSON.
             * @function toJSON
             * @memberof color.v1.BetReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BetReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BetReq
             * @function getTypeUrl
             * @memberof color.v1.BetReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BetReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.BetReq";
            };

            return BetReq;
        })();

        v1.BetRes = (function() {

            /**
             * Properties of a BetRes.
             * @memberof color.v1
             * @interface IBetRes
             */

            /**
             * Constructs a new BetRes.
             * @memberof color.v1
             * @classdesc Represents a BetRes.
             * @implements IBetRes
             * @constructor
             * @param {color.v1.IBetRes=} [properties] Properties to set
             */
            function BetRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new BetRes instance using the specified properties.
             * @function create
             * @memberof color.v1.BetRes
             * @static
             * @param {color.v1.IBetRes=} [properties] Properties to set
             * @returns {color.v1.BetRes} BetRes instance
             */
            BetRes.create = function create(properties) {
                return new BetRes(properties);
            };

            /**
             * Encodes the specified BetRes message. Does not implicitly {@link color.v1.BetRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.BetRes
             * @static
             * @param {color.v1.IBetRes} message BetRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified BetRes message, length delimited. Does not implicitly {@link color.v1.BetRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.BetRes
             * @static
             * @param {color.v1.IBetRes} message BetRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BetRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.BetRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.BetRes} BetRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.BetRes();
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
             * Decodes a BetRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.BetRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.BetRes} BetRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BetRes message.
             * @function verify
             * @memberof color.v1.BetRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BetRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a BetRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.BetRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.BetRes} BetRes
             */
            BetRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.BetRes)
                    return object;
                return new $root.color.v1.BetRes();
            };

            /**
             * Creates a plain object from a BetRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.BetRes
             * @static
             * @param {color.v1.BetRes} message BetRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BetRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this BetRes to JSON.
             * @function toJSON
             * @memberof color.v1.BetRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BetRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BetRes
             * @function getTypeUrl
             * @memberof color.v1.BetRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BetRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.BetRes";
            };

            return BetRes;
        })();

        v1.BetBroadcast = (function() {

            /**
             * Properties of a BetBroadcast.
             * @memberof color.v1
             * @interface IBetBroadcast
             * @property {color.v1.IColorPlayerInfo|null} [betPlayer] BetBroadcast betPlayer
             * @property {Array.<color.v1.IBetInfo>|null} [betInfos] BetBroadcast betInfos
             * @property {string|null} [roundNum] BetBroadcast roundNum
             */

            /**
             * Constructs a new BetBroadcast.
             * @memberof color.v1
             * @classdesc Represents a BetBroadcast.
             * @implements IBetBroadcast
             * @constructor
             * @param {color.v1.IBetBroadcast=} [properties] Properties to set
             */
            function BetBroadcast(properties) {
                this.betInfos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BetBroadcast betPlayer.
             * @member {color.v1.IColorPlayerInfo|null|undefined} betPlayer
             * @memberof color.v1.BetBroadcast
             * @instance
             */
            BetBroadcast.prototype.betPlayer = null;

            /**
             * BetBroadcast betInfos.
             * @member {Array.<color.v1.IBetInfo>} betInfos
             * @memberof color.v1.BetBroadcast
             * @instance
             */
            BetBroadcast.prototype.betInfos = $util.emptyArray;

            /**
             * BetBroadcast roundNum.
             * @member {string} roundNum
             * @memberof color.v1.BetBroadcast
             * @instance
             */
            BetBroadcast.prototype.roundNum = "";

            /**
             * Creates a new BetBroadcast instance using the specified properties.
             * @function create
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {color.v1.IBetBroadcast=} [properties] Properties to set
             * @returns {color.v1.BetBroadcast} BetBroadcast instance
             */
            BetBroadcast.create = function create(properties) {
                return new BetBroadcast(properties);
            };

            /**
             * Encodes the specified BetBroadcast message. Does not implicitly {@link color.v1.BetBroadcast.verify|verify} messages.
             * @function encode
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {color.v1.IBetBroadcast} message BetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.betPlayer != null && Object.hasOwnProperty.call(message, "betPlayer"))
                    $root.color.v1.ColorPlayerInfo.encode(message.betPlayer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.betInfos != null && message.betInfos.length)
                    for (var i = 0; i < message.betInfos.length; ++i)
                        $root.color.v1.BetInfo.encode(message.betInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.roundNum != null && Object.hasOwnProperty.call(message, "roundNum"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roundNum);
                return writer;
            };

            /**
             * Encodes the specified BetBroadcast message, length delimited. Does not implicitly {@link color.v1.BetBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {color.v1.IBetBroadcast} message BetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BetBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BetBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.BetBroadcast} BetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.BetBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.betPlayer = $root.color.v1.ColorPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.betInfos && message.betInfos.length))
                                message.betInfos = [];
                            message.betInfos.push($root.color.v1.BetInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.roundNum = reader.string();
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
             * Decodes a BetBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.BetBroadcast} BetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BetBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BetBroadcast message.
             * @function verify
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BetBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.betPlayer != null && message.hasOwnProperty("betPlayer")) {
                    var error = $root.color.v1.ColorPlayerInfo.verify(message.betPlayer);
                    if (error)
                        return "betPlayer." + error;
                }
                if (message.betInfos != null && message.hasOwnProperty("betInfos")) {
                    if (!Array.isArray(message.betInfos))
                        return "betInfos: array expected";
                    for (var i = 0; i < message.betInfos.length; ++i) {
                        var error = $root.color.v1.BetInfo.verify(message.betInfos[i]);
                        if (error)
                            return "betInfos." + error;
                    }
                }
                if (message.roundNum != null && message.hasOwnProperty("roundNum"))
                    if (!$util.isString(message.roundNum))
                        return "roundNum: string expected";
                return null;
            };

            /**
             * Creates a BetBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.BetBroadcast} BetBroadcast
             */
            BetBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.BetBroadcast)
                    return object;
                var message = new $root.color.v1.BetBroadcast();
                if (object.betPlayer != null) {
                    if (typeof object.betPlayer !== "object")
                        throw TypeError(".color.v1.BetBroadcast.betPlayer: object expected");
                    message.betPlayer = $root.color.v1.ColorPlayerInfo.fromObject(object.betPlayer);
                }
                if (object.betInfos) {
                    if (!Array.isArray(object.betInfos))
                        throw TypeError(".color.v1.BetBroadcast.betInfos: array expected");
                    message.betInfos = [];
                    for (var i = 0; i < object.betInfos.length; ++i) {
                        if (typeof object.betInfos[i] !== "object")
                            throw TypeError(".color.v1.BetBroadcast.betInfos: object expected");
                        message.betInfos[i] = $root.color.v1.BetInfo.fromObject(object.betInfos[i]);
                    }
                }
                if (object.roundNum != null)
                    message.roundNum = String(object.roundNum);
                return message;
            };

            /**
             * Creates a plain object from a BetBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {color.v1.BetBroadcast} message BetBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BetBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.betInfos = [];
                if (options.defaults) {
                    object.betPlayer = null;
                    object.roundNum = "";
                }
                if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                    object.betPlayer = $root.color.v1.ColorPlayerInfo.toObject(message.betPlayer, options);
                if (message.betInfos && message.betInfos.length) {
                    object.betInfos = [];
                    for (var j = 0; j < message.betInfos.length; ++j)
                        object.betInfos[j] = $root.color.v1.BetInfo.toObject(message.betInfos[j], options);
                }
                if (message.roundNum != null && message.hasOwnProperty("roundNum"))
                    object.roundNum = message.roundNum;
                return object;
            };

            /**
             * Converts this BetBroadcast to JSON.
             * @function toJSON
             * @memberof color.v1.BetBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BetBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BetBroadcast
             * @function getTypeUrl
             * @memberof color.v1.BetBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BetBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.BetBroadcast";
            };

            return BetBroadcast;
        })();

        v1.CancelBetReq = (function() {

            /**
             * Properties of a CancelBetReq.
             * @memberof color.v1
             * @interface ICancelBetReq
             */

            /**
             * Constructs a new CancelBetReq.
             * @memberof color.v1
             * @classdesc Represents a CancelBetReq.
             * @implements ICancelBetReq
             * @constructor
             * @param {color.v1.ICancelBetReq=} [properties] Properties to set
             */
            function CancelBetReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CancelBetReq instance using the specified properties.
             * @function create
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {color.v1.ICancelBetReq=} [properties] Properties to set
             * @returns {color.v1.CancelBetReq} CancelBetReq instance
             */
            CancelBetReq.create = function create(properties) {
                return new CancelBetReq(properties);
            };

            /**
             * Encodes the specified CancelBetReq message. Does not implicitly {@link color.v1.CancelBetReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {color.v1.ICancelBetReq} message CancelBetReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelBetReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CancelBetReq message, length delimited. Does not implicitly {@link color.v1.CancelBetReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {color.v1.ICancelBetReq} message CancelBetReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelBetReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CancelBetReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.CancelBetReq} CancelBetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelBetReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.CancelBetReq();
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
             * Decodes a CancelBetReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.CancelBetReq} CancelBetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelBetReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CancelBetReq message.
             * @function verify
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CancelBetReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CancelBetReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.CancelBetReq} CancelBetReq
             */
            CancelBetReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.CancelBetReq)
                    return object;
                return new $root.color.v1.CancelBetReq();
            };

            /**
             * Creates a plain object from a CancelBetReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {color.v1.CancelBetReq} message CancelBetReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CancelBetReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CancelBetReq to JSON.
             * @function toJSON
             * @memberof color.v1.CancelBetReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CancelBetReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CancelBetReq
             * @function getTypeUrl
             * @memberof color.v1.CancelBetReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CancelBetReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.CancelBetReq";
            };

            return CancelBetReq;
        })();

        v1.CancelBetRes = (function() {

            /**
             * Properties of a CancelBetRes.
             * @memberof color.v1
             * @interface ICancelBetRes
             */

            /**
             * Constructs a new CancelBetRes.
             * @memberof color.v1
             * @classdesc Represents a CancelBetRes.
             * @implements ICancelBetRes
             * @constructor
             * @param {color.v1.ICancelBetRes=} [properties] Properties to set
             */
            function CancelBetRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CancelBetRes instance using the specified properties.
             * @function create
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {color.v1.ICancelBetRes=} [properties] Properties to set
             * @returns {color.v1.CancelBetRes} CancelBetRes instance
             */
            CancelBetRes.create = function create(properties) {
                return new CancelBetRes(properties);
            };

            /**
             * Encodes the specified CancelBetRes message. Does not implicitly {@link color.v1.CancelBetRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {color.v1.ICancelBetRes} message CancelBetRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelBetRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CancelBetRes message, length delimited. Does not implicitly {@link color.v1.CancelBetRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {color.v1.ICancelBetRes} message CancelBetRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelBetRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CancelBetRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.CancelBetRes} CancelBetRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelBetRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.CancelBetRes();
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
             * Decodes a CancelBetRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.CancelBetRes} CancelBetRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelBetRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CancelBetRes message.
             * @function verify
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CancelBetRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CancelBetRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.CancelBetRes} CancelBetRes
             */
            CancelBetRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.CancelBetRes)
                    return object;
                return new $root.color.v1.CancelBetRes();
            };

            /**
             * Creates a plain object from a CancelBetRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {color.v1.CancelBetRes} message CancelBetRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CancelBetRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CancelBetRes to JSON.
             * @function toJSON
             * @memberof color.v1.CancelBetRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CancelBetRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CancelBetRes
             * @function getTypeUrl
             * @memberof color.v1.CancelBetRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CancelBetRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.CancelBetRes";
            };

            return CancelBetRes;
        })();

        v1.CancelBetBroadcast = (function() {

            /**
             * Properties of a CancelBetBroadcast.
             * @memberof color.v1
             * @interface ICancelBetBroadcast
             * @property {color.v1.IColorPlayerInfo|null} [betPlayer] CancelBetBroadcast betPlayer
             * @property {Array.<color.v1.IBetInfo>|null} [betInfos] CancelBetBroadcast betInfos
             */

            /**
             * Constructs a new CancelBetBroadcast.
             * @memberof color.v1
             * @classdesc Represents a CancelBetBroadcast.
             * @implements ICancelBetBroadcast
             * @constructor
             * @param {color.v1.ICancelBetBroadcast=} [properties] Properties to set
             */
            function CancelBetBroadcast(properties) {
                this.betInfos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CancelBetBroadcast betPlayer.
             * @member {color.v1.IColorPlayerInfo|null|undefined} betPlayer
             * @memberof color.v1.CancelBetBroadcast
             * @instance
             */
            CancelBetBroadcast.prototype.betPlayer = null;

            /**
             * CancelBetBroadcast betInfos.
             * @member {Array.<color.v1.IBetInfo>} betInfos
             * @memberof color.v1.CancelBetBroadcast
             * @instance
             */
            CancelBetBroadcast.prototype.betInfos = $util.emptyArray;

            /**
             * Creates a new CancelBetBroadcast instance using the specified properties.
             * @function create
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {color.v1.ICancelBetBroadcast=} [properties] Properties to set
             * @returns {color.v1.CancelBetBroadcast} CancelBetBroadcast instance
             */
            CancelBetBroadcast.create = function create(properties) {
                return new CancelBetBroadcast(properties);
            };

            /**
             * Encodes the specified CancelBetBroadcast message. Does not implicitly {@link color.v1.CancelBetBroadcast.verify|verify} messages.
             * @function encode
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {color.v1.ICancelBetBroadcast} message CancelBetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelBetBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.betPlayer != null && Object.hasOwnProperty.call(message, "betPlayer"))
                    $root.color.v1.ColorPlayerInfo.encode(message.betPlayer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.betInfos != null && message.betInfos.length)
                    for (var i = 0; i < message.betInfos.length; ++i)
                        $root.color.v1.BetInfo.encode(message.betInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CancelBetBroadcast message, length delimited. Does not implicitly {@link color.v1.CancelBetBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {color.v1.ICancelBetBroadcast} message CancelBetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelBetBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CancelBetBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.CancelBetBroadcast} CancelBetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelBetBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.CancelBetBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.betPlayer = $root.color.v1.ColorPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.betInfos && message.betInfos.length))
                                message.betInfos = [];
                            message.betInfos.push($root.color.v1.BetInfo.decode(reader, reader.uint32()));
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
             * Decodes a CancelBetBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.CancelBetBroadcast} CancelBetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelBetBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CancelBetBroadcast message.
             * @function verify
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CancelBetBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.betPlayer != null && message.hasOwnProperty("betPlayer")) {
                    var error = $root.color.v1.ColorPlayerInfo.verify(message.betPlayer);
                    if (error)
                        return "betPlayer." + error;
                }
                if (message.betInfos != null && message.hasOwnProperty("betInfos")) {
                    if (!Array.isArray(message.betInfos))
                        return "betInfos: array expected";
                    for (var i = 0; i < message.betInfos.length; ++i) {
                        var error = $root.color.v1.BetInfo.verify(message.betInfos[i]);
                        if (error)
                            return "betInfos." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a CancelBetBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.CancelBetBroadcast} CancelBetBroadcast
             */
            CancelBetBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.CancelBetBroadcast)
                    return object;
                var message = new $root.color.v1.CancelBetBroadcast();
                if (object.betPlayer != null) {
                    if (typeof object.betPlayer !== "object")
                        throw TypeError(".color.v1.CancelBetBroadcast.betPlayer: object expected");
                    message.betPlayer = $root.color.v1.ColorPlayerInfo.fromObject(object.betPlayer);
                }
                if (object.betInfos) {
                    if (!Array.isArray(object.betInfos))
                        throw TypeError(".color.v1.CancelBetBroadcast.betInfos: array expected");
                    message.betInfos = [];
                    for (var i = 0; i < object.betInfos.length; ++i) {
                        if (typeof object.betInfos[i] !== "object")
                            throw TypeError(".color.v1.CancelBetBroadcast.betInfos: object expected");
                        message.betInfos[i] = $root.color.v1.BetInfo.fromObject(object.betInfos[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a CancelBetBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {color.v1.CancelBetBroadcast} message CancelBetBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CancelBetBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.betInfos = [];
                if (options.defaults)
                    object.betPlayer = null;
                if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                    object.betPlayer = $root.color.v1.ColorPlayerInfo.toObject(message.betPlayer, options);
                if (message.betInfos && message.betInfos.length) {
                    object.betInfos = [];
                    for (var j = 0; j < message.betInfos.length; ++j)
                        object.betInfos[j] = $root.color.v1.BetInfo.toObject(message.betInfos[j], options);
                }
                return object;
            };

            /**
             * Converts this CancelBetBroadcast to JSON.
             * @function toJSON
             * @memberof color.v1.CancelBetBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CancelBetBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CancelBetBroadcast
             * @function getTypeUrl
             * @memberof color.v1.CancelBetBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CancelBetBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.CancelBetBroadcast";
            };

            return CancelBetBroadcast;
        })();

        v1.GetDiceStatsReq = (function() {

            /**
             * Properties of a GetDiceStatsReq.
             * @memberof color.v1
             * @interface IGetDiceStatsReq
             */

            /**
             * Constructs a new GetDiceStatsReq.
             * @memberof color.v1
             * @classdesc Represents a GetDiceStatsReq.
             * @implements IGetDiceStatsReq
             * @constructor
             * @param {color.v1.IGetDiceStatsReq=} [properties] Properties to set
             */
            function GetDiceStatsReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GetDiceStatsReq instance using the specified properties.
             * @function create
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {color.v1.IGetDiceStatsReq=} [properties] Properties to set
             * @returns {color.v1.GetDiceStatsReq} GetDiceStatsReq instance
             */
            GetDiceStatsReq.create = function create(properties) {
                return new GetDiceStatsReq(properties);
            };

            /**
             * Encodes the specified GetDiceStatsReq message. Does not implicitly {@link color.v1.GetDiceStatsReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {color.v1.IGetDiceStatsReq} message GetDiceStatsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetDiceStatsReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GetDiceStatsReq message, length delimited. Does not implicitly {@link color.v1.GetDiceStatsReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {color.v1.IGetDiceStatsReq} message GetDiceStatsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetDiceStatsReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetDiceStatsReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GetDiceStatsReq} GetDiceStatsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetDiceStatsReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GetDiceStatsReq();
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
             * Decodes a GetDiceStatsReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GetDiceStatsReq} GetDiceStatsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetDiceStatsReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetDiceStatsReq message.
             * @function verify
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetDiceStatsReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a GetDiceStatsReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GetDiceStatsReq} GetDiceStatsReq
             */
            GetDiceStatsReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GetDiceStatsReq)
                    return object;
                return new $root.color.v1.GetDiceStatsReq();
            };

            /**
             * Creates a plain object from a GetDiceStatsReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {color.v1.GetDiceStatsReq} message GetDiceStatsReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetDiceStatsReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetDiceStatsReq to JSON.
             * @function toJSON
             * @memberof color.v1.GetDiceStatsReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetDiceStatsReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetDiceStatsReq
             * @function getTypeUrl
             * @memberof color.v1.GetDiceStatsReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetDiceStatsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GetDiceStatsReq";
            };

            return GetDiceStatsReq;
        })();

        v1.DiceResult = (function() {

            /**
             * Properties of a DiceResult.
             * @memberof color.v1
             * @interface IDiceResult
             * @property {Array.<number>|null} [dice] DiceResult dice
             * @property {Object.<string,number>|null} [odds] DiceResult odds
             * @property {number|Long|null} [timestamp] DiceResult timestamp
             */

            /**
             * Constructs a new DiceResult.
             * @memberof color.v1
             * @classdesc Represents a DiceResult.
             * @implements IDiceResult
             * @constructor
             * @param {color.v1.IDiceResult=} [properties] Properties to set
             */
            function DiceResult(properties) {
                this.dice = [];
                this.odds = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiceResult dice.
             * @member {Array.<number>} dice
             * @memberof color.v1.DiceResult
             * @instance
             */
            DiceResult.prototype.dice = $util.emptyArray;

            /**
             * DiceResult odds.
             * @member {Object.<string,number>} odds
             * @memberof color.v1.DiceResult
             * @instance
             */
            DiceResult.prototype.odds = $util.emptyObject;

            /**
             * DiceResult timestamp.
             * @member {number|Long} timestamp
             * @memberof color.v1.DiceResult
             * @instance
             */
            DiceResult.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new DiceResult instance using the specified properties.
             * @function create
             * @memberof color.v1.DiceResult
             * @static
             * @param {color.v1.IDiceResult=} [properties] Properties to set
             * @returns {color.v1.DiceResult} DiceResult instance
             */
            DiceResult.create = function create(properties) {
                return new DiceResult(properties);
            };

            /**
             * Encodes the specified DiceResult message. Does not implicitly {@link color.v1.DiceResult.verify|verify} messages.
             * @function encode
             * @memberof color.v1.DiceResult
             * @static
             * @param {color.v1.IDiceResult} message DiceResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiceResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dice != null && message.dice.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.dice.length; ++i)
                        writer.int32(message.dice[i]);
                    writer.ldelim();
                }
                if (message.odds != null && Object.hasOwnProperty.call(message, "odds"))
                    for (var keys = Object.keys(message.odds), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.odds[keys[i]]).ldelim();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified DiceResult message, length delimited. Does not implicitly {@link color.v1.DiceResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.DiceResult
             * @static
             * @param {color.v1.IDiceResult} message DiceResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiceResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiceResult message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.DiceResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.DiceResult} DiceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiceResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.DiceResult(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.dice && message.dice.length))
                                message.dice = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.dice.push(reader.int32());
                            } else
                                message.dice.push(reader.int32());
                            break;
                        }
                    case 2: {
                            if (message.odds === $util.emptyObject)
                                message.odds = {};
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
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.odds[key] = value;
                            break;
                        }
                    case 3: {
                            message.timestamp = reader.int64();
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
             * Decodes a DiceResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.DiceResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.DiceResult} DiceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiceResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiceResult message.
             * @function verify
             * @memberof color.v1.DiceResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiceResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dice != null && message.hasOwnProperty("dice")) {
                    if (!Array.isArray(message.dice))
                        return "dice: array expected";
                    for (var i = 0; i < message.dice.length; ++i)
                        if (!$util.isInteger(message.dice[i]))
                            return "dice: integer[] expected";
                }
                if (message.odds != null && message.hasOwnProperty("odds")) {
                    if (!$util.isObject(message.odds))
                        return "odds: object expected";
                    var key = Object.keys(message.odds);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "odds: integer key{k:int32} expected";
                        if (!$util.isInteger(message.odds[key[i]]))
                            return "odds: integer{k:int32} expected";
                    }
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a DiceResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.DiceResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.DiceResult} DiceResult
             */
            DiceResult.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.DiceResult)
                    return object;
                var message = new $root.color.v1.DiceResult();
                if (object.dice) {
                    if (!Array.isArray(object.dice))
                        throw TypeError(".color.v1.DiceResult.dice: array expected");
                    message.dice = [];
                    for (var i = 0; i < object.dice.length; ++i)
                        message.dice[i] = object.dice[i] | 0;
                }
                if (object.odds) {
                    if (typeof object.odds !== "object")
                        throw TypeError(".color.v1.DiceResult.odds: object expected");
                    message.odds = {};
                    for (var keys = Object.keys(object.odds), i = 0; i < keys.length; ++i)
                        message.odds[keys[i]] = object.odds[keys[i]] | 0;
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a DiceResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.DiceResult
             * @static
             * @param {color.v1.DiceResult} message DiceResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiceResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.dice = [];
                if (options.objects || options.defaults)
                    object.odds = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                if (message.dice && message.dice.length) {
                    object.dice = [];
                    for (var j = 0; j < message.dice.length; ++j)
                        object.dice[j] = message.dice[j];
                }
                var keys2;
                if (message.odds && (keys2 = Object.keys(message.odds)).length) {
                    object.odds = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.odds[keys2[j]] = message.odds[keys2[j]];
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                return object;
            };

            /**
             * Converts this DiceResult to JSON.
             * @function toJSON
             * @memberof color.v1.DiceResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiceResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DiceResult
             * @function getTypeUrl
             * @memberof color.v1.DiceResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DiceResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.DiceResult";
            };

            return DiceResult;
        })();

        v1.GetDiceStatsRes = (function() {

            /**
             * Properties of a GetDiceStatsRes.
             * @memberof color.v1
             * @interface IGetDiceStatsRes
             * @property {Object.<string,number>|null} [diceProbabilities] GetDiceStatsRes diceProbabilities
             * @property {Array.<color.v1.IDiceResult>|null} [recentResults] GetDiceStatsRes recentResults
             */

            /**
             * Constructs a new GetDiceStatsRes.
             * @memberof color.v1
             * @classdesc Represents a GetDiceStatsRes.
             * @implements IGetDiceStatsRes
             * @constructor
             * @param {color.v1.IGetDiceStatsRes=} [properties] Properties to set
             */
            function GetDiceStatsRes(properties) {
                this.diceProbabilities = {};
                this.recentResults = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetDiceStatsRes diceProbabilities.
             * @member {Object.<string,number>} diceProbabilities
             * @memberof color.v1.GetDiceStatsRes
             * @instance
             */
            GetDiceStatsRes.prototype.diceProbabilities = $util.emptyObject;

            /**
             * GetDiceStatsRes recentResults.
             * @member {Array.<color.v1.IDiceResult>} recentResults
             * @memberof color.v1.GetDiceStatsRes
             * @instance
             */
            GetDiceStatsRes.prototype.recentResults = $util.emptyArray;

            /**
             * Creates a new GetDiceStatsRes instance using the specified properties.
             * @function create
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {color.v1.IGetDiceStatsRes=} [properties] Properties to set
             * @returns {color.v1.GetDiceStatsRes} GetDiceStatsRes instance
             */
            GetDiceStatsRes.create = function create(properties) {
                return new GetDiceStatsRes(properties);
            };

            /**
             * Encodes the specified GetDiceStatsRes message. Does not implicitly {@link color.v1.GetDiceStatsRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {color.v1.IGetDiceStatsRes} message GetDiceStatsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetDiceStatsRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.diceProbabilities != null && Object.hasOwnProperty.call(message, "diceProbabilities"))
                    for (var keys = Object.keys(message.diceProbabilities), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.diceProbabilities[keys[i]]).ldelim();
                if (message.recentResults != null && message.recentResults.length)
                    for (var i = 0; i < message.recentResults.length; ++i)
                        $root.color.v1.DiceResult.encode(message.recentResults[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetDiceStatsRes message, length delimited. Does not implicitly {@link color.v1.GetDiceStatsRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {color.v1.IGetDiceStatsRes} message GetDiceStatsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetDiceStatsRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetDiceStatsRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GetDiceStatsRes} GetDiceStatsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetDiceStatsRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GetDiceStatsRes(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.diceProbabilities === $util.emptyObject)
                                message.diceProbabilities = {};
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
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.diceProbabilities[key] = value;
                            break;
                        }
                    case 2: {
                            if (!(message.recentResults && message.recentResults.length))
                                message.recentResults = [];
                            message.recentResults.push($root.color.v1.DiceResult.decode(reader, reader.uint32()));
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
             * Decodes a GetDiceStatsRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GetDiceStatsRes} GetDiceStatsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetDiceStatsRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetDiceStatsRes message.
             * @function verify
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetDiceStatsRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.diceProbabilities != null && message.hasOwnProperty("diceProbabilities")) {
                    if (!$util.isObject(message.diceProbabilities))
                        return "diceProbabilities: object expected";
                    var key = Object.keys(message.diceProbabilities);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "diceProbabilities: integer key{k:int32} expected";
                        if (!$util.isInteger(message.diceProbabilities[key[i]]))
                            return "diceProbabilities: integer{k:int32} expected";
                    }
                }
                if (message.recentResults != null && message.hasOwnProperty("recentResults")) {
                    if (!Array.isArray(message.recentResults))
                        return "recentResults: array expected";
                    for (var i = 0; i < message.recentResults.length; ++i) {
                        var error = $root.color.v1.DiceResult.verify(message.recentResults[i]);
                        if (error)
                            return "recentResults." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetDiceStatsRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GetDiceStatsRes} GetDiceStatsRes
             */
            GetDiceStatsRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GetDiceStatsRes)
                    return object;
                var message = new $root.color.v1.GetDiceStatsRes();
                if (object.diceProbabilities) {
                    if (typeof object.diceProbabilities !== "object")
                        throw TypeError(".color.v1.GetDiceStatsRes.diceProbabilities: object expected");
                    message.diceProbabilities = {};
                    for (var keys = Object.keys(object.diceProbabilities), i = 0; i < keys.length; ++i)
                        message.diceProbabilities[keys[i]] = object.diceProbabilities[keys[i]] | 0;
                }
                if (object.recentResults) {
                    if (!Array.isArray(object.recentResults))
                        throw TypeError(".color.v1.GetDiceStatsRes.recentResults: array expected");
                    message.recentResults = [];
                    for (var i = 0; i < object.recentResults.length; ++i) {
                        if (typeof object.recentResults[i] !== "object")
                            throw TypeError(".color.v1.GetDiceStatsRes.recentResults: object expected");
                        message.recentResults[i] = $root.color.v1.DiceResult.fromObject(object.recentResults[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetDiceStatsRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {color.v1.GetDiceStatsRes} message GetDiceStatsRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetDiceStatsRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.recentResults = [];
                if (options.objects || options.defaults)
                    object.diceProbabilities = {};
                var keys2;
                if (message.diceProbabilities && (keys2 = Object.keys(message.diceProbabilities)).length) {
                    object.diceProbabilities = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.diceProbabilities[keys2[j]] = message.diceProbabilities[keys2[j]];
                }
                if (message.recentResults && message.recentResults.length) {
                    object.recentResults = [];
                    for (var j = 0; j < message.recentResults.length; ++j)
                        object.recentResults[j] = $root.color.v1.DiceResult.toObject(message.recentResults[j], options);
                }
                return object;
            };

            /**
             * Converts this GetDiceStatsRes to JSON.
             * @function toJSON
             * @memberof color.v1.GetDiceStatsRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetDiceStatsRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetDiceStatsRes
             * @function getTypeUrl
             * @memberof color.v1.GetDiceStatsRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetDiceStatsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GetDiceStatsRes";
            };

            return GetDiceStatsRes;
        })();

        v1.GetColorPlayerHistoryReq = (function() {

            /**
             * Properties of a GetColorPlayerHistoryReq.
             * @memberof color.v1
             * @interface IGetColorPlayerHistoryReq
             * @property {number|Long|null} [startTime] GetColorPlayerHistoryReq startTime
             * @property {number|Long|null} [endTime] GetColorPlayerHistoryReq endTime
             * @property {number|null} [pageSize] GetColorPlayerHistoryReq pageSize
             */

            /**
             * Constructs a new GetColorPlayerHistoryReq.
             * @memberof color.v1
             * @classdesc Represents a GetColorPlayerHistoryReq.
             * @implements IGetColorPlayerHistoryReq
             * @constructor
             * @param {color.v1.IGetColorPlayerHistoryReq=} [properties] Properties to set
             */
            function GetColorPlayerHistoryReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetColorPlayerHistoryReq startTime.
             * @member {number|Long} startTime
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @instance
             */
            GetColorPlayerHistoryReq.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetColorPlayerHistoryReq endTime.
             * @member {number|Long} endTime
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @instance
             */
            GetColorPlayerHistoryReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetColorPlayerHistoryReq pageSize.
             * @member {number} pageSize
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @instance
             */
            GetColorPlayerHistoryReq.prototype.pageSize = 0;

            /**
             * Creates a new GetColorPlayerHistoryReq instance using the specified properties.
             * @function create
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {color.v1.IGetColorPlayerHistoryReq=} [properties] Properties to set
             * @returns {color.v1.GetColorPlayerHistoryReq} GetColorPlayerHistoryReq instance
             */
            GetColorPlayerHistoryReq.create = function create(properties) {
                return new GetColorPlayerHistoryReq(properties);
            };

            /**
             * Encodes the specified GetColorPlayerHistoryReq message. Does not implicitly {@link color.v1.GetColorPlayerHistoryReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {color.v1.IGetColorPlayerHistoryReq} message GetColorPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetColorPlayerHistoryReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTime);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTime);
                if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
                return writer;
            };

            /**
             * Encodes the specified GetColorPlayerHistoryReq message, length delimited. Does not implicitly {@link color.v1.GetColorPlayerHistoryReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {color.v1.IGetColorPlayerHistoryReq} message GetColorPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetColorPlayerHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetColorPlayerHistoryReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GetColorPlayerHistoryReq} GetColorPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetColorPlayerHistoryReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GetColorPlayerHistoryReq();
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
                            message.pageSize = reader.int32();
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
             * Decodes a GetColorPlayerHistoryReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GetColorPlayerHistoryReq} GetColorPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetColorPlayerHistoryReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetColorPlayerHistoryReq message.
             * @function verify
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetColorPlayerHistoryReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                        return "startTime: integer|Long expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                return null;
            };

            /**
             * Creates a GetColorPlayerHistoryReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GetColorPlayerHistoryReq} GetColorPlayerHistoryReq
             */
            GetColorPlayerHistoryReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GetColorPlayerHistoryReq)
                    return object;
                var message = new $root.color.v1.GetColorPlayerHistoryReq();
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
                if (object.pageSize != null)
                    message.pageSize = object.pageSize | 0;
                return message;
            };

            /**
             * Creates a plain object from a GetColorPlayerHistoryReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {color.v1.GetColorPlayerHistoryReq} message GetColorPlayerHistoryReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetColorPlayerHistoryReq.toObject = function toObject(message, options) {
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
                    object.pageSize = 0;
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
                if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this GetColorPlayerHistoryReq to JSON.
             * @function toJSON
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetColorPlayerHistoryReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetColorPlayerHistoryReq
             * @function getTypeUrl
             * @memberof color.v1.GetColorPlayerHistoryReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetColorPlayerHistoryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GetColorPlayerHistoryReq";
            };

            return GetColorPlayerHistoryReq;
        })();

        v1.ColorPlayerHistory = (function() {

            /**
             * Properties of a ColorPlayerHistory.
             * @memberof color.v1
             * @interface IColorPlayerHistory
             * @property {string|null} [gameCode] ColorPlayerHistory gameCode
             * @property {number|Long|null} [endTime] ColorPlayerHistory endTime
             * @property {Array.<number>|null} [diceInfos] ColorPlayerHistory diceInfos
             * @property {Array.<color.v1.IBetInfo>|null} [betInfos] ColorPlayerHistory betInfos
             * @property {number|null} [cost] ColorPlayerHistory cost
             * @property {number|null} [reward] ColorPlayerHistory reward
             * @property {number|null} [result] ColorPlayerHistory result
             * @property {Array.<color.v1.IEcolorBonusPlayerDetail>|null} [ecolorBonusPlayerDetail] ColorPlayerHistory ecolorBonusPlayerDetail
             */

            /**
             * Constructs a new ColorPlayerHistory.
             * @memberof color.v1
             * @classdesc Represents a ColorPlayerHistory.
             * @implements IColorPlayerHistory
             * @constructor
             * @param {color.v1.IColorPlayerHistory=} [properties] Properties to set
             */
            function ColorPlayerHistory(properties) {
                this.diceInfos = [];
                this.betInfos = [];
                this.ecolorBonusPlayerDetail = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ColorPlayerHistory gameCode.
             * @member {string} gameCode
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.gameCode = "";

            /**
             * ColorPlayerHistory endTime.
             * @member {number|Long} endTime
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ColorPlayerHistory diceInfos.
             * @member {Array.<number>} diceInfos
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.diceInfos = $util.emptyArray;

            /**
             * ColorPlayerHistory betInfos.
             * @member {Array.<color.v1.IBetInfo>} betInfos
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.betInfos = $util.emptyArray;

            /**
             * ColorPlayerHistory cost.
             * @member {number} cost
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.cost = 0;

            /**
             * ColorPlayerHistory reward.
             * @member {number} reward
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.reward = 0;

            /**
             * ColorPlayerHistory result.
             * @member {number} result
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.result = 0;

            /**
             * ColorPlayerHistory ecolorBonusPlayerDetail.
             * @member {Array.<color.v1.IEcolorBonusPlayerDetail>} ecolorBonusPlayerDetail
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             */
            ColorPlayerHistory.prototype.ecolorBonusPlayerDetail = $util.emptyArray;

            /**
             * Creates a new ColorPlayerHistory instance using the specified properties.
             * @function create
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {color.v1.IColorPlayerHistory=} [properties] Properties to set
             * @returns {color.v1.ColorPlayerHistory} ColorPlayerHistory instance
             */
            ColorPlayerHistory.create = function create(properties) {
                return new ColorPlayerHistory(properties);
            };

            /**
             * Encodes the specified ColorPlayerHistory message. Does not implicitly {@link color.v1.ColorPlayerHistory.verify|verify} messages.
             * @function encode
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {color.v1.IColorPlayerHistory} message ColorPlayerHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorPlayerHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameCode != null && Object.hasOwnProperty.call(message, "gameCode"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameCode);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTime);
                if (message.diceInfos != null && message.diceInfos.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.diceInfos.length; ++i)
                        writer.int32(message.diceInfos[i]);
                    writer.ldelim();
                }
                if (message.betInfos != null && message.betInfos.length)
                    for (var i = 0; i < message.betInfos.length; ++i)
                        $root.color.v1.BetInfo.encode(message.betInfos[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cost);
                if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.reward);
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.result);
                if (message.ecolorBonusPlayerDetail != null && message.ecolorBonusPlayerDetail.length)
                    for (var i = 0; i < message.ecolorBonusPlayerDetail.length; ++i)
                        $root.color.v1.EcolorBonusPlayerDetail.encode(message.ecolorBonusPlayerDetail[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ColorPlayerHistory message, length delimited. Does not implicitly {@link color.v1.ColorPlayerHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {color.v1.IColorPlayerHistory} message ColorPlayerHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorPlayerHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ColorPlayerHistory message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.ColorPlayerHistory} ColorPlayerHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorPlayerHistory.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.ColorPlayerHistory();
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
                            if (!(message.diceInfos && message.diceInfos.length))
                                message.diceInfos = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.diceInfos.push(reader.int32());
                            } else
                                message.diceInfos.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.betInfos && message.betInfos.length))
                                message.betInfos = [];
                            message.betInfos.push($root.color.v1.BetInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            message.cost = reader.int32();
                            break;
                        }
                    case 6: {
                            message.reward = reader.int32();
                            break;
                        }
                    case 7: {
                            message.result = reader.int32();
                            break;
                        }
                    case 8: {
                            if (!(message.ecolorBonusPlayerDetail && message.ecolorBonusPlayerDetail.length))
                                message.ecolorBonusPlayerDetail = [];
                            message.ecolorBonusPlayerDetail.push($root.color.v1.EcolorBonusPlayerDetail.decode(reader, reader.uint32()));
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
             * Decodes a ColorPlayerHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.ColorPlayerHistory} ColorPlayerHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorPlayerHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ColorPlayerHistory message.
             * @function verify
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ColorPlayerHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    if (!$util.isString(message.gameCode))
                        return "gameCode: string expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.diceInfos != null && message.hasOwnProperty("diceInfos")) {
                    if (!Array.isArray(message.diceInfos))
                        return "diceInfos: array expected";
                    for (var i = 0; i < message.diceInfos.length; ++i)
                        if (!$util.isInteger(message.diceInfos[i]))
                            return "diceInfos: integer[] expected";
                }
                if (message.betInfos != null && message.hasOwnProperty("betInfos")) {
                    if (!Array.isArray(message.betInfos))
                        return "betInfos: array expected";
                    for (var i = 0; i < message.betInfos.length; ++i) {
                        var error = $root.color.v1.BetInfo.verify(message.betInfos[i]);
                        if (error)
                            return "betInfos." + error;
                    }
                }
                if (message.cost != null && message.hasOwnProperty("cost"))
                    if (!$util.isInteger(message.cost))
                        return "cost: integer expected";
                if (message.reward != null && message.hasOwnProperty("reward"))
                    if (!$util.isInteger(message.reward))
                        return "reward: integer expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                if (message.ecolorBonusPlayerDetail != null && message.hasOwnProperty("ecolorBonusPlayerDetail")) {
                    if (!Array.isArray(message.ecolorBonusPlayerDetail))
                        return "ecolorBonusPlayerDetail: array expected";
                    for (var i = 0; i < message.ecolorBonusPlayerDetail.length; ++i) {
                        var error = $root.color.v1.EcolorBonusPlayerDetail.verify(message.ecolorBonusPlayerDetail[i]);
                        if (error)
                            return "ecolorBonusPlayerDetail." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ColorPlayerHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.ColorPlayerHistory} ColorPlayerHistory
             */
            ColorPlayerHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.ColorPlayerHistory)
                    return object;
                var message = new $root.color.v1.ColorPlayerHistory();
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
                if (object.diceInfos) {
                    if (!Array.isArray(object.diceInfos))
                        throw TypeError(".color.v1.ColorPlayerHistory.diceInfos: array expected");
                    message.diceInfos = [];
                    for (var i = 0; i < object.diceInfos.length; ++i)
                        message.diceInfos[i] = object.diceInfos[i] | 0;
                }
                if (object.betInfos) {
                    if (!Array.isArray(object.betInfos))
                        throw TypeError(".color.v1.ColorPlayerHistory.betInfos: array expected");
                    message.betInfos = [];
                    for (var i = 0; i < object.betInfos.length; ++i) {
                        if (typeof object.betInfos[i] !== "object")
                            throw TypeError(".color.v1.ColorPlayerHistory.betInfos: object expected");
                        message.betInfos[i] = $root.color.v1.BetInfo.fromObject(object.betInfos[i]);
                    }
                }
                if (object.cost != null)
                    message.cost = object.cost | 0;
                if (object.reward != null)
                    message.reward = object.reward | 0;
                if (object.result != null)
                    message.result = object.result | 0;
                if (object.ecolorBonusPlayerDetail) {
                    if (!Array.isArray(object.ecolorBonusPlayerDetail))
                        throw TypeError(".color.v1.ColorPlayerHistory.ecolorBonusPlayerDetail: array expected");
                    message.ecolorBonusPlayerDetail = [];
                    for (var i = 0; i < object.ecolorBonusPlayerDetail.length; ++i) {
                        if (typeof object.ecolorBonusPlayerDetail[i] !== "object")
                            throw TypeError(".color.v1.ColorPlayerHistory.ecolorBonusPlayerDetail: object expected");
                        message.ecolorBonusPlayerDetail[i] = $root.color.v1.EcolorBonusPlayerDetail.fromObject(object.ecolorBonusPlayerDetail[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ColorPlayerHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {color.v1.ColorPlayerHistory} message ColorPlayerHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ColorPlayerHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.diceInfos = [];
                    object.betInfos = [];
                    object.ecolorBonusPlayerDetail = [];
                }
                if (options.defaults) {
                    object.gameCode = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endTime = options.longs === String ? "0" : 0;
                    object.cost = 0;
                    object.reward = 0;
                    object.result = 0;
                }
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    object.gameCode = message.gameCode;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (typeof message.endTime === "number")
                        object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                    else
                        object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
                if (message.diceInfos && message.diceInfos.length) {
                    object.diceInfos = [];
                    for (var j = 0; j < message.diceInfos.length; ++j)
                        object.diceInfos[j] = message.diceInfos[j];
                }
                if (message.betInfos && message.betInfos.length) {
                    object.betInfos = [];
                    for (var j = 0; j < message.betInfos.length; ++j)
                        object.betInfos[j] = $root.color.v1.BetInfo.toObject(message.betInfos[j], options);
                }
                if (message.cost != null && message.hasOwnProperty("cost"))
                    object.cost = message.cost;
                if (message.reward != null && message.hasOwnProperty("reward"))
                    object.reward = message.reward;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                if (message.ecolorBonusPlayerDetail && message.ecolorBonusPlayerDetail.length) {
                    object.ecolorBonusPlayerDetail = [];
                    for (var j = 0; j < message.ecolorBonusPlayerDetail.length; ++j)
                        object.ecolorBonusPlayerDetail[j] = $root.color.v1.EcolorBonusPlayerDetail.toObject(message.ecolorBonusPlayerDetail[j], options);
                }
                return object;
            };

            /**
             * Converts this ColorPlayerHistory to JSON.
             * @function toJSON
             * @memberof color.v1.ColorPlayerHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ColorPlayerHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ColorPlayerHistory
             * @function getTypeUrl
             * @memberof color.v1.ColorPlayerHistory
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ColorPlayerHistory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.ColorPlayerHistory";
            };

            return ColorPlayerHistory;
        })();

        v1.EcolorBonusPlayerDetail = (function() {

            /**
             * Properties of an EcolorBonusPlayerDetail.
             * @memberof color.v1
             * @interface IEcolorBonusPlayerDetail
             * @property {number|Long|null} [userId] EcolorBonusPlayerDetail userId
             * @property {number|null} [bonusResult] EcolorBonusPlayerDetail bonusResult
             * @property {number|Long|null} [betAmount] EcolorBonusPlayerDetail betAmount
             * @property {number|Long|null} [payoutAmount] EcolorBonusPlayerDetail payoutAmount
             * @property {number|null} [cardResult] EcolorBonusPlayerDetail cardResult
             */

            /**
             * Constructs a new EcolorBonusPlayerDetail.
             * @memberof color.v1
             * @classdesc Represents an EcolorBonusPlayerDetail.
             * @implements IEcolorBonusPlayerDetail
             * @constructor
             * @param {color.v1.IEcolorBonusPlayerDetail=} [properties] Properties to set
             */
            function EcolorBonusPlayerDetail(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EcolorBonusPlayerDetail userId.
             * @member {number|Long} userId
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @instance
             */
            EcolorBonusPlayerDetail.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * EcolorBonusPlayerDetail bonusResult.
             * @member {number} bonusResult
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @instance
             */
            EcolorBonusPlayerDetail.prototype.bonusResult = 0;

            /**
             * EcolorBonusPlayerDetail betAmount.
             * @member {number|Long} betAmount
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @instance
             */
            EcolorBonusPlayerDetail.prototype.betAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * EcolorBonusPlayerDetail payoutAmount.
             * @member {number|Long} payoutAmount
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @instance
             */
            EcolorBonusPlayerDetail.prototype.payoutAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * EcolorBonusPlayerDetail cardResult.
             * @member {number} cardResult
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @instance
             */
            EcolorBonusPlayerDetail.prototype.cardResult = 0;

            /**
             * Creates a new EcolorBonusPlayerDetail instance using the specified properties.
             * @function create
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {color.v1.IEcolorBonusPlayerDetail=} [properties] Properties to set
             * @returns {color.v1.EcolorBonusPlayerDetail} EcolorBonusPlayerDetail instance
             */
            EcolorBonusPlayerDetail.create = function create(properties) {
                return new EcolorBonusPlayerDetail(properties);
            };

            /**
             * Encodes the specified EcolorBonusPlayerDetail message. Does not implicitly {@link color.v1.EcolorBonusPlayerDetail.verify|verify} messages.
             * @function encode
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {color.v1.IEcolorBonusPlayerDetail} message EcolorBonusPlayerDetail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EcolorBonusPlayerDetail.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.bonusResult != null && Object.hasOwnProperty.call(message, "bonusResult"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bonusResult);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.betAmount);
                if (message.payoutAmount != null && Object.hasOwnProperty.call(message, "payoutAmount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.payoutAmount);
                if (message.cardResult != null && Object.hasOwnProperty.call(message, "cardResult"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cardResult);
                return writer;
            };

            /**
             * Encodes the specified EcolorBonusPlayerDetail message, length delimited. Does not implicitly {@link color.v1.EcolorBonusPlayerDetail.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {color.v1.IEcolorBonusPlayerDetail} message EcolorBonusPlayerDetail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EcolorBonusPlayerDetail.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EcolorBonusPlayerDetail message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.EcolorBonusPlayerDetail} EcolorBonusPlayerDetail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EcolorBonusPlayerDetail.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.EcolorBonusPlayerDetail();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.bonusResult = reader.int32();
                            break;
                        }
                    case 3: {
                            message.betAmount = reader.int64();
                            break;
                        }
                    case 4: {
                            message.payoutAmount = reader.int64();
                            break;
                        }
                    case 5: {
                            message.cardResult = reader.int32();
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
             * Decodes an EcolorBonusPlayerDetail message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.EcolorBonusPlayerDetail} EcolorBonusPlayerDetail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EcolorBonusPlayerDetail.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EcolorBonusPlayerDetail message.
             * @function verify
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EcolorBonusPlayerDetail.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.bonusResult != null && message.hasOwnProperty("bonusResult"))
                    if (!$util.isInteger(message.bonusResult))
                        return "bonusResult: integer expected";
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (!$util.isInteger(message.betAmount) && !(message.betAmount && $util.isInteger(message.betAmount.low) && $util.isInteger(message.betAmount.high)))
                        return "betAmount: integer|Long expected";
                if (message.payoutAmount != null && message.hasOwnProperty("payoutAmount"))
                    if (!$util.isInteger(message.payoutAmount) && !(message.payoutAmount && $util.isInteger(message.payoutAmount.low) && $util.isInteger(message.payoutAmount.high)))
                        return "payoutAmount: integer|Long expected";
                if (message.cardResult != null && message.hasOwnProperty("cardResult"))
                    if (!$util.isInteger(message.cardResult))
                        return "cardResult: integer expected";
                return null;
            };

            /**
             * Creates an EcolorBonusPlayerDetail message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.EcolorBonusPlayerDetail} EcolorBonusPlayerDetail
             */
            EcolorBonusPlayerDetail.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.EcolorBonusPlayerDetail)
                    return object;
                var message = new $root.color.v1.EcolorBonusPlayerDetail();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.bonusResult != null)
                    message.bonusResult = object.bonusResult | 0;
                if (object.betAmount != null)
                    if ($util.Long)
                        (message.betAmount = $util.Long.fromValue(object.betAmount)).unsigned = false;
                    else if (typeof object.betAmount === "string")
                        message.betAmount = parseInt(object.betAmount, 10);
                    else if (typeof object.betAmount === "number")
                        message.betAmount = object.betAmount;
                    else if (typeof object.betAmount === "object")
                        message.betAmount = new $util.LongBits(object.betAmount.low >>> 0, object.betAmount.high >>> 0).toNumber();
                if (object.payoutAmount != null)
                    if ($util.Long)
                        (message.payoutAmount = $util.Long.fromValue(object.payoutAmount)).unsigned = false;
                    else if (typeof object.payoutAmount === "string")
                        message.payoutAmount = parseInt(object.payoutAmount, 10);
                    else if (typeof object.payoutAmount === "number")
                        message.payoutAmount = object.payoutAmount;
                    else if (typeof object.payoutAmount === "object")
                        message.payoutAmount = new $util.LongBits(object.payoutAmount.low >>> 0, object.payoutAmount.high >>> 0).toNumber();
                if (object.cardResult != null)
                    message.cardResult = object.cardResult | 0;
                return message;
            };

            /**
             * Creates a plain object from an EcolorBonusPlayerDetail message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {color.v1.EcolorBonusPlayerDetail} message EcolorBonusPlayerDetail
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EcolorBonusPlayerDetail.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.bonusResult = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.betAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.betAmount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.payoutAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.payoutAmount = options.longs === String ? "0" : 0;
                    object.cardResult = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.bonusResult != null && message.hasOwnProperty("bonusResult"))
                    object.bonusResult = message.bonusResult;
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (typeof message.betAmount === "number")
                        object.betAmount = options.longs === String ? String(message.betAmount) : message.betAmount;
                    else
                        object.betAmount = options.longs === String ? $util.Long.prototype.toString.call(message.betAmount) : options.longs === Number ? new $util.LongBits(message.betAmount.low >>> 0, message.betAmount.high >>> 0).toNumber() : message.betAmount;
                if (message.payoutAmount != null && message.hasOwnProperty("payoutAmount"))
                    if (typeof message.payoutAmount === "number")
                        object.payoutAmount = options.longs === String ? String(message.payoutAmount) : message.payoutAmount;
                    else
                        object.payoutAmount = options.longs === String ? $util.Long.prototype.toString.call(message.payoutAmount) : options.longs === Number ? new $util.LongBits(message.payoutAmount.low >>> 0, message.payoutAmount.high >>> 0).toNumber() : message.payoutAmount;
                if (message.cardResult != null && message.hasOwnProperty("cardResult"))
                    object.cardResult = message.cardResult;
                return object;
            };

            /**
             * Converts this EcolorBonusPlayerDetail to JSON.
             * @function toJSON
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EcolorBonusPlayerDetail.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EcolorBonusPlayerDetail
             * @function getTypeUrl
             * @memberof color.v1.EcolorBonusPlayerDetail
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EcolorBonusPlayerDetail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.EcolorBonusPlayerDetail";
            };

            return EcolorBonusPlayerDetail;
        })();

        v1.GetColorPlayerHistoryRes = (function() {

            /**
             * Properties of a GetColorPlayerHistoryRes.
             * @memberof color.v1
             * @interface IGetColorPlayerHistoryRes
             * @property {Array.<color.v1.IColorPlayerHistory>|null} [colorPlayerHistory] GetColorPlayerHistoryRes colorPlayerHistory
             */

            /**
             * Constructs a new GetColorPlayerHistoryRes.
             * @memberof color.v1
             * @classdesc Represents a GetColorPlayerHistoryRes.
             * @implements IGetColorPlayerHistoryRes
             * @constructor
             * @param {color.v1.IGetColorPlayerHistoryRes=} [properties] Properties to set
             */
            function GetColorPlayerHistoryRes(properties) {
                this.colorPlayerHistory = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetColorPlayerHistoryRes colorPlayerHistory.
             * @member {Array.<color.v1.IColorPlayerHistory>} colorPlayerHistory
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @instance
             */
            GetColorPlayerHistoryRes.prototype.colorPlayerHistory = $util.emptyArray;

            /**
             * Creates a new GetColorPlayerHistoryRes instance using the specified properties.
             * @function create
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {color.v1.IGetColorPlayerHistoryRes=} [properties] Properties to set
             * @returns {color.v1.GetColorPlayerHistoryRes} GetColorPlayerHistoryRes instance
             */
            GetColorPlayerHistoryRes.create = function create(properties) {
                return new GetColorPlayerHistoryRes(properties);
            };

            /**
             * Encodes the specified GetColorPlayerHistoryRes message. Does not implicitly {@link color.v1.GetColorPlayerHistoryRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {color.v1.IGetColorPlayerHistoryRes} message GetColorPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetColorPlayerHistoryRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.colorPlayerHistory != null && message.colorPlayerHistory.length)
                    for (var i = 0; i < message.colorPlayerHistory.length; ++i)
                        $root.color.v1.ColorPlayerHistory.encode(message.colorPlayerHistory[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetColorPlayerHistoryRes message, length delimited. Does not implicitly {@link color.v1.GetColorPlayerHistoryRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {color.v1.IGetColorPlayerHistoryRes} message GetColorPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetColorPlayerHistoryRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetColorPlayerHistoryRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GetColorPlayerHistoryRes} GetColorPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetColorPlayerHistoryRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GetColorPlayerHistoryRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.colorPlayerHistory && message.colorPlayerHistory.length))
                                message.colorPlayerHistory = [];
                            message.colorPlayerHistory.push($root.color.v1.ColorPlayerHistory.decode(reader, reader.uint32()));
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
             * Decodes a GetColorPlayerHistoryRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GetColorPlayerHistoryRes} GetColorPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetColorPlayerHistoryRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetColorPlayerHistoryRes message.
             * @function verify
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetColorPlayerHistoryRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.colorPlayerHistory != null && message.hasOwnProperty("colorPlayerHistory")) {
                    if (!Array.isArray(message.colorPlayerHistory))
                        return "colorPlayerHistory: array expected";
                    for (var i = 0; i < message.colorPlayerHistory.length; ++i) {
                        var error = $root.color.v1.ColorPlayerHistory.verify(message.colorPlayerHistory[i]);
                        if (error)
                            return "colorPlayerHistory." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetColorPlayerHistoryRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GetColorPlayerHistoryRes} GetColorPlayerHistoryRes
             */
            GetColorPlayerHistoryRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GetColorPlayerHistoryRes)
                    return object;
                var message = new $root.color.v1.GetColorPlayerHistoryRes();
                if (object.colorPlayerHistory) {
                    if (!Array.isArray(object.colorPlayerHistory))
                        throw TypeError(".color.v1.GetColorPlayerHistoryRes.colorPlayerHistory: array expected");
                    message.colorPlayerHistory = [];
                    for (var i = 0; i < object.colorPlayerHistory.length; ++i) {
                        if (typeof object.colorPlayerHistory[i] !== "object")
                            throw TypeError(".color.v1.GetColorPlayerHistoryRes.colorPlayerHistory: object expected");
                        message.colorPlayerHistory[i] = $root.color.v1.ColorPlayerHistory.fromObject(object.colorPlayerHistory[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetColorPlayerHistoryRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {color.v1.GetColorPlayerHistoryRes} message GetColorPlayerHistoryRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetColorPlayerHistoryRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.colorPlayerHistory = [];
                if (message.colorPlayerHistory && message.colorPlayerHistory.length) {
                    object.colorPlayerHistory = [];
                    for (var j = 0; j < message.colorPlayerHistory.length; ++j)
                        object.colorPlayerHistory[j] = $root.color.v1.ColorPlayerHistory.toObject(message.colorPlayerHistory[j], options);
                }
                return object;
            };

            /**
             * Converts this GetColorPlayerHistoryRes to JSON.
             * @function toJSON
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetColorPlayerHistoryRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetColorPlayerHistoryRes
             * @function getTypeUrl
             * @memberof color.v1.GetColorPlayerHistoryRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetColorPlayerHistoryRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GetColorPlayerHistoryRes";
            };

            return GetColorPlayerHistoryRes;
        })();

        v1.GetWinnerDoubleUpBonusInfoReq = (function() {

            /**
             * Properties of a GetWinnerDoubleUpBonusInfoReq.
             * @memberof color.v1
             * @interface IGetWinnerDoubleUpBonusInfoReq
             */

            /**
             * Constructs a new GetWinnerDoubleUpBonusInfoReq.
             * @memberof color.v1
             * @classdesc Represents a GetWinnerDoubleUpBonusInfoReq.
             * @implements IGetWinnerDoubleUpBonusInfoReq
             * @constructor
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoReq=} [properties] Properties to set
             */
            function GetWinnerDoubleUpBonusInfoReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GetWinnerDoubleUpBonusInfoReq instance using the specified properties.
             * @function create
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoReq=} [properties] Properties to set
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoReq} GetWinnerDoubleUpBonusInfoReq instance
             */
            GetWinnerDoubleUpBonusInfoReq.create = function create(properties) {
                return new GetWinnerDoubleUpBonusInfoReq(properties);
            };

            /**
             * Encodes the specified GetWinnerDoubleUpBonusInfoReq message. Does not implicitly {@link color.v1.GetWinnerDoubleUpBonusInfoReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoReq} message GetWinnerDoubleUpBonusInfoReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetWinnerDoubleUpBonusInfoReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GetWinnerDoubleUpBonusInfoReq message, length delimited. Does not implicitly {@link color.v1.GetWinnerDoubleUpBonusInfoReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoReq} message GetWinnerDoubleUpBonusInfoReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetWinnerDoubleUpBonusInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetWinnerDoubleUpBonusInfoReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoReq} GetWinnerDoubleUpBonusInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetWinnerDoubleUpBonusInfoReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GetWinnerDoubleUpBonusInfoReq();
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
             * Decodes a GetWinnerDoubleUpBonusInfoReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoReq} GetWinnerDoubleUpBonusInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetWinnerDoubleUpBonusInfoReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetWinnerDoubleUpBonusInfoReq message.
             * @function verify
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetWinnerDoubleUpBonusInfoReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a GetWinnerDoubleUpBonusInfoReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoReq} GetWinnerDoubleUpBonusInfoReq
             */
            GetWinnerDoubleUpBonusInfoReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GetWinnerDoubleUpBonusInfoReq)
                    return object;
                return new $root.color.v1.GetWinnerDoubleUpBonusInfoReq();
            };

            /**
             * Creates a plain object from a GetWinnerDoubleUpBonusInfoReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {color.v1.GetWinnerDoubleUpBonusInfoReq} message GetWinnerDoubleUpBonusInfoReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetWinnerDoubleUpBonusInfoReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetWinnerDoubleUpBonusInfoReq to JSON.
             * @function toJSON
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetWinnerDoubleUpBonusInfoReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetWinnerDoubleUpBonusInfoReq
             * @function getTypeUrl
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetWinnerDoubleUpBonusInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GetWinnerDoubleUpBonusInfoReq";
            };

            return GetWinnerDoubleUpBonusInfoReq;
        })();

        v1.GetWinnerDoubleUpBonusInfoRes = (function() {

            /**
             * Properties of a GetWinnerDoubleUpBonusInfoRes.
             * @memberof color.v1
             * @interface IGetWinnerDoubleUpBonusInfoRes
             * @property {number|Long|null} [betAmount] GetWinnerDoubleUpBonusInfoRes betAmount
             * @property {number|Long|null} [payOutAmount] GetWinnerDoubleUpBonusInfoRes payOutAmount
             * @property {number|Long|null} [doubleUpBonusWinAmount] GetWinnerDoubleUpBonusInfoRes doubleUpBonusWinAmount
             */

            /**
             * Constructs a new GetWinnerDoubleUpBonusInfoRes.
             * @memberof color.v1
             * @classdesc Represents a GetWinnerDoubleUpBonusInfoRes.
             * @implements IGetWinnerDoubleUpBonusInfoRes
             * @constructor
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoRes=} [properties] Properties to set
             */
            function GetWinnerDoubleUpBonusInfoRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetWinnerDoubleUpBonusInfoRes betAmount.
             * @member {number|Long} betAmount
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @instance
             */
            GetWinnerDoubleUpBonusInfoRes.prototype.betAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetWinnerDoubleUpBonusInfoRes payOutAmount.
             * @member {number|Long} payOutAmount
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @instance
             */
            GetWinnerDoubleUpBonusInfoRes.prototype.payOutAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetWinnerDoubleUpBonusInfoRes doubleUpBonusWinAmount.
             * @member {number|Long} doubleUpBonusWinAmount
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @instance
             */
            GetWinnerDoubleUpBonusInfoRes.prototype.doubleUpBonusWinAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GetWinnerDoubleUpBonusInfoRes instance using the specified properties.
             * @function create
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoRes=} [properties] Properties to set
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoRes} GetWinnerDoubleUpBonusInfoRes instance
             */
            GetWinnerDoubleUpBonusInfoRes.create = function create(properties) {
                return new GetWinnerDoubleUpBonusInfoRes(properties);
            };

            /**
             * Encodes the specified GetWinnerDoubleUpBonusInfoRes message. Does not implicitly {@link color.v1.GetWinnerDoubleUpBonusInfoRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoRes} message GetWinnerDoubleUpBonusInfoRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetWinnerDoubleUpBonusInfoRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.betAmount);
                if (message.payOutAmount != null && Object.hasOwnProperty.call(message, "payOutAmount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.payOutAmount);
                if (message.doubleUpBonusWinAmount != null && Object.hasOwnProperty.call(message, "doubleUpBonusWinAmount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.doubleUpBonusWinAmount);
                return writer;
            };

            /**
             * Encodes the specified GetWinnerDoubleUpBonusInfoRes message, length delimited. Does not implicitly {@link color.v1.GetWinnerDoubleUpBonusInfoRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {color.v1.IGetWinnerDoubleUpBonusInfoRes} message GetWinnerDoubleUpBonusInfoRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetWinnerDoubleUpBonusInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetWinnerDoubleUpBonusInfoRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoRes} GetWinnerDoubleUpBonusInfoRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetWinnerDoubleUpBonusInfoRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.GetWinnerDoubleUpBonusInfoRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.betAmount = reader.int64();
                            break;
                        }
                    case 2: {
                            message.payOutAmount = reader.int64();
                            break;
                        }
                    case 3: {
                            message.doubleUpBonusWinAmount = reader.int64();
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
             * Decodes a GetWinnerDoubleUpBonusInfoRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoRes} GetWinnerDoubleUpBonusInfoRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetWinnerDoubleUpBonusInfoRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetWinnerDoubleUpBonusInfoRes message.
             * @function verify
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetWinnerDoubleUpBonusInfoRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (!$util.isInteger(message.betAmount) && !(message.betAmount && $util.isInteger(message.betAmount.low) && $util.isInteger(message.betAmount.high)))
                        return "betAmount: integer|Long expected";
                if (message.payOutAmount != null && message.hasOwnProperty("payOutAmount"))
                    if (!$util.isInteger(message.payOutAmount) && !(message.payOutAmount && $util.isInteger(message.payOutAmount.low) && $util.isInteger(message.payOutAmount.high)))
                        return "payOutAmount: integer|Long expected";
                if (message.doubleUpBonusWinAmount != null && message.hasOwnProperty("doubleUpBonusWinAmount"))
                    if (!$util.isInteger(message.doubleUpBonusWinAmount) && !(message.doubleUpBonusWinAmount && $util.isInteger(message.doubleUpBonusWinAmount.low) && $util.isInteger(message.doubleUpBonusWinAmount.high)))
                        return "doubleUpBonusWinAmount: integer|Long expected";
                return null;
            };

            /**
             * Creates a GetWinnerDoubleUpBonusInfoRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.GetWinnerDoubleUpBonusInfoRes} GetWinnerDoubleUpBonusInfoRes
             */
            GetWinnerDoubleUpBonusInfoRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.GetWinnerDoubleUpBonusInfoRes)
                    return object;
                var message = new $root.color.v1.GetWinnerDoubleUpBonusInfoRes();
                if (object.betAmount != null)
                    if ($util.Long)
                        (message.betAmount = $util.Long.fromValue(object.betAmount)).unsigned = false;
                    else if (typeof object.betAmount === "string")
                        message.betAmount = parseInt(object.betAmount, 10);
                    else if (typeof object.betAmount === "number")
                        message.betAmount = object.betAmount;
                    else if (typeof object.betAmount === "object")
                        message.betAmount = new $util.LongBits(object.betAmount.low >>> 0, object.betAmount.high >>> 0).toNumber();
                if (object.payOutAmount != null)
                    if ($util.Long)
                        (message.payOutAmount = $util.Long.fromValue(object.payOutAmount)).unsigned = false;
                    else if (typeof object.payOutAmount === "string")
                        message.payOutAmount = parseInt(object.payOutAmount, 10);
                    else if (typeof object.payOutAmount === "number")
                        message.payOutAmount = object.payOutAmount;
                    else if (typeof object.payOutAmount === "object")
                        message.payOutAmount = new $util.LongBits(object.payOutAmount.low >>> 0, object.payOutAmount.high >>> 0).toNumber();
                if (object.doubleUpBonusWinAmount != null)
                    if ($util.Long)
                        (message.doubleUpBonusWinAmount = $util.Long.fromValue(object.doubleUpBonusWinAmount)).unsigned = false;
                    else if (typeof object.doubleUpBonusWinAmount === "string")
                        message.doubleUpBonusWinAmount = parseInt(object.doubleUpBonusWinAmount, 10);
                    else if (typeof object.doubleUpBonusWinAmount === "number")
                        message.doubleUpBonusWinAmount = object.doubleUpBonusWinAmount;
                    else if (typeof object.doubleUpBonusWinAmount === "object")
                        message.doubleUpBonusWinAmount = new $util.LongBits(object.doubleUpBonusWinAmount.low >>> 0, object.doubleUpBonusWinAmount.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a GetWinnerDoubleUpBonusInfoRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {color.v1.GetWinnerDoubleUpBonusInfoRes} message GetWinnerDoubleUpBonusInfoRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetWinnerDoubleUpBonusInfoRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.betAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.betAmount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.payOutAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.payOutAmount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.doubleUpBonusWinAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.doubleUpBonusWinAmount = options.longs === String ? "0" : 0;
                }
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (typeof message.betAmount === "number")
                        object.betAmount = options.longs === String ? String(message.betAmount) : message.betAmount;
                    else
                        object.betAmount = options.longs === String ? $util.Long.prototype.toString.call(message.betAmount) : options.longs === Number ? new $util.LongBits(message.betAmount.low >>> 0, message.betAmount.high >>> 0).toNumber() : message.betAmount;
                if (message.payOutAmount != null && message.hasOwnProperty("payOutAmount"))
                    if (typeof message.payOutAmount === "number")
                        object.payOutAmount = options.longs === String ? String(message.payOutAmount) : message.payOutAmount;
                    else
                        object.payOutAmount = options.longs === String ? $util.Long.prototype.toString.call(message.payOutAmount) : options.longs === Number ? new $util.LongBits(message.payOutAmount.low >>> 0, message.payOutAmount.high >>> 0).toNumber() : message.payOutAmount;
                if (message.doubleUpBonusWinAmount != null && message.hasOwnProperty("doubleUpBonusWinAmount"))
                    if (typeof message.doubleUpBonusWinAmount === "number")
                        object.doubleUpBonusWinAmount = options.longs === String ? String(message.doubleUpBonusWinAmount) : message.doubleUpBonusWinAmount;
                    else
                        object.doubleUpBonusWinAmount = options.longs === String ? $util.Long.prototype.toString.call(message.doubleUpBonusWinAmount) : options.longs === Number ? new $util.LongBits(message.doubleUpBonusWinAmount.low >>> 0, message.doubleUpBonusWinAmount.high >>> 0).toNumber() : message.doubleUpBonusWinAmount;
                return object;
            };

            /**
             * Converts this GetWinnerDoubleUpBonusInfoRes to JSON.
             * @function toJSON
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetWinnerDoubleUpBonusInfoRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetWinnerDoubleUpBonusInfoRes
             * @function getTypeUrl
             * @memberof color.v1.GetWinnerDoubleUpBonusInfoRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetWinnerDoubleUpBonusInfoRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.GetWinnerDoubleUpBonusInfoRes";
            };

            return GetWinnerDoubleUpBonusInfoRes;
        })();

        v1.PlayDoubleUpBonusReq = (function() {

            /**
             * Properties of a PlayDoubleUpBonusReq.
             * @memberof color.v1
             * @interface IPlayDoubleUpBonusReq
             * @property {number|null} [cardColor] PlayDoubleUpBonusReq cardColor
             */

            /**
             * Constructs a new PlayDoubleUpBonusReq.
             * @memberof color.v1
             * @classdesc Represents a PlayDoubleUpBonusReq.
             * @implements IPlayDoubleUpBonusReq
             * @constructor
             * @param {color.v1.IPlayDoubleUpBonusReq=} [properties] Properties to set
             */
            function PlayDoubleUpBonusReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayDoubleUpBonusReq cardColor.
             * @member {number} cardColor
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @instance
             */
            PlayDoubleUpBonusReq.prototype.cardColor = 0;

            /**
             * Creates a new PlayDoubleUpBonusReq instance using the specified properties.
             * @function create
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {color.v1.IPlayDoubleUpBonusReq=} [properties] Properties to set
             * @returns {color.v1.PlayDoubleUpBonusReq} PlayDoubleUpBonusReq instance
             */
            PlayDoubleUpBonusReq.create = function create(properties) {
                return new PlayDoubleUpBonusReq(properties);
            };

            /**
             * Encodes the specified PlayDoubleUpBonusReq message. Does not implicitly {@link color.v1.PlayDoubleUpBonusReq.verify|verify} messages.
             * @function encode
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {color.v1.IPlayDoubleUpBonusReq} message PlayDoubleUpBonusReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayDoubleUpBonusReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cardColor != null && Object.hasOwnProperty.call(message, "cardColor"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardColor);
                return writer;
            };

            /**
             * Encodes the specified PlayDoubleUpBonusReq message, length delimited. Does not implicitly {@link color.v1.PlayDoubleUpBonusReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {color.v1.IPlayDoubleUpBonusReq} message PlayDoubleUpBonusReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayDoubleUpBonusReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayDoubleUpBonusReq message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.PlayDoubleUpBonusReq} PlayDoubleUpBonusReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayDoubleUpBonusReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.PlayDoubleUpBonusReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cardColor = reader.int32();
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
             * Decodes a PlayDoubleUpBonusReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.PlayDoubleUpBonusReq} PlayDoubleUpBonusReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayDoubleUpBonusReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayDoubleUpBonusReq message.
             * @function verify
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayDoubleUpBonusReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cardColor != null && message.hasOwnProperty("cardColor"))
                    if (!$util.isInteger(message.cardColor))
                        return "cardColor: integer expected";
                return null;
            };

            /**
             * Creates a PlayDoubleUpBonusReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.PlayDoubleUpBonusReq} PlayDoubleUpBonusReq
             */
            PlayDoubleUpBonusReq.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.PlayDoubleUpBonusReq)
                    return object;
                var message = new $root.color.v1.PlayDoubleUpBonusReq();
                if (object.cardColor != null)
                    message.cardColor = object.cardColor | 0;
                return message;
            };

            /**
             * Creates a plain object from a PlayDoubleUpBonusReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {color.v1.PlayDoubleUpBonusReq} message PlayDoubleUpBonusReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayDoubleUpBonusReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.cardColor = 0;
                if (message.cardColor != null && message.hasOwnProperty("cardColor"))
                    object.cardColor = message.cardColor;
                return object;
            };

            /**
             * Converts this PlayDoubleUpBonusReq to JSON.
             * @function toJSON
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayDoubleUpBonusReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayDoubleUpBonusReq
             * @function getTypeUrl
             * @memberof color.v1.PlayDoubleUpBonusReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayDoubleUpBonusReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.PlayDoubleUpBonusReq";
            };

            return PlayDoubleUpBonusReq;
        })();

        v1.PlayDoubleUpBonusRes = (function() {

            /**
             * Properties of a PlayDoubleUpBonusRes.
             * @memberof color.v1
             * @interface IPlayDoubleUpBonusRes
             * @property {number|null} [result] PlayDoubleUpBonusRes result
             * @property {number|null} [card] PlayDoubleUpBonusRes card
             * @property {number|Long|null} [betAmount] PlayDoubleUpBonusRes betAmount
             * @property {number|Long|null} [payOutAmount] PlayDoubleUpBonusRes payOutAmount
             * @property {number|Long|null} [doubleUpBonusWinAmount] PlayDoubleUpBonusRes doubleUpBonusWinAmount
             */

            /**
             * Constructs a new PlayDoubleUpBonusRes.
             * @memberof color.v1
             * @classdesc Represents a PlayDoubleUpBonusRes.
             * @implements IPlayDoubleUpBonusRes
             * @constructor
             * @param {color.v1.IPlayDoubleUpBonusRes=} [properties] Properties to set
             */
            function PlayDoubleUpBonusRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayDoubleUpBonusRes result.
             * @member {number} result
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @instance
             */
            PlayDoubleUpBonusRes.prototype.result = 0;

            /**
             * PlayDoubleUpBonusRes card.
             * @member {number} card
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @instance
             */
            PlayDoubleUpBonusRes.prototype.card = 0;

            /**
             * PlayDoubleUpBonusRes betAmount.
             * @member {number|Long} betAmount
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @instance
             */
            PlayDoubleUpBonusRes.prototype.betAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayDoubleUpBonusRes payOutAmount.
             * @member {number|Long} payOutAmount
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @instance
             */
            PlayDoubleUpBonusRes.prototype.payOutAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayDoubleUpBonusRes doubleUpBonusWinAmount.
             * @member {number|Long} doubleUpBonusWinAmount
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @instance
             */
            PlayDoubleUpBonusRes.prototype.doubleUpBonusWinAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PlayDoubleUpBonusRes instance using the specified properties.
             * @function create
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {color.v1.IPlayDoubleUpBonusRes=} [properties] Properties to set
             * @returns {color.v1.PlayDoubleUpBonusRes} PlayDoubleUpBonusRes instance
             */
            PlayDoubleUpBonusRes.create = function create(properties) {
                return new PlayDoubleUpBonusRes(properties);
            };

            /**
             * Encodes the specified PlayDoubleUpBonusRes message. Does not implicitly {@link color.v1.PlayDoubleUpBonusRes.verify|verify} messages.
             * @function encode
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {color.v1.IPlayDoubleUpBonusRes} message PlayDoubleUpBonusRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayDoubleUpBonusRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.card);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.betAmount);
                if (message.payOutAmount != null && Object.hasOwnProperty.call(message, "payOutAmount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.payOutAmount);
                if (message.doubleUpBonusWinAmount != null && Object.hasOwnProperty.call(message, "doubleUpBonusWinAmount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.doubleUpBonusWinAmount);
                return writer;
            };

            /**
             * Encodes the specified PlayDoubleUpBonusRes message, length delimited. Does not implicitly {@link color.v1.PlayDoubleUpBonusRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {color.v1.IPlayDoubleUpBonusRes} message PlayDoubleUpBonusRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayDoubleUpBonusRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayDoubleUpBonusRes message from the specified reader or buffer.
             * @function decode
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {color.v1.PlayDoubleUpBonusRes} PlayDoubleUpBonusRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayDoubleUpBonusRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.color.v1.PlayDoubleUpBonusRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.result = reader.int32();
                            break;
                        }
                    case 2: {
                            message.card = reader.int32();
                            break;
                        }
                    case 3: {
                            message.betAmount = reader.int64();
                            break;
                        }
                    case 4: {
                            message.payOutAmount = reader.int64();
                            break;
                        }
                    case 5: {
                            message.doubleUpBonusWinAmount = reader.int64();
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
             * Decodes a PlayDoubleUpBonusRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {color.v1.PlayDoubleUpBonusRes} PlayDoubleUpBonusRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayDoubleUpBonusRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayDoubleUpBonusRes message.
             * @function verify
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayDoubleUpBonusRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                if (message.card != null && message.hasOwnProperty("card"))
                    if (!$util.isInteger(message.card))
                        return "card: integer expected";
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (!$util.isInteger(message.betAmount) && !(message.betAmount && $util.isInteger(message.betAmount.low) && $util.isInteger(message.betAmount.high)))
                        return "betAmount: integer|Long expected";
                if (message.payOutAmount != null && message.hasOwnProperty("payOutAmount"))
                    if (!$util.isInteger(message.payOutAmount) && !(message.payOutAmount && $util.isInteger(message.payOutAmount.low) && $util.isInteger(message.payOutAmount.high)))
                        return "payOutAmount: integer|Long expected";
                if (message.doubleUpBonusWinAmount != null && message.hasOwnProperty("doubleUpBonusWinAmount"))
                    if (!$util.isInteger(message.doubleUpBonusWinAmount) && !(message.doubleUpBonusWinAmount && $util.isInteger(message.doubleUpBonusWinAmount.low) && $util.isInteger(message.doubleUpBonusWinAmount.high)))
                        return "doubleUpBonusWinAmount: integer|Long expected";
                return null;
            };

            /**
             * Creates a PlayDoubleUpBonusRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {color.v1.PlayDoubleUpBonusRes} PlayDoubleUpBonusRes
             */
            PlayDoubleUpBonusRes.fromObject = function fromObject(object) {
                if (object instanceof $root.color.v1.PlayDoubleUpBonusRes)
                    return object;
                var message = new $root.color.v1.PlayDoubleUpBonusRes();
                if (object.result != null)
                    message.result = object.result | 0;
                if (object.card != null)
                    message.card = object.card | 0;
                if (object.betAmount != null)
                    if ($util.Long)
                        (message.betAmount = $util.Long.fromValue(object.betAmount)).unsigned = false;
                    else if (typeof object.betAmount === "string")
                        message.betAmount = parseInt(object.betAmount, 10);
                    else if (typeof object.betAmount === "number")
                        message.betAmount = object.betAmount;
                    else if (typeof object.betAmount === "object")
                        message.betAmount = new $util.LongBits(object.betAmount.low >>> 0, object.betAmount.high >>> 0).toNumber();
                if (object.payOutAmount != null)
                    if ($util.Long)
                        (message.payOutAmount = $util.Long.fromValue(object.payOutAmount)).unsigned = false;
                    else if (typeof object.payOutAmount === "string")
                        message.payOutAmount = parseInt(object.payOutAmount, 10);
                    else if (typeof object.payOutAmount === "number")
                        message.payOutAmount = object.payOutAmount;
                    else if (typeof object.payOutAmount === "object")
                        message.payOutAmount = new $util.LongBits(object.payOutAmount.low >>> 0, object.payOutAmount.high >>> 0).toNumber();
                if (object.doubleUpBonusWinAmount != null)
                    if ($util.Long)
                        (message.doubleUpBonusWinAmount = $util.Long.fromValue(object.doubleUpBonusWinAmount)).unsigned = false;
                    else if (typeof object.doubleUpBonusWinAmount === "string")
                        message.doubleUpBonusWinAmount = parseInt(object.doubleUpBonusWinAmount, 10);
                    else if (typeof object.doubleUpBonusWinAmount === "number")
                        message.doubleUpBonusWinAmount = object.doubleUpBonusWinAmount;
                    else if (typeof object.doubleUpBonusWinAmount === "object")
                        message.doubleUpBonusWinAmount = new $util.LongBits(object.doubleUpBonusWinAmount.low >>> 0, object.doubleUpBonusWinAmount.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PlayDoubleUpBonusRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {color.v1.PlayDoubleUpBonusRes} message PlayDoubleUpBonusRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayDoubleUpBonusRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = 0;
                    object.card = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.betAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.betAmount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.payOutAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.payOutAmount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.doubleUpBonusWinAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.doubleUpBonusWinAmount = options.longs === String ? "0" : 0;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                if (message.card != null && message.hasOwnProperty("card"))
                    object.card = message.card;
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    if (typeof message.betAmount === "number")
                        object.betAmount = options.longs === String ? String(message.betAmount) : message.betAmount;
                    else
                        object.betAmount = options.longs === String ? $util.Long.prototype.toString.call(message.betAmount) : options.longs === Number ? new $util.LongBits(message.betAmount.low >>> 0, message.betAmount.high >>> 0).toNumber() : message.betAmount;
                if (message.payOutAmount != null && message.hasOwnProperty("payOutAmount"))
                    if (typeof message.payOutAmount === "number")
                        object.payOutAmount = options.longs === String ? String(message.payOutAmount) : message.payOutAmount;
                    else
                        object.payOutAmount = options.longs === String ? $util.Long.prototype.toString.call(message.payOutAmount) : options.longs === Number ? new $util.LongBits(message.payOutAmount.low >>> 0, message.payOutAmount.high >>> 0).toNumber() : message.payOutAmount;
                if (message.doubleUpBonusWinAmount != null && message.hasOwnProperty("doubleUpBonusWinAmount"))
                    if (typeof message.doubleUpBonusWinAmount === "number")
                        object.doubleUpBonusWinAmount = options.longs === String ? String(message.doubleUpBonusWinAmount) : message.doubleUpBonusWinAmount;
                    else
                        object.doubleUpBonusWinAmount = options.longs === String ? $util.Long.prototype.toString.call(message.doubleUpBonusWinAmount) : options.longs === Number ? new $util.LongBits(message.doubleUpBonusWinAmount.low >>> 0, message.doubleUpBonusWinAmount.high >>> 0).toNumber() : message.doubleUpBonusWinAmount;
                return object;
            };

            /**
             * Converts this PlayDoubleUpBonusRes to JSON.
             * @function toJSON
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayDoubleUpBonusRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayDoubleUpBonusRes
             * @function getTypeUrl
             * @memberof color.v1.PlayDoubleUpBonusRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayDoubleUpBonusRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/color.v1.PlayDoubleUpBonusRes";
            };

            return PlayDoubleUpBonusRes;
        })();

        return v1;
    })();

    return color;
})();



module.exports = $root;
