/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});



$root.solitaire = (function() {

    /**
     * Namespace solitaire.
     * @exports solitaire
     * @namespace
     */
    var solitaire = {};

    solitaire.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof solitaire
         * @namespace
         */
        var v1 = {};

        v1.EmptyRes = (function() {

            /**
             * Properties of an EmptyRes.
             * @memberof solitaire.v1
             * @interface IEmptyRes
             */

            /**
             * Constructs a new EmptyRes.
             * @memberof solitaire.v1
             * @classdesc Represents an EmptyRes.
             * @implements IEmptyRes
             * @constructor
             * @param {solitaire.v1.IEmptyRes=} [properties] Properties to set
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
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {solitaire.v1.IEmptyRes=} [properties] Properties to set
             * @returns {solitaire.v1.EmptyRes} EmptyRes instance
             */
            EmptyRes.create = function create(properties) {
                return new EmptyRes(properties);
            };

            /**
             * Encodes the specified EmptyRes message. Does not implicitly {@link solitaire.v1.EmptyRes.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {solitaire.v1.IEmptyRes} message EmptyRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified EmptyRes message, length delimited. Does not implicitly {@link solitaire.v1.EmptyRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {solitaire.v1.IEmptyRes} message EmptyRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EmptyRes message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.EmptyRes} EmptyRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmptyRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.EmptyRes();
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
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.EmptyRes} EmptyRes
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
             * @memberof solitaire.v1.EmptyRes
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
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.EmptyRes} EmptyRes
             */
            EmptyRes.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.EmptyRes)
                    return object;
                return new $root.solitaire.v1.EmptyRes();
            };

            /**
             * Creates a plain object from an EmptyRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {solitaire.v1.EmptyRes} message EmptyRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EmptyRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this EmptyRes to JSON.
             * @function toJSON
             * @memberof solitaire.v1.EmptyRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EmptyRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EmptyRes
             * @function getTypeUrl
             * @memberof solitaire.v1.EmptyRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EmptyRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.EmptyRes";
            };

            return EmptyRes;
        })();

        v1.JoinRoomReq = (function() {

            /**
             * Properties of a JoinRoomReq.
             * @memberof solitaire.v1
             * @interface IJoinRoomReq
             * @property {number|Long|null} [roomId] JoinRoomReq roomId
             */

            /**
             * Constructs a new JoinRoomReq.
             * @memberof solitaire.v1
             * @classdesc Represents a JoinRoomReq.
             * @implements IJoinRoomReq
             * @constructor
             * @param {solitaire.v1.IJoinRoomReq=} [properties] Properties to set
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
             * @memberof solitaire.v1.JoinRoomReq
             * @instance
             */
            JoinRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {solitaire.v1.IJoinRoomReq=} [properties] Properties to set
             * @returns {solitaire.v1.JoinRoomReq} JoinRoomReq instance
             */
            JoinRoomReq.create = function create(properties) {
                return new JoinRoomReq(properties);
            };

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link solitaire.v1.JoinRoomReq.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {solitaire.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
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
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link solitaire.v1.JoinRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {solitaire.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.JoinRoomReq} JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.JoinRoomReq();
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
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.JoinRoomReq} JoinRoomReq
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
             * @memberof solitaire.v1.JoinRoomReq
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
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.JoinRoomReq} JoinRoomReq
             */
            JoinRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.JoinRoomReq)
                    return object;
                var message = new $root.solitaire.v1.JoinRoomReq();
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
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {solitaire.v1.JoinRoomReq} message JoinRoomReq
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
             * @memberof solitaire.v1.JoinRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomReq
             * @function getTypeUrl
             * @memberof solitaire.v1.JoinRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.JoinRoomReq";
            };

            return JoinRoomReq;
        })();

        v1.JoinRoomRes = (function() {

            /**
             * Properties of a JoinRoomRes.
             * @memberof solitaire.v1
             * @interface IJoinRoomRes
             * @property {solitaire.v1.IRoomInfo|null} [roomInfo] JoinRoomRes roomInfo
             * @property {Array.<solitaire.v1.ISolitairePayerInfo>|null} [players] JoinRoomRes players
             * @property {Array.<common.v1.IPlayerInfo>|null} [watchers] JoinRoomRes watchers
             * @property {number|null} [playersCount] JoinRoomRes playersCount
             * @property {Array.<common.v1.IPlayerInfo>|null} [speakers] JoinRoomRes speakers
             * @property {solitaire.v1.ISolitairePayerInfo|null} [self] JoinRoomRes self
             * @property {solitaire.v1.IGameInfo|null} [gameInfo] JoinRoomRes gameInfo
             * @property {common.v1.IPlayerSettings|null} [playerSettings] JoinRoomRes playerSettings
             */

            /**
             * Constructs a new JoinRoomRes.
             * @memberof solitaire.v1
             * @classdesc Represents a JoinRoomRes.
             * @implements IJoinRoomRes
             * @constructor
             * @param {solitaire.v1.IJoinRoomRes=} [properties] Properties to set
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
             * @member {solitaire.v1.IRoomInfo|null|undefined} roomInfo
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.roomInfo = null;

            /**
             * JoinRoomRes players.
             * @member {Array.<solitaire.v1.ISolitairePayerInfo>} players
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.players = $util.emptyArray;

            /**
             * JoinRoomRes watchers.
             * @member {Array.<common.v1.IPlayerInfo>} watchers
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.watchers = $util.emptyArray;

            /**
             * JoinRoomRes playersCount.
             * @member {number} playersCount
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playersCount = 0;

            /**
             * JoinRoomRes speakers.
             * @member {Array.<common.v1.IPlayerInfo>} speakers
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.speakers = $util.emptyArray;

            /**
             * JoinRoomRes self.
             * @member {solitaire.v1.ISolitairePayerInfo|null|undefined} self
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.self = null;

            /**
             * JoinRoomRes gameInfo.
             * @member {solitaire.v1.IGameInfo|null|undefined} gameInfo
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.gameInfo = null;

            /**
             * JoinRoomRes playerSettings.
             * @member {common.v1.IPlayerSettings|null|undefined} playerSettings
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playerSettings = null;

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {solitaire.v1.IJoinRoomRes=} [properties] Properties to set
             * @returns {solitaire.v1.JoinRoomRes} JoinRoomRes instance
             */
            JoinRoomRes.create = function create(properties) {
                return new JoinRoomRes(properties);
            };

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link solitaire.v1.JoinRoomRes.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {solitaire.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                    $root.solitaire.v1.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.solitaire.v1.SolitairePayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.watchers != null && message.watchers.length)
                    for (var i = 0; i < message.watchers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.watchers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playersCount);
                if (message.speakers != null && message.speakers.length)
                    for (var i = 0; i < message.speakers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.speakers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.solitaire.v1.SolitairePayerInfo.encode(message.self, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.solitaire.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.playerSettings != null && Object.hasOwnProperty.call(message, "playerSettings"))
                    $root.common.v1.PlayerSettings.encode(message.playerSettings, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link solitaire.v1.JoinRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {solitaire.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.JoinRoomRes} JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.JoinRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.roomInfo = $root.solitaire.v1.RoomInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.solitaire.v1.SolitairePayerInfo.decode(reader, reader.uint32()));
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
                            message.self = $root.solitaire.v1.SolitairePayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.gameInfo = $root.solitaire.v1.GameInfo.decode(reader, reader.uint32());
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
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.JoinRoomRes} JoinRoomRes
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
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                    var error = $root.solitaire.v1.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.solitaire.v1.SolitairePayerInfo.verify(message.players[i]);
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
                    var error = $root.solitaire.v1.SolitairePayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.solitaire.v1.GameInfo.verify(message.gameInfo);
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
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.JoinRoomRes} JoinRoomRes
             */
            JoinRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.JoinRoomRes)
                    return object;
                var message = new $root.solitaire.v1.JoinRoomRes();
                if (object.roomInfo != null) {
                    if (typeof object.roomInfo !== "object")
                        throw TypeError(".solitaire.v1.JoinRoomRes.roomInfo: object expected");
                    message.roomInfo = $root.solitaire.v1.RoomInfo.fromObject(object.roomInfo);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".solitaire.v1.JoinRoomRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".solitaire.v1.JoinRoomRes.players: object expected");
                        message.players[i] = $root.solitaire.v1.SolitairePayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.watchers) {
                    if (!Array.isArray(object.watchers))
                        throw TypeError(".solitaire.v1.JoinRoomRes.watchers: array expected");
                    message.watchers = [];
                    for (var i = 0; i < object.watchers.length; ++i) {
                        if (typeof object.watchers[i] !== "object")
                            throw TypeError(".solitaire.v1.JoinRoomRes.watchers: object expected");
                        message.watchers[i] = $root.common.v1.PlayerInfo.fromObject(object.watchers[i]);
                    }
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                if (object.speakers) {
                    if (!Array.isArray(object.speakers))
                        throw TypeError(".solitaire.v1.JoinRoomRes.speakers: array expected");
                    message.speakers = [];
                    for (var i = 0; i < object.speakers.length; ++i) {
                        if (typeof object.speakers[i] !== "object")
                            throw TypeError(".solitaire.v1.JoinRoomRes.speakers: object expected");
                        message.speakers[i] = $root.common.v1.PlayerInfo.fromObject(object.speakers[i]);
                    }
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".solitaire.v1.JoinRoomRes.self: object expected");
                    message.self = $root.solitaire.v1.SolitairePayerInfo.fromObject(object.self);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".solitaire.v1.JoinRoomRes.gameInfo: object expected");
                    message.gameInfo = $root.solitaire.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.playerSettings != null) {
                    if (typeof object.playerSettings !== "object")
                        throw TypeError(".solitaire.v1.JoinRoomRes.playerSettings: object expected");
                    message.playerSettings = $root.common.v1.PlayerSettings.fromObject(object.playerSettings);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {solitaire.v1.JoinRoomRes} message JoinRoomRes
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
                    object.roomInfo = $root.solitaire.v1.RoomInfo.toObject(message.roomInfo, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.solitaire.v1.SolitairePayerInfo.toObject(message.players[j], options);
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
                    object.self = $root.solitaire.v1.SolitairePayerInfo.toObject(message.self, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.solitaire.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.playerSettings != null && message.hasOwnProperty("playerSettings"))
                    object.playerSettings = $root.common.v1.PlayerSettings.toObject(message.playerSettings, options);
                return object;
            };

            /**
             * Converts this JoinRoomRes to JSON.
             * @function toJSON
             * @memberof solitaire.v1.JoinRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomRes
             * @function getTypeUrl
             * @memberof solitaire.v1.JoinRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.JoinRoomRes";
            };

            return JoinRoomRes;
        })();

        v1.StartGameReq = (function() {

            /**
             * Properties of a StartGameReq.
             * @memberof solitaire.v1
             * @interface IStartGameReq
             */

            /**
             * Constructs a new StartGameReq.
             * @memberof solitaire.v1
             * @classdesc Represents a StartGameReq.
             * @implements IStartGameReq
             * @constructor
             * @param {solitaire.v1.IStartGameReq=} [properties] Properties to set
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
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {solitaire.v1.IStartGameReq=} [properties] Properties to set
             * @returns {solitaire.v1.StartGameReq} StartGameReq instance
             */
            StartGameReq.create = function create(properties) {
                return new StartGameReq(properties);
            };

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link solitaire.v1.StartGameReq.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {solitaire.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link solitaire.v1.StartGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {solitaire.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.StartGameReq} StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.StartGameReq();
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
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.StartGameReq} StartGameReq
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
             * @memberof solitaire.v1.StartGameReq
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
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.StartGameReq} StartGameReq
             */
            StartGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.StartGameReq)
                    return object;
                return new $root.solitaire.v1.StartGameReq();
            };

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {solitaire.v1.StartGameReq} message StartGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameReq to JSON.
             * @function toJSON
             * @memberof solitaire.v1.StartGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameReq
             * @function getTypeUrl
             * @memberof solitaire.v1.StartGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.StartGameReq";
            };

            return StartGameReq;
        })();

        v1.StartGameRes = (function() {

            /**
             * Properties of a StartGameRes.
             * @memberof solitaire.v1
             * @interface IStartGameRes
             */

            /**
             * Constructs a new StartGameRes.
             * @memberof solitaire.v1
             * @classdesc Represents a StartGameRes.
             * @implements IStartGameRes
             * @constructor
             * @param {solitaire.v1.IStartGameRes=} [properties] Properties to set
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
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {solitaire.v1.IStartGameRes=} [properties] Properties to set
             * @returns {solitaire.v1.StartGameRes} StartGameRes instance
             */
            StartGameRes.create = function create(properties) {
                return new StartGameRes(properties);
            };

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link solitaire.v1.StartGameRes.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {solitaire.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link solitaire.v1.StartGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {solitaire.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.StartGameRes} StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.StartGameRes();
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
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.StartGameRes} StartGameRes
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
             * @memberof solitaire.v1.StartGameRes
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
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.StartGameRes} StartGameRes
             */
            StartGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.StartGameRes)
                    return object;
                return new $root.solitaire.v1.StartGameRes();
            };

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {solitaire.v1.StartGameRes} message StartGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameRes to JSON.
             * @function toJSON
             * @memberof solitaire.v1.StartGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameRes
             * @function getTypeUrl
             * @memberof solitaire.v1.StartGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.StartGameRes";
            };

            return StartGameRes;
        })();

        v1.ConnectorCardReq = (function() {

            /**
             * Properties of a ConnectorCardReq.
             * @memberof solitaire.v1
             * @interface IConnectorCardReq
             * @property {number|null} [actionType] ConnectorCardReq actionType
             * @property {number|null} [cardId] ConnectorCardReq cardId
             */

            /**
             * Constructs a new ConnectorCardReq.
             * @memberof solitaire.v1
             * @classdesc Represents a ConnectorCardReq.
             * @implements IConnectorCardReq
             * @constructor
             * @param {solitaire.v1.IConnectorCardReq=} [properties] Properties to set
             */
            function ConnectorCardReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectorCardReq actionType.
             * @member {number} actionType
             * @memberof solitaire.v1.ConnectorCardReq
             * @instance
             */
            ConnectorCardReq.prototype.actionType = 0;

            /**
             * ConnectorCardReq cardId.
             * @member {number} cardId
             * @memberof solitaire.v1.ConnectorCardReq
             * @instance
             */
            ConnectorCardReq.prototype.cardId = 0;

            /**
             * Creates a new ConnectorCardReq instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {solitaire.v1.IConnectorCardReq=} [properties] Properties to set
             * @returns {solitaire.v1.ConnectorCardReq} ConnectorCardReq instance
             */
            ConnectorCardReq.create = function create(properties) {
                return new ConnectorCardReq(properties);
            };

            /**
             * Encodes the specified ConnectorCardReq message. Does not implicitly {@link solitaire.v1.ConnectorCardReq.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {solitaire.v1.IConnectorCardReq} message ConnectorCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorCardReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actionType != null && Object.hasOwnProperty.call(message, "actionType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.actionType);
                if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardId);
                return writer;
            };

            /**
             * Encodes the specified ConnectorCardReq message, length delimited. Does not implicitly {@link solitaire.v1.ConnectorCardReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {solitaire.v1.IConnectorCardReq} message ConnectorCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorCardReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectorCardReq message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.ConnectorCardReq} ConnectorCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorCardReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.ConnectorCardReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.actionType = reader.int32();
                            break;
                        }
                    case 2: {
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
             * Decodes a ConnectorCardReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.ConnectorCardReq} ConnectorCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorCardReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectorCardReq message.
             * @function verify
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectorCardReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.actionType != null && message.hasOwnProperty("actionType"))
                    if (!$util.isInteger(message.actionType))
                        return "actionType: integer expected";
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    if (!$util.isInteger(message.cardId))
                        return "cardId: integer expected";
                return null;
            };

            /**
             * Creates a ConnectorCardReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.ConnectorCardReq} ConnectorCardReq
             */
            ConnectorCardReq.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.ConnectorCardReq)
                    return object;
                var message = new $root.solitaire.v1.ConnectorCardReq();
                if (object.actionType != null)
                    message.actionType = object.actionType | 0;
                if (object.cardId != null)
                    message.cardId = object.cardId | 0;
                return message;
            };

            /**
             * Creates a plain object from a ConnectorCardReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {solitaire.v1.ConnectorCardReq} message ConnectorCardReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectorCardReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.actionType = 0;
                    object.cardId = 0;
                }
                if (message.actionType != null && message.hasOwnProperty("actionType"))
                    object.actionType = message.actionType;
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    object.cardId = message.cardId;
                return object;
            };

            /**
             * Converts this ConnectorCardReq to JSON.
             * @function toJSON
             * @memberof solitaire.v1.ConnectorCardReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectorCardReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConnectorCardReq
             * @function getTypeUrl
             * @memberof solitaire.v1.ConnectorCardReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectorCardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.ConnectorCardReq";
            };

            return ConnectorCardReq;
        })();

        v1.ConnectorCardRes = (function() {

            /**
             * Properties of a ConnectorCardRes.
             * @memberof solitaire.v1
             * @interface IConnectorCardRes
             * @property {number|null} [actionType] ConnectorCardRes actionType
             * @property {solitaire.v1.IGameInfo|null} [gameInfo] ConnectorCardRes gameInfo
             * @property {number|null} [cardNum] ConnectorCardRes cardNum
             */

            /**
             * Constructs a new ConnectorCardRes.
             * @memberof solitaire.v1
             * @classdesc Represents a ConnectorCardRes.
             * @implements IConnectorCardRes
             * @constructor
             * @param {solitaire.v1.IConnectorCardRes=} [properties] Properties to set
             */
            function ConnectorCardRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectorCardRes actionType.
             * @member {number} actionType
             * @memberof solitaire.v1.ConnectorCardRes
             * @instance
             */
            ConnectorCardRes.prototype.actionType = 0;

            /**
             * ConnectorCardRes gameInfo.
             * @member {solitaire.v1.IGameInfo|null|undefined} gameInfo
             * @memberof solitaire.v1.ConnectorCardRes
             * @instance
             */
            ConnectorCardRes.prototype.gameInfo = null;

            /**
             * ConnectorCardRes cardNum.
             * @member {number} cardNum
             * @memberof solitaire.v1.ConnectorCardRes
             * @instance
             */
            ConnectorCardRes.prototype.cardNum = 0;

            /**
             * Creates a new ConnectorCardRes instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {solitaire.v1.IConnectorCardRes=} [properties] Properties to set
             * @returns {solitaire.v1.ConnectorCardRes} ConnectorCardRes instance
             */
            ConnectorCardRes.create = function create(properties) {
                return new ConnectorCardRes(properties);
            };

            /**
             * Encodes the specified ConnectorCardRes message. Does not implicitly {@link solitaire.v1.ConnectorCardRes.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {solitaire.v1.IConnectorCardRes} message ConnectorCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorCardRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actionType != null && Object.hasOwnProperty.call(message, "actionType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.actionType);
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.solitaire.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.cardNum != null && Object.hasOwnProperty.call(message, "cardNum"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardNum);
                return writer;
            };

            /**
             * Encodes the specified ConnectorCardRes message, length delimited. Does not implicitly {@link solitaire.v1.ConnectorCardRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {solitaire.v1.IConnectorCardRes} message ConnectorCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorCardRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectorCardRes message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.ConnectorCardRes} ConnectorCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorCardRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.ConnectorCardRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.actionType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.gameInfo = $root.solitaire.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.cardNum = reader.int32();
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
             * Decodes a ConnectorCardRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.ConnectorCardRes} ConnectorCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorCardRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectorCardRes message.
             * @function verify
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectorCardRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.actionType != null && message.hasOwnProperty("actionType"))
                    if (!$util.isInteger(message.actionType))
                        return "actionType: integer expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.solitaire.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                    if (!$util.isInteger(message.cardNum))
                        return "cardNum: integer expected";
                return null;
            };

            /**
             * Creates a ConnectorCardRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.ConnectorCardRes} ConnectorCardRes
             */
            ConnectorCardRes.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.ConnectorCardRes)
                    return object;
                var message = new $root.solitaire.v1.ConnectorCardRes();
                if (object.actionType != null)
                    message.actionType = object.actionType | 0;
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".solitaire.v1.ConnectorCardRes.gameInfo: object expected");
                    message.gameInfo = $root.solitaire.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.cardNum != null)
                    message.cardNum = object.cardNum | 0;
                return message;
            };

            /**
             * Creates a plain object from a ConnectorCardRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {solitaire.v1.ConnectorCardRes} message ConnectorCardRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectorCardRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.actionType = 0;
                    object.gameInfo = null;
                    object.cardNum = 0;
                }
                if (message.actionType != null && message.hasOwnProperty("actionType"))
                    object.actionType = message.actionType;
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.solitaire.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                    object.cardNum = message.cardNum;
                return object;
            };

            /**
             * Converts this ConnectorCardRes to JSON.
             * @function toJSON
             * @memberof solitaire.v1.ConnectorCardRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectorCardRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConnectorCardRes
             * @function getTypeUrl
             * @memberof solitaire.v1.ConnectorCardRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectorCardRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.ConnectorCardRes";
            };

            return ConnectorCardRes;
        })();

        v1.StartGameBroadcast = (function() {

            /**
             * Properties of a StartGameBroadcast.
             * @memberof solitaire.v1
             * @interface IStartGameBroadcast
             * @property {number|Long|null} [userId] StartGameBroadcast userId
             * @property {solitaire.v1.IGameInfo|null} [gameInfo] StartGameBroadcast gameInfo
             */

            /**
             * Constructs a new StartGameBroadcast.
             * @memberof solitaire.v1
             * @classdesc Represents a StartGameBroadcast.
             * @implements IStartGameBroadcast
             * @constructor
             * @param {solitaire.v1.IStartGameBroadcast=} [properties] Properties to set
             */
            function StartGameBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartGameBroadcast userId.
             * @member {number|Long} userId
             * @memberof solitaire.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * StartGameBroadcast gameInfo.
             * @member {solitaire.v1.IGameInfo|null|undefined} gameInfo
             * @memberof solitaire.v1.StartGameBroadcast
             * @instance
             */
            StartGameBroadcast.prototype.gameInfo = null;

            /**
             * Creates a new StartGameBroadcast instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {solitaire.v1.IStartGameBroadcast=} [properties] Properties to set
             * @returns {solitaire.v1.StartGameBroadcast} StartGameBroadcast instance
             */
            StartGameBroadcast.create = function create(properties) {
                return new StartGameBroadcast(properties);
            };

            /**
             * Encodes the specified StartGameBroadcast message. Does not implicitly {@link solitaire.v1.StartGameBroadcast.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {solitaire.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.solitaire.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StartGameBroadcast message, length delimited. Does not implicitly {@link solitaire.v1.StartGameBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {solitaire.v1.IStartGameBroadcast} message StartGameBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.StartGameBroadcast} StartGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.StartGameBroadcast();
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
                            message.gameInfo = $root.solitaire.v1.GameInfo.decode(reader, reader.uint32());
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
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.StartGameBroadcast} StartGameBroadcast
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
             * @memberof solitaire.v1.StartGameBroadcast
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
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.solitaire.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                return null;
            };

            /**
             * Creates a StartGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.StartGameBroadcast} StartGameBroadcast
             */
            StartGameBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.StartGameBroadcast)
                    return object;
                var message = new $root.solitaire.v1.StartGameBroadcast();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".solitaire.v1.StartGameBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.solitaire.v1.GameInfo.fromObject(object.gameInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a StartGameBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {solitaire.v1.StartGameBroadcast} message StartGameBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.solitaire.v1.GameInfo.toObject(message.gameInfo, options);
                return object;
            };

            /**
             * Converts this StartGameBroadcast to JSON.
             * @function toJSON
             * @memberof solitaire.v1.StartGameBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameBroadcast
             * @function getTypeUrl
             * @memberof solitaire.v1.StartGameBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.StartGameBroadcast";
            };

            return StartGameBroadcast;
        })();

        v1.ConnectorCardBroadcast = (function() {

            /**
             * Properties of a ConnectorCardBroadcast.
             * @memberof solitaire.v1
             * @interface IConnectorCardBroadcast
             * @property {number|Long|null} [gameUserId] ConnectorCardBroadcast gameUserId
             * @property {number|null} [actionType] ConnectorCardBroadcast actionType
             * @property {solitaire.v1.IGameInfo|null} [gameInfo] ConnectorCardBroadcast gameInfo
             * @property {number|null} [cardNum] ConnectorCardBroadcast cardNum
             * @property {number|Long|null} [userId] ConnectorCardBroadcast userId
             */

            /**
             * Constructs a new ConnectorCardBroadcast.
             * @memberof solitaire.v1
             * @classdesc Represents a ConnectorCardBroadcast.
             * @implements IConnectorCardBroadcast
             * @constructor
             * @param {solitaire.v1.IConnectorCardBroadcast=} [properties] Properties to set
             */
            function ConnectorCardBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectorCardBroadcast gameUserId.
             * @member {number|Long} gameUserId
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @instance
             */
            ConnectorCardBroadcast.prototype.gameUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ConnectorCardBroadcast actionType.
             * @member {number} actionType
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @instance
             */
            ConnectorCardBroadcast.prototype.actionType = 0;

            /**
             * ConnectorCardBroadcast gameInfo.
             * @member {solitaire.v1.IGameInfo|null|undefined} gameInfo
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @instance
             */
            ConnectorCardBroadcast.prototype.gameInfo = null;

            /**
             * ConnectorCardBroadcast cardNum.
             * @member {number} cardNum
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @instance
             */
            ConnectorCardBroadcast.prototype.cardNum = 0;

            /**
             * ConnectorCardBroadcast userId.
             * @member {number|Long} userId
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @instance
             */
            ConnectorCardBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ConnectorCardBroadcast instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {solitaire.v1.IConnectorCardBroadcast=} [properties] Properties to set
             * @returns {solitaire.v1.ConnectorCardBroadcast} ConnectorCardBroadcast instance
             */
            ConnectorCardBroadcast.create = function create(properties) {
                return new ConnectorCardBroadcast(properties);
            };

            /**
             * Encodes the specified ConnectorCardBroadcast message. Does not implicitly {@link solitaire.v1.ConnectorCardBroadcast.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {solitaire.v1.IConnectorCardBroadcast} message ConnectorCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorCardBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameUserId != null && Object.hasOwnProperty.call(message, "gameUserId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameUserId);
                if (message.actionType != null && Object.hasOwnProperty.call(message, "actionType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.actionType);
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.solitaire.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                if (message.cardNum != null && Object.hasOwnProperty.call(message, "cardNum"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cardNum);
                return writer;
            };

            /**
             * Encodes the specified ConnectorCardBroadcast message, length delimited. Does not implicitly {@link solitaire.v1.ConnectorCardBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {solitaire.v1.IConnectorCardBroadcast} message ConnectorCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorCardBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectorCardBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.ConnectorCardBroadcast} ConnectorCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorCardBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.ConnectorCardBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.gameUserId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.actionType = reader.int32();
                            break;
                        }
                    case 3: {
                            message.gameInfo = $root.solitaire.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.cardNum = reader.int32();
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
             * Decodes a ConnectorCardBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.ConnectorCardBroadcast} ConnectorCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorCardBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectorCardBroadcast message.
             * @function verify
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectorCardBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameUserId != null && message.hasOwnProperty("gameUserId"))
                    if (!$util.isInteger(message.gameUserId) && !(message.gameUserId && $util.isInteger(message.gameUserId.low) && $util.isInteger(message.gameUserId.high)))
                        return "gameUserId: integer|Long expected";
                if (message.actionType != null && message.hasOwnProperty("actionType"))
                    if (!$util.isInteger(message.actionType))
                        return "actionType: integer expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.solitaire.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                    if (!$util.isInteger(message.cardNum))
                        return "cardNum: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a ConnectorCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.ConnectorCardBroadcast} ConnectorCardBroadcast
             */
            ConnectorCardBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.ConnectorCardBroadcast)
                    return object;
                var message = new $root.solitaire.v1.ConnectorCardBroadcast();
                if (object.gameUserId != null)
                    if ($util.Long)
                        (message.gameUserId = $util.Long.fromValue(object.gameUserId)).unsigned = false;
                    else if (typeof object.gameUserId === "string")
                        message.gameUserId = parseInt(object.gameUserId, 10);
                    else if (typeof object.gameUserId === "number")
                        message.gameUserId = object.gameUserId;
                    else if (typeof object.gameUserId === "object")
                        message.gameUserId = new $util.LongBits(object.gameUserId.low >>> 0, object.gameUserId.high >>> 0).toNumber();
                if (object.actionType != null)
                    message.actionType = object.actionType | 0;
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".solitaire.v1.ConnectorCardBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.solitaire.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.cardNum != null)
                    message.cardNum = object.cardNum | 0;
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
             * Creates a plain object from a ConnectorCardBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {solitaire.v1.ConnectorCardBroadcast} message ConnectorCardBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectorCardBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.gameUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameUserId = options.longs === String ? "0" : 0;
                    object.actionType = 0;
                    object.gameInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.cardNum = 0;
                }
                if (message.gameUserId != null && message.hasOwnProperty("gameUserId"))
                    if (typeof message.gameUserId === "number")
                        object.gameUserId = options.longs === String ? String(message.gameUserId) : message.gameUserId;
                    else
                        object.gameUserId = options.longs === String ? $util.Long.prototype.toString.call(message.gameUserId) : options.longs === Number ? new $util.LongBits(message.gameUserId.low >>> 0, message.gameUserId.high >>> 0).toNumber() : message.gameUserId;
                if (message.actionType != null && message.hasOwnProperty("actionType"))
                    object.actionType = message.actionType;
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.solitaire.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                    object.cardNum = message.cardNum;
                return object;
            };

            /**
             * Converts this ConnectorCardBroadcast to JSON.
             * @function toJSON
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectorCardBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConnectorCardBroadcast
             * @function getTypeUrl
             * @memberof solitaire.v1.ConnectorCardBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectorCardBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.ConnectorCardBroadcast";
            };

            return ConnectorCardBroadcast;
        })();

        v1.ConnectorFinishedBroadcast = (function() {

            /**
             * Properties of a ConnectorFinishedBroadcast.
             * @memberof solitaire.v1
             * @interface IConnectorFinishedBroadcast
             * @property {number|Long|null} [finishedId] ConnectorFinishedBroadcast finishedId
             * @property {number|null} [timer] ConnectorFinishedBroadcast timer
             * @property {number|Long|null} [userId] ConnectorFinishedBroadcast userId
             */

            /**
             * Constructs a new ConnectorFinishedBroadcast.
             * @memberof solitaire.v1
             * @classdesc Represents a ConnectorFinishedBroadcast.
             * @implements IConnectorFinishedBroadcast
             * @constructor
             * @param {solitaire.v1.IConnectorFinishedBroadcast=} [properties] Properties to set
             */
            function ConnectorFinishedBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectorFinishedBroadcast finishedId.
             * @member {number|Long} finishedId
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @instance
             */
            ConnectorFinishedBroadcast.prototype.finishedId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ConnectorFinishedBroadcast timer.
             * @member {number} timer
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @instance
             */
            ConnectorFinishedBroadcast.prototype.timer = 0;

            /**
             * ConnectorFinishedBroadcast userId.
             * @member {number|Long} userId
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @instance
             */
            ConnectorFinishedBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ConnectorFinishedBroadcast instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {solitaire.v1.IConnectorFinishedBroadcast=} [properties] Properties to set
             * @returns {solitaire.v1.ConnectorFinishedBroadcast} ConnectorFinishedBroadcast instance
             */
            ConnectorFinishedBroadcast.create = function create(properties) {
                return new ConnectorFinishedBroadcast(properties);
            };

            /**
             * Encodes the specified ConnectorFinishedBroadcast message. Does not implicitly {@link solitaire.v1.ConnectorFinishedBroadcast.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {solitaire.v1.IConnectorFinishedBroadcast} message ConnectorFinishedBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorFinishedBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.finishedId != null && Object.hasOwnProperty.call(message, "finishedId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.finishedId);
                if (message.timer != null && Object.hasOwnProperty.call(message, "timer"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timer);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified ConnectorFinishedBroadcast message, length delimited. Does not implicitly {@link solitaire.v1.ConnectorFinishedBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {solitaire.v1.IConnectorFinishedBroadcast} message ConnectorFinishedBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectorFinishedBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectorFinishedBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.ConnectorFinishedBroadcast} ConnectorFinishedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorFinishedBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.ConnectorFinishedBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.finishedId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.timer = reader.int32();
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
             * Decodes a ConnectorFinishedBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.ConnectorFinishedBroadcast} ConnectorFinishedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectorFinishedBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectorFinishedBroadcast message.
             * @function verify
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectorFinishedBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.finishedId != null && message.hasOwnProperty("finishedId"))
                    if (!$util.isInteger(message.finishedId) && !(message.finishedId && $util.isInteger(message.finishedId.low) && $util.isInteger(message.finishedId.high)))
                        return "finishedId: integer|Long expected";
                if (message.timer != null && message.hasOwnProperty("timer"))
                    if (!$util.isInteger(message.timer))
                        return "timer: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a ConnectorFinishedBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.ConnectorFinishedBroadcast} ConnectorFinishedBroadcast
             */
            ConnectorFinishedBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.ConnectorFinishedBroadcast)
                    return object;
                var message = new $root.solitaire.v1.ConnectorFinishedBroadcast();
                if (object.finishedId != null)
                    if ($util.Long)
                        (message.finishedId = $util.Long.fromValue(object.finishedId)).unsigned = false;
                    else if (typeof object.finishedId === "string")
                        message.finishedId = parseInt(object.finishedId, 10);
                    else if (typeof object.finishedId === "number")
                        message.finishedId = object.finishedId;
                    else if (typeof object.finishedId === "object")
                        message.finishedId = new $util.LongBits(object.finishedId.low >>> 0, object.finishedId.high >>> 0).toNumber();
                if (object.timer != null)
                    message.timer = object.timer | 0;
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
             * Creates a plain object from a ConnectorFinishedBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {solitaire.v1.ConnectorFinishedBroadcast} message ConnectorFinishedBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectorFinishedBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.finishedId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.finishedId = options.longs === String ? "0" : 0;
                    object.timer = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.finishedId != null && message.hasOwnProperty("finishedId"))
                    if (typeof message.finishedId === "number")
                        object.finishedId = options.longs === String ? String(message.finishedId) : message.finishedId;
                    else
                        object.finishedId = options.longs === String ? $util.Long.prototype.toString.call(message.finishedId) : options.longs === Number ? new $util.LongBits(message.finishedId.low >>> 0, message.finishedId.high >>> 0).toNumber() : message.finishedId;
                if (message.timer != null && message.hasOwnProperty("timer"))
                    object.timer = message.timer;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this ConnectorFinishedBroadcast to JSON.
             * @function toJSON
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectorFinishedBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConnectorFinishedBroadcast
             * @function getTypeUrl
             * @memberof solitaire.v1.ConnectorFinishedBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectorFinishedBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.ConnectorFinishedBroadcast";
            };

            return ConnectorFinishedBroadcast;
        })();

        v1.GameResultBroadcast = (function() {

            /**
             * Properties of a GameResultBroadcast.
             * @memberof solitaire.v1
             * @interface IGameResultBroadcast
             * @property {number|Long|null} [userId] GameResultBroadcast userId
             * @property {solitaire.v1.IGameResult|null} [gameResult] GameResultBroadcast gameResult
             */

            /**
             * Constructs a new GameResultBroadcast.
             * @memberof solitaire.v1
             * @classdesc Represents a GameResultBroadcast.
             * @implements IGameResultBroadcast
             * @constructor
             * @param {solitaire.v1.IGameResultBroadcast=} [properties] Properties to set
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
             * @memberof solitaire.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameResultBroadcast gameResult.
             * @member {solitaire.v1.IGameResult|null|undefined} gameResult
             * @memberof solitaire.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.gameResult = null;

            /**
             * Creates a new GameResultBroadcast instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {solitaire.v1.IGameResultBroadcast=} [properties] Properties to set
             * @returns {solitaire.v1.GameResultBroadcast} GameResultBroadcast instance
             */
            GameResultBroadcast.create = function create(properties) {
                return new GameResultBroadcast(properties);
            };

            /**
             * Encodes the specified GameResultBroadcast message. Does not implicitly {@link solitaire.v1.GameResultBroadcast.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {solitaire.v1.IGameResultBroadcast} message GameResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.gameResult != null && Object.hasOwnProperty.call(message, "gameResult"))
                    $root.solitaire.v1.GameResult.encode(message.gameResult, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GameResultBroadcast message, length delimited. Does not implicitly {@link solitaire.v1.GameResultBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {solitaire.v1.IGameResultBroadcast} message GameResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameResultBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.GameResultBroadcast} GameResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.GameResultBroadcast();
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
                            message.gameResult = $root.solitaire.v1.GameResult.decode(reader, reader.uint32());
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
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.GameResultBroadcast} GameResultBroadcast
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
             * @memberof solitaire.v1.GameResultBroadcast
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
                    var error = $root.solitaire.v1.GameResult.verify(message.gameResult);
                    if (error)
                        return "gameResult." + error;
                }
                return null;
            };

            /**
             * Creates a GameResultBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.GameResultBroadcast} GameResultBroadcast
             */
            GameResultBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.GameResultBroadcast)
                    return object;
                var message = new $root.solitaire.v1.GameResultBroadcast();
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
                        throw TypeError(".solitaire.v1.GameResultBroadcast.gameResult: object expected");
                    message.gameResult = $root.solitaire.v1.GameResult.fromObject(object.gameResult);
                }
                return message;
            };

            /**
             * Creates a plain object from a GameResultBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {solitaire.v1.GameResultBroadcast} message GameResultBroadcast
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
                    object.gameResult = $root.solitaire.v1.GameResult.toObject(message.gameResult, options);
                return object;
            };

            /**
             * Converts this GameResultBroadcast to JSON.
             * @function toJSON
             * @memberof solitaire.v1.GameResultBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameResultBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameResultBroadcast
             * @function getTypeUrl
             * @memberof solitaire.v1.GameResultBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResultBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.GameResultBroadcast";
            };

            return GameResultBroadcast;
        })();

        v1.RoomResetBroadcast = (function() {

            /**
             * Properties of a RoomResetBroadcast.
             * @memberof solitaire.v1
             * @interface IRoomResetBroadcast
             * @property {Array.<solitaire.v1.ISolitairePayerInfo>|null} [players] RoomResetBroadcast players
             * @property {solitaire.v1.ISolitairePayerInfo|null} [self] RoomResetBroadcast self
             * @property {solitaire.v1.IGameInfo|null} [gameInfo] RoomResetBroadcast gameInfo
             * @property {number|Long|null} [userId] RoomResetBroadcast userId
             */

            /**
             * Constructs a new RoomResetBroadcast.
             * @memberof solitaire.v1
             * @classdesc Represents a RoomResetBroadcast.
             * @implements IRoomResetBroadcast
             * @constructor
             * @param {solitaire.v1.IRoomResetBroadcast=} [properties] Properties to set
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
             * @member {Array.<solitaire.v1.ISolitairePayerInfo>} players
             * @memberof solitaire.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.players = $util.emptyArray;

            /**
             * RoomResetBroadcast self.
             * @member {solitaire.v1.ISolitairePayerInfo|null|undefined} self
             * @memberof solitaire.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.self = null;

            /**
             * RoomResetBroadcast gameInfo.
             * @member {solitaire.v1.IGameInfo|null|undefined} gameInfo
             * @memberof solitaire.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.gameInfo = null;

            /**
             * RoomResetBroadcast userId.
             * @member {number|Long} userId
             * @memberof solitaire.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RoomResetBroadcast instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {solitaire.v1.IRoomResetBroadcast=} [properties] Properties to set
             * @returns {solitaire.v1.RoomResetBroadcast} RoomResetBroadcast instance
             */
            RoomResetBroadcast.create = function create(properties) {
                return new RoomResetBroadcast(properties);
            };

            /**
             * Encodes the specified RoomResetBroadcast message. Does not implicitly {@link solitaire.v1.RoomResetBroadcast.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {solitaire.v1.IRoomResetBroadcast} message RoomResetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomResetBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.solitaire.v1.SolitairePayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.solitaire.v1.SolitairePayerInfo.encode(message.self, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.solitaire.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified RoomResetBroadcast message, length delimited. Does not implicitly {@link solitaire.v1.RoomResetBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {solitaire.v1.IRoomResetBroadcast} message RoomResetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomResetBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomResetBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.RoomResetBroadcast} RoomResetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomResetBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.RoomResetBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.solitaire.v1.SolitairePayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.self = $root.solitaire.v1.SolitairePayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.gameInfo = $root.solitaire.v1.GameInfo.decode(reader, reader.uint32());
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
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.RoomResetBroadcast} RoomResetBroadcast
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
             * @memberof solitaire.v1.RoomResetBroadcast
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
                        var error = $root.solitaire.v1.SolitairePayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.solitaire.v1.SolitairePayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.solitaire.v1.GameInfo.verify(message.gameInfo);
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
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.RoomResetBroadcast} RoomResetBroadcast
             */
            RoomResetBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.RoomResetBroadcast)
                    return object;
                var message = new $root.solitaire.v1.RoomResetBroadcast();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".solitaire.v1.RoomResetBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".solitaire.v1.RoomResetBroadcast.players: object expected");
                        message.players[i] = $root.solitaire.v1.SolitairePayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".solitaire.v1.RoomResetBroadcast.self: object expected");
                    message.self = $root.solitaire.v1.SolitairePayerInfo.fromObject(object.self);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".solitaire.v1.RoomResetBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.solitaire.v1.GameInfo.fromObject(object.gameInfo);
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
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {solitaire.v1.RoomResetBroadcast} message RoomResetBroadcast
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
                        object.players[j] = $root.solitaire.v1.SolitairePayerInfo.toObject(message.players[j], options);
                }
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.solitaire.v1.SolitairePayerInfo.toObject(message.self, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.solitaire.v1.GameInfo.toObject(message.gameInfo, options);
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
             * @memberof solitaire.v1.RoomResetBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomResetBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomResetBroadcast
             * @function getTypeUrl
             * @memberof solitaire.v1.RoomResetBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomResetBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.RoomResetBroadcast";
            };

            return RoomResetBroadcast;
        })();

        v1.ViewChangeBroadcast = (function() {

            /**
             * Properties of a ViewChangeBroadcast.
             * @memberof solitaire.v1
             * @interface IViewChangeBroadcast
             * @property {solitaire.v1.ISolitairePayerInfo|null} [viewPlayer] ViewChangeBroadcast viewPlayer
             * @property {solitaire.v1.IGameInfo|null} [gameInfo] ViewChangeBroadcast gameInfo
             * @property {number|Long|null} [userId] ViewChangeBroadcast userId
             */

            /**
             * Constructs a new ViewChangeBroadcast.
             * @memberof solitaire.v1
             * @classdesc Represents a ViewChangeBroadcast.
             * @implements IViewChangeBroadcast
             * @constructor
             * @param {solitaire.v1.IViewChangeBroadcast=} [properties] Properties to set
             */
            function ViewChangeBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ViewChangeBroadcast viewPlayer.
             * @member {solitaire.v1.ISolitairePayerInfo|null|undefined} viewPlayer
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @instance
             */
            ViewChangeBroadcast.prototype.viewPlayer = null;

            /**
             * ViewChangeBroadcast gameInfo.
             * @member {solitaire.v1.IGameInfo|null|undefined} gameInfo
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @instance
             */
            ViewChangeBroadcast.prototype.gameInfo = null;

            /**
             * ViewChangeBroadcast userId.
             * @member {number|Long} userId
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @instance
             */
            ViewChangeBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ViewChangeBroadcast instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {solitaire.v1.IViewChangeBroadcast=} [properties] Properties to set
             * @returns {solitaire.v1.ViewChangeBroadcast} ViewChangeBroadcast instance
             */
            ViewChangeBroadcast.create = function create(properties) {
                return new ViewChangeBroadcast(properties);
            };

            /**
             * Encodes the specified ViewChangeBroadcast message. Does not implicitly {@link solitaire.v1.ViewChangeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {solitaire.v1.IViewChangeBroadcast} message ViewChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewChangeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.viewPlayer != null && Object.hasOwnProperty.call(message, "viewPlayer"))
                    $root.solitaire.v1.SolitairePayerInfo.encode(message.viewPlayer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.solitaire.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified ViewChangeBroadcast message, length delimited. Does not implicitly {@link solitaire.v1.ViewChangeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {solitaire.v1.IViewChangeBroadcast} message ViewChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewChangeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ViewChangeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.ViewChangeBroadcast} ViewChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewChangeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.ViewChangeBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.viewPlayer = $root.solitaire.v1.SolitairePayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.gameInfo = $root.solitaire.v1.GameInfo.decode(reader, reader.uint32());
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
             * Decodes a ViewChangeBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.ViewChangeBroadcast} ViewChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewChangeBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ViewChangeBroadcast message.
             * @function verify
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ViewChangeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.viewPlayer != null && message.hasOwnProperty("viewPlayer")) {
                    var error = $root.solitaire.v1.SolitairePayerInfo.verify(message.viewPlayer);
                    if (error)
                        return "viewPlayer." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.solitaire.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a ViewChangeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.ViewChangeBroadcast} ViewChangeBroadcast
             */
            ViewChangeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.ViewChangeBroadcast)
                    return object;
                var message = new $root.solitaire.v1.ViewChangeBroadcast();
                if (object.viewPlayer != null) {
                    if (typeof object.viewPlayer !== "object")
                        throw TypeError(".solitaire.v1.ViewChangeBroadcast.viewPlayer: object expected");
                    message.viewPlayer = $root.solitaire.v1.SolitairePayerInfo.fromObject(object.viewPlayer);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".solitaire.v1.ViewChangeBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.solitaire.v1.GameInfo.fromObject(object.gameInfo);
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
             * Creates a plain object from a ViewChangeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {solitaire.v1.ViewChangeBroadcast} message ViewChangeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ViewChangeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.viewPlayer = null;
                    object.gameInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.viewPlayer != null && message.hasOwnProperty("viewPlayer"))
                    object.viewPlayer = $root.solitaire.v1.SolitairePayerInfo.toObject(message.viewPlayer, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.solitaire.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this ViewChangeBroadcast to JSON.
             * @function toJSON
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ViewChangeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ViewChangeBroadcast
             * @function getTypeUrl
             * @memberof solitaire.v1.ViewChangeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ViewChangeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.ViewChangeBroadcast";
            };

            return ViewChangeBroadcast;
        })();

        v1.RoomInfo = (function() {

            /**
             * Properties of a RoomInfo.
             * @memberof solitaire.v1
             * @interface IRoomInfo
             * @property {number|Long|null} [roomId] RoomInfo roomId
             * @property {string|null} [roomName] RoomInfo roomName
             * @property {number|null} [roomStatus] RoomInfo roomStatus
             * @property {number|null} [roomMode] RoomInfo roomMode
             * @property {number|null} [maxSeat] RoomInfo maxSeat
             */

            /**
             * Constructs a new RoomInfo.
             * @memberof solitaire.v1
             * @classdesc Represents a RoomInfo.
             * @implements IRoomInfo
             * @constructor
             * @param {solitaire.v1.IRoomInfo=} [properties] Properties to set
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
             * @memberof solitaire.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RoomInfo roomName.
             * @member {string} roomName
             * @memberof solitaire.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomName = "";

            /**
             * RoomInfo roomStatus.
             * @member {number} roomStatus
             * @memberof solitaire.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomStatus = 0;

            /**
             * RoomInfo roomMode.
             * @member {number} roomMode
             * @memberof solitaire.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomMode = 0;

            /**
             * RoomInfo maxSeat.
             * @member {number} maxSeat
             * @memberof solitaire.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.maxSeat = 0;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {solitaire.v1.IRoomInfo=} [properties] Properties to set
             * @returns {solitaire.v1.RoomInfo} RoomInfo instance
             */
            RoomInfo.create = function create(properties) {
                return new RoomInfo(properties);
            };

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link solitaire.v1.RoomInfo.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {solitaire.v1.IRoomInfo} message RoomInfo message or plain object to encode
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
                if (message.maxSeat != null && Object.hasOwnProperty.call(message, "maxSeat"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxSeat);
                return writer;
            };

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link solitaire.v1.RoomInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {solitaire.v1.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.RoomInfo();
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
                    case 5: {
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
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.RoomInfo} RoomInfo
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
             * @memberof solitaire.v1.RoomInfo
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
                if (message.maxSeat != null && message.hasOwnProperty("maxSeat"))
                    if (!$util.isInteger(message.maxSeat))
                        return "maxSeat: integer expected";
                return null;
            };

            /**
             * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.RoomInfo} RoomInfo
             */
            RoomInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.RoomInfo)
                    return object;
                var message = new $root.solitaire.v1.RoomInfo();
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
                if (object.maxSeat != null)
                    message.maxSeat = object.maxSeat | 0;
                return message;
            };

            /**
             * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {solitaire.v1.RoomInfo} message RoomInfo
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
                if (message.roomMode != null && message.hasOwnProperty("roomMode"))
                    object.roomMode = message.roomMode;
                if (message.maxSeat != null && message.hasOwnProperty("maxSeat"))
                    object.maxSeat = message.maxSeat;
                return object;
            };

            /**
             * Converts this RoomInfo to JSON.
             * @function toJSON
             * @memberof solitaire.v1.RoomInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomInfo
             * @function getTypeUrl
             * @memberof solitaire.v1.RoomInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.RoomInfo";
            };

            return RoomInfo;
        })();

        v1.SolitairePayerInfo = (function() {

            /**
             * Properties of a SolitairePayerInfo.
             * @memberof solitaire.v1
             * @interface ISolitairePayerInfo
             * @property {common.v1.IPlayerInfo|null} [playerInfo] SolitairePayerInfo playerInfo
             * @property {number|null} [score] SolitairePayerInfo score
             * @property {number|null} [combo] SolitairePayerInfo combo
             * @property {number|null} [cardNum] SolitairePayerInfo cardNum
             */

            /**
             * Constructs a new SolitairePayerInfo.
             * @memberof solitaire.v1
             * @classdesc Represents a SolitairePayerInfo.
             * @implements ISolitairePayerInfo
             * @constructor
             * @param {solitaire.v1.ISolitairePayerInfo=} [properties] Properties to set
             */
            function SolitairePayerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SolitairePayerInfo playerInfo.
             * @member {common.v1.IPlayerInfo|null|undefined} playerInfo
             * @memberof solitaire.v1.SolitairePayerInfo
             * @instance
             */
            SolitairePayerInfo.prototype.playerInfo = null;

            /**
             * SolitairePayerInfo score.
             * @member {number} score
             * @memberof solitaire.v1.SolitairePayerInfo
             * @instance
             */
            SolitairePayerInfo.prototype.score = 0;

            /**
             * SolitairePayerInfo combo.
             * @member {number} combo
             * @memberof solitaire.v1.SolitairePayerInfo
             * @instance
             */
            SolitairePayerInfo.prototype.combo = 0;

            /**
             * SolitairePayerInfo cardNum.
             * @member {number} cardNum
             * @memberof solitaire.v1.SolitairePayerInfo
             * @instance
             */
            SolitairePayerInfo.prototype.cardNum = 0;

            /**
             * Creates a new SolitairePayerInfo instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {solitaire.v1.ISolitairePayerInfo=} [properties] Properties to set
             * @returns {solitaire.v1.SolitairePayerInfo} SolitairePayerInfo instance
             */
            SolitairePayerInfo.create = function create(properties) {
                return new SolitairePayerInfo(properties);
            };

            /**
             * Encodes the specified SolitairePayerInfo message. Does not implicitly {@link solitaire.v1.SolitairePayerInfo.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {solitaire.v1.ISolitairePayerInfo} message SolitairePayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SolitairePayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.common.v1.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
                if (message.combo != null && Object.hasOwnProperty.call(message, "combo"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.combo);
                if (message.cardNum != null && Object.hasOwnProperty.call(message, "cardNum"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cardNum);
                return writer;
            };

            /**
             * Encodes the specified SolitairePayerInfo message, length delimited. Does not implicitly {@link solitaire.v1.SolitairePayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {solitaire.v1.ISolitairePayerInfo} message SolitairePayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SolitairePayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SolitairePayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.SolitairePayerInfo} SolitairePayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SolitairePayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.SolitairePayerInfo();
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
                            message.score = reader.int32();
                            break;
                        }
                    case 3: {
                            message.combo = reader.int32();
                            break;
                        }
                    case 4: {
                            message.cardNum = reader.int32();
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
             * Decodes a SolitairePayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.SolitairePayerInfo} SolitairePayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SolitairePayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SolitairePayerInfo message.
             * @function verify
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SolitairePayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.combo != null && message.hasOwnProperty("combo"))
                    if (!$util.isInteger(message.combo))
                        return "combo: integer expected";
                if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                    if (!$util.isInteger(message.cardNum))
                        return "cardNum: integer expected";
                return null;
            };

            /**
             * Creates a SolitairePayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.SolitairePayerInfo} SolitairePayerInfo
             */
            SolitairePayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.SolitairePayerInfo)
                    return object;
                var message = new $root.solitaire.v1.SolitairePayerInfo();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".solitaire.v1.SolitairePayerInfo.playerInfo: object expected");
                    message.playerInfo = $root.common.v1.PlayerInfo.fromObject(object.playerInfo);
                }
                if (object.score != null)
                    message.score = object.score | 0;
                if (object.combo != null)
                    message.combo = object.combo | 0;
                if (object.cardNum != null)
                    message.cardNum = object.cardNum | 0;
                return message;
            };

            /**
             * Creates a plain object from a SolitairePayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {solitaire.v1.SolitairePayerInfo} message SolitairePayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SolitairePayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.playerInfo = null;
                    object.score = 0;
                    object.combo = 0;
                    object.cardNum = 0;
                }
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.common.v1.PlayerInfo.toObject(message.playerInfo, options);
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.combo != null && message.hasOwnProperty("combo"))
                    object.combo = message.combo;
                if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                    object.cardNum = message.cardNum;
                return object;
            };

            /**
             * Converts this SolitairePayerInfo to JSON.
             * @function toJSON
             * @memberof solitaire.v1.SolitairePayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SolitairePayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SolitairePayerInfo
             * @function getTypeUrl
             * @memberof solitaire.v1.SolitairePayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SolitairePayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.SolitairePayerInfo";
            };

            return SolitairePayerInfo;
        })();

        v1.GameInfo = (function() {

            /**
             * Properties of a GameInfo.
             * @memberof solitaire.v1
             * @interface IGameInfo
             * @property {Array.<solitaire.v1.IPokerInfo>|null} [pokers] GameInfo pokers
             * @property {Array.<solitaire.v1.IPokerInfo>|null} [clearPokers] GameInfo clearPokers
             * @property {number|null} [headValue] GameInfo headValue
             * @property {Array.<number>|null} [poolPokers] GameInfo poolPokers
             * @property {number|null} [state] GameInfo state
             * @property {number|null} [timer] GameInfo timer
             * @property {number|null} [score] GameInfo score
             * @property {number|null} [combo] GameInfo combo
             * @property {number|null} [deduction] GameInfo deduction
             * @property {number|null} [clickId] GameInfo clickId
             * @property {number|null} [betAmount] GameInfo betAmount
             * @property {Array.<number>|null} [scores] GameInfo scores
             * @property {number|Long|null} [perspectiveId] GameInfo perspectiveId
             * @property {number|null} [changeScore] GameInfo changeScore
             */

            /**
             * Constructs a new GameInfo.
             * @memberof solitaire.v1
             * @classdesc Represents a GameInfo.
             * @implements IGameInfo
             * @constructor
             * @param {solitaire.v1.IGameInfo=} [properties] Properties to set
             */
            function GameInfo(properties) {
                this.pokers = [];
                this.clearPokers = [];
                this.poolPokers = [];
                this.scores = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameInfo pokers.
             * @member {Array.<solitaire.v1.IPokerInfo>} pokers
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.pokers = $util.emptyArray;

            /**
             * GameInfo clearPokers.
             * @member {Array.<solitaire.v1.IPokerInfo>} clearPokers
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.clearPokers = $util.emptyArray;

            /**
             * GameInfo headValue.
             * @member {number} headValue
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.headValue = 0;

            /**
             * GameInfo poolPokers.
             * @member {Array.<number>} poolPokers
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.poolPokers = $util.emptyArray;

            /**
             * GameInfo state.
             * @member {number} state
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.state = 0;

            /**
             * GameInfo timer.
             * @member {number} timer
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.timer = 0;

            /**
             * GameInfo score.
             * @member {number} score
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.score = 0;

            /**
             * GameInfo combo.
             * @member {number} combo
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.combo = 0;

            /**
             * GameInfo deduction.
             * @member {number} deduction
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.deduction = 0;

            /**
             * GameInfo clickId.
             * @member {number} clickId
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.clickId = 0;

            /**
             * GameInfo betAmount.
             * @member {number} betAmount
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.betAmount = 0;

            /**
             * GameInfo scores.
             * @member {Array.<number>} scores
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.scores = $util.emptyArray;

            /**
             * GameInfo perspectiveId.
             * @member {number|Long} perspectiveId
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.perspectiveId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo changeScore.
             * @member {number} changeScore
             * @memberof solitaire.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.changeScore = 0;

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {solitaire.v1.IGameInfo=} [properties] Properties to set
             * @returns {solitaire.v1.GameInfo} GameInfo instance
             */
            GameInfo.create = function create(properties) {
                return new GameInfo(properties);
            };

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link solitaire.v1.GameInfo.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {solitaire.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pokers != null && message.pokers.length)
                    for (var i = 0; i < message.pokers.length; ++i)
                        $root.solitaire.v1.PokerInfo.encode(message.pokers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.clearPokers != null && message.clearPokers.length)
                    for (var i = 0; i < message.clearPokers.length; ++i)
                        $root.solitaire.v1.PokerInfo.encode(message.clearPokers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.headValue != null && Object.hasOwnProperty.call(message, "headValue"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.headValue);
                if (message.poolPokers != null && message.poolPokers.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.poolPokers.length; ++i)
                        writer.int32(message.poolPokers[i]);
                    writer.ldelim();
                }
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
                if (message.timer != null && Object.hasOwnProperty.call(message, "timer"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.timer);
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.score);
                if (message.combo != null && Object.hasOwnProperty.call(message, "combo"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.combo);
                if (message.deduction != null && Object.hasOwnProperty.call(message, "deduction"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.deduction);
                if (message.clickId != null && Object.hasOwnProperty.call(message, "clickId"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.clickId);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.betAmount);
                if (message.scores != null && message.scores.length) {
                    writer.uint32(/* id 12, wireType 2 =*/98).fork();
                    for (var i = 0; i < message.scores.length; ++i)
                        writer.int32(message.scores[i]);
                    writer.ldelim();
                }
                if (message.perspectiveId != null && Object.hasOwnProperty.call(message, "perspectiveId"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int64(message.perspectiveId);
                if (message.changeScore != null && Object.hasOwnProperty.call(message, "changeScore"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.changeScore);
                return writer;
            };

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link solitaire.v1.GameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {solitaire.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.GameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.pokers && message.pokers.length))
                                message.pokers = [];
                            message.pokers.push($root.solitaire.v1.PokerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            if (!(message.clearPokers && message.clearPokers.length))
                                message.clearPokers = [];
                            message.clearPokers.push($root.solitaire.v1.PokerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.headValue = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.poolPokers && message.poolPokers.length))
                                message.poolPokers = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.poolPokers.push(reader.int32());
                            } else
                                message.poolPokers.push(reader.int32());
                            break;
                        }
                    case 5: {
                            message.state = reader.int32();
                            break;
                        }
                    case 6: {
                            message.timer = reader.int32();
                            break;
                        }
                    case 7: {
                            message.score = reader.int32();
                            break;
                        }
                    case 8: {
                            message.combo = reader.int32();
                            break;
                        }
                    case 9: {
                            message.deduction = reader.int32();
                            break;
                        }
                    case 10: {
                            message.clickId = reader.int32();
                            break;
                        }
                    case 11: {
                            message.betAmount = reader.int32();
                            break;
                        }
                    case 12: {
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
                    case 13: {
                            message.perspectiveId = reader.int64();
                            break;
                        }
                    case 14: {
                            message.changeScore = reader.int32();
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
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.GameInfo} GameInfo
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
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pokers != null && message.hasOwnProperty("pokers")) {
                    if (!Array.isArray(message.pokers))
                        return "pokers: array expected";
                    for (var i = 0; i < message.pokers.length; ++i) {
                        var error = $root.solitaire.v1.PokerInfo.verify(message.pokers[i]);
                        if (error)
                            return "pokers." + error;
                    }
                }
                if (message.clearPokers != null && message.hasOwnProperty("clearPokers")) {
                    if (!Array.isArray(message.clearPokers))
                        return "clearPokers: array expected";
                    for (var i = 0; i < message.clearPokers.length; ++i) {
                        var error = $root.solitaire.v1.PokerInfo.verify(message.clearPokers[i]);
                        if (error)
                            return "clearPokers." + error;
                    }
                }
                if (message.headValue != null && message.hasOwnProperty("headValue"))
                    if (!$util.isInteger(message.headValue))
                        return "headValue: integer expected";
                if (message.poolPokers != null && message.hasOwnProperty("poolPokers")) {
                    if (!Array.isArray(message.poolPokers))
                        return "poolPokers: array expected";
                    for (var i = 0; i < message.poolPokers.length; ++i)
                        if (!$util.isInteger(message.poolPokers[i]))
                            return "poolPokers: integer[] expected";
                }
                if (message.state != null && message.hasOwnProperty("state"))
                    if (!$util.isInteger(message.state))
                        return "state: integer expected";
                if (message.timer != null && message.hasOwnProperty("timer"))
                    if (!$util.isInteger(message.timer))
                        return "timer: integer expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.combo != null && message.hasOwnProperty("combo"))
                    if (!$util.isInteger(message.combo))
                        return "combo: integer expected";
                if (message.deduction != null && message.hasOwnProperty("deduction"))
                    if (!$util.isInteger(message.deduction))
                        return "deduction: integer expected";
                if (message.clickId != null && message.hasOwnProperty("clickId"))
                    if (!$util.isInteger(message.clickId))
                        return "clickId: integer expected";
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
                if (message.perspectiveId != null && message.hasOwnProperty("perspectiveId"))
                    if (!$util.isInteger(message.perspectiveId) && !(message.perspectiveId && $util.isInteger(message.perspectiveId.low) && $util.isInteger(message.perspectiveId.high)))
                        return "perspectiveId: integer|Long expected";
                if (message.changeScore != null && message.hasOwnProperty("changeScore"))
                    if (!$util.isInteger(message.changeScore))
                        return "changeScore: integer expected";
                return null;
            };

            /**
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.GameInfo} GameInfo
             */
            GameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.GameInfo)
                    return object;
                var message = new $root.solitaire.v1.GameInfo();
                if (object.pokers) {
                    if (!Array.isArray(object.pokers))
                        throw TypeError(".solitaire.v1.GameInfo.pokers: array expected");
                    message.pokers = [];
                    for (var i = 0; i < object.pokers.length; ++i) {
                        if (typeof object.pokers[i] !== "object")
                            throw TypeError(".solitaire.v1.GameInfo.pokers: object expected");
                        message.pokers[i] = $root.solitaire.v1.PokerInfo.fromObject(object.pokers[i]);
                    }
                }
                if (object.clearPokers) {
                    if (!Array.isArray(object.clearPokers))
                        throw TypeError(".solitaire.v1.GameInfo.clearPokers: array expected");
                    message.clearPokers = [];
                    for (var i = 0; i < object.clearPokers.length; ++i) {
                        if (typeof object.clearPokers[i] !== "object")
                            throw TypeError(".solitaire.v1.GameInfo.clearPokers: object expected");
                        message.clearPokers[i] = $root.solitaire.v1.PokerInfo.fromObject(object.clearPokers[i]);
                    }
                }
                if (object.headValue != null)
                    message.headValue = object.headValue | 0;
                if (object.poolPokers) {
                    if (!Array.isArray(object.poolPokers))
                        throw TypeError(".solitaire.v1.GameInfo.poolPokers: array expected");
                    message.poolPokers = [];
                    for (var i = 0; i < object.poolPokers.length; ++i)
                        message.poolPokers[i] = object.poolPokers[i] | 0;
                }
                if (object.state != null)
                    message.state = object.state | 0;
                if (object.timer != null)
                    message.timer = object.timer | 0;
                if (object.score != null)
                    message.score = object.score | 0;
                if (object.combo != null)
                    message.combo = object.combo | 0;
                if (object.deduction != null)
                    message.deduction = object.deduction | 0;
                if (object.clickId != null)
                    message.clickId = object.clickId | 0;
                if (object.betAmount != null)
                    message.betAmount = object.betAmount | 0;
                if (object.scores) {
                    if (!Array.isArray(object.scores))
                        throw TypeError(".solitaire.v1.GameInfo.scores: array expected");
                    message.scores = [];
                    for (var i = 0; i < object.scores.length; ++i)
                        message.scores[i] = object.scores[i] | 0;
                }
                if (object.perspectiveId != null)
                    if ($util.Long)
                        (message.perspectiveId = $util.Long.fromValue(object.perspectiveId)).unsigned = false;
                    else if (typeof object.perspectiveId === "string")
                        message.perspectiveId = parseInt(object.perspectiveId, 10);
                    else if (typeof object.perspectiveId === "number")
                        message.perspectiveId = object.perspectiveId;
                    else if (typeof object.perspectiveId === "object")
                        message.perspectiveId = new $util.LongBits(object.perspectiveId.low >>> 0, object.perspectiveId.high >>> 0).toNumber();
                if (object.changeScore != null)
                    message.changeScore = object.changeScore | 0;
                return message;
            };

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {solitaire.v1.GameInfo} message GameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.pokers = [];
                    object.clearPokers = [];
                    object.poolPokers = [];
                    object.scores = [];
                }
                if (options.defaults) {
                    object.headValue = 0;
                    object.state = 0;
                    object.timer = 0;
                    object.score = 0;
                    object.combo = 0;
                    object.deduction = 0;
                    object.clickId = 0;
                    object.betAmount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.perspectiveId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.perspectiveId = options.longs === String ? "0" : 0;
                    object.changeScore = 0;
                }
                if (message.pokers && message.pokers.length) {
                    object.pokers = [];
                    for (var j = 0; j < message.pokers.length; ++j)
                        object.pokers[j] = $root.solitaire.v1.PokerInfo.toObject(message.pokers[j], options);
                }
                if (message.clearPokers && message.clearPokers.length) {
                    object.clearPokers = [];
                    for (var j = 0; j < message.clearPokers.length; ++j)
                        object.clearPokers[j] = $root.solitaire.v1.PokerInfo.toObject(message.clearPokers[j], options);
                }
                if (message.headValue != null && message.hasOwnProperty("headValue"))
                    object.headValue = message.headValue;
                if (message.poolPokers && message.poolPokers.length) {
                    object.poolPokers = [];
                    for (var j = 0; j < message.poolPokers.length; ++j)
                        object.poolPokers[j] = message.poolPokers[j];
                }
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = message.state;
                if (message.timer != null && message.hasOwnProperty("timer"))
                    object.timer = message.timer;
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.combo != null && message.hasOwnProperty("combo"))
                    object.combo = message.combo;
                if (message.deduction != null && message.hasOwnProperty("deduction"))
                    object.deduction = message.deduction;
                if (message.clickId != null && message.hasOwnProperty("clickId"))
                    object.clickId = message.clickId;
                if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                    object.betAmount = message.betAmount;
                if (message.scores && message.scores.length) {
                    object.scores = [];
                    for (var j = 0; j < message.scores.length; ++j)
                        object.scores[j] = message.scores[j];
                }
                if (message.perspectiveId != null && message.hasOwnProperty("perspectiveId"))
                    if (typeof message.perspectiveId === "number")
                        object.perspectiveId = options.longs === String ? String(message.perspectiveId) : message.perspectiveId;
                    else
                        object.perspectiveId = options.longs === String ? $util.Long.prototype.toString.call(message.perspectiveId) : options.longs === Number ? new $util.LongBits(message.perspectiveId.low >>> 0, message.perspectiveId.high >>> 0).toNumber() : message.perspectiveId;
                if (message.changeScore != null && message.hasOwnProperty("changeScore"))
                    object.changeScore = message.changeScore;
                return object;
            };

            /**
             * Converts this GameInfo to JSON.
             * @function toJSON
             * @memberof solitaire.v1.GameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameInfo
             * @function getTypeUrl
             * @memberof solitaire.v1.GameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.GameInfo";
            };

            return GameInfo;
        })();

        v1.GameResult = (function() {

            /**
             * Properties of a GameResult.
             * @memberof solitaire.v1
             * @interface IGameResult
             * @property {Array.<solitaire.v1.ISolitairePayerInfo>|null} [players] GameResult players
             * @property {number|null} [winnerId] GameResult winnerId
             * @property {number|null} [count] GameResult count
             */

            /**
             * Constructs a new GameResult.
             * @memberof solitaire.v1
             * @classdesc Represents a GameResult.
             * @implements IGameResult
             * @constructor
             * @param {solitaire.v1.IGameResult=} [properties] Properties to set
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
             * @member {Array.<solitaire.v1.ISolitairePayerInfo>} players
             * @memberof solitaire.v1.GameResult
             * @instance
             */
            GameResult.prototype.players = $util.emptyArray;

            /**
             * GameResult winnerId.
             * @member {number} winnerId
             * @memberof solitaire.v1.GameResult
             * @instance
             */
            GameResult.prototype.winnerId = 0;

            /**
             * GameResult count.
             * @member {number} count
             * @memberof solitaire.v1.GameResult
             * @instance
             */
            GameResult.prototype.count = 0;

            /**
             * Creates a new GameResult instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {solitaire.v1.IGameResult=} [properties] Properties to set
             * @returns {solitaire.v1.GameResult} GameResult instance
             */
            GameResult.create = function create(properties) {
                return new GameResult(properties);
            };

            /**
             * Encodes the specified GameResult message. Does not implicitly {@link solitaire.v1.GameResult.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {solitaire.v1.IGameResult} message GameResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.solitaire.v1.SolitairePayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winnerId);
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
                return writer;
            };

            /**
             * Encodes the specified GameResult message, length delimited. Does not implicitly {@link solitaire.v1.GameResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {solitaire.v1.IGameResult} message GameResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameResult message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.GameResult} GameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.GameResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.solitaire.v1.SolitairePayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.winnerId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.count = reader.int32();
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
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.GameResult} GameResult
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
             * @memberof solitaire.v1.GameResult
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
                        var error = $root.solitaire.v1.SolitairePayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId))
                        return "winnerId: integer expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                return null;
            };

            /**
             * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.GameResult} GameResult
             */
            GameResult.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.GameResult)
                    return object;
                var message = new $root.solitaire.v1.GameResult();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".solitaire.v1.GameResult.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".solitaire.v1.GameResult.players: object expected");
                        message.players[i] = $root.solitaire.v1.SolitairePayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.winnerId != null)
                    message.winnerId = object.winnerId | 0;
                if (object.count != null)
                    message.count = object.count | 0;
                return message;
            };

            /**
             * Creates a plain object from a GameResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {solitaire.v1.GameResult} message GameResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    object.winnerId = 0;
                    object.count = 0;
                }
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.solitaire.v1.SolitairePayerInfo.toObject(message.players[j], options);
                }
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    object.winnerId = message.winnerId;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                return object;
            };

            /**
             * Converts this GameResult to JSON.
             * @function toJSON
             * @memberof solitaire.v1.GameResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameResult
             * @function getTypeUrl
             * @memberof solitaire.v1.GameResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.GameResult";
            };

            return GameResult;
        })();

        v1.PokerInfo = (function() {

            /**
             * Properties of a PokerInfo.
             * @memberof solitaire.v1
             * @interface IPokerInfo
             * @property {number|null} [id] PokerInfo id
             * @property {number|null} [value] PokerInfo value
             * @property {Array.<number>|null} [covers] PokerInfo covers
             * @property {Array.<number>|null} [coveredBy] PokerInfo coveredBy
             * @property {number|null} [state] PokerInfo state
             * @property {number|null} [x] PokerInfo x
             * @property {number|null} [y] PokerInfo y
             */

            /**
             * Constructs a new PokerInfo.
             * @memberof solitaire.v1
             * @classdesc Represents a PokerInfo.
             * @implements IPokerInfo
             * @constructor
             * @param {solitaire.v1.IPokerInfo=} [properties] Properties to set
             */
            function PokerInfo(properties) {
                this.covers = [];
                this.coveredBy = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PokerInfo id.
             * @member {number} id
             * @memberof solitaire.v1.PokerInfo
             * @instance
             */
            PokerInfo.prototype.id = 0;

            /**
             * PokerInfo value.
             * @member {number} value
             * @memberof solitaire.v1.PokerInfo
             * @instance
             */
            PokerInfo.prototype.value = 0;

            /**
             * PokerInfo covers.
             * @member {Array.<number>} covers
             * @memberof solitaire.v1.PokerInfo
             * @instance
             */
            PokerInfo.prototype.covers = $util.emptyArray;

            /**
             * PokerInfo coveredBy.
             * @member {Array.<number>} coveredBy
             * @memberof solitaire.v1.PokerInfo
             * @instance
             */
            PokerInfo.prototype.coveredBy = $util.emptyArray;

            /**
             * PokerInfo state.
             * @member {number} state
             * @memberof solitaire.v1.PokerInfo
             * @instance
             */
            PokerInfo.prototype.state = 0;

            /**
             * PokerInfo x.
             * @member {number} x
             * @memberof solitaire.v1.PokerInfo
             * @instance
             */
            PokerInfo.prototype.x = 0;

            /**
             * PokerInfo y.
             * @member {number} y
             * @memberof solitaire.v1.PokerInfo
             * @instance
             */
            PokerInfo.prototype.y = 0;

            /**
             * Creates a new PokerInfo instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {solitaire.v1.IPokerInfo=} [properties] Properties to set
             * @returns {solitaire.v1.PokerInfo} PokerInfo instance
             */
            PokerInfo.create = function create(properties) {
                return new PokerInfo(properties);
            };

            /**
             * Encodes the specified PokerInfo message. Does not implicitly {@link solitaire.v1.PokerInfo.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {solitaire.v1.IPokerInfo} message PokerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PokerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
                if (message.covers != null && message.covers.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.covers.length; ++i)
                        writer.int32(message.covers[i]);
                    writer.ldelim();
                }
                if (message.coveredBy != null && message.coveredBy.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.coveredBy.length; ++i)
                        writer.int32(message.coveredBy[i]);
                    writer.ldelim();
                }
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
                if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.x);
                if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.y);
                return writer;
            };

            /**
             * Encodes the specified PokerInfo message, length delimited. Does not implicitly {@link solitaire.v1.PokerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {solitaire.v1.IPokerInfo} message PokerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PokerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PokerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.PokerInfo} PokerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PokerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.PokerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
                            message.value = reader.int32();
                            break;
                        }
                    case 3: {
                            if (!(message.covers && message.covers.length))
                                message.covers = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.covers.push(reader.int32());
                            } else
                                message.covers.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.coveredBy && message.coveredBy.length))
                                message.coveredBy = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.coveredBy.push(reader.int32());
                            } else
                                message.coveredBy.push(reader.int32());
                            break;
                        }
                    case 5: {
                            message.state = reader.int32();
                            break;
                        }
                    case 6: {
                            message.x = reader.int32();
                            break;
                        }
                    case 7: {
                            message.y = reader.int32();
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
             * Decodes a PokerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.PokerInfo} PokerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PokerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PokerInfo message.
             * @function verify
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PokerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                if (message.covers != null && message.hasOwnProperty("covers")) {
                    if (!Array.isArray(message.covers))
                        return "covers: array expected";
                    for (var i = 0; i < message.covers.length; ++i)
                        if (!$util.isInteger(message.covers[i]))
                            return "covers: integer[] expected";
                }
                if (message.coveredBy != null && message.hasOwnProperty("coveredBy")) {
                    if (!Array.isArray(message.coveredBy))
                        return "coveredBy: array expected";
                    for (var i = 0; i < message.coveredBy.length; ++i)
                        if (!$util.isInteger(message.coveredBy[i]))
                            return "coveredBy: integer[] expected";
                }
                if (message.state != null && message.hasOwnProperty("state"))
                    if (!$util.isInteger(message.state))
                        return "state: integer expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x))
                        return "x: integer expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y))
                        return "y: integer expected";
                return null;
            };

            /**
             * Creates a PokerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.PokerInfo} PokerInfo
             */
            PokerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.PokerInfo)
                    return object;
                var message = new $root.solitaire.v1.PokerInfo();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.value != null)
                    message.value = object.value | 0;
                if (object.covers) {
                    if (!Array.isArray(object.covers))
                        throw TypeError(".solitaire.v1.PokerInfo.covers: array expected");
                    message.covers = [];
                    for (var i = 0; i < object.covers.length; ++i)
                        message.covers[i] = object.covers[i] | 0;
                }
                if (object.coveredBy) {
                    if (!Array.isArray(object.coveredBy))
                        throw TypeError(".solitaire.v1.PokerInfo.coveredBy: array expected");
                    message.coveredBy = [];
                    for (var i = 0; i < object.coveredBy.length; ++i)
                        message.coveredBy[i] = object.coveredBy[i] | 0;
                }
                if (object.state != null)
                    message.state = object.state | 0;
                if (object.x != null)
                    message.x = object.x | 0;
                if (object.y != null)
                    message.y = object.y | 0;
                return message;
            };

            /**
             * Creates a plain object from a PokerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {solitaire.v1.PokerInfo} message PokerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PokerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.covers = [];
                    object.coveredBy = [];
                }
                if (options.defaults) {
                    object.id = 0;
                    object.value = 0;
                    object.state = 0;
                    object.x = 0;
                    object.y = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.covers && message.covers.length) {
                    object.covers = [];
                    for (var j = 0; j < message.covers.length; ++j)
                        object.covers[j] = message.covers[j];
                }
                if (message.coveredBy && message.coveredBy.length) {
                    object.coveredBy = [];
                    for (var j = 0; j < message.coveredBy.length; ++j)
                        object.coveredBy[j] = message.coveredBy[j];
                }
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = message.state;
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = message.y;
                return object;
            };

            /**
             * Converts this PokerInfo to JSON.
             * @function toJSON
             * @memberof solitaire.v1.PokerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PokerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PokerInfo
             * @function getTypeUrl
             * @memberof solitaire.v1.PokerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PokerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.PokerInfo";
            };

            return PokerInfo;
        })();

        v1.GetPlayerHistoryReq = (function() {

            /**
             * Properties of a GetPlayerHistoryReq.
             * @memberof solitaire.v1
             * @interface IGetPlayerHistoryReq
             * @property {number|null} [page] GetPlayerHistoryReq page
             * @property {number|Long|null} [startTime] GetPlayerHistoryReq startTime
             * @property {number|Long|null} [endTime] GetPlayerHistoryReq endTime
             */

            /**
             * Constructs a new GetPlayerHistoryReq.
             * @memberof solitaire.v1
             * @classdesc Represents a GetPlayerHistoryReq.
             * @implements IGetPlayerHistoryReq
             * @constructor
             * @param {solitaire.v1.IGetPlayerHistoryReq=} [properties] Properties to set
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
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.page = 0;

            /**
             * GetPlayerHistoryReq startTime.
             * @member {number|Long} startTime
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetPlayerHistoryReq endTime.
             * @member {number|Long} endTime
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GetPlayerHistoryReq instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {solitaire.v1.IGetPlayerHistoryReq=} [properties] Properties to set
             * @returns {solitaire.v1.GetPlayerHistoryReq} GetPlayerHistoryReq instance
             */
            GetPlayerHistoryReq.create = function create(properties) {
                return new GetPlayerHistoryReq(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryReq message. Does not implicitly {@link solitaire.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {solitaire.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
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
             * Encodes the specified GetPlayerHistoryReq message, length delimited. Does not implicitly {@link solitaire.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {solitaire.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.GetPlayerHistoryReq();
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
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
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
             * @memberof solitaire.v1.GetPlayerHistoryReq
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
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             */
            GetPlayerHistoryReq.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.GetPlayerHistoryReq)
                    return object;
                var message = new $root.solitaire.v1.GetPlayerHistoryReq();
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
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {solitaire.v1.GetPlayerHistoryReq} message GetPlayerHistoryReq
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
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryReq
             * @function getTypeUrl
             * @memberof solitaire.v1.GetPlayerHistoryReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.GetPlayerHistoryReq";
            };

            return GetPlayerHistoryReq;
        })();

        v1.GetPlayerHistoryRes = (function() {

            /**
             * Properties of a GetPlayerHistoryRes.
             * @memberof solitaire.v1
             * @interface IGetPlayerHistoryRes
             * @property {Array.<solitaire.v1.ISolitaireHistoryRecord>|null} [records] GetPlayerHistoryRes records
             */

            /**
             * Constructs a new GetPlayerHistoryRes.
             * @memberof solitaire.v1
             * @classdesc Represents a GetPlayerHistoryRes.
             * @implements IGetPlayerHistoryRes
             * @constructor
             * @param {solitaire.v1.IGetPlayerHistoryRes=} [properties] Properties to set
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
             * @member {Array.<solitaire.v1.ISolitaireHistoryRecord>} records
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @instance
             */
            GetPlayerHistoryRes.prototype.records = $util.emptyArray;

            /**
             * Creates a new GetPlayerHistoryRes instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {solitaire.v1.IGetPlayerHistoryRes=} [properties] Properties to set
             * @returns {solitaire.v1.GetPlayerHistoryRes} GetPlayerHistoryRes instance
             */
            GetPlayerHistoryRes.create = function create(properties) {
                return new GetPlayerHistoryRes(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message. Does not implicitly {@link solitaire.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {solitaire.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.records != null && message.records.length)
                    for (var i = 0; i < message.records.length; ++i)
                        $root.solitaire.v1.SolitaireHistoryRecord.encode(message.records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message, length delimited. Does not implicitly {@link solitaire.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {solitaire.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.GetPlayerHistoryRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push($root.solitaire.v1.SolitaireHistoryRecord.decode(reader, reader.uint32()));
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
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
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
             * @memberof solitaire.v1.GetPlayerHistoryRes
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
                        var error = $root.solitaire.v1.SolitaireHistoryRecord.verify(message.records[i]);
                        if (error)
                            return "records." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetPlayerHistoryRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             */
            GetPlayerHistoryRes.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.GetPlayerHistoryRes)
                    return object;
                var message = new $root.solitaire.v1.GetPlayerHistoryRes();
                if (object.records) {
                    if (!Array.isArray(object.records))
                        throw TypeError(".solitaire.v1.GetPlayerHistoryRes.records: array expected");
                    message.records = [];
                    for (var i = 0; i < object.records.length; ++i) {
                        if (typeof object.records[i] !== "object")
                            throw TypeError(".solitaire.v1.GetPlayerHistoryRes.records: object expected");
                        message.records[i] = $root.solitaire.v1.SolitaireHistoryRecord.fromObject(object.records[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetPlayerHistoryRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {solitaire.v1.GetPlayerHistoryRes} message GetPlayerHistoryRes
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
                        object.records[j] = $root.solitaire.v1.SolitaireHistoryRecord.toObject(message.records[j], options);
                }
                return object;
            };

            /**
             * Converts this GetPlayerHistoryRes to JSON.
             * @function toJSON
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryRes
             * @function getTypeUrl
             * @memberof solitaire.v1.GetPlayerHistoryRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.GetPlayerHistoryRes";
            };

            return GetPlayerHistoryRes;
        })();

        v1.SolitaireHistoryRecord = (function() {

            /**
             * Properties of a SolitaireHistoryRecord.
             * @memberof solitaire.v1
             * @interface ISolitaireHistoryRecord
             * @property {string|null} [gameCode] SolitaireHistoryRecord gameCode
             * @property {number|Long|null} [endTime] SolitaireHistoryRecord endTime
             * @property {number|Long|null} [cost] SolitaireHistoryRecord cost
             * @property {number|Long|null} [reward] SolitaireHistoryRecord reward
             * @property {Array.<solitaire.v1.ISolitaireCardInfo>|null} [cards] SolitaireHistoryRecord cards
             * @property {number|null} [score] SolitaireHistoryRecord score
             * @property {number|null} [youScore] SolitaireHistoryRecord youScore
             */

            /**
             * Constructs a new SolitaireHistoryRecord.
             * @memberof solitaire.v1
             * @classdesc Represents a SolitaireHistoryRecord.
             * @implements ISolitaireHistoryRecord
             * @constructor
             * @param {solitaire.v1.ISolitaireHistoryRecord=} [properties] Properties to set
             */
            function SolitaireHistoryRecord(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SolitaireHistoryRecord gameCode.
             * @member {string} gameCode
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             */
            SolitaireHistoryRecord.prototype.gameCode = "";

            /**
             * SolitaireHistoryRecord endTime.
             * @member {number|Long} endTime
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             */
            SolitaireHistoryRecord.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SolitaireHistoryRecord cost.
             * @member {number|Long} cost
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             */
            SolitaireHistoryRecord.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SolitaireHistoryRecord reward.
             * @member {number|Long} reward
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             */
            SolitaireHistoryRecord.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SolitaireHistoryRecord cards.
             * @member {Array.<solitaire.v1.ISolitaireCardInfo>} cards
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             */
            SolitaireHistoryRecord.prototype.cards = $util.emptyArray;

            /**
             * SolitaireHistoryRecord score.
             * @member {number} score
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             */
            SolitaireHistoryRecord.prototype.score = 0;

            /**
             * SolitaireHistoryRecord youScore.
             * @member {number} youScore
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             */
            SolitaireHistoryRecord.prototype.youScore = 0;

            /**
             * Creates a new SolitaireHistoryRecord instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {solitaire.v1.ISolitaireHistoryRecord=} [properties] Properties to set
             * @returns {solitaire.v1.SolitaireHistoryRecord} SolitaireHistoryRecord instance
             */
            SolitaireHistoryRecord.create = function create(properties) {
                return new SolitaireHistoryRecord(properties);
            };

            /**
             * Encodes the specified SolitaireHistoryRecord message. Does not implicitly {@link solitaire.v1.SolitaireHistoryRecord.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {solitaire.v1.ISolitaireHistoryRecord} message SolitaireHistoryRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SolitaireHistoryRecord.encode = function encode(message, writer) {
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
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        $root.solitaire.v1.SolitaireCardInfo.encode(message.cards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.score);
                if (message.youScore != null && Object.hasOwnProperty.call(message, "youScore"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.youScore);
                return writer;
            };

            /**
             * Encodes the specified SolitaireHistoryRecord message, length delimited. Does not implicitly {@link solitaire.v1.SolitaireHistoryRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {solitaire.v1.ISolitaireHistoryRecord} message SolitaireHistoryRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SolitaireHistoryRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SolitaireHistoryRecord message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.SolitaireHistoryRecord} SolitaireHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SolitaireHistoryRecord.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.SolitaireHistoryRecord();
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
                            if (!(message.cards && message.cards.length))
                                message.cards = [];
                            message.cards.push($root.solitaire.v1.SolitaireCardInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            message.score = reader.int32();
                            break;
                        }
                    case 7: {
                            message.youScore = reader.int32();
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
             * Decodes a SolitaireHistoryRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.SolitaireHistoryRecord} SolitaireHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SolitaireHistoryRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SolitaireHistoryRecord message.
             * @function verify
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SolitaireHistoryRecord.verify = function verify(message) {
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
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i) {
                        var error = $root.solitaire.v1.SolitaireCardInfo.verify(message.cards[i]);
                        if (error)
                            return "cards." + error;
                    }
                }
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.youScore != null && message.hasOwnProperty("youScore"))
                    if (!$util.isInteger(message.youScore))
                        return "youScore: integer expected";
                return null;
            };

            /**
             * Creates a SolitaireHistoryRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.SolitaireHistoryRecord} SolitaireHistoryRecord
             */
            SolitaireHistoryRecord.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.SolitaireHistoryRecord)
                    return object;
                var message = new $root.solitaire.v1.SolitaireHistoryRecord();
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
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".solitaire.v1.SolitaireHistoryRecord.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i) {
                        if (typeof object.cards[i] !== "object")
                            throw TypeError(".solitaire.v1.SolitaireHistoryRecord.cards: object expected");
                        message.cards[i] = $root.solitaire.v1.SolitaireCardInfo.fromObject(object.cards[i]);
                    }
                }
                if (object.score != null)
                    message.score = object.score | 0;
                if (object.youScore != null)
                    message.youScore = object.youScore | 0;
                return message;
            };

            /**
             * Creates a plain object from a SolitaireHistoryRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {solitaire.v1.SolitaireHistoryRecord} message SolitaireHistoryRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SolitaireHistoryRecord.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
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
                    object.score = 0;
                    object.youScore = 0;
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
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = $root.solitaire.v1.SolitaireCardInfo.toObject(message.cards[j], options);
                }
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.youScore != null && message.hasOwnProperty("youScore"))
                    object.youScore = message.youScore;
                return object;
            };

            /**
             * Converts this SolitaireHistoryRecord to JSON.
             * @function toJSON
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SolitaireHistoryRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SolitaireHistoryRecord
             * @function getTypeUrl
             * @memberof solitaire.v1.SolitaireHistoryRecord
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SolitaireHistoryRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.SolitaireHistoryRecord";
            };

            return SolitaireHistoryRecord;
        })();

        v1.SolitaireCardInfo = (function() {

            /**
             * Properties of a SolitaireCardInfo.
             * @memberof solitaire.v1
             * @interface ISolitaireCardInfo
             * @property {number|null} [cardId] SolitaireCardInfo cardId
             * @property {number|null} [cardType] SolitaireCardInfo cardType
             */

            /**
             * Constructs a new SolitaireCardInfo.
             * @memberof solitaire.v1
             * @classdesc Represents a SolitaireCardInfo.
             * @implements ISolitaireCardInfo
             * @constructor
             * @param {solitaire.v1.ISolitaireCardInfo=} [properties] Properties to set
             */
            function SolitaireCardInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SolitaireCardInfo cardId.
             * @member {number} cardId
             * @memberof solitaire.v1.SolitaireCardInfo
             * @instance
             */
            SolitaireCardInfo.prototype.cardId = 0;

            /**
             * SolitaireCardInfo cardType.
             * @member {number} cardType
             * @memberof solitaire.v1.SolitaireCardInfo
             * @instance
             */
            SolitaireCardInfo.prototype.cardType = 0;

            /**
             * Creates a new SolitaireCardInfo instance using the specified properties.
             * @function create
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {solitaire.v1.ISolitaireCardInfo=} [properties] Properties to set
             * @returns {solitaire.v1.SolitaireCardInfo} SolitaireCardInfo instance
             */
            SolitaireCardInfo.create = function create(properties) {
                return new SolitaireCardInfo(properties);
            };

            /**
             * Encodes the specified SolitaireCardInfo message. Does not implicitly {@link solitaire.v1.SolitaireCardInfo.verify|verify} messages.
             * @function encode
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {solitaire.v1.ISolitaireCardInfo} message SolitaireCardInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SolitaireCardInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardId);
                if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardType);
                return writer;
            };

            /**
             * Encodes the specified SolitaireCardInfo message, length delimited. Does not implicitly {@link solitaire.v1.SolitaireCardInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {solitaire.v1.ISolitaireCardInfo} message SolitaireCardInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SolitaireCardInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SolitaireCardInfo message from the specified reader or buffer.
             * @function decode
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {solitaire.v1.SolitaireCardInfo} SolitaireCardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SolitaireCardInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.solitaire.v1.SolitaireCardInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cardId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.cardType = reader.int32();
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
             * Decodes a SolitaireCardInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {solitaire.v1.SolitaireCardInfo} SolitaireCardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SolitaireCardInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SolitaireCardInfo message.
             * @function verify
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SolitaireCardInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    if (!$util.isInteger(message.cardId))
                        return "cardId: integer expected";
                if (message.cardType != null && message.hasOwnProperty("cardType"))
                    if (!$util.isInteger(message.cardType))
                        return "cardType: integer expected";
                return null;
            };

            /**
             * Creates a SolitaireCardInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {solitaire.v1.SolitaireCardInfo} SolitaireCardInfo
             */
            SolitaireCardInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.solitaire.v1.SolitaireCardInfo)
                    return object;
                var message = new $root.solitaire.v1.SolitaireCardInfo();
                if (object.cardId != null)
                    message.cardId = object.cardId | 0;
                if (object.cardType != null)
                    message.cardType = object.cardType | 0;
                return message;
            };

            /**
             * Creates a plain object from a SolitaireCardInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {solitaire.v1.SolitaireCardInfo} message SolitaireCardInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SolitaireCardInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.cardId = 0;
                    object.cardType = 0;
                }
                if (message.cardId != null && message.hasOwnProperty("cardId"))
                    object.cardId = message.cardId;
                if (message.cardType != null && message.hasOwnProperty("cardType"))
                    object.cardType = message.cardType;
                return object;
            };

            /**
             * Converts this SolitaireCardInfo to JSON.
             * @function toJSON
             * @memberof solitaire.v1.SolitaireCardInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SolitaireCardInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SolitaireCardInfo
             * @function getTypeUrl
             * @memberof solitaire.v1.SolitaireCardInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SolitaireCardInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/solitaire.v1.SolitaireCardInfo";
            };

            return SolitaireCardInfo;
        })();

        return v1;
    })();

    return solitaire;
})();

module.exports = $root;
