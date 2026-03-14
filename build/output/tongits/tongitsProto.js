/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});



$root.tongits = (function() {

    /**
     * Namespace tongits.
     * @exports tongits
     * @namespace
     */
    var tongits = {};

    tongits.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof tongits
         * @namespace
         */
        var v1 = {};

        v1.EmptyRes = (function() {

            /**
             * Properties of an EmptyRes.
             * @memberof tongits.v1
             * @interface IEmptyRes
             */

            /**
             * Constructs a new EmptyRes.
             * @memberof tongits.v1
             * @classdesc Represents an EmptyRes.
             * @implements IEmptyRes
             * @constructor
             * @param {tongits.v1.IEmptyRes=} [properties] Properties to set
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
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {tongits.v1.IEmptyRes=} [properties] Properties to set
             * @returns {tongits.v1.EmptyRes} EmptyRes instance
             */
            EmptyRes.create = function create(properties) {
                return new EmptyRes(properties);
            };

            /**
             * Encodes the specified EmptyRes message. Does not implicitly {@link tongits.v1.EmptyRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {tongits.v1.IEmptyRes} message EmptyRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified EmptyRes message, length delimited. Does not implicitly {@link tongits.v1.EmptyRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {tongits.v1.IEmptyRes} message EmptyRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EmptyRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.EmptyRes} EmptyRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmptyRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.EmptyRes();
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
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.EmptyRes} EmptyRes
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
             * @memberof tongits.v1.EmptyRes
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
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.EmptyRes} EmptyRes
             */
            EmptyRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.EmptyRes)
                    return object;
                return new $root.tongits.v1.EmptyRes();
            };

            /**
             * Creates a plain object from an EmptyRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {tongits.v1.EmptyRes} message EmptyRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EmptyRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this EmptyRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.EmptyRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EmptyRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EmptyRes
             * @function getTypeUrl
             * @memberof tongits.v1.EmptyRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EmptyRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.EmptyRes";
            };

            return EmptyRes;
        })();

        v1.RoomInfo = (function() {

            /**
             * Properties of a RoomInfo.
             * @memberof tongits.v1
             * @interface IRoomInfo
             * @property {number|Long|null} [roomId] RoomInfo roomId
             * @property {string|null} [roomName] RoomInfo roomName
             * @property {number|null} [roomStatus] RoomInfo roomStatus
             * @property {number|null} [maxSeat] RoomInfo maxSeat
             */

            /**
             * Constructs a new RoomInfo.
             * @memberof tongits.v1
             * @classdesc Represents a RoomInfo.
             * @implements IRoomInfo
             * @constructor
             * @param {tongits.v1.IRoomInfo=} [properties] Properties to set
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
             * @memberof tongits.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RoomInfo roomName.
             * @member {string} roomName
             * @memberof tongits.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomName = "";

            /**
             * RoomInfo roomStatus.
             * @member {number} roomStatus
             * @memberof tongits.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.roomStatus = 0;

            /**
             * RoomInfo maxSeat.
             * @member {number} maxSeat
             * @memberof tongits.v1.RoomInfo
             * @instance
             */
            RoomInfo.prototype.maxSeat = 0;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @function create
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {tongits.v1.IRoomInfo=} [properties] Properties to set
             * @returns {tongits.v1.RoomInfo} RoomInfo instance
             */
            RoomInfo.create = function create(properties) {
                return new RoomInfo(properties);
            };

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link tongits.v1.RoomInfo.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {tongits.v1.IRoomInfo} message RoomInfo message or plain object to encode
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
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link tongits.v1.RoomInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {tongits.v1.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.RoomInfo();
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
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.RoomInfo} RoomInfo
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
             * @memberof tongits.v1.RoomInfo
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
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.RoomInfo} RoomInfo
             */
            RoomInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.RoomInfo)
                    return object;
                var message = new $root.tongits.v1.RoomInfo();
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
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {tongits.v1.RoomInfo} message RoomInfo
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
             * @memberof tongits.v1.RoomInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomInfo
             * @function getTypeUrl
             * @memberof tongits.v1.RoomInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.RoomInfo";
            };

            return RoomInfo;
        })();

        v1.TongitsPlayerInfo = (function() {

            /**
             * Properties of a TongitsPlayerInfo.
             * @memberof tongits.v1
             * @interface ITongitsPlayerInfo
             * @property {common.v1.IPlayerInfo|null} [playerInfo] TongitsPlayerInfo playerInfo
             * @property {number|null} [handCardCount] TongitsPlayerInfo handCardCount
             * @property {boolean|null} [isDealer] TongitsPlayerInfo isDealer
             * @property {Array.<tongits.v1.IMeld>|null} [displayedMelds] TongitsPlayerInfo displayedMelds
             * @property {Array.<number>|null} [handCards] TongitsPlayerInfo handCards
             * @property {boolean|null} [isFight] TongitsPlayerInfo isFight
             * @property {number|null} [countdown] TongitsPlayerInfo countdown
             * @property {number|null} [changeStatus] TongitsPlayerInfo changeStatus
             * @property {number|null} [status] TongitsPlayerInfo status
             * @property {boolean|null} [isWin] TongitsPlayerInfo isWin
             * @property {number|null} [cardPoint] TongitsPlayerInfo cardPoint
             */

            /**
             * Constructs a new TongitsPlayerInfo.
             * @memberof tongits.v1
             * @classdesc Represents a TongitsPlayerInfo.
             * @implements ITongitsPlayerInfo
             * @constructor
             * @param {tongits.v1.ITongitsPlayerInfo=} [properties] Properties to set
             */
            function TongitsPlayerInfo(properties) {
                this.displayedMelds = [];
                this.handCards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TongitsPlayerInfo playerInfo.
             * @member {common.v1.IPlayerInfo|null|undefined} playerInfo
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.playerInfo = null;

            /**
             * TongitsPlayerInfo handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.handCardCount = 0;

            /**
             * TongitsPlayerInfo isDealer.
             * @member {boolean} isDealer
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.isDealer = false;

            /**
             * TongitsPlayerInfo displayedMelds.
             * @member {Array.<tongits.v1.IMeld>} displayedMelds
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.displayedMelds = $util.emptyArray;

            /**
             * TongitsPlayerInfo handCards.
             * @member {Array.<number>} handCards
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.handCards = $util.emptyArray;

            /**
             * TongitsPlayerInfo isFight.
             * @member {boolean} isFight
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.isFight = false;

            /**
             * TongitsPlayerInfo countdown.
             * @member {number} countdown
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.countdown = 0;

            /**
             * TongitsPlayerInfo changeStatus.
             * @member {number} changeStatus
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.changeStatus = 0;

            /**
             * TongitsPlayerInfo status.
             * @member {number} status
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.status = 0;

            /**
             * TongitsPlayerInfo isWin.
             * @member {boolean} isWin
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.isWin = false;

            /**
             * TongitsPlayerInfo cardPoint.
             * @member {number} cardPoint
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             */
            TongitsPlayerInfo.prototype.cardPoint = 0;

            /**
             * Creates a new TongitsPlayerInfo instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {tongits.v1.ITongitsPlayerInfo=} [properties] Properties to set
             * @returns {tongits.v1.TongitsPlayerInfo} TongitsPlayerInfo instance
             */
            TongitsPlayerInfo.create = function create(properties) {
                return new TongitsPlayerInfo(properties);
            };

            /**
             * Encodes the specified TongitsPlayerInfo message. Does not implicitly {@link tongits.v1.TongitsPlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {tongits.v1.ITongitsPlayerInfo} message TongitsPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsPlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.common.v1.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.handCardCount);
                if (message.isDealer != null && Object.hasOwnProperty.call(message, "isDealer"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isDealer);
                if (message.displayedMelds != null && message.displayedMelds.length)
                    for (var i = 0; i < message.displayedMelds.length; ++i)
                        $root.tongits.v1.Meld.encode(message.displayedMelds[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.handCards != null && message.handCards.length) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork();
                    for (var i = 0; i < message.handCards.length; ++i)
                        writer.int32(message.handCards[i]);
                    writer.ldelim();
                }
                if (message.isFight != null && Object.hasOwnProperty.call(message, "isFight"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isFight);
                if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.countdown);
                if (message.changeStatus != null && Object.hasOwnProperty.call(message, "changeStatus"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.changeStatus);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.status);
                if (message.isWin != null && Object.hasOwnProperty.call(message, "isWin"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isWin);
                if (message.cardPoint != null && Object.hasOwnProperty.call(message, "cardPoint"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.cardPoint);
                return writer;
            };

            /**
             * Encodes the specified TongitsPlayerInfo message, length delimited. Does not implicitly {@link tongits.v1.TongitsPlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {tongits.v1.ITongitsPlayerInfo} message TongitsPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TongitsPlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TongitsPlayerInfo} TongitsPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsPlayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TongitsPlayerInfo();
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
                            message.handCardCount = reader.int32();
                            break;
                        }
                    case 3: {
                            message.isDealer = reader.bool();
                            break;
                        }
                    case 4: {
                            if (!(message.displayedMelds && message.displayedMelds.length))
                                message.displayedMelds = [];
                            message.displayedMelds.push($root.tongits.v1.Meld.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.handCards && message.handCards.length))
                                message.handCards = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.handCards.push(reader.int32());
                            } else
                                message.handCards.push(reader.int32());
                            break;
                        }
                    case 6: {
                            message.isFight = reader.bool();
                            break;
                        }
                    case 7: {
                            message.countdown = reader.int32();
                            break;
                        }
                    case 8: {
                            message.changeStatus = reader.int32();
                            break;
                        }
                    case 9: {
                            message.status = reader.int32();
                            break;
                        }
                    case 10: {
                            message.isWin = reader.bool();
                            break;
                        }
                    case 11: {
                            message.cardPoint = reader.int32();
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
             * Decodes a TongitsPlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TongitsPlayerInfo} TongitsPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TongitsPlayerInfo message.
             * @function verify
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TongitsPlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.common.v1.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                if (message.isDealer != null && message.hasOwnProperty("isDealer"))
                    if (typeof message.isDealer !== "boolean")
                        return "isDealer: boolean expected";
                if (message.displayedMelds != null && message.hasOwnProperty("displayedMelds")) {
                    if (!Array.isArray(message.displayedMelds))
                        return "displayedMelds: array expected";
                    for (var i = 0; i < message.displayedMelds.length; ++i) {
                        var error = $root.tongits.v1.Meld.verify(message.displayedMelds[i]);
                        if (error)
                            return "displayedMelds." + error;
                    }
                }
                if (message.handCards != null && message.hasOwnProperty("handCards")) {
                    if (!Array.isArray(message.handCards))
                        return "handCards: array expected";
                    for (var i = 0; i < message.handCards.length; ++i)
                        if (!$util.isInteger(message.handCards[i]))
                            return "handCards: integer[] expected";
                }
                if (message.isFight != null && message.hasOwnProperty("isFight"))
                    if (typeof message.isFight !== "boolean")
                        return "isFight: boolean expected";
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    if (!$util.isInteger(message.countdown))
                        return "countdown: integer expected";
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    if (!$util.isInteger(message.changeStatus))
                        return "changeStatus: integer expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.isWin != null && message.hasOwnProperty("isWin"))
                    if (typeof message.isWin !== "boolean")
                        return "isWin: boolean expected";
                if (message.cardPoint != null && message.hasOwnProperty("cardPoint"))
                    if (!$util.isInteger(message.cardPoint))
                        return "cardPoint: integer expected";
                return null;
            };

            /**
             * Creates a TongitsPlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TongitsPlayerInfo} TongitsPlayerInfo
             */
            TongitsPlayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TongitsPlayerInfo)
                    return object;
                var message = new $root.tongits.v1.TongitsPlayerInfo();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".tongits.v1.TongitsPlayerInfo.playerInfo: object expected");
                    message.playerInfo = $root.common.v1.PlayerInfo.fromObject(object.playerInfo);
                }
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                if (object.isDealer != null)
                    message.isDealer = Boolean(object.isDealer);
                if (object.displayedMelds) {
                    if (!Array.isArray(object.displayedMelds))
                        throw TypeError(".tongits.v1.TongitsPlayerInfo.displayedMelds: array expected");
                    message.displayedMelds = [];
                    for (var i = 0; i < object.displayedMelds.length; ++i) {
                        if (typeof object.displayedMelds[i] !== "object")
                            throw TypeError(".tongits.v1.TongitsPlayerInfo.displayedMelds: object expected");
                        message.displayedMelds[i] = $root.tongits.v1.Meld.fromObject(object.displayedMelds[i]);
                    }
                }
                if (object.handCards) {
                    if (!Array.isArray(object.handCards))
                        throw TypeError(".tongits.v1.TongitsPlayerInfo.handCards: array expected");
                    message.handCards = [];
                    for (var i = 0; i < object.handCards.length; ++i)
                        message.handCards[i] = object.handCards[i] | 0;
                }
                if (object.isFight != null)
                    message.isFight = Boolean(object.isFight);
                if (object.countdown != null)
                    message.countdown = object.countdown | 0;
                if (object.changeStatus != null)
                    message.changeStatus = object.changeStatus | 0;
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.isWin != null)
                    message.isWin = Boolean(object.isWin);
                if (object.cardPoint != null)
                    message.cardPoint = object.cardPoint | 0;
                return message;
            };

            /**
             * Creates a plain object from a TongitsPlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {tongits.v1.TongitsPlayerInfo} message TongitsPlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TongitsPlayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.displayedMelds = [];
                    object.handCards = [];
                }
                if (options.defaults) {
                    object.playerInfo = null;
                    object.handCardCount = 0;
                    object.isDealer = false;
                    object.isFight = false;
                    object.countdown = 0;
                    object.changeStatus = 0;
                    object.status = 0;
                    object.isWin = false;
                    object.cardPoint = 0;
                }
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.common.v1.PlayerInfo.toObject(message.playerInfo, options);
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                if (message.isDealer != null && message.hasOwnProperty("isDealer"))
                    object.isDealer = message.isDealer;
                if (message.displayedMelds && message.displayedMelds.length) {
                    object.displayedMelds = [];
                    for (var j = 0; j < message.displayedMelds.length; ++j)
                        object.displayedMelds[j] = $root.tongits.v1.Meld.toObject(message.displayedMelds[j], options);
                }
                if (message.handCards && message.handCards.length) {
                    object.handCards = [];
                    for (var j = 0; j < message.handCards.length; ++j)
                        object.handCards[j] = message.handCards[j];
                }
                if (message.isFight != null && message.hasOwnProperty("isFight"))
                    object.isFight = message.isFight;
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    object.countdown = message.countdown;
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    object.changeStatus = message.changeStatus;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.isWin != null && message.hasOwnProperty("isWin"))
                    object.isWin = message.isWin;
                if (message.cardPoint != null && message.hasOwnProperty("cardPoint"))
                    object.cardPoint = message.cardPoint;
                return object;
            };

            /**
             * Converts this TongitsPlayerInfo to JSON.
             * @function toJSON
             * @memberof tongits.v1.TongitsPlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TongitsPlayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TongitsPlayerInfo
             * @function getTypeUrl
             * @memberof tongits.v1.TongitsPlayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TongitsPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TongitsPlayerInfo";
            };

            return TongitsPlayerInfo;
        })();

        v1.TongitsBasePlayerInfo = (function() {

            /**
             * Properties of a TongitsBasePlayerInfo.
             * @memberof tongits.v1
             * @interface ITongitsBasePlayerInfo
             * @property {number|Long|null} [playerId] TongitsBasePlayerInfo playerId
             * @property {number|null} [changeStatus] TongitsBasePlayerInfo changeStatus
             * @property {number|null} [countdown] TongitsBasePlayerInfo countdown
             */

            /**
             * Constructs a new TongitsBasePlayerInfo.
             * @memberof tongits.v1
             * @classdesc Represents a TongitsBasePlayerInfo.
             * @implements ITongitsBasePlayerInfo
             * @constructor
             * @param {tongits.v1.ITongitsBasePlayerInfo=} [properties] Properties to set
             */
            function TongitsBasePlayerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TongitsBasePlayerInfo playerId.
             * @member {number|Long} playerId
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @instance
             */
            TongitsBasePlayerInfo.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TongitsBasePlayerInfo changeStatus.
             * @member {number} changeStatus
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @instance
             */
            TongitsBasePlayerInfo.prototype.changeStatus = 0;

            /**
             * TongitsBasePlayerInfo countdown.
             * @member {number} countdown
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @instance
             */
            TongitsBasePlayerInfo.prototype.countdown = 0;

            /**
             * Creates a new TongitsBasePlayerInfo instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {tongits.v1.ITongitsBasePlayerInfo=} [properties] Properties to set
             * @returns {tongits.v1.TongitsBasePlayerInfo} TongitsBasePlayerInfo instance
             */
            TongitsBasePlayerInfo.create = function create(properties) {
                return new TongitsBasePlayerInfo(properties);
            };

            /**
             * Encodes the specified TongitsBasePlayerInfo message. Does not implicitly {@link tongits.v1.TongitsBasePlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {tongits.v1.ITongitsBasePlayerInfo} message TongitsBasePlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsBasePlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.changeStatus != null && Object.hasOwnProperty.call(message, "changeStatus"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.changeStatus);
                if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.countdown);
                return writer;
            };

            /**
             * Encodes the specified TongitsBasePlayerInfo message, length delimited. Does not implicitly {@link tongits.v1.TongitsBasePlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {tongits.v1.ITongitsBasePlayerInfo} message TongitsBasePlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsBasePlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TongitsBasePlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TongitsBasePlayerInfo} TongitsBasePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsBasePlayerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TongitsBasePlayerInfo();
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
                            message.changeStatus = reader.int32();
                            break;
                        }
                    case 3: {
                            message.countdown = reader.int32();
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
             * Decodes a TongitsBasePlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TongitsBasePlayerInfo} TongitsBasePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsBasePlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TongitsBasePlayerInfo message.
             * @function verify
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TongitsBasePlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    if (!$util.isInteger(message.changeStatus))
                        return "changeStatus: integer expected";
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    if (!$util.isInteger(message.countdown))
                        return "countdown: integer expected";
                return null;
            };

            /**
             * Creates a TongitsBasePlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TongitsBasePlayerInfo} TongitsBasePlayerInfo
             */
            TongitsBasePlayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TongitsBasePlayerInfo)
                    return object;
                var message = new $root.tongits.v1.TongitsBasePlayerInfo();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.changeStatus != null)
                    message.changeStatus = object.changeStatus | 0;
                if (object.countdown != null)
                    message.countdown = object.countdown | 0;
                return message;
            };

            /**
             * Creates a plain object from a TongitsBasePlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {tongits.v1.TongitsBasePlayerInfo} message TongitsBasePlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TongitsBasePlayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.changeStatus = 0;
                    object.countdown = 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    object.changeStatus = message.changeStatus;
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    object.countdown = message.countdown;
                return object;
            };

            /**
             * Converts this TongitsBasePlayerInfo to JSON.
             * @function toJSON
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TongitsBasePlayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TongitsBasePlayerInfo
             * @function getTypeUrl
             * @memberof tongits.v1.TongitsBasePlayerInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TongitsBasePlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TongitsBasePlayerInfo";
            };

            return TongitsBasePlayerInfo;
        })();

        v1.Meld = (function() {

            /**
             * Properties of a Meld.
             * @memberof tongits.v1
             * @interface IMeld
             * @property {Array.<number>|null} [cards] Meld cards
             * @property {number|null} [highlightCards] Meld highlightCards
             * @property {number|Long|null} [ownerId] Meld ownerId
             * @property {number|null} [meldId] Meld meldId
             * @property {boolean|null} [locked] Meld locked
             */

            /**
             * Constructs a new Meld.
             * @memberof tongits.v1
             * @classdesc Represents a Meld.
             * @implements IMeld
             * @constructor
             * @param {tongits.v1.IMeld=} [properties] Properties to set
             */
            function Meld(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Meld cards.
             * @member {Array.<number>} cards
             * @memberof tongits.v1.Meld
             * @instance
             */
            Meld.prototype.cards = $util.emptyArray;

            /**
             * Meld highlightCards.
             * @member {number} highlightCards
             * @memberof tongits.v1.Meld
             * @instance
             */
            Meld.prototype.highlightCards = 0;

            /**
             * Meld ownerId.
             * @member {number|Long} ownerId
             * @memberof tongits.v1.Meld
             * @instance
             */
            Meld.prototype.ownerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Meld meldId.
             * @member {number} meldId
             * @memberof tongits.v1.Meld
             * @instance
             */
            Meld.prototype.meldId = 0;

            /**
             * Meld locked.
             * @member {boolean} locked
             * @memberof tongits.v1.Meld
             * @instance
             */
            Meld.prototype.locked = false;

            /**
             * Creates a new Meld instance using the specified properties.
             * @function create
             * @memberof tongits.v1.Meld
             * @static
             * @param {tongits.v1.IMeld=} [properties] Properties to set
             * @returns {tongits.v1.Meld} Meld instance
             */
            Meld.create = function create(properties) {
                return new Meld(properties);
            };

            /**
             * Encodes the specified Meld message. Does not implicitly {@link tongits.v1.Meld.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.Meld
             * @static
             * @param {tongits.v1.IMeld} message Meld message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Meld.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                if (message.highlightCards != null && Object.hasOwnProperty.call(message, "highlightCards"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.highlightCards);
                if (message.ownerId != null && Object.hasOwnProperty.call(message, "ownerId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ownerId);
                if (message.meldId != null && Object.hasOwnProperty.call(message, "meldId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.meldId);
                if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.locked);
                return writer;
            };

            /**
             * Encodes the specified Meld message, length delimited. Does not implicitly {@link tongits.v1.Meld.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.Meld
             * @static
             * @param {tongits.v1.IMeld} message Meld message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Meld.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Meld message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.Meld
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.Meld} Meld
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Meld.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.Meld();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
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
                    case 2: {
                            message.highlightCards = reader.int32();
                            break;
                        }
                    case 3: {
                            message.ownerId = reader.int64();
                            break;
                        }
                    case 4: {
                            message.meldId = reader.int32();
                            break;
                        }
                    case 5: {
                            message.locked = reader.bool();
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
             * Decodes a Meld message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.Meld
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.Meld} Meld
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Meld.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Meld message.
             * @function verify
             * @memberof tongits.v1.Meld
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Meld.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.highlightCards != null && message.hasOwnProperty("highlightCards"))
                    if (!$util.isInteger(message.highlightCards))
                        return "highlightCards: integer expected";
                if (message.ownerId != null && message.hasOwnProperty("ownerId"))
                    if (!$util.isInteger(message.ownerId) && !(message.ownerId && $util.isInteger(message.ownerId.low) && $util.isInteger(message.ownerId.high)))
                        return "ownerId: integer|Long expected";
                if (message.meldId != null && message.hasOwnProperty("meldId"))
                    if (!$util.isInteger(message.meldId))
                        return "meldId: integer expected";
                if (message.locked != null && message.hasOwnProperty("locked"))
                    if (typeof message.locked !== "boolean")
                        return "locked: boolean expected";
                return null;
            };

            /**
             * Creates a Meld message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.Meld
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.Meld} Meld
             */
            Meld.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.Meld)
                    return object;
                var message = new $root.tongits.v1.Meld();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".tongits.v1.Meld.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                if (object.highlightCards != null)
                    message.highlightCards = object.highlightCards | 0;
                if (object.ownerId != null)
                    if ($util.Long)
                        (message.ownerId = $util.Long.fromValue(object.ownerId)).unsigned = false;
                    else if (typeof object.ownerId === "string")
                        message.ownerId = parseInt(object.ownerId, 10);
                    else if (typeof object.ownerId === "number")
                        message.ownerId = object.ownerId;
                    else if (typeof object.ownerId === "object")
                        message.ownerId = new $util.LongBits(object.ownerId.low >>> 0, object.ownerId.high >>> 0).toNumber();
                if (object.meldId != null)
                    message.meldId = object.meldId | 0;
                if (object.locked != null)
                    message.locked = Boolean(object.locked);
                return message;
            };

            /**
             * Creates a plain object from a Meld message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.Meld
             * @static
             * @param {tongits.v1.Meld} message Meld
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Meld.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults) {
                    object.highlightCards = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.ownerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ownerId = options.longs === String ? "0" : 0;
                    object.meldId = 0;
                    object.locked = false;
                }
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                if (message.highlightCards != null && message.hasOwnProperty("highlightCards"))
                    object.highlightCards = message.highlightCards;
                if (message.ownerId != null && message.hasOwnProperty("ownerId"))
                    if (typeof message.ownerId === "number")
                        object.ownerId = options.longs === String ? String(message.ownerId) : message.ownerId;
                    else
                        object.ownerId = options.longs === String ? $util.Long.prototype.toString.call(message.ownerId) : options.longs === Number ? new $util.LongBits(message.ownerId.low >>> 0, message.ownerId.high >>> 0).toNumber() : message.ownerId;
                if (message.meldId != null && message.hasOwnProperty("meldId"))
                    object.meldId = message.meldId;
                if (message.locked != null && message.hasOwnProperty("locked"))
                    object.locked = message.locked;
                return object;
            };

            /**
             * Converts this Meld to JSON.
             * @function toJSON
             * @memberof tongits.v1.Meld
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Meld.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Meld
             * @function getTypeUrl
             * @memberof tongits.v1.Meld
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Meld.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.Meld";
            };

            return Meld;
        })();

        v1.GameInfo = (function() {

            /**
             * Properties of a GameInfo.
             * @memberof tongits.v1
             * @interface IGameInfo
             * @property {number|Long|null} [actionPlayerId] GameInfo actionPlayerId
             * @property {number|null} [status] GameInfo status
             * @property {number|null} [deckCardCount] GameInfo deckCardCount
             * @property {Array.<number>|null} [discardPile] GameInfo discardPile
             * @property {tongits.v1.IPotInfo|null} [pot] GameInfo pot
             * @property {number|null} [discardCard] GameInfo discardCard
             * @property {number|null} [winType] GameInfo winType
             * @property {number|Long|null} [perspectiveId] GameInfo perspectiveId
             * @property {number|null} [betAmount] GameInfo betAmount
             * @property {Array.<number>|null} [scores] GameInfo scores
             */

            /**
             * Constructs a new GameInfo.
             * @memberof tongits.v1
             * @classdesc Represents a GameInfo.
             * @implements IGameInfo
             * @constructor
             * @param {tongits.v1.IGameInfo=} [properties] Properties to set
             */
            function GameInfo(properties) {
                this.discardPile = [];
                this.scores = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameInfo actionPlayerId.
             * @member {number|Long} actionPlayerId
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.actionPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo status.
             * @member {number} status
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.status = 0;

            /**
             * GameInfo deckCardCount.
             * @member {number} deckCardCount
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.deckCardCount = 0;

            /**
             * GameInfo discardPile.
             * @member {Array.<number>} discardPile
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.discardPile = $util.emptyArray;

            /**
             * GameInfo pot.
             * @member {tongits.v1.IPotInfo|null|undefined} pot
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.pot = null;

            /**
             * GameInfo discardCard.
             * @member {number} discardCard
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.discardCard = 0;

            /**
             * GameInfo winType.
             * @member {number} winType
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.winType = 0;

            /**
             * GameInfo perspectiveId.
             * @member {number|Long} perspectiveId
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.perspectiveId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameInfo betAmount.
             * @member {number} betAmount
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.betAmount = 0;

            /**
             * GameInfo scores.
             * @member {Array.<number>} scores
             * @memberof tongits.v1.GameInfo
             * @instance
             */
            GameInfo.prototype.scores = $util.emptyArray;

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @function create
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {tongits.v1.IGameInfo=} [properties] Properties to set
             * @returns {tongits.v1.GameInfo} GameInfo instance
             */
            GameInfo.create = function create(properties) {
                return new GameInfo(properties);
            };

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link tongits.v1.GameInfo.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {tongits.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actionPlayerId != null && Object.hasOwnProperty.call(message, "actionPlayerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.actionPlayerId);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                if (message.deckCardCount != null && Object.hasOwnProperty.call(message, "deckCardCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.deckCardCount);
                if (message.discardPile != null && message.discardPile.length) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork();
                    for (var i = 0; i < message.discardPile.length; ++i)
                        writer.int32(message.discardPile[i]);
                    writer.ldelim();
                }
                if (message.pot != null && Object.hasOwnProperty.call(message, "pot"))
                    $root.tongits.v1.PotInfo.encode(message.pot, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.discardCard != null && Object.hasOwnProperty.call(message, "discardCard"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.discardCard);
                if (message.winType != null && Object.hasOwnProperty.call(message, "winType"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.winType);
                if (message.perspectiveId != null && Object.hasOwnProperty.call(message, "perspectiveId"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int64(message.perspectiveId);
                if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.betAmount);
                if (message.scores != null && message.scores.length) {
                    writer.uint32(/* id 12, wireType 2 =*/98).fork();
                    for (var i = 0; i < message.scores.length; ++i)
                        writer.int32(message.scores[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link tongits.v1.GameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {tongits.v1.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.GameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.actionPlayerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
                            break;
                        }
                    case 4: {
                            message.deckCardCount = reader.int32();
                            break;
                        }
                    case 6: {
                            if (!(message.discardPile && message.discardPile.length))
                                message.discardPile = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.discardPile.push(reader.int32());
                            } else
                                message.discardPile.push(reader.int32());
                            break;
                        }
                    case 7: {
                            message.pot = $root.tongits.v1.PotInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.discardCard = reader.int32();
                            break;
                        }
                    case 9: {
                            message.winType = reader.int32();
                            break;
                        }
                    case 10: {
                            message.perspectiveId = reader.int64();
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
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.GameInfo} GameInfo
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
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    if (!$util.isInteger(message.actionPlayerId) && !(message.actionPlayerId && $util.isInteger(message.actionPlayerId.low) && $util.isInteger(message.actionPlayerId.high)))
                        return "actionPlayerId: integer|Long expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.deckCardCount != null && message.hasOwnProperty("deckCardCount"))
                    if (!$util.isInteger(message.deckCardCount))
                        return "deckCardCount: integer expected";
                if (message.discardPile != null && message.hasOwnProperty("discardPile")) {
                    if (!Array.isArray(message.discardPile))
                        return "discardPile: array expected";
                    for (var i = 0; i < message.discardPile.length; ++i)
                        if (!$util.isInteger(message.discardPile[i]))
                            return "discardPile: integer[] expected";
                }
                if (message.pot != null && message.hasOwnProperty("pot")) {
                    var error = $root.tongits.v1.PotInfo.verify(message.pot);
                    if (error)
                        return "pot." + error;
                }
                if (message.discardCard != null && message.hasOwnProperty("discardCard"))
                    if (!$util.isInteger(message.discardCard))
                        return "discardCard: integer expected";
                if (message.winType != null && message.hasOwnProperty("winType"))
                    if (!$util.isInteger(message.winType))
                        return "winType: integer expected";
                if (message.perspectiveId != null && message.hasOwnProperty("perspectiveId"))
                    if (!$util.isInteger(message.perspectiveId) && !(message.perspectiveId && $util.isInteger(message.perspectiveId.low) && $util.isInteger(message.perspectiveId.high)))
                        return "perspectiveId: integer|Long expected";
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
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.GameInfo} GameInfo
             */
            GameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.GameInfo)
                    return object;
                var message = new $root.tongits.v1.GameInfo();
                if (object.actionPlayerId != null)
                    if ($util.Long)
                        (message.actionPlayerId = $util.Long.fromValue(object.actionPlayerId)).unsigned = false;
                    else if (typeof object.actionPlayerId === "string")
                        message.actionPlayerId = parseInt(object.actionPlayerId, 10);
                    else if (typeof object.actionPlayerId === "number")
                        message.actionPlayerId = object.actionPlayerId;
                    else if (typeof object.actionPlayerId === "object")
                        message.actionPlayerId = new $util.LongBits(object.actionPlayerId.low >>> 0, object.actionPlayerId.high >>> 0).toNumber();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.deckCardCount != null)
                    message.deckCardCount = object.deckCardCount | 0;
                if (object.discardPile) {
                    if (!Array.isArray(object.discardPile))
                        throw TypeError(".tongits.v1.GameInfo.discardPile: array expected");
                    message.discardPile = [];
                    for (var i = 0; i < object.discardPile.length; ++i)
                        message.discardPile[i] = object.discardPile[i] | 0;
                }
                if (object.pot != null) {
                    if (typeof object.pot !== "object")
                        throw TypeError(".tongits.v1.GameInfo.pot: object expected");
                    message.pot = $root.tongits.v1.PotInfo.fromObject(object.pot);
                }
                if (object.discardCard != null)
                    message.discardCard = object.discardCard | 0;
                if (object.winType != null)
                    message.winType = object.winType | 0;
                if (object.perspectiveId != null)
                    if ($util.Long)
                        (message.perspectiveId = $util.Long.fromValue(object.perspectiveId)).unsigned = false;
                    else if (typeof object.perspectiveId === "string")
                        message.perspectiveId = parseInt(object.perspectiveId, 10);
                    else if (typeof object.perspectiveId === "number")
                        message.perspectiveId = object.perspectiveId;
                    else if (typeof object.perspectiveId === "object")
                        message.perspectiveId = new $util.LongBits(object.perspectiveId.low >>> 0, object.perspectiveId.high >>> 0).toNumber();
                if (object.betAmount != null)
                    message.betAmount = object.betAmount | 0;
                if (object.scores) {
                    if (!Array.isArray(object.scores))
                        throw TypeError(".tongits.v1.GameInfo.scores: array expected");
                    message.scores = [];
                    for (var i = 0; i < object.scores.length; ++i)
                        message.scores[i] = object.scores[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {tongits.v1.GameInfo} message GameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.discardPile = [];
                    object.scores = [];
                }
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.actionPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.actionPlayerId = options.longs === String ? "0" : 0;
                    object.status = 0;
                    object.deckCardCount = 0;
                    object.pot = null;
                    object.discardCard = 0;
                    object.winType = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.perspectiveId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.perspectiveId = options.longs === String ? "0" : 0;
                    object.betAmount = 0;
                }
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    if (typeof message.actionPlayerId === "number")
                        object.actionPlayerId = options.longs === String ? String(message.actionPlayerId) : message.actionPlayerId;
                    else
                        object.actionPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.actionPlayerId) : options.longs === Number ? new $util.LongBits(message.actionPlayerId.low >>> 0, message.actionPlayerId.high >>> 0).toNumber() : message.actionPlayerId;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.deckCardCount != null && message.hasOwnProperty("deckCardCount"))
                    object.deckCardCount = message.deckCardCount;
                if (message.discardPile && message.discardPile.length) {
                    object.discardPile = [];
                    for (var j = 0; j < message.discardPile.length; ++j)
                        object.discardPile[j] = message.discardPile[j];
                }
                if (message.pot != null && message.hasOwnProperty("pot"))
                    object.pot = $root.tongits.v1.PotInfo.toObject(message.pot, options);
                if (message.discardCard != null && message.hasOwnProperty("discardCard"))
                    object.discardCard = message.discardCard;
                if (message.winType != null && message.hasOwnProperty("winType"))
                    object.winType = message.winType;
                if (message.perspectiveId != null && message.hasOwnProperty("perspectiveId"))
                    if (typeof message.perspectiveId === "number")
                        object.perspectiveId = options.longs === String ? String(message.perspectiveId) : message.perspectiveId;
                    else
                        object.perspectiveId = options.longs === String ? $util.Long.prototype.toString.call(message.perspectiveId) : options.longs === Number ? new $util.LongBits(message.perspectiveId.low >>> 0, message.perspectiveId.high >>> 0).toNumber() : message.perspectiveId;
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
             * @memberof tongits.v1.GameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameInfo
             * @function getTypeUrl
             * @memberof tongits.v1.GameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.GameInfo";
            };

            return GameInfo;
        })();

        v1.PotInfo = (function() {

            /**
             * Properties of a PotInfo.
             * @memberof tongits.v1
             * @interface IPotInfo
             * @property {number|null} [base] PotInfo base
             * @property {number|null} [winCount] PotInfo winCount
             * @property {number|Long|null} [useId] PotInfo useId
             */

            /**
             * Constructs a new PotInfo.
             * @memberof tongits.v1
             * @classdesc Represents a PotInfo.
             * @implements IPotInfo
             * @constructor
             * @param {tongits.v1.IPotInfo=} [properties] Properties to set
             */
            function PotInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PotInfo base.
             * @member {number} base
             * @memberof tongits.v1.PotInfo
             * @instance
             */
            PotInfo.prototype.base = 0;

            /**
             * PotInfo winCount.
             * @member {number} winCount
             * @memberof tongits.v1.PotInfo
             * @instance
             */
            PotInfo.prototype.winCount = 0;

            /**
             * PotInfo useId.
             * @member {number|Long} useId
             * @memberof tongits.v1.PotInfo
             * @instance
             */
            PotInfo.prototype.useId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PotInfo instance using the specified properties.
             * @function create
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {tongits.v1.IPotInfo=} [properties] Properties to set
             * @returns {tongits.v1.PotInfo} PotInfo instance
             */
            PotInfo.create = function create(properties) {
                return new PotInfo(properties);
            };

            /**
             * Encodes the specified PotInfo message. Does not implicitly {@link tongits.v1.PotInfo.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {tongits.v1.IPotInfo} message PotInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PotInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.base);
                if (message.winCount != null && Object.hasOwnProperty.call(message, "winCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winCount);
                if (message.useId != null && Object.hasOwnProperty.call(message, "useId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.useId);
                return writer;
            };

            /**
             * Encodes the specified PotInfo message, length delimited. Does not implicitly {@link tongits.v1.PotInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {tongits.v1.IPotInfo} message PotInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PotInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PotInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.PotInfo} PotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PotInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.PotInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.base = reader.int32();
                            break;
                        }
                    case 2: {
                            message.winCount = reader.int32();
                            break;
                        }
                    case 3: {
                            message.useId = reader.int64();
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
             * Decodes a PotInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.PotInfo} PotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PotInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PotInfo message.
             * @function verify
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PotInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.base != null && message.hasOwnProperty("base"))
                    if (!$util.isInteger(message.base))
                        return "base: integer expected";
                if (message.winCount != null && message.hasOwnProperty("winCount"))
                    if (!$util.isInteger(message.winCount))
                        return "winCount: integer expected";
                if (message.useId != null && message.hasOwnProperty("useId"))
                    if (!$util.isInteger(message.useId) && !(message.useId && $util.isInteger(message.useId.low) && $util.isInteger(message.useId.high)))
                        return "useId: integer|Long expected";
                return null;
            };

            /**
             * Creates a PotInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.PotInfo} PotInfo
             */
            PotInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.PotInfo)
                    return object;
                var message = new $root.tongits.v1.PotInfo();
                if (object.base != null)
                    message.base = object.base | 0;
                if (object.winCount != null)
                    message.winCount = object.winCount | 0;
                if (object.useId != null)
                    if ($util.Long)
                        (message.useId = $util.Long.fromValue(object.useId)).unsigned = false;
                    else if (typeof object.useId === "string")
                        message.useId = parseInt(object.useId, 10);
                    else if (typeof object.useId === "number")
                        message.useId = object.useId;
                    else if (typeof object.useId === "object")
                        message.useId = new $util.LongBits(object.useId.low >>> 0, object.useId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PotInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {tongits.v1.PotInfo} message PotInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PotInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.base = 0;
                    object.winCount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.useId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.useId = options.longs === String ? "0" : 0;
                }
                if (message.base != null && message.hasOwnProperty("base"))
                    object.base = message.base;
                if (message.winCount != null && message.hasOwnProperty("winCount"))
                    object.winCount = message.winCount;
                if (message.useId != null && message.hasOwnProperty("useId"))
                    if (typeof message.useId === "number")
                        object.useId = options.longs === String ? String(message.useId) : message.useId;
                    else
                        object.useId = options.longs === String ? $util.Long.prototype.toString.call(message.useId) : options.longs === Number ? new $util.LongBits(message.useId.low >>> 0, message.useId.high >>> 0).toNumber() : message.useId;
                return object;
            };

            /**
             * Converts this PotInfo to JSON.
             * @function toJSON
             * @memberof tongits.v1.PotInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PotInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PotInfo
             * @function getTypeUrl
             * @memberof tongits.v1.PotInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PotInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.PotInfo";
            };

            return PotInfo;
        })();

        v1.PlayerResult = (function() {

            /**
             * Properties of a PlayerResult.
             * @memberof tongits.v1
             * @interface IPlayerResult
             * @property {tongits.v1.ITongitsPlayerInfo|null} [playerInfo] PlayerResult playerInfo
             * @property {number|null} [sumWinBonus] PlayerResult sumWinBonus
             * @property {number|null} [normalWinBonus] PlayerResult normalWinBonus
             * @property {number|null} [tongitsWinBonus] PlayerResult tongitsWinBonus
             * @property {number|null} [cardTypeBonus] PlayerResult cardTypeBonus
             * @property {number|null} [bonusBonus] PlayerResult bonusBonus
             * @property {number|null} [burnedBonus] PlayerResult burnedBonus
             * @property {number|null} [winChallengeBonus] PlayerResult winChallengeBonus
             * @property {number|null} [potBonus] PlayerResult potBonus
             * @property {number|null} [cardPoint] PlayerResult cardPoint
             */

            /**
             * Constructs a new PlayerResult.
             * @memberof tongits.v1
             * @classdesc Represents a PlayerResult.
             * @implements IPlayerResult
             * @constructor
             * @param {tongits.v1.IPlayerResult=} [properties] Properties to set
             */
            function PlayerResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerResult playerInfo.
             * @member {tongits.v1.ITongitsPlayerInfo|null|undefined} playerInfo
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.playerInfo = null;

            /**
             * PlayerResult sumWinBonus.
             * @member {number} sumWinBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.sumWinBonus = 0;

            /**
             * PlayerResult normalWinBonus.
             * @member {number} normalWinBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.normalWinBonus = 0;

            /**
             * PlayerResult tongitsWinBonus.
             * @member {number} tongitsWinBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.tongitsWinBonus = 0;

            /**
             * PlayerResult cardTypeBonus.
             * @member {number} cardTypeBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.cardTypeBonus = 0;

            /**
             * PlayerResult bonusBonus.
             * @member {number} bonusBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.bonusBonus = 0;

            /**
             * PlayerResult burnedBonus.
             * @member {number} burnedBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.burnedBonus = 0;

            /**
             * PlayerResult winChallengeBonus.
             * @member {number} winChallengeBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.winChallengeBonus = 0;

            /**
             * PlayerResult potBonus.
             * @member {number} potBonus
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.potBonus = 0;

            /**
             * PlayerResult cardPoint.
             * @member {number} cardPoint
             * @memberof tongits.v1.PlayerResult
             * @instance
             */
            PlayerResult.prototype.cardPoint = 0;

            /**
             * Creates a new PlayerResult instance using the specified properties.
             * @function create
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {tongits.v1.IPlayerResult=} [properties] Properties to set
             * @returns {tongits.v1.PlayerResult} PlayerResult instance
             */
            PlayerResult.create = function create(properties) {
                return new PlayerResult(properties);
            };

            /**
             * Encodes the specified PlayerResult message. Does not implicitly {@link tongits.v1.PlayerResult.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {tongits.v1.IPlayerResult} message PlayerResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.tongits.v1.TongitsPlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.sumWinBonus != null && Object.hasOwnProperty.call(message, "sumWinBonus"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sumWinBonus);
                if (message.normalWinBonus != null && Object.hasOwnProperty.call(message, "normalWinBonus"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.normalWinBonus);
                if (message.tongitsWinBonus != null && Object.hasOwnProperty.call(message, "tongitsWinBonus"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tongitsWinBonus);
                if (message.cardTypeBonus != null && Object.hasOwnProperty.call(message, "cardTypeBonus"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cardTypeBonus);
                if (message.bonusBonus != null && Object.hasOwnProperty.call(message, "bonusBonus"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bonusBonus);
                if (message.burnedBonus != null && Object.hasOwnProperty.call(message, "burnedBonus"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.burnedBonus);
                if (message.winChallengeBonus != null && Object.hasOwnProperty.call(message, "winChallengeBonus"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.winChallengeBonus);
                if (message.potBonus != null && Object.hasOwnProperty.call(message, "potBonus"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.potBonus);
                if (message.cardPoint != null && Object.hasOwnProperty.call(message, "cardPoint"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cardPoint);
                return writer;
            };

            /**
             * Encodes the specified PlayerResult message, length delimited. Does not implicitly {@link tongits.v1.PlayerResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {tongits.v1.IPlayerResult} message PlayerResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerResult message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.PlayerResult} PlayerResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.PlayerResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.playerInfo = $root.tongits.v1.TongitsPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.sumWinBonus = reader.int32();
                            break;
                        }
                    case 3: {
                            message.normalWinBonus = reader.int32();
                            break;
                        }
                    case 4: {
                            message.tongitsWinBonus = reader.int32();
                            break;
                        }
                    case 5: {
                            message.cardTypeBonus = reader.int32();
                            break;
                        }
                    case 6: {
                            message.bonusBonus = reader.int32();
                            break;
                        }
                    case 7: {
                            message.burnedBonus = reader.int32();
                            break;
                        }
                    case 8: {
                            message.winChallengeBonus = reader.int32();
                            break;
                        }
                    case 9: {
                            message.potBonus = reader.int32();
                            break;
                        }
                    case 10: {
                            message.cardPoint = reader.int32();
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
             * Decodes a PlayerResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.PlayerResult} PlayerResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerResult message.
             * @function verify
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.tongits.v1.TongitsPlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.sumWinBonus != null && message.hasOwnProperty("sumWinBonus"))
                    if (!$util.isInteger(message.sumWinBonus))
                        return "sumWinBonus: integer expected";
                if (message.normalWinBonus != null && message.hasOwnProperty("normalWinBonus"))
                    if (!$util.isInteger(message.normalWinBonus))
                        return "normalWinBonus: integer expected";
                if (message.tongitsWinBonus != null && message.hasOwnProperty("tongitsWinBonus"))
                    if (!$util.isInteger(message.tongitsWinBonus))
                        return "tongitsWinBonus: integer expected";
                if (message.cardTypeBonus != null && message.hasOwnProperty("cardTypeBonus"))
                    if (!$util.isInteger(message.cardTypeBonus))
                        return "cardTypeBonus: integer expected";
                if (message.bonusBonus != null && message.hasOwnProperty("bonusBonus"))
                    if (!$util.isInteger(message.bonusBonus))
                        return "bonusBonus: integer expected";
                if (message.burnedBonus != null && message.hasOwnProperty("burnedBonus"))
                    if (!$util.isInteger(message.burnedBonus))
                        return "burnedBonus: integer expected";
                if (message.winChallengeBonus != null && message.hasOwnProperty("winChallengeBonus"))
                    if (!$util.isInteger(message.winChallengeBonus))
                        return "winChallengeBonus: integer expected";
                if (message.potBonus != null && message.hasOwnProperty("potBonus"))
                    if (!$util.isInteger(message.potBonus))
                        return "potBonus: integer expected";
                if (message.cardPoint != null && message.hasOwnProperty("cardPoint"))
                    if (!$util.isInteger(message.cardPoint))
                        return "cardPoint: integer expected";
                return null;
            };

            /**
             * Creates a PlayerResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.PlayerResult} PlayerResult
             */
            PlayerResult.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.PlayerResult)
                    return object;
                var message = new $root.tongits.v1.PlayerResult();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".tongits.v1.PlayerResult.playerInfo: object expected");
                    message.playerInfo = $root.tongits.v1.TongitsPlayerInfo.fromObject(object.playerInfo);
                }
                if (object.sumWinBonus != null)
                    message.sumWinBonus = object.sumWinBonus | 0;
                if (object.normalWinBonus != null)
                    message.normalWinBonus = object.normalWinBonus | 0;
                if (object.tongitsWinBonus != null)
                    message.tongitsWinBonus = object.tongitsWinBonus | 0;
                if (object.cardTypeBonus != null)
                    message.cardTypeBonus = object.cardTypeBonus | 0;
                if (object.bonusBonus != null)
                    message.bonusBonus = object.bonusBonus | 0;
                if (object.burnedBonus != null)
                    message.burnedBonus = object.burnedBonus | 0;
                if (object.winChallengeBonus != null)
                    message.winChallengeBonus = object.winChallengeBonus | 0;
                if (object.potBonus != null)
                    message.potBonus = object.potBonus | 0;
                if (object.cardPoint != null)
                    message.cardPoint = object.cardPoint | 0;
                return message;
            };

            /**
             * Creates a plain object from a PlayerResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {tongits.v1.PlayerResult} message PlayerResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.playerInfo = null;
                    object.sumWinBonus = 0;
                    object.normalWinBonus = 0;
                    object.tongitsWinBonus = 0;
                    object.cardTypeBonus = 0;
                    object.bonusBonus = 0;
                    object.burnedBonus = 0;
                    object.winChallengeBonus = 0;
                    object.potBonus = 0;
                    object.cardPoint = 0;
                }
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.tongits.v1.TongitsPlayerInfo.toObject(message.playerInfo, options);
                if (message.sumWinBonus != null && message.hasOwnProperty("sumWinBonus"))
                    object.sumWinBonus = message.sumWinBonus;
                if (message.normalWinBonus != null && message.hasOwnProperty("normalWinBonus"))
                    object.normalWinBonus = message.normalWinBonus;
                if (message.tongitsWinBonus != null && message.hasOwnProperty("tongitsWinBonus"))
                    object.tongitsWinBonus = message.tongitsWinBonus;
                if (message.cardTypeBonus != null && message.hasOwnProperty("cardTypeBonus"))
                    object.cardTypeBonus = message.cardTypeBonus;
                if (message.bonusBonus != null && message.hasOwnProperty("bonusBonus"))
                    object.bonusBonus = message.bonusBonus;
                if (message.burnedBonus != null && message.hasOwnProperty("burnedBonus"))
                    object.burnedBonus = message.burnedBonus;
                if (message.winChallengeBonus != null && message.hasOwnProperty("winChallengeBonus"))
                    object.winChallengeBonus = message.winChallengeBonus;
                if (message.potBonus != null && message.hasOwnProperty("potBonus"))
                    object.potBonus = message.potBonus;
                if (message.cardPoint != null && message.hasOwnProperty("cardPoint"))
                    object.cardPoint = message.cardPoint;
                return object;
            };

            /**
             * Converts this PlayerResult to JSON.
             * @function toJSON
             * @memberof tongits.v1.PlayerResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerResult
             * @function getTypeUrl
             * @memberof tongits.v1.PlayerResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.PlayerResult";
            };

            return PlayerResult;
        })();

        v1.JoinRoomReq = (function() {

            /**
             * Properties of a JoinRoomReq.
             * @memberof tongits.v1
             * @interface IJoinRoomReq
             * @property {number|Long|null} [roomId] JoinRoomReq roomId
             */

            /**
             * Constructs a new JoinRoomReq.
             * @memberof tongits.v1
             * @classdesc Represents a JoinRoomReq.
             * @implements IJoinRoomReq
             * @constructor
             * @param {tongits.v1.IJoinRoomReq=} [properties] Properties to set
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
             * @memberof tongits.v1.JoinRoomReq
             * @instance
             */
            JoinRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {tongits.v1.IJoinRoomReq=} [properties] Properties to set
             * @returns {tongits.v1.JoinRoomReq} JoinRoomReq instance
             */
            JoinRoomReq.create = function create(properties) {
                return new JoinRoomReq(properties);
            };

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link tongits.v1.JoinRoomReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {tongits.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
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
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link tongits.v1.JoinRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {tongits.v1.IJoinRoomReq} message JoinRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.JoinRoomReq} JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.JoinRoomReq();
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
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.JoinRoomReq} JoinRoomReq
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
             * @memberof tongits.v1.JoinRoomReq
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
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.JoinRoomReq} JoinRoomReq
             */
            JoinRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.JoinRoomReq)
                    return object;
                var message = new $root.tongits.v1.JoinRoomReq();
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
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {tongits.v1.JoinRoomReq} message JoinRoomReq
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
             * @memberof tongits.v1.JoinRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomReq
             * @function getTypeUrl
             * @memberof tongits.v1.JoinRoomReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.JoinRoomReq";
            };

            return JoinRoomReq;
        })();

        v1.JoinRoomRes = (function() {

            /**
             * Properties of a JoinRoomRes.
             * @memberof tongits.v1
             * @interface IJoinRoomRes
             * @property {tongits.v1.IRoomInfo|null} [roomInfo] JoinRoomRes roomInfo
             * @property {Array.<tongits.v1.ITongitsPlayerInfo>|null} [players] JoinRoomRes players
             * @property {Array.<common.v1.IPlayerInfo>|null} [watchers] JoinRoomRes watchers
             * @property {number|null} [playersCount] JoinRoomRes playersCount
             * @property {Array.<common.v1.IPlayerInfo>|null} [speakers] JoinRoomRes speakers
             * @property {tongits.v1.ITongitsPlayerInfo|null} [self] JoinRoomRes self
             * @property {tongits.v1.IGameInfo|null} [gameInfo] JoinRoomRes gameInfo
             * @property {common.v1.IPlayerSettings|null} [playerSettings] JoinRoomRes playerSettings
             */

            /**
             * Constructs a new JoinRoomRes.
             * @memberof tongits.v1
             * @classdesc Represents a JoinRoomRes.
             * @implements IJoinRoomRes
             * @constructor
             * @param {tongits.v1.IJoinRoomRes=} [properties] Properties to set
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
             * @member {tongits.v1.IRoomInfo|null|undefined} roomInfo
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.roomInfo = null;

            /**
             * JoinRoomRes players.
             * @member {Array.<tongits.v1.ITongitsPlayerInfo>} players
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.players = $util.emptyArray;

            /**
             * JoinRoomRes watchers.
             * @member {Array.<common.v1.IPlayerInfo>} watchers
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.watchers = $util.emptyArray;

            /**
             * JoinRoomRes playersCount.
             * @member {number} playersCount
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playersCount = 0;

            /**
             * JoinRoomRes speakers.
             * @member {Array.<common.v1.IPlayerInfo>} speakers
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.speakers = $util.emptyArray;

            /**
             * JoinRoomRes self.
             * @member {tongits.v1.ITongitsPlayerInfo|null|undefined} self
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.self = null;

            /**
             * JoinRoomRes gameInfo.
             * @member {tongits.v1.IGameInfo|null|undefined} gameInfo
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.gameInfo = null;

            /**
             * JoinRoomRes playerSettings.
             * @member {common.v1.IPlayerSettings|null|undefined} playerSettings
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             */
            JoinRoomRes.prototype.playerSettings = null;

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {tongits.v1.IJoinRoomRes=} [properties] Properties to set
             * @returns {tongits.v1.JoinRoomRes} JoinRoomRes instance
             */
            JoinRoomRes.create = function create(properties) {
                return new JoinRoomRes(properties);
            };

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link tongits.v1.JoinRoomRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {tongits.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                    $root.tongits.v1.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.tongits.v1.TongitsPlayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.watchers != null && message.watchers.length)
                    for (var i = 0; i < message.watchers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.watchers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.playersCount != null && Object.hasOwnProperty.call(message, "playersCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playersCount);
                if (message.speakers != null && message.speakers.length)
                    for (var i = 0; i < message.speakers.length; ++i)
                        $root.common.v1.PlayerInfo.encode(message.speakers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.tongits.v1.TongitsPlayerInfo.encode(message.self, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.tongits.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.playerSettings != null && Object.hasOwnProperty.call(message, "playerSettings"))
                    $root.common.v1.PlayerSettings.encode(message.playerSettings, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link tongits.v1.JoinRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {tongits.v1.IJoinRoomRes} message JoinRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.JoinRoomRes} JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.JoinRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.roomInfo = $root.tongits.v1.RoomInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.tongits.v1.TongitsPlayerInfo.decode(reader, reader.uint32()));
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
                            message.self = $root.tongits.v1.TongitsPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.gameInfo = $root.tongits.v1.GameInfo.decode(reader, reader.uint32());
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
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.JoinRoomRes} JoinRoomRes
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
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                    var error = $root.tongits.v1.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.tongits.v1.TongitsPlayerInfo.verify(message.players[i]);
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
                    var error = $root.tongits.v1.TongitsPlayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.tongits.v1.GameInfo.verify(message.gameInfo);
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
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.JoinRoomRes} JoinRoomRes
             */
            JoinRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.JoinRoomRes)
                    return object;
                var message = new $root.tongits.v1.JoinRoomRes();
                if (object.roomInfo != null) {
                    if (typeof object.roomInfo !== "object")
                        throw TypeError(".tongits.v1.JoinRoomRes.roomInfo: object expected");
                    message.roomInfo = $root.tongits.v1.RoomInfo.fromObject(object.roomInfo);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".tongits.v1.JoinRoomRes.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".tongits.v1.JoinRoomRes.players: object expected");
                        message.players[i] = $root.tongits.v1.TongitsPlayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.watchers) {
                    if (!Array.isArray(object.watchers))
                        throw TypeError(".tongits.v1.JoinRoomRes.watchers: array expected");
                    message.watchers = [];
                    for (var i = 0; i < object.watchers.length; ++i) {
                        if (typeof object.watchers[i] !== "object")
                            throw TypeError(".tongits.v1.JoinRoomRes.watchers: object expected");
                        message.watchers[i] = $root.common.v1.PlayerInfo.fromObject(object.watchers[i]);
                    }
                }
                if (object.playersCount != null)
                    message.playersCount = object.playersCount | 0;
                if (object.speakers) {
                    if (!Array.isArray(object.speakers))
                        throw TypeError(".tongits.v1.JoinRoomRes.speakers: array expected");
                    message.speakers = [];
                    for (var i = 0; i < object.speakers.length; ++i) {
                        if (typeof object.speakers[i] !== "object")
                            throw TypeError(".tongits.v1.JoinRoomRes.speakers: object expected");
                        message.speakers[i] = $root.common.v1.PlayerInfo.fromObject(object.speakers[i]);
                    }
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".tongits.v1.JoinRoomRes.self: object expected");
                    message.self = $root.tongits.v1.TongitsPlayerInfo.fromObject(object.self);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".tongits.v1.JoinRoomRes.gameInfo: object expected");
                    message.gameInfo = $root.tongits.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.playerSettings != null) {
                    if (typeof object.playerSettings !== "object")
                        throw TypeError(".tongits.v1.JoinRoomRes.playerSettings: object expected");
                    message.playerSettings = $root.common.v1.PlayerSettings.fromObject(object.playerSettings);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {tongits.v1.JoinRoomRes} message JoinRoomRes
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
                    object.roomInfo = $root.tongits.v1.RoomInfo.toObject(message.roomInfo, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.tongits.v1.TongitsPlayerInfo.toObject(message.players[j], options);
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
                    object.self = $root.tongits.v1.TongitsPlayerInfo.toObject(message.self, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.tongits.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.playerSettings != null && message.hasOwnProperty("playerSettings"))
                    object.playerSettings = $root.common.v1.PlayerSettings.toObject(message.playerSettings, options);
                return object;
            };

            /**
             * Converts this JoinRoomRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.JoinRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for JoinRoomRes
             * @function getTypeUrl
             * @memberof tongits.v1.JoinRoomRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            JoinRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.JoinRoomRes";
            };

            return JoinRoomRes;
        })();

        v1.StartGameReq = (function() {

            /**
             * Properties of a StartGameReq.
             * @memberof tongits.v1
             * @interface IStartGameReq
             */

            /**
             * Constructs a new StartGameReq.
             * @memberof tongits.v1
             * @classdesc Represents a StartGameReq.
             * @implements IStartGameReq
             * @constructor
             * @param {tongits.v1.IStartGameReq=} [properties] Properties to set
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
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {tongits.v1.IStartGameReq=} [properties] Properties to set
             * @returns {tongits.v1.StartGameReq} StartGameReq instance
             */
            StartGameReq.create = function create(properties) {
                return new StartGameReq(properties);
            };

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link tongits.v1.StartGameReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {tongits.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link tongits.v1.StartGameReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {tongits.v1.IStartGameReq} message StartGameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.StartGameReq} StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.StartGameReq();
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
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.StartGameReq} StartGameReq
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
             * @memberof tongits.v1.StartGameReq
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
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.StartGameReq} StartGameReq
             */
            StartGameReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.StartGameReq)
                    return object;
                return new $root.tongits.v1.StartGameReq();
            };

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {tongits.v1.StartGameReq} message StartGameReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.StartGameReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameReq
             * @function getTypeUrl
             * @memberof tongits.v1.StartGameReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.StartGameReq";
            };

            return StartGameReq;
        })();

        v1.StartGameRes = (function() {

            /**
             * Properties of a StartGameRes.
             * @memberof tongits.v1
             * @interface IStartGameRes
             */

            /**
             * Constructs a new StartGameRes.
             * @memberof tongits.v1
             * @classdesc Represents a StartGameRes.
             * @implements IStartGameRes
             * @constructor
             * @param {tongits.v1.IStartGameRes=} [properties] Properties to set
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
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {tongits.v1.IStartGameRes=} [properties] Properties to set
             * @returns {tongits.v1.StartGameRes} StartGameRes instance
             */
            StartGameRes.create = function create(properties) {
                return new StartGameRes(properties);
            };

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link tongits.v1.StartGameRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {tongits.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link tongits.v1.StartGameRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {tongits.v1.IStartGameRes} message StartGameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGameRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.StartGameRes} StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGameRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.StartGameRes();
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
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.StartGameRes} StartGameRes
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
             * @memberof tongits.v1.StartGameRes
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
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.StartGameRes} StartGameRes
             */
            StartGameRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.StartGameRes)
                    return object;
                return new $root.tongits.v1.StartGameRes();
            };

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {tongits.v1.StartGameRes} message StartGameRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGameRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGameRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.StartGameRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGameRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartGameRes
             * @function getTypeUrl
             * @memberof tongits.v1.StartGameRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.StartGameRes";
            };

            return StartGameRes;
        })();

        v1.GameStartBroadcast = (function() {

            /**
             * Properties of a GameStartBroadcast.
             * @memberof tongits.v1
             * @interface IGameStartBroadcast
             * @property {tongits.v1.IGameInfo|null} [gameInfo] GameStartBroadcast gameInfo
             * @property {Array.<tongits.v1.ITongitsPlayerInfo>|null} [players] GameStartBroadcast players
             * @property {number|Long|null} [userId] GameStartBroadcast userId
             */

            /**
             * Constructs a new GameStartBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a GameStartBroadcast.
             * @implements IGameStartBroadcast
             * @constructor
             * @param {tongits.v1.IGameStartBroadcast=} [properties] Properties to set
             */
            function GameStartBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameStartBroadcast gameInfo.
             * @member {tongits.v1.IGameInfo|null|undefined} gameInfo
             * @memberof tongits.v1.GameStartBroadcast
             * @instance
             */
            GameStartBroadcast.prototype.gameInfo = null;

            /**
             * GameStartBroadcast players.
             * @member {Array.<tongits.v1.ITongitsPlayerInfo>} players
             * @memberof tongits.v1.GameStartBroadcast
             * @instance
             */
            GameStartBroadcast.prototype.players = $util.emptyArray;

            /**
             * GameStartBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.GameStartBroadcast
             * @instance
             */
            GameStartBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GameStartBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {tongits.v1.IGameStartBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.GameStartBroadcast} GameStartBroadcast instance
             */
            GameStartBroadcast.create = function create(properties) {
                return new GameStartBroadcast(properties);
            };

            /**
             * Encodes the specified GameStartBroadcast message. Does not implicitly {@link tongits.v1.GameStartBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {tongits.v1.IGameStartBroadcast} message GameStartBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStartBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.tongits.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.tongits.v1.TongitsPlayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified GameStartBroadcast message, length delimited. Does not implicitly {@link tongits.v1.GameStartBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {tongits.v1.IGameStartBroadcast} message GameStartBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStartBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameStartBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.GameStartBroadcast} GameStartBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStartBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.GameStartBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.gameInfo = $root.tongits.v1.GameInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.tongits.v1.TongitsPlayerInfo.decode(reader, reader.uint32()));
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
             * Decodes a GameStartBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.GameStartBroadcast} GameStartBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStartBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameStartBroadcast message.
             * @function verify
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameStartBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.tongits.v1.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.tongits.v1.TongitsPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a GameStartBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.GameStartBroadcast} GameStartBroadcast
             */
            GameStartBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.GameStartBroadcast)
                    return object;
                var message = new $root.tongits.v1.GameStartBroadcast();
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".tongits.v1.GameStartBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.tongits.v1.GameInfo.fromObject(object.gameInfo);
                }
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".tongits.v1.GameStartBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".tongits.v1.GameStartBroadcast.players: object expected");
                        message.players[i] = $root.tongits.v1.TongitsPlayerInfo.fromObject(object.players[i]);
                    }
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
             * Creates a plain object from a GameStartBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {tongits.v1.GameStartBroadcast} message GameStartBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameStartBroadcast.toObject = function toObject(message, options) {
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
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.tongits.v1.GameInfo.toObject(message.gameInfo, options);
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.tongits.v1.TongitsPlayerInfo.toObject(message.players[j], options);
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this GameStartBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.GameStartBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameStartBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameStartBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.GameStartBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameStartBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.GameStartBroadcast";
            };

            return GameStartBroadcast;
        })();

        v1.TongitsReq = (function() {

            /**
             * Properties of a TongitsReq.
             * @memberof tongits.v1
             * @interface ITongitsReq
             */

            /**
             * Constructs a new TongitsReq.
             * @memberof tongits.v1
             * @classdesc Represents a TongitsReq.
             * @implements ITongitsReq
             * @constructor
             * @param {tongits.v1.ITongitsReq=} [properties] Properties to set
             */
            function TongitsReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new TongitsReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {tongits.v1.ITongitsReq=} [properties] Properties to set
             * @returns {tongits.v1.TongitsReq} TongitsReq instance
             */
            TongitsReq.create = function create(properties) {
                return new TongitsReq(properties);
            };

            /**
             * Encodes the specified TongitsReq message. Does not implicitly {@link tongits.v1.TongitsReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {tongits.v1.ITongitsReq} message TongitsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified TongitsReq message, length delimited. Does not implicitly {@link tongits.v1.TongitsReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {tongits.v1.ITongitsReq} message TongitsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TongitsReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TongitsReq} TongitsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TongitsReq();
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
             * Decodes a TongitsReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TongitsReq} TongitsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TongitsReq message.
             * @function verify
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TongitsReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a TongitsReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TongitsReq} TongitsReq
             */
            TongitsReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TongitsReq)
                    return object;
                return new $root.tongits.v1.TongitsReq();
            };

            /**
             * Creates a plain object from a TongitsReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {tongits.v1.TongitsReq} message TongitsReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TongitsReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this TongitsReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.TongitsReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TongitsReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TongitsReq
             * @function getTypeUrl
             * @memberof tongits.v1.TongitsReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TongitsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TongitsReq";
            };

            return TongitsReq;
        })();

        v1.TongitsRes = (function() {

            /**
             * Properties of a TongitsRes.
             * @memberof tongits.v1
             * @interface ITongitsRes
             */

            /**
             * Constructs a new TongitsRes.
             * @memberof tongits.v1
             * @classdesc Represents a TongitsRes.
             * @implements ITongitsRes
             * @constructor
             * @param {tongits.v1.ITongitsRes=} [properties] Properties to set
             */
            function TongitsRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new TongitsRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {tongits.v1.ITongitsRes=} [properties] Properties to set
             * @returns {tongits.v1.TongitsRes} TongitsRes instance
             */
            TongitsRes.create = function create(properties) {
                return new TongitsRes(properties);
            };

            /**
             * Encodes the specified TongitsRes message. Does not implicitly {@link tongits.v1.TongitsRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {tongits.v1.ITongitsRes} message TongitsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified TongitsRes message, length delimited. Does not implicitly {@link tongits.v1.TongitsRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {tongits.v1.ITongitsRes} message TongitsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TongitsRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TongitsRes} TongitsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TongitsRes();
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
             * Decodes a TongitsRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TongitsRes} TongitsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TongitsRes message.
             * @function verify
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TongitsRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a TongitsRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TongitsRes} TongitsRes
             */
            TongitsRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TongitsRes)
                    return object;
                return new $root.tongits.v1.TongitsRes();
            };

            /**
             * Creates a plain object from a TongitsRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {tongits.v1.TongitsRes} message TongitsRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TongitsRes.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this TongitsRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.TongitsRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TongitsRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TongitsRes
             * @function getTypeUrl
             * @memberof tongits.v1.TongitsRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TongitsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TongitsRes";
            };

            return TongitsRes;
        })();

        v1.DrawCardReq = (function() {

            /**
             * Properties of a DrawCardReq.
             * @memberof tongits.v1
             * @interface IDrawCardReq
             */

            /**
             * Constructs a new DrawCardReq.
             * @memberof tongits.v1
             * @classdesc Represents a DrawCardReq.
             * @implements IDrawCardReq
             * @constructor
             * @param {tongits.v1.IDrawCardReq=} [properties] Properties to set
             */
            function DrawCardReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DrawCardReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {tongits.v1.IDrawCardReq=} [properties] Properties to set
             * @returns {tongits.v1.DrawCardReq} DrawCardReq instance
             */
            DrawCardReq.create = function create(properties) {
                return new DrawCardReq(properties);
            };

            /**
             * Encodes the specified DrawCardReq message. Does not implicitly {@link tongits.v1.DrawCardReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {tongits.v1.IDrawCardReq} message DrawCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCardReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DrawCardReq message, length delimited. Does not implicitly {@link tongits.v1.DrawCardReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {tongits.v1.IDrawCardReq} message DrawCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCardReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DrawCardReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.DrawCardReq} DrawCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCardReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.DrawCardReq();
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
             * Decodes a DrawCardReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.DrawCardReq} DrawCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCardReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DrawCardReq message.
             * @function verify
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DrawCardReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DrawCardReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.DrawCardReq} DrawCardReq
             */
            DrawCardReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.DrawCardReq)
                    return object;
                return new $root.tongits.v1.DrawCardReq();
            };

            /**
             * Creates a plain object from a DrawCardReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {tongits.v1.DrawCardReq} message DrawCardReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DrawCardReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DrawCardReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.DrawCardReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DrawCardReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DrawCardReq
             * @function getTypeUrl
             * @memberof tongits.v1.DrawCardReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DrawCardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.DrawCardReq";
            };

            return DrawCardReq;
        })();

        v1.DrawCardRes = (function() {

            /**
             * Properties of a DrawCardRes.
             * @memberof tongits.v1
             * @interface IDrawCardRes
             * @property {number|null} [drawnCard] DrawCardRes drawnCard
             * @property {boolean|null} [hasTongits] DrawCardRes hasTongits
             * @property {number|null} [handCardCount] DrawCardRes handCardCount
             */

            /**
             * Constructs a new DrawCardRes.
             * @memberof tongits.v1
             * @classdesc Represents a DrawCardRes.
             * @implements IDrawCardRes
             * @constructor
             * @param {tongits.v1.IDrawCardRes=} [properties] Properties to set
             */
            function DrawCardRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DrawCardRes drawnCard.
             * @member {number} drawnCard
             * @memberof tongits.v1.DrawCardRes
             * @instance
             */
            DrawCardRes.prototype.drawnCard = 0;

            /**
             * DrawCardRes hasTongits.
             * @member {boolean} hasTongits
             * @memberof tongits.v1.DrawCardRes
             * @instance
             */
            DrawCardRes.prototype.hasTongits = false;

            /**
             * DrawCardRes handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.DrawCardRes
             * @instance
             */
            DrawCardRes.prototype.handCardCount = 0;

            /**
             * Creates a new DrawCardRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {tongits.v1.IDrawCardRes=} [properties] Properties to set
             * @returns {tongits.v1.DrawCardRes} DrawCardRes instance
             */
            DrawCardRes.create = function create(properties) {
                return new DrawCardRes(properties);
            };

            /**
             * Encodes the specified DrawCardRes message. Does not implicitly {@link tongits.v1.DrawCardRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {tongits.v1.IDrawCardRes} message DrawCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCardRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.drawnCard != null && Object.hasOwnProperty.call(message, "drawnCard"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.drawnCard);
                if (message.hasTongits != null && Object.hasOwnProperty.call(message, "hasTongits"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasTongits);
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handCardCount);
                return writer;
            };

            /**
             * Encodes the specified DrawCardRes message, length delimited. Does not implicitly {@link tongits.v1.DrawCardRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {tongits.v1.IDrawCardRes} message DrawCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCardRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DrawCardRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.DrawCardRes} DrawCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCardRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.DrawCardRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.drawnCard = reader.int32();
                            break;
                        }
                    case 2: {
                            message.hasTongits = reader.bool();
                            break;
                        }
                    case 3: {
                            message.handCardCount = reader.int32();
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
             * Decodes a DrawCardRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.DrawCardRes} DrawCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCardRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DrawCardRes message.
             * @function verify
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DrawCardRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.drawnCard != null && message.hasOwnProperty("drawnCard"))
                    if (!$util.isInteger(message.drawnCard))
                        return "drawnCard: integer expected";
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    if (typeof message.hasTongits !== "boolean")
                        return "hasTongits: boolean expected";
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                return null;
            };

            /**
             * Creates a DrawCardRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.DrawCardRes} DrawCardRes
             */
            DrawCardRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.DrawCardRes)
                    return object;
                var message = new $root.tongits.v1.DrawCardRes();
                if (object.drawnCard != null)
                    message.drawnCard = object.drawnCard | 0;
                if (object.hasTongits != null)
                    message.hasTongits = Boolean(object.hasTongits);
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a DrawCardRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {tongits.v1.DrawCardRes} message DrawCardRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DrawCardRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.drawnCard = 0;
                    object.hasTongits = false;
                    object.handCardCount = 0;
                }
                if (message.drawnCard != null && message.hasOwnProperty("drawnCard"))
                    object.drawnCard = message.drawnCard;
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    object.hasTongits = message.hasTongits;
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                return object;
            };

            /**
             * Converts this DrawCardRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.DrawCardRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DrawCardRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DrawCardRes
             * @function getTypeUrl
             * @memberof tongits.v1.DrawCardRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DrawCardRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.DrawCardRes";
            };

            return DrawCardRes;
        })();

        v1.DrawCardBroadcast = (function() {

            /**
             * Properties of a DrawCardBroadcast.
             * @memberof tongits.v1
             * @interface IDrawCardBroadcast
             * @property {number|Long|null} [playerId] DrawCardBroadcast playerId
             * @property {number|Long|null} [userId] DrawCardBroadcast userId
             * @property {number|null} [drawnCard] DrawCardBroadcast drawnCard
             * @property {number|null} [handCardCount] DrawCardBroadcast handCardCount
             */

            /**
             * Constructs a new DrawCardBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a DrawCardBroadcast.
             * @implements IDrawCardBroadcast
             * @constructor
             * @param {tongits.v1.IDrawCardBroadcast=} [properties] Properties to set
             */
            function DrawCardBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DrawCardBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof tongits.v1.DrawCardBroadcast
             * @instance
             */
            DrawCardBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DrawCardBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.DrawCardBroadcast
             * @instance
             */
            DrawCardBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DrawCardBroadcast drawnCard.
             * @member {number} drawnCard
             * @memberof tongits.v1.DrawCardBroadcast
             * @instance
             */
            DrawCardBroadcast.prototype.drawnCard = 0;

            /**
             * DrawCardBroadcast handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.DrawCardBroadcast
             * @instance
             */
            DrawCardBroadcast.prototype.handCardCount = 0;

            /**
             * Creates a new DrawCardBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {tongits.v1.IDrawCardBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.DrawCardBroadcast} DrawCardBroadcast instance
             */
            DrawCardBroadcast.create = function create(properties) {
                return new DrawCardBroadcast(properties);
            };

            /**
             * Encodes the specified DrawCardBroadcast message. Does not implicitly {@link tongits.v1.DrawCardBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {tongits.v1.IDrawCardBroadcast} message DrawCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCardBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                if (message.drawnCard != null && Object.hasOwnProperty.call(message, "drawnCard"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.drawnCard);
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.handCardCount);
                return writer;
            };

            /**
             * Encodes the specified DrawCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.DrawCardBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {tongits.v1.IDrawCardBroadcast} message DrawCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCardBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DrawCardBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.DrawCardBroadcast} DrawCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCardBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.DrawCardBroadcast();
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
                            message.userId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.drawnCard = reader.int32();
                            break;
                        }
                    case 4: {
                            message.handCardCount = reader.int32();
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
             * Decodes a DrawCardBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.DrawCardBroadcast} DrawCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCardBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DrawCardBroadcast message.
             * @function verify
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DrawCardBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.drawnCard != null && message.hasOwnProperty("drawnCard"))
                    if (!$util.isInteger(message.drawnCard))
                        return "drawnCard: integer expected";
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                return null;
            };

            /**
             * Creates a DrawCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.DrawCardBroadcast} DrawCardBroadcast
             */
            DrawCardBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.DrawCardBroadcast)
                    return object;
                var message = new $root.tongits.v1.DrawCardBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.drawnCard != null)
                    message.drawnCard = object.drawnCard | 0;
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a DrawCardBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {tongits.v1.DrawCardBroadcast} message DrawCardBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DrawCardBroadcast.toObject = function toObject(message, options) {
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
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.drawnCard = 0;
                    object.handCardCount = 0;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (typeof message.playerId === "number")
                        object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                    else
                        object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.drawnCard != null && message.hasOwnProperty("drawnCard"))
                    object.drawnCard = message.drawnCard;
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                return object;
            };

            /**
             * Converts this DrawCardBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.DrawCardBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DrawCardBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DrawCardBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.DrawCardBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DrawCardBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.DrawCardBroadcast";
            };

            return DrawCardBroadcast;
        })();

        v1.MeldCardReq = (function() {

            /**
             * Properties of a MeldCardReq.
             * @memberof tongits.v1
             * @interface IMeldCardReq
             * @property {Array.<number>|null} [cards] MeldCardReq cards
             */

            /**
             * Constructs a new MeldCardReq.
             * @memberof tongits.v1
             * @classdesc Represents a MeldCardReq.
             * @implements IMeldCardReq
             * @constructor
             * @param {tongits.v1.IMeldCardReq=} [properties] Properties to set
             */
            function MeldCardReq(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MeldCardReq cards.
             * @member {Array.<number>} cards
             * @memberof tongits.v1.MeldCardReq
             * @instance
             */
            MeldCardReq.prototype.cards = $util.emptyArray;

            /**
             * Creates a new MeldCardReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {tongits.v1.IMeldCardReq=} [properties] Properties to set
             * @returns {tongits.v1.MeldCardReq} MeldCardReq instance
             */
            MeldCardReq.create = function create(properties) {
                return new MeldCardReq(properties);
            };

            /**
             * Encodes the specified MeldCardReq message. Does not implicitly {@link tongits.v1.MeldCardReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {tongits.v1.IMeldCardReq} message MeldCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeldCardReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified MeldCardReq message, length delimited. Does not implicitly {@link tongits.v1.MeldCardReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {tongits.v1.IMeldCardReq} message MeldCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeldCardReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MeldCardReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.MeldCardReq} MeldCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeldCardReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.MeldCardReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
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
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MeldCardReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.MeldCardReq} MeldCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeldCardReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MeldCardReq message.
             * @function verify
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MeldCardReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a MeldCardReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.MeldCardReq} MeldCardReq
             */
            MeldCardReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.MeldCardReq)
                    return object;
                var message = new $root.tongits.v1.MeldCardReq();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".tongits.v1.MeldCardReq.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a MeldCardReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {tongits.v1.MeldCardReq} message MeldCardReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MeldCardReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                return object;
            };

            /**
             * Converts this MeldCardReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.MeldCardReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MeldCardReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MeldCardReq
             * @function getTypeUrl
             * @memberof tongits.v1.MeldCardReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MeldCardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.MeldCardReq";
            };

            return MeldCardReq;
        })();

        v1.MeldCardRes = (function() {

            /**
             * Properties of a MeldCardRes.
             * @memberof tongits.v1
             * @interface IMeldCardRes
             * @property {tongits.v1.IMeld|null} [newMeld] MeldCardRes newMeld
             * @property {boolean|null} [hasTongits] MeldCardRes hasTongits
             * @property {number|null} [handCardCount] MeldCardRes handCardCount
             */

            /**
             * Constructs a new MeldCardRes.
             * @memberof tongits.v1
             * @classdesc Represents a MeldCardRes.
             * @implements IMeldCardRes
             * @constructor
             * @param {tongits.v1.IMeldCardRes=} [properties] Properties to set
             */
            function MeldCardRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MeldCardRes newMeld.
             * @member {tongits.v1.IMeld|null|undefined} newMeld
             * @memberof tongits.v1.MeldCardRes
             * @instance
             */
            MeldCardRes.prototype.newMeld = null;

            /**
             * MeldCardRes hasTongits.
             * @member {boolean} hasTongits
             * @memberof tongits.v1.MeldCardRes
             * @instance
             */
            MeldCardRes.prototype.hasTongits = false;

            /**
             * MeldCardRes handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.MeldCardRes
             * @instance
             */
            MeldCardRes.prototype.handCardCount = 0;

            /**
             * Creates a new MeldCardRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {tongits.v1.IMeldCardRes=} [properties] Properties to set
             * @returns {tongits.v1.MeldCardRes} MeldCardRes instance
             */
            MeldCardRes.create = function create(properties) {
                return new MeldCardRes(properties);
            };

            /**
             * Encodes the specified MeldCardRes message. Does not implicitly {@link tongits.v1.MeldCardRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {tongits.v1.IMeldCardRes} message MeldCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeldCardRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.newMeld != null && Object.hasOwnProperty.call(message, "newMeld"))
                    $root.tongits.v1.Meld.encode(message.newMeld, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.hasTongits != null && Object.hasOwnProperty.call(message, "hasTongits"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasTongits);
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handCardCount);
                return writer;
            };

            /**
             * Encodes the specified MeldCardRes message, length delimited. Does not implicitly {@link tongits.v1.MeldCardRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {tongits.v1.IMeldCardRes} message MeldCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeldCardRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MeldCardRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.MeldCardRes} MeldCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeldCardRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.MeldCardRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.newMeld = $root.tongits.v1.Meld.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.hasTongits = reader.bool();
                            break;
                        }
                    case 3: {
                            message.handCardCount = reader.int32();
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
             * Decodes a MeldCardRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.MeldCardRes} MeldCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeldCardRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MeldCardRes message.
             * @function verify
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MeldCardRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.newMeld != null && message.hasOwnProperty("newMeld")) {
                    var error = $root.tongits.v1.Meld.verify(message.newMeld);
                    if (error)
                        return "newMeld." + error;
                }
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    if (typeof message.hasTongits !== "boolean")
                        return "hasTongits: boolean expected";
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                return null;
            };

            /**
             * Creates a MeldCardRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.MeldCardRes} MeldCardRes
             */
            MeldCardRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.MeldCardRes)
                    return object;
                var message = new $root.tongits.v1.MeldCardRes();
                if (object.newMeld != null) {
                    if (typeof object.newMeld !== "object")
                        throw TypeError(".tongits.v1.MeldCardRes.newMeld: object expected");
                    message.newMeld = $root.tongits.v1.Meld.fromObject(object.newMeld);
                }
                if (object.hasTongits != null)
                    message.hasTongits = Boolean(object.hasTongits);
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a MeldCardRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {tongits.v1.MeldCardRes} message MeldCardRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MeldCardRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.newMeld = null;
                    object.hasTongits = false;
                    object.handCardCount = 0;
                }
                if (message.newMeld != null && message.hasOwnProperty("newMeld"))
                    object.newMeld = $root.tongits.v1.Meld.toObject(message.newMeld, options);
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    object.hasTongits = message.hasTongits;
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                return object;
            };

            /**
             * Converts this MeldCardRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.MeldCardRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MeldCardRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MeldCardRes
             * @function getTypeUrl
             * @memberof tongits.v1.MeldCardRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MeldCardRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.MeldCardRes";
            };

            return MeldCardRes;
        })();

        v1.MeldCardBroadcast = (function() {

            /**
             * Properties of a MeldCardBroadcast.
             * @memberof tongits.v1
             * @interface IMeldCardBroadcast
             * @property {number|Long|null} [playerId] MeldCardBroadcast playerId
             * @property {tongits.v1.IMeld|null} [newMeld] MeldCardBroadcast newMeld
             * @property {number|null} [handCardCount] MeldCardBroadcast handCardCount
             * @property {number|Long|null} [userId] MeldCardBroadcast userId
             */

            /**
             * Constructs a new MeldCardBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a MeldCardBroadcast.
             * @implements IMeldCardBroadcast
             * @constructor
             * @param {tongits.v1.IMeldCardBroadcast=} [properties] Properties to set
             */
            function MeldCardBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MeldCardBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof tongits.v1.MeldCardBroadcast
             * @instance
             */
            MeldCardBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MeldCardBroadcast newMeld.
             * @member {tongits.v1.IMeld|null|undefined} newMeld
             * @memberof tongits.v1.MeldCardBroadcast
             * @instance
             */
            MeldCardBroadcast.prototype.newMeld = null;

            /**
             * MeldCardBroadcast handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.MeldCardBroadcast
             * @instance
             */
            MeldCardBroadcast.prototype.handCardCount = 0;

            /**
             * MeldCardBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.MeldCardBroadcast
             * @instance
             */
            MeldCardBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new MeldCardBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {tongits.v1.IMeldCardBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.MeldCardBroadcast} MeldCardBroadcast instance
             */
            MeldCardBroadcast.create = function create(properties) {
                return new MeldCardBroadcast(properties);
            };

            /**
             * Encodes the specified MeldCardBroadcast message. Does not implicitly {@link tongits.v1.MeldCardBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {tongits.v1.IMeldCardBroadcast} message MeldCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeldCardBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.newMeld != null && Object.hasOwnProperty.call(message, "newMeld"))
                    $root.tongits.v1.Meld.encode(message.newMeld, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handCardCount);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified MeldCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.MeldCardBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {tongits.v1.IMeldCardBroadcast} message MeldCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeldCardBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MeldCardBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.MeldCardBroadcast} MeldCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeldCardBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.MeldCardBroadcast();
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
                            message.newMeld = $root.tongits.v1.Meld.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.handCardCount = reader.int32();
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
             * Decodes a MeldCardBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.MeldCardBroadcast} MeldCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeldCardBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MeldCardBroadcast message.
             * @function verify
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MeldCardBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.newMeld != null && message.hasOwnProperty("newMeld")) {
                    var error = $root.tongits.v1.Meld.verify(message.newMeld);
                    if (error)
                        return "newMeld." + error;
                }
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a MeldCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.MeldCardBroadcast} MeldCardBroadcast
             */
            MeldCardBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.MeldCardBroadcast)
                    return object;
                var message = new $root.tongits.v1.MeldCardBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.newMeld != null) {
                    if (typeof object.newMeld !== "object")
                        throw TypeError(".tongits.v1.MeldCardBroadcast.newMeld: object expected");
                    message.newMeld = $root.tongits.v1.Meld.fromObject(object.newMeld);
                }
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
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
             * Creates a plain object from a MeldCardBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {tongits.v1.MeldCardBroadcast} message MeldCardBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MeldCardBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.newMeld = null;
                    object.handCardCount = 0;
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
                if (message.newMeld != null && message.hasOwnProperty("newMeld"))
                    object.newMeld = $root.tongits.v1.Meld.toObject(message.newMeld, options);
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this MeldCardBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.MeldCardBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MeldCardBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MeldCardBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.MeldCardBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MeldCardBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.MeldCardBroadcast";
            };

            return MeldCardBroadcast;
        })();

        v1.LayOffCardReq = (function() {

            /**
             * Properties of a LayOffCardReq.
             * @memberof tongits.v1
             * @interface ILayOffCardReq
             * @property {number|null} [card] LayOffCardReq card
             * @property {number|Long|null} [targetPlayerId] LayOffCardReq targetPlayerId
             * @property {number|null} [targetMeldId] LayOffCardReq targetMeldId
             */

            /**
             * Constructs a new LayOffCardReq.
             * @memberof tongits.v1
             * @classdesc Represents a LayOffCardReq.
             * @implements ILayOffCardReq
             * @constructor
             * @param {tongits.v1.ILayOffCardReq=} [properties] Properties to set
             */
            function LayOffCardReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LayOffCardReq card.
             * @member {number} card
             * @memberof tongits.v1.LayOffCardReq
             * @instance
             */
            LayOffCardReq.prototype.card = 0;

            /**
             * LayOffCardReq targetPlayerId.
             * @member {number|Long} targetPlayerId
             * @memberof tongits.v1.LayOffCardReq
             * @instance
             */
            LayOffCardReq.prototype.targetPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LayOffCardReq targetMeldId.
             * @member {number} targetMeldId
             * @memberof tongits.v1.LayOffCardReq
             * @instance
             */
            LayOffCardReq.prototype.targetMeldId = 0;

            /**
             * Creates a new LayOffCardReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {tongits.v1.ILayOffCardReq=} [properties] Properties to set
             * @returns {tongits.v1.LayOffCardReq} LayOffCardReq instance
             */
            LayOffCardReq.create = function create(properties) {
                return new LayOffCardReq(properties);
            };

            /**
             * Encodes the specified LayOffCardReq message. Does not implicitly {@link tongits.v1.LayOffCardReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {tongits.v1.ILayOffCardReq} message LayOffCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayOffCardReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.card);
                if (message.targetPlayerId != null && Object.hasOwnProperty.call(message, "targetPlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.targetPlayerId);
                if (message.targetMeldId != null && Object.hasOwnProperty.call(message, "targetMeldId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.targetMeldId);
                return writer;
            };

            /**
             * Encodes the specified LayOffCardReq message, length delimited. Does not implicitly {@link tongits.v1.LayOffCardReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {tongits.v1.ILayOffCardReq} message LayOffCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayOffCardReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LayOffCardReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.LayOffCardReq} LayOffCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayOffCardReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.LayOffCardReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.card = reader.int32();
                            break;
                        }
                    case 2: {
                            message.targetPlayerId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.targetMeldId = reader.int32();
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
             * Decodes a LayOffCardReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.LayOffCardReq} LayOffCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayOffCardReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LayOffCardReq message.
             * @function verify
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LayOffCardReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.card != null && message.hasOwnProperty("card"))
                    if (!$util.isInteger(message.card))
                        return "card: integer expected";
                if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                    if (!$util.isInteger(message.targetPlayerId) && !(message.targetPlayerId && $util.isInteger(message.targetPlayerId.low) && $util.isInteger(message.targetPlayerId.high)))
                        return "targetPlayerId: integer|Long expected";
                if (message.targetMeldId != null && message.hasOwnProperty("targetMeldId"))
                    if (!$util.isInteger(message.targetMeldId))
                        return "targetMeldId: integer expected";
                return null;
            };

            /**
             * Creates a LayOffCardReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.LayOffCardReq} LayOffCardReq
             */
            LayOffCardReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.LayOffCardReq)
                    return object;
                var message = new $root.tongits.v1.LayOffCardReq();
                if (object.card != null)
                    message.card = object.card | 0;
                if (object.targetPlayerId != null)
                    if ($util.Long)
                        (message.targetPlayerId = $util.Long.fromValue(object.targetPlayerId)).unsigned = false;
                    else if (typeof object.targetPlayerId === "string")
                        message.targetPlayerId = parseInt(object.targetPlayerId, 10);
                    else if (typeof object.targetPlayerId === "number")
                        message.targetPlayerId = object.targetPlayerId;
                    else if (typeof object.targetPlayerId === "object")
                        message.targetPlayerId = new $util.LongBits(object.targetPlayerId.low >>> 0, object.targetPlayerId.high >>> 0).toNumber();
                if (object.targetMeldId != null)
                    message.targetMeldId = object.targetMeldId | 0;
                return message;
            };

            /**
             * Creates a plain object from a LayOffCardReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {tongits.v1.LayOffCardReq} message LayOffCardReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LayOffCardReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.card = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.targetPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.targetPlayerId = options.longs === String ? "0" : 0;
                    object.targetMeldId = 0;
                }
                if (message.card != null && message.hasOwnProperty("card"))
                    object.card = message.card;
                if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                    if (typeof message.targetPlayerId === "number")
                        object.targetPlayerId = options.longs === String ? String(message.targetPlayerId) : message.targetPlayerId;
                    else
                        object.targetPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.targetPlayerId) : options.longs === Number ? new $util.LongBits(message.targetPlayerId.low >>> 0, message.targetPlayerId.high >>> 0).toNumber() : message.targetPlayerId;
                if (message.targetMeldId != null && message.hasOwnProperty("targetMeldId"))
                    object.targetMeldId = message.targetMeldId;
                return object;
            };

            /**
             * Converts this LayOffCardReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.LayOffCardReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LayOffCardReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LayOffCardReq
             * @function getTypeUrl
             * @memberof tongits.v1.LayOffCardReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LayOffCardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.LayOffCardReq";
            };

            return LayOffCardReq;
        })();

        v1.LayOffCardRes = (function() {

            /**
             * Properties of a LayOffCardRes.
             * @memberof tongits.v1
             * @interface ILayOffCardRes
             * @property {number|null} [cardAdded] LayOffCardRes cardAdded
             * @property {number|Long|null} [targetPlayerId] LayOffCardRes targetPlayerId
             * @property {number|null} [targetMeldId] LayOffCardRes targetMeldId
             * @property {boolean|null} [hasTongits] LayOffCardRes hasTongits
             * @property {number|null} [handCardCount] LayOffCardRes handCardCount
             */

            /**
             * Constructs a new LayOffCardRes.
             * @memberof tongits.v1
             * @classdesc Represents a LayOffCardRes.
             * @implements ILayOffCardRes
             * @constructor
             * @param {tongits.v1.ILayOffCardRes=} [properties] Properties to set
             */
            function LayOffCardRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LayOffCardRes cardAdded.
             * @member {number} cardAdded
             * @memberof tongits.v1.LayOffCardRes
             * @instance
             */
            LayOffCardRes.prototype.cardAdded = 0;

            /**
             * LayOffCardRes targetPlayerId.
             * @member {number|Long} targetPlayerId
             * @memberof tongits.v1.LayOffCardRes
             * @instance
             */
            LayOffCardRes.prototype.targetPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LayOffCardRes targetMeldId.
             * @member {number} targetMeldId
             * @memberof tongits.v1.LayOffCardRes
             * @instance
             */
            LayOffCardRes.prototype.targetMeldId = 0;

            /**
             * LayOffCardRes hasTongits.
             * @member {boolean} hasTongits
             * @memberof tongits.v1.LayOffCardRes
             * @instance
             */
            LayOffCardRes.prototype.hasTongits = false;

            /**
             * LayOffCardRes handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.LayOffCardRes
             * @instance
             */
            LayOffCardRes.prototype.handCardCount = 0;

            /**
             * Creates a new LayOffCardRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {tongits.v1.ILayOffCardRes=} [properties] Properties to set
             * @returns {tongits.v1.LayOffCardRes} LayOffCardRes instance
             */
            LayOffCardRes.create = function create(properties) {
                return new LayOffCardRes(properties);
            };

            /**
             * Encodes the specified LayOffCardRes message. Does not implicitly {@link tongits.v1.LayOffCardRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {tongits.v1.ILayOffCardRes} message LayOffCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayOffCardRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cardAdded != null && Object.hasOwnProperty.call(message, "cardAdded"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardAdded);
                if (message.targetPlayerId != null && Object.hasOwnProperty.call(message, "targetPlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.targetPlayerId);
                if (message.targetMeldId != null && Object.hasOwnProperty.call(message, "targetMeldId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.targetMeldId);
                if (message.hasTongits != null && Object.hasOwnProperty.call(message, "hasTongits"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasTongits);
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.handCardCount);
                return writer;
            };

            /**
             * Encodes the specified LayOffCardRes message, length delimited. Does not implicitly {@link tongits.v1.LayOffCardRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {tongits.v1.ILayOffCardRes} message LayOffCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayOffCardRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LayOffCardRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.LayOffCardRes} LayOffCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayOffCardRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.LayOffCardRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cardAdded = reader.int32();
                            break;
                        }
                    case 2: {
                            message.targetPlayerId = reader.int64();
                            break;
                        }
                    case 3: {
                            message.targetMeldId = reader.int32();
                            break;
                        }
                    case 4: {
                            message.hasTongits = reader.bool();
                            break;
                        }
                    case 5: {
                            message.handCardCount = reader.int32();
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
             * Decodes a LayOffCardRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.LayOffCardRes} LayOffCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayOffCardRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LayOffCardRes message.
             * @function verify
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LayOffCardRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cardAdded != null && message.hasOwnProperty("cardAdded"))
                    if (!$util.isInteger(message.cardAdded))
                        return "cardAdded: integer expected";
                if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                    if (!$util.isInteger(message.targetPlayerId) && !(message.targetPlayerId && $util.isInteger(message.targetPlayerId.low) && $util.isInteger(message.targetPlayerId.high)))
                        return "targetPlayerId: integer|Long expected";
                if (message.targetMeldId != null && message.hasOwnProperty("targetMeldId"))
                    if (!$util.isInteger(message.targetMeldId))
                        return "targetMeldId: integer expected";
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    if (typeof message.hasTongits !== "boolean")
                        return "hasTongits: boolean expected";
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                return null;
            };

            /**
             * Creates a LayOffCardRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.LayOffCardRes} LayOffCardRes
             */
            LayOffCardRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.LayOffCardRes)
                    return object;
                var message = new $root.tongits.v1.LayOffCardRes();
                if (object.cardAdded != null)
                    message.cardAdded = object.cardAdded | 0;
                if (object.targetPlayerId != null)
                    if ($util.Long)
                        (message.targetPlayerId = $util.Long.fromValue(object.targetPlayerId)).unsigned = false;
                    else if (typeof object.targetPlayerId === "string")
                        message.targetPlayerId = parseInt(object.targetPlayerId, 10);
                    else if (typeof object.targetPlayerId === "number")
                        message.targetPlayerId = object.targetPlayerId;
                    else if (typeof object.targetPlayerId === "object")
                        message.targetPlayerId = new $util.LongBits(object.targetPlayerId.low >>> 0, object.targetPlayerId.high >>> 0).toNumber();
                if (object.targetMeldId != null)
                    message.targetMeldId = object.targetMeldId | 0;
                if (object.hasTongits != null)
                    message.hasTongits = Boolean(object.hasTongits);
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a LayOffCardRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {tongits.v1.LayOffCardRes} message LayOffCardRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LayOffCardRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.cardAdded = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.targetPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.targetPlayerId = options.longs === String ? "0" : 0;
                    object.targetMeldId = 0;
                    object.hasTongits = false;
                    object.handCardCount = 0;
                }
                if (message.cardAdded != null && message.hasOwnProperty("cardAdded"))
                    object.cardAdded = message.cardAdded;
                if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                    if (typeof message.targetPlayerId === "number")
                        object.targetPlayerId = options.longs === String ? String(message.targetPlayerId) : message.targetPlayerId;
                    else
                        object.targetPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.targetPlayerId) : options.longs === Number ? new $util.LongBits(message.targetPlayerId.low >>> 0, message.targetPlayerId.high >>> 0).toNumber() : message.targetPlayerId;
                if (message.targetMeldId != null && message.hasOwnProperty("targetMeldId"))
                    object.targetMeldId = message.targetMeldId;
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    object.hasTongits = message.hasTongits;
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                return object;
            };

            /**
             * Converts this LayOffCardRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.LayOffCardRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LayOffCardRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LayOffCardRes
             * @function getTypeUrl
             * @memberof tongits.v1.LayOffCardRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LayOffCardRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.LayOffCardRes";
            };

            return LayOffCardRes;
        })();

        v1.LayOffCardBroadcast = (function() {

            /**
             * Properties of a LayOffCardBroadcast.
             * @memberof tongits.v1
             * @interface ILayOffCardBroadcast
             * @property {number|Long|null} [actionPlayerId] LayOffCardBroadcast actionPlayerId
             * @property {number|null} [cardAdded] LayOffCardBroadcast cardAdded
             * @property {number|Long|null} [targetPlayerId] LayOffCardBroadcast targetPlayerId
             * @property {number|null} [targetMeldId] LayOffCardBroadcast targetMeldId
             * @property {number|null} [handCardCount] LayOffCardBroadcast handCardCount
             * @property {number|Long|null} [userId] LayOffCardBroadcast userId
             */

            /**
             * Constructs a new LayOffCardBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a LayOffCardBroadcast.
             * @implements ILayOffCardBroadcast
             * @constructor
             * @param {tongits.v1.ILayOffCardBroadcast=} [properties] Properties to set
             */
            function LayOffCardBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LayOffCardBroadcast actionPlayerId.
             * @member {number|Long} actionPlayerId
             * @memberof tongits.v1.LayOffCardBroadcast
             * @instance
             */
            LayOffCardBroadcast.prototype.actionPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LayOffCardBroadcast cardAdded.
             * @member {number} cardAdded
             * @memberof tongits.v1.LayOffCardBroadcast
             * @instance
             */
            LayOffCardBroadcast.prototype.cardAdded = 0;

            /**
             * LayOffCardBroadcast targetPlayerId.
             * @member {number|Long} targetPlayerId
             * @memberof tongits.v1.LayOffCardBroadcast
             * @instance
             */
            LayOffCardBroadcast.prototype.targetPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LayOffCardBroadcast targetMeldId.
             * @member {number} targetMeldId
             * @memberof tongits.v1.LayOffCardBroadcast
             * @instance
             */
            LayOffCardBroadcast.prototype.targetMeldId = 0;

            /**
             * LayOffCardBroadcast handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.LayOffCardBroadcast
             * @instance
             */
            LayOffCardBroadcast.prototype.handCardCount = 0;

            /**
             * LayOffCardBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.LayOffCardBroadcast
             * @instance
             */
            LayOffCardBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new LayOffCardBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {tongits.v1.ILayOffCardBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.LayOffCardBroadcast} LayOffCardBroadcast instance
             */
            LayOffCardBroadcast.create = function create(properties) {
                return new LayOffCardBroadcast(properties);
            };

            /**
             * Encodes the specified LayOffCardBroadcast message. Does not implicitly {@link tongits.v1.LayOffCardBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {tongits.v1.ILayOffCardBroadcast} message LayOffCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayOffCardBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actionPlayerId != null && Object.hasOwnProperty.call(message, "actionPlayerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.actionPlayerId);
                if (message.cardAdded != null && Object.hasOwnProperty.call(message, "cardAdded"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardAdded);
                if (message.targetPlayerId != null && Object.hasOwnProperty.call(message, "targetPlayerId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.targetPlayerId);
                if (message.targetMeldId != null && Object.hasOwnProperty.call(message, "targetMeldId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.targetMeldId);
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.handCardCount);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified LayOffCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.LayOffCardBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {tongits.v1.ILayOffCardBroadcast} message LayOffCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayOffCardBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LayOffCardBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.LayOffCardBroadcast} LayOffCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayOffCardBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.LayOffCardBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.actionPlayerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.cardAdded = reader.int32();
                            break;
                        }
                    case 3: {
                            message.targetPlayerId = reader.int64();
                            break;
                        }
                    case 4: {
                            message.targetMeldId = reader.int32();
                            break;
                        }
                    case 5: {
                            message.handCardCount = reader.int32();
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
             * Decodes a LayOffCardBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.LayOffCardBroadcast} LayOffCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayOffCardBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LayOffCardBroadcast message.
             * @function verify
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LayOffCardBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    if (!$util.isInteger(message.actionPlayerId) && !(message.actionPlayerId && $util.isInteger(message.actionPlayerId.low) && $util.isInteger(message.actionPlayerId.high)))
                        return "actionPlayerId: integer|Long expected";
                if (message.cardAdded != null && message.hasOwnProperty("cardAdded"))
                    if (!$util.isInteger(message.cardAdded))
                        return "cardAdded: integer expected";
                if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                    if (!$util.isInteger(message.targetPlayerId) && !(message.targetPlayerId && $util.isInteger(message.targetPlayerId.low) && $util.isInteger(message.targetPlayerId.high)))
                        return "targetPlayerId: integer|Long expected";
                if (message.targetMeldId != null && message.hasOwnProperty("targetMeldId"))
                    if (!$util.isInteger(message.targetMeldId))
                        return "targetMeldId: integer expected";
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a LayOffCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.LayOffCardBroadcast} LayOffCardBroadcast
             */
            LayOffCardBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.LayOffCardBroadcast)
                    return object;
                var message = new $root.tongits.v1.LayOffCardBroadcast();
                if (object.actionPlayerId != null)
                    if ($util.Long)
                        (message.actionPlayerId = $util.Long.fromValue(object.actionPlayerId)).unsigned = false;
                    else if (typeof object.actionPlayerId === "string")
                        message.actionPlayerId = parseInt(object.actionPlayerId, 10);
                    else if (typeof object.actionPlayerId === "number")
                        message.actionPlayerId = object.actionPlayerId;
                    else if (typeof object.actionPlayerId === "object")
                        message.actionPlayerId = new $util.LongBits(object.actionPlayerId.low >>> 0, object.actionPlayerId.high >>> 0).toNumber();
                if (object.cardAdded != null)
                    message.cardAdded = object.cardAdded | 0;
                if (object.targetPlayerId != null)
                    if ($util.Long)
                        (message.targetPlayerId = $util.Long.fromValue(object.targetPlayerId)).unsigned = false;
                    else if (typeof object.targetPlayerId === "string")
                        message.targetPlayerId = parseInt(object.targetPlayerId, 10);
                    else if (typeof object.targetPlayerId === "number")
                        message.targetPlayerId = object.targetPlayerId;
                    else if (typeof object.targetPlayerId === "object")
                        message.targetPlayerId = new $util.LongBits(object.targetPlayerId.low >>> 0, object.targetPlayerId.high >>> 0).toNumber();
                if (object.targetMeldId != null)
                    message.targetMeldId = object.targetMeldId | 0;
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
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
             * Creates a plain object from a LayOffCardBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {tongits.v1.LayOffCardBroadcast} message LayOffCardBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LayOffCardBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.actionPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.actionPlayerId = options.longs === String ? "0" : 0;
                    object.cardAdded = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.targetPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.targetPlayerId = options.longs === String ? "0" : 0;
                    object.targetMeldId = 0;
                    object.handCardCount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    if (typeof message.actionPlayerId === "number")
                        object.actionPlayerId = options.longs === String ? String(message.actionPlayerId) : message.actionPlayerId;
                    else
                        object.actionPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.actionPlayerId) : options.longs === Number ? new $util.LongBits(message.actionPlayerId.low >>> 0, message.actionPlayerId.high >>> 0).toNumber() : message.actionPlayerId;
                if (message.cardAdded != null && message.hasOwnProperty("cardAdded"))
                    object.cardAdded = message.cardAdded;
                if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                    if (typeof message.targetPlayerId === "number")
                        object.targetPlayerId = options.longs === String ? String(message.targetPlayerId) : message.targetPlayerId;
                    else
                        object.targetPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.targetPlayerId) : options.longs === Number ? new $util.LongBits(message.targetPlayerId.low >>> 0, message.targetPlayerId.high >>> 0).toNumber() : message.targetPlayerId;
                if (message.targetMeldId != null && message.hasOwnProperty("targetMeldId"))
                    object.targetMeldId = message.targetMeldId;
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this LayOffCardBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.LayOffCardBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LayOffCardBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LayOffCardBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.LayOffCardBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LayOffCardBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.LayOffCardBroadcast";
            };

            return LayOffCardBroadcast;
        })();

        v1.DiscardCardReq = (function() {

            /**
             * Properties of a DiscardCardReq.
             * @memberof tongits.v1
             * @interface IDiscardCardReq
             * @property {number|null} [card] DiscardCardReq card
             */

            /**
             * Constructs a new DiscardCardReq.
             * @memberof tongits.v1
             * @classdesc Represents a DiscardCardReq.
             * @implements IDiscardCardReq
             * @constructor
             * @param {tongits.v1.IDiscardCardReq=} [properties] Properties to set
             */
            function DiscardCardReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardCardReq card.
             * @member {number} card
             * @memberof tongits.v1.DiscardCardReq
             * @instance
             */
            DiscardCardReq.prototype.card = 0;

            /**
             * Creates a new DiscardCardReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {tongits.v1.IDiscardCardReq=} [properties] Properties to set
             * @returns {tongits.v1.DiscardCardReq} DiscardCardReq instance
             */
            DiscardCardReq.create = function create(properties) {
                return new DiscardCardReq(properties);
            };

            /**
             * Encodes the specified DiscardCardReq message. Does not implicitly {@link tongits.v1.DiscardCardReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {tongits.v1.IDiscardCardReq} message DiscardCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCardReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.card);
                return writer;
            };

            /**
             * Encodes the specified DiscardCardReq message, length delimited. Does not implicitly {@link tongits.v1.DiscardCardReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {tongits.v1.IDiscardCardReq} message DiscardCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCardReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardCardReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.DiscardCardReq} DiscardCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCardReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.DiscardCardReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
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
             * Decodes a DiscardCardReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.DiscardCardReq} DiscardCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCardReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardCardReq message.
             * @function verify
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardCardReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.card != null && message.hasOwnProperty("card"))
                    if (!$util.isInteger(message.card))
                        return "card: integer expected";
                return null;
            };

            /**
             * Creates a DiscardCardReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.DiscardCardReq} DiscardCardReq
             */
            DiscardCardReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.DiscardCardReq)
                    return object;
                var message = new $root.tongits.v1.DiscardCardReq();
                if (object.card != null)
                    message.card = object.card | 0;
                return message;
            };

            /**
             * Creates a plain object from a DiscardCardReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {tongits.v1.DiscardCardReq} message DiscardCardReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardCardReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.card = 0;
                if (message.card != null && message.hasOwnProperty("card"))
                    object.card = message.card;
                return object;
            };

            /**
             * Converts this DiscardCardReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.DiscardCardReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardCardReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DiscardCardReq
             * @function getTypeUrl
             * @memberof tongits.v1.DiscardCardReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DiscardCardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.DiscardCardReq";
            };

            return DiscardCardReq;
        })();

        v1.DiscardCardRes = (function() {

            /**
             * Properties of a DiscardCardRes.
             * @memberof tongits.v1
             * @interface IDiscardCardRes
             * @property {number|null} [discardedCard] DiscardCardRes discardedCard
             * @property {Array.<number>|null} [unlockMelds] DiscardCardRes unlockMelds
             * @property {number|null} [handCardCount] DiscardCardRes handCardCount
             * @property {Array.<number>|null} [discardPile] DiscardCardRes discardPile
             */

            /**
             * Constructs a new DiscardCardRes.
             * @memberof tongits.v1
             * @classdesc Represents a DiscardCardRes.
             * @implements IDiscardCardRes
             * @constructor
             * @param {tongits.v1.IDiscardCardRes=} [properties] Properties to set
             */
            function DiscardCardRes(properties) {
                this.unlockMelds = [];
                this.discardPile = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardCardRes discardedCard.
             * @member {number} discardedCard
             * @memberof tongits.v1.DiscardCardRes
             * @instance
             */
            DiscardCardRes.prototype.discardedCard = 0;

            /**
             * DiscardCardRes unlockMelds.
             * @member {Array.<number>} unlockMelds
             * @memberof tongits.v1.DiscardCardRes
             * @instance
             */
            DiscardCardRes.prototype.unlockMelds = $util.emptyArray;

            /**
             * DiscardCardRes handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.DiscardCardRes
             * @instance
             */
            DiscardCardRes.prototype.handCardCount = 0;

            /**
             * DiscardCardRes discardPile.
             * @member {Array.<number>} discardPile
             * @memberof tongits.v1.DiscardCardRes
             * @instance
             */
            DiscardCardRes.prototype.discardPile = $util.emptyArray;

            /**
             * Creates a new DiscardCardRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {tongits.v1.IDiscardCardRes=} [properties] Properties to set
             * @returns {tongits.v1.DiscardCardRes} DiscardCardRes instance
             */
            DiscardCardRes.create = function create(properties) {
                return new DiscardCardRes(properties);
            };

            /**
             * Encodes the specified DiscardCardRes message. Does not implicitly {@link tongits.v1.DiscardCardRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {tongits.v1.IDiscardCardRes} message DiscardCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCardRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.discardedCard != null && Object.hasOwnProperty.call(message, "discardedCard"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.discardedCard);
                if (message.unlockMelds != null && message.unlockMelds.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.unlockMelds.length; ++i)
                        writer.int32(message.unlockMelds[i]);
                    writer.ldelim();
                }
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handCardCount);
                if (message.discardPile != null && message.discardPile.length) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork();
                    for (var i = 0; i < message.discardPile.length; ++i)
                        writer.int32(message.discardPile[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified DiscardCardRes message, length delimited. Does not implicitly {@link tongits.v1.DiscardCardRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {tongits.v1.IDiscardCardRes} message DiscardCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCardRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardCardRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.DiscardCardRes} DiscardCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCardRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.DiscardCardRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.discardedCard = reader.int32();
                            break;
                        }
                    case 2: {
                            if (!(message.unlockMelds && message.unlockMelds.length))
                                message.unlockMelds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unlockMelds.push(reader.int32());
                            } else
                                message.unlockMelds.push(reader.int32());
                            break;
                        }
                    case 3: {
                            message.handCardCount = reader.int32();
                            break;
                        }
                    case 5: {
                            if (!(message.discardPile && message.discardPile.length))
                                message.discardPile = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.discardPile.push(reader.int32());
                            } else
                                message.discardPile.push(reader.int32());
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
             * Decodes a DiscardCardRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.DiscardCardRes} DiscardCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCardRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardCardRes message.
             * @function verify
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardCardRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.discardedCard != null && message.hasOwnProperty("discardedCard"))
                    if (!$util.isInteger(message.discardedCard))
                        return "discardedCard: integer expected";
                if (message.unlockMelds != null && message.hasOwnProperty("unlockMelds")) {
                    if (!Array.isArray(message.unlockMelds))
                        return "unlockMelds: array expected";
                    for (var i = 0; i < message.unlockMelds.length; ++i)
                        if (!$util.isInteger(message.unlockMelds[i]))
                            return "unlockMelds: integer[] expected";
                }
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                if (message.discardPile != null && message.hasOwnProperty("discardPile")) {
                    if (!Array.isArray(message.discardPile))
                        return "discardPile: array expected";
                    for (var i = 0; i < message.discardPile.length; ++i)
                        if (!$util.isInteger(message.discardPile[i]))
                            return "discardPile: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a DiscardCardRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.DiscardCardRes} DiscardCardRes
             */
            DiscardCardRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.DiscardCardRes)
                    return object;
                var message = new $root.tongits.v1.DiscardCardRes();
                if (object.discardedCard != null)
                    message.discardedCard = object.discardedCard | 0;
                if (object.unlockMelds) {
                    if (!Array.isArray(object.unlockMelds))
                        throw TypeError(".tongits.v1.DiscardCardRes.unlockMelds: array expected");
                    message.unlockMelds = [];
                    for (var i = 0; i < object.unlockMelds.length; ++i)
                        message.unlockMelds[i] = object.unlockMelds[i] | 0;
                }
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                if (object.discardPile) {
                    if (!Array.isArray(object.discardPile))
                        throw TypeError(".tongits.v1.DiscardCardRes.discardPile: array expected");
                    message.discardPile = [];
                    for (var i = 0; i < object.discardPile.length; ++i)
                        message.discardPile[i] = object.discardPile[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a DiscardCardRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {tongits.v1.DiscardCardRes} message DiscardCardRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardCardRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.unlockMelds = [];
                    object.discardPile = [];
                }
                if (options.defaults) {
                    object.discardedCard = 0;
                    object.handCardCount = 0;
                }
                if (message.discardedCard != null && message.hasOwnProperty("discardedCard"))
                    object.discardedCard = message.discardedCard;
                if (message.unlockMelds && message.unlockMelds.length) {
                    object.unlockMelds = [];
                    for (var j = 0; j < message.unlockMelds.length; ++j)
                        object.unlockMelds[j] = message.unlockMelds[j];
                }
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                if (message.discardPile && message.discardPile.length) {
                    object.discardPile = [];
                    for (var j = 0; j < message.discardPile.length; ++j)
                        object.discardPile[j] = message.discardPile[j];
                }
                return object;
            };

            /**
             * Converts this DiscardCardRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.DiscardCardRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardCardRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DiscardCardRes
             * @function getTypeUrl
             * @memberof tongits.v1.DiscardCardRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DiscardCardRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.DiscardCardRes";
            };

            return DiscardCardRes;
        })();

        v1.DiscardCardBroadcast = (function() {

            /**
             * Properties of a DiscardCardBroadcast.
             * @memberof tongits.v1
             * @interface IDiscardCardBroadcast
             * @property {number|Long|null} [playerId] DiscardCardBroadcast playerId
             * @property {number|null} [discardedCard] DiscardCardBroadcast discardedCard
             * @property {Array.<number>|null} [unlockMelds] DiscardCardBroadcast unlockMelds
             * @property {number|null} [handCardCount] DiscardCardBroadcast handCardCount
             * @property {Array.<number>|null} [discardPile] DiscardCardBroadcast discardPile
             * @property {number|Long|null} [userId] DiscardCardBroadcast userId
             */

            /**
             * Constructs a new DiscardCardBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a DiscardCardBroadcast.
             * @implements IDiscardCardBroadcast
             * @constructor
             * @param {tongits.v1.IDiscardCardBroadcast=} [properties] Properties to set
             */
            function DiscardCardBroadcast(properties) {
                this.unlockMelds = [];
                this.discardPile = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardCardBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof tongits.v1.DiscardCardBroadcast
             * @instance
             */
            DiscardCardBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DiscardCardBroadcast discardedCard.
             * @member {number} discardedCard
             * @memberof tongits.v1.DiscardCardBroadcast
             * @instance
             */
            DiscardCardBroadcast.prototype.discardedCard = 0;

            /**
             * DiscardCardBroadcast unlockMelds.
             * @member {Array.<number>} unlockMelds
             * @memberof tongits.v1.DiscardCardBroadcast
             * @instance
             */
            DiscardCardBroadcast.prototype.unlockMelds = $util.emptyArray;

            /**
             * DiscardCardBroadcast handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.DiscardCardBroadcast
             * @instance
             */
            DiscardCardBroadcast.prototype.handCardCount = 0;

            /**
             * DiscardCardBroadcast discardPile.
             * @member {Array.<number>} discardPile
             * @memberof tongits.v1.DiscardCardBroadcast
             * @instance
             */
            DiscardCardBroadcast.prototype.discardPile = $util.emptyArray;

            /**
             * DiscardCardBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.DiscardCardBroadcast
             * @instance
             */
            DiscardCardBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new DiscardCardBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {tongits.v1.IDiscardCardBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.DiscardCardBroadcast} DiscardCardBroadcast instance
             */
            DiscardCardBroadcast.create = function create(properties) {
                return new DiscardCardBroadcast(properties);
            };

            /**
             * Encodes the specified DiscardCardBroadcast message. Does not implicitly {@link tongits.v1.DiscardCardBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {tongits.v1.IDiscardCardBroadcast} message DiscardCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCardBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.discardedCard != null && Object.hasOwnProperty.call(message, "discardedCard"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.discardedCard);
                if (message.unlockMelds != null && message.unlockMelds.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.unlockMelds.length; ++i)
                        writer.int32(message.unlockMelds[i]);
                    writer.ldelim();
                }
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.handCardCount);
                if (message.discardPile != null && message.discardPile.length) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork();
                    for (var i = 0; i < message.discardPile.length; ++i)
                        writer.int32(message.discardPile[i]);
                    writer.ldelim();
                }
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified DiscardCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.DiscardCardBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {tongits.v1.IDiscardCardBroadcast} message DiscardCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCardBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardCardBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.DiscardCardBroadcast} DiscardCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCardBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.DiscardCardBroadcast();
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
                            message.discardedCard = reader.int32();
                            break;
                        }
                    case 3: {
                            if (!(message.unlockMelds && message.unlockMelds.length))
                                message.unlockMelds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unlockMelds.push(reader.int32());
                            } else
                                message.unlockMelds.push(reader.int32());
                            break;
                        }
                    case 4: {
                            message.handCardCount = reader.int32();
                            break;
                        }
                    case 5: {
                            if (!(message.discardPile && message.discardPile.length))
                                message.discardPile = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.discardPile.push(reader.int32());
                            } else
                                message.discardPile.push(reader.int32());
                            break;
                        }
                    case 11: {
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
             * Decodes a DiscardCardBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.DiscardCardBroadcast} DiscardCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCardBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardCardBroadcast message.
             * @function verify
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardCardBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.discardedCard != null && message.hasOwnProperty("discardedCard"))
                    if (!$util.isInteger(message.discardedCard))
                        return "discardedCard: integer expected";
                if (message.unlockMelds != null && message.hasOwnProperty("unlockMelds")) {
                    if (!Array.isArray(message.unlockMelds))
                        return "unlockMelds: array expected";
                    for (var i = 0; i < message.unlockMelds.length; ++i)
                        if (!$util.isInteger(message.unlockMelds[i]))
                            return "unlockMelds: integer[] expected";
                }
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                if (message.discardPile != null && message.hasOwnProperty("discardPile")) {
                    if (!Array.isArray(message.discardPile))
                        return "discardPile: array expected";
                    for (var i = 0; i < message.discardPile.length; ++i)
                        if (!$util.isInteger(message.discardPile[i]))
                            return "discardPile: integer[] expected";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a DiscardCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.DiscardCardBroadcast} DiscardCardBroadcast
             */
            DiscardCardBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.DiscardCardBroadcast)
                    return object;
                var message = new $root.tongits.v1.DiscardCardBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.discardedCard != null)
                    message.discardedCard = object.discardedCard | 0;
                if (object.unlockMelds) {
                    if (!Array.isArray(object.unlockMelds))
                        throw TypeError(".tongits.v1.DiscardCardBroadcast.unlockMelds: array expected");
                    message.unlockMelds = [];
                    for (var i = 0; i < object.unlockMelds.length; ++i)
                        message.unlockMelds[i] = object.unlockMelds[i] | 0;
                }
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                if (object.discardPile) {
                    if (!Array.isArray(object.discardPile))
                        throw TypeError(".tongits.v1.DiscardCardBroadcast.discardPile: array expected");
                    message.discardPile = [];
                    for (var i = 0; i < object.discardPile.length; ++i)
                        message.discardPile[i] = object.discardPile[i] | 0;
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
             * Creates a plain object from a DiscardCardBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {tongits.v1.DiscardCardBroadcast} message DiscardCardBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardCardBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.unlockMelds = [];
                    object.discardPile = [];
                }
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.discardedCard = 0;
                    object.handCardCount = 0;
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
                if (message.discardedCard != null && message.hasOwnProperty("discardedCard"))
                    object.discardedCard = message.discardedCard;
                if (message.unlockMelds && message.unlockMelds.length) {
                    object.unlockMelds = [];
                    for (var j = 0; j < message.unlockMelds.length; ++j)
                        object.unlockMelds[j] = message.unlockMelds[j];
                }
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                if (message.discardPile && message.discardPile.length) {
                    object.discardPile = [];
                    for (var j = 0; j < message.discardPile.length; ++j)
                        object.discardPile[j] = message.discardPile[j];
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this DiscardCardBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.DiscardCardBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardCardBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DiscardCardBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.DiscardCardBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DiscardCardBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.DiscardCardBroadcast";
            };

            return DiscardCardBroadcast;
        })();

        v1.TakeCardReq = (function() {

            /**
             * Properties of a TakeCardReq.
             * @memberof tongits.v1
             * @interface ITakeCardReq
             * @property {Array.<number>|null} [cardsFromHand] TakeCardReq cardsFromHand
             */

            /**
             * Constructs a new TakeCardReq.
             * @memberof tongits.v1
             * @classdesc Represents a TakeCardReq.
             * @implements ITakeCardReq
             * @constructor
             * @param {tongits.v1.ITakeCardReq=} [properties] Properties to set
             */
            function TakeCardReq(properties) {
                this.cardsFromHand = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TakeCardReq cardsFromHand.
             * @member {Array.<number>} cardsFromHand
             * @memberof tongits.v1.TakeCardReq
             * @instance
             */
            TakeCardReq.prototype.cardsFromHand = $util.emptyArray;

            /**
             * Creates a new TakeCardReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {tongits.v1.ITakeCardReq=} [properties] Properties to set
             * @returns {tongits.v1.TakeCardReq} TakeCardReq instance
             */
            TakeCardReq.create = function create(properties) {
                return new TakeCardReq(properties);
            };

            /**
             * Encodes the specified TakeCardReq message. Does not implicitly {@link tongits.v1.TakeCardReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {tongits.v1.ITakeCardReq} message TakeCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TakeCardReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cardsFromHand != null && message.cardsFromHand.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.cardsFromHand.length; ++i)
                        writer.int32(message.cardsFromHand[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified TakeCardReq message, length delimited. Does not implicitly {@link tongits.v1.TakeCardReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {tongits.v1.ITakeCardReq} message TakeCardReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TakeCardReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TakeCardReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TakeCardReq} TakeCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TakeCardReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TakeCardReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.cardsFromHand && message.cardsFromHand.length))
                                message.cardsFromHand = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.cardsFromHand.push(reader.int32());
                            } else
                                message.cardsFromHand.push(reader.int32());
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
             * Decodes a TakeCardReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TakeCardReq} TakeCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TakeCardReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TakeCardReq message.
             * @function verify
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TakeCardReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cardsFromHand != null && message.hasOwnProperty("cardsFromHand")) {
                    if (!Array.isArray(message.cardsFromHand))
                        return "cardsFromHand: array expected";
                    for (var i = 0; i < message.cardsFromHand.length; ++i)
                        if (!$util.isInteger(message.cardsFromHand[i]))
                            return "cardsFromHand: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a TakeCardReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TakeCardReq} TakeCardReq
             */
            TakeCardReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TakeCardReq)
                    return object;
                var message = new $root.tongits.v1.TakeCardReq();
                if (object.cardsFromHand) {
                    if (!Array.isArray(object.cardsFromHand))
                        throw TypeError(".tongits.v1.TakeCardReq.cardsFromHand: array expected");
                    message.cardsFromHand = [];
                    for (var i = 0; i < object.cardsFromHand.length; ++i)
                        message.cardsFromHand[i] = object.cardsFromHand[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a TakeCardReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {tongits.v1.TakeCardReq} message TakeCardReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TakeCardReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cardsFromHand = [];
                if (message.cardsFromHand && message.cardsFromHand.length) {
                    object.cardsFromHand = [];
                    for (var j = 0; j < message.cardsFromHand.length; ++j)
                        object.cardsFromHand[j] = message.cardsFromHand[j];
                }
                return object;
            };

            /**
             * Converts this TakeCardReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.TakeCardReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TakeCardReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TakeCardReq
             * @function getTypeUrl
             * @memberof tongits.v1.TakeCardReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TakeCardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TakeCardReq";
            };

            return TakeCardReq;
        })();

        v1.TakeCardRes = (function() {

            /**
             * Properties of a TakeCardRes.
             * @memberof tongits.v1
             * @interface ITakeCardRes
             * @property {tongits.v1.IMeld|null} [newMeld] TakeCardRes newMeld
             * @property {boolean|null} [hasTongits] TakeCardRes hasTongits
             * @property {number|null} [handCardCount] TakeCardRes handCardCount
             * @property {number|null} [discard] TakeCardRes discard
             */

            /**
             * Constructs a new TakeCardRes.
             * @memberof tongits.v1
             * @classdesc Represents a TakeCardRes.
             * @implements ITakeCardRes
             * @constructor
             * @param {tongits.v1.ITakeCardRes=} [properties] Properties to set
             */
            function TakeCardRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TakeCardRes newMeld.
             * @member {tongits.v1.IMeld|null|undefined} newMeld
             * @memberof tongits.v1.TakeCardRes
             * @instance
             */
            TakeCardRes.prototype.newMeld = null;

            /**
             * TakeCardRes hasTongits.
             * @member {boolean} hasTongits
             * @memberof tongits.v1.TakeCardRes
             * @instance
             */
            TakeCardRes.prototype.hasTongits = false;

            /**
             * TakeCardRes handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.TakeCardRes
             * @instance
             */
            TakeCardRes.prototype.handCardCount = 0;

            /**
             * TakeCardRes discard.
             * @member {number} discard
             * @memberof tongits.v1.TakeCardRes
             * @instance
             */
            TakeCardRes.prototype.discard = 0;

            /**
             * Creates a new TakeCardRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {tongits.v1.ITakeCardRes=} [properties] Properties to set
             * @returns {tongits.v1.TakeCardRes} TakeCardRes instance
             */
            TakeCardRes.create = function create(properties) {
                return new TakeCardRes(properties);
            };

            /**
             * Encodes the specified TakeCardRes message. Does not implicitly {@link tongits.v1.TakeCardRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {tongits.v1.ITakeCardRes} message TakeCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TakeCardRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.newMeld != null && Object.hasOwnProperty.call(message, "newMeld"))
                    $root.tongits.v1.Meld.encode(message.newMeld, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.hasTongits != null && Object.hasOwnProperty.call(message, "hasTongits"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasTongits);
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handCardCount);
                if (message.discard != null && Object.hasOwnProperty.call(message, "discard"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.discard);
                return writer;
            };

            /**
             * Encodes the specified TakeCardRes message, length delimited. Does not implicitly {@link tongits.v1.TakeCardRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {tongits.v1.ITakeCardRes} message TakeCardRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TakeCardRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TakeCardRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TakeCardRes} TakeCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TakeCardRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TakeCardRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.newMeld = $root.tongits.v1.Meld.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.hasTongits = reader.bool();
                            break;
                        }
                    case 3: {
                            message.handCardCount = reader.int32();
                            break;
                        }
                    case 4: {
                            message.discard = reader.int32();
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
             * Decodes a TakeCardRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TakeCardRes} TakeCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TakeCardRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TakeCardRes message.
             * @function verify
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TakeCardRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.newMeld != null && message.hasOwnProperty("newMeld")) {
                    var error = $root.tongits.v1.Meld.verify(message.newMeld);
                    if (error)
                        return "newMeld." + error;
                }
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    if (typeof message.hasTongits !== "boolean")
                        return "hasTongits: boolean expected";
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                if (message.discard != null && message.hasOwnProperty("discard"))
                    if (!$util.isInteger(message.discard))
                        return "discard: integer expected";
                return null;
            };

            /**
             * Creates a TakeCardRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TakeCardRes} TakeCardRes
             */
            TakeCardRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TakeCardRes)
                    return object;
                var message = new $root.tongits.v1.TakeCardRes();
                if (object.newMeld != null) {
                    if (typeof object.newMeld !== "object")
                        throw TypeError(".tongits.v1.TakeCardRes.newMeld: object expected");
                    message.newMeld = $root.tongits.v1.Meld.fromObject(object.newMeld);
                }
                if (object.hasTongits != null)
                    message.hasTongits = Boolean(object.hasTongits);
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                if (object.discard != null)
                    message.discard = object.discard | 0;
                return message;
            };

            /**
             * Creates a plain object from a TakeCardRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {tongits.v1.TakeCardRes} message TakeCardRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TakeCardRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.newMeld = null;
                    object.hasTongits = false;
                    object.handCardCount = 0;
                    object.discard = 0;
                }
                if (message.newMeld != null && message.hasOwnProperty("newMeld"))
                    object.newMeld = $root.tongits.v1.Meld.toObject(message.newMeld, options);
                if (message.hasTongits != null && message.hasOwnProperty("hasTongits"))
                    object.hasTongits = message.hasTongits;
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                if (message.discard != null && message.hasOwnProperty("discard"))
                    object.discard = message.discard;
                return object;
            };

            /**
             * Converts this TakeCardRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.TakeCardRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TakeCardRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TakeCardRes
             * @function getTypeUrl
             * @memberof tongits.v1.TakeCardRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TakeCardRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TakeCardRes";
            };

            return TakeCardRes;
        })();

        v1.TakeCardBroadcast = (function() {

            /**
             * Properties of a TakeCardBroadcast.
             * @memberof tongits.v1
             * @interface ITakeCardBroadcast
             * @property {number|Long|null} [playerId] TakeCardBroadcast playerId
             * @property {tongits.v1.IMeld|null} [newMeld] TakeCardBroadcast newMeld
             * @property {number|null} [handCardCount] TakeCardBroadcast handCardCount
             * @property {number|null} [discard] TakeCardBroadcast discard
             * @property {number|Long|null} [userId] TakeCardBroadcast userId
             */

            /**
             * Constructs a new TakeCardBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a TakeCardBroadcast.
             * @implements ITakeCardBroadcast
             * @constructor
             * @param {tongits.v1.ITakeCardBroadcast=} [properties] Properties to set
             */
            function TakeCardBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TakeCardBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof tongits.v1.TakeCardBroadcast
             * @instance
             */
            TakeCardBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TakeCardBroadcast newMeld.
             * @member {tongits.v1.IMeld|null|undefined} newMeld
             * @memberof tongits.v1.TakeCardBroadcast
             * @instance
             */
            TakeCardBroadcast.prototype.newMeld = null;

            /**
             * TakeCardBroadcast handCardCount.
             * @member {number} handCardCount
             * @memberof tongits.v1.TakeCardBroadcast
             * @instance
             */
            TakeCardBroadcast.prototype.handCardCount = 0;

            /**
             * TakeCardBroadcast discard.
             * @member {number} discard
             * @memberof tongits.v1.TakeCardBroadcast
             * @instance
             */
            TakeCardBroadcast.prototype.discard = 0;

            /**
             * TakeCardBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.TakeCardBroadcast
             * @instance
             */
            TakeCardBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new TakeCardBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {tongits.v1.ITakeCardBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.TakeCardBroadcast} TakeCardBroadcast instance
             */
            TakeCardBroadcast.create = function create(properties) {
                return new TakeCardBroadcast(properties);
            };

            /**
             * Encodes the specified TakeCardBroadcast message. Does not implicitly {@link tongits.v1.TakeCardBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {tongits.v1.ITakeCardBroadcast} message TakeCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TakeCardBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.newMeld != null && Object.hasOwnProperty.call(message, "newMeld"))
                    $root.tongits.v1.Meld.encode(message.newMeld, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.handCardCount != null && Object.hasOwnProperty.call(message, "handCardCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handCardCount);
                if (message.discard != null && Object.hasOwnProperty.call(message, "discard"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.discard);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified TakeCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.TakeCardBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {tongits.v1.ITakeCardBroadcast} message TakeCardBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TakeCardBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TakeCardBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TakeCardBroadcast} TakeCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TakeCardBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TakeCardBroadcast();
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
                            message.newMeld = $root.tongits.v1.Meld.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.handCardCount = reader.int32();
                            break;
                        }
                    case 4: {
                            message.discard = reader.int32();
                            break;
                        }
                    case 5: {
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
             * Decodes a TakeCardBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TakeCardBroadcast} TakeCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TakeCardBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TakeCardBroadcast message.
             * @function verify
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TakeCardBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.newMeld != null && message.hasOwnProperty("newMeld")) {
                    var error = $root.tongits.v1.Meld.verify(message.newMeld);
                    if (error)
                        return "newMeld." + error;
                }
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    if (!$util.isInteger(message.handCardCount))
                        return "handCardCount: integer expected";
                if (message.discard != null && message.hasOwnProperty("discard"))
                    if (!$util.isInteger(message.discard))
                        return "discard: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a TakeCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TakeCardBroadcast} TakeCardBroadcast
             */
            TakeCardBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TakeCardBroadcast)
                    return object;
                var message = new $root.tongits.v1.TakeCardBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.newMeld != null) {
                    if (typeof object.newMeld !== "object")
                        throw TypeError(".tongits.v1.TakeCardBroadcast.newMeld: object expected");
                    message.newMeld = $root.tongits.v1.Meld.fromObject(object.newMeld);
                }
                if (object.handCardCount != null)
                    message.handCardCount = object.handCardCount | 0;
                if (object.discard != null)
                    message.discard = object.discard | 0;
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
             * Creates a plain object from a TakeCardBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {tongits.v1.TakeCardBroadcast} message TakeCardBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TakeCardBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.newMeld = null;
                    object.handCardCount = 0;
                    object.discard = 0;
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
                if (message.newMeld != null && message.hasOwnProperty("newMeld"))
                    object.newMeld = $root.tongits.v1.Meld.toObject(message.newMeld, options);
                if (message.handCardCount != null && message.hasOwnProperty("handCardCount"))
                    object.handCardCount = message.handCardCount;
                if (message.discard != null && message.hasOwnProperty("discard"))
                    object.discard = message.discard;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this TakeCardBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.TakeCardBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TakeCardBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TakeCardBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.TakeCardBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TakeCardBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TakeCardBroadcast";
            };

            return TakeCardBroadcast;
        })();

        v1.ChallengeReq = (function() {

            /**
             * Properties of a ChallengeReq.
             * @memberof tongits.v1
             * @interface IChallengeReq
             * @property {number|null} [changeStatus] ChallengeReq changeStatus
             */

            /**
             * Constructs a new ChallengeReq.
             * @memberof tongits.v1
             * @classdesc Represents a ChallengeReq.
             * @implements IChallengeReq
             * @constructor
             * @param {tongits.v1.IChallengeReq=} [properties] Properties to set
             */
            function ChallengeReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChallengeReq changeStatus.
             * @member {number} changeStatus
             * @memberof tongits.v1.ChallengeReq
             * @instance
             */
            ChallengeReq.prototype.changeStatus = 0;

            /**
             * Creates a new ChallengeReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {tongits.v1.IChallengeReq=} [properties] Properties to set
             * @returns {tongits.v1.ChallengeReq} ChallengeReq instance
             */
            ChallengeReq.create = function create(properties) {
                return new ChallengeReq(properties);
            };

            /**
             * Encodes the specified ChallengeReq message. Does not implicitly {@link tongits.v1.ChallengeReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {tongits.v1.IChallengeReq} message ChallengeReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.changeStatus != null && Object.hasOwnProperty.call(message, "changeStatus"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.changeStatus);
                return writer;
            };

            /**
             * Encodes the specified ChallengeReq message, length delimited. Does not implicitly {@link tongits.v1.ChallengeReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {tongits.v1.IChallengeReq} message ChallengeReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChallengeReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.ChallengeReq} ChallengeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.ChallengeReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.changeStatus = reader.int32();
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
             * Decodes a ChallengeReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.ChallengeReq} ChallengeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChallengeReq message.
             * @function verify
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChallengeReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    if (!$util.isInteger(message.changeStatus))
                        return "changeStatus: integer expected";
                return null;
            };

            /**
             * Creates a ChallengeReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.ChallengeReq} ChallengeReq
             */
            ChallengeReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.ChallengeReq)
                    return object;
                var message = new $root.tongits.v1.ChallengeReq();
                if (object.changeStatus != null)
                    message.changeStatus = object.changeStatus | 0;
                return message;
            };

            /**
             * Creates a plain object from a ChallengeReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {tongits.v1.ChallengeReq} message ChallengeReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChallengeReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.changeStatus = 0;
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    object.changeStatus = message.changeStatus;
                return object;
            };

            /**
             * Converts this ChallengeReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.ChallengeReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChallengeReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChallengeReq
             * @function getTypeUrl
             * @memberof tongits.v1.ChallengeReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChallengeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.ChallengeReq";
            };

            return ChallengeReq;
        })();

        v1.ChallengeRes = (function() {

            /**
             * Properties of a ChallengeRes.
             * @memberof tongits.v1
             * @interface IChallengeRes
             * @property {Array.<tongits.v1.ITongitsBasePlayerInfo>|null} [basePlayers] ChallengeRes basePlayers
             */

            /**
             * Constructs a new ChallengeRes.
             * @memberof tongits.v1
             * @classdesc Represents a ChallengeRes.
             * @implements IChallengeRes
             * @constructor
             * @param {tongits.v1.IChallengeRes=} [properties] Properties to set
             */
            function ChallengeRes(properties) {
                this.basePlayers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChallengeRes basePlayers.
             * @member {Array.<tongits.v1.ITongitsBasePlayerInfo>} basePlayers
             * @memberof tongits.v1.ChallengeRes
             * @instance
             */
            ChallengeRes.prototype.basePlayers = $util.emptyArray;

            /**
             * Creates a new ChallengeRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {tongits.v1.IChallengeRes=} [properties] Properties to set
             * @returns {tongits.v1.ChallengeRes} ChallengeRes instance
             */
            ChallengeRes.create = function create(properties) {
                return new ChallengeRes(properties);
            };

            /**
             * Encodes the specified ChallengeRes message. Does not implicitly {@link tongits.v1.ChallengeRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {tongits.v1.IChallengeRes} message ChallengeRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.basePlayers != null && message.basePlayers.length)
                    for (var i = 0; i < message.basePlayers.length; ++i)
                        $root.tongits.v1.TongitsBasePlayerInfo.encode(message.basePlayers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ChallengeRes message, length delimited. Does not implicitly {@link tongits.v1.ChallengeRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {tongits.v1.IChallengeRes} message ChallengeRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChallengeRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.ChallengeRes} ChallengeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.ChallengeRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.basePlayers && message.basePlayers.length))
                                message.basePlayers = [];
                            message.basePlayers.push($root.tongits.v1.TongitsBasePlayerInfo.decode(reader, reader.uint32()));
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
             * Decodes a ChallengeRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.ChallengeRes} ChallengeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChallengeRes message.
             * @function verify
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChallengeRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.basePlayers != null && message.hasOwnProperty("basePlayers")) {
                    if (!Array.isArray(message.basePlayers))
                        return "basePlayers: array expected";
                    for (var i = 0; i < message.basePlayers.length; ++i) {
                        var error = $root.tongits.v1.TongitsBasePlayerInfo.verify(message.basePlayers[i]);
                        if (error)
                            return "basePlayers." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ChallengeRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.ChallengeRes} ChallengeRes
             */
            ChallengeRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.ChallengeRes)
                    return object;
                var message = new $root.tongits.v1.ChallengeRes();
                if (object.basePlayers) {
                    if (!Array.isArray(object.basePlayers))
                        throw TypeError(".tongits.v1.ChallengeRes.basePlayers: array expected");
                    message.basePlayers = [];
                    for (var i = 0; i < object.basePlayers.length; ++i) {
                        if (typeof object.basePlayers[i] !== "object")
                            throw TypeError(".tongits.v1.ChallengeRes.basePlayers: object expected");
                        message.basePlayers[i] = $root.tongits.v1.TongitsBasePlayerInfo.fromObject(object.basePlayers[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ChallengeRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {tongits.v1.ChallengeRes} message ChallengeRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChallengeRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.basePlayers = [];
                if (message.basePlayers && message.basePlayers.length) {
                    object.basePlayers = [];
                    for (var j = 0; j < message.basePlayers.length; ++j)
                        object.basePlayers[j] = $root.tongits.v1.TongitsBasePlayerInfo.toObject(message.basePlayers[j], options);
                }
                return object;
            };

            /**
             * Converts this ChallengeRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.ChallengeRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChallengeRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChallengeRes
             * @function getTypeUrl
             * @memberof tongits.v1.ChallengeRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChallengeRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.ChallengeRes";
            };

            return ChallengeRes;
        })();

        v1.ChallengeBroadcast = (function() {

            /**
             * Properties of a ChallengeBroadcast.
             * @memberof tongits.v1
             * @interface IChallengeBroadcast
             * @property {number|Long|null} [playerId] ChallengeBroadcast playerId
             * @property {Array.<tongits.v1.ITongitsBasePlayerInfo>|null} [basePlayers] ChallengeBroadcast basePlayers
             * @property {number|Long|null} [userId] ChallengeBroadcast userId
             */

            /**
             * Constructs a new ChallengeBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a ChallengeBroadcast.
             * @implements IChallengeBroadcast
             * @constructor
             * @param {tongits.v1.IChallengeBroadcast=} [properties] Properties to set
             */
            function ChallengeBroadcast(properties) {
                this.basePlayers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChallengeBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof tongits.v1.ChallengeBroadcast
             * @instance
             */
            ChallengeBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ChallengeBroadcast basePlayers.
             * @member {Array.<tongits.v1.ITongitsBasePlayerInfo>} basePlayers
             * @memberof tongits.v1.ChallengeBroadcast
             * @instance
             */
            ChallengeBroadcast.prototype.basePlayers = $util.emptyArray;

            /**
             * ChallengeBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.ChallengeBroadcast
             * @instance
             */
            ChallengeBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ChallengeBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {tongits.v1.IChallengeBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.ChallengeBroadcast} ChallengeBroadcast instance
             */
            ChallengeBroadcast.create = function create(properties) {
                return new ChallengeBroadcast(properties);
            };

            /**
             * Encodes the specified ChallengeBroadcast message. Does not implicitly {@link tongits.v1.ChallengeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {tongits.v1.IChallengeBroadcast} message ChallengeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.basePlayers != null && message.basePlayers.length)
                    for (var i = 0; i < message.basePlayers.length; ++i)
                        $root.tongits.v1.TongitsBasePlayerInfo.encode(message.basePlayers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified ChallengeBroadcast message, length delimited. Does not implicitly {@link tongits.v1.ChallengeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {tongits.v1.IChallengeBroadcast} message ChallengeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChallengeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.ChallengeBroadcast} ChallengeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.ChallengeBroadcast();
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
                            if (!(message.basePlayers && message.basePlayers.length))
                                message.basePlayers = [];
                            message.basePlayers.push($root.tongits.v1.TongitsBasePlayerInfo.decode(reader, reader.uint32()));
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
             * Decodes a ChallengeBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.ChallengeBroadcast} ChallengeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChallengeBroadcast message.
             * @function verify
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChallengeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.basePlayers != null && message.hasOwnProperty("basePlayers")) {
                    if (!Array.isArray(message.basePlayers))
                        return "basePlayers: array expected";
                    for (var i = 0; i < message.basePlayers.length; ++i) {
                        var error = $root.tongits.v1.TongitsBasePlayerInfo.verify(message.basePlayers[i]);
                        if (error)
                            return "basePlayers." + error;
                    }
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a ChallengeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.ChallengeBroadcast} ChallengeBroadcast
             */
            ChallengeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.ChallengeBroadcast)
                    return object;
                var message = new $root.tongits.v1.ChallengeBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.basePlayers) {
                    if (!Array.isArray(object.basePlayers))
                        throw TypeError(".tongits.v1.ChallengeBroadcast.basePlayers: array expected");
                    message.basePlayers = [];
                    for (var i = 0; i < object.basePlayers.length; ++i) {
                        if (typeof object.basePlayers[i] !== "object")
                            throw TypeError(".tongits.v1.ChallengeBroadcast.basePlayers: object expected");
                        message.basePlayers[i] = $root.tongits.v1.TongitsBasePlayerInfo.fromObject(object.basePlayers[i]);
                    }
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
             * Creates a plain object from a ChallengeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {tongits.v1.ChallengeBroadcast} message ChallengeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChallengeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.basePlayers = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
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
                if (message.basePlayers && message.basePlayers.length) {
                    object.basePlayers = [];
                    for (var j = 0; j < message.basePlayers.length; ++j)
                        object.basePlayers[j] = $root.tongits.v1.TongitsBasePlayerInfo.toObject(message.basePlayers[j], options);
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this ChallengeBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.ChallengeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChallengeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChallengeBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.ChallengeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChallengeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.ChallengeBroadcast";
            };

            return ChallengeBroadcast;
        })();

        v1.PKBroadcast = (function() {

            /**
             * Properties of a PKBroadcast.
             * @memberof tongits.v1
             * @interface IPKBroadcast
             * @property {number|Long|null} [playerId] PKBroadcast playerId
             * @property {number|null} [changeStatus] PKBroadcast changeStatus
             * @property {number|Long|null} [userId] PKBroadcast userId
             */

            /**
             * Constructs a new PKBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a PKBroadcast.
             * @implements IPKBroadcast
             * @constructor
             * @param {tongits.v1.IPKBroadcast=} [properties] Properties to set
             */
            function PKBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PKBroadcast playerId.
             * @member {number|Long} playerId
             * @memberof tongits.v1.PKBroadcast
             * @instance
             */
            PKBroadcast.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PKBroadcast changeStatus.
             * @member {number} changeStatus
             * @memberof tongits.v1.PKBroadcast
             * @instance
             */
            PKBroadcast.prototype.changeStatus = 0;

            /**
             * PKBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.PKBroadcast
             * @instance
             */
            PKBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PKBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {tongits.v1.IPKBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.PKBroadcast} PKBroadcast instance
             */
            PKBroadcast.create = function create(properties) {
                return new PKBroadcast(properties);
            };

            /**
             * Encodes the specified PKBroadcast message. Does not implicitly {@link tongits.v1.PKBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {tongits.v1.IPKBroadcast} message PKBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PKBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.changeStatus != null && Object.hasOwnProperty.call(message, "changeStatus"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.changeStatus);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified PKBroadcast message, length delimited. Does not implicitly {@link tongits.v1.PKBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {tongits.v1.IPKBroadcast} message PKBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PKBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PKBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.PKBroadcast} PKBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PKBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.PKBroadcast();
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
                            message.changeStatus = reader.int32();
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
             * Decodes a PKBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.PKBroadcast} PKBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PKBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PKBroadcast message.
             * @function verify
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PKBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                        return "playerId: integer|Long expected";
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    if (!$util.isInteger(message.changeStatus))
                        return "changeStatus: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a PKBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.PKBroadcast} PKBroadcast
             */
            PKBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.PKBroadcast)
                    return object;
                var message = new $root.tongits.v1.PKBroadcast();
                if (object.playerId != null)
                    if ($util.Long)
                        (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                    else if (typeof object.playerId === "string")
                        message.playerId = parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
                if (object.changeStatus != null)
                    message.changeStatus = object.changeStatus | 0;
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
             * Creates a plain object from a PKBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {tongits.v1.PKBroadcast} message PKBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PKBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.playerId = options.longs === String ? "0" : 0;
                    object.changeStatus = 0;
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
                if (message.changeStatus != null && message.hasOwnProperty("changeStatus"))
                    object.changeStatus = message.changeStatus;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this PKBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.PKBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PKBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PKBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.PKBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PKBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.PKBroadcast";
            };

            return PKBroadcast;
        })();

        v1.GameResultBroadcast = (function() {

            /**
             * Properties of a GameResultBroadcast.
             * @memberof tongits.v1
             * @interface IGameResultBroadcast
             * @property {number|Long|null} [winnerId] GameResultBroadcast winnerId
             * @property {Array.<tongits.v1.IPlayerResult>|null} [playerResults] GameResultBroadcast playerResults
             * @property {number|null} [countdown] GameResultBroadcast countdown
             * @property {number|Long|null} [userId] GameResultBroadcast userId
             */

            /**
             * Constructs a new GameResultBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a GameResultBroadcast.
             * @implements IGameResultBroadcast
             * @constructor
             * @param {tongits.v1.IGameResultBroadcast=} [properties] Properties to set
             */
            function GameResultBroadcast(properties) {
                this.playerResults = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameResultBroadcast winnerId.
             * @member {number|Long} winnerId
             * @memberof tongits.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.winnerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameResultBroadcast playerResults.
             * @member {Array.<tongits.v1.IPlayerResult>} playerResults
             * @memberof tongits.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.playerResults = $util.emptyArray;

            /**
             * GameResultBroadcast countdown.
             * @member {number} countdown
             * @memberof tongits.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.countdown = 0;

            /**
             * GameResultBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.GameResultBroadcast
             * @instance
             */
            GameResultBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GameResultBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {tongits.v1.IGameResultBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.GameResultBroadcast} GameResultBroadcast instance
             */
            GameResultBroadcast.create = function create(properties) {
                return new GameResultBroadcast(properties);
            };

            /**
             * Encodes the specified GameResultBroadcast message. Does not implicitly {@link tongits.v1.GameResultBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {tongits.v1.IGameResultBroadcast} message GameResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.winnerId);
                if (message.playerResults != null && message.playerResults.length)
                    for (var i = 0; i < message.playerResults.length; ++i)
                        $root.tongits.v1.PlayerResult.encode(message.playerResults[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.countdown);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified GameResultBroadcast message, length delimited. Does not implicitly {@link tongits.v1.GameResultBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {tongits.v1.IGameResultBroadcast} message GameResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameResultBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.GameResultBroadcast} GameResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.GameResultBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.winnerId = reader.int64();
                            break;
                        }
                    case 2: {
                            if (!(message.playerResults && message.playerResults.length))
                                message.playerResults = [];
                            message.playerResults.push($root.tongits.v1.PlayerResult.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.countdown = reader.int32();
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
             * Decodes a GameResultBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.GameResultBroadcast} GameResultBroadcast
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
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameResultBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId) && !(message.winnerId && $util.isInteger(message.winnerId.low) && $util.isInteger(message.winnerId.high)))
                        return "winnerId: integer|Long expected";
                if (message.playerResults != null && message.hasOwnProperty("playerResults")) {
                    if (!Array.isArray(message.playerResults))
                        return "playerResults: array expected";
                    for (var i = 0; i < message.playerResults.length; ++i) {
                        var error = $root.tongits.v1.PlayerResult.verify(message.playerResults[i]);
                        if (error)
                            return "playerResults." + error;
                    }
                }
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    if (!$util.isInteger(message.countdown))
                        return "countdown: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a GameResultBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.GameResultBroadcast} GameResultBroadcast
             */
            GameResultBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.GameResultBroadcast)
                    return object;
                var message = new $root.tongits.v1.GameResultBroadcast();
                if (object.winnerId != null)
                    if ($util.Long)
                        (message.winnerId = $util.Long.fromValue(object.winnerId)).unsigned = false;
                    else if (typeof object.winnerId === "string")
                        message.winnerId = parseInt(object.winnerId, 10);
                    else if (typeof object.winnerId === "number")
                        message.winnerId = object.winnerId;
                    else if (typeof object.winnerId === "object")
                        message.winnerId = new $util.LongBits(object.winnerId.low >>> 0, object.winnerId.high >>> 0).toNumber();
                if (object.playerResults) {
                    if (!Array.isArray(object.playerResults))
                        throw TypeError(".tongits.v1.GameResultBroadcast.playerResults: array expected");
                    message.playerResults = [];
                    for (var i = 0; i < object.playerResults.length; ++i) {
                        if (typeof object.playerResults[i] !== "object")
                            throw TypeError(".tongits.v1.GameResultBroadcast.playerResults: object expected");
                        message.playerResults[i] = $root.tongits.v1.PlayerResult.fromObject(object.playerResults[i]);
                    }
                }
                if (object.countdown != null)
                    message.countdown = object.countdown | 0;
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
             * Creates a plain object from a GameResultBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {tongits.v1.GameResultBroadcast} message GameResultBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameResultBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.playerResults = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winnerId = options.longs === String ? "0" : 0;
                    object.countdown = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (typeof message.winnerId === "number")
                        object.winnerId = options.longs === String ? String(message.winnerId) : message.winnerId;
                    else
                        object.winnerId = options.longs === String ? $util.Long.prototype.toString.call(message.winnerId) : options.longs === Number ? new $util.LongBits(message.winnerId.low >>> 0, message.winnerId.high >>> 0).toNumber() : message.winnerId;
                if (message.playerResults && message.playerResults.length) {
                    object.playerResults = [];
                    for (var j = 0; j < message.playerResults.length; ++j)
                        object.playerResults[j] = $root.tongits.v1.PlayerResult.toObject(message.playerResults[j], options);
                }
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    object.countdown = message.countdown;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this GameResultBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.GameResultBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameResultBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameResultBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.GameResultBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResultBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.GameResultBroadcast";
            };

            return GameResultBroadcast;
        })();

        v1.RoomResetBroadcast = (function() {

            /**
             * Properties of a RoomResetBroadcast.
             * @memberof tongits.v1
             * @interface IRoomResetBroadcast
             * @property {Array.<tongits.v1.ITongitsPlayerInfo>|null} [players] RoomResetBroadcast players
             * @property {tongits.v1.ITongitsPlayerInfo|null} [self] RoomResetBroadcast self
             * @property {tongits.v1.IGameInfo|null} [gameInfo] RoomResetBroadcast gameInfo
             * @property {number|Long|null} [userId] RoomResetBroadcast userId
             */

            /**
             * Constructs a new RoomResetBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a RoomResetBroadcast.
             * @implements IRoomResetBroadcast
             * @constructor
             * @param {tongits.v1.IRoomResetBroadcast=} [properties] Properties to set
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
             * @member {Array.<tongits.v1.ITongitsPlayerInfo>} players
             * @memberof tongits.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.players = $util.emptyArray;

            /**
             * RoomResetBroadcast self.
             * @member {tongits.v1.ITongitsPlayerInfo|null|undefined} self
             * @memberof tongits.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.self = null;

            /**
             * RoomResetBroadcast gameInfo.
             * @member {tongits.v1.IGameInfo|null|undefined} gameInfo
             * @memberof tongits.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.gameInfo = null;

            /**
             * RoomResetBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.RoomResetBroadcast
             * @instance
             */
            RoomResetBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RoomResetBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {tongits.v1.IRoomResetBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.RoomResetBroadcast} RoomResetBroadcast instance
             */
            RoomResetBroadcast.create = function create(properties) {
                return new RoomResetBroadcast(properties);
            };

            /**
             * Encodes the specified RoomResetBroadcast message. Does not implicitly {@link tongits.v1.RoomResetBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {tongits.v1.IRoomResetBroadcast} message RoomResetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomResetBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.tongits.v1.TongitsPlayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                    $root.tongits.v1.TongitsPlayerInfo.encode(message.self, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                    $root.tongits.v1.GameInfo.encode(message.gameInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified RoomResetBroadcast message, length delimited. Does not implicitly {@link tongits.v1.RoomResetBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {tongits.v1.IRoomResetBroadcast} message RoomResetBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomResetBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomResetBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.RoomResetBroadcast} RoomResetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomResetBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.RoomResetBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.tongits.v1.TongitsPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.self = $root.tongits.v1.TongitsPlayerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.gameInfo = $root.tongits.v1.GameInfo.decode(reader, reader.uint32());
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
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.RoomResetBroadcast} RoomResetBroadcast
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
             * @memberof tongits.v1.RoomResetBroadcast
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
                        var error = $root.tongits.v1.TongitsPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.tongits.v1.TongitsPlayerInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.tongits.v1.GameInfo.verify(message.gameInfo);
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
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.RoomResetBroadcast} RoomResetBroadcast
             */
            RoomResetBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.RoomResetBroadcast)
                    return object;
                var message = new $root.tongits.v1.RoomResetBroadcast();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".tongits.v1.RoomResetBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".tongits.v1.RoomResetBroadcast.players: object expected");
                        message.players[i] = $root.tongits.v1.TongitsPlayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".tongits.v1.RoomResetBroadcast.self: object expected");
                    message.self = $root.tongits.v1.TongitsPlayerInfo.fromObject(object.self);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".tongits.v1.RoomResetBroadcast.gameInfo: object expected");
                    message.gameInfo = $root.tongits.v1.GameInfo.fromObject(object.gameInfo);
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
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {tongits.v1.RoomResetBroadcast} message RoomResetBroadcast
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
                        object.players[j] = $root.tongits.v1.TongitsPlayerInfo.toObject(message.players[j], options);
                }
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.tongits.v1.TongitsPlayerInfo.toObject(message.self, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.tongits.v1.GameInfo.toObject(message.gameInfo, options);
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
             * @memberof tongits.v1.RoomResetBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomResetBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RoomResetBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.RoomResetBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomResetBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.RoomResetBroadcast";
            };

            return RoomResetBroadcast;
        })();

        v1.ActionChangeBroadcast = (function() {

            /**
             * Properties of an ActionChangeBroadcast.
             * @memberof tongits.v1
             * @interface IActionChangeBroadcast
             * @property {number|Long|null} [actionPlayerId] ActionChangeBroadcast actionPlayerId
             * @property {number|null} [countdown] ActionChangeBroadcast countdown
             * @property {boolean|null} [isFight] ActionChangeBroadcast isFight
             * @property {number|null} [status] ActionChangeBroadcast status
             * @property {number|Long|null} [userId] ActionChangeBroadcast userId
             */

            /**
             * Constructs a new ActionChangeBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents an ActionChangeBroadcast.
             * @implements IActionChangeBroadcast
             * @constructor
             * @param {tongits.v1.IActionChangeBroadcast=} [properties] Properties to set
             */
            function ActionChangeBroadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ActionChangeBroadcast actionPlayerId.
             * @member {number|Long} actionPlayerId
             * @memberof tongits.v1.ActionChangeBroadcast
             * @instance
             */
            ActionChangeBroadcast.prototype.actionPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ActionChangeBroadcast countdown.
             * @member {number} countdown
             * @memberof tongits.v1.ActionChangeBroadcast
             * @instance
             */
            ActionChangeBroadcast.prototype.countdown = 0;

            /**
             * ActionChangeBroadcast isFight.
             * @member {boolean} isFight
             * @memberof tongits.v1.ActionChangeBroadcast
             * @instance
             */
            ActionChangeBroadcast.prototype.isFight = false;

            /**
             * ActionChangeBroadcast status.
             * @member {number} status
             * @memberof tongits.v1.ActionChangeBroadcast
             * @instance
             */
            ActionChangeBroadcast.prototype.status = 0;

            /**
             * ActionChangeBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.ActionChangeBroadcast
             * @instance
             */
            ActionChangeBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ActionChangeBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {tongits.v1.IActionChangeBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.ActionChangeBroadcast} ActionChangeBroadcast instance
             */
            ActionChangeBroadcast.create = function create(properties) {
                return new ActionChangeBroadcast(properties);
            };

            /**
             * Encodes the specified ActionChangeBroadcast message. Does not implicitly {@link tongits.v1.ActionChangeBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {tongits.v1.IActionChangeBroadcast} message ActionChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActionChangeBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actionPlayerId != null && Object.hasOwnProperty.call(message, "actionPlayerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.actionPlayerId);
                if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.countdown);
                if (message.isFight != null && Object.hasOwnProperty.call(message, "isFight"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isFight);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified ActionChangeBroadcast message, length delimited. Does not implicitly {@link tongits.v1.ActionChangeBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {tongits.v1.IActionChangeBroadcast} message ActionChangeBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActionChangeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ActionChangeBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.ActionChangeBroadcast} ActionChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActionChangeBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.ActionChangeBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.actionPlayerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.countdown = reader.int32();
                            break;
                        }
                    case 3: {
                            message.isFight = reader.bool();
                            break;
                        }
                    case 4: {
                            message.status = reader.int32();
                            break;
                        }
                    case 11: {
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
             * Decodes an ActionChangeBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.ActionChangeBroadcast} ActionChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActionChangeBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ActionChangeBroadcast message.
             * @function verify
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ActionChangeBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    if (!$util.isInteger(message.actionPlayerId) && !(message.actionPlayerId && $util.isInteger(message.actionPlayerId.low) && $util.isInteger(message.actionPlayerId.high)))
                        return "actionPlayerId: integer|Long expected";
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    if (!$util.isInteger(message.countdown))
                        return "countdown: integer expected";
                if (message.isFight != null && message.hasOwnProperty("isFight"))
                    if (typeof message.isFight !== "boolean")
                        return "isFight: boolean expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates an ActionChangeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.ActionChangeBroadcast} ActionChangeBroadcast
             */
            ActionChangeBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.ActionChangeBroadcast)
                    return object;
                var message = new $root.tongits.v1.ActionChangeBroadcast();
                if (object.actionPlayerId != null)
                    if ($util.Long)
                        (message.actionPlayerId = $util.Long.fromValue(object.actionPlayerId)).unsigned = false;
                    else if (typeof object.actionPlayerId === "string")
                        message.actionPlayerId = parseInt(object.actionPlayerId, 10);
                    else if (typeof object.actionPlayerId === "number")
                        message.actionPlayerId = object.actionPlayerId;
                    else if (typeof object.actionPlayerId === "object")
                        message.actionPlayerId = new $util.LongBits(object.actionPlayerId.low >>> 0, object.actionPlayerId.high >>> 0).toNumber();
                if (object.countdown != null)
                    message.countdown = object.countdown | 0;
                if (object.isFight != null)
                    message.isFight = Boolean(object.isFight);
                if (object.status != null)
                    message.status = object.status | 0;
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
             * Creates a plain object from an ActionChangeBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {tongits.v1.ActionChangeBroadcast} message ActionChangeBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ActionChangeBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.actionPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.actionPlayerId = options.longs === String ? "0" : 0;
                    object.countdown = 0;
                    object.isFight = false;
                    object.status = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    if (typeof message.actionPlayerId === "number")
                        object.actionPlayerId = options.longs === String ? String(message.actionPlayerId) : message.actionPlayerId;
                    else
                        object.actionPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.actionPlayerId) : options.longs === Number ? new $util.LongBits(message.actionPlayerId.low >>> 0, message.actionPlayerId.high >>> 0).toNumber() : message.actionPlayerId;
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    object.countdown = message.countdown;
                if (message.isFight != null && message.hasOwnProperty("isFight"))
                    object.isFight = message.isFight;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this ActionChangeBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.ActionChangeBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ActionChangeBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ActionChangeBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.ActionChangeBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ActionChangeBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.ActionChangeBroadcast";
            };

            return ActionChangeBroadcast;
        })();

        v1.BeforeResultBroadcast = (function() {

            /**
             * Properties of a BeforeResultBroadcast.
             * @memberof tongits.v1
             * @interface IBeforeResultBroadcast
             * @property {number|Long|null} [winnerId] BeforeResultBroadcast winnerId
             * @property {number|null} [winType] BeforeResultBroadcast winType
             * @property {Array.<tongits.v1.ITongitsPlayerInfo>|null} [players] BeforeResultBroadcast players
             * @property {number|null} [countdown] BeforeResultBroadcast countdown
             * @property {tongits.v1.IPotInfo|null} [pot] BeforeResultBroadcast pot
             * @property {number|Long|null} [userId] BeforeResultBroadcast userId
             */

            /**
             * Constructs a new BeforeResultBroadcast.
             * @memberof tongits.v1
             * @classdesc Represents a BeforeResultBroadcast.
             * @implements IBeforeResultBroadcast
             * @constructor
             * @param {tongits.v1.IBeforeResultBroadcast=} [properties] Properties to set
             */
            function BeforeResultBroadcast(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BeforeResultBroadcast winnerId.
             * @member {number|Long} winnerId
             * @memberof tongits.v1.BeforeResultBroadcast
             * @instance
             */
            BeforeResultBroadcast.prototype.winnerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BeforeResultBroadcast winType.
             * @member {number} winType
             * @memberof tongits.v1.BeforeResultBroadcast
             * @instance
             */
            BeforeResultBroadcast.prototype.winType = 0;

            /**
             * BeforeResultBroadcast players.
             * @member {Array.<tongits.v1.ITongitsPlayerInfo>} players
             * @memberof tongits.v1.BeforeResultBroadcast
             * @instance
             */
            BeforeResultBroadcast.prototype.players = $util.emptyArray;

            /**
             * BeforeResultBroadcast countdown.
             * @member {number} countdown
             * @memberof tongits.v1.BeforeResultBroadcast
             * @instance
             */
            BeforeResultBroadcast.prototype.countdown = 0;

            /**
             * BeforeResultBroadcast pot.
             * @member {tongits.v1.IPotInfo|null|undefined} pot
             * @memberof tongits.v1.BeforeResultBroadcast
             * @instance
             */
            BeforeResultBroadcast.prototype.pot = null;

            /**
             * BeforeResultBroadcast userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.BeforeResultBroadcast
             * @instance
             */
            BeforeResultBroadcast.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new BeforeResultBroadcast instance using the specified properties.
             * @function create
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {tongits.v1.IBeforeResultBroadcast=} [properties] Properties to set
             * @returns {tongits.v1.BeforeResultBroadcast} BeforeResultBroadcast instance
             */
            BeforeResultBroadcast.create = function create(properties) {
                return new BeforeResultBroadcast(properties);
            };

            /**
             * Encodes the specified BeforeResultBroadcast message. Does not implicitly {@link tongits.v1.BeforeResultBroadcast.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {tongits.v1.IBeforeResultBroadcast} message BeforeResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeforeResultBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.winnerId);
                if (message.winType != null && Object.hasOwnProperty.call(message, "winType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winType);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.tongits.v1.TongitsPlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.countdown);
                if (message.pot != null && Object.hasOwnProperty.call(message, "pot"))
                    $root.tongits.v1.PotInfo.encode(message.pot, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int64(message.userId);
                return writer;
            };

            /**
             * Encodes the specified BeforeResultBroadcast message, length delimited. Does not implicitly {@link tongits.v1.BeforeResultBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {tongits.v1.IBeforeResultBroadcast} message BeforeResultBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeforeResultBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BeforeResultBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.BeforeResultBroadcast} BeforeResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeforeResultBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.BeforeResultBroadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.winnerId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.winType = reader.int32();
                            break;
                        }
                    case 3: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.tongits.v1.TongitsPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            message.countdown = reader.int32();
                            break;
                        }
                    case 5: {
                            message.pot = $root.tongits.v1.PotInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
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
             * Decodes a BeforeResultBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.BeforeResultBroadcast} BeforeResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeforeResultBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BeforeResultBroadcast message.
             * @function verify
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BeforeResultBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId) && !(message.winnerId && $util.isInteger(message.winnerId.low) && $util.isInteger(message.winnerId.high)))
                        return "winnerId: integer|Long expected";
                if (message.winType != null && message.hasOwnProperty("winType"))
                    if (!$util.isInteger(message.winType))
                        return "winType: integer expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.tongits.v1.TongitsPlayerInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    if (!$util.isInteger(message.countdown))
                        return "countdown: integer expected";
                if (message.pot != null && message.hasOwnProperty("pot")) {
                    var error = $root.tongits.v1.PotInfo.verify(message.pot);
                    if (error)
                        return "pot." + error;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                return null;
            };

            /**
             * Creates a BeforeResultBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.BeforeResultBroadcast} BeforeResultBroadcast
             */
            BeforeResultBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.BeforeResultBroadcast)
                    return object;
                var message = new $root.tongits.v1.BeforeResultBroadcast();
                if (object.winnerId != null)
                    if ($util.Long)
                        (message.winnerId = $util.Long.fromValue(object.winnerId)).unsigned = false;
                    else if (typeof object.winnerId === "string")
                        message.winnerId = parseInt(object.winnerId, 10);
                    else if (typeof object.winnerId === "number")
                        message.winnerId = object.winnerId;
                    else if (typeof object.winnerId === "object")
                        message.winnerId = new $util.LongBits(object.winnerId.low >>> 0, object.winnerId.high >>> 0).toNumber();
                if (object.winType != null)
                    message.winType = object.winType | 0;
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".tongits.v1.BeforeResultBroadcast.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".tongits.v1.BeforeResultBroadcast.players: object expected");
                        message.players[i] = $root.tongits.v1.TongitsPlayerInfo.fromObject(object.players[i]);
                    }
                }
                if (object.countdown != null)
                    message.countdown = object.countdown | 0;
                if (object.pot != null) {
                    if (typeof object.pot !== "object")
                        throw TypeError(".tongits.v1.BeforeResultBroadcast.pot: object expected");
                    message.pot = $root.tongits.v1.PotInfo.fromObject(object.pot);
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
             * Creates a plain object from a BeforeResultBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {tongits.v1.BeforeResultBroadcast} message BeforeResultBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BeforeResultBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winnerId = options.longs === String ? "0" : 0;
                    object.winType = 0;
                    object.countdown = 0;
                    object.pot = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                }
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (typeof message.winnerId === "number")
                        object.winnerId = options.longs === String ? String(message.winnerId) : message.winnerId;
                    else
                        object.winnerId = options.longs === String ? $util.Long.prototype.toString.call(message.winnerId) : options.longs === Number ? new $util.LongBits(message.winnerId.low >>> 0, message.winnerId.high >>> 0).toNumber() : message.winnerId;
                if (message.winType != null && message.hasOwnProperty("winType"))
                    object.winType = message.winType;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.tongits.v1.TongitsPlayerInfo.toObject(message.players[j], options);
                }
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    object.countdown = message.countdown;
                if (message.pot != null && message.hasOwnProperty("pot"))
                    object.pot = $root.tongits.v1.PotInfo.toObject(message.pot, options);
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                return object;
            };

            /**
             * Converts this BeforeResultBroadcast to JSON.
             * @function toJSON
             * @memberof tongits.v1.BeforeResultBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BeforeResultBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BeforeResultBroadcast
             * @function getTypeUrl
             * @memberof tongits.v1.BeforeResultBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BeforeResultBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.BeforeResultBroadcast";
            };

            return BeforeResultBroadcast;
        })();

        v1.GameResultDetailsReq = (function() {

            /**
             * Properties of a GameResultDetailsReq.
             * @memberof tongits.v1
             * @interface IGameResultDetailsReq
             */

            /**
             * Constructs a new GameResultDetailsReq.
             * @memberof tongits.v1
             * @classdesc Represents a GameResultDetailsReq.
             * @implements IGameResultDetailsReq
             * @constructor
             * @param {tongits.v1.IGameResultDetailsReq=} [properties] Properties to set
             */
            function GameResultDetailsReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GameResultDetailsReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {tongits.v1.IGameResultDetailsReq=} [properties] Properties to set
             * @returns {tongits.v1.GameResultDetailsReq} GameResultDetailsReq instance
             */
            GameResultDetailsReq.create = function create(properties) {
                return new GameResultDetailsReq(properties);
            };

            /**
             * Encodes the specified GameResultDetailsReq message. Does not implicitly {@link tongits.v1.GameResultDetailsReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {tongits.v1.IGameResultDetailsReq} message GameResultDetailsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultDetailsReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GameResultDetailsReq message, length delimited. Does not implicitly {@link tongits.v1.GameResultDetailsReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {tongits.v1.IGameResultDetailsReq} message GameResultDetailsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultDetailsReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameResultDetailsReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.GameResultDetailsReq} GameResultDetailsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultDetailsReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.GameResultDetailsReq();
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
             * Decodes a GameResultDetailsReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.GameResultDetailsReq} GameResultDetailsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultDetailsReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameResultDetailsReq message.
             * @function verify
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameResultDetailsReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a GameResultDetailsReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.GameResultDetailsReq} GameResultDetailsReq
             */
            GameResultDetailsReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.GameResultDetailsReq)
                    return object;
                return new $root.tongits.v1.GameResultDetailsReq();
            };

            /**
             * Creates a plain object from a GameResultDetailsReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {tongits.v1.GameResultDetailsReq} message GameResultDetailsReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameResultDetailsReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GameResultDetailsReq to JSON.
             * @function toJSON
             * @memberof tongits.v1.GameResultDetailsReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameResultDetailsReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameResultDetailsReq
             * @function getTypeUrl
             * @memberof tongits.v1.GameResultDetailsReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResultDetailsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.GameResultDetailsReq";
            };

            return GameResultDetailsReq;
        })();

        v1.GameResultDetailsRes = (function() {

            /**
             * Properties of a GameResultDetailsRes.
             * @memberof tongits.v1
             * @interface IGameResultDetailsRes
             * @property {number|Long|null} [winnerId] GameResultDetailsRes winnerId
             * @property {Array.<tongits.v1.IPlayerResult>|null} [playerResults] GameResultDetailsRes playerResults
             */

            /**
             * Constructs a new GameResultDetailsRes.
             * @memberof tongits.v1
             * @classdesc Represents a GameResultDetailsRes.
             * @implements IGameResultDetailsRes
             * @constructor
             * @param {tongits.v1.IGameResultDetailsRes=} [properties] Properties to set
             */
            function GameResultDetailsRes(properties) {
                this.playerResults = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameResultDetailsRes winnerId.
             * @member {number|Long} winnerId
             * @memberof tongits.v1.GameResultDetailsRes
             * @instance
             */
            GameResultDetailsRes.prototype.winnerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameResultDetailsRes playerResults.
             * @member {Array.<tongits.v1.IPlayerResult>} playerResults
             * @memberof tongits.v1.GameResultDetailsRes
             * @instance
             */
            GameResultDetailsRes.prototype.playerResults = $util.emptyArray;

            /**
             * Creates a new GameResultDetailsRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {tongits.v1.IGameResultDetailsRes=} [properties] Properties to set
             * @returns {tongits.v1.GameResultDetailsRes} GameResultDetailsRes instance
             */
            GameResultDetailsRes.create = function create(properties) {
                return new GameResultDetailsRes(properties);
            };

            /**
             * Encodes the specified GameResultDetailsRes message. Does not implicitly {@link tongits.v1.GameResultDetailsRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {tongits.v1.IGameResultDetailsRes} message GameResultDetailsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultDetailsRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.winnerId);
                if (message.playerResults != null && message.playerResults.length)
                    for (var i = 0; i < message.playerResults.length; ++i)
                        $root.tongits.v1.PlayerResult.encode(message.playerResults[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GameResultDetailsRes message, length delimited. Does not implicitly {@link tongits.v1.GameResultDetailsRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {tongits.v1.IGameResultDetailsRes} message GameResultDetailsRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameResultDetailsRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameResultDetailsRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.GameResultDetailsRes} GameResultDetailsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultDetailsRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.GameResultDetailsRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.winnerId = reader.int64();
                            break;
                        }
                    case 2: {
                            if (!(message.playerResults && message.playerResults.length))
                                message.playerResults = [];
                            message.playerResults.push($root.tongits.v1.PlayerResult.decode(reader, reader.uint32()));
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
             * Decodes a GameResultDetailsRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.GameResultDetailsRes} GameResultDetailsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameResultDetailsRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameResultDetailsRes message.
             * @function verify
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameResultDetailsRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId) && !(message.winnerId && $util.isInteger(message.winnerId.low) && $util.isInteger(message.winnerId.high)))
                        return "winnerId: integer|Long expected";
                if (message.playerResults != null && message.hasOwnProperty("playerResults")) {
                    if (!Array.isArray(message.playerResults))
                        return "playerResults: array expected";
                    for (var i = 0; i < message.playerResults.length; ++i) {
                        var error = $root.tongits.v1.PlayerResult.verify(message.playerResults[i]);
                        if (error)
                            return "playerResults." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GameResultDetailsRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.GameResultDetailsRes} GameResultDetailsRes
             */
            GameResultDetailsRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.GameResultDetailsRes)
                    return object;
                var message = new $root.tongits.v1.GameResultDetailsRes();
                if (object.winnerId != null)
                    if ($util.Long)
                        (message.winnerId = $util.Long.fromValue(object.winnerId)).unsigned = false;
                    else if (typeof object.winnerId === "string")
                        message.winnerId = parseInt(object.winnerId, 10);
                    else if (typeof object.winnerId === "number")
                        message.winnerId = object.winnerId;
                    else if (typeof object.winnerId === "object")
                        message.winnerId = new $util.LongBits(object.winnerId.low >>> 0, object.winnerId.high >>> 0).toNumber();
                if (object.playerResults) {
                    if (!Array.isArray(object.playerResults))
                        throw TypeError(".tongits.v1.GameResultDetailsRes.playerResults: array expected");
                    message.playerResults = [];
                    for (var i = 0; i < object.playerResults.length; ++i) {
                        if (typeof object.playerResults[i] !== "object")
                            throw TypeError(".tongits.v1.GameResultDetailsRes.playerResults: object expected");
                        message.playerResults[i] = $root.tongits.v1.PlayerResult.fromObject(object.playerResults[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GameResultDetailsRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {tongits.v1.GameResultDetailsRes} message GameResultDetailsRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameResultDetailsRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.playerResults = [];
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winnerId = options.longs === String ? "0" : 0;
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (typeof message.winnerId === "number")
                        object.winnerId = options.longs === String ? String(message.winnerId) : message.winnerId;
                    else
                        object.winnerId = options.longs === String ? $util.Long.prototype.toString.call(message.winnerId) : options.longs === Number ? new $util.LongBits(message.winnerId.low >>> 0, message.winnerId.high >>> 0).toNumber() : message.winnerId;
                if (message.playerResults && message.playerResults.length) {
                    object.playerResults = [];
                    for (var j = 0; j < message.playerResults.length; ++j)
                        object.playerResults[j] = $root.tongits.v1.PlayerResult.toObject(message.playerResults[j], options);
                }
                return object;
            };

            /**
             * Converts this GameResultDetailsRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.GameResultDetailsRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameResultDetailsRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameResultDetailsRes
             * @function getTypeUrl
             * @memberof tongits.v1.GameResultDetailsRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResultDetailsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.GameResultDetailsRes";
            };

            return GameResultDetailsRes;
        })();

        v1.GetPlayerHistoryReq = (function() {

            /**
             * Properties of a GetPlayerHistoryReq.
             * @memberof tongits.v1
             * @interface IGetPlayerHistoryReq
             * @property {number|null} [page] GetPlayerHistoryReq page
             * @property {number|Long|null} [startTime] GetPlayerHistoryReq startTime
             * @property {number|Long|null} [endTime] GetPlayerHistoryReq endTime
             */

            /**
             * Constructs a new GetPlayerHistoryReq.
             * @memberof tongits.v1
             * @classdesc Represents a GetPlayerHistoryReq.
             * @implements IGetPlayerHistoryReq
             * @constructor
             * @param {tongits.v1.IGetPlayerHistoryReq=} [properties] Properties to set
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
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.page = 0;

            /**
             * GetPlayerHistoryReq startTime.
             * @member {number|Long} startTime
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GetPlayerHistoryReq endTime.
             * @member {number|Long} endTime
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @instance
             */
            GetPlayerHistoryReq.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new GetPlayerHistoryReq instance using the specified properties.
             * @function create
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {tongits.v1.IGetPlayerHistoryReq=} [properties] Properties to set
             * @returns {tongits.v1.GetPlayerHistoryReq} GetPlayerHistoryReq instance
             */
            GetPlayerHistoryReq.create = function create(properties) {
                return new GetPlayerHistoryReq(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryReq message. Does not implicitly {@link tongits.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {tongits.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
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
             * Encodes the specified GetPlayerHistoryReq message, length delimited. Does not implicitly {@link tongits.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {tongits.v1.IGetPlayerHistoryReq} message GetPlayerHistoryReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryReq.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.GetPlayerHistoryReq();
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
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
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
             * @memberof tongits.v1.GetPlayerHistoryReq
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
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.GetPlayerHistoryReq} GetPlayerHistoryReq
             */
            GetPlayerHistoryReq.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.GetPlayerHistoryReq)
                    return object;
                var message = new $root.tongits.v1.GetPlayerHistoryReq();
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
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {tongits.v1.GetPlayerHistoryReq} message GetPlayerHistoryReq
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
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryReq
             * @function getTypeUrl
             * @memberof tongits.v1.GetPlayerHistoryReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.GetPlayerHistoryReq";
            };

            return GetPlayerHistoryReq;
        })();

        v1.GetPlayerHistoryRes = (function() {

            /**
             * Properties of a GetPlayerHistoryRes.
             * @memberof tongits.v1
             * @interface IGetPlayerHistoryRes
             * @property {Array.<tongits.v1.ITongitsHistoryRecord>|null} [records] GetPlayerHistoryRes records
             */

            /**
             * Constructs a new GetPlayerHistoryRes.
             * @memberof tongits.v1
             * @classdesc Represents a GetPlayerHistoryRes.
             * @implements IGetPlayerHistoryRes
             * @constructor
             * @param {tongits.v1.IGetPlayerHistoryRes=} [properties] Properties to set
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
             * @member {Array.<tongits.v1.ITongitsHistoryRecord>} records
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @instance
             */
            GetPlayerHistoryRes.prototype.records = $util.emptyArray;

            /**
             * Creates a new GetPlayerHistoryRes instance using the specified properties.
             * @function create
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {tongits.v1.IGetPlayerHistoryRes=} [properties] Properties to set
             * @returns {tongits.v1.GetPlayerHistoryRes} GetPlayerHistoryRes instance
             */
            GetPlayerHistoryRes.create = function create(properties) {
                return new GetPlayerHistoryRes(properties);
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message. Does not implicitly {@link tongits.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {tongits.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.records != null && message.records.length)
                    for (var i = 0; i < message.records.length; ++i)
                        $root.tongits.v1.TongitsHistoryRecord.encode(message.records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetPlayerHistoryRes message, length delimited. Does not implicitly {@link tongits.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {tongits.v1.IGetPlayerHistoryRes} message GetPlayerHistoryRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetPlayerHistoryRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetPlayerHistoryRes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.GetPlayerHistoryRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push($root.tongits.v1.TongitsHistoryRecord.decode(reader, reader.uint32()));
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
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
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
             * @memberof tongits.v1.GetPlayerHistoryRes
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
                        var error = $root.tongits.v1.TongitsHistoryRecord.verify(message.records[i]);
                        if (error)
                            return "records." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetPlayerHistoryRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.GetPlayerHistoryRes} GetPlayerHistoryRes
             */
            GetPlayerHistoryRes.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.GetPlayerHistoryRes)
                    return object;
                var message = new $root.tongits.v1.GetPlayerHistoryRes();
                if (object.records) {
                    if (!Array.isArray(object.records))
                        throw TypeError(".tongits.v1.GetPlayerHistoryRes.records: array expected");
                    message.records = [];
                    for (var i = 0; i < object.records.length; ++i) {
                        if (typeof object.records[i] !== "object")
                            throw TypeError(".tongits.v1.GetPlayerHistoryRes.records: object expected");
                        message.records[i] = $root.tongits.v1.TongitsHistoryRecord.fromObject(object.records[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetPlayerHistoryRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {tongits.v1.GetPlayerHistoryRes} message GetPlayerHistoryRes
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
                        object.records[j] = $root.tongits.v1.TongitsHistoryRecord.toObject(message.records[j], options);
                }
                return object;
            };

            /**
             * Converts this GetPlayerHistoryRes to JSON.
             * @function toJSON
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetPlayerHistoryRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetPlayerHistoryRes
             * @function getTypeUrl
             * @memberof tongits.v1.GetPlayerHistoryRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetPlayerHistoryRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.GetPlayerHistoryRes";
            };

            return GetPlayerHistoryRes;
        })();

        v1.TongitsHistoryRecord = (function() {

            /**
             * Properties of a TongitsHistoryRecord.
             * @memberof tongits.v1
             * @interface ITongitsHistoryRecord
             * @property {Array.<tongits.v1.ITongitsHistoryInfo>|null} [players] TongitsHistoryRecord players
             */

            /**
             * Constructs a new TongitsHistoryRecord.
             * @memberof tongits.v1
             * @classdesc Represents a TongitsHistoryRecord.
             * @implements ITongitsHistoryRecord
             * @constructor
             * @param {tongits.v1.ITongitsHistoryRecord=} [properties] Properties to set
             */
            function TongitsHistoryRecord(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TongitsHistoryRecord players.
             * @member {Array.<tongits.v1.ITongitsHistoryInfo>} players
             * @memberof tongits.v1.TongitsHistoryRecord
             * @instance
             */
            TongitsHistoryRecord.prototype.players = $util.emptyArray;

            /**
             * Creates a new TongitsHistoryRecord instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {tongits.v1.ITongitsHistoryRecord=} [properties] Properties to set
             * @returns {tongits.v1.TongitsHistoryRecord} TongitsHistoryRecord instance
             */
            TongitsHistoryRecord.create = function create(properties) {
                return new TongitsHistoryRecord(properties);
            };

            /**
             * Encodes the specified TongitsHistoryRecord message. Does not implicitly {@link tongits.v1.TongitsHistoryRecord.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {tongits.v1.ITongitsHistoryRecord} message TongitsHistoryRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsHistoryRecord.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.tongits.v1.TongitsHistoryInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TongitsHistoryRecord message, length delimited. Does not implicitly {@link tongits.v1.TongitsHistoryRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {tongits.v1.ITongitsHistoryRecord} message TongitsHistoryRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsHistoryRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TongitsHistoryRecord message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TongitsHistoryRecord} TongitsHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsHistoryRecord.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TongitsHistoryRecord();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.players && message.players.length))
                                message.players = [];
                            message.players.push($root.tongits.v1.TongitsHistoryInfo.decode(reader, reader.uint32()));
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
             * Decodes a TongitsHistoryRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TongitsHistoryRecord} TongitsHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsHistoryRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TongitsHistoryRecord message.
             * @function verify
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TongitsHistoryRecord.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.tongits.v1.TongitsHistoryInfo.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TongitsHistoryRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TongitsHistoryRecord} TongitsHistoryRecord
             */
            TongitsHistoryRecord.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TongitsHistoryRecord)
                    return object;
                var message = new $root.tongits.v1.TongitsHistoryRecord();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".tongits.v1.TongitsHistoryRecord.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".tongits.v1.TongitsHistoryRecord.players: object expected");
                        message.players[i] = $root.tongits.v1.TongitsHistoryInfo.fromObject(object.players[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TongitsHistoryRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {tongits.v1.TongitsHistoryRecord} message TongitsHistoryRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TongitsHistoryRecord.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.tongits.v1.TongitsHistoryInfo.toObject(message.players[j], options);
                }
                return object;
            };

            /**
             * Converts this TongitsHistoryRecord to JSON.
             * @function toJSON
             * @memberof tongits.v1.TongitsHistoryRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TongitsHistoryRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TongitsHistoryRecord
             * @function getTypeUrl
             * @memberof tongits.v1.TongitsHistoryRecord
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TongitsHistoryRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TongitsHistoryRecord";
            };

            return TongitsHistoryRecord;
        })();

        v1.TongitsHistoryInfo = (function() {

            /**
             * Properties of a TongitsHistoryInfo.
             * @memberof tongits.v1
             * @interface ITongitsHistoryInfo
             * @property {string|null} [gameCode] TongitsHistoryInfo gameCode
             * @property {number|Long|null} [endTime] TongitsHistoryInfo endTime
             * @property {number|Long|null} [userId] TongitsHistoryInfo userId
             * @property {string|null} [nickname] TongitsHistoryInfo nickname
             * @property {string|null} [avatar] TongitsHistoryInfo avatar
             * @property {number|null} [profit] TongitsHistoryInfo profit
             * @property {number|null} [score] TongitsHistoryInfo score
             * @property {Array.<number>|null} [cards] TongitsHistoryInfo cards
             * @property {number|null} [gameResult] TongitsHistoryInfo gameResult
             * @property {number|null} [cost] TongitsHistoryInfo cost
             * @property {number|null} [normalReward] TongitsHistoryInfo normalReward
             * @property {number|null} [potReward] TongitsHistoryInfo potReward
             * @property {number|null} [totalReward] TongitsHistoryInfo totalReward
             */

            /**
             * Constructs a new TongitsHistoryInfo.
             * @memberof tongits.v1
             * @classdesc Represents a TongitsHistoryInfo.
             * @implements ITongitsHistoryInfo
             * @constructor
             * @param {tongits.v1.ITongitsHistoryInfo=} [properties] Properties to set
             */
            function TongitsHistoryInfo(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TongitsHistoryInfo gameCode.
             * @member {string} gameCode
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.gameCode = "";

            /**
             * TongitsHistoryInfo endTime.
             * @member {number|Long} endTime
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TongitsHistoryInfo userId.
             * @member {number|Long} userId
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TongitsHistoryInfo nickname.
             * @member {string} nickname
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.nickname = "";

            /**
             * TongitsHistoryInfo avatar.
             * @member {string} avatar
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.avatar = "";

            /**
             * TongitsHistoryInfo profit.
             * @member {number} profit
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.profit = 0;

            /**
             * TongitsHistoryInfo score.
             * @member {number} score
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.score = 0;

            /**
             * TongitsHistoryInfo cards.
             * @member {Array.<number>} cards
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.cards = $util.emptyArray;

            /**
             * TongitsHistoryInfo gameResult.
             * @member {number} gameResult
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.gameResult = 0;

            /**
             * TongitsHistoryInfo cost.
             * @member {number} cost
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.cost = 0;

            /**
             * TongitsHistoryInfo normalReward.
             * @member {number} normalReward
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.normalReward = 0;

            /**
             * TongitsHistoryInfo potReward.
             * @member {number} potReward
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.potReward = 0;

            /**
             * TongitsHistoryInfo totalReward.
             * @member {number} totalReward
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             */
            TongitsHistoryInfo.prototype.totalReward = 0;

            /**
             * Creates a new TongitsHistoryInfo instance using the specified properties.
             * @function create
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {tongits.v1.ITongitsHistoryInfo=} [properties] Properties to set
             * @returns {tongits.v1.TongitsHistoryInfo} TongitsHistoryInfo instance
             */
            TongitsHistoryInfo.create = function create(properties) {
                return new TongitsHistoryInfo(properties);
            };

            /**
             * Encodes the specified TongitsHistoryInfo message. Does not implicitly {@link tongits.v1.TongitsHistoryInfo.verify|verify} messages.
             * @function encode
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {tongits.v1.ITongitsHistoryInfo} message TongitsHistoryInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsHistoryInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameCode != null && Object.hasOwnProperty.call(message, "gameCode"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameCode);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTime);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
                if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickname);
                if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatar);
                if (message.profit != null && Object.hasOwnProperty.call(message, "profit"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.profit);
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.score);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 8, wireType 2 =*/66).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                if (message.gameResult != null && Object.hasOwnProperty.call(message, "gameResult"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.gameResult);
                if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cost);
                if (message.normalReward != null && Object.hasOwnProperty.call(message, "normalReward"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.normalReward);
                if (message.potReward != null && Object.hasOwnProperty.call(message, "potReward"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.potReward);
                if (message.totalReward != null && Object.hasOwnProperty.call(message, "totalReward"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.totalReward);
                return writer;
            };

            /**
             * Encodes the specified TongitsHistoryInfo message, length delimited. Does not implicitly {@link tongits.v1.TongitsHistoryInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {tongits.v1.ITongitsHistoryInfo} message TongitsHistoryInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TongitsHistoryInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TongitsHistoryInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tongits.v1.TongitsHistoryInfo} TongitsHistoryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsHistoryInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tongits.v1.TongitsHistoryInfo();
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
                            message.userId = reader.int64();
                            break;
                        }
                    case 4: {
                            message.nickname = reader.string();
                            break;
                        }
                    case 5: {
                            message.avatar = reader.string();
                            break;
                        }
                    case 6: {
                            message.profit = reader.int32();
                            break;
                        }
                    case 7: {
                            message.score = reader.int32();
                            break;
                        }
                    case 8: {
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
                    case 9: {
                            message.gameResult = reader.int32();
                            break;
                        }
                    case 10: {
                            message.cost = reader.int32();
                            break;
                        }
                    case 11: {
                            message.normalReward = reader.int32();
                            break;
                        }
                    case 12: {
                            message.potReward = reader.int32();
                            break;
                        }
                    case 13: {
                            message.totalReward = reader.int32();
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
             * Decodes a TongitsHistoryInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tongits.v1.TongitsHistoryInfo} TongitsHistoryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TongitsHistoryInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TongitsHistoryInfo message.
             * @function verify
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TongitsHistoryInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    if (!$util.isString(message.gameCode))
                        return "gameCode: string expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    if (!$util.isString(message.avatar))
                        return "avatar: string expected";
                if (message.profit != null && message.hasOwnProperty("profit"))
                    if (!$util.isInteger(message.profit))
                        return "profit: integer expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                    if (!$util.isInteger(message.gameResult))
                        return "gameResult: integer expected";
                if (message.cost != null && message.hasOwnProperty("cost"))
                    if (!$util.isInteger(message.cost))
                        return "cost: integer expected";
                if (message.normalReward != null && message.hasOwnProperty("normalReward"))
                    if (!$util.isInteger(message.normalReward))
                        return "normalReward: integer expected";
                if (message.potReward != null && message.hasOwnProperty("potReward"))
                    if (!$util.isInteger(message.potReward))
                        return "potReward: integer expected";
                if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                    if (!$util.isInteger(message.totalReward))
                        return "totalReward: integer expected";
                return null;
            };

            /**
             * Creates a TongitsHistoryInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tongits.v1.TongitsHistoryInfo} TongitsHistoryInfo
             */
            TongitsHistoryInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tongits.v1.TongitsHistoryInfo)
                    return object;
                var message = new $root.tongits.v1.TongitsHistoryInfo();
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
                if (object.profit != null)
                    message.profit = object.profit | 0;
                if (object.score != null)
                    message.score = object.score | 0;
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".tongits.v1.TongitsHistoryInfo.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                if (object.gameResult != null)
                    message.gameResult = object.gameResult | 0;
                if (object.cost != null)
                    message.cost = object.cost | 0;
                if (object.normalReward != null)
                    message.normalReward = object.normalReward | 0;
                if (object.potReward != null)
                    message.potReward = object.potReward | 0;
                if (object.totalReward != null)
                    message.totalReward = object.totalReward | 0;
                return message;
            };

            /**
             * Creates a plain object from a TongitsHistoryInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {tongits.v1.TongitsHistoryInfo} message TongitsHistoryInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TongitsHistoryInfo.toObject = function toObject(message, options) {
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
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.nickname = "";
                    object.avatar = "";
                    object.profit = 0;
                    object.score = 0;
                    object.gameResult = 0;
                    object.cost = 0;
                    object.normalReward = 0;
                    object.potReward = 0;
                    object.totalReward = 0;
                }
                if (message.gameCode != null && message.hasOwnProperty("gameCode"))
                    object.gameCode = message.gameCode;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (typeof message.endTime === "number")
                        object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                    else
                        object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    object.avatar = message.avatar;
                if (message.profit != null && message.hasOwnProperty("profit"))
                    object.profit = message.profit;
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                    object.gameResult = message.gameResult;
                if (message.cost != null && message.hasOwnProperty("cost"))
                    object.cost = message.cost;
                if (message.normalReward != null && message.hasOwnProperty("normalReward"))
                    object.normalReward = message.normalReward;
                if (message.potReward != null && message.hasOwnProperty("potReward"))
                    object.potReward = message.potReward;
                if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                    object.totalReward = message.totalReward;
                return object;
            };

            /**
             * Converts this TongitsHistoryInfo to JSON.
             * @function toJSON
             * @memberof tongits.v1.TongitsHistoryInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TongitsHistoryInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TongitsHistoryInfo
             * @function getTypeUrl
             * @memberof tongits.v1.TongitsHistoryInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TongitsHistoryInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/tongits.v1.TongitsHistoryInfo";
            };

            return TongitsHistoryInfo;
        })();

        return v1;
    })();

    return tongits;
})();

module.exports = $root;
