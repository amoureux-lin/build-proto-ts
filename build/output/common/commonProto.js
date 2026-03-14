/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof common
         * @namespace
         */
        var v1 = {};

        v1.ServerClosedBroadcast = (function() {

            /**
             * Properties of a ServerClosedBroadcast.
             * @memberof common.v1
             * @interface IServerClosedBroadcast
             */

            /**
             * Constructs a new ServerClosedBroadcast.
             * @memberof common.v1
             * @classdesc Represents a ServerClosedBroadcast.
             * @implements IServerClosedBroadcast
             * @constructor
             * @param {common.v1.IServerClosedBroadcast=} [properties] Properties to set
             */
            function ServerClosedBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ServerClosedBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {common.v1.IServerClosedBroadcast=} [properties] Properties to set
             * @returns {common.v1.ServerClosedBroadcast} ServerClosedBroadcast instance
             */
            ServerClosedBroadcast.create = function create(properties) {
                return new ServerClosedBroadcast(properties);
            };

            /**
             * Encodes the specified ServerClosedBroadcast message. Does not implicitly {@link common.v1.ServerClosedBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {common.v1.IServerClosedBroadcast} message ServerClosedBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerClosedBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ServerClosedBroadcast message, length delimited. Does not implicitly {@link common.v1.ServerClosedBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {common.v1.IServerClosedBroadcast} message ServerClosedBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerClosedBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServerClosedBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ServerClosedBroadcast} ServerClosedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerClosedBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ServerClosedBroadcast();
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
             * Decodes a ServerClosedBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ServerClosedBroadcast} ServerClosedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerClosedBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServerClosedBroadcast message.
             * @function verify
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServerClosedBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ServerClosedBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ServerClosedBroadcast} ServerClosedBroadcast
             */
            ServerClosedBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ServerClosedBroadcast)
                    return object;
                return new $root.common.v1.ServerClosedBroadcast();
            };

            /**
             * Creates a plain object from a ServerClosedBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {common.v1.ServerClosedBroadcast} message ServerClosedBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServerClosedBroadcast.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ServerClosedBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.ServerClosedBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServerClosedBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServerClosedBroadcast
             * @function getTypeUrl
             * @memberof common.v1.ServerClosedBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServerClosedBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ServerClosedBroadcast";
            };

            return ServerClosedBroadcast;
        })();

        v1.UserOfflineBroadcast = (function() {

            /**
             * Properties of a UserOfflineBroadcast.
             * @memberof common.v1
             * @interface IUserOfflineBroadcast
             * @property {number|Long|null} [bcUid] UserOfflineBroadcast bcUid
             * @property {number|Long|null} [userId] UserOfflineBroadcast userId
             * @property {common.v1.IPlayerInfo|null} [player] UserOfflineBroadcast player
             */

            /**
             * Constructs a new UserOfflineBroadcast.
             * @memberof common.v1
             * @classdesc Represents a UserOfflineBroadcast.
             * @implements IUserOfflineBroadcast
             * @constructor
             * @param {common.v1.IUserOfflineBroadcast=} [properties] Properties to set
             */
            function UserOfflineBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserOfflineBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.UserOfflineBroadcast
             * @instance
             */
            UserOfflineBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserOfflineBroadcast userId.
             * @member {number|Long} userId
             * @memberof common.v1.UserOfflineBroadcast
             * @instance
             */
            UserOfflineBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserOfflineBroadcast player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.UserOfflineBroadcast
             * @instance
             */
            UserOfflineBroadcast.prototype.player = null;

            /**
             * Creates a new UserOfflineBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {common.v1.IUserOfflineBroadcast=} [properties] Properties to set
             * @returns {common.v1.UserOfflineBroadcast} UserOfflineBroadcast instance
             */
            UserOfflineBroadcast.create = function create(properties) {
                return new UserOfflineBroadcast(properties);
            };

            /**
             * Encodes the specified UserOfflineBroadcast message. Does not implicitly {@link common.v1.UserOfflineBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {common.v1.IUserOfflineBroadcast} message UserOfflineBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserOfflineBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified UserOfflineBroadcast message, length delimited. Does not implicitly {@link common.v1.UserOfflineBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {common.v1.IUserOfflineBroadcast} message UserOfflineBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserOfflineBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserOfflineBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.UserOfflineBroadcast} UserOfflineBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserOfflineBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.UserOfflineBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
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
             * Decodes a UserOfflineBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.UserOfflineBroadcast} UserOfflineBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserOfflineBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserOfflineBroadcast message.
             * @function verify
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserOfflineBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                return null;
            };

            /**
             * Creates a UserOfflineBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.UserOfflineBroadcast} UserOfflineBroadcast
             */
            UserOfflineBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.UserOfflineBroadcast)
                    return object;
                var message = new $root.common.v1.UserOfflineBroadcast();
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
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.UserOfflineBroadcast.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                return message;
            };

            /**
             * Creates a plain object from a UserOfflineBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {common.v1.UserOfflineBroadcast} message UserOfflineBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserOfflineBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.player = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this UserOfflineBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.UserOfflineBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserOfflineBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserOfflineBroadcast
             * @function getTypeUrl
             * @memberof common.v1.UserOfflineBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserOfflineBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.UserOfflineBroadcast";
            };

            return UserOfflineBroadcast;
        })();

        v1.JoinRoomBroadcast = (function() {

            /**
             * Properties of a JoinRoomBroadcast.
             * @memberof common.v1
             * @interface IJoinRoomBroadcast
             * @property {number|Long|null} [bcUid] JoinRoomBroadcast bcUid
             * @property {number|Long|null} [userId] JoinRoomBroadcast userId
             * @property {common.v1.IPlayerInfo|null} [player] JoinRoomBroadcast player
             * @property {number|null} [playersCount] JoinRoomBroadcast playersCount
             */

            /**
             * Constructs a new JoinRoomBroadcast.
             * @memberof common.v1
             * @classdesc Represents a JoinRoomBroadcast.
             * @implements IJoinRoomBroadcast
             * @constructor
             * @param {common.v1.IJoinRoomBroadcast=} [properties] Properties to set
             */
            function JoinRoomBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRoomBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.JoinRoomBroadcast
             * @instance
             */
            JoinRoomBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * JoinRoomBroadcast userId.
             * @member {number|Long} userId
             * @memberof common.v1.JoinRoomBroadcast
             * @instance
             */
            JoinRoomBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * JoinRoomBroadcast player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.JoinRoomBroadcast
             * @instance
             */
            JoinRoomBroadcast.prototype.player = null;

            /**
             * JoinRoomBroadcast playersCount.
             * @member {number} playersCount
             * @memberof common.v1.JoinRoomBroadcast
             * @instance
             */
            JoinRoomBroadcast.prototype.playersCount = 0;

            /**
             * Creates a new JoinRoomBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {common.v1.IJoinRoomBroadcast=} [properties] Properties to set
             * @returns {common.v1.JoinRoomBroadcast} JoinRoomBroadcast instance
             */
            JoinRoomBroadcast.create = function create(properties) {
                return new JoinRoomBroadcast(properties);
            };

            /**
             * Encodes the specified JoinRoomBroadcast message. Does not implicitly {@link common.v1.JoinRoomBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {common.v1.IJoinRoomBroadcast} message JoinRoomBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playersCount);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified JoinRoomBroadcast message, length delimited. Does not implicitly {@link common.v1.JoinRoomBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {common.v1.IJoinRoomBroadcast} message JoinRoomBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.JoinRoomBroadcast} JoinRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.JoinRoomBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 4: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.playersCount = reader.int32();
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
             * Decodes a JoinRoomBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.JoinRoomBroadcast} JoinRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinRoomBroadcast message.
             * @function verify
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    if (!$util.isInteger(message.playersCount))
                        return "playersCount: integer expected";
                return null;
            };

            /**
             * Creates a JoinRoomBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.JoinRoomBroadcast} JoinRoomBroadcast
             */
            JoinRoomBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.JoinRoomBroadcast)
                    return object;
                var message = new $root.common.v1.JoinRoomBroadcast();
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
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.JoinRoomBroadcast.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {common.v1.JoinRoomBroadcast} message JoinRoomBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoomBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.player = null;
                    object.playersCount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this JoinRoomBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.JoinRoomBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomBroadcast
             * @function getTypeUrl
             * @memberof common.v1.JoinRoomBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.JoinRoomBroadcast";
            };

            return JoinRoomBroadcast;
        })();

        v1.PlayerExitRoomReq = (function() {

            /**
             * Properties of a PlayerExitRoomReq.
             * @memberof common.v1
             * @interface IPlayerExitRoomReq
             */

            /**
             * Constructs a new PlayerExitRoomReq.
             * @memberof common.v1
             * @classdesc Represents a PlayerExitRoomReq.
             * @implements IPlayerExitRoomReq
             * @constructor
             * @param {common.v1.IPlayerExitRoomReq=} [properties] Properties to set
             */
            function PlayerExitRoomReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PlayerExitRoomReq instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {common.v1.IPlayerExitRoomReq=} [properties] Properties to set
             * @returns {common.v1.PlayerExitRoomReq} PlayerExitRoomReq instance
             */
            PlayerExitRoomReq.create = function create(properties) {
                return new PlayerExitRoomReq(properties);
            };

            /**
             * Encodes the specified PlayerExitRoomReq message. Does not implicitly {@link common.v1.PlayerExitRoomReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {common.v1.IPlayerExitRoomReq} message PlayerExitRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerExitRoomReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PlayerExitRoomReq message, length delimited. Does not implicitly {@link common.v1.PlayerExitRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {common.v1.IPlayerExitRoomReq} message PlayerExitRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerExitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerExitRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerExitRoomReq} PlayerExitRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerExitRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerExitRoomReq();
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
             * Decodes a PlayerExitRoomReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerExitRoomReq} PlayerExitRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerExitRoomReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerExitRoomReq message.
             * @function verify
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerExitRoomReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a PlayerExitRoomReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerExitRoomReq} PlayerExitRoomReq
             */
            PlayerExitRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerExitRoomReq)
                    return object;
                return new $root.common.v1.PlayerExitRoomReq();
            };

            /**
             * Creates a plain object from a PlayerExitRoomReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {common.v1.PlayerExitRoomReq} message PlayerExitRoomReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerExitRoomReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this PlayerExitRoomReq to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerExitRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerExitRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerExitRoomReq
             * @function getTypeUrl
             * @memberof common.v1.PlayerExitRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerExitRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerExitRoomReq";
            };

            return PlayerExitRoomReq;
        })();

        v1.PlayerExitRoomRes = (function() {

            /**
             * Properties of a PlayerExitRoomRes.
             * @memberof common.v1
             * @interface IPlayerExitRoomRes
             */

            /**
             * Constructs a new PlayerExitRoomRes.
             * @memberof common.v1
             * @classdesc Represents a PlayerExitRoomRes.
             * @implements IPlayerExitRoomRes
             * @constructor
             * @param {common.v1.IPlayerExitRoomRes=} [properties] Properties to set
             */
            function PlayerExitRoomRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PlayerExitRoomRes instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {common.v1.IPlayerExitRoomRes=} [properties] Properties to set
             * @returns {common.v1.PlayerExitRoomRes} PlayerExitRoomRes instance
             */
            PlayerExitRoomRes.create = function create(properties) {
                return new PlayerExitRoomRes(properties);
            };

            /**
             * Encodes the specified PlayerExitRoomRes message. Does not implicitly {@link common.v1.PlayerExitRoomRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {common.v1.IPlayerExitRoomRes} message PlayerExitRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerExitRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PlayerExitRoomRes message, length delimited. Does not implicitly {@link common.v1.PlayerExitRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {common.v1.IPlayerExitRoomRes} message PlayerExitRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerExitRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerExitRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerExitRoomRes} PlayerExitRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerExitRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerExitRoomRes();
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
             * Decodes a PlayerExitRoomRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerExitRoomRes} PlayerExitRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerExitRoomRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerExitRoomRes message.
             * @function verify
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerExitRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a PlayerExitRoomRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerExitRoomRes} PlayerExitRoomRes
             */
            PlayerExitRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerExitRoomRes)
                    return object;
                return new $root.common.v1.PlayerExitRoomRes();
            };

            /**
             * Creates a plain object from a PlayerExitRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {common.v1.PlayerExitRoomRes} message PlayerExitRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerExitRoomRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this PlayerExitRoomRes to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerExitRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerExitRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerExitRoomRes
             * @function getTypeUrl
             * @memberof common.v1.PlayerExitRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerExitRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerExitRoomRes";
            };

            return PlayerExitRoomRes;
        })();

        v1.LeaveRoomBroadcast = (function() {

            /**
             * Properties of a LeaveRoomBroadcast.
             * @memberof common.v1
             * @interface ILeaveRoomBroadcast
             * @property {number|Long|null} [bcUid] LeaveRoomBroadcast bcUid
             * @property {number|Long|null} [userId] LeaveRoomBroadcast userId
             * @property {common.v1.IPlayerInfo|null} [player] LeaveRoomBroadcast player
             * @property {number|null} [playersCount] LeaveRoomBroadcast playersCount
             */

            /**
             * Constructs a new LeaveRoomBroadcast.
             * @memberof common.v1
             * @classdesc Represents a LeaveRoomBroadcast.
             * @implements ILeaveRoomBroadcast
             * @constructor
             * @param {common.v1.ILeaveRoomBroadcast=} [properties] Properties to set
             */
            function LeaveRoomBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LeaveRoomBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.LeaveRoomBroadcast
             * @instance
             */
            LeaveRoomBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LeaveRoomBroadcast userId.
             * @member {number|Long} userId
             * @memberof common.v1.LeaveRoomBroadcast
             * @instance
             */
            LeaveRoomBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LeaveRoomBroadcast player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.LeaveRoomBroadcast
             * @instance
             */
            LeaveRoomBroadcast.prototype.player = null;

            /**
             * LeaveRoomBroadcast playersCount.
             * @member {number} playersCount
             * @memberof common.v1.LeaveRoomBroadcast
             * @instance
             */
            LeaveRoomBroadcast.prototype.playersCount = 0;

            /**
             * Creates a new LeaveRoomBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {common.v1.ILeaveRoomBroadcast=} [properties] Properties to set
             * @returns {common.v1.LeaveRoomBroadcast} LeaveRoomBroadcast instance
             */
            LeaveRoomBroadcast.create = function create(properties) {
                return new LeaveRoomBroadcast(properties);
            };

            /**
             * Encodes the specified LeaveRoomBroadcast message. Does not implicitly {@link common.v1.LeaveRoomBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {common.v1.ILeaveRoomBroadcast} message LeaveRoomBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LeaveRoomBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playersCount);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified LeaveRoomBroadcast message, length delimited. Does not implicitly {@link common.v1.LeaveRoomBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {common.v1.ILeaveRoomBroadcast} message LeaveRoomBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LeaveRoomBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LeaveRoomBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.LeaveRoomBroadcast} LeaveRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LeaveRoomBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.LeaveRoomBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 4: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.playersCount = reader.int32();
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
             * Decodes a LeaveRoomBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.LeaveRoomBroadcast} LeaveRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LeaveRoomBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LeaveRoomBroadcast message.
             * @function verify
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LeaveRoomBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    if (!$util.isInteger(message.playersCount))
                        return "playersCount: integer expected";
                return null;
            };

            /**
             * Creates a LeaveRoomBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.LeaveRoomBroadcast} LeaveRoomBroadcast
             */
            LeaveRoomBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.LeaveRoomBroadcast)
                    return object;
                var message = new $root.common.v1.LeaveRoomBroadcast();
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
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.LeaveRoomBroadcast.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a LeaveRoomBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {common.v1.LeaveRoomBroadcast} message LeaveRoomBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LeaveRoomBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.player = null;
                    object.playersCount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this LeaveRoomBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.LeaveRoomBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LeaveRoomBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LeaveRoomBroadcast
             * @function getTypeUrl
             * @memberof common.v1.LeaveRoomBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LeaveRoomBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.LeaveRoomBroadcast";
            };

            return LeaveRoomBroadcast;
        })();

        v1.PlayerSitDownReq = (function() {

            /**
             * Properties of a PlayerSitDownReq.
             * @memberof common.v1
             * @interface IPlayerSitDownReq
             * @property {number|null} [seat] PlayerSitDownReq seat
             */

            /**
             * Constructs a new PlayerSitDownReq.
             * @memberof common.v1
             * @classdesc Represents a PlayerSitDownReq.
             * @implements IPlayerSitDownReq
             * @constructor
             * @param {common.v1.IPlayerSitDownReq=} [properties] Properties to set
             */
            function PlayerSitDownReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerSitDownReq seat.
             * @member {number} seat
             * @memberof common.v1.PlayerSitDownReq
             * @instance
             */
            PlayerSitDownReq.prototype.seat = 0;

            /**
             * Creates a new PlayerSitDownReq instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {common.v1.IPlayerSitDownReq=} [properties] Properties to set
             * @returns {common.v1.PlayerSitDownReq} PlayerSitDownReq instance
             */
            PlayerSitDownReq.create = function create(properties) {
                return new PlayerSitDownReq(properties);
            };

            /**
             * Encodes the specified PlayerSitDownReq message. Does not implicitly {@link common.v1.PlayerSitDownReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {common.v1.IPlayerSitDownReq} message PlayerSitDownReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSitDownReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
                return writer;
            };

            /**
             * Encodes the specified PlayerSitDownReq message, length delimited. Does not implicitly {@link common.v1.PlayerSitDownReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {common.v1.IPlayerSitDownReq} message PlayerSitDownReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSitDownReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerSitDownReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerSitDownReq} PlayerSitDownReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSitDownReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerSitDownReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seat = reader.int32();
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
             * Decodes a PlayerSitDownReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerSitDownReq} PlayerSitDownReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSitDownReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerSitDownReq message.
             * @function verify
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerSitDownReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seat != null && message.hasOwnProperty("seat"))
                    if (!$util.isInteger(message.seat))
                        return "seat: integer expected";
                return null;
            };

            /**
             * Creates a PlayerSitDownReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerSitDownReq} PlayerSitDownReq
             */
            PlayerSitDownReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerSitDownReq)
                    return object;
                var message = new $root.common.v1.PlayerSitDownReq();
                if (object.seat != null)
                    message.seat = object.seat | 0;
                return message;
            };

            /**
             * Creates a plain object from a PlayerSitDownReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {common.v1.PlayerSitDownReq} message PlayerSitDownReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerSitDownReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.seat = 0;
                if (message.seat != null && message.hasOwnProperty("seat"))
                    object.seat = message.seat;
                return object;
            };

            /**
             * Converts this PlayerSitDownReq to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerSitDownReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerSitDownReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerSitDownReq
             * @function getTypeUrl
             * @memberof common.v1.PlayerSitDownReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerSitDownReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerSitDownReq";
            };

            return PlayerSitDownReq;
        })();

        v1.PlayerSitDownRes = (function() {

            /**
             * Properties of a PlayerSitDownRes.
             * @memberof common.v1
             * @interface IPlayerSitDownRes
             * @property {number|null} [seat] PlayerSitDownRes seat
             * @property {number|Long|null} [waitReadyExpiredTime] PlayerSitDownRes waitReadyExpiredTime
             */

            /**
             * Constructs a new PlayerSitDownRes.
             * @memberof common.v1
             * @classdesc Represents a PlayerSitDownRes.
             * @implements IPlayerSitDownRes
             * @constructor
             * @param {common.v1.IPlayerSitDownRes=} [properties] Properties to set
             */
            function PlayerSitDownRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerSitDownRes seat.
             * @member {number} seat
             * @memberof common.v1.PlayerSitDownRes
             * @instance
             */
            PlayerSitDownRes.prototype.seat = 0;

            /**
             * PlayerSitDownRes waitReadyExpiredTime.
             * @member {number|Long} waitReadyExpiredTime
             * @memberof common.v1.PlayerSitDownRes
             * @instance
             */
            PlayerSitDownRes.prototype.waitReadyExpiredTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PlayerSitDownRes instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {common.v1.IPlayerSitDownRes=} [properties] Properties to set
             * @returns {common.v1.PlayerSitDownRes} PlayerSitDownRes instance
             */
            PlayerSitDownRes.create = function create(properties) {
                return new PlayerSitDownRes(properties);
            };

            /**
             * Encodes the specified PlayerSitDownRes message. Does not implicitly {@link common.v1.PlayerSitDownRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {common.v1.IPlayerSitDownRes} message PlayerSitDownRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSitDownRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
                if (message.waitReadyExpiredTime != null && Object.hasOwnProperty.call(message, "waitReadyExpiredTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.waitReadyExpiredTime);
                return writer;
            };

            /**
             * Encodes the specified PlayerSitDownRes message, length delimited. Does not implicitly {@link common.v1.PlayerSitDownRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {common.v1.IPlayerSitDownRes} message PlayerSitDownRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSitDownRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerSitDownRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerSitDownRes} PlayerSitDownRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSitDownRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerSitDownRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seat = reader.int32();
                            break;
                        }
                    case 4: {
                            message.waitReadyExpiredTime = reader.int64();
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
             * Decodes a PlayerSitDownRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerSitDownRes} PlayerSitDownRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSitDownRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerSitDownRes message.
             * @function verify
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerSitDownRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seat != null && message.hasOwnProperty("seat"))
                    if (!$util.isInteger(message.seat))
                        return "seat: integer expected";
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (!$util.isInteger(message.waitReadyExpiredTime) && !(message.waitReadyExpiredTime && $util.isInteger(message.waitReadyExpiredTime.low) && $util.isInteger(message.waitReadyExpiredTime.high)))
                        return "waitReadyExpiredTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a PlayerSitDownRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerSitDownRes} PlayerSitDownRes
             */
            PlayerSitDownRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerSitDownRes)
                    return object;
                var message = new $root.common.v1.PlayerSitDownRes();
                if (object.seat != null)
                    message.seat = object.seat | 0;
                if (object.waitReadyExpiredTime != null)
                    if ($util.Long)
                        (message.waitReadyExpiredTime = $util.Long.fromValue(object.waitReadyExpiredTime)).unsigned = false;
                    else if (typeof object.waitReadyExpiredTime === "string")
                        message.waitReadyExpiredTime = parseInt(object.waitReadyExpiredTime, 10);
                    else if (typeof object.waitReadyExpiredTime === "number")
                        message.waitReadyExpiredTime = object.waitReadyExpiredTime;
                    else if (typeof object.waitReadyExpiredTime === "object")
                        message.waitReadyExpiredTime = new $util.LongBits(object.waitReadyExpiredTime.low >>> 0, object.waitReadyExpiredTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PlayerSitDownRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {common.v1.PlayerSitDownRes} message PlayerSitDownRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerSitDownRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.seat = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.waitReadyExpiredTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.waitReadyExpiredTime = options.longs === String ? "0" : 0;
                }
                if (message.seat != null && message.hasOwnProperty("seat"))
                    object.seat = message.seat;
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (typeof message.waitReadyExpiredTime === "number")
                        object.waitReadyExpiredTime = options.longs === String ? String(message.waitReadyExpiredTime) : message.waitReadyExpiredTime;
                    else
                        object.waitReadyExpiredTime = options.longs === String ? $util.Long.prototype.toString.call(message.waitReadyExpiredTime) : options.longs === Number ? new $util.LongBits(message.waitReadyExpiredTime.low >>> 0, message.waitReadyExpiredTime.high >>> 0).toNumber() : message.waitReadyExpiredTime;
                return object;
            };

            /**
             * Converts this PlayerSitDownRes to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerSitDownRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerSitDownRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerSitDownRes
             * @function getTypeUrl
             * @memberof common.v1.PlayerSitDownRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerSitDownRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerSitDownRes";
            };

            return PlayerSitDownRes;
        })();

        v1.SitDownBroadcast = (function() {

            /**
             * Properties of a SitDownBroadcast.
             * @memberof common.v1
             * @interface ISitDownBroadcast
             * @property {number|Long|null} [bcUid] SitDownBroadcast bcUid
             * @property {number|Long|null} [userId] SitDownBroadcast userId
             * @property {common.v1.IPlayerInfo|null} [player] SitDownBroadcast player
             * @property {number|Long|null} [waitReadyExpiredTime] SitDownBroadcast waitReadyExpiredTime
             */

            /**
             * Constructs a new SitDownBroadcast.
             * @memberof common.v1
             * @classdesc Represents a SitDownBroadcast.
             * @implements ISitDownBroadcast
             * @constructor
             * @param {common.v1.ISitDownBroadcast=} [properties] Properties to set
             */
            function SitDownBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SitDownBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.SitDownBroadcast
             * @instance
             */
            SitDownBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SitDownBroadcast userId.
             * @member {number|Long} userId
             * @memberof common.v1.SitDownBroadcast
             * @instance
             */
            SitDownBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SitDownBroadcast player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.SitDownBroadcast
             * @instance
             */
            SitDownBroadcast.prototype.player = null;

            /**
             * SitDownBroadcast waitReadyExpiredTime.
             * @member {number|Long} waitReadyExpiredTime
             * @memberof common.v1.SitDownBroadcast
             * @instance
             */
            SitDownBroadcast.prototype.waitReadyExpiredTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new SitDownBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {common.v1.ISitDownBroadcast=} [properties] Properties to set
             * @returns {common.v1.SitDownBroadcast} SitDownBroadcast instance
             */
            SitDownBroadcast.create = function create(properties) {
                return new SitDownBroadcast(properties);
            };

            /**
             * Encodes the specified SitDownBroadcast message. Does not implicitly {@link common.v1.SitDownBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {common.v1.ISitDownBroadcast} message SitDownBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SitDownBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                if (message.waitReadyExpiredTime != null && Object.hasOwnProperty.call(message, "waitReadyExpiredTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.waitReadyExpiredTime);
                return writer;
            };

            /**
             * Encodes the specified SitDownBroadcast message, length delimited. Does not implicitly {@link common.v1.SitDownBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {common.v1.ISitDownBroadcast} message SitDownBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SitDownBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SitDownBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.SitDownBroadcast} SitDownBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SitDownBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.SitDownBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.waitReadyExpiredTime = reader.int64();
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
             * Decodes a SitDownBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.SitDownBroadcast} SitDownBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SitDownBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SitDownBroadcast message.
             * @function verify
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SitDownBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (!$util.isInteger(message.waitReadyExpiredTime) && !(message.waitReadyExpiredTime && $util.isInteger(message.waitReadyExpiredTime.low) && $util.isInteger(message.waitReadyExpiredTime.high)))
                        return "waitReadyExpiredTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a SitDownBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.SitDownBroadcast} SitDownBroadcast
             */
            SitDownBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.SitDownBroadcast)
                    return object;
                var message = new $root.common.v1.SitDownBroadcast();
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
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.SitDownBroadcast.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                if (object.waitReadyExpiredTime != null)
                    if ($util.Long)
                        (message.waitReadyExpiredTime = $util.Long.fromValue(object.waitReadyExpiredTime)).unsigned = false;
                    else if (typeof object.waitReadyExpiredTime === "string")
                        message.waitReadyExpiredTime = parseInt(object.waitReadyExpiredTime, 10);
                    else if (typeof object.waitReadyExpiredTime === "number")
                        message.waitReadyExpiredTime = object.waitReadyExpiredTime;
                    else if (typeof object.waitReadyExpiredTime === "object")
                        message.waitReadyExpiredTime = new $util.LongBits(object.waitReadyExpiredTime.low >>> 0, object.waitReadyExpiredTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a SitDownBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {common.v1.SitDownBroadcast} message SitDownBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SitDownBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.player = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.waitReadyExpiredTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.waitReadyExpiredTime = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (typeof message.waitReadyExpiredTime === "number")
                        object.waitReadyExpiredTime = options.longs === String ? String(message.waitReadyExpiredTime) : message.waitReadyExpiredTime;
                    else
                        object.waitReadyExpiredTime = options.longs === String ? $util.Long.prototype.toString.call(message.waitReadyExpiredTime) : options.longs === Number ? new $util.LongBits(message.waitReadyExpiredTime.low >>> 0, message.waitReadyExpiredTime.high >>> 0).toNumber() : message.waitReadyExpiredTime;
                return object;
            };

            /**
             * Converts this SitDownBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.SitDownBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SitDownBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SitDownBroadcast
             * @function getTypeUrl
             * @memberof common.v1.SitDownBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SitDownBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.SitDownBroadcast";
            };

            return SitDownBroadcast;
        })();

        v1.PlayerStandUpReq = (function() {

            /**
             * Properties of a PlayerStandUpReq.
             * @memberof common.v1
             * @interface IPlayerStandUpReq
             */

            /**
             * Constructs a new PlayerStandUpReq.
             * @memberof common.v1
             * @classdesc Represents a PlayerStandUpReq.
             * @implements IPlayerStandUpReq
             * @constructor
             * @param {common.v1.IPlayerStandUpReq=} [properties] Properties to set
             */
            function PlayerStandUpReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PlayerStandUpReq instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {common.v1.IPlayerStandUpReq=} [properties] Properties to set
             * @returns {common.v1.PlayerStandUpReq} PlayerStandUpReq instance
             */
            PlayerStandUpReq.create = function create(properties) {
                return new PlayerStandUpReq(properties);
            };

            /**
             * Encodes the specified PlayerStandUpReq message. Does not implicitly {@link common.v1.PlayerStandUpReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {common.v1.IPlayerStandUpReq} message PlayerStandUpReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerStandUpReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PlayerStandUpReq message, length delimited. Does not implicitly {@link common.v1.PlayerStandUpReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {common.v1.IPlayerStandUpReq} message PlayerStandUpReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerStandUpReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerStandUpReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerStandUpReq} PlayerStandUpReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerStandUpReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerStandUpReq();
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
             * Decodes a PlayerStandUpReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerStandUpReq} PlayerStandUpReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerStandUpReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerStandUpReq message.
             * @function verify
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerStandUpReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a PlayerStandUpReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerStandUpReq} PlayerStandUpReq
             */
            PlayerStandUpReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerStandUpReq)
                    return object;
                return new $root.common.v1.PlayerStandUpReq();
            };

            /**
             * Creates a plain object from a PlayerStandUpReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {common.v1.PlayerStandUpReq} message PlayerStandUpReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerStandUpReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this PlayerStandUpReq to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerStandUpReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerStandUpReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerStandUpReq
             * @function getTypeUrl
             * @memberof common.v1.PlayerStandUpReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerStandUpReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerStandUpReq";
            };

            return PlayerStandUpReq;
        })();

        v1.PlayerStandUpRes = (function() {

            /**
             * Properties of a PlayerStandUpRes.
             * @memberof common.v1
             * @interface IPlayerStandUpRes
             */

            /**
             * Constructs a new PlayerStandUpRes.
             * @memberof common.v1
             * @classdesc Represents a PlayerStandUpRes.
             * @implements IPlayerStandUpRes
             * @constructor
             * @param {common.v1.IPlayerStandUpRes=} [properties] Properties to set
             */
            function PlayerStandUpRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PlayerStandUpRes instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {common.v1.IPlayerStandUpRes=} [properties] Properties to set
             * @returns {common.v1.PlayerStandUpRes} PlayerStandUpRes instance
             */
            PlayerStandUpRes.create = function create(properties) {
                return new PlayerStandUpRes(properties);
            };

            /**
             * Encodes the specified PlayerStandUpRes message. Does not implicitly {@link common.v1.PlayerStandUpRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {common.v1.IPlayerStandUpRes} message PlayerStandUpRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerStandUpRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PlayerStandUpRes message, length delimited. Does not implicitly {@link common.v1.PlayerStandUpRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {common.v1.IPlayerStandUpRes} message PlayerStandUpRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerStandUpRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerStandUpRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerStandUpRes} PlayerStandUpRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerStandUpRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerStandUpRes();
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
             * Decodes a PlayerStandUpRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerStandUpRes} PlayerStandUpRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerStandUpRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerStandUpRes message.
             * @function verify
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerStandUpRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a PlayerStandUpRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerStandUpRes} PlayerStandUpRes
             */
            PlayerStandUpRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerStandUpRes)
                    return object;
                return new $root.common.v1.PlayerStandUpRes();
            };

            /**
             * Creates a plain object from a PlayerStandUpRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {common.v1.PlayerStandUpRes} message PlayerStandUpRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerStandUpRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this PlayerStandUpRes to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerStandUpRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerStandUpRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerStandUpRes
             * @function getTypeUrl
             * @memberof common.v1.PlayerStandUpRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerStandUpRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerStandUpRes";
            };

            return PlayerStandUpRes;
        })();

        v1.StandUpBroadcast = (function() {

            /**
             * Properties of a StandUpBroadcast.
             * @memberof common.v1
             * @interface IStandUpBroadcast
             * @property {number|Long|null} [bcUid] StandUpBroadcast bcUid
             * @property {number|Long|null} [userId] StandUpBroadcast userId
             * @property {common.v1.IPlayerInfo|null} [player] StandUpBroadcast player
             */

            /**
             * Constructs a new StandUpBroadcast.
             * @memberof common.v1
             * @classdesc Represents a StandUpBroadcast.
             * @implements IStandUpBroadcast
             * @constructor
             * @param {common.v1.IStandUpBroadcast=} [properties] Properties to set
             */
            function StandUpBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StandUpBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.StandUpBroadcast
             * @instance
             */
            StandUpBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * StandUpBroadcast userId.
             * @member {number|Long} userId
             * @memberof common.v1.StandUpBroadcast
             * @instance
             */
            StandUpBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * StandUpBroadcast player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.StandUpBroadcast
             * @instance
             */
            StandUpBroadcast.prototype.player = null;

            /**
             * Creates a new StandUpBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {common.v1.IStandUpBroadcast=} [properties] Properties to set
             * @returns {common.v1.StandUpBroadcast} StandUpBroadcast instance
             */
            StandUpBroadcast.create = function create(properties) {
                return new StandUpBroadcast(properties);
            };

            /**
             * Encodes the specified StandUpBroadcast message. Does not implicitly {@link common.v1.StandUpBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {common.v1.IStandUpBroadcast} message StandUpBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StandUpBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified StandUpBroadcast message, length delimited. Does not implicitly {@link common.v1.StandUpBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {common.v1.IStandUpBroadcast} message StandUpBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StandUpBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StandUpBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.StandUpBroadcast} StandUpBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StandUpBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.StandUpBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
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
             * Decodes a StandUpBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.StandUpBroadcast} StandUpBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StandUpBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StandUpBroadcast message.
             * @function verify
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StandUpBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                return null;
            };

            /**
             * Creates a StandUpBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.StandUpBroadcast} StandUpBroadcast
             */
            StandUpBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.StandUpBroadcast)
                    return object;
                var message = new $root.common.v1.StandUpBroadcast();
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
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.StandUpBroadcast.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                return message;
            };

            /**
             * Creates a plain object from a StandUpBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {common.v1.StandUpBroadcast} message StandUpBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StandUpBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.player = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this StandUpBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.StandUpBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StandUpBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StandUpBroadcast
             * @function getTypeUrl
             * @memberof common.v1.StandUpBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StandUpBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.StandUpBroadcast";
            };

            return StandUpBroadcast;
        })();

        v1.PlayerReadyGameReq = (function() {

            /**
             * Properties of a PlayerReadyGameReq.
             * @memberof common.v1
             * @interface IPlayerReadyGameReq
             * @property {boolean|null} [ready] PlayerReadyGameReq ready
             */

            /**
             * Constructs a new PlayerReadyGameReq.
             * @memberof common.v1
             * @classdesc Represents a PlayerReadyGameReq.
             * @implements IPlayerReadyGameReq
             * @constructor
             * @param {common.v1.IPlayerReadyGameReq=} [properties] Properties to set
             */
            function PlayerReadyGameReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerReadyGameReq ready.
             * @member {boolean} ready
             * @memberof common.v1.PlayerReadyGameReq
             * @instance
             */
            PlayerReadyGameReq.prototype.ready = false;

            /**
             * Creates a new PlayerReadyGameReq instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {common.v1.IPlayerReadyGameReq=} [properties] Properties to set
             * @returns {common.v1.PlayerReadyGameReq} PlayerReadyGameReq instance
             */
            PlayerReadyGameReq.create = function create(properties) {
                return new PlayerReadyGameReq(properties);
            };

            /**
             * Encodes the specified PlayerReadyGameReq message. Does not implicitly {@link common.v1.PlayerReadyGameReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {common.v1.IPlayerReadyGameReq} message PlayerReadyGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerReadyGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ready);
                return writer;
            };

            /**
             * Encodes the specified PlayerReadyGameReq message, length delimited. Does not implicitly {@link common.v1.PlayerReadyGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {common.v1.IPlayerReadyGameReq} message PlayerReadyGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerReadyGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerReadyGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerReadyGameReq} PlayerReadyGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerReadyGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerReadyGameReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.ready = reader.bool();
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
             * Decodes a PlayerReadyGameReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerReadyGameReq} PlayerReadyGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerReadyGameReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerReadyGameReq message.
             * @function verify
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerReadyGameReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ready != null && message.hasOwnProperty("ready"))
                    if (typeof message.ready !== "boolean")
                        return "ready: boolean expected";
                return null;
            };

            /**
             * Creates a PlayerReadyGameReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerReadyGameReq} PlayerReadyGameReq
             */
            PlayerReadyGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerReadyGameReq)
                    return object;
                var message = new $root.common.v1.PlayerReadyGameReq();
                if (object.ready != null)
                    message.ready = Boolean(object.ready);
                return message;
            };

            /**
             * Creates a plain object from a PlayerReadyGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {common.v1.PlayerReadyGameReq} message PlayerReadyGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerReadyGameReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.ready = false;
                if (message.ready != null && message.hasOwnProperty("ready"))
                    object.ready = message.ready;
                return object;
            };

            /**
             * Converts this PlayerReadyGameReq to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerReadyGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerReadyGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerReadyGameReq
             * @function getTypeUrl
             * @memberof common.v1.PlayerReadyGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerReadyGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerReadyGameReq";
            };

            return PlayerReadyGameReq;
        })();

        v1.PlayerReadyGameRes = (function() {

            /**
             * Properties of a PlayerReadyGameRes.
             * @memberof common.v1
             * @interface IPlayerReadyGameRes
             * @property {boolean|null} [ready] PlayerReadyGameRes ready
             * @property {number|Long|null} [waitReadyExpiredTime] PlayerReadyGameRes waitReadyExpiredTime
             */

            /**
             * Constructs a new PlayerReadyGameRes.
             * @memberof common.v1
             * @classdesc Represents a PlayerReadyGameRes.
             * @implements IPlayerReadyGameRes
             * @constructor
             * @param {common.v1.IPlayerReadyGameRes=} [properties] Properties to set
             */
            function PlayerReadyGameRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerReadyGameRes ready.
             * @member {boolean} ready
             * @memberof common.v1.PlayerReadyGameRes
             * @instance
             */
            PlayerReadyGameRes.prototype.ready = false;

            /**
             * PlayerReadyGameRes waitReadyExpiredTime.
             * @member {number|Long} waitReadyExpiredTime
             * @memberof common.v1.PlayerReadyGameRes
             * @instance
             */
            PlayerReadyGameRes.prototype.waitReadyExpiredTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PlayerReadyGameRes instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {common.v1.IPlayerReadyGameRes=} [properties] Properties to set
             * @returns {common.v1.PlayerReadyGameRes} PlayerReadyGameRes instance
             */
            PlayerReadyGameRes.create = function create(properties) {
                return new PlayerReadyGameRes(properties);
            };

            /**
             * Encodes the specified PlayerReadyGameRes message. Does not implicitly {@link common.v1.PlayerReadyGameRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {common.v1.IPlayerReadyGameRes} message PlayerReadyGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerReadyGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ready);
                if (message.waitReadyExpiredTime != null && Object.hasOwnProperty.call(message, "waitReadyExpiredTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.waitReadyExpiredTime);
                return writer;
            };

            /**
             * Encodes the specified PlayerReadyGameRes message, length delimited. Does not implicitly {@link common.v1.PlayerReadyGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {common.v1.IPlayerReadyGameRes} message PlayerReadyGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerReadyGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerReadyGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerReadyGameRes} PlayerReadyGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerReadyGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerReadyGameRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.ready = reader.bool();
                            break;
                        }
                    case 2: {
                            message.waitReadyExpiredTime = reader.int64();
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
             * Decodes a PlayerReadyGameRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerReadyGameRes} PlayerReadyGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerReadyGameRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerReadyGameRes message.
             * @function verify
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerReadyGameRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ready != null && message.hasOwnProperty("ready"))
                    if (typeof message.ready !== "boolean")
                        return "ready: boolean expected";
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (!$util.isInteger(message.waitReadyExpiredTime) && !(message.waitReadyExpiredTime && $util.isInteger(message.waitReadyExpiredTime.low) && $util.isInteger(message.waitReadyExpiredTime.high)))
                        return "waitReadyExpiredTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a PlayerReadyGameRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerReadyGameRes} PlayerReadyGameRes
             */
            PlayerReadyGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerReadyGameRes)
                    return object;
                var message = new $root.common.v1.PlayerReadyGameRes();
                if (object.ready != null)
                    message.ready = Boolean(object.ready);
                if (object.waitReadyExpiredTime != null)
                    if ($util.Long)
                        (message.waitReadyExpiredTime = $util.Long.fromValue(object.waitReadyExpiredTime)).unsigned = false;
                    else if (typeof object.waitReadyExpiredTime === "string")
                        message.waitReadyExpiredTime = parseInt(object.waitReadyExpiredTime, 10);
                    else if (typeof object.waitReadyExpiredTime === "number")
                        message.waitReadyExpiredTime = object.waitReadyExpiredTime;
                    else if (typeof object.waitReadyExpiredTime === "object")
                        message.waitReadyExpiredTime = new $util.LongBits(object.waitReadyExpiredTime.low >>> 0, object.waitReadyExpiredTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PlayerReadyGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {common.v1.PlayerReadyGameRes} message PlayerReadyGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerReadyGameRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ready = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.waitReadyExpiredTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.waitReadyExpiredTime = options.longs === String ? "0" : 0;
                }
                if (message.ready != null && message.hasOwnProperty("ready"))
                    object.ready = message.ready;
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (typeof message.waitReadyExpiredTime === "number")
                        object.waitReadyExpiredTime = options.longs === String ? String(message.waitReadyExpiredTime) : message.waitReadyExpiredTime;
                    else
                        object.waitReadyExpiredTime = options.longs === String ? $util.Long.prototype.toString.call(message.waitReadyExpiredTime) : options.longs === Number ? new $util.LongBits(message.waitReadyExpiredTime.low >>> 0, message.waitReadyExpiredTime.high >>> 0).toNumber() : message.waitReadyExpiredTime;
                return object;
            };

            /**
             * Converts this PlayerReadyGameRes to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerReadyGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerReadyGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerReadyGameRes
             * @function getTypeUrl
             * @memberof common.v1.PlayerReadyGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerReadyGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerReadyGameRes";
            };

            return PlayerReadyGameRes;
        })();

        v1.ReadyBroadcast = (function() {

            /**
             * Properties of a ReadyBroadcast.
             * @memberof common.v1
             * @interface IReadyBroadcast
             * @property {number|Long|null} [bcUid] ReadyBroadcast bcUid
             * @property {number|Long|null} [userId] ReadyBroadcast userId
             * @property {common.v1.IPlayerInfo|null} [player] ReadyBroadcast player
             * @property {boolean|null} [isReady] ReadyBroadcast isReady
             * @property {number|Long|null} [waitReadyExpiredTime] ReadyBroadcast waitReadyExpiredTime
             */

            /**
             * Constructs a new ReadyBroadcast.
             * @memberof common.v1
             * @classdesc Represents a ReadyBroadcast.
             * @implements IReadyBroadcast
             * @constructor
             * @param {common.v1.IReadyBroadcast=} [properties] Properties to set
             */
            function ReadyBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadyBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.ReadyBroadcast
             * @instance
             */
            ReadyBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ReadyBroadcast userId.
             * @member {number|Long} userId
             * @memberof common.v1.ReadyBroadcast
             * @instance
             */
            ReadyBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ReadyBroadcast player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.ReadyBroadcast
             * @instance
             */
            ReadyBroadcast.prototype.player = null;

            /**
             * ReadyBroadcast isReady.
             * @member {boolean} isReady
             * @memberof common.v1.ReadyBroadcast
             * @instance
             */
            ReadyBroadcast.prototype.isReady = false;

            /**
             * ReadyBroadcast waitReadyExpiredTime.
             * @member {number|Long} waitReadyExpiredTime
             * @memberof common.v1.ReadyBroadcast
             * @instance
             */
            ReadyBroadcast.prototype.waitReadyExpiredTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ReadyBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {common.v1.IReadyBroadcast=} [properties] Properties to set
             * @returns {common.v1.ReadyBroadcast} ReadyBroadcast instance
             */
            ReadyBroadcast.create = function create(properties) {
                return new ReadyBroadcast(properties);
            };

            /**
             * Encodes the specified ReadyBroadcast message. Does not implicitly {@link common.v1.ReadyBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {common.v1.IReadyBroadcast} message ReadyBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadyBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.isReady != null && Object.hasOwnProperty.call(message, "isReady"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isReady);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.bcUid);
                if (message.waitReadyExpiredTime != null && Object.hasOwnProperty.call(message, "waitReadyExpiredTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.waitReadyExpiredTime);
                return writer;
            };

            /**
             * Encodes the specified ReadyBroadcast message, length delimited. Does not implicitly {@link common.v1.ReadyBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {common.v1.IReadyBroadcast} message ReadyBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadyBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadyBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ReadyBroadcast} ReadyBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadyBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ReadyBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 4: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.isReady = reader.bool();
                            break;
                        }
                    case 5: {
                            message.waitReadyExpiredTime = reader.int64();
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
             * Decodes a ReadyBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ReadyBroadcast} ReadyBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadyBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadyBroadcast message.
             * @function verify
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadyBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                if (message.isReady != null && message.hasOwnProperty("isReady"))
                    if (typeof message.isReady !== "boolean")
                        return "isReady: boolean expected";
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (!$util.isInteger(message.waitReadyExpiredTime) && !(message.waitReadyExpiredTime && $util.isInteger(message.waitReadyExpiredTime.low) && $util.isInteger(message.waitReadyExpiredTime.high)))
                        return "waitReadyExpiredTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a ReadyBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ReadyBroadcast} ReadyBroadcast
             */
            ReadyBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ReadyBroadcast)
                    return object;
                var message = new $root.common.v1.ReadyBroadcast();
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
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.ReadyBroadcast.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                if (object.isReady != null)
                    message.isReady = Boolean(object.isReady);
                if (object.waitReadyExpiredTime != null)
                    if ($util.Long)
                        (message.waitReadyExpiredTime = $util.Long.fromValue(object.waitReadyExpiredTime)).unsigned = false;
                    else if (typeof object.waitReadyExpiredTime === "string")
                        message.waitReadyExpiredTime = parseInt(object.waitReadyExpiredTime, 10);
                    else if (typeof object.waitReadyExpiredTime === "number")
                        message.waitReadyExpiredTime = object.waitReadyExpiredTime;
                    else if (typeof object.waitReadyExpiredTime === "object")
                        message.waitReadyExpiredTime = new $util.LongBits(object.waitReadyExpiredTime.low >>> 0, object.waitReadyExpiredTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ReadyBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {common.v1.ReadyBroadcast} message ReadyBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadyBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.player = null;
                    object.isReady = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.waitReadyExpiredTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.waitReadyExpiredTime = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.isReady != null && message.hasOwnProperty("isReady"))
                    object.isReady = message.isReady;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (typeof message.waitReadyExpiredTime === "number")
                        object.waitReadyExpiredTime = options.longs === String ? String(message.waitReadyExpiredTime) : message.waitReadyExpiredTime;
                    else
                        object.waitReadyExpiredTime = options.longs === String ? $util.Long.prototype.toString.call(message.waitReadyExpiredTime) : options.longs === Number ? new $util.LongBits(message.waitReadyExpiredTime.low >>> 0, message.waitReadyExpiredTime.high >>> 0).toNumber() : message.waitReadyExpiredTime;
                return object;
            };

            /**
             * Converts this ReadyBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.ReadyBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadyBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReadyBroadcast
             * @function getTypeUrl
             * @memberof common.v1.ReadyBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReadyBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ReadyBroadcast";
            };

            return ReadyBroadcast;
        })();

        v1.UserInfoUpdateBroadcast = (function() {

            /**
             * Properties of a UserInfoUpdateBroadcast.
             * @memberof common.v1
             * @interface IUserInfoUpdateBroadcast
             * @property {number|Long|null} [userId] UserInfoUpdateBroadcast userId
             * @property {number|Long|null} [coins] UserInfoUpdateBroadcast coins
             */

            /**
             * Constructs a new UserInfoUpdateBroadcast.
             * @memberof common.v1
             * @classdesc Represents a UserInfoUpdateBroadcast.
             * @implements IUserInfoUpdateBroadcast
             * @constructor
             * @param {common.v1.IUserInfoUpdateBroadcast=} [properties] Properties to set
             */
            function UserInfoUpdateBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfoUpdateBroadcast userId.
             * @member {number|Long} userId
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @instance
             */
            UserInfoUpdateBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserInfoUpdateBroadcast coins.
             * @member {number|Long} coins
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @instance
             */
            UserInfoUpdateBroadcast.prototype.coins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new UserInfoUpdateBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {common.v1.IUserInfoUpdateBroadcast=} [properties] Properties to set
             * @returns {common.v1.UserInfoUpdateBroadcast} UserInfoUpdateBroadcast instance
             */
            UserInfoUpdateBroadcast.create = function create(properties) {
                return new UserInfoUpdateBroadcast(properties);
            };

            /**
             * Encodes the specified UserInfoUpdateBroadcast message. Does not implicitly {@link common.v1.UserInfoUpdateBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {common.v1.IUserInfoUpdateBroadcast} message UserInfoUpdateBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfoUpdateBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.coins != null && Object.hasOwnProperty.call(message, "coins"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.coins);
                return writer;
            };

            /**
             * Encodes the specified UserInfoUpdateBroadcast message, length delimited. Does not implicitly {@link common.v1.UserInfoUpdateBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {common.v1.IUserInfoUpdateBroadcast} message UserInfoUpdateBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfoUpdateBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfoUpdateBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.UserInfoUpdateBroadcast} UserInfoUpdateBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfoUpdateBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.UserInfoUpdateBroadcast();
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
                            message.coins = reader.int64();
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
             * Decodes a UserInfoUpdateBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.UserInfoUpdateBroadcast} UserInfoUpdateBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfoUpdateBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfoUpdateBroadcast message.
             * @function verify
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfoUpdateBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.coins != null && message.hasOwnProperty("coins"))
                    if (!$util.isInteger(message.coins) && !(message.coins && $util.isInteger(message.coins.low) && $util.isInteger(message.coins.high)))
                        return "coins: integer|Long expected";
                return null;
            };

            /**
             * Creates a UserInfoUpdateBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.UserInfoUpdateBroadcast} UserInfoUpdateBroadcast
             */
            UserInfoUpdateBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.UserInfoUpdateBroadcast)
                    return object;
                var message = new $root.common.v1.UserInfoUpdateBroadcast();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.coins != null)
                    if ($util.Long)
                        (message.coins = $util.Long.fromValue(object.coins)).unsigned = false;
                    else if (typeof object.coins === "string")
                        message.coins = parseInt(object.coins, 10);
                    else if (typeof object.coins === "number")
                        message.coins = object.coins;
                    else if (typeof object.coins === "object")
                        message.coins = new $util.LongBits(object.coins.low >>> 0, object.coins.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a UserInfoUpdateBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {common.v1.UserInfoUpdateBroadcast} message UserInfoUpdateBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfoUpdateBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.coins = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.coins = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.coins != null && message.hasOwnProperty("coins"))
                    if (typeof message.coins === "number")
                        object.coins = options.longs === String ? String(message.coins) : message.coins;
                    else
                        object.coins = options.longs === String ? $util.Long.prototype.toString.call(message.coins) : options.longs === Number ? new $util.LongBits(message.coins.low >>> 0, message.coins.high >>> 0).toNumber() : message.coins;
                return object;
            };

            /**
             * Converts this UserInfoUpdateBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfoUpdateBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserInfoUpdateBroadcast
             * @function getTypeUrl
             * @memberof common.v1.UserInfoUpdateBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserInfoUpdateBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.UserInfoUpdateBroadcast";
            };

            return UserInfoUpdateBroadcast;
        })();

        v1.PlayerSettingsReq = (function() {

            /**
             * Properties of a PlayerSettingsReq.
             * @memberof common.v1
             * @interface IPlayerSettingsReq
             * @property {common.v1.IPlayerSettings|null} [settings] PlayerSettingsReq settings
             */

            /**
             * Constructs a new PlayerSettingsReq.
             * @memberof common.v1
             * @classdesc Represents a PlayerSettingsReq.
             * @implements IPlayerSettingsReq
             * @constructor
             * @param {common.v1.IPlayerSettingsReq=} [properties] Properties to set
             */
            function PlayerSettingsReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerSettingsReq settings.
             * @member {common.v1.IPlayerSettings|null|undefined} settings
             * @memberof common.v1.PlayerSettingsReq
             * @instance
             */
            PlayerSettingsReq.prototype.settings = null;

            /**
             * Creates a new PlayerSettingsReq instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {common.v1.IPlayerSettingsReq=} [properties] Properties to set
             * @returns {common.v1.PlayerSettingsReq} PlayerSettingsReq instance
             */
            PlayerSettingsReq.create = function create(properties) {
                return new PlayerSettingsReq(properties);
            };

            /**
             * Encodes the specified PlayerSettingsReq message. Does not implicitly {@link common.v1.PlayerSettingsReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {common.v1.IPlayerSettingsReq} message PlayerSettingsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSettingsReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                    $root.common.v1.PlayerSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PlayerSettingsReq message, length delimited. Does not implicitly {@link common.v1.PlayerSettingsReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {common.v1.IPlayerSettingsReq} message PlayerSettingsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSettingsReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerSettingsReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerSettingsReq} PlayerSettingsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSettingsReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerSettingsReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.settings = $root.common.v1.PlayerSettings.decode(reader, reader.uint32());
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
             * Decodes a PlayerSettingsReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerSettingsReq} PlayerSettingsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSettingsReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerSettingsReq message.
             * @function verify
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerSettingsReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.settings != null && message.hasOwnProperty("settings")) {
                    var error = $root.common.v1.PlayerSettings.verify(message.settings);
                    if (error)
                        return "settings." + error;
                }
                return null;
            };

            /**
             * Creates a PlayerSettingsReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerSettingsReq} PlayerSettingsReq
             */
            PlayerSettingsReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerSettingsReq)
                    return object;
                var message = new $root.common.v1.PlayerSettingsReq();
                if (object.settings != null) {
                    if (typeof object.settings !== "object")
                        throw TypeError(".common.v1.PlayerSettingsReq.settings: object expected");
                    message.settings = $root.common.v1.PlayerSettings.fromObject(object.settings);
                }
                return message;
            };

            /**
             * Creates a plain object from a PlayerSettingsReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {common.v1.PlayerSettingsReq} message PlayerSettingsReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerSettingsReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.settings = null;
                if (message.settings != null && message.hasOwnProperty("settings"))
                    object.settings = $root.common.v1.PlayerSettings.toObject(message.settings, options);
                return object;
            };

            /**
             * Converts this PlayerSettingsReq to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerSettingsReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerSettingsReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerSettingsReq
             * @function getTypeUrl
             * @memberof common.v1.PlayerSettingsReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerSettingsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerSettingsReq";
            };

            return PlayerSettingsReq;
        })();

        v1.PlayerSettingsRes = (function() {

            /**
             * Properties of a PlayerSettingsRes.
             * @memberof common.v1
             * @interface IPlayerSettingsRes
             */

            /**
             * Constructs a new PlayerSettingsRes.
             * @memberof common.v1
             * @classdesc Represents a PlayerSettingsRes.
             * @implements IPlayerSettingsRes
             * @constructor
             * @param {common.v1.IPlayerSettingsRes=} [properties] Properties to set
             */
            function PlayerSettingsRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PlayerSettingsRes instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {common.v1.IPlayerSettingsRes=} [properties] Properties to set
             * @returns {common.v1.PlayerSettingsRes} PlayerSettingsRes instance
             */
            PlayerSettingsRes.create = function create(properties) {
                return new PlayerSettingsRes(properties);
            };

            /**
             * Encodes the specified PlayerSettingsRes message. Does not implicitly {@link common.v1.PlayerSettingsRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {common.v1.IPlayerSettingsRes} message PlayerSettingsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSettingsRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PlayerSettingsRes message, length delimited. Does not implicitly {@link common.v1.PlayerSettingsRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {common.v1.IPlayerSettingsRes} message PlayerSettingsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSettingsRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerSettingsRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerSettingsRes} PlayerSettingsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSettingsRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerSettingsRes();
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
             * Decodes a PlayerSettingsRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerSettingsRes} PlayerSettingsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSettingsRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerSettingsRes message.
             * @function verify
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerSettingsRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a PlayerSettingsRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerSettingsRes} PlayerSettingsRes
             */
            PlayerSettingsRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerSettingsRes)
                    return object;
                return new $root.common.v1.PlayerSettingsRes();
            };

            /**
             * Creates a plain object from a PlayerSettingsRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {common.v1.PlayerSettingsRes} message PlayerSettingsRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerSettingsRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this PlayerSettingsRes to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerSettingsRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerSettingsRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerSettingsRes
             * @function getTypeUrl
             * @memberof common.v1.PlayerSettingsRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerSettingsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerSettingsRes";
            };

            return PlayerSettingsRes;
        })();

        v1.GetHistorySummaryReq = (function() {

            /**
             * Properties of a GetHistorySummaryReq.
             * @memberof common.v1
             * @interface IGetHistorySummaryReq
             * @property {number|Long|null} [userId] GetHistorySummaryReq userId
             * @property {number|null} [gameId] GetHistorySummaryReq gameId
             * @property {number|Long|null} [startTime] GetHistorySummaryReq startTime
             * @property {number|Long|null} [endTime] GetHistorySummaryReq endTime
             */

            /**
             * Constructs a new GetHistorySummaryReq.
             * @memberof common.v1
             * @classdesc Represents a GetHistorySummaryReq.
             * @implements IGetHistorySummaryReq
             * @constructor
             * @param {common.v1.IGetHistorySummaryReq=} [properties] Properties to set
             */
            function GetHistorySummaryReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetHistorySummaryReq userId.
             * @member {number|Long} userId
             * @memberof common.v1.GetHistorySummaryReq
             * @instance
             */
            GetHistorySummaryReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetHistorySummaryReq gameId.
             * @member {number} gameId
             * @memberof common.v1.GetHistorySummaryReq
             * @instance
             */
            GetHistorySummaryReq.prototype.gameId = 0;

            /**
             * GetHistorySummaryReq startTime.
             * @member {number|Long} startTime
             * @memberof common.v1.GetHistorySummaryReq
             * @instance
             */
            GetHistorySummaryReq.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetHistorySummaryReq endTime.
             * @member {number|Long} endTime
             * @memberof common.v1.GetHistorySummaryReq
             * @instance
             */
            GetHistorySummaryReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GetHistorySummaryReq instance using the specified properties.
             * @function create
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {common.v1.IGetHistorySummaryReq=} [properties] Properties to set
             * @returns {common.v1.GetHistorySummaryReq} GetHistorySummaryReq instance
             */
            GetHistorySummaryReq.create = function create(properties) {
                return new GetHistorySummaryReq(properties);
            };

            /**
             * Encodes the specified GetHistorySummaryReq message. Does not implicitly {@link common.v1.GetHistorySummaryReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {common.v1.IGetHistorySummaryReq} message GetHistorySummaryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetHistorySummaryReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
                if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.startTime);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endTime);
                return writer;
            };

            /**
             * Encodes the specified GetHistorySummaryReq message, length delimited. Does not implicitly {@link common.v1.GetHistorySummaryReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {common.v1.IGetHistorySummaryReq} message GetHistorySummaryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetHistorySummaryReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetHistorySummaryReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.GetHistorySummaryReq} GetHistorySummaryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetHistorySummaryReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.GetHistorySummaryReq();
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
                            message.gameId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.startTime = reader.int64();
                            break;
                        }
                    case 4: {
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
             * Decodes a GetHistorySummaryReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.GetHistorySummaryReq} GetHistorySummaryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetHistorySummaryReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetHistorySummaryReq message.
             * @function verify
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetHistorySummaryReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId))
                        return "gameId: integer expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                        return "startTime: integer|Long expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a GetHistorySummaryReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.GetHistorySummaryReq} GetHistorySummaryReq
             */
            GetHistorySummaryReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.GetHistorySummaryReq)
                    return object;
                var message = new $root.common.v1.GetHistorySummaryReq();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.gameId != null)
                    message.gameId = object.gameId | 0;
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
             * Creates a plain object from a GetHistorySummaryReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {common.v1.GetHistorySummaryReq} message GetHistorySummaryReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetHistorySummaryReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.gameId = 0;
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
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    object.gameId = message.gameId;
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
             * Converts this GetHistorySummaryReq to JSON.
             * @function toJSON
             * @memberof common.v1.GetHistorySummaryReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetHistorySummaryReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetHistorySummaryReq
             * @function getTypeUrl
             * @memberof common.v1.GetHistorySummaryReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetHistorySummaryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.GetHistorySummaryReq";
            };

            return GetHistorySummaryReq;
        })();

        v1.GetHistorySummaryRes = (function() {

            /**
             * Properties of a GetHistorySummaryRes.
             * @memberof common.v1
             * @interface IGetHistorySummaryRes
             * @property {Array.<common.v1.IHistoryDateSummary>|null} [dateSummaries] GetHistorySummaryRes dateSummaries
             */

            /**
             * Constructs a new GetHistorySummaryRes.
             * @memberof common.v1
             * @classdesc Represents a GetHistorySummaryRes.
             * @implements IGetHistorySummaryRes
             * @constructor
             * @param {common.v1.IGetHistorySummaryRes=} [properties] Properties to set
             */
            function GetHistorySummaryRes(properties) {
                this.dateSummaries = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetHistorySummaryRes dateSummaries.
             * @member {Array.<common.v1.IHistoryDateSummary>} dateSummaries
             * @memberof common.v1.GetHistorySummaryRes
             * @instance
             */
            GetHistorySummaryRes.prototype.dateSummaries = $util.emptyArray;

            /**
             * Creates a new GetHistorySummaryRes instance using the specified properties.
             * @function create
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {common.v1.IGetHistorySummaryRes=} [properties] Properties to set
             * @returns {common.v1.GetHistorySummaryRes} GetHistorySummaryRes instance
             */
            GetHistorySummaryRes.create = function create(properties) {
                return new GetHistorySummaryRes(properties);
            };

            /**
             * Encodes the specified GetHistorySummaryRes message. Does not implicitly {@link common.v1.GetHistorySummaryRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {common.v1.IGetHistorySummaryRes} message GetHistorySummaryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetHistorySummaryRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dateSummaries != null && message.dateSummaries.length)
                    for (var i = 0; i < message.dateSummaries.length; ++i)
                        $root.common.v1.HistoryDateSummary.encode(message.dateSummaries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetHistorySummaryRes message, length delimited. Does not implicitly {@link common.v1.GetHistorySummaryRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {common.v1.IGetHistorySummaryRes} message GetHistorySummaryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetHistorySummaryRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetHistorySummaryRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.GetHistorySummaryRes} GetHistorySummaryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetHistorySummaryRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.GetHistorySummaryRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.dateSummaries && message.dateSummaries.length))
                                message.dateSummaries = [];
                            message.dateSummaries.push($root.common.v1.HistoryDateSummary.decode(reader, reader.uint32()));
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
             * Decodes a GetHistorySummaryRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.GetHistorySummaryRes} GetHistorySummaryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetHistorySummaryRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetHistorySummaryRes message.
             * @function verify
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetHistorySummaryRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dateSummaries != null && message.hasOwnProperty("dateSummaries")) {
                    if (!Array.isArray(message.dateSummaries))
                        return "dateSummaries: array expected";
                    for (var i = 0; i < message.dateSummaries.length; ++i) {
                        var error = $root.common.v1.HistoryDateSummary.verify(message.dateSummaries[i]);
                        if (error)
                            return "dateSummaries." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetHistorySummaryRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.GetHistorySummaryRes} GetHistorySummaryRes
             */
            GetHistorySummaryRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.GetHistorySummaryRes)
                    return object;
                var message = new $root.common.v1.GetHistorySummaryRes();
                if (object.dateSummaries) {
                    if (!Array.isArray(object.dateSummaries))
                        throw TypeError(".common.v1.GetHistorySummaryRes.dateSummaries: array expected");
                    message.dateSummaries = [];
                    for (var i = 0; i < object.dateSummaries.length; ++i) {
                        if (typeof object.dateSummaries[i] !== "object")
                            throw TypeError(".common.v1.GetHistorySummaryRes.dateSummaries: object expected");
                        message.dateSummaries[i] = $root.common.v1.HistoryDateSummary.fromObject(object.dateSummaries[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetHistorySummaryRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {common.v1.GetHistorySummaryRes} message GetHistorySummaryRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetHistorySummaryRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.dateSummaries = [];
                if (message.dateSummaries && message.dateSummaries.length) {
                    object.dateSummaries = [];
                    for (var j = 0; j < message.dateSummaries.length; ++j)
                        object.dateSummaries[j] = $root.common.v1.HistoryDateSummary.toObject(message.dateSummaries[j], options);
                }
                return object;
            };

            /**
             * Converts this GetHistorySummaryRes to JSON.
             * @function toJSON
             * @memberof common.v1.GetHistorySummaryRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetHistorySummaryRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetHistorySummaryRes
             * @function getTypeUrl
             * @memberof common.v1.GetHistorySummaryRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetHistorySummaryRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.GetHistorySummaryRes";
            };

            return GetHistorySummaryRes;
        })();

        v1.HistoryDateSummary = (function() {

            /**
             * Properties of a HistoryDateSummary.
             * @memberof common.v1
             * @interface IHistoryDateSummary
             * @property {number|null} [date] HistoryDateSummary date
             */

            /**
             * Constructs a new HistoryDateSummary.
             * @memberof common.v1
             * @classdesc Represents a HistoryDateSummary.
             * @implements IHistoryDateSummary
             * @constructor
             * @param {common.v1.IHistoryDateSummary=} [properties] Properties to set
             */
            function HistoryDateSummary(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HistoryDateSummary date.
             * @member {number} date
             * @memberof common.v1.HistoryDateSummary
             * @instance
             */
            HistoryDateSummary.prototype.date = 0;

            /**
             * Creates a new HistoryDateSummary instance using the specified properties.
             * @function create
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {common.v1.IHistoryDateSummary=} [properties] Properties to set
             * @returns {common.v1.HistoryDateSummary} HistoryDateSummary instance
             */
            HistoryDateSummary.create = function create(properties) {
                return new HistoryDateSummary(properties);
            };

            /**
             * Encodes the specified HistoryDateSummary message. Does not implicitly {@link common.v1.HistoryDateSummary.verify|verify} messages.
             * @function encode
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {common.v1.IHistoryDateSummary} message HistoryDateSummary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryDateSummary.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.date);
                return writer;
            };

            /**
             * Encodes the specified HistoryDateSummary message, length delimited. Does not implicitly {@link common.v1.HistoryDateSummary.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {common.v1.IHistoryDateSummary} message HistoryDateSummary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryDateSummary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HistoryDateSummary message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.HistoryDateSummary} HistoryDateSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryDateSummary.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.HistoryDateSummary();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.date = reader.int32();
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
             * Decodes a HistoryDateSummary message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.HistoryDateSummary} HistoryDateSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryDateSummary.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HistoryDateSummary message.
             * @function verify
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HistoryDateSummary.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.date != null && message.hasOwnProperty("date"))
                    if (!$util.isInteger(message.date))
                        return "date: integer expected";
                return null;
            };

            /**
             * Creates a HistoryDateSummary message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.HistoryDateSummary} HistoryDateSummary
             */
            HistoryDateSummary.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.HistoryDateSummary)
                    return object;
                var message = new $root.common.v1.HistoryDateSummary();
                if (object.date != null)
                    message.date = object.date | 0;
                return message;
            };

            /**
             * Creates a plain object from a HistoryDateSummary message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {common.v1.HistoryDateSummary} message HistoryDateSummary
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HistoryDateSummary.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.date = 0;
                if (message.date != null && message.hasOwnProperty("date"))
                    object.date = message.date;
                return object;
            };

            /**
             * Converts this HistoryDateSummary to JSON.
             * @function toJSON
             * @memberof common.v1.HistoryDateSummary
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HistoryDateSummary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HistoryDateSummary
             * @function getTypeUrl
             * @memberof common.v1.HistoryDateSummary
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HistoryDateSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.HistoryDateSummary";
            };

            return HistoryDateSummary;
        })();

        v1.PacketHeader = (function() {

            /**
             * Properties of a PacketHeader.
             * @memberof common.v1
             * @interface IPacketHeader
             * @property {number|null} [length] PacketHeader length
             * @property {number|null} [msgType] PacketHeader msgType
             * @property {number|null} [requestId] PacketHeader requestId
             * @property {number|null} [errorCode] PacketHeader errorCode
             */

            /**
             * Constructs a new PacketHeader.
             * @memberof common.v1
             * @classdesc Represents a PacketHeader.
             * @implements IPacketHeader
             * @constructor
             * @param {common.v1.IPacketHeader=} [properties] Properties to set
             */
            function PacketHeader(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PacketHeader length.
             * @member {number} length
             * @memberof common.v1.PacketHeader
             * @instance
             */
            PacketHeader.prototype.length = 0;

            /**
             * PacketHeader msgType.
             * @member {number} msgType
             * @memberof common.v1.PacketHeader
             * @instance
             */
            PacketHeader.prototype.msgType = 0;

            /**
             * PacketHeader requestId.
             * @member {number} requestId
             * @memberof common.v1.PacketHeader
             * @instance
             */
            PacketHeader.prototype.requestId = 0;

            /**
             * PacketHeader errorCode.
             * @member {number} errorCode
             * @memberof common.v1.PacketHeader
             * @instance
             */
            PacketHeader.prototype.errorCode = 0;

            /**
             * Creates a new PacketHeader instance using the specified properties.
             * @function create
             * @memberof common.v1.PacketHeader
             * @static
             * @param {common.v1.IPacketHeader=} [properties] Properties to set
             * @returns {common.v1.PacketHeader} PacketHeader instance
             */
            PacketHeader.create = function create(properties) {
                return new PacketHeader(properties);
            };

            /**
             * Encodes the specified PacketHeader message. Does not implicitly {@link common.v1.PacketHeader.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PacketHeader
             * @static
             * @param {common.v1.IPacketHeader} message PacketHeader message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PacketHeader.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.length);
                if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.msgType);
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.requestId);
                if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.errorCode);
                return writer;
            };

            /**
             * Encodes the specified PacketHeader message, length delimited. Does not implicitly {@link common.v1.PacketHeader.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PacketHeader
             * @static
             * @param {common.v1.IPacketHeader} message PacketHeader message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PacketHeader.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PacketHeader message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PacketHeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PacketHeader} PacketHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PacketHeader.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PacketHeader();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.length = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.msgType = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.errorCode = reader.uint32();
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
             * Decodes a PacketHeader message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PacketHeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PacketHeader} PacketHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PacketHeader.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PacketHeader message.
             * @function verify
             * @memberof common.v1.PacketHeader
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PacketHeader.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.length != null && message.hasOwnProperty("length"))
                    if (!$util.isInteger(message.length))
                        return "length: integer expected";
                if (message.msgType != null && message.hasOwnProperty("msgType"))
                    if (!$util.isInteger(message.msgType))
                        return "msgType: integer expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                    if (!$util.isInteger(message.errorCode))
                        return "errorCode: integer expected";
                return null;
            };

            /**
             * Creates a PacketHeader message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PacketHeader
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PacketHeader} PacketHeader
             */
            PacketHeader.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PacketHeader)
                    return object;
                var message = new $root.common.v1.PacketHeader();
                if (object.length != null)
                    message.length = object.length >>> 0;
                if (object.msgType != null)
                    message.msgType = object.msgType >>> 0;
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.errorCode != null)
                    message.errorCode = object.errorCode >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a PacketHeader message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PacketHeader
             * @static
             * @param {common.v1.PacketHeader} message PacketHeader
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PacketHeader.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.length = 0;
                    object.msgType = 0;
                    object.requestId = 0;
                    object.errorCode = 0;
                }
                if (message.length != null && message.hasOwnProperty("length"))
                    object.length = message.length;
                if (message.msgType != null && message.hasOwnProperty("msgType"))
                    object.msgType = message.msgType;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                    object.errorCode = message.errorCode;
                return object;
            };

            /**
             * Converts this PacketHeader to JSON.
             * @function toJSON
             * @memberof common.v1.PacketHeader
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PacketHeader.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PacketHeader
             * @function getTypeUrl
             * @memberof common.v1.PacketHeader
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PacketHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PacketHeader";
            };

            return PacketHeader;
        })();

        v1.RoomInfo = (function() {

            /**
             * Properties of a RoomInfo.
             * @memberof common.v1
             * @interface IRoomInfo
             * @property {number|Long|null} [roomId] RoomInfo roomId
             * @property {string|null} [roomName] RoomInfo roomName
             * @property {number|null} [roomStatus] RoomInfo roomStatus
             * @property {number|null} [applyMicCount] RoomInfo applyMicCount
             * @property {number|null} [roomMode] RoomInfo roomMode
             */

            /**
             * Constructs a new RoomInfo.
             * @memberof common.v1
             * @classdesc Represents a RoomInfo.
             * @implements IRoomInfo
             * @constructor
             * @param {common.v1.IRoomInfo=} [properties] Properties to set
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
             * @memberof common.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RoomInfo roomName.
             * @member {string} roomName
             * @memberof common.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomName = "";

            /**
             * RoomInfo roomStatus.
             * @member {number} roomStatus
             * @memberof common.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomStatus = 0;

            /**
             * RoomInfo applyMicCount.
             * @member {number} applyMicCount
             * @memberof common.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.applyMicCount = 0;

            /**
             * RoomInfo roomMode.
             * @member {number} roomMode
             * @memberof common.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomMode = 0;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @function create
             * @memberof common.v1.RoomInfo
             * @static
             * @param {common.v1.IRoomInfo=} [properties] Properties to set
             * @returns {common.v1.RoomInfo} RoomInfo instance
             */
            RoomInfo.create = function create(properties) {
                return new RoomInfo(properties);
            };

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link common.v1.RoomInfo.verify|verify} messages.
             * @function encode
             * @memberof common.v1.RoomInfo
             * @static
             * @param {common.v1.IRoomInfo} message RoomInfo message or plain object to encode
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
                if (message.applyMicCount != null && Object.hasOwnProperty.call(message, "applyMicCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.applyMicCount);
                if (message.roomMode != null && Object.hasOwnProperty.call(message, "roomMode"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roomMode);
                return writer;
            };

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link common.v1.RoomInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.RoomInfo
             * @static
             * @param {common.v1.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.RoomInfo();
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
                            message.applyMicCount = reader.int32();
                            break;
                        }
                    case 5: {
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
             * @memberof common.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.RoomInfo} RoomInfo
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
             * @memberof common.v1.RoomInfo
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
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    if (!$util.isInteger(message.applyMicCount))
                        return "applyMicCount: integer expected";
                if (message.roomMode != null && message.hasOwnProperty("roomMode"))
                    if (!$util.isInteger(message.roomMode))
                        return "roomMode: integer expected";
                return null;
            };

            /**
             * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.RoomInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.RoomInfo} RoomInfo
             */
            RoomInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.RoomInfo)
                    return object;
                var message = new $root.common.v1.RoomInfo();
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
                if (object.applyMicCount != null)
                    message.applyMicCount = object.applyMicCount | 0;
                if (object.roomMode != null)
                    message.roomMode = object.roomMode | 0;
                return message;
            };

            /**
             * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.RoomInfo
             * @static
             * @param {common.v1.RoomInfo} message RoomInfo
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
                    object.applyMicCount = 0;
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
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    object.applyMicCount = message.applyMicCount;
                if (message.roomMode != null && message.hasOwnProperty("roomMode"))
                    object.roomMode = message.roomMode;
                return object;
            };

            /**
             * Converts this RoomInfo to JSON.
             * @function toJSON
             * @memberof common.v1.RoomInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomInfo
             * @function getTypeUrl
             * @memberof common.v1.RoomInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.RoomInfo";
            };

            return RoomInfo;
        })();

        v1.DefaultPlayerInfo = (function() {

            /**
             * Properties of a DefaultPlayerInfo.
             * @memberof common.v1
             * @interface IDefaultPlayerInfo
             * @property {common.v1.IPlayerInfo|null} [playerInfo] DefaultPlayerInfo playerInfo
             */

            /**
             * Constructs a new DefaultPlayerInfo.
             * @memberof common.v1
             * @classdesc Represents a DefaultPlayerInfo.
             * @implements IDefaultPlayerInfo
             * @constructor
             * @param {common.v1.IDefaultPlayerInfo=} [properties] Properties to set
             */
            function DefaultPlayerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DefaultPlayerInfo playerInfo.
             * @member {common.v1.IPlayerInfo|null|undefined} playerInfo
             * @memberof common.v1.DefaultPlayerInfo
             * @instance
             */
            DefaultPlayerInfo.prototype.playerInfo = null;

            /**
             * Creates a new DefaultPlayerInfo instance using the specified properties.
             * @function create
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {common.v1.IDefaultPlayerInfo=} [properties] Properties to set
             * @returns {common.v1.DefaultPlayerInfo} DefaultPlayerInfo instance
             */
            DefaultPlayerInfo.create = function create(properties) {
                return new DefaultPlayerInfo(properties);
            };

            /**
             * Encodes the specified DefaultPlayerInfo message. Does not implicitly {@link common.v1.DefaultPlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {common.v1.IDefaultPlayerInfo} message DefaultPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefaultPlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.common.v1.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DefaultPlayerInfo message, length delimited. Does not implicitly {@link common.v1.DefaultPlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {common.v1.IDefaultPlayerInfo} message DefaultPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefaultPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DefaultPlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.DefaultPlayerInfo} DefaultPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DefaultPlayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.DefaultPlayerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerInfo = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
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
             * Decodes a DefaultPlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.DefaultPlayerInfo} DefaultPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DefaultPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DefaultPlayerInfo message.
             * @function verify
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DefaultPlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                return null;
            };

            /**
             * Creates a DefaultPlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.DefaultPlayerInfo} DefaultPlayerInfo
             */
            DefaultPlayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.DefaultPlayerInfo)
                    return object;
                var message = new $root.common.v1.DefaultPlayerInfo();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".common.v1.DefaultPlayerInfo.playerInfo: object expected");
                    message.playerInfo = $root.common.v1.PlayerInfo.fromObject(object.playerInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a DefaultPlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {common.v1.DefaultPlayerInfo} message DefaultPlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DefaultPlayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.playerInfo = null;
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.common.v1.PlayerInfo.toObject(message.playerInfo, options);
                return object;
            };

            /**
             * Converts this DefaultPlayerInfo to JSON.
             * @function toJSON
             * @memberof common.v1.DefaultPlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DefaultPlayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DefaultPlayerInfo
             * @function getTypeUrl
             * @memberof common.v1.DefaultPlayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DefaultPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.DefaultPlayerInfo";
            };

            return DefaultPlayerInfo;
        })();

        v1.PlayerInfo = (function() {

            /**
             * Properties of a PlayerInfo.
             * @memberof common.v1
             * @interface IPlayerInfo
             * @property {number|Long|null} [userId] PlayerInfo userId
             * @property {string|null} [nickname] PlayerInfo nickname
             * @property {string|null} [avatar] PlayerInfo avatar
             * @property {number|Long|null} [coin] PlayerInfo coin
             * @property {number|null} [seat] PlayerInfo seat
             * @property {number|null} [role] PlayerInfo role
             * @property {number|null} [post] PlayerInfo post
             * @property {number|null} [state] PlayerInfo state
             * @property {number|Long|null} [coinChanged] PlayerInfo coinChanged
             * @property {number|null} [micAllowStatus] PlayerInfo micAllowStatus
             * @property {boolean|null} [micOn] PlayerInfo micOn
             * @property {number|Long|null} [nextMicRequestTime] PlayerInfo nextMicRequestTime
             * @property {number|Long|null} [micRequestExpiredTime] PlayerInfo micRequestExpiredTime
             * @property {number|Long|null} [waitReadyExpiredTime] PlayerInfo waitReadyExpiredTime
             */

            /**
             * Constructs a new PlayerInfo.
             * @memberof common.v1
             * @classdesc Represents a PlayerInfo.
             * @implements IPlayerInfo
             * @constructor
             * @param {common.v1.IPlayerInfo=} [properties] Properties to set
             */
            function PlayerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerInfo userId.
             * @member {number|Long} userId
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerInfo nickname.
             * @member {string} nickname
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.nickname = "";

            /**
             * PlayerInfo avatar.
             * @member {string} avatar
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.avatar = "";

            /**
             * PlayerInfo coin.
             * @member {number|Long} coin
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerInfo seat.
             * @member {number} seat
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.seat = 0;

            /**
             * PlayerInfo role.
             * @member {number} role
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.role = 0;

            /**
             * PlayerInfo post.
             * @member {number} post
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.post = 0;

            /**
             * PlayerInfo state.
             * @member {number} state
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.state = 0;

            /**
             * PlayerInfo coinChanged.
             * @member {number|Long} coinChanged
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.coinChanged = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerInfo micAllowStatus.
             * @member {number} micAllowStatus
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.micAllowStatus = 0;

            /**
             * PlayerInfo micOn.
             * @member {boolean} micOn
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.micOn = false;

            /**
             * PlayerInfo nextMicRequestTime.
             * @member {number|Long} nextMicRequestTime
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.nextMicRequestTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerInfo micRequestExpiredTime.
             * @member {number|Long} micRequestExpiredTime
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.micRequestExpiredTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerInfo waitReadyExpiredTime.
             * @member {number|Long} waitReadyExpiredTime
             * @memberof common.v1.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.waitReadyExpiredTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PlayerInfo instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {common.v1.IPlayerInfo=} [properties] Properties to set
             * @returns {common.v1.PlayerInfo} PlayerInfo instance
             */
            PlayerInfo.create = function create(properties) {
                return new PlayerInfo(properties);
            };

            /**
             * Encodes the specified PlayerInfo message. Does not implicitly {@link common.v1.PlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {common.v1.IPlayerInfo} message PlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
                if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.coin);
                if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seat);
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.role);
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.state);
                if (message.micAllowStatus != null && Object.hasOwnProperty.call(message, "micAllowStatus"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.micAllowStatus);
                if (message.micOn != null && Object.hasOwnProperty.call(message, "micOn"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.micOn);
                if (message.nextMicRequestTime != null && Object.hasOwnProperty.call(message, "nextMicRequestTime"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int64(message.nextMicRequestTime);
                if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.post);
                if (message.micRequestExpiredTime != null && Object.hasOwnProperty.call(message, "micRequestExpiredTime"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int64(message.micRequestExpiredTime);
                if (message.coinChanged != null && Object.hasOwnProperty.call(message, "coinChanged"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int64(message.coinChanged);
                if (message.waitReadyExpiredTime != null && Object.hasOwnProperty.call(message, "waitReadyExpiredTime"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int64(message.waitReadyExpiredTime);
                return writer;
            };

            /**
             * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link common.v1.PlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {common.v1.IPlayerInfo} message PlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerInfo} PlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerInfo();
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
                            message.nickname = reader.string();
                            break;
                        }
                    case 3: {
                            message.avatar = reader.string();
                            break;
                        }
                    case 4: {
                            message.coin = reader.int64();
                            break;
                        }
                    case 5: {
                            message.seat = reader.int32();
                            break;
                        }
                    case 6: {
                            message.role = reader.int32();
                            break;
                        }
                    case 11: {
                            message.post = reader.int32();
                            break;
                        }
                    case 7: {
                            message.state = reader.int32();
                            break;
                        }
                    case 13: {
                            message.coinChanged = reader.int64();
                            break;
                        }
                    case 8: {
                            message.micAllowStatus = reader.int32();
                            break;
                        }
                    case 9: {
                            message.micOn = reader.bool();
                            break;
                        }
                    case 10: {
                            message.nextMicRequestTime = reader.int64();
                            break;
                        }
                    case 12: {
                            message.micRequestExpiredTime = reader.int64();
                            break;
                        }
                    case 14: {
                            message.waitReadyExpiredTime = reader.int64();
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
             * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerInfo} PlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerInfo message.
             * @function verify
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    if (!$util.isString(message.avatar))
                        return "avatar: string expected";
                if (message.coin != null && message.hasOwnProperty("coin"))
                    if (!$util.isInteger(message.coin) && !(message.coin && $util.isInteger(message.coin.low) && $util.isInteger(message.coin.high)))
                        return "coin: integer|Long expected";
                if (message.seat != null && message.hasOwnProperty("seat"))
                    if (!$util.isInteger(message.seat))
                        return "seat: integer expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isInteger(message.role))
                        return "role: integer expected";
                if (message.post != null && message.hasOwnProperty("post"))
                    if (!$util.isInteger(message.post))
                        return "post: integer expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    if (!$util.isInteger(message.state))
                        return "state: integer expected";
                if (message.coinChanged != null && message.hasOwnProperty("coinChanged"))
                    if (!$util.isInteger(message.coinChanged) && !(message.coinChanged && $util.isInteger(message.coinChanged.low) && $util.isInteger(message.coinChanged.high)))
                        return "coinChanged: integer|Long expected";
                if (message.micAllowStatus != null && message.hasOwnProperty("micAllowStatus"))
                    if (!$util.isInteger(message.micAllowStatus))
                        return "micAllowStatus: integer expected";
                if (message.micOn != null && message.hasOwnProperty("micOn"))
                    if (typeof message.micOn !== "boolean")
                        return "micOn: boolean expected";
                if (message.nextMicRequestTime != null && message.hasOwnProperty("nextMicRequestTime"))
                    if (!$util.isInteger(message.nextMicRequestTime) && !(message.nextMicRequestTime && $util.isInteger(message.nextMicRequestTime.low) && $util.isInteger(message.nextMicRequestTime.high)))
                        return "nextMicRequestTime: integer|Long expected";
                if (message.micRequestExpiredTime != null && message.hasOwnProperty("micRequestExpiredTime"))
                    if (!$util.isInteger(message.micRequestExpiredTime) && !(message.micRequestExpiredTime && $util.isInteger(message.micRequestExpiredTime.low) && $util.isInteger(message.micRequestExpiredTime.high)))
                        return "micRequestExpiredTime: integer|Long expected";
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (!$util.isInteger(message.waitReadyExpiredTime) && !(message.waitReadyExpiredTime && $util.isInteger(message.waitReadyExpiredTime.low) && $util.isInteger(message.waitReadyExpiredTime.high)))
                        return "waitReadyExpiredTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerInfo} PlayerInfo
             */
            PlayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerInfo)
                    return object;
                var message = new $root.common.v1.PlayerInfo();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.avatar != null)
                    message.avatar = String(object.avatar);
                if (object.coin != null)
                    if ($util.Long)
                        (message.coin = $util.Long.fromValue(object.coin)).unsigned = false;
                    else if (typeof object.coin === "string")
                        message.coin = parseInt(object.coin, 10);
                    else if (typeof object.coin === "number")
                        message.coin = object.coin;
                    else if (typeof object.coin === "object")
                        message.coin = new $util.LongBits(object.coin.low >>> 0, object.coin.high >>> 0).toNumber();
                if (object.seat != null)
                    message.seat = object.seat | 0;
                if (object.role != null)
                    message.role = object.role | 0;
                if (object.post != null)
                    message.post = object.post | 0;
                if (object.state != null)
                    message.state = object.state | 0;
                if (object.coinChanged != null)
                    if ($util.Long)
                        (message.coinChanged = $util.Long.fromValue(object.coinChanged)).unsigned = false;
                    else if (typeof object.coinChanged === "string")
                        message.coinChanged = parseInt(object.coinChanged, 10);
                    else if (typeof object.coinChanged === "number")
                        message.coinChanged = object.coinChanged;
                    else if (typeof object.coinChanged === "object")
                        message.coinChanged = new $util.LongBits(object.coinChanged.low >>> 0, object.coinChanged.high >>> 0).toNumber();
                if (object.micAllowStatus != null)
                    message.micAllowStatus = object.micAllowStatus | 0;
                if (object.micOn != null)
                    message.micOn = Boolean(object.micOn);
                if (object.nextMicRequestTime != null)
                    if ($util.Long)
                        (message.nextMicRequestTime = $util.Long.fromValue(object.nextMicRequestTime)).unsigned = false;
                    else if (typeof object.nextMicRequestTime === "string")
                        message.nextMicRequestTime = parseInt(object.nextMicRequestTime, 10);
                    else if (typeof object.nextMicRequestTime === "number")
                        message.nextMicRequestTime = object.nextMicRequestTime;
                    else if (typeof object.nextMicRequestTime === "object")
                        message.nextMicRequestTime = new $util.LongBits(object.nextMicRequestTime.low >>> 0, object.nextMicRequestTime.high >>> 0).toNumber();
                if (object.micRequestExpiredTime != null)
                    if ($util.Long)
                        (message.micRequestExpiredTime = $util.Long.fromValue(object.micRequestExpiredTime)).unsigned = false;
                    else if (typeof object.micRequestExpiredTime === "string")
                        message.micRequestExpiredTime = parseInt(object.micRequestExpiredTime, 10);
                    else if (typeof object.micRequestExpiredTime === "number")
                        message.micRequestExpiredTime = object.micRequestExpiredTime;
                    else if (typeof object.micRequestExpiredTime === "object")
                        message.micRequestExpiredTime = new $util.LongBits(object.micRequestExpiredTime.low >>> 0, object.micRequestExpiredTime.high >>> 0).toNumber();
                if (object.waitReadyExpiredTime != null)
                    if ($util.Long)
                        (message.waitReadyExpiredTime = $util.Long.fromValue(object.waitReadyExpiredTime)).unsigned = false;
                    else if (typeof object.waitReadyExpiredTime === "string")
                        message.waitReadyExpiredTime = parseInt(object.waitReadyExpiredTime, 10);
                    else if (typeof object.waitReadyExpiredTime === "number")
                        message.waitReadyExpiredTime = object.waitReadyExpiredTime;
                    else if (typeof object.waitReadyExpiredTime === "object")
                        message.waitReadyExpiredTime = new $util.LongBits(object.waitReadyExpiredTime.low >>> 0, object.waitReadyExpiredTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {common.v1.PlayerInfo} message PlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.nickname = "";
                    object.avatar = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.coin = options.longs === String ? "0" : 0;
                    object.seat = 0;
                    object.role = 0;
                    object.state = 0;
                    object.micAllowStatus = 0;
                    object.micOn = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.nextMicRequestTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.nextMicRequestTime = options.longs === String ? "0" : 0;
                    object.post = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.micRequestExpiredTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.micRequestExpiredTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.coinChanged = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.coinChanged = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.waitReadyExpiredTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.waitReadyExpiredTime = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    object.avatar = message.avatar;
                if (message.coin != null && message.hasOwnProperty("coin"))
                    if (typeof message.coin === "number")
                        object.coin = options.longs === String ? String(message.coin) : message.coin;
                    else
                        object.coin = options.longs === String ? $util.Long.prototype.toString.call(message.coin) : options.longs === Number ? new $util.LongBits(message.coin.low >>> 0, message.coin.high >>> 0).toNumber() : message.coin;
                if (message.seat != null && message.hasOwnProperty("seat"))
                    object.seat = message.seat;
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = message.state;
                if (message.micAllowStatus != null && message.hasOwnProperty("micAllowStatus"))
                    object.micAllowStatus = message.micAllowStatus;
                if (message.micOn != null && message.hasOwnProperty("micOn"))
                    object.micOn = message.micOn;
                if (message.nextMicRequestTime != null && message.hasOwnProperty("nextMicRequestTime"))
                    if (typeof message.nextMicRequestTime === "number")
                        object.nextMicRequestTime = options.longs === String ? String(message.nextMicRequestTime) : message.nextMicRequestTime;
                    else
                        object.nextMicRequestTime = options.longs === String ? $util.Long.prototype.toString.call(message.nextMicRequestTime) : options.longs === Number ? new $util.LongBits(message.nextMicRequestTime.low >>> 0, message.nextMicRequestTime.high >>> 0).toNumber() : message.nextMicRequestTime;
                if (message.post != null && message.hasOwnProperty("post"))
                    object.post = message.post;
                if (message.micRequestExpiredTime != null && message.hasOwnProperty("micRequestExpiredTime"))
                    if (typeof message.micRequestExpiredTime === "number")
                        object.micRequestExpiredTime = options.longs === String ? String(message.micRequestExpiredTime) : message.micRequestExpiredTime;
                    else
                        object.micRequestExpiredTime = options.longs === String ? $util.Long.prototype.toString.call(message.micRequestExpiredTime) : options.longs === Number ? new $util.LongBits(message.micRequestExpiredTime.low >>> 0, message.micRequestExpiredTime.high >>> 0).toNumber() : message.micRequestExpiredTime;
                if (message.coinChanged != null && message.hasOwnProperty("coinChanged"))
                    if (typeof message.coinChanged === "number")
                        object.coinChanged = options.longs === String ? String(message.coinChanged) : message.coinChanged;
                    else
                        object.coinChanged = options.longs === String ? $util.Long.prototype.toString.call(message.coinChanged) : options.longs === Number ? new $util.LongBits(message.coinChanged.low >>> 0, message.coinChanged.high >>> 0).toNumber() : message.coinChanged;
                if (message.waitReadyExpiredTime != null && message.hasOwnProperty("waitReadyExpiredTime"))
                    if (typeof message.waitReadyExpiredTime === "number")
                        object.waitReadyExpiredTime = options.longs === String ? String(message.waitReadyExpiredTime) : message.waitReadyExpiredTime;
                    else
                        object.waitReadyExpiredTime = options.longs === String ? $util.Long.prototype.toString.call(message.waitReadyExpiredTime) : options.longs === Number ? new $util.LongBits(message.waitReadyExpiredTime.low >>> 0, message.waitReadyExpiredTime.high >>> 0).toNumber() : message.waitReadyExpiredTime;
                return object;
            };

            /**
             * Converts this PlayerInfo to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerInfo
             * @function getTypeUrl
             * @memberof common.v1.PlayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerInfo";
            };

            return PlayerInfo;
        })();

        v1.PlayerSettings = (function() {

            /**
             * Properties of a PlayerSettings.
             * @memberof common.v1
             * @interface IPlayerSettings
             * @property {Object.<string,number|Long>|null} [numericSettings] PlayerSettings numericSettings
             */

            /**
             * Constructs a new PlayerSettings.
             * @memberof common.v1
             * @classdesc Represents a PlayerSettings.
             * @implements IPlayerSettings
             * @constructor
             * @param {common.v1.IPlayerSettings=} [properties] Properties to set
             */
            function PlayerSettings(properties) {
                this.numericSettings = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerSettings numericSettings.
             * @member {Object.<string,number|Long>} numericSettings
             * @memberof common.v1.PlayerSettings
             * @instance
             */
            PlayerSettings.prototype.numericSettings = $util.emptyObject;

            /**
             * Creates a new PlayerSettings instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {common.v1.IPlayerSettings=} [properties] Properties to set
             * @returns {common.v1.PlayerSettings} PlayerSettings instance
             */
            PlayerSettings.create = function create(properties) {
                return new PlayerSettings(properties);
            };

            /**
             * Encodes the specified PlayerSettings message. Does not implicitly {@link common.v1.PlayerSettings.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {common.v1.IPlayerSettings} message PlayerSettings message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSettings.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.numericSettings != null && Object.hasOwnProperty.call(message, "numericSettings"))
                    for (var keys = Object.keys(message.numericSettings), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.numericSettings[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PlayerSettings message, length delimited. Does not implicitly {@link common.v1.PlayerSettings.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {common.v1.IPlayerSettings} message PlayerSettings message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerSettings.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerSettings message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerSettings} PlayerSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSettings.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerSettings(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.numericSettings === $util.emptyObject)
                                message.numericSettings = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = 0;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.numericSettings[key] = value;
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
             * Decodes a PlayerSettings message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerSettings} PlayerSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerSettings.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerSettings message.
             * @function verify
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerSettings.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.numericSettings != null && message.hasOwnProperty("numericSettings")) {
                    if (!$util.isObject(message.numericSettings))
                        return "numericSettings: object expected";
                    var key = Object.keys(message.numericSettings);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.numericSettings[key[i]]) && !(message.numericSettings[key[i]] && $util.isInteger(message.numericSettings[key[i]].low) && $util.isInteger(message.numericSettings[key[i]].high)))
                            return "numericSettings: integer|Long{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a PlayerSettings message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerSettings} PlayerSettings
             */
            PlayerSettings.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerSettings)
                    return object;
                var message = new $root.common.v1.PlayerSettings();
                if (object.numericSettings) {
                    if (typeof object.numericSettings !== "object")
                        throw TypeError(".common.v1.PlayerSettings.numericSettings: object expected");
                    message.numericSettings = {};
                    for (var keys = Object.keys(object.numericSettings), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.numericSettings[keys[i]] = $util.Long.fromValue(object.numericSettings[keys[i]])).unsigned = false;
                        else if (typeof object.numericSettings[keys[i]] === "string")
                            message.numericSettings[keys[i]] = parseInt(object.numericSettings[keys[i]], 10);
                        else if (typeof object.numericSettings[keys[i]] === "number")
                            message.numericSettings[keys[i]] = object.numericSettings[keys[i]];
                        else if (typeof object.numericSettings[keys[i]] === "object")
                            message.numericSettings[keys[i]] = new $util.LongBits(object.numericSettings[keys[i]].low >>> 0, object.numericSettings[keys[i]].high >>> 0).toNumber();
                }
                return message;
            };

            /**
             * Creates a plain object from a PlayerSettings message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {common.v1.PlayerSettings} message PlayerSettings
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerSettings.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.numericSettings = {};
                var keys2;
                if (message.numericSettings && (keys2 = Object.keys(message.numericSettings)).length) {
                    object.numericSettings = {};
                    for (var j = 0; j < keys2.length; ++j)
                        if (typeof message.numericSettings[keys2[j]] === "number")
                            object.numericSettings[keys2[j]] = options.longs === String ? String(message.numericSettings[keys2[j]]) : message.numericSettings[keys2[j]];
                        else
                            object.numericSettings[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.numericSettings[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.numericSettings[keys2[j]].low >>> 0, message.numericSettings[keys2[j]].high >>> 0).toNumber() : message.numericSettings[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this PlayerSettings to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerSettings
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerSettings.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerSettings
             * @function getTypeUrl
             * @memberof common.v1.PlayerSettings
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerSettings";
            };

            return PlayerSettings;
        })();

        v1.BarrageInfo = (function() {

            /**
             * Properties of a BarrageInfo.
             * @memberof common.v1
             * @interface IBarrageInfo
             * @property {common.v1.IPlayerInfo|null} [player] BarrageInfo player
             * @property {string|null} [content] BarrageInfo content
             */

            /**
             * Constructs a new BarrageInfo.
             * @memberof common.v1
             * @classdesc Represents a BarrageInfo.
             * @implements IBarrageInfo
             * @constructor
             * @param {common.v1.IBarrageInfo=} [properties] Properties to set
             */
            function BarrageInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BarrageInfo player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.BarrageInfo
             * @instance
             */
            BarrageInfo.prototype.player = null;

            /**
             * BarrageInfo content.
             * @member {string} content
             * @memberof common.v1.BarrageInfo
             * @instance
             */
            BarrageInfo.prototype.content = "";

            /**
             * Creates a new BarrageInfo instance using the specified properties.
             * @function create
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {common.v1.IBarrageInfo=} [properties] Properties to set
             * @returns {common.v1.BarrageInfo} BarrageInfo instance
             */
            BarrageInfo.create = function create(properties) {
                return new BarrageInfo(properties);
            };

            /**
             * Encodes the specified BarrageInfo message. Does not implicitly {@link common.v1.BarrageInfo.verify|verify} messages.
             * @function encode
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {common.v1.IBarrageInfo} message BarrageInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BarrageInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified BarrageInfo message, length delimited. Does not implicitly {@link common.v1.BarrageInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {common.v1.IBarrageInfo} message BarrageInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BarrageInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BarrageInfo message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.BarrageInfo} BarrageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BarrageInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.BarrageInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
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
             * Decodes a BarrageInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.BarrageInfo} BarrageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BarrageInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BarrageInfo message.
             * @function verify
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BarrageInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a BarrageInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.BarrageInfo} BarrageInfo
             */
            BarrageInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.BarrageInfo)
                    return object;
                var message = new $root.common.v1.BarrageInfo();
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.BarrageInfo.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a BarrageInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {common.v1.BarrageInfo} message BarrageInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BarrageInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.player = null;
                    object.content = "";
                }
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this BarrageInfo to JSON.
             * @function toJSON
             * @memberof common.v1.BarrageInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BarrageInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BarrageInfo
             * @function getTypeUrl
             * @memberof common.v1.BarrageInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BarrageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.BarrageInfo";
            };

            return BarrageInfo;
        })();

        v1.SendBarrageReq = (function() {

            /**
             * Properties of a SendBarrageReq.
             * @memberof common.v1
             * @interface ISendBarrageReq
             * @property {string|null} [content] SendBarrageReq content
             */

            /**
             * Constructs a new SendBarrageReq.
             * @memberof common.v1
             * @classdesc Represents a SendBarrageReq.
             * @implements ISendBarrageReq
             * @constructor
             * @param {common.v1.ISendBarrageReq=} [properties] Properties to set
             */
            function SendBarrageReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SendBarrageReq content.
             * @member {string} content
             * @memberof common.v1.SendBarrageReq
             * @instance
             */
            SendBarrageReq.prototype.content = "";

            /**
             * Creates a new SendBarrageReq instance using the specified properties.
             * @function create
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {common.v1.ISendBarrageReq=} [properties] Properties to set
             * @returns {common.v1.SendBarrageReq} SendBarrageReq instance
             */
            SendBarrageReq.create = function create(properties) {
                return new SendBarrageReq(properties);
            };

            /**
             * Encodes the specified SendBarrageReq message. Does not implicitly {@link common.v1.SendBarrageReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {common.v1.ISendBarrageReq} message SendBarrageReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendBarrageReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified SendBarrageReq message, length delimited. Does not implicitly {@link common.v1.SendBarrageReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {common.v1.ISendBarrageReq} message SendBarrageReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendBarrageReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SendBarrageReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.SendBarrageReq} SendBarrageReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendBarrageReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.SendBarrageReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = reader.string();
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
             * Decodes a SendBarrageReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.SendBarrageReq} SendBarrageReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendBarrageReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SendBarrageReq message.
             * @function verify
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendBarrageReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a SendBarrageReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.SendBarrageReq} SendBarrageReq
             */
            SendBarrageReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.SendBarrageReq)
                    return object;
                var message = new $root.common.v1.SendBarrageReq();
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a SendBarrageReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {common.v1.SendBarrageReq} message SendBarrageReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendBarrageReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.content = "";
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this SendBarrageReq to JSON.
             * @function toJSON
             * @memberof common.v1.SendBarrageReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendBarrageReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SendBarrageReq
             * @function getTypeUrl
             * @memberof common.v1.SendBarrageReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SendBarrageReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.SendBarrageReq";
            };

            return SendBarrageReq;
        })();

        v1.SendBarrageRes = (function() {

            /**
             * Properties of a SendBarrageRes.
             * @memberof common.v1
             * @interface ISendBarrageRes
             * @property {string|null} [content] SendBarrageRes content
             */

            /**
             * Constructs a new SendBarrageRes.
             * @memberof common.v1
             * @classdesc Represents a SendBarrageRes.
             * @implements ISendBarrageRes
             * @constructor
             * @param {common.v1.ISendBarrageRes=} [properties] Properties to set
             */
            function SendBarrageRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SendBarrageRes content.
             * @member {string} content
             * @memberof common.v1.SendBarrageRes
             * @instance
             */
            SendBarrageRes.prototype.content = "";

            /**
             * Creates a new SendBarrageRes instance using the specified properties.
             * @function create
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {common.v1.ISendBarrageRes=} [properties] Properties to set
             * @returns {common.v1.SendBarrageRes} SendBarrageRes instance
             */
            SendBarrageRes.create = function create(properties) {
                return new SendBarrageRes(properties);
            };

            /**
             * Encodes the specified SendBarrageRes message. Does not implicitly {@link common.v1.SendBarrageRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {common.v1.ISendBarrageRes} message SendBarrageRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendBarrageRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified SendBarrageRes message, length delimited. Does not implicitly {@link common.v1.SendBarrageRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {common.v1.ISendBarrageRes} message SendBarrageRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendBarrageRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SendBarrageRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.SendBarrageRes} SendBarrageRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendBarrageRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.SendBarrageRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = reader.string();
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
             * Decodes a SendBarrageRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.SendBarrageRes} SendBarrageRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendBarrageRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SendBarrageRes message.
             * @function verify
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendBarrageRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a SendBarrageRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.SendBarrageRes} SendBarrageRes
             */
            SendBarrageRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.SendBarrageRes)
                    return object;
                var message = new $root.common.v1.SendBarrageRes();
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a SendBarrageRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {common.v1.SendBarrageRes} message SendBarrageRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendBarrageRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.content = "";
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this SendBarrageRes to JSON.
             * @function toJSON
             * @memberof common.v1.SendBarrageRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendBarrageRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SendBarrageRes
             * @function getTypeUrl
             * @memberof common.v1.SendBarrageRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SendBarrageRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.SendBarrageRes";
            };

            return SendBarrageRes;
        })();

        v1.SendBarrageBroadcast = (function() {

            /**
             * Properties of a SendBarrageBroadcast.
             * @memberof common.v1
             * @interface ISendBarrageBroadcast
             * @property {Array.<number|Long>|null} [gatewayPlayerIds] SendBarrageBroadcast gatewayPlayerIds
             * @property {common.v1.IBarrageInfo|null} [barrage] SendBarrageBroadcast barrage
             */

            /**
             * Constructs a new SendBarrageBroadcast.
             * @memberof common.v1
             * @classdesc Represents a SendBarrageBroadcast.
             * @implements ISendBarrageBroadcast
             * @constructor
             * @param {common.v1.ISendBarrageBroadcast=} [properties] Properties to set
             */
            function SendBarrageBroadcast(properties) {
                this.gatewayPlayerIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SendBarrageBroadcast gatewayPlayerIds.
             * @member {Array.<number|Long>} gatewayPlayerIds
             * @memberof common.v1.SendBarrageBroadcast
             * @instance
             */
            SendBarrageBroadcast.prototype.gatewayPlayerIds = $util.emptyArray;

            /**
             * SendBarrageBroadcast barrage.
             * @member {common.v1.IBarrageInfo|null|undefined} barrage
             * @memberof common.v1.SendBarrageBroadcast
             * @instance
             */
            SendBarrageBroadcast.prototype.barrage = null;

            /**
             * Creates a new SendBarrageBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {common.v1.ISendBarrageBroadcast=} [properties] Properties to set
             * @returns {common.v1.SendBarrageBroadcast} SendBarrageBroadcast instance
             */
            SendBarrageBroadcast.create = function create(properties) {
                return new SendBarrageBroadcast(properties);
            };

            /**
             * Encodes the specified SendBarrageBroadcast message. Does not implicitly {@link common.v1.SendBarrageBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {common.v1.ISendBarrageBroadcast} message SendBarrageBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendBarrageBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.barrage != null && Object.hasOwnProperty.call(message, "barrage"))
                    $root.common.v1.BarrageInfo.encode(message.barrage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.gatewayPlayerIds != null && message.gatewayPlayerIds.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.gatewayPlayerIds.length; ++i)
                        writer.int64(message.gatewayPlayerIds[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified SendBarrageBroadcast message, length delimited. Does not implicitly {@link common.v1.SendBarrageBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {common.v1.ISendBarrageBroadcast} message SendBarrageBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendBarrageBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SendBarrageBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.SendBarrageBroadcast} SendBarrageBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendBarrageBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.SendBarrageBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            if (!(message.gatewayPlayerIds && message.gatewayPlayerIds.length))
                                message.gatewayPlayerIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.gatewayPlayerIds.push(reader.int64());
                            } else
                                message.gatewayPlayerIds.push(reader.int64());
                            break;
                        }
                    case 2: {
                            message.barrage = $root.common.v1.BarrageInfo.decode(reader, reader.uint32());
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
             * Decodes a SendBarrageBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.SendBarrageBroadcast} SendBarrageBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendBarrageBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SendBarrageBroadcast message.
             * @function verify
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendBarrageBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gatewayPlayerIds != null && message.hasOwnProperty("gatewayPlayerIds")) {
                    if (!Array.isArray(message.gatewayPlayerIds))
                        return "gatewayPlayerIds: array expected";
                    for (var i = 0; i < message.gatewayPlayerIds.length; ++i)
                        if (!$util.isInteger(message.gatewayPlayerIds[i]) && !(message.gatewayPlayerIds[i] && $util.isInteger(message.gatewayPlayerIds[i].low) && $util.isInteger(message.gatewayPlayerIds[i].high)))
                            return "gatewayPlayerIds: integer|Long[] expected";
                }
                if (message.barrage != null && message.hasOwnProperty("barrage")) {
                    var error = $root.common.v1.BarrageInfo.verify(message.barrage);
                    if (error)
                        return "barrage." + error;
                }
                return null;
            };

            /**
             * Creates a SendBarrageBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.SendBarrageBroadcast} SendBarrageBroadcast
             */
            SendBarrageBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.SendBarrageBroadcast)
                    return object;
                var message = new $root.common.v1.SendBarrageBroadcast();
                if (object.gatewayPlayerIds) {
                    if (!Array.isArray(object.gatewayPlayerIds))
                        throw TypeError(".common.v1.SendBarrageBroadcast.gatewayPlayerIds: array expected");
                    message.gatewayPlayerIds = [];
                    for (var i = 0; i < object.gatewayPlayerIds.length; ++i)
                        if ($util.Long)
                            (message.gatewayPlayerIds[i] = $util.Long.fromValue(object.gatewayPlayerIds[i])).unsigned = false;
                        else if (typeof object.gatewayPlayerIds[i] === "string")
                            message.gatewayPlayerIds[i] = parseInt(object.gatewayPlayerIds[i], 10);
                        else if (typeof object.gatewayPlayerIds[i] === "number")
                            message.gatewayPlayerIds[i] = object.gatewayPlayerIds[i];
                        else if (typeof object.gatewayPlayerIds[i] === "object")
                            message.gatewayPlayerIds[i] = new $util.LongBits(object.gatewayPlayerIds[i].low >>> 0, object.gatewayPlayerIds[i].high >>> 0).toNumber();
                }
                if (object.barrage != null) {
                    if (typeof object.barrage !== "object")
                        throw TypeError(".common.v1.SendBarrageBroadcast.barrage: object expected");
                    message.barrage = $root.common.v1.BarrageInfo.fromObject(object.barrage);
                }
                return message;
            };

            /**
             * Creates a plain object from a SendBarrageBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {common.v1.SendBarrageBroadcast} message SendBarrageBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendBarrageBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.gatewayPlayerIds = [];
                if (options.defaults)
                    object.barrage = null;
                if (message.barrage != null && message.hasOwnProperty("barrage"))
                    object.barrage = $root.common.v1.BarrageInfo.toObject(message.barrage, options);
                if (message.gatewayPlayerIds && message.gatewayPlayerIds.length) {
                    object.gatewayPlayerIds = [];
                    for (var j = 0; j < message.gatewayPlayerIds.length; ++j)
                        if (typeof message.gatewayPlayerIds[j] === "number")
                            object.gatewayPlayerIds[j] = options.longs === String ? String(message.gatewayPlayerIds[j]) : message.gatewayPlayerIds[j];
                        else
                            object.gatewayPlayerIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.gatewayPlayerIds[j]) : options.longs === Number ? new $util.LongBits(message.gatewayPlayerIds[j].low >>> 0, message.gatewayPlayerIds[j].high >>> 0).toNumber() : message.gatewayPlayerIds[j];
                }
                return object;
            };

            /**
             * Converts this SendBarrageBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.SendBarrageBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendBarrageBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SendBarrageBroadcast
             * @function getTypeUrl
             * @memberof common.v1.SendBarrageBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SendBarrageBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.SendBarrageBroadcast";
            };

            return SendBarrageBroadcast;
        })();

        v1.ApplyAllowMicReq = (function() {

            /**
             * Properties of an ApplyAllowMicReq.
             * @memberof common.v1
             * @interface IApplyAllowMicReq
             */

            /**
             * Constructs a new ApplyAllowMicReq.
             * @memberof common.v1
             * @classdesc Represents an ApplyAllowMicReq.
             * @implements IApplyAllowMicReq
             * @constructor
             * @param {common.v1.IApplyAllowMicReq=} [properties] Properties to set
             */
            function ApplyAllowMicReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ApplyAllowMicReq instance using the specified properties.
             * @function create
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {common.v1.IApplyAllowMicReq=} [properties] Properties to set
             * @returns {common.v1.ApplyAllowMicReq} ApplyAllowMicReq instance
             */
            ApplyAllowMicReq.create = function create(properties) {
                return new ApplyAllowMicReq(properties);
            };

            /**
             * Encodes the specified ApplyAllowMicReq message. Does not implicitly {@link common.v1.ApplyAllowMicReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {common.v1.IApplyAllowMicReq} message ApplyAllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ApplyAllowMicReq message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {common.v1.IApplyAllowMicReq} message ApplyAllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApplyAllowMicReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApplyAllowMicReq} ApplyAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApplyAllowMicReq();
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
             * Decodes an ApplyAllowMicReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApplyAllowMicReq} ApplyAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApplyAllowMicReq message.
             * @function verify
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplyAllowMicReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an ApplyAllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApplyAllowMicReq} ApplyAllowMicReq
             */
            ApplyAllowMicReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApplyAllowMicReq)
                    return object;
                return new $root.common.v1.ApplyAllowMicReq();
            };

            /**
             * Creates a plain object from an ApplyAllowMicReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {common.v1.ApplyAllowMicReq} message ApplyAllowMicReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplyAllowMicReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ApplyAllowMicReq to JSON.
             * @function toJSON
             * @memberof common.v1.ApplyAllowMicReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplyAllowMicReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApplyAllowMicReq
             * @function getTypeUrl
             * @memberof common.v1.ApplyAllowMicReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApplyAllowMicReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApplyAllowMicReq";
            };

            return ApplyAllowMicReq;
        })();

        v1.ApplyAllowMicRes = (function() {

            /**
             * Properties of an ApplyAllowMicRes.
             * @memberof common.v1
             * @interface IApplyAllowMicRes
             * @property {boolean|null} [allowed] ApplyAllowMicRes allowed
             */

            /**
             * Constructs a new ApplyAllowMicRes.
             * @memberof common.v1
             * @classdesc Represents an ApplyAllowMicRes.
             * @implements IApplyAllowMicRes
             * @constructor
             * @param {common.v1.IApplyAllowMicRes=} [properties] Properties to set
             */
            function ApplyAllowMicRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApplyAllowMicRes allowed.
             * @member {boolean} allowed
             * @memberof common.v1.ApplyAllowMicRes
             * @instance
             */
            ApplyAllowMicRes.prototype.allowed = false;

            /**
             * Creates a new ApplyAllowMicRes instance using the specified properties.
             * @function create
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {common.v1.IApplyAllowMicRes=} [properties] Properties to set
             * @returns {common.v1.ApplyAllowMicRes} ApplyAllowMicRes instance
             */
            ApplyAllowMicRes.create = function create(properties) {
                return new ApplyAllowMicRes(properties);
            };

            /**
             * Encodes the specified ApplyAllowMicRes message. Does not implicitly {@link common.v1.ApplyAllowMicRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {common.v1.IApplyAllowMicRes} message ApplyAllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowed != null && Object.hasOwnProperty.call(message, "allowed"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.allowed);
                return writer;
            };

            /**
             * Encodes the specified ApplyAllowMicRes message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {common.v1.IApplyAllowMicRes} message ApplyAllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApplyAllowMicRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApplyAllowMicRes} ApplyAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApplyAllowMicRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.allowed = reader.bool();
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
             * Decodes an ApplyAllowMicRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApplyAllowMicRes} ApplyAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApplyAllowMicRes message.
             * @function verify
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplyAllowMicRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    if (typeof message.allowed !== "boolean")
                        return "allowed: boolean expected";
                return null;
            };

            /**
             * Creates an ApplyAllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApplyAllowMicRes} ApplyAllowMicRes
             */
            ApplyAllowMicRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApplyAllowMicRes)
                    return object;
                var message = new $root.common.v1.ApplyAllowMicRes();
                if (object.allowed != null)
                    message.allowed = Boolean(object.allowed);
                return message;
            };

            /**
             * Creates a plain object from an ApplyAllowMicRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {common.v1.ApplyAllowMicRes} message ApplyAllowMicRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplyAllowMicRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.allowed = false;
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    object.allowed = message.allowed;
                return object;
            };

            /**
             * Converts this ApplyAllowMicRes to JSON.
             * @function toJSON
             * @memberof common.v1.ApplyAllowMicRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplyAllowMicRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApplyAllowMicRes
             * @function getTypeUrl
             * @memberof common.v1.ApplyAllowMicRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApplyAllowMicRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApplyAllowMicRes";
            };

            return ApplyAllowMicRes;
        })();

        v1.ApplyAllowMicBroadcast = (function() {

            /**
             * Properties of an ApplyAllowMicBroadcast.
             * @memberof common.v1
             * @interface IApplyAllowMicBroadcast
             * @property {number|Long|null} [bcUid] ApplyAllowMicBroadcast bcUid
             * @property {number|Long|null} [playerId] ApplyAllowMicBroadcast playerId
             * @property {number|null} [applyMicCount] ApplyAllowMicBroadcast applyMicCount
             */

            /**
             * Constructs a new ApplyAllowMicBroadcast.
             * @memberof common.v1
             * @classdesc Represents an ApplyAllowMicBroadcast.
             * @implements IApplyAllowMicBroadcast
             * @constructor
             * @param {common.v1.IApplyAllowMicBroadcast=} [properties] Properties to set
             */
            function ApplyAllowMicBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApplyAllowMicBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @instance
             */
            ApplyAllowMicBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ApplyAllowMicBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @instance
             */
            ApplyAllowMicBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ApplyAllowMicBroadcast applyMicCount.
             * @member {number} applyMicCount
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @instance
             */
            ApplyAllowMicBroadcast.prototype.applyMicCount = 0;

            /**
             * Creates a new ApplyAllowMicBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {common.v1.IApplyAllowMicBroadcast=} [properties] Properties to set
             * @returns {common.v1.ApplyAllowMicBroadcast} ApplyAllowMicBroadcast instance
             */
            ApplyAllowMicBroadcast.create = function create(properties) {
                return new ApplyAllowMicBroadcast(properties);
            };

            /**
             * Encodes the specified ApplyAllowMicBroadcast message. Does not implicitly {@link common.v1.ApplyAllowMicBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {common.v1.IApplyAllowMicBroadcast} message ApplyAllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.bcUid);
                if (message.applyMicCount != null && Object.hasOwnProperty.call(message, "applyMicCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.applyMicCount);
                return writer;
            };

            /**
             * Encodes the specified ApplyAllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {common.v1.IApplyAllowMicBroadcast} message ApplyAllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApplyAllowMicBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApplyAllowMicBroadcast} ApplyAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApplyAllowMicBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.applyMicCount = reader.int32();
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
             * Decodes an ApplyAllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApplyAllowMicBroadcast} ApplyAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApplyAllowMicBroadcast message.
             * @function verify
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplyAllowMicBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    if (!$util.isInteger(message.applyMicCount))
                        return "applyMicCount: integer expected";
                return null;
            };

            /**
             * Creates an ApplyAllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApplyAllowMicBroadcast} ApplyAllowMicBroadcast
             */
            ApplyAllowMicBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApplyAllowMicBroadcast)
                    return object;
                var message = new $root.common.v1.ApplyAllowMicBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.applyMicCount != null)
                    message.applyMicCount = object.applyMicCount | 0;
                return message;
            };

            /**
             * Creates a plain object from an ApplyAllowMicBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {common.v1.ApplyAllowMicBroadcast} message ApplyAllowMicBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplyAllowMicBroadcast.toObject = function toObject(message, options) {
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
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    object.applyMicCount = 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    object.applyMicCount = message.applyMicCount;
                return object;
            };

            /**
             * Converts this ApplyAllowMicBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplyAllowMicBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApplyAllowMicBroadcast
             * @function getTypeUrl
             * @memberof common.v1.ApplyAllowMicBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApplyAllowMicBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApplyAllowMicBroadcast";
            };

            return ApplyAllowMicBroadcast;
        })();

        v1.ApproveAllowMicReq = (function() {

            /**
             * Properties of an ApproveAllowMicReq.
             * @memberof common.v1
             * @interface IApproveAllowMicReq
             * @property {number|Long|null} [playerId] ApproveAllowMicReq playerId
             * @property {boolean|null} [allowed] ApproveAllowMicReq allowed
             */

            /**
             * Constructs a new ApproveAllowMicReq.
             * @memberof common.v1
             * @classdesc Represents an ApproveAllowMicReq.
             * @implements IApproveAllowMicReq
             * @constructor
             * @param {common.v1.IApproveAllowMicReq=} [properties] Properties to set
             */
            function ApproveAllowMicReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApproveAllowMicReq playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.ApproveAllowMicReq
             * @instance
             */
            ApproveAllowMicReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ApproveAllowMicReq allowed.
             * @member {boolean} allowed
             * @memberof common.v1.ApproveAllowMicReq
             * @instance
             */
            ApproveAllowMicReq.prototype.allowed = false;

            /**
             * Creates a new ApproveAllowMicReq instance using the specified properties.
             * @function create
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {common.v1.IApproveAllowMicReq=} [properties] Properties to set
             * @returns {common.v1.ApproveAllowMicReq} ApproveAllowMicReq instance
             */
            ApproveAllowMicReq.create = function create(properties) {
                return new ApproveAllowMicReq(properties);
            };

            /**
             * Encodes the specified ApproveAllowMicReq message. Does not implicitly {@link common.v1.ApproveAllowMicReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {common.v1.IApproveAllowMicReq} message ApproveAllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveAllowMicReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.allowed != null && Object.hasOwnProperty.call(message, "allowed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowed);
                return writer;
            };

            /**
             * Encodes the specified ApproveAllowMicReq message, length delimited. Does not implicitly {@link common.v1.ApproveAllowMicReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {common.v1.IApproveAllowMicReq} message ApproveAllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveAllowMicReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApproveAllowMicReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApproveAllowMicReq} ApproveAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveAllowMicReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApproveAllowMicReq();
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
                            message.allowed = reader.bool();
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
             * Decodes an ApproveAllowMicReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApproveAllowMicReq} ApproveAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveAllowMicReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApproveAllowMicReq message.
             * @function verify
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApproveAllowMicReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    if (typeof message.allowed !== "boolean")
                        return "allowed: boolean expected";
                return null;
            };

            /**
             * Creates an ApproveAllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApproveAllowMicReq} ApproveAllowMicReq
             */
            ApproveAllowMicReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApproveAllowMicReq)
                    return object;
                var message = new $root.common.v1.ApproveAllowMicReq();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.allowed != null)
                    message.allowed = Boolean(object.allowed);
                return message;
            };

            /**
             * Creates a plain object from an ApproveAllowMicReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {common.v1.ApproveAllowMicReq} message ApproveAllowMicReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApproveAllowMicReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.allowed = false;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    object.allowed = message.allowed;
                return object;
            };

            /**
             * Converts this ApproveAllowMicReq to JSON.
             * @function toJSON
             * @memberof common.v1.ApproveAllowMicReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApproveAllowMicReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApproveAllowMicReq
             * @function getTypeUrl
             * @memberof common.v1.ApproveAllowMicReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApproveAllowMicReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApproveAllowMicReq";
            };

            return ApproveAllowMicReq;
        })();

        v1.ApproveAllowMicRes = (function() {

            /**
             * Properties of an ApproveAllowMicRes.
             * @memberof common.v1
             * @interface IApproveAllowMicRes
             * @property {number|Long|null} [playerId] ApproveAllowMicRes playerId
             * @property {boolean|null} [allowed] ApproveAllowMicRes allowed
             * @property {number|null} [applyMicCount] ApproveAllowMicRes applyMicCount
             */

            /**
             * Constructs a new ApproveAllowMicRes.
             * @memberof common.v1
             * @classdesc Represents an ApproveAllowMicRes.
             * @implements IApproveAllowMicRes
             * @constructor
             * @param {common.v1.IApproveAllowMicRes=} [properties] Properties to set
             */
            function ApproveAllowMicRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApproveAllowMicRes playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.ApproveAllowMicRes
             * @instance
             */
            ApproveAllowMicRes.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ApproveAllowMicRes allowed.
             * @member {boolean} allowed
             * @memberof common.v1.ApproveAllowMicRes
             * @instance
             */
            ApproveAllowMicRes.prototype.allowed = false;

            /**
             * ApproveAllowMicRes applyMicCount.
             * @member {number} applyMicCount
             * @memberof common.v1.ApproveAllowMicRes
             * @instance
             */
            ApproveAllowMicRes.prototype.applyMicCount = 0;

            /**
             * Creates a new ApproveAllowMicRes instance using the specified properties.
             * @function create
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {common.v1.IApproveAllowMicRes=} [properties] Properties to set
             * @returns {common.v1.ApproveAllowMicRes} ApproveAllowMicRes instance
             */
            ApproveAllowMicRes.create = function create(properties) {
                return new ApproveAllowMicRes(properties);
            };

            /**
             * Encodes the specified ApproveAllowMicRes message. Does not implicitly {@link common.v1.ApproveAllowMicRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {common.v1.IApproveAllowMicRes} message ApproveAllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveAllowMicRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.allowed != null && Object.hasOwnProperty.call(message, "allowed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowed);
                if (message.applyMicCount != null && Object.hasOwnProperty.call(message, "applyMicCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.applyMicCount);
                return writer;
            };

            /**
             * Encodes the specified ApproveAllowMicRes message, length delimited. Does not implicitly {@link common.v1.ApproveAllowMicRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {common.v1.IApproveAllowMicRes} message ApproveAllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveAllowMicRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApproveAllowMicRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApproveAllowMicRes} ApproveAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveAllowMicRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApproveAllowMicRes();
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
                            message.allowed = reader.bool();
                            break;
                        }
                    case 3: {
                            message.applyMicCount = reader.int32();
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
             * Decodes an ApproveAllowMicRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApproveAllowMicRes} ApproveAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveAllowMicRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApproveAllowMicRes message.
             * @function verify
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApproveAllowMicRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    if (typeof message.allowed !== "boolean")
                        return "allowed: boolean expected";
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    if (!$util.isInteger(message.applyMicCount))
                        return "applyMicCount: integer expected";
                return null;
            };

            /**
             * Creates an ApproveAllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApproveAllowMicRes} ApproveAllowMicRes
             */
            ApproveAllowMicRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApproveAllowMicRes)
                    return object;
                var message = new $root.common.v1.ApproveAllowMicRes();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.allowed != null)
                    message.allowed = Boolean(object.allowed);
                if (object.applyMicCount != null)
                    message.applyMicCount = object.applyMicCount | 0;
                return message;
            };

            /**
             * Creates a plain object from an ApproveAllowMicRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {common.v1.ApproveAllowMicRes} message ApproveAllowMicRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApproveAllowMicRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.allowed = false;
                    object.applyMicCount = 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    object.allowed = message.allowed;
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    object.applyMicCount = message.applyMicCount;
                return object;
            };

            /**
             * Converts this ApproveAllowMicRes to JSON.
             * @function toJSON
             * @memberof common.v1.ApproveAllowMicRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApproveAllowMicRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApproveAllowMicRes
             * @function getTypeUrl
             * @memberof common.v1.ApproveAllowMicRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApproveAllowMicRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApproveAllowMicRes";
            };

            return ApproveAllowMicRes;
        })();

        v1.ApproveAllowMicBroadcast = (function() {

            /**
             * Properties of an ApproveAllowMicBroadcast.
             * @memberof common.v1
             * @interface IApproveAllowMicBroadcast
             * @property {number|Long|null} [bcUid] ApproveAllowMicBroadcast bcUid
             * @property {number|Long|null} [playerId] ApproveAllowMicBroadcast playerId
             * @property {boolean|null} [allowed] ApproveAllowMicBroadcast allowed
             * @property {number|null} [applyMicCount] ApproveAllowMicBroadcast applyMicCount
             */

            /**
             * Constructs a new ApproveAllowMicBroadcast.
             * @memberof common.v1
             * @classdesc Represents an ApproveAllowMicBroadcast.
             * @implements IApproveAllowMicBroadcast
             * @constructor
             * @param {common.v1.IApproveAllowMicBroadcast=} [properties] Properties to set
             */
            function ApproveAllowMicBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApproveAllowMicBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @instance
             */
            ApproveAllowMicBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ApproveAllowMicBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @instance
             */
            ApproveAllowMicBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ApproveAllowMicBroadcast allowed.
             * @member {boolean} allowed
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @instance
             */
            ApproveAllowMicBroadcast.prototype.allowed = false;

            /**
             * ApproveAllowMicBroadcast applyMicCount.
             * @member {number} applyMicCount
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @instance
             */
            ApproveAllowMicBroadcast.prototype.applyMicCount = 0;

            /**
             * Creates a new ApproveAllowMicBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {common.v1.IApproveAllowMicBroadcast=} [properties] Properties to set
             * @returns {common.v1.ApproveAllowMicBroadcast} ApproveAllowMicBroadcast instance
             */
            ApproveAllowMicBroadcast.create = function create(properties) {
                return new ApproveAllowMicBroadcast(properties);
            };

            /**
             * Encodes the specified ApproveAllowMicBroadcast message. Does not implicitly {@link common.v1.ApproveAllowMicBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {common.v1.IApproveAllowMicBroadcast} message ApproveAllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveAllowMicBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.allowed != null && Object.hasOwnProperty.call(message, "allowed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowed);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                if (message.applyMicCount != null && Object.hasOwnProperty.call(message, "applyMicCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.applyMicCount);
                return writer;
            };

            /**
             * Encodes the specified ApproveAllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.ApproveAllowMicBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {common.v1.IApproveAllowMicBroadcast} message ApproveAllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveAllowMicBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApproveAllowMicBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApproveAllowMicBroadcast} ApproveAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveAllowMicBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApproveAllowMicBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.allowed = reader.bool();
                            break;
                        }
                    case 4: {
                            message.applyMicCount = reader.int32();
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
             * Decodes an ApproveAllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApproveAllowMicBroadcast} ApproveAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveAllowMicBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApproveAllowMicBroadcast message.
             * @function verify
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApproveAllowMicBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    if (typeof message.allowed !== "boolean")
                        return "allowed: boolean expected";
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    if (!$util.isInteger(message.applyMicCount))
                        return "applyMicCount: integer expected";
                return null;
            };

            /**
             * Creates an ApproveAllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApproveAllowMicBroadcast} ApproveAllowMicBroadcast
             */
            ApproveAllowMicBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApproveAllowMicBroadcast)
                    return object;
                var message = new $root.common.v1.ApproveAllowMicBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.allowed != null)
                    message.allowed = Boolean(object.allowed);
                if (object.applyMicCount != null)
                    message.applyMicCount = object.applyMicCount | 0;
                return message;
            };

            /**
             * Creates a plain object from an ApproveAllowMicBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {common.v1.ApproveAllowMicBroadcast} message ApproveAllowMicBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApproveAllowMicBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.allowed = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    object.applyMicCount = 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    object.allowed = message.allowed;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.applyMicCount != null && message.hasOwnProperty("applyMicCount"))
                    object.applyMicCount = message.applyMicCount;
                return object;
            };

            /**
             * Converts this ApproveAllowMicBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApproveAllowMicBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApproveAllowMicBroadcast
             * @function getTypeUrl
             * @memberof common.v1.ApproveAllowMicBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApproveAllowMicBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApproveAllowMicBroadcast";
            };

            return ApproveAllowMicBroadcast;
        })();

        v1.AllowMicChangedBroadcast = (function() {

            /**
             * Properties of an AllowMicChangedBroadcast.
             * @memberof common.v1
             * @interface IAllowMicChangedBroadcast
             * @property {number|Long|null} [bcUid] AllowMicChangedBroadcast bcUid
             * @property {common.v1.IPlayerInfo|null} [player] AllowMicChangedBroadcast player
             * @property {boolean|null} [allowed] AllowMicChangedBroadcast allowed
             */

            /**
             * Constructs a new AllowMicChangedBroadcast.
             * @memberof common.v1
             * @classdesc Represents an AllowMicChangedBroadcast.
             * @implements IAllowMicChangedBroadcast
             * @constructor
             * @param {common.v1.IAllowMicChangedBroadcast=} [properties] Properties to set
             */
            function AllowMicChangedBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AllowMicChangedBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.AllowMicChangedBroadcast
             * @instance
             */
            AllowMicChangedBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AllowMicChangedBroadcast player.
             * @member {common.v1.IPlayerInfo|null|undefined} player
             * @memberof common.v1.AllowMicChangedBroadcast
             * @instance
             */
            AllowMicChangedBroadcast.prototype.player = null;

            /**
             * AllowMicChangedBroadcast allowed.
             * @member {boolean} allowed
             * @memberof common.v1.AllowMicChangedBroadcast
             * @instance
             */
            AllowMicChangedBroadcast.prototype.allowed = false;

            /**
             * Creates a new AllowMicChangedBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {common.v1.IAllowMicChangedBroadcast=} [properties] Properties to set
             * @returns {common.v1.AllowMicChangedBroadcast} AllowMicChangedBroadcast instance
             */
            AllowMicChangedBroadcast.create = function create(properties) {
                return new AllowMicChangedBroadcast(properties);
            };

            /**
             * Encodes the specified AllowMicChangedBroadcast message. Does not implicitly {@link common.v1.AllowMicChangedBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {common.v1.IAllowMicChangedBroadcast} message AllowMicChangedBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicChangedBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    $root.common.v1.PlayerInfo.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.allowed != null && Object.hasOwnProperty.call(message, "allowed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowed);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified AllowMicChangedBroadcast message, length delimited. Does not implicitly {@link common.v1.AllowMicChangedBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {common.v1.IAllowMicChangedBroadcast} message AllowMicChangedBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicChangedBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllowMicChangedBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.AllowMicChangedBroadcast} AllowMicChangedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicChangedBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.AllowMicChangedBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.player = $root.common.v1.PlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.allowed = reader.bool();
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
             * Decodes an AllowMicChangedBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.AllowMicChangedBroadcast} AllowMicChangedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicChangedBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllowMicChangedBroadcast message.
             * @function verify
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllowMicChangedBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.player);
                    if (error)
                        return "player." + error;
                }
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    if (typeof message.allowed !== "boolean")
                        return "allowed: boolean expected";
                return null;
            };

            /**
             * Creates an AllowMicChangedBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.AllowMicChangedBroadcast} AllowMicChangedBroadcast
             */
            AllowMicChangedBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.AllowMicChangedBroadcast)
                    return object;
                var message = new $root.common.v1.AllowMicChangedBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.player != null) {
                    if (typeof object.player !== "object")
                        throw TypeError(".common.v1.AllowMicChangedBroadcast.player: object expected");
                    message.player = $root.common.v1.PlayerInfo.fromObject(object.player);
                }
                if (object.allowed != null)
                    message.allowed = Boolean(object.allowed);
                return message;
            };

            /**
             * Creates a plain object from an AllowMicChangedBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {common.v1.AllowMicChangedBroadcast} message AllowMicChangedBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllowMicChangedBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.player = null;
                    object.allowed = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = $root.common.v1.PlayerInfo.toObject(message.player, options);
                if (message.allowed != null && message.hasOwnProperty("allowed"))
                    object.allowed = message.allowed;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this AllowMicChangedBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.AllowMicChangedBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllowMicChangedBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AllowMicChangedBroadcast
             * @function getTypeUrl
             * @memberof common.v1.AllowMicChangedBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AllowMicChangedBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.AllowMicChangedBroadcast";
            };

            return AllowMicChangedBroadcast;
        })();

        v1.OpenMicReq = (function() {

            /**
             * Properties of an OpenMicReq.
             * @memberof common.v1
             * @interface IOpenMicReq
             * @property {boolean|null} [open] OpenMicReq open
             */

            /**
             * Constructs a new OpenMicReq.
             * @memberof common.v1
             * @classdesc Represents an OpenMicReq.
             * @implements IOpenMicReq
             * @constructor
             * @param {common.v1.IOpenMicReq=} [properties] Properties to set
             */
            function OpenMicReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OpenMicReq open.
             * @member {boolean} open
             * @memberof common.v1.OpenMicReq
             * @instance
             */
            OpenMicReq.prototype.open = false;

            /**
             * Creates a new OpenMicReq instance using the specified properties.
             * @function create
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {common.v1.IOpenMicReq=} [properties] Properties to set
             * @returns {common.v1.OpenMicReq} OpenMicReq instance
             */
            OpenMicReq.create = function create(properties) {
                return new OpenMicReq(properties);
            };

            /**
             * Encodes the specified OpenMicReq message. Does not implicitly {@link common.v1.OpenMicReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {common.v1.IOpenMicReq} message OpenMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenMicReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.open != null && Object.hasOwnProperty.call(message, "open"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.open);
                return writer;
            };

            /**
             * Encodes the specified OpenMicReq message, length delimited. Does not implicitly {@link common.v1.OpenMicReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {common.v1.IOpenMicReq} message OpenMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenMicReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenMicReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OpenMicReq} OpenMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenMicReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OpenMicReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.open = reader.bool();
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
             * Decodes an OpenMicReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OpenMicReq} OpenMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenMicReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenMicReq message.
             * @function verify
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenMicReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.open != null && message.hasOwnProperty("open"))
                    if (typeof message.open !== "boolean")
                        return "open: boolean expected";
                return null;
            };

            /**
             * Creates an OpenMicReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OpenMicReq} OpenMicReq
             */
            OpenMicReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OpenMicReq)
                    return object;
                var message = new $root.common.v1.OpenMicReq();
                if (object.open != null)
                    message.open = Boolean(object.open);
                return message;
            };

            /**
             * Creates a plain object from an OpenMicReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {common.v1.OpenMicReq} message OpenMicReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenMicReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.open = false;
                if (message.open != null && message.hasOwnProperty("open"))
                    object.open = message.open;
                return object;
            };

            /**
             * Converts this OpenMicReq to JSON.
             * @function toJSON
             * @memberof common.v1.OpenMicReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenMicReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OpenMicReq
             * @function getTypeUrl
             * @memberof common.v1.OpenMicReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OpenMicReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OpenMicReq";
            };

            return OpenMicReq;
        })();

        v1.OpenMicRes = (function() {

            /**
             * Properties of an OpenMicRes.
             * @memberof common.v1
             * @interface IOpenMicRes
             * @property {boolean|null} [open] OpenMicRes open
             */

            /**
             * Constructs a new OpenMicRes.
             * @memberof common.v1
             * @classdesc Represents an OpenMicRes.
             * @implements IOpenMicRes
             * @constructor
             * @param {common.v1.IOpenMicRes=} [properties] Properties to set
             */
            function OpenMicRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OpenMicRes open.
             * @member {boolean} open
             * @memberof common.v1.OpenMicRes
             * @instance
             */
            OpenMicRes.prototype.open = false;

            /**
             * Creates a new OpenMicRes instance using the specified properties.
             * @function create
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {common.v1.IOpenMicRes=} [properties] Properties to set
             * @returns {common.v1.OpenMicRes} OpenMicRes instance
             */
            OpenMicRes.create = function create(properties) {
                return new OpenMicRes(properties);
            };

            /**
             * Encodes the specified OpenMicRes message. Does not implicitly {@link common.v1.OpenMicRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {common.v1.IOpenMicRes} message OpenMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenMicRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.open != null && Object.hasOwnProperty.call(message, "open"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.open);
                return writer;
            };

            /**
             * Encodes the specified OpenMicRes message, length delimited. Does not implicitly {@link common.v1.OpenMicRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {common.v1.IOpenMicRes} message OpenMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenMicRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenMicRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OpenMicRes} OpenMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenMicRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OpenMicRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.open = reader.bool();
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
             * Decodes an OpenMicRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OpenMicRes} OpenMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenMicRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenMicRes message.
             * @function verify
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenMicRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.open != null && message.hasOwnProperty("open"))
                    if (typeof message.open !== "boolean")
                        return "open: boolean expected";
                return null;
            };

            /**
             * Creates an OpenMicRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OpenMicRes} OpenMicRes
             */
            OpenMicRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OpenMicRes)
                    return object;
                var message = new $root.common.v1.OpenMicRes();
                if (object.open != null)
                    message.open = Boolean(object.open);
                return message;
            };

            /**
             * Creates a plain object from an OpenMicRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {common.v1.OpenMicRes} message OpenMicRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenMicRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.open = false;
                if (message.open != null && message.hasOwnProperty("open"))
                    object.open = message.open;
                return object;
            };

            /**
             * Converts this OpenMicRes to JSON.
             * @function toJSON
             * @memberof common.v1.OpenMicRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenMicRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OpenMicRes
             * @function getTypeUrl
             * @memberof common.v1.OpenMicRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OpenMicRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OpenMicRes";
            };

            return OpenMicRes;
        })();

        v1.OpenMicBroadcast = (function() {

            /**
             * Properties of an OpenMicBroadcast.
             * @memberof common.v1
             * @interface IOpenMicBroadcast
             * @property {number|Long|null} [bcUid] OpenMicBroadcast bcUid
             * @property {number|Long|null} [playerId] OpenMicBroadcast playerId
             * @property {boolean|null} [open] OpenMicBroadcast open
             */

            /**
             * Constructs a new OpenMicBroadcast.
             * @memberof common.v1
             * @classdesc Represents an OpenMicBroadcast.
             * @implements IOpenMicBroadcast
             * @constructor
             * @param {common.v1.IOpenMicBroadcast=} [properties] Properties to set
             */
            function OpenMicBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OpenMicBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.OpenMicBroadcast
             * @instance
             */
            OpenMicBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OpenMicBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OpenMicBroadcast
             * @instance
             */
            OpenMicBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OpenMicBroadcast open.
             * @member {boolean} open
             * @memberof common.v1.OpenMicBroadcast
             * @instance
             */
            OpenMicBroadcast.prototype.open = false;

            /**
             * Creates a new OpenMicBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {common.v1.IOpenMicBroadcast=} [properties] Properties to set
             * @returns {common.v1.OpenMicBroadcast} OpenMicBroadcast instance
             */
            OpenMicBroadcast.create = function create(properties) {
                return new OpenMicBroadcast(properties);
            };

            /**
             * Encodes the specified OpenMicBroadcast message. Does not implicitly {@link common.v1.OpenMicBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {common.v1.IOpenMicBroadcast} message OpenMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenMicBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.open != null && Object.hasOwnProperty.call(message, "open"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.open);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified OpenMicBroadcast message, length delimited. Does not implicitly {@link common.v1.OpenMicBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {common.v1.IOpenMicBroadcast} message OpenMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenMicBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenMicBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OpenMicBroadcast} OpenMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenMicBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OpenMicBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.open = reader.bool();
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
             * Decodes an OpenMicBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OpenMicBroadcast} OpenMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenMicBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenMicBroadcast message.
             * @function verify
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenMicBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.open != null && message.hasOwnProperty("open"))
                    if (typeof message.open !== "boolean")
                        return "open: boolean expected";
                return null;
            };

            /**
             * Creates an OpenMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OpenMicBroadcast} OpenMicBroadcast
             */
            OpenMicBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OpenMicBroadcast)
                    return object;
                var message = new $root.common.v1.OpenMicBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.open != null)
                    message.open = Boolean(object.open);
                return message;
            };

            /**
             * Creates a plain object from an OpenMicBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {common.v1.OpenMicBroadcast} message OpenMicBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenMicBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.open = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.open != null && message.hasOwnProperty("open"))
                    object.open = message.open;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this OpenMicBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.OpenMicBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenMicBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OpenMicBroadcast
             * @function getTypeUrl
             * @memberof common.v1.OpenMicBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OpenMicBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OpenMicBroadcast";
            };

            return OpenMicBroadcast;
        })();

        v1.AllowMicReq = (function() {

            /**
             * Properties of an AllowMicReq.
             * @memberof common.v1
             * @interface IAllowMicReq
             * @property {number|Long|null} [playerId] AllowMicReq playerId
             * @property {boolean|null} [allow] AllowMicReq allow
             */

            /**
             * Constructs a new AllowMicReq.
             * @memberof common.v1
             * @classdesc Represents an AllowMicReq.
             * @implements IAllowMicReq
             * @constructor
             * @param {common.v1.IAllowMicReq=} [properties] Properties to set
             */
            function AllowMicReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AllowMicReq playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.AllowMicReq
             * @instance
             */
            AllowMicReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AllowMicReq allow.
             * @member {boolean} allow
             * @memberof common.v1.AllowMicReq
             * @instance
             */
            AllowMicReq.prototype.allow = false;

            /**
             * Creates a new AllowMicReq instance using the specified properties.
             * @function create
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {common.v1.IAllowMicReq=} [properties] Properties to set
             * @returns {common.v1.AllowMicReq} AllowMicReq instance
             */
            AllowMicReq.create = function create(properties) {
                return new AllowMicReq(properties);
            };

            /**
             * Encodes the specified AllowMicReq message. Does not implicitly {@link common.v1.AllowMicReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {common.v1.IAllowMicReq} message AllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.allow != null && Object.hasOwnProperty.call(message, "allow"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow);
                return writer;
            };

            /**
             * Encodes the specified AllowMicReq message, length delimited. Does not implicitly {@link common.v1.AllowMicReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {common.v1.IAllowMicReq} message AllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllowMicReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.AllowMicReq} AllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.AllowMicReq();
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
                            message.allow = reader.bool();
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
             * Decodes an AllowMicReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.AllowMicReq} AllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllowMicReq message.
             * @function verify
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllowMicReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.allow != null && message.hasOwnProperty("allow"))
                    if (typeof message.allow !== "boolean")
                        return "allow: boolean expected";
                return null;
            };

            /**
             * Creates an AllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.AllowMicReq} AllowMicReq
             */
            AllowMicReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.AllowMicReq)
                    return object;
                var message = new $root.common.v1.AllowMicReq();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.allow != null)
                    message.allow = Boolean(object.allow);
                return message;
            };

            /**
             * Creates a plain object from an AllowMicReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {common.v1.AllowMicReq} message AllowMicReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllowMicReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.allow = false;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.allow != null && message.hasOwnProperty("allow"))
                    object.allow = message.allow;
                return object;
            };

            /**
             * Converts this AllowMicReq to JSON.
             * @function toJSON
             * @memberof common.v1.AllowMicReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllowMicReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AllowMicReq
             * @function getTypeUrl
             * @memberof common.v1.AllowMicReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AllowMicReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.AllowMicReq";
            };

            return AllowMicReq;
        })();

        v1.AllowMicRes = (function() {

            /**
             * Properties of an AllowMicRes.
             * @memberof common.v1
             * @interface IAllowMicRes
             * @property {number|Long|null} [playerId] AllowMicRes playerId
             * @property {boolean|null} [allow] AllowMicRes allow
             */

            /**
             * Constructs a new AllowMicRes.
             * @memberof common.v1
             * @classdesc Represents an AllowMicRes.
             * @implements IAllowMicRes
             * @constructor
             * @param {common.v1.IAllowMicRes=} [properties] Properties to set
             */
            function AllowMicRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AllowMicRes playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.AllowMicRes
             * @instance
             */
            AllowMicRes.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AllowMicRes allow.
             * @member {boolean} allow
             * @memberof common.v1.AllowMicRes
             * @instance
             */
            AllowMicRes.prototype.allow = false;

            /**
             * Creates a new AllowMicRes instance using the specified properties.
             * @function create
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {common.v1.IAllowMicRes=} [properties] Properties to set
             * @returns {common.v1.AllowMicRes} AllowMicRes instance
             */
            AllowMicRes.create = function create(properties) {
                return new AllowMicRes(properties);
            };

            /**
             * Encodes the specified AllowMicRes message. Does not implicitly {@link common.v1.AllowMicRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {common.v1.IAllowMicRes} message AllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.allow != null && Object.hasOwnProperty.call(message, "allow"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow);
                return writer;
            };

            /**
             * Encodes the specified AllowMicRes message, length delimited. Does not implicitly {@link common.v1.AllowMicRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {common.v1.IAllowMicRes} message AllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllowMicRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.AllowMicRes} AllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.AllowMicRes();
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
                            message.allow = reader.bool();
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
             * Decodes an AllowMicRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.AllowMicRes} AllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllowMicRes message.
             * @function verify
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllowMicRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.allow != null && message.hasOwnProperty("allow"))
                    if (typeof message.allow !== "boolean")
                        return "allow: boolean expected";
                return null;
            };

            /**
             * Creates an AllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.AllowMicRes} AllowMicRes
             */
            AllowMicRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.AllowMicRes)
                    return object;
                var message = new $root.common.v1.AllowMicRes();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.allow != null)
                    message.allow = Boolean(object.allow);
                return message;
            };

            /**
             * Creates a plain object from an AllowMicRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {common.v1.AllowMicRes} message AllowMicRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllowMicRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.allow = false;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.allow != null && message.hasOwnProperty("allow"))
                    object.allow = message.allow;
                return object;
            };

            /**
             * Converts this AllowMicRes to JSON.
             * @function toJSON
             * @memberof common.v1.AllowMicRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllowMicRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AllowMicRes
             * @function getTypeUrl
             * @memberof common.v1.AllowMicRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AllowMicRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.AllowMicRes";
            };

            return AllowMicRes;
        })();

        v1.AllowMicBroadcast = (function() {

            /**
             * Properties of an AllowMicBroadcast.
             * @memberof common.v1
             * @interface IAllowMicBroadcast
             * @property {number|Long|null} [bcUid] AllowMicBroadcast bcUid
             * @property {number|Long|null} [playerId] AllowMicBroadcast playerId
             * @property {boolean|null} [allow] AllowMicBroadcast allow
             */

            /**
             * Constructs a new AllowMicBroadcast.
             * @memberof common.v1
             * @classdesc Represents an AllowMicBroadcast.
             * @implements IAllowMicBroadcast
             * @constructor
             * @param {common.v1.IAllowMicBroadcast=} [properties] Properties to set
             */
            function AllowMicBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AllowMicBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.AllowMicBroadcast
             * @instance
             */
            AllowMicBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AllowMicBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.AllowMicBroadcast
             * @instance
             */
            AllowMicBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AllowMicBroadcast allow.
             * @member {boolean} allow
             * @memberof common.v1.AllowMicBroadcast
             * @instance
             */
            AllowMicBroadcast.prototype.allow = false;

            /**
             * Creates a new AllowMicBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {common.v1.IAllowMicBroadcast=} [properties] Properties to set
             * @returns {common.v1.AllowMicBroadcast} AllowMicBroadcast instance
             */
            AllowMicBroadcast.create = function create(properties) {
                return new AllowMicBroadcast(properties);
            };

            /**
             * Encodes the specified AllowMicBroadcast message. Does not implicitly {@link common.v1.AllowMicBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {common.v1.IAllowMicBroadcast} message AllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.allow != null && Object.hasOwnProperty.call(message, "allow"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified AllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.AllowMicBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {common.v1.IAllowMicBroadcast} message AllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowMicBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllowMicBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.AllowMicBroadcast} AllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.AllowMicBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.allow = reader.bool();
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
             * Decodes an AllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.AllowMicBroadcast} AllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowMicBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllowMicBroadcast message.
             * @function verify
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllowMicBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.allow != null && message.hasOwnProperty("allow"))
                    if (typeof message.allow !== "boolean")
                        return "allow: boolean expected";
                return null;
            };

            /**
             * Creates an AllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.AllowMicBroadcast} AllowMicBroadcast
             */
            AllowMicBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.AllowMicBroadcast)
                    return object;
                var message = new $root.common.v1.AllowMicBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.allow != null)
                    message.allow = Boolean(object.allow);
                return message;
            };

            /**
             * Creates a plain object from an AllowMicBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {common.v1.AllowMicBroadcast} message AllowMicBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllowMicBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.allow = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.allow != null && message.hasOwnProperty("allow"))
                    object.allow = message.allow;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this AllowMicBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.AllowMicBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllowMicBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AllowMicBroadcast
             * @function getTypeUrl
             * @memberof common.v1.AllowMicBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AllowMicBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.AllowMicBroadcast";
            };

            return AllowMicBroadcast;
        })();

        v1.AgreeAllowMicReq = (function() {

            /**
             * Properties of an AgreeAllowMicReq.
             * @memberof common.v1
             * @interface IAgreeAllowMicReq
             * @property {boolean|null} [agree] AgreeAllowMicReq agree
             */

            /**
             * Constructs a new AgreeAllowMicReq.
             * @memberof common.v1
             * @classdesc Represents an AgreeAllowMicReq.
             * @implements IAgreeAllowMicReq
             * @constructor
             * @param {common.v1.IAgreeAllowMicReq=} [properties] Properties to set
             */
            function AgreeAllowMicReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreeAllowMicReq agree.
             * @member {boolean} agree
             * @memberof common.v1.AgreeAllowMicReq
             * @instance
             */
            AgreeAllowMicReq.prototype.agree = false;

            /**
             * Creates a new AgreeAllowMicReq instance using the specified properties.
             * @function create
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {common.v1.IAgreeAllowMicReq=} [properties] Properties to set
             * @returns {common.v1.AgreeAllowMicReq} AgreeAllowMicReq instance
             */
            AgreeAllowMicReq.create = function create(properties) {
                return new AgreeAllowMicReq(properties);
            };

            /**
             * Encodes the specified AgreeAllowMicReq message. Does not implicitly {@link common.v1.AgreeAllowMicReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {common.v1.IAgreeAllowMicReq} message AgreeAllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeAllowMicReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.agree != null && Object.hasOwnProperty.call(message, "agree"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.agree);
                return writer;
            };

            /**
             * Encodes the specified AgreeAllowMicReq message, length delimited. Does not implicitly {@link common.v1.AgreeAllowMicReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {common.v1.IAgreeAllowMicReq} message AgreeAllowMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeAllowMicReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreeAllowMicReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.AgreeAllowMicReq} AgreeAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeAllowMicReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.AgreeAllowMicReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.agree = reader.bool();
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
             * Decodes an AgreeAllowMicReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.AgreeAllowMicReq} AgreeAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeAllowMicReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreeAllowMicReq message.
             * @function verify
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreeAllowMicReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.agree != null && message.hasOwnProperty("agree"))
                    if (typeof message.agree !== "boolean")
                        return "agree: boolean expected";
                return null;
            };

            /**
             * Creates an AgreeAllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.AgreeAllowMicReq} AgreeAllowMicReq
             */
            AgreeAllowMicReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.AgreeAllowMicReq)
                    return object;
                var message = new $root.common.v1.AgreeAllowMicReq();
                if (object.agree != null)
                    message.agree = Boolean(object.agree);
                return message;
            };

            /**
             * Creates a plain object from an AgreeAllowMicReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {common.v1.AgreeAllowMicReq} message AgreeAllowMicReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AgreeAllowMicReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.agree = false;
                if (message.agree != null && message.hasOwnProperty("agree"))
                    object.agree = message.agree;
                return object;
            };

            /**
             * Converts this AgreeAllowMicReq to JSON.
             * @function toJSON
             * @memberof common.v1.AgreeAllowMicReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AgreeAllowMicReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AgreeAllowMicReq
             * @function getTypeUrl
             * @memberof common.v1.AgreeAllowMicReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgreeAllowMicReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.AgreeAllowMicReq";
            };

            return AgreeAllowMicReq;
        })();

        v1.AgreeAllowMicRes = (function() {

            /**
             * Properties of an AgreeAllowMicRes.
             * @memberof common.v1
             * @interface IAgreeAllowMicRes
             * @property {boolean|null} [agree] AgreeAllowMicRes agree
             */

            /**
             * Constructs a new AgreeAllowMicRes.
             * @memberof common.v1
             * @classdesc Represents an AgreeAllowMicRes.
             * @implements IAgreeAllowMicRes
             * @constructor
             * @param {common.v1.IAgreeAllowMicRes=} [properties] Properties to set
             */
            function AgreeAllowMicRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreeAllowMicRes agree.
             * @member {boolean} agree
             * @memberof common.v1.AgreeAllowMicRes
             * @instance
             */
            AgreeAllowMicRes.prototype.agree = false;

            /**
             * Creates a new AgreeAllowMicRes instance using the specified properties.
             * @function create
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {common.v1.IAgreeAllowMicRes=} [properties] Properties to set
             * @returns {common.v1.AgreeAllowMicRes} AgreeAllowMicRes instance
             */
            AgreeAllowMicRes.create = function create(properties) {
                return new AgreeAllowMicRes(properties);
            };

            /**
             * Encodes the specified AgreeAllowMicRes message. Does not implicitly {@link common.v1.AgreeAllowMicRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {common.v1.IAgreeAllowMicRes} message AgreeAllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeAllowMicRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.agree != null && Object.hasOwnProperty.call(message, "agree"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.agree);
                return writer;
            };

            /**
             * Encodes the specified AgreeAllowMicRes message, length delimited. Does not implicitly {@link common.v1.AgreeAllowMicRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {common.v1.IAgreeAllowMicRes} message AgreeAllowMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeAllowMicRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreeAllowMicRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.AgreeAllowMicRes} AgreeAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeAllowMicRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.AgreeAllowMicRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.agree = reader.bool();
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
             * Decodes an AgreeAllowMicRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.AgreeAllowMicRes} AgreeAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeAllowMicRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreeAllowMicRes message.
             * @function verify
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreeAllowMicRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.agree != null && message.hasOwnProperty("agree"))
                    if (typeof message.agree !== "boolean")
                        return "agree: boolean expected";
                return null;
            };

            /**
             * Creates an AgreeAllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.AgreeAllowMicRes} AgreeAllowMicRes
             */
            AgreeAllowMicRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.AgreeAllowMicRes)
                    return object;
                var message = new $root.common.v1.AgreeAllowMicRes();
                if (object.agree != null)
                    message.agree = Boolean(object.agree);
                return message;
            };

            /**
             * Creates a plain object from an AgreeAllowMicRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {common.v1.AgreeAllowMicRes} message AgreeAllowMicRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AgreeAllowMicRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.agree = false;
                if (message.agree != null && message.hasOwnProperty("agree"))
                    object.agree = message.agree;
                return object;
            };

            /**
             * Converts this AgreeAllowMicRes to JSON.
             * @function toJSON
             * @memberof common.v1.AgreeAllowMicRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AgreeAllowMicRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AgreeAllowMicRes
             * @function getTypeUrl
             * @memberof common.v1.AgreeAllowMicRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgreeAllowMicRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.AgreeAllowMicRes";
            };

            return AgreeAllowMicRes;
        })();

        v1.AgreeAllowMicBroadcast = (function() {

            /**
             * Properties of an AgreeAllowMicBroadcast.
             * @memberof common.v1
             * @interface IAgreeAllowMicBroadcast
             * @property {number|Long|null} [bcUid] AgreeAllowMicBroadcast bcUid
             * @property {number|Long|null} [playerId] AgreeAllowMicBroadcast playerId
             * @property {boolean|null} [agree] AgreeAllowMicBroadcast agree
             */

            /**
             * Constructs a new AgreeAllowMicBroadcast.
             * @memberof common.v1
             * @classdesc Represents an AgreeAllowMicBroadcast.
             * @implements IAgreeAllowMicBroadcast
             * @constructor
             * @param {common.v1.IAgreeAllowMicBroadcast=} [properties] Properties to set
             */
            function AgreeAllowMicBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreeAllowMicBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @instance
             */
            AgreeAllowMicBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AgreeAllowMicBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @instance
             */
            AgreeAllowMicBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AgreeAllowMicBroadcast agree.
             * @member {boolean} agree
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @instance
             */
            AgreeAllowMicBroadcast.prototype.agree = false;

            /**
             * Creates a new AgreeAllowMicBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {common.v1.IAgreeAllowMicBroadcast=} [properties] Properties to set
             * @returns {common.v1.AgreeAllowMicBroadcast} AgreeAllowMicBroadcast instance
             */
            AgreeAllowMicBroadcast.create = function create(properties) {
                return new AgreeAllowMicBroadcast(properties);
            };

            /**
             * Encodes the specified AgreeAllowMicBroadcast message. Does not implicitly {@link common.v1.AgreeAllowMicBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {common.v1.IAgreeAllowMicBroadcast} message AgreeAllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeAllowMicBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.agree != null && Object.hasOwnProperty.call(message, "agree"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.agree);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified AgreeAllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.AgreeAllowMicBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {common.v1.IAgreeAllowMicBroadcast} message AgreeAllowMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeAllowMicBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreeAllowMicBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.AgreeAllowMicBroadcast} AgreeAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeAllowMicBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.AgreeAllowMicBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.playerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.agree = reader.bool();
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
             * Decodes an AgreeAllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.AgreeAllowMicBroadcast} AgreeAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeAllowMicBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreeAllowMicBroadcast message.
             * @function verify
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreeAllowMicBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.agree != null && message.hasOwnProperty("agree"))
                    if (typeof message.agree !== "boolean")
                        return "agree: boolean expected";
                return null;
            };

            /**
             * Creates an AgreeAllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.AgreeAllowMicBroadcast} AgreeAllowMicBroadcast
             */
            AgreeAllowMicBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.AgreeAllowMicBroadcast)
                    return object;
                var message = new $root.common.v1.AgreeAllowMicBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.agree != null)
                    message.agree = Boolean(object.agree);
                return message;
            };

            /**
             * Creates a plain object from an AgreeAllowMicBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {common.v1.AgreeAllowMicBroadcast} message AgreeAllowMicBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AgreeAllowMicBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.agree = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.agree != null && message.hasOwnProperty("agree"))
                    object.agree = message.agree;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this AgreeAllowMicBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AgreeAllowMicBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AgreeAllowMicBroadcast
             * @function getTypeUrl
             * @memberof common.v1.AgreeAllowMicBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgreeAllowMicBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.AgreeAllowMicBroadcast";
            };

            return AgreeAllowMicBroadcast;
        })();

        v1.ApplyAllowMicListReq = (function() {

            /**
             * Properties of an ApplyAllowMicListReq.
             * @memberof common.v1
             * @interface IApplyAllowMicListReq
             */

            /**
             * Constructs a new ApplyAllowMicListReq.
             * @memberof common.v1
             * @classdesc Represents an ApplyAllowMicListReq.
             * @implements IApplyAllowMicListReq
             * @constructor
             * @param {common.v1.IApplyAllowMicListReq=} [properties] Properties to set
             */
            function ApplyAllowMicListReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ApplyAllowMicListReq instance using the specified properties.
             * @function create
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {common.v1.IApplyAllowMicListReq=} [properties] Properties to set
             * @returns {common.v1.ApplyAllowMicListReq} ApplyAllowMicListReq instance
             */
            ApplyAllowMicListReq.create = function create(properties) {
                return new ApplyAllowMicListReq(properties);
            };

            /**
             * Encodes the specified ApplyAllowMicListReq message. Does not implicitly {@link common.v1.ApplyAllowMicListReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {common.v1.IApplyAllowMicListReq} message ApplyAllowMicListReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicListReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ApplyAllowMicListReq message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicListReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {common.v1.IApplyAllowMicListReq} message ApplyAllowMicListReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicListReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApplyAllowMicListReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApplyAllowMicListReq} ApplyAllowMicListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicListReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApplyAllowMicListReq();
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
             * Decodes an ApplyAllowMicListReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApplyAllowMicListReq} ApplyAllowMicListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicListReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApplyAllowMicListReq message.
             * @function verify
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplyAllowMicListReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an ApplyAllowMicListReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApplyAllowMicListReq} ApplyAllowMicListReq
             */
            ApplyAllowMicListReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApplyAllowMicListReq)
                    return object;
                return new $root.common.v1.ApplyAllowMicListReq();
            };

            /**
             * Creates a plain object from an ApplyAllowMicListReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {common.v1.ApplyAllowMicListReq} message ApplyAllowMicListReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplyAllowMicListReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ApplyAllowMicListReq to JSON.
             * @function toJSON
             * @memberof common.v1.ApplyAllowMicListReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplyAllowMicListReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApplyAllowMicListReq
             * @function getTypeUrl
             * @memberof common.v1.ApplyAllowMicListReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApplyAllowMicListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApplyAllowMicListReq";
            };

            return ApplyAllowMicListReq;
        })();

        v1.ApplyAllowMicListRes = (function() {

            /**
             * Properties of an ApplyAllowMicListRes.
             * @memberof common.v1
             * @interface IApplyAllowMicListRes
             * @property {Array.<common.v1.IPlayerInfo>|null} [players] ApplyAllowMicListRes players
             */

            /**
             * Constructs a new ApplyAllowMicListRes.
             * @memberof common.v1
             * @classdesc Represents an ApplyAllowMicListRes.
             * @implements IApplyAllowMicListRes
             * @constructor
             * @param {common.v1.IApplyAllowMicListRes=} [properties] Properties to set
             */
            function ApplyAllowMicListRes(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApplyAllowMicListRes players.
             * @member {Array.<common.v1.IPlayerInfo>} players
             * @memberof common.v1.ApplyAllowMicListRes
             * @instance
             */
            ApplyAllowMicListRes.prototype.players = $util.emptyArray;

            /**
             * Creates a new ApplyAllowMicListRes instance using the specified properties.
             * @function create
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {common.v1.IApplyAllowMicListRes=} [properties] Properties to set
             * @returns {common.v1.ApplyAllowMicListRes} ApplyAllowMicListRes instance
             */
            ApplyAllowMicListRes.create = function create(properties) {
                return new ApplyAllowMicListRes(properties);
            };

            /**
             * Encodes the specified ApplyAllowMicListRes message. Does not implicitly {@link common.v1.ApplyAllowMicListRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {common.v1.IApplyAllowMicListRes} message ApplyAllowMicListRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicListRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ApplyAllowMicListRes message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicListRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {common.v1.IApplyAllowMicListRes} message ApplyAllowMicListRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplyAllowMicListRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApplyAllowMicListRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ApplyAllowMicListRes} ApplyAllowMicListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicListRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ApplyAllowMicListRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
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
             * Decodes an ApplyAllowMicListRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ApplyAllowMicListRes} ApplyAllowMicListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplyAllowMicListRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApplyAllowMicListRes message.
             * @function verify
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplyAllowMicListRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.common.v1.PlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an ApplyAllowMicListRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ApplyAllowMicListRes} ApplyAllowMicListRes
             */
            ApplyAllowMicListRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ApplyAllowMicListRes)
                    return object;
                var message = new $root.common.v1.ApplyAllowMicListRes();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".common.v1.ApplyAllowMicListRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".common.v1.ApplyAllowMicListRes.players: object expected");
                        message.players[i] = $root.common.v1.PlayerInfo.fromObject(object.players[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an ApplyAllowMicListRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {common.v1.ApplyAllowMicListRes} message ApplyAllowMicListRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplyAllowMicListRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.common.v1.PlayerInfo.toObject(message.players[j], options);
                }
                return object;
            };

            /**
             * Converts this ApplyAllowMicListRes to JSON.
             * @function toJSON
             * @memberof common.v1.ApplyAllowMicListRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplyAllowMicListRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApplyAllowMicListRes
             * @function getTypeUrl
             * @memberof common.v1.ApplyAllowMicListRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApplyAllowMicListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ApplyAllowMicListRes";
            };

            return ApplyAllowMicListRes;
        })();

        v1.OwnerCloseMicReq = (function() {

            /**
             * Properties of an OwnerCloseMicReq.
             * @memberof common.v1
             * @interface IOwnerCloseMicReq
             * @property {number|Long|null} [playerId] OwnerCloseMicReq playerId
             */

            /**
             * Constructs a new OwnerCloseMicReq.
             * @memberof common.v1
             * @classdesc Represents an OwnerCloseMicReq.
             * @implements IOwnerCloseMicReq
             * @constructor
             * @param {common.v1.IOwnerCloseMicReq=} [properties] Properties to set
             */
            function OwnerCloseMicReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerCloseMicReq playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerCloseMicReq
             * @instance
             */
            OwnerCloseMicReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerCloseMicReq instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {common.v1.IOwnerCloseMicReq=} [properties] Properties to set
             * @returns {common.v1.OwnerCloseMicReq} OwnerCloseMicReq instance
             */
            OwnerCloseMicReq.create = function create(properties) {
                return new OwnerCloseMicReq(properties);
            };

            /**
             * Encodes the specified OwnerCloseMicReq message. Does not implicitly {@link common.v1.OwnerCloseMicReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {common.v1.IOwnerCloseMicReq} message OwnerCloseMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerCloseMicReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerCloseMicReq message, length delimited. Does not implicitly {@link common.v1.OwnerCloseMicReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {common.v1.IOwnerCloseMicReq} message OwnerCloseMicReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerCloseMicReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerCloseMicReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerCloseMicReq} OwnerCloseMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerCloseMicReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerCloseMicReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes an OwnerCloseMicReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerCloseMicReq} OwnerCloseMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerCloseMicReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerCloseMicReq message.
             * @function verify
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerCloseMicReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerCloseMicReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerCloseMicReq} OwnerCloseMicReq
             */
            OwnerCloseMicReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerCloseMicReq)
                    return object;
                var message = new $root.common.v1.OwnerCloseMicReq();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerCloseMicReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {common.v1.OwnerCloseMicReq} message OwnerCloseMicReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerCloseMicReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                return object;
            };

            /**
             * Converts this OwnerCloseMicReq to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerCloseMicReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerCloseMicReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerCloseMicReq
             * @function getTypeUrl
             * @memberof common.v1.OwnerCloseMicReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerCloseMicReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerCloseMicReq";
            };

            return OwnerCloseMicReq;
        })();

        v1.OwnerCloseMicRes = (function() {

            /**
             * Properties of an OwnerCloseMicRes.
             * @memberof common.v1
             * @interface IOwnerCloseMicRes
             * @property {number|Long|null} [playerId] OwnerCloseMicRes playerId
             */

            /**
             * Constructs a new OwnerCloseMicRes.
             * @memberof common.v1
             * @classdesc Represents an OwnerCloseMicRes.
             * @implements IOwnerCloseMicRes
             * @constructor
             * @param {common.v1.IOwnerCloseMicRes=} [properties] Properties to set
             */
            function OwnerCloseMicRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerCloseMicRes playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerCloseMicRes
             * @instance
             */
            OwnerCloseMicRes.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerCloseMicRes instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {common.v1.IOwnerCloseMicRes=} [properties] Properties to set
             * @returns {common.v1.OwnerCloseMicRes} OwnerCloseMicRes instance
             */
            OwnerCloseMicRes.create = function create(properties) {
                return new OwnerCloseMicRes(properties);
            };

            /**
             * Encodes the specified OwnerCloseMicRes message. Does not implicitly {@link common.v1.OwnerCloseMicRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {common.v1.IOwnerCloseMicRes} message OwnerCloseMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerCloseMicRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerCloseMicRes message, length delimited. Does not implicitly {@link common.v1.OwnerCloseMicRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {common.v1.IOwnerCloseMicRes} message OwnerCloseMicRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerCloseMicRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerCloseMicRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerCloseMicRes} OwnerCloseMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerCloseMicRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerCloseMicRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes an OwnerCloseMicRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerCloseMicRes} OwnerCloseMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerCloseMicRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerCloseMicRes message.
             * @function verify
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerCloseMicRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerCloseMicRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerCloseMicRes} OwnerCloseMicRes
             */
            OwnerCloseMicRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerCloseMicRes)
                    return object;
                var message = new $root.common.v1.OwnerCloseMicRes();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerCloseMicRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {common.v1.OwnerCloseMicRes} message OwnerCloseMicRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerCloseMicRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                return object;
            };

            /**
             * Converts this OwnerCloseMicRes to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerCloseMicRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerCloseMicRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerCloseMicRes
             * @function getTypeUrl
             * @memberof common.v1.OwnerCloseMicRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerCloseMicRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerCloseMicRes";
            };

            return OwnerCloseMicRes;
        })();

        v1.OwnerCloseMicBroadcast = (function() {

            /**
             * Properties of an OwnerCloseMicBroadcast.
             * @memberof common.v1
             * @interface IOwnerCloseMicBroadcast
             * @property {number|Long|null} [bcUid] OwnerCloseMicBroadcast bcUid
             * @property {number|Long|null} [playerId] OwnerCloseMicBroadcast playerId
             */

            /**
             * Constructs a new OwnerCloseMicBroadcast.
             * @memberof common.v1
             * @classdesc Represents an OwnerCloseMicBroadcast.
             * @implements IOwnerCloseMicBroadcast
             * @constructor
             * @param {common.v1.IOwnerCloseMicBroadcast=} [properties] Properties to set
             */
            function OwnerCloseMicBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerCloseMicBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @instance
             */
            OwnerCloseMicBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OwnerCloseMicBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @instance
             */
            OwnerCloseMicBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerCloseMicBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {common.v1.IOwnerCloseMicBroadcast=} [properties] Properties to set
             * @returns {common.v1.OwnerCloseMicBroadcast} OwnerCloseMicBroadcast instance
             */
            OwnerCloseMicBroadcast.create = function create(properties) {
                return new OwnerCloseMicBroadcast(properties);
            };

            /**
             * Encodes the specified OwnerCloseMicBroadcast message. Does not implicitly {@link common.v1.OwnerCloseMicBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {common.v1.IOwnerCloseMicBroadcast} message OwnerCloseMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerCloseMicBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified OwnerCloseMicBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerCloseMicBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {common.v1.IOwnerCloseMicBroadcast} message OwnerCloseMicBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerCloseMicBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerCloseMicBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerCloseMicBroadcast} OwnerCloseMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerCloseMicBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerCloseMicBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes an OwnerCloseMicBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerCloseMicBroadcast} OwnerCloseMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerCloseMicBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerCloseMicBroadcast message.
             * @function verify
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerCloseMicBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerCloseMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerCloseMicBroadcast} OwnerCloseMicBroadcast
             */
            OwnerCloseMicBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerCloseMicBroadcast)
                    return object;
                var message = new $root.common.v1.OwnerCloseMicBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerCloseMicBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {common.v1.OwnerCloseMicBroadcast} message OwnerCloseMicBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerCloseMicBroadcast.toObject = function toObject(message, options) {
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
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this OwnerCloseMicBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerCloseMicBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerCloseMicBroadcast
             * @function getTypeUrl
             * @memberof common.v1.OwnerCloseMicBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerCloseMicBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerCloseMicBroadcast";
            };

            return OwnerCloseMicBroadcast;
        })();

        v1.RoomNewOwnerBroadcast = (function() {

            /**
             * Properties of a RoomNewOwnerBroadcast.
             * @memberof common.v1
             * @interface IRoomNewOwnerBroadcast
             * @property {number|Long|null} [bcUid] RoomNewOwnerBroadcast bcUid
             * @property {number|Long|null} [playerId] RoomNewOwnerBroadcast playerId
             */

            /**
             * Constructs a new RoomNewOwnerBroadcast.
             * @memberof common.v1
             * @classdesc Represents a RoomNewOwnerBroadcast.
             * @implements IRoomNewOwnerBroadcast
             * @constructor
             * @param {common.v1.IRoomNewOwnerBroadcast=} [properties] Properties to set
             */
            function RoomNewOwnerBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoomNewOwnerBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @instance
             */
            RoomNewOwnerBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RoomNewOwnerBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @instance
             */
            RoomNewOwnerBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RoomNewOwnerBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {common.v1.IRoomNewOwnerBroadcast=} [properties] Properties to set
             * @returns {common.v1.RoomNewOwnerBroadcast} RoomNewOwnerBroadcast instance
             */
            RoomNewOwnerBroadcast.create = function create(properties) {
                return new RoomNewOwnerBroadcast(properties);
            };

            /**
             * Encodes the specified RoomNewOwnerBroadcast message. Does not implicitly {@link common.v1.RoomNewOwnerBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {common.v1.IRoomNewOwnerBroadcast} message RoomNewOwnerBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomNewOwnerBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.bcUid);
                return writer;
            };

            /**
             * Encodes the specified RoomNewOwnerBroadcast message, length delimited. Does not implicitly {@link common.v1.RoomNewOwnerBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {common.v1.IRoomNewOwnerBroadcast} message RoomNewOwnerBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomNewOwnerBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomNewOwnerBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.RoomNewOwnerBroadcast} RoomNewOwnerBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomNewOwnerBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.RoomNewOwnerBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            message.bcUid = reader.int64();
                            break;
                        }
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes a RoomNewOwnerBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.RoomNewOwnerBroadcast} RoomNewOwnerBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomNewOwnerBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoomNewOwnerBroadcast message.
             * @function verify
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomNewOwnerBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates a RoomNewOwnerBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.RoomNewOwnerBroadcast} RoomNewOwnerBroadcast
             */
            RoomNewOwnerBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.RoomNewOwnerBroadcast)
                    return object;
                var message = new $root.common.v1.RoomNewOwnerBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a RoomNewOwnerBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {common.v1.RoomNewOwnerBroadcast} message RoomNewOwnerBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomNewOwnerBroadcast.toObject = function toObject(message, options) {
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
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                return object;
            };

            /**
             * Converts this RoomNewOwnerBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomNewOwnerBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomNewOwnerBroadcast
             * @function getTypeUrl
             * @memberof common.v1.RoomNewOwnerBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomNewOwnerBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.RoomNewOwnerBroadcast";
            };

            return RoomNewOwnerBroadcast;
        })();

        v1.PlayerListReq = (function() {

            /**
             * Properties of a PlayerListReq.
             * @memberof common.v1
             * @interface IPlayerListReq
             * @property {number|null} [listType] PlayerListReq listType
             */

            /**
             * Constructs a new PlayerListReq.
             * @memberof common.v1
             * @classdesc Represents a PlayerListReq.
             * @implements IPlayerListReq
             * @constructor
             * @param {common.v1.IPlayerListReq=} [properties] Properties to set
             */
            function PlayerListReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerListReq listType.
             * @member {number} listType
             * @memberof common.v1.PlayerListReq
             * @instance
             */
            PlayerListReq.prototype.listType = 0;

            /**
             * Creates a new PlayerListReq instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {common.v1.IPlayerListReq=} [properties] Properties to set
             * @returns {common.v1.PlayerListReq} PlayerListReq instance
             */
            PlayerListReq.create = function create(properties) {
                return new PlayerListReq(properties);
            };

            /**
             * Encodes the specified PlayerListReq message. Does not implicitly {@link common.v1.PlayerListReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {common.v1.IPlayerListReq} message PlayerListReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerListReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.listType != null && Object.hasOwnProperty.call(message, "listType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.listType);
                return writer;
            };

            /**
             * Encodes the specified PlayerListReq message, length delimited. Does not implicitly {@link common.v1.PlayerListReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {common.v1.IPlayerListReq} message PlayerListReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerListReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerListReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerListReq} PlayerListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerListReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerListReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.listType = reader.int32();
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
             * Decodes a PlayerListReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerListReq} PlayerListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerListReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerListReq message.
             * @function verify
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerListReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.listType != null && message.hasOwnProperty("listType"))
                    if (!$util.isInteger(message.listType))
                        return "listType: integer expected";
                return null;
            };

            /**
             * Creates a PlayerListReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerListReq} PlayerListReq
             */
            PlayerListReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerListReq)
                    return object;
                var message = new $root.common.v1.PlayerListReq();
                if (object.listType != null)
                    message.listType = object.listType | 0;
                return message;
            };

            /**
             * Creates a plain object from a PlayerListReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {common.v1.PlayerListReq} message PlayerListReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerListReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.listType = 0;
                if (message.listType != null && message.hasOwnProperty("listType"))
                    object.listType = message.listType;
                return object;
            };

            /**
             * Converts this PlayerListReq to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerListReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerListReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerListReq
             * @function getTypeUrl
             * @memberof common.v1.PlayerListReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerListReq";
            };

            return PlayerListReq;
        })();

        v1.PlayerListRes = (function() {

            /**
             * Properties of a PlayerListRes.
             * @memberof common.v1
             * @interface IPlayerListRes
             * @property {Array.<common.v1.IPlayerInfo>|null} [players] PlayerListRes players
             * @property {number|null} [listType] PlayerListRes listType
             */

            /**
             * Constructs a new PlayerListRes.
             * @memberof common.v1
             * @classdesc Represents a PlayerListRes.
             * @implements IPlayerListRes
             * @constructor
             * @param {common.v1.IPlayerListRes=} [properties] Properties to set
             */
            function PlayerListRes(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerListRes players.
             * @member {Array.<common.v1.IPlayerInfo>} players
             * @memberof common.v1.PlayerListRes
             * @instance
             */
            PlayerListRes.prototype.players = $util.emptyArray;

            /**
             * PlayerListRes listType.
             * @member {number} listType
             * @memberof common.v1.PlayerListRes
             * @instance
             */
            PlayerListRes.prototype.listType = 0;

            /**
             * Creates a new PlayerListRes instance using the specified properties.
             * @function create
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {common.v1.IPlayerListRes=} [properties] Properties to set
             * @returns {common.v1.PlayerListRes} PlayerListRes instance
             */
            PlayerListRes.create = function create(properties) {
                return new PlayerListRes(properties);
            };

            /**
             * Encodes the specified PlayerListRes message. Does not implicitly {@link common.v1.PlayerListRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {common.v1.IPlayerListRes} message PlayerListRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerListRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.listType != null && Object.hasOwnProperty.call(message, "listType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.listType);
                return writer;
            };

            /**
             * Encodes the specified PlayerListRes message, length delimited. Does not implicitly {@link common.v1.PlayerListRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {common.v1.IPlayerListRes} message PlayerListRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerListRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerListRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.PlayerListRes} PlayerListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerListRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.PlayerListRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.common.v1.PlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.listType = reader.int32();
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
             * Decodes a PlayerListRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.PlayerListRes} PlayerListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerListRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerListRes message.
             * @function verify
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerListRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.common.v1.PlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.listType != null && message.hasOwnProperty("listType"))
                    if (!$util.isInteger(message.listType))
                        return "listType: integer expected";
                return null;
            };

            /**
             * Creates a PlayerListRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.PlayerListRes} PlayerListRes
             */
            PlayerListRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.PlayerListRes)
                    return object;
                var message = new $root.common.v1.PlayerListRes();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".common.v1.PlayerListRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".common.v1.PlayerListRes.players: object expected");
                        message.players[i] = $root.common.v1.PlayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.listType != null)
                    message.listType = object.listType | 0;
                return message;
            };

            /**
             * Creates a plain object from a PlayerListRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {common.v1.PlayerListRes} message PlayerListRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerListRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults)
                    object.listType = 0;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.common.v1.PlayerInfo.toObject(message.players[j], options);
                }
                if (message.listType != null && message.hasOwnProperty("listType"))
                    object.listType = message.listType;
                return object;
            };

            /**
             * Converts this PlayerListRes to JSON.
             * @function toJSON
             * @memberof common.v1.PlayerListRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerListRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerListRes
             * @function getTypeUrl
             * @memberof common.v1.PlayerListRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.PlayerListRes";
            };

            return PlayerListRes;
        })();

        v1.SetRoomModeReq = (function() {

            /**
             * Properties of a SetRoomModeReq.
             * @memberof common.v1
             * @interface ISetRoomModeReq
             * @property {number|null} [mode] SetRoomModeReq mode
             */

            /**
             * Constructs a new SetRoomModeReq.
             * @memberof common.v1
             * @classdesc Represents a SetRoomModeReq.
             * @implements ISetRoomModeReq
             * @constructor
             * @param {common.v1.ISetRoomModeReq=} [properties] Properties to set
             */
            function SetRoomModeReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetRoomModeReq mode.
             * @member {number} mode
             * @memberof common.v1.SetRoomModeReq
             * @instance
             */
            SetRoomModeReq.prototype.mode = 0;

            /**
             * Creates a new SetRoomModeReq instance using the specified properties.
             * @function create
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {common.v1.ISetRoomModeReq=} [properties] Properties to set
             * @returns {common.v1.SetRoomModeReq} SetRoomModeReq instance
             */
            SetRoomModeReq.create = function create(properties) {
                return new SetRoomModeReq(properties);
            };

            /**
             * Encodes the specified SetRoomModeReq message. Does not implicitly {@link common.v1.SetRoomModeReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {common.v1.ISetRoomModeReq} message SetRoomModeReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRoomModeReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
                return writer;
            };

            /**
             * Encodes the specified SetRoomModeReq message, length delimited. Does not implicitly {@link common.v1.SetRoomModeReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {common.v1.ISetRoomModeReq} message SetRoomModeReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRoomModeReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetRoomModeReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.SetRoomModeReq} SetRoomModeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRoomModeReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.SetRoomModeReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.mode = reader.int32();
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
             * Decodes a SetRoomModeReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.SetRoomModeReq} SetRoomModeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRoomModeReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetRoomModeReq message.
             * @function verify
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetRoomModeReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.mode != null && message.hasOwnProperty("mode"))
                    if (!$util.isInteger(message.mode))
                        return "mode: integer expected";
                return null;
            };

            /**
             * Creates a SetRoomModeReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.SetRoomModeReq} SetRoomModeReq
             */
            SetRoomModeReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.SetRoomModeReq)
                    return object;
                var message = new $root.common.v1.SetRoomModeReq();
                if (object.mode != null)
                    message.mode = object.mode | 0;
                return message;
            };

            /**
             * Creates a plain object from a SetRoomModeReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {common.v1.SetRoomModeReq} message SetRoomModeReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetRoomModeReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.mode = 0;
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode = message.mode;
                return object;
            };

            /**
             * Converts this SetRoomModeReq to JSON.
             * @function toJSON
             * @memberof common.v1.SetRoomModeReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetRoomModeReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetRoomModeReq
             * @function getTypeUrl
             * @memberof common.v1.SetRoomModeReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetRoomModeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.SetRoomModeReq";
            };

            return SetRoomModeReq;
        })();

        v1.SetRoomModeRes = (function() {

            /**
             * Properties of a SetRoomModeRes.
             * @memberof common.v1
             * @interface ISetRoomModeRes
             * @property {number|null} [mode] SetRoomModeRes mode
             * @property {number|null} [playersCount] SetRoomModeRes playersCount
             */

            /**
             * Constructs a new SetRoomModeRes.
             * @memberof common.v1
             * @classdesc Represents a SetRoomModeRes.
             * @implements ISetRoomModeRes
             * @constructor
             * @param {common.v1.ISetRoomModeRes=} [properties] Properties to set
             */
            function SetRoomModeRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetRoomModeRes mode.
             * @member {number} mode
             * @memberof common.v1.SetRoomModeRes
             * @instance
             */
            SetRoomModeRes.prototype.mode = 0;

            /**
             * SetRoomModeRes playersCount.
             * @member {number} playersCount
             * @memberof common.v1.SetRoomModeRes
             * @instance
             */
            SetRoomModeRes.prototype.playersCount = 0;

            /**
             * Creates a new SetRoomModeRes instance using the specified properties.
             * @function create
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {common.v1.ISetRoomModeRes=} [properties] Properties to set
             * @returns {common.v1.SetRoomModeRes} SetRoomModeRes instance
             */
            SetRoomModeRes.create = function create(properties) {
                return new SetRoomModeRes(properties);
            };

            /**
             * Encodes the specified SetRoomModeRes message. Does not implicitly {@link common.v1.SetRoomModeRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {common.v1.ISetRoomModeRes} message SetRoomModeRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRoomModeRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playersCount);
                return writer;
            };

            /**
             * Encodes the specified SetRoomModeRes message, length delimited. Does not implicitly {@link common.v1.SetRoomModeRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {common.v1.ISetRoomModeRes} message SetRoomModeRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRoomModeRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetRoomModeRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.SetRoomModeRes} SetRoomModeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRoomModeRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.SetRoomModeRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.mode = reader.int32();
                            break;
                        }
                    case 2: {
                            message.playersCount = reader.int32();
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
             * Decodes a SetRoomModeRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.SetRoomModeRes} SetRoomModeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRoomModeRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetRoomModeRes message.
             * @function verify
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetRoomModeRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.mode != null && message.hasOwnProperty("mode"))
                    if (!$util.isInteger(message.mode))
                        return "mode: integer expected";
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    if (!$util.isInteger(message.playersCount))
                        return "playersCount: integer expected";
                return null;
            };

            /**
             * Creates a SetRoomModeRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.SetRoomModeRes} SetRoomModeRes
             */
            SetRoomModeRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.SetRoomModeRes)
                    return object;
                var message = new $root.common.v1.SetRoomModeRes();
                if (object.mode != null)
                    message.mode = object.mode | 0;
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a SetRoomModeRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {common.v1.SetRoomModeRes} message SetRoomModeRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetRoomModeRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.mode = 0;
                    object.playersCount = 0;
                }
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode = message.mode;
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                return object;
            };

            /**
             * Converts this SetRoomModeRes to JSON.
             * @function toJSON
             * @memberof common.v1.SetRoomModeRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetRoomModeRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetRoomModeRes
             * @function getTypeUrl
             * @memberof common.v1.SetRoomModeRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetRoomModeRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.SetRoomModeRes";
            };

            return SetRoomModeRes;
        })();

        v1.SetRoomModeBroadcast = (function() {

            /**
             * Properties of a SetRoomModeBroadcast.
             * @memberof common.v1
             * @interface ISetRoomModeBroadcast
             * @property {number|Long|null} [bcUid] SetRoomModeBroadcast bcUid
             * @property {number|null} [mode] SetRoomModeBroadcast mode
             * @property {number|null} [playersCount] SetRoomModeBroadcast playersCount
             */

            /**
             * Constructs a new SetRoomModeBroadcast.
             * @memberof common.v1
             * @classdesc Represents a SetRoomModeBroadcast.
             * @implements ISetRoomModeBroadcast
             * @constructor
             * @param {common.v1.ISetRoomModeBroadcast=} [properties] Properties to set
             */
            function SetRoomModeBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetRoomModeBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.SetRoomModeBroadcast
             * @instance
             */
            SetRoomModeBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SetRoomModeBroadcast mode.
             * @member {number} mode
             * @memberof common.v1.SetRoomModeBroadcast
             * @instance
             */
            SetRoomModeBroadcast.prototype.mode = 0;

            /**
             * SetRoomModeBroadcast playersCount.
             * @member {number} playersCount
             * @memberof common.v1.SetRoomModeBroadcast
             * @instance
             */
            SetRoomModeBroadcast.prototype.playersCount = 0;

            /**
             * Creates a new SetRoomModeBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {common.v1.ISetRoomModeBroadcast=} [properties] Properties to set
             * @returns {common.v1.SetRoomModeBroadcast} SetRoomModeBroadcast instance
             */
            SetRoomModeBroadcast.create = function create(properties) {
                return new SetRoomModeBroadcast(properties);
            };

            /**
             * Encodes the specified SetRoomModeBroadcast message. Does not implicitly {@link common.v1.SetRoomModeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {common.v1.ISetRoomModeBroadcast} message SetRoomModeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRoomModeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mode);
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playersCount);
                return writer;
            };

            /**
             * Encodes the specified SetRoomModeBroadcast message, length delimited. Does not implicitly {@link common.v1.SetRoomModeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {common.v1.ISetRoomModeBroadcast} message SetRoomModeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRoomModeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetRoomModeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.SetRoomModeBroadcast} SetRoomModeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRoomModeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.SetRoomModeBroadcast();
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
                            message.mode = reader.int32();
                            break;
                        }
                    case 3: {
                            message.playersCount = reader.int32();
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
             * Decodes a SetRoomModeBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.SetRoomModeBroadcast} SetRoomModeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRoomModeBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetRoomModeBroadcast message.
             * @function verify
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetRoomModeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.mode != null && message.hasOwnProperty("mode"))
                    if (!$util.isInteger(message.mode))
                        return "mode: integer expected";
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    if (!$util.isInteger(message.playersCount))
                        return "playersCount: integer expected";
                return null;
            };

            /**
             * Creates a SetRoomModeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.SetRoomModeBroadcast} SetRoomModeBroadcast
             */
            SetRoomModeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.SetRoomModeBroadcast)
                    return object;
                var message = new $root.common.v1.SetRoomModeBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.mode != null)
                    message.mode = object.mode | 0;
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a SetRoomModeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {common.v1.SetRoomModeBroadcast} message SetRoomModeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetRoomModeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    object.mode = 0;
                    object.playersCount = 0;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode = message.mode;
                if (message.playersCount != null && message.hasOwnProperty("playersCount"))
                    object.playersCount = message.playersCount;
                return object;
            };

            /**
             * Converts this SetRoomModeBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.SetRoomModeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetRoomModeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetRoomModeBroadcast
             * @function getTypeUrl
             * @memberof common.v1.SetRoomModeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetRoomModeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.SetRoomModeBroadcast";
            };

            return SetRoomModeBroadcast;
        })();

        v1.OwnerKickOutOfRoomReq = (function() {

            /**
             * Properties of an OwnerKickOutOfRoomReq.
             * @memberof common.v1
             * @interface IOwnerKickOutOfRoomReq
             * @property {number|Long|null} [playerId] OwnerKickOutOfRoomReq playerId
             */

            /**
             * Constructs a new OwnerKickOutOfRoomReq.
             * @memberof common.v1
             * @classdesc Represents an OwnerKickOutOfRoomReq.
             * @implements IOwnerKickOutOfRoomReq
             * @constructor
             * @param {common.v1.IOwnerKickOutOfRoomReq=} [properties] Properties to set
             */
            function OwnerKickOutOfRoomReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerKickOutOfRoomReq playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @instance
             */
            OwnerKickOutOfRoomReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerKickOutOfRoomReq instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomReq=} [properties] Properties to set
             * @returns {common.v1.OwnerKickOutOfRoomReq} OwnerKickOutOfRoomReq instance
             */
            OwnerKickOutOfRoomReq.create = function create(properties) {
                return new OwnerKickOutOfRoomReq(properties);
            };

            /**
             * Encodes the specified OwnerKickOutOfRoomReq message. Does not implicitly {@link common.v1.OwnerKickOutOfRoomReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomReq} message OwnerKickOutOfRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOutOfRoomReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerKickOutOfRoomReq message, length delimited. Does not implicitly {@link common.v1.OwnerKickOutOfRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomReq} message OwnerKickOutOfRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOutOfRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerKickOutOfRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerKickOutOfRoomReq} OwnerKickOutOfRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOutOfRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerKickOutOfRoomReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes an OwnerKickOutOfRoomReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerKickOutOfRoomReq} OwnerKickOutOfRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOutOfRoomReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerKickOutOfRoomReq message.
             * @function verify
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerKickOutOfRoomReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerKickOutOfRoomReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerKickOutOfRoomReq} OwnerKickOutOfRoomReq
             */
            OwnerKickOutOfRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerKickOutOfRoomReq)
                    return object;
                var message = new $root.common.v1.OwnerKickOutOfRoomReq();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerKickOutOfRoomReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {common.v1.OwnerKickOutOfRoomReq} message OwnerKickOutOfRoomReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerKickOutOfRoomReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                return object;
            };

            /**
             * Converts this OwnerKickOutOfRoomReq to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerKickOutOfRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerKickOutOfRoomReq
             * @function getTypeUrl
             * @memberof common.v1.OwnerKickOutOfRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerKickOutOfRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerKickOutOfRoomReq";
            };

            return OwnerKickOutOfRoomReq;
        })();

        v1.OwnerKickOutOfRoomRes = (function() {

            /**
             * Properties of an OwnerKickOutOfRoomRes.
             * @memberof common.v1
             * @interface IOwnerKickOutOfRoomRes
             * @property {number|Long|null} [playerId] OwnerKickOutOfRoomRes playerId
             */

            /**
             * Constructs a new OwnerKickOutOfRoomRes.
             * @memberof common.v1
             * @classdesc Represents an OwnerKickOutOfRoomRes.
             * @implements IOwnerKickOutOfRoomRes
             * @constructor
             * @param {common.v1.IOwnerKickOutOfRoomRes=} [properties] Properties to set
             */
            function OwnerKickOutOfRoomRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerKickOutOfRoomRes playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @instance
             */
            OwnerKickOutOfRoomRes.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerKickOutOfRoomRes instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomRes=} [properties] Properties to set
             * @returns {common.v1.OwnerKickOutOfRoomRes} OwnerKickOutOfRoomRes instance
             */
            OwnerKickOutOfRoomRes.create = function create(properties) {
                return new OwnerKickOutOfRoomRes(properties);
            };

            /**
             * Encodes the specified OwnerKickOutOfRoomRes message. Does not implicitly {@link common.v1.OwnerKickOutOfRoomRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomRes} message OwnerKickOutOfRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOutOfRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerKickOutOfRoomRes message, length delimited. Does not implicitly {@link common.v1.OwnerKickOutOfRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomRes} message OwnerKickOutOfRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOutOfRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerKickOutOfRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerKickOutOfRoomRes} OwnerKickOutOfRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOutOfRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerKickOutOfRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes an OwnerKickOutOfRoomRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerKickOutOfRoomRes} OwnerKickOutOfRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOutOfRoomRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerKickOutOfRoomRes message.
             * @function verify
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerKickOutOfRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerKickOutOfRoomRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerKickOutOfRoomRes} OwnerKickOutOfRoomRes
             */
            OwnerKickOutOfRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerKickOutOfRoomRes)
                    return object;
                var message = new $root.common.v1.OwnerKickOutOfRoomRes();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerKickOutOfRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {common.v1.OwnerKickOutOfRoomRes} message OwnerKickOutOfRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerKickOutOfRoomRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                return object;
            };

            /**
             * Converts this OwnerKickOutOfRoomRes to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerKickOutOfRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerKickOutOfRoomRes
             * @function getTypeUrl
             * @memberof common.v1.OwnerKickOutOfRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerKickOutOfRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerKickOutOfRoomRes";
            };

            return OwnerKickOutOfRoomRes;
        })();

        v1.OwnerKickOutOfRoomBroadcast = (function() {

            /**
             * Properties of an OwnerKickOutOfRoomBroadcast.
             * @memberof common.v1
             * @interface IOwnerKickOutOfRoomBroadcast
             * @property {number|Long|null} [bcUid] OwnerKickOutOfRoomBroadcast bcUid
             * @property {number|Long|null} [playerId] OwnerKickOutOfRoomBroadcast playerId
             */

            /**
             * Constructs a new OwnerKickOutOfRoomBroadcast.
             * @memberof common.v1
             * @classdesc Represents an OwnerKickOutOfRoomBroadcast.
             * @implements IOwnerKickOutOfRoomBroadcast
             * @constructor
             * @param {common.v1.IOwnerKickOutOfRoomBroadcast=} [properties] Properties to set
             */
            function OwnerKickOutOfRoomBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerKickOutOfRoomBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @instance
             */
            OwnerKickOutOfRoomBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OwnerKickOutOfRoomBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @instance
             */
            OwnerKickOutOfRoomBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerKickOutOfRoomBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomBroadcast=} [properties] Properties to set
             * @returns {common.v1.OwnerKickOutOfRoomBroadcast} OwnerKickOutOfRoomBroadcast instance
             */
            OwnerKickOutOfRoomBroadcast.create = function create(properties) {
                return new OwnerKickOutOfRoomBroadcast(properties);
            };

            /**
             * Encodes the specified OwnerKickOutOfRoomBroadcast message. Does not implicitly {@link common.v1.OwnerKickOutOfRoomBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomBroadcast} message OwnerKickOutOfRoomBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOutOfRoomBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerKickOutOfRoomBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerKickOutOfRoomBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {common.v1.IOwnerKickOutOfRoomBroadcast} message OwnerKickOutOfRoomBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOutOfRoomBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerKickOutOfRoomBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerKickOutOfRoomBroadcast} OwnerKickOutOfRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOutOfRoomBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerKickOutOfRoomBroadcast();
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
                            message.playerId = reader.int64();
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
             * Decodes an OwnerKickOutOfRoomBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerKickOutOfRoomBroadcast} OwnerKickOutOfRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOutOfRoomBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerKickOutOfRoomBroadcast message.
             * @function verify
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerKickOutOfRoomBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerKickOutOfRoomBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerKickOutOfRoomBroadcast} OwnerKickOutOfRoomBroadcast
             */
            OwnerKickOutOfRoomBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerKickOutOfRoomBroadcast)
                    return object;
                var message = new $root.common.v1.OwnerKickOutOfRoomBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerKickOutOfRoomBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {common.v1.OwnerKickOutOfRoomBroadcast} message OwnerKickOutOfRoomBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerKickOutOfRoomBroadcast.toObject = function toObject(message, options) {
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
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                return object;
            };

            /**
             * Converts this OwnerKickOutOfRoomBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerKickOutOfRoomBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerKickOutOfRoomBroadcast
             * @function getTypeUrl
             * @memberof common.v1.OwnerKickOutOfRoomBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerKickOutOfRoomBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerKickOutOfRoomBroadcast";
            };

            return OwnerKickOutOfRoomBroadcast;
        })();

        v1.OwnerKickOffSeatReq = (function() {

            /**
             * Properties of an OwnerKickOffSeatReq.
             * @memberof common.v1
             * @interface IOwnerKickOffSeatReq
             * @property {number|Long|null} [playerId] OwnerKickOffSeatReq playerId
             */

            /**
             * Constructs a new OwnerKickOffSeatReq.
             * @memberof common.v1
             * @classdesc Represents an OwnerKickOffSeatReq.
             * @implements IOwnerKickOffSeatReq
             * @constructor
             * @param {common.v1.IOwnerKickOffSeatReq=} [properties] Properties to set
             */
            function OwnerKickOffSeatReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerKickOffSeatReq playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerKickOffSeatReq
             * @instance
             */
            OwnerKickOffSeatReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerKickOffSeatReq instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {common.v1.IOwnerKickOffSeatReq=} [properties] Properties to set
             * @returns {common.v1.OwnerKickOffSeatReq} OwnerKickOffSeatReq instance
             */
            OwnerKickOffSeatReq.create = function create(properties) {
                return new OwnerKickOffSeatReq(properties);
            };

            /**
             * Encodes the specified OwnerKickOffSeatReq message. Does not implicitly {@link common.v1.OwnerKickOffSeatReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {common.v1.IOwnerKickOffSeatReq} message OwnerKickOffSeatReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOffSeatReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerKickOffSeatReq message, length delimited. Does not implicitly {@link common.v1.OwnerKickOffSeatReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {common.v1.IOwnerKickOffSeatReq} message OwnerKickOffSeatReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOffSeatReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerKickOffSeatReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerKickOffSeatReq} OwnerKickOffSeatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOffSeatReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerKickOffSeatReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes an OwnerKickOffSeatReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerKickOffSeatReq} OwnerKickOffSeatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOffSeatReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerKickOffSeatReq message.
             * @function verify
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerKickOffSeatReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerKickOffSeatReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerKickOffSeatReq} OwnerKickOffSeatReq
             */
            OwnerKickOffSeatReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerKickOffSeatReq)
                    return object;
                var message = new $root.common.v1.OwnerKickOffSeatReq();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerKickOffSeatReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {common.v1.OwnerKickOffSeatReq} message OwnerKickOffSeatReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerKickOffSeatReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                return object;
            };

            /**
             * Converts this OwnerKickOffSeatReq to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerKickOffSeatReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerKickOffSeatReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerKickOffSeatReq
             * @function getTypeUrl
             * @memberof common.v1.OwnerKickOffSeatReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerKickOffSeatReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerKickOffSeatReq";
            };

            return OwnerKickOffSeatReq;
        })();

        v1.OwnerKickOffSeatRes = (function() {

            /**
             * Properties of an OwnerKickOffSeatRes.
             * @memberof common.v1
             * @interface IOwnerKickOffSeatRes
             * @property {number|Long|null} [playerId] OwnerKickOffSeatRes playerId
             */

            /**
             * Constructs a new OwnerKickOffSeatRes.
             * @memberof common.v1
             * @classdesc Represents an OwnerKickOffSeatRes.
             * @implements IOwnerKickOffSeatRes
             * @constructor
             * @param {common.v1.IOwnerKickOffSeatRes=} [properties] Properties to set
             */
            function OwnerKickOffSeatRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerKickOffSeatRes playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerKickOffSeatRes
             * @instance
             */
            OwnerKickOffSeatRes.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerKickOffSeatRes instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {common.v1.IOwnerKickOffSeatRes=} [properties] Properties to set
             * @returns {common.v1.OwnerKickOffSeatRes} OwnerKickOffSeatRes instance
             */
            OwnerKickOffSeatRes.create = function create(properties) {
                return new OwnerKickOffSeatRes(properties);
            };

            /**
             * Encodes the specified OwnerKickOffSeatRes message. Does not implicitly {@link common.v1.OwnerKickOffSeatRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {common.v1.IOwnerKickOffSeatRes} message OwnerKickOffSeatRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOffSeatRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerKickOffSeatRes message, length delimited. Does not implicitly {@link common.v1.OwnerKickOffSeatRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {common.v1.IOwnerKickOffSeatRes} message OwnerKickOffSeatRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOffSeatRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerKickOffSeatRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerKickOffSeatRes} OwnerKickOffSeatRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOffSeatRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerKickOffSeatRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerId = reader.int64();
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
             * Decodes an OwnerKickOffSeatRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerKickOffSeatRes} OwnerKickOffSeatRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOffSeatRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerKickOffSeatRes message.
             * @function verify
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerKickOffSeatRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerKickOffSeatRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerKickOffSeatRes} OwnerKickOffSeatRes
             */
            OwnerKickOffSeatRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerKickOffSeatRes)
                    return object;
                var message = new $root.common.v1.OwnerKickOffSeatRes();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerKickOffSeatRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {common.v1.OwnerKickOffSeatRes} message OwnerKickOffSeatRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerKickOffSeatRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                return object;
            };

            /**
             * Converts this OwnerKickOffSeatRes to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerKickOffSeatRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerKickOffSeatRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerKickOffSeatRes
             * @function getTypeUrl
             * @memberof common.v1.OwnerKickOffSeatRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerKickOffSeatRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerKickOffSeatRes";
            };

            return OwnerKickOffSeatRes;
        })();

        v1.OwnerKickOffSeatBroadcast = (function() {

            /**
             * Properties of an OwnerKickOffSeatBroadcast.
             * @memberof common.v1
             * @interface IOwnerKickOffSeatBroadcast
             * @property {number|Long|null} [bcUid] OwnerKickOffSeatBroadcast bcUid
             * @property {number|Long|null} [playerId] OwnerKickOffSeatBroadcast playerId
             */

            /**
             * Constructs a new OwnerKickOffSeatBroadcast.
             * @memberof common.v1
             * @classdesc Represents an OwnerKickOffSeatBroadcast.
             * @implements IOwnerKickOffSeatBroadcast
             * @constructor
             * @param {common.v1.IOwnerKickOffSeatBroadcast=} [properties] Properties to set
             */
            function OwnerKickOffSeatBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerKickOffSeatBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @instance
             */
            OwnerKickOffSeatBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OwnerKickOffSeatBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @instance
             */
            OwnerKickOffSeatBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new OwnerKickOffSeatBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {common.v1.IOwnerKickOffSeatBroadcast=} [properties] Properties to set
             * @returns {common.v1.OwnerKickOffSeatBroadcast} OwnerKickOffSeatBroadcast instance
             */
            OwnerKickOffSeatBroadcast.create = function create(properties) {
                return new OwnerKickOffSeatBroadcast(properties);
            };

            /**
             * Encodes the specified OwnerKickOffSeatBroadcast message. Does not implicitly {@link common.v1.OwnerKickOffSeatBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {common.v1.IOwnerKickOffSeatBroadcast} message OwnerKickOffSeatBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOffSeatBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
                return writer;
            };

            /**
             * Encodes the specified OwnerKickOffSeatBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerKickOffSeatBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {common.v1.IOwnerKickOffSeatBroadcast} message OwnerKickOffSeatBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerKickOffSeatBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerKickOffSeatBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerKickOffSeatBroadcast} OwnerKickOffSeatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOffSeatBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerKickOffSeatBroadcast();
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
                            message.playerId = reader.int64();
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
             * Decodes an OwnerKickOffSeatBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerKickOffSeatBroadcast} OwnerKickOffSeatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerKickOffSeatBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerKickOffSeatBroadcast message.
             * @function verify
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerKickOffSeatBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OwnerKickOffSeatBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerKickOffSeatBroadcast} OwnerKickOffSeatBroadcast
             */
            OwnerKickOffSeatBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerKickOffSeatBroadcast)
                    return object;
                var message = new $root.common.v1.OwnerKickOffSeatBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an OwnerKickOffSeatBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {common.v1.OwnerKickOffSeatBroadcast} message OwnerKickOffSeatBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerKickOffSeatBroadcast.toObject = function toObject(message, options) {
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
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                return object;
            };

            /**
             * Converts this OwnerKickOffSeatBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerKickOffSeatBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerKickOffSeatBroadcast
             * @function getTypeUrl
             * @memberof common.v1.OwnerKickOffSeatBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerKickOffSeatBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerKickOffSeatBroadcast";
            };

            return OwnerKickOffSeatBroadcast;
        })();

        v1.OwnerChangeScoreReq = (function() {

            /**
             * Properties of an OwnerChangeScoreReq.
             * @memberof common.v1
             * @interface IOwnerChangeScoreReq
             * @property {number|null} [newScore] OwnerChangeScoreReq newScore
             */

            /**
             * Constructs a new OwnerChangeScoreReq.
             * @memberof common.v1
             * @classdesc Represents an OwnerChangeScoreReq.
             * @implements IOwnerChangeScoreReq
             * @constructor
             * @param {common.v1.IOwnerChangeScoreReq=} [properties] Properties to set
             */
            function OwnerChangeScoreReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerChangeScoreReq newScore.
             * @member {number} newScore
             * @memberof common.v1.OwnerChangeScoreReq
             * @instance
             */
            OwnerChangeScoreReq.prototype.newScore = 0;

            /**
             * Creates a new OwnerChangeScoreReq instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {common.v1.IOwnerChangeScoreReq=} [properties] Properties to set
             * @returns {common.v1.OwnerChangeScoreReq} OwnerChangeScoreReq instance
             */
            OwnerChangeScoreReq.create = function create(properties) {
                return new OwnerChangeScoreReq(properties);
            };

            /**
             * Encodes the specified OwnerChangeScoreReq message. Does not implicitly {@link common.v1.OwnerChangeScoreReq.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {common.v1.IOwnerChangeScoreReq} message OwnerChangeScoreReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerChangeScoreReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.newScore != null && Object.hasOwnProperty.call(message, "newScore"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.newScore);
                return writer;
            };

            /**
             * Encodes the specified OwnerChangeScoreReq message, length delimited. Does not implicitly {@link common.v1.OwnerChangeScoreReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {common.v1.IOwnerChangeScoreReq} message OwnerChangeScoreReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerChangeScoreReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerChangeScoreReq message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerChangeScoreReq} OwnerChangeScoreReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerChangeScoreReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerChangeScoreReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.newScore = reader.int32();
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
             * Decodes an OwnerChangeScoreReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerChangeScoreReq} OwnerChangeScoreReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerChangeScoreReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerChangeScoreReq message.
             * @function verify
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerChangeScoreReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.newScore != null && message.hasOwnProperty("newScore"))
                    if (!$util.isInteger(message.newScore))
                        return "newScore: integer expected";
                return null;
            };

            /**
             * Creates an OwnerChangeScoreReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerChangeScoreReq} OwnerChangeScoreReq
             */
            OwnerChangeScoreReq.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerChangeScoreReq)
                    return object;
                var message = new $root.common.v1.OwnerChangeScoreReq();
                if (object.newScore != null)
                    message.newScore = object.newScore | 0;
                return message;
            };

            /**
             * Creates a plain object from an OwnerChangeScoreReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {common.v1.OwnerChangeScoreReq} message OwnerChangeScoreReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerChangeScoreReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.newScore = 0;
                if (message.newScore != null && message.hasOwnProperty("newScore"))
                    object.newScore = message.newScore;
                return object;
            };

            /**
             * Converts this OwnerChangeScoreReq to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerChangeScoreReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerChangeScoreReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerChangeScoreReq
             * @function getTypeUrl
             * @memberof common.v1.OwnerChangeScoreReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerChangeScoreReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerChangeScoreReq";
            };

            return OwnerChangeScoreReq;
        })();

        v1.OwnerChangeScoreRes = (function() {

            /**
             * Properties of an OwnerChangeScoreRes.
             * @memberof common.v1
             * @interface IOwnerChangeScoreRes
             * @property {number|null} [newScore] OwnerChangeScoreRes newScore
             */

            /**
             * Constructs a new OwnerChangeScoreRes.
             * @memberof common.v1
             * @classdesc Represents an OwnerChangeScoreRes.
             * @implements IOwnerChangeScoreRes
             * @constructor
             * @param {common.v1.IOwnerChangeScoreRes=} [properties] Properties to set
             */
            function OwnerChangeScoreRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerChangeScoreRes newScore.
             * @member {number} newScore
             * @memberof common.v1.OwnerChangeScoreRes
             * @instance
             */
            OwnerChangeScoreRes.prototype.newScore = 0;

            /**
             * Creates a new OwnerChangeScoreRes instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {common.v1.IOwnerChangeScoreRes=} [properties] Properties to set
             * @returns {common.v1.OwnerChangeScoreRes} OwnerChangeScoreRes instance
             */
            OwnerChangeScoreRes.create = function create(properties) {
                return new OwnerChangeScoreRes(properties);
            };

            /**
             * Encodes the specified OwnerChangeScoreRes message. Does not implicitly {@link common.v1.OwnerChangeScoreRes.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {common.v1.IOwnerChangeScoreRes} message OwnerChangeScoreRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerChangeScoreRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.newScore != null && Object.hasOwnProperty.call(message, "newScore"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.newScore);
                return writer;
            };

            /**
             * Encodes the specified OwnerChangeScoreRes message, length delimited. Does not implicitly {@link common.v1.OwnerChangeScoreRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {common.v1.IOwnerChangeScoreRes} message OwnerChangeScoreRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerChangeScoreRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerChangeScoreRes message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerChangeScoreRes} OwnerChangeScoreRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerChangeScoreRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerChangeScoreRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.newScore = reader.int32();
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
             * Decodes an OwnerChangeScoreRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerChangeScoreRes} OwnerChangeScoreRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerChangeScoreRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerChangeScoreRes message.
             * @function verify
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerChangeScoreRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.newScore != null && message.hasOwnProperty("newScore"))
                    if (!$util.isInteger(message.newScore))
                        return "newScore: integer expected";
                return null;
            };

            /**
             * Creates an OwnerChangeScoreRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerChangeScoreRes} OwnerChangeScoreRes
             */
            OwnerChangeScoreRes.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerChangeScoreRes)
                    return object;
                var message = new $root.common.v1.OwnerChangeScoreRes();
                if (object.newScore != null)
                    message.newScore = object.newScore | 0;
                return message;
            };

            /**
             * Creates a plain object from an OwnerChangeScoreRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {common.v1.OwnerChangeScoreRes} message OwnerChangeScoreRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerChangeScoreRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.newScore = 0;
                if (message.newScore != null && message.hasOwnProperty("newScore"))
                    object.newScore = message.newScore;
                return object;
            };

            /**
             * Converts this OwnerChangeScoreRes to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerChangeScoreRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerChangeScoreRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerChangeScoreRes
             * @function getTypeUrl
             * @memberof common.v1.OwnerChangeScoreRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerChangeScoreRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerChangeScoreRes";
            };

            return OwnerChangeScoreRes;
        })();

        v1.OwnerChangeScoreBroadcast = (function() {

            /**
             * Properties of an OwnerChangeScoreBroadcast.
             * @memberof common.v1
             * @interface IOwnerChangeScoreBroadcast
             * @property {number|Long|null} [bcUid] OwnerChangeScoreBroadcast bcUid
             * @property {number|null} [newScore] OwnerChangeScoreBroadcast newScore
             */

            /**
             * Constructs a new OwnerChangeScoreBroadcast.
             * @memberof common.v1
             * @classdesc Represents an OwnerChangeScoreBroadcast.
             * @implements IOwnerChangeScoreBroadcast
             * @constructor
             * @param {common.v1.IOwnerChangeScoreBroadcast=} [properties] Properties to set
             */
            function OwnerChangeScoreBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OwnerChangeScoreBroadcast bcUid.
             * @member {number|Long} bcUid
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @instance
             */
            OwnerChangeScoreBroadcast.prototype.bcUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * OwnerChangeScoreBroadcast newScore.
             * @member {number} newScore
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @instance
             */
            OwnerChangeScoreBroadcast.prototype.newScore = 0;

            /**
             * Creates a new OwnerChangeScoreBroadcast instance using the specified properties.
             * @function create
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {common.v1.IOwnerChangeScoreBroadcast=} [properties] Properties to set
             * @returns {common.v1.OwnerChangeScoreBroadcast} OwnerChangeScoreBroadcast instance
             */
            OwnerChangeScoreBroadcast.create = function create(properties) {
                return new OwnerChangeScoreBroadcast(properties);
            };

            /**
             * Encodes the specified OwnerChangeScoreBroadcast message. Does not implicitly {@link common.v1.OwnerChangeScoreBroadcast.verify|verify} messages.
             * @function encode
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {common.v1.IOwnerChangeScoreBroadcast} message OwnerChangeScoreBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerChangeScoreBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bcUid != null && Object.hasOwnProperty.call(message, "bcUid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bcUid);
                if (message.newScore != null && Object.hasOwnProperty.call(message, "newScore"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.newScore);
                return writer;
            };

            /**
             * Encodes the specified OwnerChangeScoreBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerChangeScoreBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {common.v1.IOwnerChangeScoreBroadcast} message OwnerChangeScoreBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnerChangeScoreBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OwnerChangeScoreBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.OwnerChangeScoreBroadcast} OwnerChangeScoreBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerChangeScoreBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.OwnerChangeScoreBroadcast();
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
                            message.newScore = reader.int32();
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
             * Decodes an OwnerChangeScoreBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.OwnerChangeScoreBroadcast} OwnerChangeScoreBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnerChangeScoreBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OwnerChangeScoreBroadcast message.
             * @function verify
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnerChangeScoreBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (!$util.isInteger(message.bcUid) && !(message.bcUid && $util.isInteger(message.bcUid.low) && $util.isInteger(message.bcUid.high)))
                        return "bcUid: integer|Long expected";
                if (message.newScore != null && message.hasOwnProperty("newScore"))
                    if (!$util.isInteger(message.newScore))
                        return "newScore: integer expected";
                return null;
            };

            /**
             * Creates an OwnerChangeScoreBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.OwnerChangeScoreBroadcast} OwnerChangeScoreBroadcast
             */
            OwnerChangeScoreBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.OwnerChangeScoreBroadcast)
                    return object;
                var message = new $root.common.v1.OwnerChangeScoreBroadcast();
                if (object.bcUid != null)
                    if ($util.Long)
                        (message.bcUid = $util.Long.fromValue(object.bcUid)).unsigned = false;
                    else if (typeof object.bcUid === "string")
                        message.bcUid = parseInt(object.bcUid, 10);
                    else if (typeof object.bcUid === "number")
                        message.bcUid = object.bcUid;
                    else if (typeof object.bcUid === "object")
                        message.bcUid = new $util.LongBits(object.bcUid.low >>> 0, object.bcUid.high >>> 0).toNumber();
                if (object.newScore != null)
                    message.newScore = object.newScore | 0;
                return message;
            };

            /**
             * Creates a plain object from an OwnerChangeScoreBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {common.v1.OwnerChangeScoreBroadcast} message OwnerChangeScoreBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnerChangeScoreBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bcUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bcUid = options.longs === String ? "0" : 0;
                    object.newScore = 0;
                }
                if (message.bcUid != null && message.hasOwnProperty("bcUid"))
                    if (typeof message.bcUid === "number")
                        object.bcUid = options.longs === String ? String(message.bcUid) : message.bcUid;
                    else
                        object.bcUid = options.longs === String ? $util.Long.prototype.toString.call(message.bcUid) : options.longs === Number ? new $util.LongBits(message.bcUid.low >>> 0, message.bcUid.high >>> 0).toNumber() : message.bcUid;
                if (message.newScore != null && message.hasOwnProperty("newScore"))
                    object.newScore = message.newScore;
                return object;
            };

            /**
             * Converts this OwnerChangeScoreBroadcast to JSON.
             * @function toJSON
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnerChangeScoreBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OwnerChangeScoreBroadcast
             * @function getTypeUrl
             * @memberof common.v1.OwnerChangeScoreBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnerChangeScoreBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.OwnerChangeScoreBroadcast";
            };

            return OwnerChangeScoreBroadcast;
        })();

        return v1;
    })();

    return common;
})();

$root.gateway = (function() {

    /**
     * Namespace gateway.
     * @exports gateway
     * @namespace
     */
    var gateway = {};

    gateway.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof gateway
         * @namespace
         */
        var v1 = {};

        v1.ConnectedMessage = (function() {

            /**
             * Properties of a ConnectedMessage.
             * @memberof gateway.v1
             * @interface IConnectedMessage
             * @property {string|null} [connectionId] ConnectedMessage connectionId
             * @property {number|Long|null} [userId] ConnectedMessage userId
             * @property {google.protobuf.ITimestamp|null} [serverTime] ConnectedMessage serverTime
             */

            /**
             * Constructs a new ConnectedMessage.
             * @memberof gateway.v1
             * @classdesc Represents a ConnectedMessage.
             * @implements IConnectedMessage
             * @constructor
             * @param {gateway.v1.IConnectedMessage=} [properties] Properties to set
             */
            function ConnectedMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectedMessage connectionId.
             * @member {string} connectionId
             * @memberof gateway.v1.ConnectedMessage
             * @instance
             */
            ConnectedMessage.prototype.connectionId = "";

            /**
             * ConnectedMessage userId.
             * @member {number|Long} userId
             * @memberof gateway.v1.ConnectedMessage
             * @instance
             */
            ConnectedMessage.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ConnectedMessage serverTime.
             * @member {google.protobuf.ITimestamp|null|undefined} serverTime
             * @memberof gateway.v1.ConnectedMessage
             * @instance
             */
            ConnectedMessage.prototype.serverTime = null;

            /**
             * Creates a new ConnectedMessage instance using the specified properties.
             * @function create
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {gateway.v1.IConnectedMessage=} [properties] Properties to set
             * @returns {gateway.v1.ConnectedMessage} ConnectedMessage instance
             */
            ConnectedMessage.create = function create(properties) {
                return new ConnectedMessage(properties);
            };

            /**
             * Encodes the specified ConnectedMessage message. Does not implicitly {@link gateway.v1.ConnectedMessage.verify|verify} messages.
             * @function encode
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {gateway.v1.IConnectedMessage} message ConnectedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectedMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.connectionId != null && Object.hasOwnProperty.call(message, "connectionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.connectionId);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    $root.google.protobuf.Timestamp.encode(message.serverTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ConnectedMessage message, length delimited. Does not implicitly {@link gateway.v1.ConnectedMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {gateway.v1.IConnectedMessage} message ConnectedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectedMessage message from the specified reader or buffer.
             * @function decode
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gateway.v1.ConnectedMessage} ConnectedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectedMessage.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway.v1.ConnectedMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.connectionId = reader.string();
                            break;
                        }
                    case 2: {
                            message.userId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.serverTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
             * Decodes a ConnectedMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gateway.v1.ConnectedMessage} ConnectedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectedMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectedMessage message.
             * @function verify
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectedMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                    if (!$util.isString(message.connectionId))
                        return "connectionId: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.serverTime != null && message.hasOwnProperty("serverTime")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.serverTime);
                    if (error)
                        return "serverTime." + error;
                }
                return null;
            };

            /**
             * Creates a ConnectedMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gateway.v1.ConnectedMessage} ConnectedMessage
             */
            ConnectedMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.gateway.v1.ConnectedMessage)
                    return object;
                var message = new $root.gateway.v1.ConnectedMessage();
                if (object.connectionId != null)
                    message.connectionId = String(object.connectionId);
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.serverTime != null) {
                    if (typeof object.serverTime !== "object")
                        throw TypeError(".gateway.v1.ConnectedMessage.serverTime: object expected");
                    message.serverTime = $root.google.protobuf.Timestamp.fromObject(object.serverTime);
                }
                return message;
            };

            /**
             * Creates a plain object from a ConnectedMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {gateway.v1.ConnectedMessage} message ConnectedMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectedMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.connectionId = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.serverTime = null;
                }
                if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                    object.connectionId = message.connectionId;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                    object.serverTime = $root.google.protobuf.Timestamp.toObject(message.serverTime, options);
                return object;
            };

            /**
             * Converts this ConnectedMessage to JSON.
             * @function toJSON
             * @memberof gateway.v1.ConnectedMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConnectedMessage
             * @function getTypeUrl
             * @memberof gateway.v1.ConnectedMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/gateway.v1.ConnectedMessage";
            };

            return ConnectedMessage;
        })();

        v1.PingMessage = (function() {

            /**
             * Properties of a PingMessage.
             * @memberof gateway.v1
             * @interface IPingMessage
             * @property {google.protobuf.ITimestamp|null} [timestamp] PingMessage timestamp
             * @property {string|null} [clientId] PingMessage clientId
             */

            /**
             * Constructs a new PingMessage.
             * @memberof gateway.v1
             * @classdesc Represents a PingMessage.
             * @implements IPingMessage
             * @constructor
             * @param {gateway.v1.IPingMessage=} [properties] Properties to set
             */
            function PingMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PingMessage timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof gateway.v1.PingMessage
             * @instance
             */
            PingMessage.prototype.timestamp = null;

            /**
             * PingMessage clientId.
             * @member {string} clientId
             * @memberof gateway.v1.PingMessage
             * @instance
             */
            PingMessage.prototype.clientId = "";

            /**
             * Creates a new PingMessage instance using the specified properties.
             * @function create
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {gateway.v1.IPingMessage=} [properties] Properties to set
             * @returns {gateway.v1.PingMessage} PingMessage instance
             */
            PingMessage.create = function create(properties) {
                return new PingMessage(properties);
            };

            /**
             * Encodes the specified PingMessage message. Does not implicitly {@link gateway.v1.PingMessage.verify|verify} messages.
             * @function encode
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {gateway.v1.IPingMessage} message PingMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
                return writer;
            };

            /**
             * Encodes the specified PingMessage message, length delimited. Does not implicitly {@link gateway.v1.PingMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {gateway.v1.IPingMessage} message PingMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PingMessage message from the specified reader or buffer.
             * @function decode
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gateway.v1.PingMessage} PingMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingMessage.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway.v1.PingMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.clientId = reader.string();
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
             * Decodes a PingMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gateway.v1.PingMessage} PingMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PingMessage message.
             * @function verify
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    if (!$util.isString(message.clientId))
                        return "clientId: string expected";
                return null;
            };

            /**
             * Creates a PingMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gateway.v1.PingMessage} PingMessage
             */
            PingMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.gateway.v1.PingMessage)
                    return object;
                var message = new $root.gateway.v1.PingMessage();
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".gateway.v1.PingMessage.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                if (object.clientId != null)
                    message.clientId = String(object.clientId);
                return message;
            };

            /**
             * Creates a plain object from a PingMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {gateway.v1.PingMessage} message PingMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timestamp = null;
                    object.clientId = "";
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    object.clientId = message.clientId;
                return object;
            };

            /**
             * Converts this PingMessage to JSON.
             * @function toJSON
             * @memberof gateway.v1.PingMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PingMessage
             * @function getTypeUrl
             * @memberof gateway.v1.PingMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PingMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/gateway.v1.PingMessage";
            };

            return PingMessage;
        })();

        v1.PongMessage = (function() {

            /**
             * Properties of a PongMessage.
             * @memberof gateway.v1
             * @interface IPongMessage
             * @property {google.protobuf.ITimestamp|null} [timestamp] PongMessage timestamp
             * @property {google.protobuf.ITimestamp|null} [pingTimestamp] PongMessage pingTimestamp
             * @property {number|Long|null} [roundTripTimeMs] PongMessage roundTripTimeMs
             */

            /**
             * Constructs a new PongMessage.
             * @memberof gateway.v1
             * @classdesc Represents a PongMessage.
             * @implements IPongMessage
             * @constructor
             * @param {gateway.v1.IPongMessage=} [properties] Properties to set
             */
            function PongMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PongMessage timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof gateway.v1.PongMessage
             * @instance
             */
            PongMessage.prototype.timestamp = null;

            /**
             * PongMessage pingTimestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} pingTimestamp
             * @memberof gateway.v1.PongMessage
             * @instance
             */
            PongMessage.prototype.pingTimestamp = null;

            /**
             * PongMessage roundTripTimeMs.
             * @member {number|Long} roundTripTimeMs
             * @memberof gateway.v1.PongMessage
             * @instance
             */
            PongMessage.prototype.roundTripTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PongMessage instance using the specified properties.
             * @function create
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {gateway.v1.IPongMessage=} [properties] Properties to set
             * @returns {gateway.v1.PongMessage} PongMessage instance
             */
            PongMessage.create = function create(properties) {
                return new PongMessage(properties);
            };

            /**
             * Encodes the specified PongMessage message. Does not implicitly {@link gateway.v1.PongMessage.verify|verify} messages.
             * @function encode
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {gateway.v1.IPongMessage} message PongMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PongMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.pingTimestamp != null && Object.hasOwnProperty.call(message, "pingTimestamp"))
                    $root.google.protobuf.Timestamp.encode(message.pingTimestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.roundTripTimeMs != null && Object.hasOwnProperty.call(message, "roundTripTimeMs"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.roundTripTimeMs);
                return writer;
            };

            /**
             * Encodes the specified PongMessage message, length delimited. Does not implicitly {@link gateway.v1.PongMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {gateway.v1.IPongMessage} message PongMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PongMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PongMessage message from the specified reader or buffer.
             * @function decode
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gateway.v1.PongMessage} PongMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PongMessage.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway.v1.PongMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.pingTimestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.roundTripTimeMs = reader.int64();
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
             * Decodes a PongMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gateway.v1.PongMessage} PongMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PongMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PongMessage message.
             * @function verify
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PongMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.pingTimestamp != null && message.hasOwnProperty("pingTimestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.pingTimestamp);
                    if (error)
                        return "pingTimestamp." + error;
                }
                if (message.roundTripTimeMs != null && message.hasOwnProperty("roundTripTimeMs"))
                    if (!$util.isInteger(message.roundTripTimeMs) && !(message.roundTripTimeMs && $util.isInteger(message.roundTripTimeMs.low) && $util.isInteger(message.roundTripTimeMs.high)))
                        return "roundTripTimeMs: integer|Long expected";
                return null;
            };

            /**
             * Creates a PongMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gateway.v1.PongMessage} PongMessage
             */
            PongMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.gateway.v1.PongMessage)
                    return object;
                var message = new $root.gateway.v1.PongMessage();
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".gateway.v1.PongMessage.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                if (object.pingTimestamp != null) {
                    if (typeof object.pingTimestamp !== "object")
                        throw TypeError(".gateway.v1.PongMessage.pingTimestamp: object expected");
                    message.pingTimestamp = $root.google.protobuf.Timestamp.fromObject(object.pingTimestamp);
                }
                if (object.roundTripTimeMs != null)
                    if ($util.Long)
                        (message.roundTripTimeMs = $util.Long.fromValue(object.roundTripTimeMs)).unsigned = false;
                    else if (typeof object.roundTripTimeMs === "string")
                        message.roundTripTimeMs = parseInt(object.roundTripTimeMs, 10);
                    else if (typeof object.roundTripTimeMs === "number")
                        message.roundTripTimeMs = object.roundTripTimeMs;
                    else if (typeof object.roundTripTimeMs === "object")
                        message.roundTripTimeMs = new $util.LongBits(object.roundTripTimeMs.low >>> 0, object.roundTripTimeMs.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PongMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {gateway.v1.PongMessage} message PongMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PongMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timestamp = null;
                    object.pingTimestamp = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.roundTripTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.roundTripTimeMs = options.longs === String ? "0" : 0;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                if (message.pingTimestamp != null && message.hasOwnProperty("pingTimestamp"))
                    object.pingTimestamp = $root.google.protobuf.Timestamp.toObject(message.pingTimestamp, options);
                if (message.roundTripTimeMs != null && message.hasOwnProperty("roundTripTimeMs"))
                    if (typeof message.roundTripTimeMs === "number")
                        object.roundTripTimeMs = options.longs === String ? String(message.roundTripTimeMs) : message.roundTripTimeMs;
                    else
                        object.roundTripTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.roundTripTimeMs) : options.longs === Number ? new $util.LongBits(message.roundTripTimeMs.low >>> 0, message.roundTripTimeMs.high >>> 0).toNumber() : message.roundTripTimeMs;
                return object;
            };

            /**
             * Converts this PongMessage to JSON.
             * @function toJSON
             * @memberof gateway.v1.PongMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PongMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PongMessage
             * @function getTypeUrl
             * @memberof gateway.v1.PongMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PongMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/gateway.v1.PongMessage";
            };

            return PongMessage;
        })();

        v1.TestMessage = (function() {

            /**
             * Properties of a TestMessage.
             * @memberof gateway.v1
             * @interface ITestMessage
             * @property {string|null} [message] TestMessage message
             * @property {number|null} [number] TestMessage number
             * @property {google.protobuf.ITimestamp|null} [timestamp] TestMessage timestamp
             * @property {boolean|null} [echoBack] TestMessage echoBack
             */

            /**
             * Constructs a new TestMessage.
             * @memberof gateway.v1
             * @classdesc Represents a TestMessage.
             * @implements ITestMessage
             * @constructor
             * @param {gateway.v1.ITestMessage=} [properties] Properties to set
             */
            function TestMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestMessage message.
             * @member {string} message
             * @memberof gateway.v1.TestMessage
             * @instance
             */
            TestMessage.prototype.message = "";

            /**
             * TestMessage number.
             * @member {number} number
             * @memberof gateway.v1.TestMessage
             * @instance
             */
            TestMessage.prototype.number = 0;

            /**
             * TestMessage timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof gateway.v1.TestMessage
             * @instance
             */
            TestMessage.prototype.timestamp = null;

            /**
             * TestMessage echoBack.
             * @member {boolean} echoBack
             * @memberof gateway.v1.TestMessage
             * @instance
             */
            TestMessage.prototype.echoBack = false;

            /**
             * Creates a new TestMessage instance using the specified properties.
             * @function create
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {gateway.v1.ITestMessage=} [properties] Properties to set
             * @returns {gateway.v1.TestMessage} TestMessage instance
             */
            TestMessage.create = function create(properties) {
                return new TestMessage(properties);
            };

            /**
             * Encodes the specified TestMessage message. Does not implicitly {@link gateway.v1.TestMessage.verify|verify} messages.
             * @function encode
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {gateway.v1.ITestMessage} message TestMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.echoBack != null && Object.hasOwnProperty.call(message, "echoBack"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.echoBack);
                return writer;
            };

            /**
             * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link gateway.v1.TestMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {gateway.v1.ITestMessage} message TestMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMessage message from the specified reader or buffer.
             * @function decode
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gateway.v1.TestMessage} TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway.v1.TestMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    case 2: {
                            message.number = reader.int32();
                            break;
                        }
                    case 3: {
                            message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.echoBack = reader.bool();
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
             * Decodes a TestMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gateway.v1.TestMessage} TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestMessage message.
             * @function verify
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.echoBack != null && message.hasOwnProperty("echoBack"))
                    if (typeof message.echoBack !== "boolean")
                        return "echoBack: boolean expected";
                return null;
            };

            /**
             * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gateway.v1.TestMessage} TestMessage
             */
            TestMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.gateway.v1.TestMessage)
                    return object;
                var message = new $root.gateway.v1.TestMessage();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".gateway.v1.TestMessage.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                if (object.echoBack != null)
                    message.echoBack = Boolean(object.echoBack);
                return message;
            };

            /**
             * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {gateway.v1.TestMessage} message TestMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.message = "";
                    object.number = 0;
                    object.timestamp = null;
                    object.echoBack = false;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                if (message.echoBack != null && message.hasOwnProperty("echoBack"))
                    object.echoBack = message.echoBack;
                return object;
            };

            /**
             * Converts this TestMessage to JSON.
             * @function toJSON
             * @memberof gateway.v1.TestMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestMessage
             * @function getTypeUrl
             * @memberof gateway.v1.TestMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/gateway.v1.TestMessage";
            };

            return TestMessage;
        })();

        return v1;
    })();

    return gateway;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
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
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
