/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bato = (function() {

    /**
     * Namespace bato.
     * @exports bato
     * @namespace
     */
    var bato = {};

    bato.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof bato
         * @namespace
         */
        var v1 = {};

        v1.EmptyRes = (function() {

            /**
             * Properties of an EmptyRes.
             * @memberof bato.v1
             * @interface IEmptyRes
             */

            /**
             * Constructs a new EmptyRes.
             * @memberof bato.v1
             * @classdesc Represents an EmptyRes.
             * @implements IEmptyRes
             * @constructor
             * @param {bato.v1.IEmptyRes=} [properties] Properties to set
             */
            function EmptyRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new EmptyRes instance using the specified properties.
             * @function create
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {bato.v1.IEmptyRes=} [properties] Properties to set
             * @returns {bato.v1.EmptyRes} EmptyRes instance
             */
            EmptyRes.create = function create(properties) {
                return new EmptyRes(properties);
            };

            /**
             * Encodes the specified EmptyRes message. Does not implicitly {@link bato.v1.EmptyRes.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {bato.v1.IEmptyRes} message EmptyRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified EmptyRes message, length delimited. Does not implicitly {@link bato.v1.EmptyRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {bato.v1.IEmptyRes} message EmptyRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EmptyRes message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.EmptyRes} EmptyRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmptyRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.EmptyRes();
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
             * Decodes an EmptyRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.EmptyRes} EmptyRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmptyRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EmptyRes message.
             * @function verify
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EmptyRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an EmptyRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.EmptyRes} EmptyRes
             */
            EmptyRes.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.EmptyRes)
                    return object;
                return new $root.bato.v1.EmptyRes();
            };

            /**
             * Creates a plain object from an EmptyRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {bato.v1.EmptyRes} message EmptyRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EmptyRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this EmptyRes to JSON.
             * @function toJSON
             * @memberof bato.v1.EmptyRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EmptyRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EmptyRes
             * @function getTypeUrl
             * @memberof bato.v1.EmptyRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EmptyRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.EmptyRes";
            };

            return EmptyRes;
        })();

        v1.JoinRoomReq = (function() {

            /**
             * Properties of a JoinRoomReq.
             * @memberof bato.v1
             * @interface IJoinRoomReq
             * @property {number|Long|null} [roomId] JoinRoomReq roomId
             */

            /**
             * Constructs a new JoinRoomReq.
             * @memberof bato.v1
             * @classdesc Represents a JoinRoomReq.
             * @implements IJoinRoomReq
             * @constructor
             * @param {bato.v1.IJoinRoomReq=} [properties] Properties to set
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
             * @memberof bato.v1.JoinRoomReq
             * @instance
             */
            JoinRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @function create
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {bato.v1.IJoinRoomReq=} [properties] Properties to set
             * @returns {bato.v1.JoinRoomReq} JoinRoomReq instance
             */
            JoinRoomReq.create = function create(properties) {
                return new JoinRoomReq(properties);
            };

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link bato.v1.JoinRoomReq.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {bato.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
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
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link bato.v1.JoinRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {bato.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.JoinRoomReq} JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.JoinRoomReq();
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
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.JoinRoomReq} JoinRoomReq
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
             * @memberof bato.v1.JoinRoomReq
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
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.JoinRoomReq} JoinRoomReq
             */
            JoinRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.JoinRoomReq)
                    return object;
                var message = new $root.bato.v1.JoinRoomReq();
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
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {bato.v1.JoinRoomReq} message JoinRoomReq
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
             * @memberof bato.v1.JoinRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomReq
             * @function getTypeUrl
             * @memberof bato.v1.JoinRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.JoinRoomReq";
            };

            return JoinRoomReq;
        })();

        v1.JoinRoomRes = (function() {

            /**
             * Properties of a JoinRoomRes.
             * @memberof bato.v1
             * @interface IJoinRoomRes
             * @property {bato.v1.IRoomInfo|null} [roomInfo] JoinRoomRes roomInfo
             * @property {Array.<bato.v1.IBatoPayerInfo>|null} [players] JoinRoomRes players
             * @property {Array.<common.v1.IPlayerInfo>|null} [watchers] JoinRoomRes watchers
             * @property {number|null} [playersCount] JoinRoomRes playersCount
             * @property {Array.<common.v1.IPlayerInfo>|null} [speakers] JoinRoomRes speakers
             * @property {bato.v1.IBatoPayerInfo|null} [self] JoinRoomRes self
             * @property {bato.v1.IGameInfo|null} [gameInfo] JoinRoomRes gameInfo
             * @property {common.v1.IPlayerSettings|null} [playerSettings] JoinRoomRes playerSettings
             */

            /**
             * Constructs a new JoinRoomRes.
             * @memberof bato.v1
             * @classdesc Represents a JoinRoomRes.
             * @implements IJoinRoomRes
             * @constructor
             * @param {bato.v1.IJoinRoomRes=} [properties] Properties to set
             */
            function JoinRoomRes(properties) {
                this.players = [];
                this.watchers = [];
                this.speakers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRoomRes roomInfo.
             * @member {bato.v1.IRoomInfo|null|undefined} roomInfo
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.roomInfo = null;

            /**
             * JoinRoomRes players.
             * @member {Array.<bato.v1.IBatoPayerInfo>} players
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.players = $util.emptyArray;

            /**
             * JoinRoomRes watchers.
             * @member {Array.<common.v1.IPlayerInfo>} watchers
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.watchers = $util.emptyArray;

            /**
             * JoinRoomRes playersCount.
             * @member {number} playersCount
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playersCount = 0;

            /**
             * JoinRoomRes speakers.
             * @member {Array.<common.v1.IPlayerInfo>} speakers
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.speakers = $util.emptyArray;

            /**
             * JoinRoomRes self.
             * @member {bato.v1.IBatoPayerInfo|null|undefined} self
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.self = null;

            /**
             * JoinRoomRes gameInfo.
             * @member {bato.v1.IGameInfo|null|undefined} gameInfo
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.gameInfo = null;

            /**
             * JoinRoomRes playerSettings.
             * @member {common.v1.IPlayerSettings|null|undefined} playerSettings
             * @memberof bato.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playerSettings = null;

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @function create
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {bato.v1.IJoinRoomRes=} [properties] Properties to set
             * @returns {bato.v1.JoinRoomRes} JoinRoomRes instance
             */
            JoinRoomRes.create = function create(properties) {
                return new JoinRoomRes(properties);
            };

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link bato.v1.JoinRoomRes.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {bato.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                    $root.bato.v1.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.bato.v1.BatoPayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.watchers != null && message.watchers.length)
                    for (var i = 0; i < message.watchers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.watchers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playersCount);
                if (message.speakers != null && message.speakers.length)
                    for (var i = 0; i < message.speakers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.speakers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.bato.v1.BatoPayerInfo.encode(message.self, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.bato.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.playerSettings != null && Object.hasOwnProperty.call(message, "playerSettings"))
                    $root.common.v1.PlayerSettings.encode(message.playerSettings, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link bato.v1.JoinRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {bato.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.JoinRoomRes} JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.JoinRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.roomInfo = $root.bato.v1.RoomInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.bato.v1.BatoPayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.watchers && message.watchers.length))
                                message.watchers = [];
                            message.watchers.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            message.playersCount = reader.int32();
                            break;
                        }
                    case 5: {
                            if (!(message.speakers && message.speakers.length))
                                message.speakers = [];
                            message.speakers.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            message.self = $root.bato.v1.BatoPayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.gameInfo = $root.bato.v1.GameInfo.decode(reader, reader.uint32());
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
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.JoinRoomRes} JoinRoomRes
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
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                    var error = $root.bato.v1.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.bato.v1.BatoPayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
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
                if (message.speakers != null && message.hasOwnProperty("speakers")) {
                    if (!Array.isArray(message.speakers))
                        return "speakers: array expected";
                    for (var i = 0; i < message.speakers.length; ++i) {
                        var error = $root.common.v1.PlayerInfo.verify(message.speakers[i]);
                        if (error)
                            return "speakers." + error;
                    }
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.bato.v1.BatoPayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.bato.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
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
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.JoinRoomRes} JoinRoomRes
             */
            JoinRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.JoinRoomRes)
                    return object;
                var message = new $root.bato.v1.JoinRoomRes();
                if (object.roomInfo != null) {
                    if (typeof object.roomInfo !== "object")
                        throw TypeError(".bato.v1.JoinRoomRes.roomInfo: object expected");
                    message.roomInfo = $root.bato.v1.RoomInfo.fromObject(object.roomInfo);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".bato.v1.JoinRoomRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".bato.v1.JoinRoomRes.players: object expected");
                        message.players[i] = $root.bato.v1.BatoPayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.watchers) {
                    if (!Array.isArray(object.watchers))
                        throw TypeError(".bato.v1.JoinRoomRes.watchers: array expected");
                    message.watchers = [];
                    for (var i = 0; i < object.watchers.length; ++i) {
                        if (typeof object.watchers[i] !== "object")
                            throw TypeError(".bato.v1.JoinRoomRes.watchers: object expected");
                        message.watchers[i] = $root.common.v1.PlayerInfo.fromObject(object.watchers[i]);
                    }
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                if (object.speakers) {
                    if (!Array.isArray(object.speakers))
                        throw TypeError(".bato.v1.JoinRoomRes.speakers: array expected");
                    message.speakers = [];
                    for (var i = 0; i < object.speakers.length; ++i) {
                        if (typeof object.speakers[i] !== "object")
                            throw TypeError(".bato.v1.JoinRoomRes.speakers: object expected");
                        message.speakers[i] = $root.common.v1.PlayerInfo.fromObject(object.speakers[i]);
                    }
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".bato.v1.JoinRoomRes.self: object expected");
                    message.self = $root.bato.v1.BatoPayerInfo.fromObject(object.self);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".bato.v1.JoinRoomRes.gameInfo: object expected");
                    message.gameInfo = $root.bato.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.playerSettings != null) {
                    if (typeof object.playerSettings !== "object")
                        throw TypeError(".bato.v1.JoinRoomRes.playerSettings: object expected");
                    message.playerSettings = $root.common.v1.PlayerSettings.fromObject(object.playerSettings);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {bato.v1.JoinRoomRes} message JoinRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoomRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.players = [];
                    object.watchers = [];
                    object.speakers = [];
                }
                if (options.defaults) {
                    object.roomInfo = null;
                    object.playersCount = 0;
                    object.self = null;
                    object.gameInfo = null;
                    object.playerSettings = null;
                }
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                    object.roomInfo = $root.bato.v1.RoomInfo.toObject(message.roomInfo, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.bato.v1.BatoPayerInfo.toObject(message.players[j], options);
                }
                if (message.watchers && message.watchers.length) {
                    object.watchers = [];
                    for (var j = 0; j < message.watchers.length; ++j)
                        object.watchers[j] = $root.common.v1.PlayerInfo.toObject(message.watchers[j], options);
                }
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                if (message.speakers && message.speakers.length) {
                    object.speakers = [];
                    for (var j = 0; j < message.speakers.length; ++j)
                        object.speakers[j] = $root.common.v1.PlayerInfo.toObject(message.speakers[j], options);
                }
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.bato.v1.BatoPayerInfo.toObject(message.self, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.bato.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.playerSettings != null && message.hasOwnProperty("playerSettings"))
                    object.playerSettings = $root.common.v1.PlayerSettings.toObject(message.playerSettings, options);
                return object;
            };

            /**
             * Converts this JoinRoomRes to JSON.
             * @function toJSON
             * @memberof bato.v1.JoinRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomRes
             * @function getTypeUrl
             * @memberof bato.v1.JoinRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.JoinRoomRes";
            };

            return JoinRoomRes;
        })();

        v1.StartGameReq = (function() {

            /**
             * Properties of a StartGameReq.
             * @memberof bato.v1
             * @interface IStartGameReq
             */

            /**
             * Constructs a new StartGameReq.
             * @memberof bato.v1
             * @classdesc Represents a StartGameReq.
             * @implements IStartGameReq
             * @constructor
             * @param {bato.v1.IStartGameReq=} [properties] Properties to set
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
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {bato.v1.IStartGameReq=} [properties] Properties to set
             * @returns {bato.v1.StartGameReq} StartGameReq instance
             */
            StartGameReq.create = function create(properties) {
                return new StartGameReq(properties);
            };

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link bato.v1.StartGameReq.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {bato.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link bato.v1.StartGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {bato.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.StartGameReq} StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.StartGameReq();
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
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.StartGameReq} StartGameReq
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
             * @memberof bato.v1.StartGameReq
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
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.StartGameReq} StartGameReq
             */
            StartGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.StartGameReq)
                    return object;
                return new $root.bato.v1.StartGameReq();
            };

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {bato.v1.StartGameReq} message StartGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameReq to JSON.
             * @function toJSON
             * @memberof bato.v1.StartGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameReq
             * @function getTypeUrl
             * @memberof bato.v1.StartGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.StartGameReq";
            };

            return StartGameReq;
        })();

        v1.StartGameRes = (function() {

            /**
             * Properties of a StartGameRes.
             * @memberof bato.v1
             * @interface IStartGameRes
             */

            /**
             * Constructs a new StartGameRes.
             * @memberof bato.v1
             * @classdesc Represents a StartGameRes.
             * @implements IStartGameRes
             * @constructor
             * @param {bato.v1.IStartGameRes=} [properties] Properties to set
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
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {bato.v1.IStartGameRes=} [properties] Properties to set
             * @returns {bato.v1.StartGameRes} StartGameRes instance
             */
            StartGameRes.create = function create(properties) {
                return new StartGameRes(properties);
            };

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link bato.v1.StartGameRes.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {bato.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link bato.v1.StartGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {bato.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.StartGameRes} StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.StartGameRes();
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
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.StartGameRes} StartGameRes
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
             * @memberof bato.v1.StartGameRes
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
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.StartGameRes} StartGameRes
             */
            StartGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.StartGameRes)
                    return object;
                return new $root.bato.v1.StartGameRes();
            };

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {bato.v1.StartGameRes} message StartGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameRes to JSON.
             * @function toJSON
             * @memberof bato.v1.StartGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameRes
             * @function getTypeUrl
             * @memberof bato.v1.StartGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.StartGameRes";
            };

            return StartGameRes;
        })();

        v1.SelectCardReq = (function() {

            /**
             * Properties of a SelectCardReq.
             * @memberof bato.v1
             * @interface ISelectCardReq
             * @property {number|null} [cardId] SelectCardReq cardId
             */

            /**
             * Constructs a new SelectCardReq.
             * @memberof bato.v1
             * @classdesc Represents a SelectCardReq.
             * @implements ISelectCardReq
             * @constructor
             * @param {bato.v1.ISelectCardReq=} [properties] Properties to set
             */
            function SelectCardReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SelectCardReq cardId.
             * @member {number} cardId
             * @memberof bato.v1.SelectCardReq
             * @instance
             */
            SelectCardReq.prototype.cardId = 0;

            /**
             * Creates a new SelectCardReq instance using the specified properties.
             * @function create
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {bato.v1.ISelectCardReq=} [properties] Properties to set
             * @returns {bato.v1.SelectCardReq} SelectCardReq instance
             */
            SelectCardReq.create = function create(properties) {
                return new SelectCardReq(properties);
            };

            /**
             * Encodes the specified SelectCardReq message. Does not implicitly {@link bato.v1.SelectCardReq.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {bato.v1.ISelectCardReq} message SelectCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectCardReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardId);
                return writer;
            };

            /**
             * Encodes the specified SelectCardReq message, length delimited. Does not implicitly {@link bato.v1.SelectCardReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {bato.v1.ISelectCardReq} message SelectCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectCardReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SelectCardReq message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.SelectCardReq} SelectCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectCardReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.SelectCardReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cardId = reader.int32();
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
             * Decodes a SelectCardReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.SelectCardReq} SelectCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectCardReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SelectCardReq message.
             * @function verify
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SelectCardReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    if (!$util.isInteger(message.cardId))
                        return "cardId: integer expected";
                return null;
            };

            /**
             * Creates a SelectCardReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.SelectCardReq} SelectCardReq
             */
            SelectCardReq.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.SelectCardReq)
                    return object;
                var message = new $root.bato.v1.SelectCardReq();
                if (object.cardId != null)
                    message.cardId = object.cardId | 0;
                return message;
            };

            /**
             * Creates a plain object from a SelectCardReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {bato.v1.SelectCardReq} message SelectCardReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SelectCardReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.cardId = 0;
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    object.cardId = message.cardId;
                return object;
            };

            /**
             * Converts this SelectCardReq to JSON.
             * @function toJSON
             * @memberof bato.v1.SelectCardReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SelectCardReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SelectCardReq
             * @function getTypeUrl
             * @memberof bato.v1.SelectCardReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SelectCardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.SelectCardReq";
            };

            return SelectCardReq;
        })();

        v1.SelectCardRes = (function() {

            /**
             * Properties of a SelectCardRes.
             * @memberof bato.v1
             * @interface ISelectCardRes
             * @property {number|null} [cardId] SelectCardRes cardId
             */

            /**
             * Constructs a new SelectCardRes.
             * @memberof bato.v1
             * @classdesc Represents a SelectCardRes.
             * @implements ISelectCardRes
             * @constructor
             * @param {bato.v1.ISelectCardRes=} [properties] Properties to set
             */
            function SelectCardRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SelectCardRes cardId.
             * @member {number} cardId
             * @memberof bato.v1.SelectCardRes
             * @instance
             */
            SelectCardRes.prototype.cardId = 0;

            /**
             * Creates a new SelectCardRes instance using the specified properties.
             * @function create
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {bato.v1.ISelectCardRes=} [properties] Properties to set
             * @returns {bato.v1.SelectCardRes} SelectCardRes instance
             */
            SelectCardRes.create = function create(properties) {
                return new SelectCardRes(properties);
            };

            /**
             * Encodes the specified SelectCardRes message. Does not implicitly {@link bato.v1.SelectCardRes.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {bato.v1.ISelectCardRes} message SelectCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectCardRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardId);
                return writer;
            };

            /**
             * Encodes the specified SelectCardRes message, length delimited. Does not implicitly {@link bato.v1.SelectCardRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {bato.v1.ISelectCardRes} message SelectCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectCardRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SelectCardRes message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.SelectCardRes} SelectCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectCardRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.SelectCardRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cardId = reader.int32();
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
             * Decodes a SelectCardRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.SelectCardRes} SelectCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectCardRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SelectCardRes message.
             * @function verify
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SelectCardRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    if (!$util.isInteger(message.cardId))
                        return "cardId: integer expected";
                return null;
            };

            /**
             * Creates a SelectCardRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.SelectCardRes} SelectCardRes
             */
            SelectCardRes.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.SelectCardRes)
                    return object;
                var message = new $root.bato.v1.SelectCardRes();
                if (object.cardId != null)
                    message.cardId = object.cardId | 0;
                return message;
            };

            /**
             * Creates a plain object from a SelectCardRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {bato.v1.SelectCardRes} message SelectCardRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SelectCardRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.cardId = 0;
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    object.cardId = message.cardId;
                return object;
            };

            /**
             * Converts this SelectCardRes to JSON.
             * @function toJSON
             * @memberof bato.v1.SelectCardRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SelectCardRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SelectCardRes
             * @function getTypeUrl
             * @memberof bato.v1.SelectCardRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SelectCardRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.SelectCardRes";
            };

            return SelectCardRes;
        })();

        v1.StartGameBroadcast = (function() {

            /**
             * Properties of a StartGameBroadcast.
             * @memberof bato.v1
             * @interface IStartGameBroadcast
             * @property {number|Long|null} [userId] StartGameBroadcast userId
             * @property {Array.<bato.v1.IBatoPayerInfo>|null} [players] StartGameBroadcast players
             * @property {bato.v1.IGameInfo|null} [gameInfo] StartGameBroadcast gameInfo
             */

            /**
             * Constructs a new StartGameBroadcast.
             * @memberof bato.v1
             * @classdesc Represents a StartGameBroadcast.
             * @implements IStartGameBroadcast
             * @constructor
             * @param {bato.v1.IStartGameBroadcast=} [properties] Properties to set
             */
            function StartGameBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartGameBroadcast userId.
             * @member {number|Long} userId
             * @memberof bato.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * StartGameBroadcast players.
             * @member {Array.<bato.v1.IBatoPayerInfo>} players
             * @memberof bato.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.players = $util.emptyArray;

            /**
             * StartGameBroadcast gameInfo.
             * @member {bato.v1.IGameInfo|null|undefined} gameInfo
             * @memberof bato.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.gameInfo = null;

            /**
             * Creates a new StartGameBroadcast instance using the specified properties.
             * @function create
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {bato.v1.IStartGameBroadcast=} [properties] Properties to set
             * @returns {bato.v1.StartGameBroadcast} StartGameBroadcast instance
             */
            StartGameBroadcast.create = function create(properties) {
                return new StartGameBroadcast(properties);
            };

            /**
             * Encodes the specified StartGameBroadcast message. Does not implicitly {@link bato.v1.StartGameBroadcast.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {bato.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.bato.v1.BatoPayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.bato.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StartGameBroadcast message, length delimited. Does not implicitly {@link bato.v1.StartGameBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {bato.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.StartGameBroadcast} StartGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.StartGameBroadcast();
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
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.bato.v1.BatoPayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.gameInfo = $root.bato.v1.GameInfo.decode(reader, reader.uint32());
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
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.StartGameBroadcast} StartGameBroadcast
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
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartGameBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.bato.v1.BatoPayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.bato.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                return null;
            };

            /**
             * Creates a StartGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.StartGameBroadcast} StartGameBroadcast
             */
            StartGameBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.StartGameBroadcast)
                    return object;
                var message = new $root.bato.v1.StartGameBroadcast();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".bato.v1.StartGameBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".bato.v1.StartGameBroadcast.players: object expected");
                        message.players[i] = $root.bato.v1.BatoPayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".bato.v1.StartGameBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.bato.v1.GameInfo.fromObject(object.gameInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a StartGameBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {bato.v1.StartGameBroadcast} message StartGameBroadcast
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
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.gameInfo = null;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.bato.v1.BatoPayerInfo.toObject(message.players[j], options);
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.bato.v1.GameInfo.toObject(message.gameInfo, options);
                return object;
            };

            /**
             * Converts this StartGameBroadcast to JSON.
             * @function toJSON
             * @memberof bato.v1.StartGameBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameBroadcast
             * @function getTypeUrl
             * @memberof bato.v1.StartGameBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.StartGameBroadcast";
            };

            return StartGameBroadcast;
        })();

        v1.GameResultBroadcast = (function() {

            /**
             * Properties of a GameResultBroadcast.
             * @memberof bato.v1
             * @interface IGameResultBroadcast
             * @property {number|Long|null} [userId] GameResultBroadcast userId
             * @property {bato.v1.IGameResult|null} [gameResult] GameResultBroadcast gameResult
             */

            /**
             * Constructs a new GameResultBroadcast.
             * @memberof bato.v1
             * @classdesc Represents a GameResultBroadcast.
             * @implements IGameResultBroadcast
             * @constructor
             * @param {bato.v1.IGameResultBroadcast=} [properties] Properties to set
             */
            function GameResultBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameResultBroadcast userId.
             * @member {number|Long} userId
             * @memberof bato.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameResultBroadcast gameResult.
             * @member {bato.v1.IGameResult|null|undefined} gameResult
             * @memberof bato.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.gameResult = null;

            /**
             * Creates a new GameResultBroadcast instance using the specified properties.
             * @function create
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {bato.v1.IGameResultBroadcast=} [properties] Properties to set
             * @returns {bato.v1.GameResultBroadcast} GameResultBroadcast instance
             */
            GameResultBroadcast.create = function create(properties) {
                return new GameResultBroadcast(properties);
            };

            /**
             * Encodes the specified GameResultBroadcast message. Does not implicitly {@link bato.v1.GameResultBroadcast.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {bato.v1.IGameResultBroadcast} message GameResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.gameResult != null && Object.hasOwnProperty.call(message, "gameResult"))
                    $root.bato.v1.GameResult.encode(message.gameResult, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GameResultBroadcast message, length delimited. Does not implicitly {@link bato.v1.GameResultBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {bato.v1.IGameResultBroadcast} message GameResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameResultBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.GameResultBroadcast} GameResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.GameResultBroadcast();
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
                            message.gameResult = $root.bato.v1.GameResult.decode(reader, reader.uint32());
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
             * Decodes a GameResultBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.GameResultBroadcast} GameResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameResultBroadcast message.
             * @function verify
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameResultBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.gameResult != null && message.hasOwnProperty("gameResult")) {
                    var error = $root.bato.v1.GameResult.verify(message.gameResult);
                    if (error)
                        return "gameResult." + error;
                }
                return null;
            };

            /**
             * Creates a GameResultBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.GameResultBroadcast} GameResultBroadcast
             */
            GameResultBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.GameResultBroadcast)
                    return object;
                var message = new $root.bato.v1.GameResultBroadcast();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.gameResult != null) {
                    if (typeof object.gameResult !== "object")
                        throw TypeError(".bato.v1.GameResultBroadcast.gameResult: object expected");
                    message.gameResult = $root.bato.v1.GameResult.fromObject(object.gameResult);
                }
                return message;
            };

            /**
             * Creates a plain object from a GameResultBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {bato.v1.GameResultBroadcast} message GameResultBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameResultBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.gameResult = null;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                    object.gameResult = $root.bato.v1.GameResult.toObject(message.gameResult, options);
                return object;
            };

            /**
             * Converts this GameResultBroadcast to JSON.
             * @function toJSON
             * @memberof bato.v1.GameResultBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameResultBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameResultBroadcast
             * @function getTypeUrl
             * @memberof bato.v1.GameResultBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResultBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.GameResultBroadcast";
            };

            return GameResultBroadcast;
        })();

        v1.RoomResetBroadcast = (function() {

            /**
             * Properties of a RoomResetBroadcast.
             * @memberof bato.v1
             * @interface IRoomResetBroadcast
             * @property {Array.<bato.v1.IBatoPayerInfo>|null} [players] RoomResetBroadcast players
             * @property {bato.v1.IBatoPayerInfo|null} [self] RoomResetBroadcast self
             * @property {bato.v1.IGameInfo|null} [gameInfo] RoomResetBroadcast gameInfo
             * @property {number|Long|null} [userId] RoomResetBroadcast userId
             */

            /**
             * Constructs a new RoomResetBroadcast.
             * @memberof bato.v1
             * @classdesc Represents a RoomResetBroadcast.
             * @implements IRoomResetBroadcast
             * @constructor
             * @param {bato.v1.IRoomResetBroadcast=} [properties] Properties to set
             */
            function RoomResetBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoomResetBroadcast players.
             * @member {Array.<bato.v1.IBatoPayerInfo>} players
             * @memberof bato.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.players = $util.emptyArray;

            /**
             * RoomResetBroadcast self.
             * @member {bato.v1.IBatoPayerInfo|null|undefined} self
             * @memberof bato.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.self = null;

            /**
             * RoomResetBroadcast gameInfo.
             * @member {bato.v1.IGameInfo|null|undefined} gameInfo
             * @memberof bato.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.gameInfo = null;

            /**
             * RoomResetBroadcast userId.
             * @member {number|Long} userId
             * @memberof bato.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RoomResetBroadcast instance using the specified properties.
             * @function create
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {bato.v1.IRoomResetBroadcast=} [properties] Properties to set
             * @returns {bato.v1.RoomResetBroadcast} RoomResetBroadcast instance
             */
            RoomResetBroadcast.create = function create(properties) {
                return new RoomResetBroadcast(properties);
            };

            /**
             * Encodes the specified RoomResetBroadcast message. Does not implicitly {@link bato.v1.RoomResetBroadcast.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {bato.v1.IRoomResetBroadcast} message RoomResetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomResetBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.bato.v1.BatoPayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.bato.v1.BatoPayerInfo.encode(message.self, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.bato.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified RoomResetBroadcast message, length delimited. Does not implicitly {@link bato.v1.RoomResetBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {bato.v1.IRoomResetBroadcast} message RoomResetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomResetBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomResetBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.RoomResetBroadcast} RoomResetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomResetBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.RoomResetBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.bato.v1.BatoPayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.self = $root.bato.v1.BatoPayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.gameInfo = $root.bato.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
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
             * Decodes a RoomResetBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.RoomResetBroadcast} RoomResetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomResetBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoomResetBroadcast message.
             * @function verify
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomResetBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.bato.v1.BatoPayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.bato.v1.BatoPayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.bato.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a RoomResetBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.RoomResetBroadcast} RoomResetBroadcast
             */
            RoomResetBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.RoomResetBroadcast)
                    return object;
                var message = new $root.bato.v1.RoomResetBroadcast();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".bato.v1.RoomResetBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".bato.v1.RoomResetBroadcast.players: object expected");
                        message.players[i] = $root.bato.v1.BatoPayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".bato.v1.RoomResetBroadcast.self: object expected");
                    message.self = $root.bato.v1.BatoPayerInfo.fromObject(object.self);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".bato.v1.RoomResetBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.bato.v1.GameInfo.fromObject(object.gameInfo);
                }
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
             * Creates a plain object from a RoomResetBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {bato.v1.RoomResetBroadcast} message RoomResetBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomResetBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    object.self = null;
                    object.gameInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.bato.v1.BatoPayerInfo.toObject(message.players[j], options);
                }
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.bato.v1.BatoPayerInfo.toObject(message.self, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.bato.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this RoomResetBroadcast to JSON.
             * @function toJSON
             * @memberof bato.v1.RoomResetBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomResetBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomResetBroadcast
             * @function getTypeUrl
             * @memberof bato.v1.RoomResetBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomResetBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.RoomResetBroadcast";
            };

            return RoomResetBroadcast;
        })();

        v1.GameStageChangeBroadcast = (function() {

            /**
             * Properties of a GameStageChangeBroadcast.
             * @memberof bato.v1
             * @interface IGameStageChangeBroadcast
             * @property {Array.<bato.v1.IBatoPayerInfo>|null} [players] GameStageChangeBroadcast players
             * @property {bato.v1.IGameInfo|null} [gameInfo] GameStageChangeBroadcast gameInfo
             * @property {number|Long|null} [userId] GameStageChangeBroadcast userId
             */

            /**
             * Constructs a new GameStageChangeBroadcast.
             * @memberof bato.v1
             * @classdesc Represents a GameStageChangeBroadcast.
             * @implements IGameStageChangeBroadcast
             * @constructor
             * @param {bato.v1.IGameStageChangeBroadcast=} [properties] Properties to set
             */
            function GameStageChangeBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameStageChangeBroadcast players.
             * @member {Array.<bato.v1.IBatoPayerInfo>} players
             * @memberof bato.v1.GameStageChangeBroadcast
             * @instance
             */
            GameStageChangeBroadcast.prototype.players = $util.emptyArray;

            /**
             * GameStageChangeBroadcast gameInfo.
             * @member {bato.v1.IGameInfo|null|undefined} gameInfo
             * @memberof bato.v1.GameStageChangeBroadcast
             * @instance
             */
            GameStageChangeBroadcast.prototype.gameInfo = null;

            /**
             * GameStageChangeBroadcast userId.
             * @member {number|Long} userId
             * @memberof bato.v1.GameStageChangeBroadcast
             * @instance
             */
            GameStageChangeBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GameStageChangeBroadcast instance using the specified properties.
             * @function create
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {bato.v1.IGameStageChangeBroadcast=} [properties] Properties to set
             * @returns {bato.v1.GameStageChangeBroadcast} GameStageChangeBroadcast instance
             */
            GameStageChangeBroadcast.create = function create(properties) {
                return new GameStageChangeBroadcast(properties);
            };

            /**
             * Encodes the specified GameStageChangeBroadcast message. Does not implicitly {@link bato.v1.GameStageChangeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {bato.v1.IGameStageChangeBroadcast} message GameStageChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStageChangeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.bato.v1.BatoPayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.bato.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified GameStageChangeBroadcast message, length delimited. Does not implicitly {@link bato.v1.GameStageChangeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {bato.v1.IGameStageChangeBroadcast} message GameStageChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStageChangeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameStageChangeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.GameStageChangeBroadcast} GameStageChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStageChangeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.GameStageChangeBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.bato.v1.BatoPayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.gameInfo = $root.bato.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
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
             * Decodes a GameStageChangeBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.GameStageChangeBroadcast} GameStageChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStageChangeBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameStageChangeBroadcast message.
             * @function verify
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameStageChangeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.bato.v1.BatoPayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.bato.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a GameStageChangeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.GameStageChangeBroadcast} GameStageChangeBroadcast
             */
            GameStageChangeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.GameStageChangeBroadcast)
                    return object;
                var message = new $root.bato.v1.GameStageChangeBroadcast();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".bato.v1.GameStageChangeBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".bato.v1.GameStageChangeBroadcast.players: object expected");
                        message.players[i] = $root.bato.v1.BatoPayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".bato.v1.GameStageChangeBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.bato.v1.GameInfo.fromObject(object.gameInfo);
                }
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
             * Creates a plain object from a GameStageChangeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {bato.v1.GameStageChangeBroadcast} message GameStageChangeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameStageChangeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    object.gameInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.bato.v1.BatoPayerInfo.toObject(message.players[j], options);
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.bato.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this GameStageChangeBroadcast to JSON.
             * @function toJSON
             * @memberof bato.v1.GameStageChangeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameStageChangeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameStageChangeBroadcast
             * @function getTypeUrl
             * @memberof bato.v1.GameStageChangeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameStageChangeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.GameStageChangeBroadcast";
            };

            return GameStageChangeBroadcast;
        })();

        v1.SelectCardBroadcast = (function() {

            /**
             * Properties of a SelectCardBroadcast.
             * @memberof bato.v1
             * @interface ISelectCardBroadcast
             * @property {number|Long|null} [playerId] SelectCardBroadcast playerId
             * @property {number|null} [cardId] SelectCardBroadcast cardId
             * @property {number|Long|null} [userId] SelectCardBroadcast userId
             */

            /**
             * Constructs a new SelectCardBroadcast.
             * @memberof bato.v1
             * @classdesc Represents a SelectCardBroadcast.
             * @implements ISelectCardBroadcast
             * @constructor
             * @param {bato.v1.ISelectCardBroadcast=} [properties] Properties to set
             */
            function SelectCardBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SelectCardBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof bato.v1.SelectCardBroadcast
             * @instance
             */
            SelectCardBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SelectCardBroadcast cardId.
             * @member {number} cardId
             * @memberof bato.v1.SelectCardBroadcast
             * @instance
             */
            SelectCardBroadcast.prototype.cardId = 0;

            /**
             * SelectCardBroadcast userId.
             * @member {number|Long} userId
             * @memberof bato.v1.SelectCardBroadcast
             * @instance
             */
            SelectCardBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new SelectCardBroadcast instance using the specified properties.
             * @function create
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {bato.v1.ISelectCardBroadcast=} [properties] Properties to set
             * @returns {bato.v1.SelectCardBroadcast} SelectCardBroadcast instance
             */
            SelectCardBroadcast.create = function create(properties) {
                return new SelectCardBroadcast(properties);
            };

            /**
             * Encodes the specified SelectCardBroadcast message. Does not implicitly {@link bato.v1.SelectCardBroadcast.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {bato.v1.ISelectCardBroadcast} message SelectCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectCardBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardId);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified SelectCardBroadcast message, length delimited. Does not implicitly {@link bato.v1.SelectCardBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {bato.v1.ISelectCardBroadcast} message SelectCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectCardBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SelectCardBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.SelectCardBroadcast} SelectCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectCardBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.SelectCardBroadcast();
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
                            message.cardId = reader.int32();
                            break;
                        }
                    case 3: {
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
             * Decodes a SelectCardBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.SelectCardBroadcast} SelectCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectCardBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SelectCardBroadcast message.
             * @function verify
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SelectCardBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    if (!$util.isInteger(message.cardId))
                        return "cardId: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a SelectCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.SelectCardBroadcast} SelectCardBroadcast
             */
            SelectCardBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.SelectCardBroadcast)
                    return object;
                var message = new $root.bato.v1.SelectCardBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.cardId != null)
                    message.cardId = object.cardId | 0;
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
             * Creates a plain object from a SelectCardBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {bato.v1.SelectCardBroadcast} message SelectCardBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SelectCardBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.cardId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    object.cardId = message.cardId;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this SelectCardBroadcast to JSON.
             * @function toJSON
             * @memberof bato.v1.SelectCardBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SelectCardBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SelectCardBroadcast
             * @function getTypeUrl
             * @memberof bato.v1.SelectCardBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SelectCardBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.SelectCardBroadcast";
            };

            return SelectCardBroadcast;
        })();

        v1.RoomInfo = (function() {

            /**
             * Properties of a RoomInfo.
             * @memberof bato.v1
             * @interface IRoomInfo
             * @property {number|Long|null} [roomId] RoomInfo roomId
             * @property {string|null} [roomName] RoomInfo roomName
             * @property {number|null} [roomStatus] RoomInfo roomStatus
             * @property {number|null} [maxSeat] RoomInfo maxSeat
             */

            /**
             * Constructs a new RoomInfo.
             * @memberof bato.v1
             * @classdesc Represents a RoomInfo.
             * @implements IRoomInfo
             * @constructor
             * @param {bato.v1.IRoomInfo=} [properties] Properties to set
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
             * @memberof bato.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RoomInfo roomName.
             * @member {string} roomName
             * @memberof bato.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomName = "";

            /**
             * RoomInfo roomStatus.
             * @member {number} roomStatus
             * @memberof bato.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomStatus = 0;

            /**
             * RoomInfo maxSeat.
             * @member {number} maxSeat
             * @memberof bato.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.maxSeat = 0;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @function create
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {bato.v1.IRoomInfo=} [properties] Properties to set
             * @returns {bato.v1.RoomInfo} RoomInfo instance
             */
            RoomInfo.create = function create(properties) {
                return new RoomInfo(properties);
            };

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link bato.v1.RoomInfo.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {bato.v1.IRoomInfo} message RoomInfo message or plain object to encode
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
                if (message.maxSeat != null && Object.hasOwnProperty.call(message, "maxSeat"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxSeat);
                return writer;
            };

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link bato.v1.RoomInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {bato.v1.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.RoomInfo();
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
                            message.maxSeat = reader.int32();
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
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.RoomInfo} RoomInfo
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
             * @memberof bato.v1.RoomInfo
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
                if (message.maxSeat != null && message.hasOwnProperty("maxSeat"))
                    if (!$util.isInteger(message.maxSeat))
                        return "maxSeat: integer expected";
                return null;
            };

            /**
             * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.RoomInfo} RoomInfo
             */
            RoomInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.RoomInfo)
                    return object;
                var message = new $root.bato.v1.RoomInfo();
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
                if (object.maxSeat != null)
                    message.maxSeat = object.maxSeat | 0;
                return message;
            };

            /**
             * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {bato.v1.RoomInfo} message RoomInfo
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
                    object.maxSeat = 0;
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
                if (message.maxSeat != null && message.hasOwnProperty("maxSeat"))
                    object.maxSeat = message.maxSeat;
                return object;
            };

            /**
             * Converts this RoomInfo to JSON.
             * @function toJSON
             * @memberof bato.v1.RoomInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomInfo
             * @function getTypeUrl
             * @memberof bato.v1.RoomInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.RoomInfo";
            };

            return RoomInfo;
        })();

        v1.BatoPayerInfo = (function() {

            /**
             * Properties of a BatoPayerInfo.
             * @memberof bato.v1
             * @interface IBatoPayerInfo
             * @property {common.v1.IPlayerInfo|null} [playerInfo] BatoPayerInfo playerInfo
             * @property {Array.<number>|null} [cards] BatoPayerInfo cards
             * @property {number|null} [hp] BatoPayerInfo hp
             * @property {number|null} [winCount] BatoPayerInfo winCount
             * @property {number|null} [cardValue] BatoPayerInfo cardValue
             */

            /**
             * Constructs a new BatoPayerInfo.
             * @memberof bato.v1
             * @classdesc Represents a BatoPayerInfo.
             * @implements IBatoPayerInfo
             * @constructor
             * @param {bato.v1.IBatoPayerInfo=} [properties] Properties to set
             */
            function BatoPayerInfo(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BatoPayerInfo playerInfo.
             * @member {common.v1.IPlayerInfo|null|undefined} playerInfo
             * @memberof bato.v1.BatoPayerInfo
             * @instance
             */
            BatoPayerInfo.prototype.playerInfo = null;

            /**
             * BatoPayerInfo cards.
             * @member {Array.<number>} cards
             * @memberof bato.v1.BatoPayerInfo
             * @instance
             */
            BatoPayerInfo.prototype.cards = $util.emptyArray;

            /**
             * BatoPayerInfo hp.
             * @member {number} hp
             * @memberof bato.v1.BatoPayerInfo
             * @instance
             */
            BatoPayerInfo.prototype.hp = 0;

            /**
             * BatoPayerInfo winCount.
             * @member {number} winCount
             * @memberof bato.v1.BatoPayerInfo
             * @instance
             */
            BatoPayerInfo.prototype.winCount = 0;

            /**
             * BatoPayerInfo cardValue.
             * @member {number} cardValue
             * @memberof bato.v1.BatoPayerInfo
             * @instance
             */
            BatoPayerInfo.prototype.cardValue = 0;

            /**
             * Creates a new BatoPayerInfo instance using the specified properties.
             * @function create
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {bato.v1.IBatoPayerInfo=} [properties] Properties to set
             * @returns {bato.v1.BatoPayerInfo} BatoPayerInfo instance
             */
            BatoPayerInfo.create = function create(properties) {
                return new BatoPayerInfo(properties);
            };

            /**
             * Encodes the specified BatoPayerInfo message. Does not implicitly {@link bato.v1.BatoPayerInfo.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {bato.v1.IBatoPayerInfo} message BatoPayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatoPayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.common.v1.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                if (message.hp != null && Object.hasOwnProperty.call(message, "hp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.hp);
                if (message.winCount != null && Object.hasOwnProperty.call(message, "winCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.winCount);
                if (message.cardValue != null && Object.hasOwnProperty.call(message, "cardValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cardValue);
                return writer;
            };

            /**
             * Encodes the specified BatoPayerInfo message, length delimited. Does not implicitly {@link bato.v1.BatoPayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {bato.v1.IBatoPayerInfo} message BatoPayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatoPayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BatoPayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.BatoPayerInfo} BatoPayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatoPayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.BatoPayerInfo();
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
                            if (!(message.cards && message.cards.length))
                                message.cards = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.cards.push(reader.int32());
                            } else
                                message.cards.push(reader.int32());
                            break;
                        }
                    case 3: {
                            message.hp = reader.int32();
                            break;
                        }
                    case 4: {
                            message.winCount = reader.int32();
                            break;
                        }
                    case 5: {
                            message.cardValue = reader.int32();
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
             * Decodes a BatoPayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.BatoPayerInfo} BatoPayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatoPayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BatoPayerInfo message.
             * @function verify
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BatoPayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.hp != null && message.hasOwnProperty("hp"))
                    if (!$util.isInteger(message.hp))
                        return "hp: integer expected";
                if (message.winCount != null && message.hasOwnProperty("winCount"))
                    if (!$util.isInteger(message.winCount))
                        return "winCount: integer expected";
                if (message.cardValue != null && message.hasOwnProperty("cardValue"))
                    if (!$util.isInteger(message.cardValue))
                        return "cardValue: integer expected";
                return null;
            };

            /**
             * Creates a BatoPayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.BatoPayerInfo} BatoPayerInfo
             */
            BatoPayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.BatoPayerInfo)
                    return object;
                var message = new $root.bato.v1.BatoPayerInfo();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".bato.v1.BatoPayerInfo.playerInfo: object expected");
                    message.playerInfo = $root.common.v1.PlayerInfo.fromObject(object.playerInfo);
                }
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".bato.v1.BatoPayerInfo.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                if (object.hp != null)
                    message.hp = object.hp | 0;
                if (object.winCount != null)
                    message.winCount = object.winCount | 0;
                if (object.cardValue != null)
                    message.cardValue = object.cardValue | 0;
                return message;
            };

            /**
             * Creates a plain object from a BatoPayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {bato.v1.BatoPayerInfo} message BatoPayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BatoPayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults) {
                    object.playerInfo = null;
                    object.hp = 0;
                    object.winCount = 0;
                    object.cardValue = 0;
                }
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.common.v1.PlayerInfo.toObject(message.playerInfo, options);
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                if (message.hp != null && message.hasOwnProperty("hp"))
                    object.hp = message.hp;
                if (message.winCount != null && message.hasOwnProperty("winCount"))
                    object.winCount = message.winCount;
                if (message.cardValue != null && message.hasOwnProperty("cardValue"))
                    object.cardValue = message.cardValue;
                return object;
            };

            /**
             * Converts this BatoPayerInfo to JSON.
             * @function toJSON
             * @memberof bato.v1.BatoPayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BatoPayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BatoPayerInfo
             * @function getTypeUrl
             * @memberof bato.v1.BatoPayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BatoPayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.BatoPayerInfo";
            };

            return BatoPayerInfo;
        })();

        v1.GameInfo = (function() {

            /**
             * Properties of a GameInfo.
             * @memberof bato.v1
             * @interface IGameInfo
             * @property {number|null} [round] GameInfo round
             * @property {number|null} [roundWinner] GameInfo roundWinner
             * @property {number|null} [deductionHp] GameInfo deductionHp
             * @property {number|null} [stage] GameInfo stage
             * @property {number|null} [countdown] GameInfo countdown
             * @property {number|null} [betAmount] GameInfo betAmount
             * @property {Array.<number>|null} [scores] GameInfo scores
             */

            /**
             * Constructs a new GameInfo.
             * @memberof bato.v1
             * @classdesc Represents a GameInfo.
             * @implements IGameInfo
             * @constructor
             * @param {bato.v1.IGameInfo=} [properties] Properties to set
             */
            function GameInfo(properties) {
                this.scores = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameInfo round.
             * @member {number} round
             * @memberof bato.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.round = 0;

            /**
             * GameInfo roundWinner.
             * @member {number} roundWinner
             * @memberof bato.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.roundWinner = 0;

            /**
             * GameInfo deductionHp.
             * @member {number} deductionHp
             * @memberof bato.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.deductionHp = 0;

            /**
             * GameInfo stage.
             * @member {number} stage
             * @memberof bato.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.stage = 0;

            /**
             * GameInfo countdown.
             * @member {number} countdown
             * @memberof bato.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.countdown = 0;

            /**
             * GameInfo betAmount.
             * @member {number} betAmount
             * @memberof bato.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.betAmount = 0;

            /**
             * GameInfo scores.
             * @member {Array.<number>} scores
             * @memberof bato.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.scores = $util.emptyArray;

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @function create
             * @memberof bato.v1.GameInfo
             * @static
             * @param {bato.v1.IGameInfo=} [properties] Properties to set
             * @returns {bato.v1.GameInfo} GameInfo instance
             */
            GameInfo.create = function create(properties) {
                return new GameInfo(properties);
            };

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link bato.v1.GameInfo.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.GameInfo
             * @static
             * @param {bato.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.round != null && Object.hasOwnProperty.call(message, "round"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
                if (message.roundWinner != null && Object.hasOwnProperty.call(message, "roundWinner"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roundWinner);
                if (message.deductionHp != null && Object.hasOwnProperty.call(message, "deductionHp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deductionHp);
                if (message.stage != null && Object.hasOwnProperty.call(message, "stage"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.stage);
                if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.countdown);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.betAmount);
                if (message.scores != null && message.scores.length) {
                    writer.uint32(/* id 7, wireType 2 =*/58).fork();
                    for (var i = 0; i < message.scores.length; ++i)
                        writer.int32(message.scores[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link bato.v1.GameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.GameInfo
             * @static
             * @param {bato.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.GameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.round = reader.int32();
                            break;
                        }
                    case 2: {
                            message.roundWinner = reader.int32();
                            break;
                        }
                    case 3: {
                            message.deductionHp = reader.int32();
                            break;
                        }
                    case 4: {
                            message.stage = reader.int32();
                            break;
                        }
                    case 5: {
                            message.countdown = reader.int32();
                            break;
                        }
                    case 6: {
                            message.betAmount = reader.int32();
                            break;
                        }
                    case 7: {
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
             * Decodes a GameInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.GameInfo} GameInfo
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
             * @memberof bato.v1.GameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.round != null && message.hasOwnProperty("round"))
                    if (!$util.isInteger(message.round))
                        return "round: integer expected";
                if (message.roundWinner != null && message.hasOwnProperty("roundWinner"))
                    if (!$util.isInteger(message.roundWinner))
                        return "roundWinner: integer expected";
                if (message.deductionHp != null && message.hasOwnProperty("deductionHp"))
                    if (!$util.isInteger(message.deductionHp))
                        return "deductionHp: integer expected";
                if (message.stage != null && message.hasOwnProperty("stage"))
                    if (!$util.isInteger(message.stage))
                        return "stage: integer expected";
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    if (!$util.isInteger(message.countdown))
                        return "countdown: integer expected";
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
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.GameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.GameInfo} GameInfo
             */
            GameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.GameInfo)
                    return object;
                var message = new $root.bato.v1.GameInfo();
                if (object.round != null)
                    message.round = object.round | 0;
                if (object.roundWinner != null)
                    message.roundWinner = object.roundWinner | 0;
                if (object.deductionHp != null)
                    message.deductionHp = object.deductionHp | 0;
                if (object.stage != null)
                    message.stage = object.stage | 0;
                if (object.countdown != null)
                    message.countdown = object.countdown | 0;
                if (object.betAmount != null)
                    message.betAmount = object.betAmount | 0;
                if (object.scores) {
                    if (!Array.isArray(object.scores))
                        throw TypeError(".bato.v1.GameInfo.scores: array expected");
                    message.scores = [];
                    for (var i = 0; i < object.scores.length; ++i)
                        message.scores[i] = object.scores[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.GameInfo
             * @static
             * @param {bato.v1.GameInfo} message GameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.scores = [];
                if (options.defaults) {
                    object.round = 0;
                    object.roundWinner = 0;
                    object.deductionHp = 0;
                    object.stage = 0;
                    object.countdown = 0;
                    object.betAmount = 0;
                }
                if (message.round != null && message.hasOwnProperty("round"))
                    object.round = message.round;
                if (message.roundWinner != null && message.hasOwnProperty("roundWinner"))
                    object.roundWinner = message.roundWinner;
                if (message.deductionHp != null && message.hasOwnProperty("deductionHp"))
                    object.deductionHp = message.deductionHp;
                if (message.stage != null && message.hasOwnProperty("stage"))
                    object.stage = message.stage;
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    object.countdown = message.countdown;
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
             * Converts this GameInfo to JSON.
             * @function toJSON
             * @memberof bato.v1.GameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameInfo
             * @function getTypeUrl
             * @memberof bato.v1.GameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.GameInfo";
            };

            return GameInfo;
        })();

        v1.GameResult = (function() {

            /**
             * Properties of a GameResult.
             * @memberof bato.v1
             * @interface IGameResult
             * @property {Array.<bato.v1.IBatoPayerInfo>|null} [players] GameResult players
             * @property {number|null} [winnerId] GameResult winnerId
             */

            /**
             * Constructs a new GameResult.
             * @memberof bato.v1
             * @classdesc Represents a GameResult.
             * @implements IGameResult
             * @constructor
             * @param {bato.v1.IGameResult=} [properties] Properties to set
             */
            function GameResult(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameResult players.
             * @member {Array.<bato.v1.IBatoPayerInfo>} players
             * @memberof bato.v1.GameResult
             * @instance
             */
            GameResult.prototype.players = $util.emptyArray;

            /**
             * GameResult winnerId.
             * @member {number} winnerId
             * @memberof bato.v1.GameResult
             * @instance
             */
            GameResult.prototype.winnerId = 0;

            /**
             * Creates a new GameResult instance using the specified properties.
             * @function create
             * @memberof bato.v1.GameResult
             * @static
             * @param {bato.v1.IGameResult=} [properties] Properties to set
             * @returns {bato.v1.GameResult} GameResult instance
             */
            GameResult.create = function create(properties) {
                return new GameResult(properties);
            };

            /**
             * Encodes the specified GameResult message. Does not implicitly {@link bato.v1.GameResult.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.GameResult
             * @static
             * @param {bato.v1.IGameResult} message GameResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.bato.v1.BatoPayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winnerId);
                return writer;
            };

            /**
             * Encodes the specified GameResult message, length delimited. Does not implicitly {@link bato.v1.GameResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.GameResult
             * @static
             * @param {bato.v1.IGameResult} message GameResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameResult message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.GameResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.GameResult} GameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.GameResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.bato.v1.BatoPayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.winnerId = reader.int32();
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
             * Decodes a GameResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.GameResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.GameResult} GameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameResult message.
             * @function verify
             * @memberof bato.v1.GameResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.bato.v1.BatoPayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId))
                        return "winnerId: integer expected";
                return null;
            };

            /**
             * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.GameResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.GameResult} GameResult
             */
            GameResult.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.GameResult)
                    return object;
                var message = new $root.bato.v1.GameResult();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".bato.v1.GameResult.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".bato.v1.GameResult.players: object expected");
                        message.players[i] = $root.bato.v1.BatoPayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.winnerId != null)
                    message.winnerId = object.winnerId | 0;
                return message;
            };

            /**
             * Creates a plain object from a GameResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.GameResult
             * @static
             * @param {bato.v1.GameResult} message GameResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults)
                    object.winnerId = 0;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.bato.v1.BatoPayerInfo.toObject(message.players[j], options);
                }
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    object.winnerId = message.winnerId;
                return object;
            };

            /**
             * Converts this GameResult to JSON.
             * @function toJSON
             * @memberof bato.v1.GameResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameResult
             * @function getTypeUrl
             * @memberof bato.v1.GameResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.GameResult";
            };

            return GameResult;
        })();

        v1.GetPlayerHistoryReq = (function() {

            /**
             * Properties of a GetPlayerHistoryReq.
             * @memberof bato.v1
             * @interface IGetPlayerHistoryReq
             * @property {number|null} [page] GetPlayerHistoryReq page
             * @property {number|Long|null} [startTime] GetPlayerHistoryReq startTime
             * @property {number|Long|null} [endTime] GetPlayerHistoryReq endTime
             */

            /**
             * Constructs a new GetPlayerHistoryReq.
             * @memberof bato.v1
             * @classdesc Represents a GetPlayerHistoryReq.
             * @implements IGetPlayerHistoryReq
             * @constructor
             * @param {bato.v1.IGetPlayerHistoryReq=} [properties] Properties to set
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
             * @memberof bato.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.page = 0;

            /**
             * GetPlayerHistoryReq startTime.
             * @member {number|Long} startTime
             * @memberof bato.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetPlayerHistoryReq endTime.
             * @member {number|Long} endTime
             * @memberof bato.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GetPlayerHistoryReq instance using the specified properties.
             * @function create
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {bato.v1.IGetPlayerHistoryReq=} [properties] Properties to set
             * @returns {bato.v1.GetPlayerHistoryReq} GetPlayerHistoryReq instance
             */
            GetPlayerHistoryReq.create = function create(properties) {
                return new GetPlayerHistoryReq(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryReq message. Does not implicitly {@link bato.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {bato.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
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
             * Encodes the specified GetPlayerHistoryReq message, length delimited. Does not implicitly {@link bato.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {bato.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.GetPlayerHistoryReq();
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
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
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
             * @memberof bato.v1.GetPlayerHistoryReq
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
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             */
            GetPlayerHistoryReq.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.GetPlayerHistoryReq)
                    return object;
                var message = new $root.bato.v1.GetPlayerHistoryReq();
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
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {bato.v1.GetPlayerHistoryReq} message GetPlayerHistoryReq
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
             * @memberof bato.v1.GetPlayerHistoryReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryReq
             * @function getTypeUrl
             * @memberof bato.v1.GetPlayerHistoryReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.GetPlayerHistoryReq";
            };

            return GetPlayerHistoryReq;
        })();

        v1.GetPlayerHistoryRes = (function() {

            /**
             * Properties of a GetPlayerHistoryRes.
             * @memberof bato.v1
             * @interface IGetPlayerHistoryRes
             * @property {Array.<bato.v1.IPlayerHistory>|null} [record] GetPlayerHistoryRes record
             */

            /**
             * Constructs a new GetPlayerHistoryRes.
             * @memberof bato.v1
             * @classdesc Represents a GetPlayerHistoryRes.
             * @implements IGetPlayerHistoryRes
             * @constructor
             * @param {bato.v1.IGetPlayerHistoryRes=} [properties] Properties to set
             */
            function GetPlayerHistoryRes(properties) {
                this.record = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetPlayerHistoryRes record.
             * @member {Array.<bato.v1.IPlayerHistory>} record
             * @memberof bato.v1.GetPlayerHistoryRes
             * @instance
             */
            GetPlayerHistoryRes.prototype.record = $util.emptyArray;

            /**
             * Creates a new GetPlayerHistoryRes instance using the specified properties.
             * @function create
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {bato.v1.IGetPlayerHistoryRes=} [properties] Properties to set
             * @returns {bato.v1.GetPlayerHistoryRes} GetPlayerHistoryRes instance
             */
            GetPlayerHistoryRes.create = function create(properties) {
                return new GetPlayerHistoryRes(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message. Does not implicitly {@link bato.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {bato.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.record != null && message.record.length)
                    for (var i = 0; i < message.record.length; ++i)
                        $root.bato.v1.PlayerHistory.encode(message.record[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message, length delimited. Does not implicitly {@link bato.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {bato.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.GetPlayerHistoryRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.record && message.record.length))
                                message.record = [];
                            message.record.push($root.bato.v1.PlayerHistory.decode(reader, reader.uint32()));
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
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
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
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetPlayerHistoryRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.record != null && message.hasOwnProperty("record")) {
                    if (!Array.isArray(message.record))
                        return "record: array expected";
                    for (var i = 0; i < message.record.length; ++i) {
                        var error = $root.bato.v1.PlayerHistory.verify(message.record[i]);
                        if (error)
                            return "record." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetPlayerHistoryRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             */
            GetPlayerHistoryRes.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.GetPlayerHistoryRes)
                    return object;
                var message = new $root.bato.v1.GetPlayerHistoryRes();
                if (object.record) {
                    if (!Array.isArray(object.record))
                        throw TypeError(".bato.v1.GetPlayerHistoryRes.record: array expected");
                    message.record = [];
                    for (var i = 0; i < object.record.length; ++i) {
                        if (typeof object.record[i] !== "object")
                            throw TypeError(".bato.v1.GetPlayerHistoryRes.record: object expected");
                        message.record[i] = $root.bato.v1.PlayerHistory.fromObject(object.record[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetPlayerHistoryRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {bato.v1.GetPlayerHistoryRes} message GetPlayerHistoryRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetPlayerHistoryRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.record = [];
                if (message.record && message.record.length) {
                    object.record = [];
                    for (var j = 0; j < message.record.length; ++j)
                        object.record[j] = $root.bato.v1.PlayerHistory.toObject(message.record[j], options);
                }
                return object;
            };

            /**
             * Converts this GetPlayerHistoryRes to JSON.
             * @function toJSON
             * @memberof bato.v1.GetPlayerHistoryRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryRes
             * @function getTypeUrl
             * @memberof bato.v1.GetPlayerHistoryRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.GetPlayerHistoryRes";
            };

            return GetPlayerHistoryRes;
        })();

        v1.PlayerHistory = (function() {

            /**
             * Properties of a PlayerHistory.
             * @memberof bato.v1
             * @interface IPlayerHistory
             * @property {number|Long|null} [userId] PlayerHistory userId
             * @property {number|Long|null} [time] PlayerHistory time
             * @property {number|Long|null} [cost] PlayerHistory cost
             * @property {number|Long|null} [reward] PlayerHistory reward
             * @property {Array.<bato.v1.IBatoResult>|null} [results] PlayerHistory results
             * @property {string|null} [gameCode] PlayerHistory gameCode
             */

            /**
             * Constructs a new PlayerHistory.
             * @memberof bato.v1
             * @classdesc Represents a PlayerHistory.
             * @implements IPlayerHistory
             * @constructor
             * @param {bato.v1.IPlayerHistory=} [properties] Properties to set
             */
            function PlayerHistory(properties) {
                this.results = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerHistory userId.
             * @member {number|Long} userId
             * @memberof bato.v1.PlayerHistory
             * @instance
             */
            PlayerHistory.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerHistory time.
             * @member {number|Long} time
             * @memberof bato.v1.PlayerHistory
             * @instance
             */
            PlayerHistory.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerHistory cost.
             * @member {number|Long} cost
             * @memberof bato.v1.PlayerHistory
             * @instance
             */
            PlayerHistory.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerHistory reward.
             * @member {number|Long} reward
             * @memberof bato.v1.PlayerHistory
             * @instance
             */
            PlayerHistory.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerHistory results.
             * @member {Array.<bato.v1.IBatoResult>} results
             * @memberof bato.v1.PlayerHistory
             * @instance
             */
            PlayerHistory.prototype.results = $util.emptyArray;

            /**
             * PlayerHistory gameCode.
             * @member {string} gameCode
             * @memberof bato.v1.PlayerHistory
             * @instance
             */
            PlayerHistory.prototype.gameCode = "";

            /**
             * Creates a new PlayerHistory instance using the specified properties.
             * @function create
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {bato.v1.IPlayerHistory=} [properties] Properties to set
             * @returns {bato.v1.PlayerHistory} PlayerHistory instance
             */
            PlayerHistory.create = function create(properties) {
                return new PlayerHistory(properties);
            };

            /**
             * Encodes the specified PlayerHistory message. Does not implicitly {@link bato.v1.PlayerHistory.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {bato.v1.IPlayerHistory} message PlayerHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
                if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.cost);
                if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.reward);
                if (message.results != null && message.results.length)
                    for (var i = 0; i < message.results.length; ++i)
                        $root.bato.v1.BatoResult.encode(message.results[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.gameCode != null && Object.hasOwnProperty.call(message, "gameCode"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.gameCode);
                return writer;
            };

            /**
             * Encodes the specified PlayerHistory message, length delimited. Does not implicitly {@link bato.v1.PlayerHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {bato.v1.IPlayerHistory} message PlayerHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerHistory message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.PlayerHistory} PlayerHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerHistory.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.PlayerHistory();
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
                            message.time = reader.int64();
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
                            if (!(message.results && message.results.length))
                                message.results = [];
                            message.results.push($root.bato.v1.BatoResult.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            message.gameCode = reader.string();
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
             * Decodes a PlayerHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.PlayerHistory} PlayerHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerHistory message.
             * @function verify
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.cost != null && message.hasOwnProperty("cost"))
                    if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                        return "cost: integer|Long expected";
                if (message.reward != null && message.hasOwnProperty("reward"))
                    if (!$util.isInteger(message.reward) && !(message.reward && $util.isInteger(message.reward.low) && $util.isInteger(message.reward.high)))
                        return "reward: integer|Long expected";
                if (message.results != null && message.hasOwnProperty("results")) {
                    if (!Array.isArray(message.results))
                        return "results: array expected";
                    for (var i = 0; i < message.results.length; ++i) {
                        var error = $root.bato.v1.BatoResult.verify(message.results[i]);
                        if (error)
                            return "results." + error;
                    }
                }
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    if (!$util.isString(message.gameCode))
                        return "gameCode: string expected";
                return null;
            };

            /**
             * Creates a PlayerHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.PlayerHistory} PlayerHistory
             */
            PlayerHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.PlayerHistory)
                    return object;
                var message = new $root.bato.v1.PlayerHistory();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
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
                if (object.results) {
                    if (!Array.isArray(object.results))
                        throw TypeError(".bato.v1.PlayerHistory.results: array expected");
                    message.results = [];
                    for (var i = 0; i < object.results.length; ++i) {
                        if (typeof object.results[i] !== "object")
                            throw TypeError(".bato.v1.PlayerHistory.results: object expected");
                        message.results[i] = $root.bato.v1.BatoResult.fromObject(object.results[i]);
                    }
                }
                if (object.gameCode != null)
                    message.gameCode = String(object.gameCode);
                return message;
            };

            /**
             * Creates a plain object from a PlayerHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {bato.v1.PlayerHistory} message PlayerHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.results = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
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
                    object.gameCode = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
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
                if (message.results && message.results.length) {
                    object.results = [];
                    for (var j = 0; j < message.results.length; ++j)
                        object.results[j] = $root.bato.v1.BatoResult.toObject(message.results[j], options);
                }
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    object.gameCode = message.gameCode;
                return object;
            };

            /**
             * Converts this PlayerHistory to JSON.
             * @function toJSON
             * @memberof bato.v1.PlayerHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerHistory
             * @function getTypeUrl
             * @memberof bato.v1.PlayerHistory
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerHistory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.PlayerHistory";
            };

            return PlayerHistory;
        })();

        v1.BatoResult = (function() {

            /**
             * Properties of a BatoResult.
             * @memberof bato.v1
             * @interface IBatoResult
             * @property {number|null} [round] BatoResult round
             * @property {number|null} [result] BatoResult result
             * @property {number|null} [card] BatoResult card
             */

            /**
             * Constructs a new BatoResult.
             * @memberof bato.v1
             * @classdesc Represents a BatoResult.
             * @implements IBatoResult
             * @constructor
             * @param {bato.v1.IBatoResult=} [properties] Properties to set
             */
            function BatoResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BatoResult round.
             * @member {number} round
             * @memberof bato.v1.BatoResult
             * @instance
             */
            BatoResult.prototype.round = 0;

            /**
             * BatoResult result.
             * @member {number} result
             * @memberof bato.v1.BatoResult
             * @instance
             */
            BatoResult.prototype.result = 0;

            /**
             * BatoResult card.
             * @member {number} card
             * @memberof bato.v1.BatoResult
             * @instance
             */
            BatoResult.prototype.card = 0;

            /**
             * Creates a new BatoResult instance using the specified properties.
             * @function create
             * @memberof bato.v1.BatoResult
             * @static
             * @param {bato.v1.IBatoResult=} [properties] Properties to set
             * @returns {bato.v1.BatoResult} BatoResult instance
             */
            BatoResult.create = function create(properties) {
                return new BatoResult(properties);
            };

            /**
             * Encodes the specified BatoResult message. Does not implicitly {@link bato.v1.BatoResult.verify|verify} messages.
             * @function encode
             * @memberof bato.v1.BatoResult
             * @static
             * @param {bato.v1.IBatoResult} message BatoResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatoResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.round != null && Object.hasOwnProperty.call(message, "round"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.card);
                return writer;
            };

            /**
             * Encodes the specified BatoResult message, length delimited. Does not implicitly {@link bato.v1.BatoResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bato.v1.BatoResult
             * @static
             * @param {bato.v1.IBatoResult} message BatoResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatoResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BatoResult message from the specified reader or buffer.
             * @function decode
             * @memberof bato.v1.BatoResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bato.v1.BatoResult} BatoResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatoResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bato.v1.BatoResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.round = reader.int32();
                            break;
                        }
                    case 2: {
                            message.result = reader.int32();
                            break;
                        }
                    case 3: {
                            message.card = reader.int32();
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
             * Decodes a BatoResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bato.v1.BatoResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bato.v1.BatoResult} BatoResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatoResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BatoResult message.
             * @function verify
             * @memberof bato.v1.BatoResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BatoResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.round != null && message.hasOwnProperty("round"))
                    if (!$util.isInteger(message.round))
                        return "round: integer expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                if (message.card != null && message.hasOwnProperty("card"))
                    if (!$util.isInteger(message.card))
                        return "card: integer expected";
                return null;
            };

            /**
             * Creates a BatoResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bato.v1.BatoResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bato.v1.BatoResult} BatoResult
             */
            BatoResult.fromObject = function fromObject(object) {
                if (object instanceof $root.bato.v1.BatoResult)
                    return object;
                var message = new $root.bato.v1.BatoResult();
                if (object.round != null)
                    message.round = object.round | 0;
                if (object.result != null)
                    message.result = object.result | 0;
                if (object.card != null)
                    message.card = object.card | 0;
                return message;
            };

            /**
             * Creates a plain object from a BatoResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bato.v1.BatoResult
             * @static
             * @param {bato.v1.BatoResult} message BatoResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BatoResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.round = 0;
                    object.result = 0;
                    object.card = 0;
                }
                if (message.round != null && message.hasOwnProperty("round"))
                    object.round = message.round;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                if (message.card != null && message.hasOwnProperty("card"))
                    object.card = message.card;
                return object;
            };

            /**
             * Converts this BatoResult to JSON.
             * @function toJSON
             * @memberof bato.v1.BatoResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BatoResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BatoResult
             * @function getTypeUrl
             * @memberof bato.v1.BatoResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BatoResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bato.v1.BatoResult";
            };

            return BatoResult;
        })();

        return v1;
    })();

    return bato;
})();



module.exports = $root;
