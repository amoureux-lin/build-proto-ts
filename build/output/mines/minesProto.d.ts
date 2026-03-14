import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace common. */
export namespace common {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a ServerClosedBroadcast. */
        interface IServerClosedBroadcast {
        }

        /** Represents a ServerClosedBroadcast. */
        class ServerClosedBroadcast implements IServerClosedBroadcast {

            /**
             * Constructs a new ServerClosedBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IServerClosedBroadcast);

            /**
             * Creates a new ServerClosedBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerClosedBroadcast instance
             */
            public static create(properties?: common.v1.IServerClosedBroadcast): common.v1.ServerClosedBroadcast;

            /**
             * Encodes the specified ServerClosedBroadcast message. Does not implicitly {@link common.v1.ServerClosedBroadcast.verify|verify} messages.
             * @param message ServerClosedBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IServerClosedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerClosedBroadcast message, length delimited. Does not implicitly {@link common.v1.ServerClosedBroadcast.verify|verify} messages.
             * @param message ServerClosedBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IServerClosedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerClosedBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerClosedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ServerClosedBroadcast;

            /**
             * Decodes a ServerClosedBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServerClosedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ServerClosedBroadcast;

            /**
             * Verifies a ServerClosedBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerClosedBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerClosedBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ServerClosedBroadcast;

            /**
             * Creates a plain object from a ServerClosedBroadcast message. Also converts values to other types if specified.
             * @param message ServerClosedBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ServerClosedBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerClosedBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServerClosedBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserOfflineBroadcast. */
        interface IUserOfflineBroadcast {

            /** UserOfflineBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** UserOfflineBroadcast userId */
            userId?: (number|Long|null);

            /** UserOfflineBroadcast player */
            player?: (common.v1.IPlayerInfo|null);
        }

        /** Represents a UserOfflineBroadcast. */
        class UserOfflineBroadcast implements IUserOfflineBroadcast {

            /**
             * Constructs a new UserOfflineBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IUserOfflineBroadcast);

            /** UserOfflineBroadcast bcUid. */
            public bcUid: (number|Long);

            /** UserOfflineBroadcast userId. */
            public userId: (number|Long);

            /** UserOfflineBroadcast player. */
            public player?: (common.v1.IPlayerInfo|null);

            /**
             * Creates a new UserOfflineBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserOfflineBroadcast instance
             */
            public static create(properties?: common.v1.IUserOfflineBroadcast): common.v1.UserOfflineBroadcast;

            /**
             * Encodes the specified UserOfflineBroadcast message. Does not implicitly {@link common.v1.UserOfflineBroadcast.verify|verify} messages.
             * @param message UserOfflineBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IUserOfflineBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserOfflineBroadcast message, length delimited. Does not implicitly {@link common.v1.UserOfflineBroadcast.verify|verify} messages.
             * @param message UserOfflineBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IUserOfflineBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserOfflineBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserOfflineBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.UserOfflineBroadcast;

            /**
             * Decodes a UserOfflineBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserOfflineBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.UserOfflineBroadcast;

            /**
             * Verifies a UserOfflineBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserOfflineBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserOfflineBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.UserOfflineBroadcast;

            /**
             * Creates a plain object from a UserOfflineBroadcast message. Also converts values to other types if specified.
             * @param message UserOfflineBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.UserOfflineBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserOfflineBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserOfflineBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinRoomBroadcast. */
        interface IJoinRoomBroadcast {

            /** JoinRoomBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** JoinRoomBroadcast userId */
            userId?: (number|Long|null);

            /** JoinRoomBroadcast player */
            player?: (common.v1.IPlayerInfo|null);

            /** JoinRoomBroadcast playersCount */
            playersCount?: (number|null);
        }

        /** Represents a JoinRoomBroadcast. */
        class JoinRoomBroadcast implements IJoinRoomBroadcast {

            /**
             * Constructs a new JoinRoomBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IJoinRoomBroadcast);

            /** JoinRoomBroadcast bcUid. */
            public bcUid: (number|Long);

            /** JoinRoomBroadcast userId. */
            public userId: (number|Long);

            /** JoinRoomBroadcast player. */
            public player?: (common.v1.IPlayerInfo|null);

            /** JoinRoomBroadcast playersCount. */
            public playersCount: number;

            /**
             * Creates a new JoinRoomBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinRoomBroadcast instance
             */
            public static create(properties?: common.v1.IJoinRoomBroadcast): common.v1.JoinRoomBroadcast;

            /**
             * Encodes the specified JoinRoomBroadcast message. Does not implicitly {@link common.v1.JoinRoomBroadcast.verify|verify} messages.
             * @param message JoinRoomBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IJoinRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinRoomBroadcast message, length delimited. Does not implicitly {@link common.v1.JoinRoomBroadcast.verify|verify} messages.
             * @param message JoinRoomBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IJoinRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinRoomBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.JoinRoomBroadcast;

            /**
             * Decodes a JoinRoomBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.JoinRoomBroadcast;

            /**
             * Verifies a JoinRoomBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinRoomBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinRoomBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.JoinRoomBroadcast;

            /**
             * Creates a plain object from a JoinRoomBroadcast message. Also converts values to other types if specified.
             * @param message JoinRoomBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.JoinRoomBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinRoomBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinRoomBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerExitRoomReq. */
        interface IPlayerExitRoomReq {
        }

        /** Represents a PlayerExitRoomReq. */
        class PlayerExitRoomReq implements IPlayerExitRoomReq {

            /**
             * Constructs a new PlayerExitRoomReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerExitRoomReq);

            /**
             * Creates a new PlayerExitRoomReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerExitRoomReq instance
             */
            public static create(properties?: common.v1.IPlayerExitRoomReq): common.v1.PlayerExitRoomReq;

            /**
             * Encodes the specified PlayerExitRoomReq message. Does not implicitly {@link common.v1.PlayerExitRoomReq.verify|verify} messages.
             * @param message PlayerExitRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerExitRoomReq message, length delimited. Does not implicitly {@link common.v1.PlayerExitRoomReq.verify|verify} messages.
             * @param message PlayerExitRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerExitRoomReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerExitRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerExitRoomReq;

            /**
             * Decodes a PlayerExitRoomReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerExitRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerExitRoomReq;

            /**
             * Verifies a PlayerExitRoomReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerExitRoomReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerExitRoomReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerExitRoomReq;

            /**
             * Creates a plain object from a PlayerExitRoomReq message. Also converts values to other types if specified.
             * @param message PlayerExitRoomReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerExitRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerExitRoomReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerExitRoomReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerExitRoomRes. */
        interface IPlayerExitRoomRes {
        }

        /** Represents a PlayerExitRoomRes. */
        class PlayerExitRoomRes implements IPlayerExitRoomRes {

            /**
             * Constructs a new PlayerExitRoomRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerExitRoomRes);

            /**
             * Creates a new PlayerExitRoomRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerExitRoomRes instance
             */
            public static create(properties?: common.v1.IPlayerExitRoomRes): common.v1.PlayerExitRoomRes;

            /**
             * Encodes the specified PlayerExitRoomRes message. Does not implicitly {@link common.v1.PlayerExitRoomRes.verify|verify} messages.
             * @param message PlayerExitRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerExitRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerExitRoomRes message, length delimited. Does not implicitly {@link common.v1.PlayerExitRoomRes.verify|verify} messages.
             * @param message PlayerExitRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerExitRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerExitRoomRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerExitRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerExitRoomRes;

            /**
             * Decodes a PlayerExitRoomRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerExitRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerExitRoomRes;

            /**
             * Verifies a PlayerExitRoomRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerExitRoomRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerExitRoomRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerExitRoomRes;

            /**
             * Creates a plain object from a PlayerExitRoomRes message. Also converts values to other types if specified.
             * @param message PlayerExitRoomRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerExitRoomRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerExitRoomRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerExitRoomRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LeaveRoomBroadcast. */
        interface ILeaveRoomBroadcast {

            /** LeaveRoomBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** LeaveRoomBroadcast userId */
            userId?: (number|Long|null);

            /** LeaveRoomBroadcast player */
            player?: (common.v1.IPlayerInfo|null);

            /** LeaveRoomBroadcast playersCount */
            playersCount?: (number|null);
        }

        /** Represents a LeaveRoomBroadcast. */
        class LeaveRoomBroadcast implements ILeaveRoomBroadcast {

            /**
             * Constructs a new LeaveRoomBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ILeaveRoomBroadcast);

            /** LeaveRoomBroadcast bcUid. */
            public bcUid: (number|Long);

            /** LeaveRoomBroadcast userId. */
            public userId: (number|Long);

            /** LeaveRoomBroadcast player. */
            public player?: (common.v1.IPlayerInfo|null);

            /** LeaveRoomBroadcast playersCount. */
            public playersCount: number;

            /**
             * Creates a new LeaveRoomBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveRoomBroadcast instance
             */
            public static create(properties?: common.v1.ILeaveRoomBroadcast): common.v1.LeaveRoomBroadcast;

            /**
             * Encodes the specified LeaveRoomBroadcast message. Does not implicitly {@link common.v1.LeaveRoomBroadcast.verify|verify} messages.
             * @param message LeaveRoomBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ILeaveRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveRoomBroadcast message, length delimited. Does not implicitly {@link common.v1.LeaveRoomBroadcast.verify|verify} messages.
             * @param message LeaveRoomBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ILeaveRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveRoomBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.LeaveRoomBroadcast;

            /**
             * Decodes a LeaveRoomBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.LeaveRoomBroadcast;

            /**
             * Verifies a LeaveRoomBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveRoomBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveRoomBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.LeaveRoomBroadcast;

            /**
             * Creates a plain object from a LeaveRoomBroadcast message. Also converts values to other types if specified.
             * @param message LeaveRoomBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.LeaveRoomBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveRoomBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LeaveRoomBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerSitDownReq. */
        interface IPlayerSitDownReq {

            /** PlayerSitDownReq seat */
            seat?: (number|null);
        }

        /** Represents a PlayerSitDownReq. */
        class PlayerSitDownReq implements IPlayerSitDownReq {

            /**
             * Constructs a new PlayerSitDownReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerSitDownReq);

            /** PlayerSitDownReq seat. */
            public seat: number;

            /**
             * Creates a new PlayerSitDownReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerSitDownReq instance
             */
            public static create(properties?: common.v1.IPlayerSitDownReq): common.v1.PlayerSitDownReq;

            /**
             * Encodes the specified PlayerSitDownReq message. Does not implicitly {@link common.v1.PlayerSitDownReq.verify|verify} messages.
             * @param message PlayerSitDownReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerSitDownReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerSitDownReq message, length delimited. Does not implicitly {@link common.v1.PlayerSitDownReq.verify|verify} messages.
             * @param message PlayerSitDownReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerSitDownReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerSitDownReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerSitDownReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerSitDownReq;

            /**
             * Decodes a PlayerSitDownReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerSitDownReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerSitDownReq;

            /**
             * Verifies a PlayerSitDownReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerSitDownReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerSitDownReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerSitDownReq;

            /**
             * Creates a plain object from a PlayerSitDownReq message. Also converts values to other types if specified.
             * @param message PlayerSitDownReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerSitDownReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerSitDownReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerSitDownReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerSitDownRes. */
        interface IPlayerSitDownRes {

            /** PlayerSitDownRes seat */
            seat?: (number|null);

            /** PlayerSitDownRes waitReadyExpiredTime */
            waitReadyExpiredTime?: (number|Long|null);
        }

        /** Represents a PlayerSitDownRes. */
        class PlayerSitDownRes implements IPlayerSitDownRes {

            /**
             * Constructs a new PlayerSitDownRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerSitDownRes);

            /** PlayerSitDownRes seat. */
            public seat: number;

            /** PlayerSitDownRes waitReadyExpiredTime. */
            public waitReadyExpiredTime: (number|Long);

            /**
             * Creates a new PlayerSitDownRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerSitDownRes instance
             */
            public static create(properties?: common.v1.IPlayerSitDownRes): common.v1.PlayerSitDownRes;

            /**
             * Encodes the specified PlayerSitDownRes message. Does not implicitly {@link common.v1.PlayerSitDownRes.verify|verify} messages.
             * @param message PlayerSitDownRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerSitDownRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerSitDownRes message, length delimited. Does not implicitly {@link common.v1.PlayerSitDownRes.verify|verify} messages.
             * @param message PlayerSitDownRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerSitDownRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerSitDownRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerSitDownRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerSitDownRes;

            /**
             * Decodes a PlayerSitDownRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerSitDownRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerSitDownRes;

            /**
             * Verifies a PlayerSitDownRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerSitDownRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerSitDownRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerSitDownRes;

            /**
             * Creates a plain object from a PlayerSitDownRes message. Also converts values to other types if specified.
             * @param message PlayerSitDownRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerSitDownRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerSitDownRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerSitDownRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SitDownBroadcast. */
        interface ISitDownBroadcast {

            /** SitDownBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** SitDownBroadcast userId */
            userId?: (number|Long|null);

            /** SitDownBroadcast player */
            player?: (common.v1.IPlayerInfo|null);

            /** SitDownBroadcast waitReadyExpiredTime */
            waitReadyExpiredTime?: (number|Long|null);
        }

        /** Represents a SitDownBroadcast. */
        class SitDownBroadcast implements ISitDownBroadcast {

            /**
             * Constructs a new SitDownBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ISitDownBroadcast);

            /** SitDownBroadcast bcUid. */
            public bcUid: (number|Long);

            /** SitDownBroadcast userId. */
            public userId: (number|Long);

            /** SitDownBroadcast player. */
            public player?: (common.v1.IPlayerInfo|null);

            /** SitDownBroadcast waitReadyExpiredTime. */
            public waitReadyExpiredTime: (number|Long);

            /**
             * Creates a new SitDownBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SitDownBroadcast instance
             */
            public static create(properties?: common.v1.ISitDownBroadcast): common.v1.SitDownBroadcast;

            /**
             * Encodes the specified SitDownBroadcast message. Does not implicitly {@link common.v1.SitDownBroadcast.verify|verify} messages.
             * @param message SitDownBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ISitDownBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SitDownBroadcast message, length delimited. Does not implicitly {@link common.v1.SitDownBroadcast.verify|verify} messages.
             * @param message SitDownBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ISitDownBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SitDownBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SitDownBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.SitDownBroadcast;

            /**
             * Decodes a SitDownBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SitDownBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.SitDownBroadcast;

            /**
             * Verifies a SitDownBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SitDownBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SitDownBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.SitDownBroadcast;

            /**
             * Creates a plain object from a SitDownBroadcast message. Also converts values to other types if specified.
             * @param message SitDownBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.SitDownBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SitDownBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SitDownBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerStandUpReq. */
        interface IPlayerStandUpReq {
        }

        /** Represents a PlayerStandUpReq. */
        class PlayerStandUpReq implements IPlayerStandUpReq {

            /**
             * Constructs a new PlayerStandUpReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerStandUpReq);

            /**
             * Creates a new PlayerStandUpReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerStandUpReq instance
             */
            public static create(properties?: common.v1.IPlayerStandUpReq): common.v1.PlayerStandUpReq;

            /**
             * Encodes the specified PlayerStandUpReq message. Does not implicitly {@link common.v1.PlayerStandUpReq.verify|verify} messages.
             * @param message PlayerStandUpReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerStandUpReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerStandUpReq message, length delimited. Does not implicitly {@link common.v1.PlayerStandUpReq.verify|verify} messages.
             * @param message PlayerStandUpReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerStandUpReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerStandUpReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerStandUpReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerStandUpReq;

            /**
             * Decodes a PlayerStandUpReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerStandUpReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerStandUpReq;

            /**
             * Verifies a PlayerStandUpReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerStandUpReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerStandUpReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerStandUpReq;

            /**
             * Creates a plain object from a PlayerStandUpReq message. Also converts values to other types if specified.
             * @param message PlayerStandUpReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerStandUpReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerStandUpReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerStandUpReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerStandUpRes. */
        interface IPlayerStandUpRes {
        }

        /** Represents a PlayerStandUpRes. */
        class PlayerStandUpRes implements IPlayerStandUpRes {

            /**
             * Constructs a new PlayerStandUpRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerStandUpRes);

            /**
             * Creates a new PlayerStandUpRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerStandUpRes instance
             */
            public static create(properties?: common.v1.IPlayerStandUpRes): common.v1.PlayerStandUpRes;

            /**
             * Encodes the specified PlayerStandUpRes message. Does not implicitly {@link common.v1.PlayerStandUpRes.verify|verify} messages.
             * @param message PlayerStandUpRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerStandUpRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerStandUpRes message, length delimited. Does not implicitly {@link common.v1.PlayerStandUpRes.verify|verify} messages.
             * @param message PlayerStandUpRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerStandUpRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerStandUpRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerStandUpRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerStandUpRes;

            /**
             * Decodes a PlayerStandUpRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerStandUpRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerStandUpRes;

            /**
             * Verifies a PlayerStandUpRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerStandUpRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerStandUpRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerStandUpRes;

            /**
             * Creates a plain object from a PlayerStandUpRes message. Also converts values to other types if specified.
             * @param message PlayerStandUpRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerStandUpRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerStandUpRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerStandUpRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StandUpBroadcast. */
        interface IStandUpBroadcast {

            /** StandUpBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** StandUpBroadcast userId */
            userId?: (number|Long|null);

            /** StandUpBroadcast player */
            player?: (common.v1.IPlayerInfo|null);
        }

        /** Represents a StandUpBroadcast. */
        class StandUpBroadcast implements IStandUpBroadcast {

            /**
             * Constructs a new StandUpBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IStandUpBroadcast);

            /** StandUpBroadcast bcUid. */
            public bcUid: (number|Long);

            /** StandUpBroadcast userId. */
            public userId: (number|Long);

            /** StandUpBroadcast player. */
            public player?: (common.v1.IPlayerInfo|null);

            /**
             * Creates a new StandUpBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StandUpBroadcast instance
             */
            public static create(properties?: common.v1.IStandUpBroadcast): common.v1.StandUpBroadcast;

            /**
             * Encodes the specified StandUpBroadcast message. Does not implicitly {@link common.v1.StandUpBroadcast.verify|verify} messages.
             * @param message StandUpBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IStandUpBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StandUpBroadcast message, length delimited. Does not implicitly {@link common.v1.StandUpBroadcast.verify|verify} messages.
             * @param message StandUpBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IStandUpBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StandUpBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StandUpBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.StandUpBroadcast;

            /**
             * Decodes a StandUpBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StandUpBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.StandUpBroadcast;

            /**
             * Verifies a StandUpBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StandUpBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StandUpBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.StandUpBroadcast;

            /**
             * Creates a plain object from a StandUpBroadcast message. Also converts values to other types if specified.
             * @param message StandUpBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.StandUpBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StandUpBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StandUpBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerReadyGameReq. */
        interface IPlayerReadyGameReq {

            /** PlayerReadyGameReq ready */
            ready?: (boolean|null);
        }

        /** Represents a PlayerReadyGameReq. */
        class PlayerReadyGameReq implements IPlayerReadyGameReq {

            /**
             * Constructs a new PlayerReadyGameReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerReadyGameReq);

            /** PlayerReadyGameReq ready. */
            public ready: boolean;

            /**
             * Creates a new PlayerReadyGameReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerReadyGameReq instance
             */
            public static create(properties?: common.v1.IPlayerReadyGameReq): common.v1.PlayerReadyGameReq;

            /**
             * Encodes the specified PlayerReadyGameReq message. Does not implicitly {@link common.v1.PlayerReadyGameReq.verify|verify} messages.
             * @param message PlayerReadyGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerReadyGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerReadyGameReq message, length delimited. Does not implicitly {@link common.v1.PlayerReadyGameReq.verify|verify} messages.
             * @param message PlayerReadyGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerReadyGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerReadyGameReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerReadyGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerReadyGameReq;

            /**
             * Decodes a PlayerReadyGameReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerReadyGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerReadyGameReq;

            /**
             * Verifies a PlayerReadyGameReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerReadyGameReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerReadyGameReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerReadyGameReq;

            /**
             * Creates a plain object from a PlayerReadyGameReq message. Also converts values to other types if specified.
             * @param message PlayerReadyGameReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerReadyGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerReadyGameReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerReadyGameReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerReadyGameRes. */
        interface IPlayerReadyGameRes {

            /** PlayerReadyGameRes ready */
            ready?: (boolean|null);

            /** PlayerReadyGameRes waitReadyExpiredTime */
            waitReadyExpiredTime?: (number|Long|null);
        }

        /** Represents a PlayerReadyGameRes. */
        class PlayerReadyGameRes implements IPlayerReadyGameRes {

            /**
             * Constructs a new PlayerReadyGameRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerReadyGameRes);

            /** PlayerReadyGameRes ready. */
            public ready: boolean;

            /** PlayerReadyGameRes waitReadyExpiredTime. */
            public waitReadyExpiredTime: (number|Long);

            /**
             * Creates a new PlayerReadyGameRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerReadyGameRes instance
             */
            public static create(properties?: common.v1.IPlayerReadyGameRes): common.v1.PlayerReadyGameRes;

            /**
             * Encodes the specified PlayerReadyGameRes message. Does not implicitly {@link common.v1.PlayerReadyGameRes.verify|verify} messages.
             * @param message PlayerReadyGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerReadyGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerReadyGameRes message, length delimited. Does not implicitly {@link common.v1.PlayerReadyGameRes.verify|verify} messages.
             * @param message PlayerReadyGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerReadyGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerReadyGameRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerReadyGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerReadyGameRes;

            /**
             * Decodes a PlayerReadyGameRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerReadyGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerReadyGameRes;

            /**
             * Verifies a PlayerReadyGameRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerReadyGameRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerReadyGameRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerReadyGameRes;

            /**
             * Creates a plain object from a PlayerReadyGameRes message. Also converts values to other types if specified.
             * @param message PlayerReadyGameRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerReadyGameRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerReadyGameRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerReadyGameRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReadyBroadcast. */
        interface IReadyBroadcast {

            /** ReadyBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** ReadyBroadcast userId */
            userId?: (number|Long|null);

            /** ReadyBroadcast player */
            player?: (common.v1.IPlayerInfo|null);

            /** ReadyBroadcast isReady */
            isReady?: (boolean|null);

            /** ReadyBroadcast waitReadyExpiredTime */
            waitReadyExpiredTime?: (number|Long|null);
        }

        /** Represents a ReadyBroadcast. */
        class ReadyBroadcast implements IReadyBroadcast {

            /**
             * Constructs a new ReadyBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IReadyBroadcast);

            /** ReadyBroadcast bcUid. */
            public bcUid: (number|Long);

            /** ReadyBroadcast userId. */
            public userId: (number|Long);

            /** ReadyBroadcast player. */
            public player?: (common.v1.IPlayerInfo|null);

            /** ReadyBroadcast isReady. */
            public isReady: boolean;

            /** ReadyBroadcast waitReadyExpiredTime. */
            public waitReadyExpiredTime: (number|Long);

            /**
             * Creates a new ReadyBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadyBroadcast instance
             */
            public static create(properties?: common.v1.IReadyBroadcast): common.v1.ReadyBroadcast;

            /**
             * Encodes the specified ReadyBroadcast message. Does not implicitly {@link common.v1.ReadyBroadcast.verify|verify} messages.
             * @param message ReadyBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IReadyBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadyBroadcast message, length delimited. Does not implicitly {@link common.v1.ReadyBroadcast.verify|verify} messages.
             * @param message ReadyBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IReadyBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadyBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadyBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ReadyBroadcast;

            /**
             * Decodes a ReadyBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadyBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ReadyBroadcast;

            /**
             * Verifies a ReadyBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadyBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadyBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ReadyBroadcast;

            /**
             * Creates a plain object from a ReadyBroadcast message. Also converts values to other types if specified.
             * @param message ReadyBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ReadyBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadyBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReadyBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserInfoUpdateBroadcast. */
        interface IUserInfoUpdateBroadcast {

            /** UserInfoUpdateBroadcast userId */
            userId?: (number|Long|null);

            /** UserInfoUpdateBroadcast coins */
            coins?: (number|Long|null);
        }

        /** Represents a UserInfoUpdateBroadcast. */
        class UserInfoUpdateBroadcast implements IUserInfoUpdateBroadcast {

            /**
             * Constructs a new UserInfoUpdateBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IUserInfoUpdateBroadcast);

            /** UserInfoUpdateBroadcast userId. */
            public userId: (number|Long);

            /** UserInfoUpdateBroadcast coins. */
            public coins: (number|Long);

            /**
             * Creates a new UserInfoUpdateBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserInfoUpdateBroadcast instance
             */
            public static create(properties?: common.v1.IUserInfoUpdateBroadcast): common.v1.UserInfoUpdateBroadcast;

            /**
             * Encodes the specified UserInfoUpdateBroadcast message. Does not implicitly {@link common.v1.UserInfoUpdateBroadcast.verify|verify} messages.
             * @param message UserInfoUpdateBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IUserInfoUpdateBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserInfoUpdateBroadcast message, length delimited. Does not implicitly {@link common.v1.UserInfoUpdateBroadcast.verify|verify} messages.
             * @param message UserInfoUpdateBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IUserInfoUpdateBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserInfoUpdateBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserInfoUpdateBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.UserInfoUpdateBroadcast;

            /**
             * Decodes a UserInfoUpdateBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserInfoUpdateBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.UserInfoUpdateBroadcast;

            /**
             * Verifies a UserInfoUpdateBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserInfoUpdateBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserInfoUpdateBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.UserInfoUpdateBroadcast;

            /**
             * Creates a plain object from a UserInfoUpdateBroadcast message. Also converts values to other types if specified.
             * @param message UserInfoUpdateBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.UserInfoUpdateBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserInfoUpdateBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserInfoUpdateBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerSettingsReq. */
        interface IPlayerSettingsReq {

            /** PlayerSettingsReq settings */
            settings?: (common.v1.IPlayerSettings|null);
        }

        /** Represents a PlayerSettingsReq. */
        class PlayerSettingsReq implements IPlayerSettingsReq {

            /**
             * Constructs a new PlayerSettingsReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerSettingsReq);

            /** PlayerSettingsReq settings. */
            public settings?: (common.v1.IPlayerSettings|null);

            /**
             * Creates a new PlayerSettingsReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerSettingsReq instance
             */
            public static create(properties?: common.v1.IPlayerSettingsReq): common.v1.PlayerSettingsReq;

            /**
             * Encodes the specified PlayerSettingsReq message. Does not implicitly {@link common.v1.PlayerSettingsReq.verify|verify} messages.
             * @param message PlayerSettingsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerSettingsReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerSettingsReq message, length delimited. Does not implicitly {@link common.v1.PlayerSettingsReq.verify|verify} messages.
             * @param message PlayerSettingsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerSettingsReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerSettingsReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerSettingsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerSettingsReq;

            /**
             * Decodes a PlayerSettingsReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerSettingsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerSettingsReq;

            /**
             * Verifies a PlayerSettingsReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerSettingsReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerSettingsReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerSettingsReq;

            /**
             * Creates a plain object from a PlayerSettingsReq message. Also converts values to other types if specified.
             * @param message PlayerSettingsReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerSettingsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerSettingsReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerSettingsReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerSettingsRes. */
        interface IPlayerSettingsRes {
        }

        /** Represents a PlayerSettingsRes. */
        class PlayerSettingsRes implements IPlayerSettingsRes {

            /**
             * Constructs a new PlayerSettingsRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerSettingsRes);

            /**
             * Creates a new PlayerSettingsRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerSettingsRes instance
             */
            public static create(properties?: common.v1.IPlayerSettingsRes): common.v1.PlayerSettingsRes;

            /**
             * Encodes the specified PlayerSettingsRes message. Does not implicitly {@link common.v1.PlayerSettingsRes.verify|verify} messages.
             * @param message PlayerSettingsRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerSettingsRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerSettingsRes message, length delimited. Does not implicitly {@link common.v1.PlayerSettingsRes.verify|verify} messages.
             * @param message PlayerSettingsRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerSettingsRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerSettingsRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerSettingsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerSettingsRes;

            /**
             * Decodes a PlayerSettingsRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerSettingsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerSettingsRes;

            /**
             * Verifies a PlayerSettingsRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerSettingsRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerSettingsRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerSettingsRes;

            /**
             * Creates a plain object from a PlayerSettingsRes message. Also converts values to other types if specified.
             * @param message PlayerSettingsRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerSettingsRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerSettingsRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerSettingsRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetHistorySummaryReq. */
        interface IGetHistorySummaryReq {

            /** GetHistorySummaryReq userId */
            userId?: (number|Long|null);

            /** GetHistorySummaryReq gameId */
            gameId?: (number|null);

            /** GetHistorySummaryReq startTime */
            startTime?: (number|Long|null);

            /** GetHistorySummaryReq endTime */
            endTime?: (number|Long|null);
        }

        /** Represents a GetHistorySummaryReq. */
        class GetHistorySummaryReq implements IGetHistorySummaryReq {

            /**
             * Constructs a new GetHistorySummaryReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IGetHistorySummaryReq);

            /** GetHistorySummaryReq userId. */
            public userId: (number|Long);

            /** GetHistorySummaryReq gameId. */
            public gameId: number;

            /** GetHistorySummaryReq startTime. */
            public startTime: (number|Long);

            /** GetHistorySummaryReq endTime. */
            public endTime: (number|Long);

            /**
             * Creates a new GetHistorySummaryReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetHistorySummaryReq instance
             */
            public static create(properties?: common.v1.IGetHistorySummaryReq): common.v1.GetHistorySummaryReq;

            /**
             * Encodes the specified GetHistorySummaryReq message. Does not implicitly {@link common.v1.GetHistorySummaryReq.verify|verify} messages.
             * @param message GetHistorySummaryReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IGetHistorySummaryReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetHistorySummaryReq message, length delimited. Does not implicitly {@link common.v1.GetHistorySummaryReq.verify|verify} messages.
             * @param message GetHistorySummaryReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IGetHistorySummaryReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetHistorySummaryReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetHistorySummaryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.GetHistorySummaryReq;

            /**
             * Decodes a GetHistorySummaryReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetHistorySummaryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.GetHistorySummaryReq;

            /**
             * Verifies a GetHistorySummaryReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetHistorySummaryReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetHistorySummaryReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.GetHistorySummaryReq;

            /**
             * Creates a plain object from a GetHistorySummaryReq message. Also converts values to other types if specified.
             * @param message GetHistorySummaryReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.GetHistorySummaryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetHistorySummaryReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetHistorySummaryReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetHistorySummaryRes. */
        interface IGetHistorySummaryRes {

            /** GetHistorySummaryRes dateSummaries */
            dateSummaries?: (common.v1.IHistoryDateSummary[]|null);
        }

        /** Represents a GetHistorySummaryRes. */
        class GetHistorySummaryRes implements IGetHistorySummaryRes {

            /**
             * Constructs a new GetHistorySummaryRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IGetHistorySummaryRes);

            /** GetHistorySummaryRes dateSummaries. */
            public dateSummaries: common.v1.IHistoryDateSummary[];

            /**
             * Creates a new GetHistorySummaryRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetHistorySummaryRes instance
             */
            public static create(properties?: common.v1.IGetHistorySummaryRes): common.v1.GetHistorySummaryRes;

            /**
             * Encodes the specified GetHistorySummaryRes message. Does not implicitly {@link common.v1.GetHistorySummaryRes.verify|verify} messages.
             * @param message GetHistorySummaryRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IGetHistorySummaryRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetHistorySummaryRes message, length delimited. Does not implicitly {@link common.v1.GetHistorySummaryRes.verify|verify} messages.
             * @param message GetHistorySummaryRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IGetHistorySummaryRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetHistorySummaryRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetHistorySummaryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.GetHistorySummaryRes;

            /**
             * Decodes a GetHistorySummaryRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetHistorySummaryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.GetHistorySummaryRes;

            /**
             * Verifies a GetHistorySummaryRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetHistorySummaryRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetHistorySummaryRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.GetHistorySummaryRes;

            /**
             * Creates a plain object from a GetHistorySummaryRes message. Also converts values to other types if specified.
             * @param message GetHistorySummaryRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.GetHistorySummaryRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetHistorySummaryRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetHistorySummaryRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HistoryDateSummary. */
        interface IHistoryDateSummary {

            /** HistoryDateSummary date */
            date?: (number|null);
        }

        /** Represents a HistoryDateSummary. */
        class HistoryDateSummary implements IHistoryDateSummary {

            /**
             * Constructs a new HistoryDateSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IHistoryDateSummary);

            /** HistoryDateSummary date. */
            public date: number;

            /**
             * Creates a new HistoryDateSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HistoryDateSummary instance
             */
            public static create(properties?: common.v1.IHistoryDateSummary): common.v1.HistoryDateSummary;

            /**
             * Encodes the specified HistoryDateSummary message. Does not implicitly {@link common.v1.HistoryDateSummary.verify|verify} messages.
             * @param message HistoryDateSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IHistoryDateSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HistoryDateSummary message, length delimited. Does not implicitly {@link common.v1.HistoryDateSummary.verify|verify} messages.
             * @param message HistoryDateSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IHistoryDateSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HistoryDateSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HistoryDateSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.HistoryDateSummary;

            /**
             * Decodes a HistoryDateSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HistoryDateSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.HistoryDateSummary;

            /**
             * Verifies a HistoryDateSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HistoryDateSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HistoryDateSummary
             */
            public static fromObject(object: { [k: string]: any }): common.v1.HistoryDateSummary;

            /**
             * Creates a plain object from a HistoryDateSummary message. Also converts values to other types if specified.
             * @param message HistoryDateSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.HistoryDateSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HistoryDateSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HistoryDateSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PacketHeader. */
        interface IPacketHeader {

            /** PacketHeader length */
            length?: (number|null);

            /** PacketHeader msgType */
            msgType?: (number|null);

            /** PacketHeader requestId */
            requestId?: (number|null);

            /** PacketHeader errorCode */
            errorCode?: (number|null);
        }

        /** Represents a PacketHeader. */
        class PacketHeader implements IPacketHeader {

            /**
             * Constructs a new PacketHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPacketHeader);

            /** PacketHeader length. */
            public length: number;

            /** PacketHeader msgType. */
            public msgType: number;

            /** PacketHeader requestId. */
            public requestId: number;

            /** PacketHeader errorCode. */
            public errorCode: number;

            /**
             * Creates a new PacketHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PacketHeader instance
             */
            public static create(properties?: common.v1.IPacketHeader): common.v1.PacketHeader;

            /**
             * Encodes the specified PacketHeader message. Does not implicitly {@link common.v1.PacketHeader.verify|verify} messages.
             * @param message PacketHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPacketHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PacketHeader message, length delimited. Does not implicitly {@link common.v1.PacketHeader.verify|verify} messages.
             * @param message PacketHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPacketHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PacketHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PacketHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PacketHeader;

            /**
             * Decodes a PacketHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PacketHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PacketHeader;

            /**
             * Verifies a PacketHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PacketHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PacketHeader
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PacketHeader;

            /**
             * Creates a plain object from a PacketHeader message. Also converts values to other types if specified.
             * @param message PacketHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PacketHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PacketHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PacketHeader
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RoomInfo. */
        interface IRoomInfo {

            /** RoomInfo roomId */
            roomId?: (number|Long|null);

            /** RoomInfo roomName */
            roomName?: (string|null);

            /** RoomInfo roomStatus */
            roomStatus?: (number|null);

            /** RoomInfo applyMicCount */
            applyMicCount?: (number|null);

            /** RoomInfo roomMode */
            roomMode?: (number|null);
        }

        /** Represents a RoomInfo. */
        class RoomInfo implements IRoomInfo {

            /**
             * Constructs a new RoomInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IRoomInfo);

            /** RoomInfo roomId. */
            public roomId: (number|Long);

            /** RoomInfo roomName. */
            public roomName: string;

            /** RoomInfo roomStatus. */
            public roomStatus: number;

            /** RoomInfo applyMicCount. */
            public applyMicCount: number;

            /** RoomInfo roomMode. */
            public roomMode: number;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoomInfo instance
             */
            public static create(properties?: common.v1.IRoomInfo): common.v1.RoomInfo;

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link common.v1.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link common.v1.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.RoomInfo;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.RoomInfo;

            /**
             * Verifies a RoomInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoomInfo
             */
            public static fromObject(object: { [k: string]: any }): common.v1.RoomInfo;

            /**
             * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
             * @param message RoomInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoomInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoomInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DefaultPlayerInfo. */
        interface IDefaultPlayerInfo {

            /** DefaultPlayerInfo playerInfo */
            playerInfo?: (common.v1.IPlayerInfo|null);
        }

        /** Represents a DefaultPlayerInfo. */
        class DefaultPlayerInfo implements IDefaultPlayerInfo {

            /**
             * Constructs a new DefaultPlayerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IDefaultPlayerInfo);

            /** DefaultPlayerInfo playerInfo. */
            public playerInfo?: (common.v1.IPlayerInfo|null);

            /**
             * Creates a new DefaultPlayerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DefaultPlayerInfo instance
             */
            public static create(properties?: common.v1.IDefaultPlayerInfo): common.v1.DefaultPlayerInfo;

            /**
             * Encodes the specified DefaultPlayerInfo message. Does not implicitly {@link common.v1.DefaultPlayerInfo.verify|verify} messages.
             * @param message DefaultPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IDefaultPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DefaultPlayerInfo message, length delimited. Does not implicitly {@link common.v1.DefaultPlayerInfo.verify|verify} messages.
             * @param message DefaultPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IDefaultPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DefaultPlayerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DefaultPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.DefaultPlayerInfo;

            /**
             * Decodes a DefaultPlayerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DefaultPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.DefaultPlayerInfo;

            /**
             * Verifies a DefaultPlayerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DefaultPlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DefaultPlayerInfo
             */
            public static fromObject(object: { [k: string]: any }): common.v1.DefaultPlayerInfo;

            /**
             * Creates a plain object from a DefaultPlayerInfo message. Also converts values to other types if specified.
             * @param message DefaultPlayerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.DefaultPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DefaultPlayerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DefaultPlayerInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerInfo. */
        interface IPlayerInfo {

            /** PlayerInfo userId */
            userId?: (number|Long|null);

            /** PlayerInfo nickname */
            nickname?: (string|null);

            /** PlayerInfo avatar */
            avatar?: (string|null);

            /** PlayerInfo coin */
            coin?: (number|Long|null);

            /** PlayerInfo seat */
            seat?: (number|null);

            /** PlayerInfo role */
            role?: (number|null);

            /** PlayerInfo post */
            post?: (number|null);

            /** PlayerInfo state */
            state?: (number|null);

            /** PlayerInfo coinChanged */
            coinChanged?: (number|Long|null);

            /** PlayerInfo micAllowStatus */
            micAllowStatus?: (number|null);

            /** PlayerInfo micOn */
            micOn?: (boolean|null);

            /** PlayerInfo nextMicRequestTime */
            nextMicRequestTime?: (number|Long|null);

            /** PlayerInfo micRequestExpiredTime */
            micRequestExpiredTime?: (number|Long|null);

            /** PlayerInfo waitReadyExpiredTime */
            waitReadyExpiredTime?: (number|Long|null);
        }

        /** Represents a PlayerInfo. */
        class PlayerInfo implements IPlayerInfo {

            /**
             * Constructs a new PlayerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerInfo);

            /** PlayerInfo userId. */
            public userId: (number|Long);

            /** PlayerInfo nickname. */
            public nickname: string;

            /** PlayerInfo avatar. */
            public avatar: string;

            /** PlayerInfo coin. */
            public coin: (number|Long);

            /** PlayerInfo seat. */
            public seat: number;

            /** PlayerInfo role. */
            public role: number;

            /** PlayerInfo post. */
            public post: number;

            /** PlayerInfo state. */
            public state: number;

            /** PlayerInfo coinChanged. */
            public coinChanged: (number|Long);

            /** PlayerInfo micAllowStatus. */
            public micAllowStatus: number;

            /** PlayerInfo micOn. */
            public micOn: boolean;

            /** PlayerInfo nextMicRequestTime. */
            public nextMicRequestTime: (number|Long);

            /** PlayerInfo micRequestExpiredTime. */
            public micRequestExpiredTime: (number|Long);

            /** PlayerInfo waitReadyExpiredTime. */
            public waitReadyExpiredTime: (number|Long);

            /**
             * Creates a new PlayerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerInfo instance
             */
            public static create(properties?: common.v1.IPlayerInfo): common.v1.PlayerInfo;

            /**
             * Encodes the specified PlayerInfo message. Does not implicitly {@link common.v1.PlayerInfo.verify|verify} messages.
             * @param message PlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link common.v1.PlayerInfo.verify|verify} messages.
             * @param message PlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerInfo;

            /**
             * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerInfo;

            /**
             * Verifies a PlayerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerInfo
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerInfo;

            /**
             * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
             * @param message PlayerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerSettings. */
        interface IPlayerSettings {

            /** PlayerSettings numericSettings */
            numericSettings?: ({ [k: string]: (number|Long) }|null);
        }

        /** Represents a PlayerSettings. */
        class PlayerSettings implements IPlayerSettings {

            /**
             * Constructs a new PlayerSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerSettings);

            /** PlayerSettings numericSettings. */
            public numericSettings: { [k: string]: (number|Long) };

            /**
             * Creates a new PlayerSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerSettings instance
             */
            public static create(properties?: common.v1.IPlayerSettings): common.v1.PlayerSettings;

            /**
             * Encodes the specified PlayerSettings message. Does not implicitly {@link common.v1.PlayerSettings.verify|verify} messages.
             * @param message PlayerSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerSettings message, length delimited. Does not implicitly {@link common.v1.PlayerSettings.verify|verify} messages.
             * @param message PlayerSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerSettings;

            /**
             * Decodes a PlayerSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerSettings;

            /**
             * Verifies a PlayerSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerSettings
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerSettings;

            /**
             * Creates a plain object from a PlayerSettings message. Also converts values to other types if specified.
             * @param message PlayerSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BarrageInfo. */
        interface IBarrageInfo {

            /** BarrageInfo player */
            player?: (common.v1.IPlayerInfo|null);

            /** BarrageInfo content */
            content?: (string|null);
        }

        /** Represents a BarrageInfo. */
        class BarrageInfo implements IBarrageInfo {

            /**
             * Constructs a new BarrageInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IBarrageInfo);

            /** BarrageInfo player. */
            public player?: (common.v1.IPlayerInfo|null);

            /** BarrageInfo content. */
            public content: string;

            /**
             * Creates a new BarrageInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BarrageInfo instance
             */
            public static create(properties?: common.v1.IBarrageInfo): common.v1.BarrageInfo;

            /**
             * Encodes the specified BarrageInfo message. Does not implicitly {@link common.v1.BarrageInfo.verify|verify} messages.
             * @param message BarrageInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IBarrageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BarrageInfo message, length delimited. Does not implicitly {@link common.v1.BarrageInfo.verify|verify} messages.
             * @param message BarrageInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IBarrageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BarrageInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BarrageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.BarrageInfo;

            /**
             * Decodes a BarrageInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BarrageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.BarrageInfo;

            /**
             * Verifies a BarrageInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BarrageInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BarrageInfo
             */
            public static fromObject(object: { [k: string]: any }): common.v1.BarrageInfo;

            /**
             * Creates a plain object from a BarrageInfo message. Also converts values to other types if specified.
             * @param message BarrageInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.BarrageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BarrageInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BarrageInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SendBarrageReq. */
        interface ISendBarrageReq {

            /** SendBarrageReq content */
            content?: (string|null);
        }

        /** Represents a SendBarrageReq. */
        class SendBarrageReq implements ISendBarrageReq {

            /**
             * Constructs a new SendBarrageReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ISendBarrageReq);

            /** SendBarrageReq content. */
            public content: string;

            /**
             * Creates a new SendBarrageReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SendBarrageReq instance
             */
            public static create(properties?: common.v1.ISendBarrageReq): common.v1.SendBarrageReq;

            /**
             * Encodes the specified SendBarrageReq message. Does not implicitly {@link common.v1.SendBarrageReq.verify|verify} messages.
             * @param message SendBarrageReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ISendBarrageReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendBarrageReq message, length delimited. Does not implicitly {@link common.v1.SendBarrageReq.verify|verify} messages.
             * @param message SendBarrageReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ISendBarrageReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendBarrageReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SendBarrageReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.SendBarrageReq;

            /**
             * Decodes a SendBarrageReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SendBarrageReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.SendBarrageReq;

            /**
             * Verifies a SendBarrageReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendBarrageReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendBarrageReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.SendBarrageReq;

            /**
             * Creates a plain object from a SendBarrageReq message. Also converts values to other types if specified.
             * @param message SendBarrageReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.SendBarrageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendBarrageReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SendBarrageReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SendBarrageRes. */
        interface ISendBarrageRes {

            /** SendBarrageRes content */
            content?: (string|null);
        }

        /** Represents a SendBarrageRes. */
        class SendBarrageRes implements ISendBarrageRes {

            /**
             * Constructs a new SendBarrageRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ISendBarrageRes);

            /** SendBarrageRes content. */
            public content: string;

            /**
             * Creates a new SendBarrageRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SendBarrageRes instance
             */
            public static create(properties?: common.v1.ISendBarrageRes): common.v1.SendBarrageRes;

            /**
             * Encodes the specified SendBarrageRes message. Does not implicitly {@link common.v1.SendBarrageRes.verify|verify} messages.
             * @param message SendBarrageRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ISendBarrageRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendBarrageRes message, length delimited. Does not implicitly {@link common.v1.SendBarrageRes.verify|verify} messages.
             * @param message SendBarrageRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ISendBarrageRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendBarrageRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SendBarrageRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.SendBarrageRes;

            /**
             * Decodes a SendBarrageRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SendBarrageRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.SendBarrageRes;

            /**
             * Verifies a SendBarrageRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendBarrageRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendBarrageRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.SendBarrageRes;

            /**
             * Creates a plain object from a SendBarrageRes message. Also converts values to other types if specified.
             * @param message SendBarrageRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.SendBarrageRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendBarrageRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SendBarrageRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SendBarrageBroadcast. */
        interface ISendBarrageBroadcast {

            /** SendBarrageBroadcast gatewayPlayerIds */
            gatewayPlayerIds?: ((number|Long)[]|null);

            /** SendBarrageBroadcast barrage */
            barrage?: (common.v1.IBarrageInfo|null);
        }

        /** Represents a SendBarrageBroadcast. */
        class SendBarrageBroadcast implements ISendBarrageBroadcast {

            /**
             * Constructs a new SendBarrageBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ISendBarrageBroadcast);

            /** SendBarrageBroadcast gatewayPlayerIds. */
            public gatewayPlayerIds: (number|Long)[];

            /** SendBarrageBroadcast barrage. */
            public barrage?: (common.v1.IBarrageInfo|null);

            /**
             * Creates a new SendBarrageBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SendBarrageBroadcast instance
             */
            public static create(properties?: common.v1.ISendBarrageBroadcast): common.v1.SendBarrageBroadcast;

            /**
             * Encodes the specified SendBarrageBroadcast message. Does not implicitly {@link common.v1.SendBarrageBroadcast.verify|verify} messages.
             * @param message SendBarrageBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ISendBarrageBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendBarrageBroadcast message, length delimited. Does not implicitly {@link common.v1.SendBarrageBroadcast.verify|verify} messages.
             * @param message SendBarrageBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ISendBarrageBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendBarrageBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SendBarrageBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.SendBarrageBroadcast;

            /**
             * Decodes a SendBarrageBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SendBarrageBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.SendBarrageBroadcast;

            /**
             * Verifies a SendBarrageBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendBarrageBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendBarrageBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.SendBarrageBroadcast;

            /**
             * Creates a plain object from a SendBarrageBroadcast message. Also converts values to other types if specified.
             * @param message SendBarrageBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.SendBarrageBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendBarrageBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SendBarrageBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApplyAllowMicReq. */
        interface IApplyAllowMicReq {
        }

        /** Represents an ApplyAllowMicReq. */
        class ApplyAllowMicReq implements IApplyAllowMicReq {

            /**
             * Constructs a new ApplyAllowMicReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApplyAllowMicReq);

            /**
             * Creates a new ApplyAllowMicReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApplyAllowMicReq instance
             */
            public static create(properties?: common.v1.IApplyAllowMicReq): common.v1.ApplyAllowMicReq;

            /**
             * Encodes the specified ApplyAllowMicReq message. Does not implicitly {@link common.v1.ApplyAllowMicReq.verify|verify} messages.
             * @param message ApplyAllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApplyAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApplyAllowMicReq message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicReq.verify|verify} messages.
             * @param message ApplyAllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApplyAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApplyAllowMicReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApplyAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApplyAllowMicReq;

            /**
             * Decodes an ApplyAllowMicReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApplyAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApplyAllowMicReq;

            /**
             * Verifies an ApplyAllowMicReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApplyAllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApplyAllowMicReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApplyAllowMicReq;

            /**
             * Creates a plain object from an ApplyAllowMicReq message. Also converts values to other types if specified.
             * @param message ApplyAllowMicReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApplyAllowMicReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApplyAllowMicReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApplyAllowMicReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApplyAllowMicRes. */
        interface IApplyAllowMicRes {

            /** ApplyAllowMicRes allowed */
            allowed?: (boolean|null);
        }

        /** Represents an ApplyAllowMicRes. */
        class ApplyAllowMicRes implements IApplyAllowMicRes {

            /**
             * Constructs a new ApplyAllowMicRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApplyAllowMicRes);

            /** ApplyAllowMicRes allowed. */
            public allowed: boolean;

            /**
             * Creates a new ApplyAllowMicRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApplyAllowMicRes instance
             */
            public static create(properties?: common.v1.IApplyAllowMicRes): common.v1.ApplyAllowMicRes;

            /**
             * Encodes the specified ApplyAllowMicRes message. Does not implicitly {@link common.v1.ApplyAllowMicRes.verify|verify} messages.
             * @param message ApplyAllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApplyAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApplyAllowMicRes message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicRes.verify|verify} messages.
             * @param message ApplyAllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApplyAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApplyAllowMicRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApplyAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApplyAllowMicRes;

            /**
             * Decodes an ApplyAllowMicRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApplyAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApplyAllowMicRes;

            /**
             * Verifies an ApplyAllowMicRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApplyAllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApplyAllowMicRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApplyAllowMicRes;

            /**
             * Creates a plain object from an ApplyAllowMicRes message. Also converts values to other types if specified.
             * @param message ApplyAllowMicRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApplyAllowMicRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApplyAllowMicRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApplyAllowMicRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApplyAllowMicBroadcast. */
        interface IApplyAllowMicBroadcast {

            /** ApplyAllowMicBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** ApplyAllowMicBroadcast playerId */
            playerId?: (number|Long|null);

            /** ApplyAllowMicBroadcast applyMicCount */
            applyMicCount?: (number|null);
        }

        /** Represents an ApplyAllowMicBroadcast. */
        class ApplyAllowMicBroadcast implements IApplyAllowMicBroadcast {

            /**
             * Constructs a new ApplyAllowMicBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApplyAllowMicBroadcast);

            /** ApplyAllowMicBroadcast bcUid. */
            public bcUid: (number|Long);

            /** ApplyAllowMicBroadcast playerId. */
            public playerId: (number|Long);

            /** ApplyAllowMicBroadcast applyMicCount. */
            public applyMicCount: number;

            /**
             * Creates a new ApplyAllowMicBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApplyAllowMicBroadcast instance
             */
            public static create(properties?: common.v1.IApplyAllowMicBroadcast): common.v1.ApplyAllowMicBroadcast;

            /**
             * Encodes the specified ApplyAllowMicBroadcast message. Does not implicitly {@link common.v1.ApplyAllowMicBroadcast.verify|verify} messages.
             * @param message ApplyAllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApplyAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApplyAllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicBroadcast.verify|verify} messages.
             * @param message ApplyAllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApplyAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApplyAllowMicBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApplyAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApplyAllowMicBroadcast;

            /**
             * Decodes an ApplyAllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApplyAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApplyAllowMicBroadcast;

            /**
             * Verifies an ApplyAllowMicBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApplyAllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApplyAllowMicBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApplyAllowMicBroadcast;

            /**
             * Creates a plain object from an ApplyAllowMicBroadcast message. Also converts values to other types if specified.
             * @param message ApplyAllowMicBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApplyAllowMicBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApplyAllowMicBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApplyAllowMicBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApproveAllowMicReq. */
        interface IApproveAllowMicReq {

            /** ApproveAllowMicReq playerId */
            playerId?: (number|Long|null);

            /** ApproveAllowMicReq allowed */
            allowed?: (boolean|null);
        }

        /** Represents an ApproveAllowMicReq. */
        class ApproveAllowMicReq implements IApproveAllowMicReq {

            /**
             * Constructs a new ApproveAllowMicReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApproveAllowMicReq);

            /** ApproveAllowMicReq playerId. */
            public playerId: (number|Long);

            /** ApproveAllowMicReq allowed. */
            public allowed: boolean;

            /**
             * Creates a new ApproveAllowMicReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApproveAllowMicReq instance
             */
            public static create(properties?: common.v1.IApproveAllowMicReq): common.v1.ApproveAllowMicReq;

            /**
             * Encodes the specified ApproveAllowMicReq message. Does not implicitly {@link common.v1.ApproveAllowMicReq.verify|verify} messages.
             * @param message ApproveAllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApproveAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApproveAllowMicReq message, length delimited. Does not implicitly {@link common.v1.ApproveAllowMicReq.verify|verify} messages.
             * @param message ApproveAllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApproveAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApproveAllowMicReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApproveAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApproveAllowMicReq;

            /**
             * Decodes an ApproveAllowMicReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApproveAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApproveAllowMicReq;

            /**
             * Verifies an ApproveAllowMicReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApproveAllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApproveAllowMicReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApproveAllowMicReq;

            /**
             * Creates a plain object from an ApproveAllowMicReq message. Also converts values to other types if specified.
             * @param message ApproveAllowMicReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApproveAllowMicReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApproveAllowMicReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApproveAllowMicReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApproveAllowMicRes. */
        interface IApproveAllowMicRes {

            /** ApproveAllowMicRes playerId */
            playerId?: (number|Long|null);

            /** ApproveAllowMicRes allowed */
            allowed?: (boolean|null);

            /** ApproveAllowMicRes applyMicCount */
            applyMicCount?: (number|null);
        }

        /** Represents an ApproveAllowMicRes. */
        class ApproveAllowMicRes implements IApproveAllowMicRes {

            /**
             * Constructs a new ApproveAllowMicRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApproveAllowMicRes);

            /** ApproveAllowMicRes playerId. */
            public playerId: (number|Long);

            /** ApproveAllowMicRes allowed. */
            public allowed: boolean;

            /** ApproveAllowMicRes applyMicCount. */
            public applyMicCount: number;

            /**
             * Creates a new ApproveAllowMicRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApproveAllowMicRes instance
             */
            public static create(properties?: common.v1.IApproveAllowMicRes): common.v1.ApproveAllowMicRes;

            /**
             * Encodes the specified ApproveAllowMicRes message. Does not implicitly {@link common.v1.ApproveAllowMicRes.verify|verify} messages.
             * @param message ApproveAllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApproveAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApproveAllowMicRes message, length delimited. Does not implicitly {@link common.v1.ApproveAllowMicRes.verify|verify} messages.
             * @param message ApproveAllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApproveAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApproveAllowMicRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApproveAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApproveAllowMicRes;

            /**
             * Decodes an ApproveAllowMicRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApproveAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApproveAllowMicRes;

            /**
             * Verifies an ApproveAllowMicRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApproveAllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApproveAllowMicRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApproveAllowMicRes;

            /**
             * Creates a plain object from an ApproveAllowMicRes message. Also converts values to other types if specified.
             * @param message ApproveAllowMicRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApproveAllowMicRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApproveAllowMicRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApproveAllowMicRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApproveAllowMicBroadcast. */
        interface IApproveAllowMicBroadcast {

            /** ApproveAllowMicBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** ApproveAllowMicBroadcast playerId */
            playerId?: (number|Long|null);

            /** ApproveAllowMicBroadcast allowed */
            allowed?: (boolean|null);

            /** ApproveAllowMicBroadcast applyMicCount */
            applyMicCount?: (number|null);
        }

        /** Represents an ApproveAllowMicBroadcast. */
        class ApproveAllowMicBroadcast implements IApproveAllowMicBroadcast {

            /**
             * Constructs a new ApproveAllowMicBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApproveAllowMicBroadcast);

            /** ApproveAllowMicBroadcast bcUid. */
            public bcUid: (number|Long);

            /** ApproveAllowMicBroadcast playerId. */
            public playerId: (number|Long);

            /** ApproveAllowMicBroadcast allowed. */
            public allowed: boolean;

            /** ApproveAllowMicBroadcast applyMicCount. */
            public applyMicCount: number;

            /**
             * Creates a new ApproveAllowMicBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApproveAllowMicBroadcast instance
             */
            public static create(properties?: common.v1.IApproveAllowMicBroadcast): common.v1.ApproveAllowMicBroadcast;

            /**
             * Encodes the specified ApproveAllowMicBroadcast message. Does not implicitly {@link common.v1.ApproveAllowMicBroadcast.verify|verify} messages.
             * @param message ApproveAllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApproveAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApproveAllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.ApproveAllowMicBroadcast.verify|verify} messages.
             * @param message ApproveAllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApproveAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApproveAllowMicBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApproveAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApproveAllowMicBroadcast;

            /**
             * Decodes an ApproveAllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApproveAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApproveAllowMicBroadcast;

            /**
             * Verifies an ApproveAllowMicBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApproveAllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApproveAllowMicBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApproveAllowMicBroadcast;

            /**
             * Creates a plain object from an ApproveAllowMicBroadcast message. Also converts values to other types if specified.
             * @param message ApproveAllowMicBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApproveAllowMicBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApproveAllowMicBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApproveAllowMicBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AllowMicChangedBroadcast. */
        interface IAllowMicChangedBroadcast {

            /** AllowMicChangedBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** AllowMicChangedBroadcast player */
            player?: (common.v1.IPlayerInfo|null);

            /** AllowMicChangedBroadcast allowed */
            allowed?: (boolean|null);
        }

        /** Represents an AllowMicChangedBroadcast. */
        class AllowMicChangedBroadcast implements IAllowMicChangedBroadcast {

            /**
             * Constructs a new AllowMicChangedBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IAllowMicChangedBroadcast);

            /** AllowMicChangedBroadcast bcUid. */
            public bcUid: (number|Long);

            /** AllowMicChangedBroadcast player. */
            public player?: (common.v1.IPlayerInfo|null);

            /** AllowMicChangedBroadcast allowed. */
            public allowed: boolean;

            /**
             * Creates a new AllowMicChangedBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllowMicChangedBroadcast instance
             */
            public static create(properties?: common.v1.IAllowMicChangedBroadcast): common.v1.AllowMicChangedBroadcast;

            /**
             * Encodes the specified AllowMicChangedBroadcast message. Does not implicitly {@link common.v1.AllowMicChangedBroadcast.verify|verify} messages.
             * @param message AllowMicChangedBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IAllowMicChangedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllowMicChangedBroadcast message, length delimited. Does not implicitly {@link common.v1.AllowMicChangedBroadcast.verify|verify} messages.
             * @param message AllowMicChangedBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IAllowMicChangedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllowMicChangedBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllowMicChangedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.AllowMicChangedBroadcast;

            /**
             * Decodes an AllowMicChangedBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllowMicChangedBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.AllowMicChangedBroadcast;

            /**
             * Verifies an AllowMicChangedBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllowMicChangedBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllowMicChangedBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.AllowMicChangedBroadcast;

            /**
             * Creates a plain object from an AllowMicChangedBroadcast message. Also converts values to other types if specified.
             * @param message AllowMicChangedBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.AllowMicChangedBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllowMicChangedBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AllowMicChangedBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenMicReq. */
        interface IOpenMicReq {

            /** OpenMicReq open */
            open?: (boolean|null);
        }

        /** Represents an OpenMicReq. */
        class OpenMicReq implements IOpenMicReq {

            /**
             * Constructs a new OpenMicReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOpenMicReq);

            /** OpenMicReq open. */
            public open: boolean;

            /**
             * Creates a new OpenMicReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenMicReq instance
             */
            public static create(properties?: common.v1.IOpenMicReq): common.v1.OpenMicReq;

            /**
             * Encodes the specified OpenMicReq message. Does not implicitly {@link common.v1.OpenMicReq.verify|verify} messages.
             * @param message OpenMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOpenMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenMicReq message, length delimited. Does not implicitly {@link common.v1.OpenMicReq.verify|verify} messages.
             * @param message OpenMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOpenMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenMicReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OpenMicReq;

            /**
             * Decodes an OpenMicReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OpenMicReq;

            /**
             * Verifies an OpenMicReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenMicReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenMicReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OpenMicReq;

            /**
             * Creates a plain object from an OpenMicReq message. Also converts values to other types if specified.
             * @param message OpenMicReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OpenMicReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenMicReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenMicReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenMicRes. */
        interface IOpenMicRes {

            /** OpenMicRes open */
            open?: (boolean|null);
        }

        /** Represents an OpenMicRes. */
        class OpenMicRes implements IOpenMicRes {

            /**
             * Constructs a new OpenMicRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOpenMicRes);

            /** OpenMicRes open. */
            public open: boolean;

            /**
             * Creates a new OpenMicRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenMicRes instance
             */
            public static create(properties?: common.v1.IOpenMicRes): common.v1.OpenMicRes;

            /**
             * Encodes the specified OpenMicRes message. Does not implicitly {@link common.v1.OpenMicRes.verify|verify} messages.
             * @param message OpenMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOpenMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenMicRes message, length delimited. Does not implicitly {@link common.v1.OpenMicRes.verify|verify} messages.
             * @param message OpenMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOpenMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenMicRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OpenMicRes;

            /**
             * Decodes an OpenMicRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OpenMicRes;

            /**
             * Verifies an OpenMicRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenMicRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenMicRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OpenMicRes;

            /**
             * Creates a plain object from an OpenMicRes message. Also converts values to other types if specified.
             * @param message OpenMicRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OpenMicRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenMicRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenMicRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenMicBroadcast. */
        interface IOpenMicBroadcast {

            /** OpenMicBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** OpenMicBroadcast playerId */
            playerId?: (number|Long|null);

            /** OpenMicBroadcast open */
            open?: (boolean|null);
        }

        /** Represents an OpenMicBroadcast. */
        class OpenMicBroadcast implements IOpenMicBroadcast {

            /**
             * Constructs a new OpenMicBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOpenMicBroadcast);

            /** OpenMicBroadcast bcUid. */
            public bcUid: (number|Long);

            /** OpenMicBroadcast playerId. */
            public playerId: (number|Long);

            /** OpenMicBroadcast open. */
            public open: boolean;

            /**
             * Creates a new OpenMicBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenMicBroadcast instance
             */
            public static create(properties?: common.v1.IOpenMicBroadcast): common.v1.OpenMicBroadcast;

            /**
             * Encodes the specified OpenMicBroadcast message. Does not implicitly {@link common.v1.OpenMicBroadcast.verify|verify} messages.
             * @param message OpenMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOpenMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenMicBroadcast message, length delimited. Does not implicitly {@link common.v1.OpenMicBroadcast.verify|verify} messages.
             * @param message OpenMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOpenMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenMicBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OpenMicBroadcast;

            /**
             * Decodes an OpenMicBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OpenMicBroadcast;

            /**
             * Verifies an OpenMicBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenMicBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OpenMicBroadcast;

            /**
             * Creates a plain object from an OpenMicBroadcast message. Also converts values to other types if specified.
             * @param message OpenMicBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OpenMicBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenMicBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenMicBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AllowMicReq. */
        interface IAllowMicReq {

            /** AllowMicReq playerId */
            playerId?: (number|Long|null);

            /** AllowMicReq allow */
            allow?: (boolean|null);
        }

        /** Represents an AllowMicReq. */
        class AllowMicReq implements IAllowMicReq {

            /**
             * Constructs a new AllowMicReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IAllowMicReq);

            /** AllowMicReq playerId. */
            public playerId: (number|Long);

            /** AllowMicReq allow. */
            public allow: boolean;

            /**
             * Creates a new AllowMicReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllowMicReq instance
             */
            public static create(properties?: common.v1.IAllowMicReq): common.v1.AllowMicReq;

            /**
             * Encodes the specified AllowMicReq message. Does not implicitly {@link common.v1.AllowMicReq.verify|verify} messages.
             * @param message AllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllowMicReq message, length delimited. Does not implicitly {@link common.v1.AllowMicReq.verify|verify} messages.
             * @param message AllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllowMicReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.AllowMicReq;

            /**
             * Decodes an AllowMicReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.AllowMicReq;

            /**
             * Verifies an AllowMicReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllowMicReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.AllowMicReq;

            /**
             * Creates a plain object from an AllowMicReq message. Also converts values to other types if specified.
             * @param message AllowMicReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.AllowMicReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllowMicReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AllowMicReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AllowMicRes. */
        interface IAllowMicRes {

            /** AllowMicRes playerId */
            playerId?: (number|Long|null);

            /** AllowMicRes allow */
            allow?: (boolean|null);
        }

        /** Represents an AllowMicRes. */
        class AllowMicRes implements IAllowMicRes {

            /**
             * Constructs a new AllowMicRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IAllowMicRes);

            /** AllowMicRes playerId. */
            public playerId: (number|Long);

            /** AllowMicRes allow. */
            public allow: boolean;

            /**
             * Creates a new AllowMicRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllowMicRes instance
             */
            public static create(properties?: common.v1.IAllowMicRes): common.v1.AllowMicRes;

            /**
             * Encodes the specified AllowMicRes message. Does not implicitly {@link common.v1.AllowMicRes.verify|verify} messages.
             * @param message AllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllowMicRes message, length delimited. Does not implicitly {@link common.v1.AllowMicRes.verify|verify} messages.
             * @param message AllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllowMicRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.AllowMicRes;

            /**
             * Decodes an AllowMicRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.AllowMicRes;

            /**
             * Verifies an AllowMicRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllowMicRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.AllowMicRes;

            /**
             * Creates a plain object from an AllowMicRes message. Also converts values to other types if specified.
             * @param message AllowMicRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.AllowMicRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllowMicRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AllowMicRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AllowMicBroadcast. */
        interface IAllowMicBroadcast {

            /** AllowMicBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** AllowMicBroadcast playerId */
            playerId?: (number|Long|null);

            /** AllowMicBroadcast allow */
            allow?: (boolean|null);
        }

        /** Represents an AllowMicBroadcast. */
        class AllowMicBroadcast implements IAllowMicBroadcast {

            /**
             * Constructs a new AllowMicBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IAllowMicBroadcast);

            /** AllowMicBroadcast bcUid. */
            public bcUid: (number|Long);

            /** AllowMicBroadcast playerId. */
            public playerId: (number|Long);

            /** AllowMicBroadcast allow. */
            public allow: boolean;

            /**
             * Creates a new AllowMicBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllowMicBroadcast instance
             */
            public static create(properties?: common.v1.IAllowMicBroadcast): common.v1.AllowMicBroadcast;

            /**
             * Encodes the specified AllowMicBroadcast message. Does not implicitly {@link common.v1.AllowMicBroadcast.verify|verify} messages.
             * @param message AllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.AllowMicBroadcast.verify|verify} messages.
             * @param message AllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllowMicBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.AllowMicBroadcast;

            /**
             * Decodes an AllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.AllowMicBroadcast;

            /**
             * Verifies an AllowMicBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllowMicBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.AllowMicBroadcast;

            /**
             * Creates a plain object from an AllowMicBroadcast message. Also converts values to other types if specified.
             * @param message AllowMicBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.AllowMicBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllowMicBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AllowMicBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AgreeAllowMicReq. */
        interface IAgreeAllowMicReq {

            /** AgreeAllowMicReq agree */
            agree?: (boolean|null);
        }

        /** Represents an AgreeAllowMicReq. */
        class AgreeAllowMicReq implements IAgreeAllowMicReq {

            /**
             * Constructs a new AgreeAllowMicReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IAgreeAllowMicReq);

            /** AgreeAllowMicReq agree. */
            public agree: boolean;

            /**
             * Creates a new AgreeAllowMicReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AgreeAllowMicReq instance
             */
            public static create(properties?: common.v1.IAgreeAllowMicReq): common.v1.AgreeAllowMicReq;

            /**
             * Encodes the specified AgreeAllowMicReq message. Does not implicitly {@link common.v1.AgreeAllowMicReq.verify|verify} messages.
             * @param message AgreeAllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IAgreeAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AgreeAllowMicReq message, length delimited. Does not implicitly {@link common.v1.AgreeAllowMicReq.verify|verify} messages.
             * @param message AgreeAllowMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IAgreeAllowMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AgreeAllowMicReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AgreeAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.AgreeAllowMicReq;

            /**
             * Decodes an AgreeAllowMicReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AgreeAllowMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.AgreeAllowMicReq;

            /**
             * Verifies an AgreeAllowMicReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AgreeAllowMicReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AgreeAllowMicReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.AgreeAllowMicReq;

            /**
             * Creates a plain object from an AgreeAllowMicReq message. Also converts values to other types if specified.
             * @param message AgreeAllowMicReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.AgreeAllowMicReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AgreeAllowMicReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AgreeAllowMicReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AgreeAllowMicRes. */
        interface IAgreeAllowMicRes {

            /** AgreeAllowMicRes agree */
            agree?: (boolean|null);
        }

        /** Represents an AgreeAllowMicRes. */
        class AgreeAllowMicRes implements IAgreeAllowMicRes {

            /**
             * Constructs a new AgreeAllowMicRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IAgreeAllowMicRes);

            /** AgreeAllowMicRes agree. */
            public agree: boolean;

            /**
             * Creates a new AgreeAllowMicRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AgreeAllowMicRes instance
             */
            public static create(properties?: common.v1.IAgreeAllowMicRes): common.v1.AgreeAllowMicRes;

            /**
             * Encodes the specified AgreeAllowMicRes message. Does not implicitly {@link common.v1.AgreeAllowMicRes.verify|verify} messages.
             * @param message AgreeAllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IAgreeAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AgreeAllowMicRes message, length delimited. Does not implicitly {@link common.v1.AgreeAllowMicRes.verify|verify} messages.
             * @param message AgreeAllowMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IAgreeAllowMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AgreeAllowMicRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AgreeAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.AgreeAllowMicRes;

            /**
             * Decodes an AgreeAllowMicRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AgreeAllowMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.AgreeAllowMicRes;

            /**
             * Verifies an AgreeAllowMicRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AgreeAllowMicRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AgreeAllowMicRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.AgreeAllowMicRes;

            /**
             * Creates a plain object from an AgreeAllowMicRes message. Also converts values to other types if specified.
             * @param message AgreeAllowMicRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.AgreeAllowMicRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AgreeAllowMicRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AgreeAllowMicRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AgreeAllowMicBroadcast. */
        interface IAgreeAllowMicBroadcast {

            /** AgreeAllowMicBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** AgreeAllowMicBroadcast playerId */
            playerId?: (number|Long|null);

            /** AgreeAllowMicBroadcast agree */
            agree?: (boolean|null);
        }

        /** Represents an AgreeAllowMicBroadcast. */
        class AgreeAllowMicBroadcast implements IAgreeAllowMicBroadcast {

            /**
             * Constructs a new AgreeAllowMicBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IAgreeAllowMicBroadcast);

            /** AgreeAllowMicBroadcast bcUid. */
            public bcUid: (number|Long);

            /** AgreeAllowMicBroadcast playerId. */
            public playerId: (number|Long);

            /** AgreeAllowMicBroadcast agree. */
            public agree: boolean;

            /**
             * Creates a new AgreeAllowMicBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AgreeAllowMicBroadcast instance
             */
            public static create(properties?: common.v1.IAgreeAllowMicBroadcast): common.v1.AgreeAllowMicBroadcast;

            /**
             * Encodes the specified AgreeAllowMicBroadcast message. Does not implicitly {@link common.v1.AgreeAllowMicBroadcast.verify|verify} messages.
             * @param message AgreeAllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IAgreeAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AgreeAllowMicBroadcast message, length delimited. Does not implicitly {@link common.v1.AgreeAllowMicBroadcast.verify|verify} messages.
             * @param message AgreeAllowMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IAgreeAllowMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AgreeAllowMicBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AgreeAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.AgreeAllowMicBroadcast;

            /**
             * Decodes an AgreeAllowMicBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AgreeAllowMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.AgreeAllowMicBroadcast;

            /**
             * Verifies an AgreeAllowMicBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AgreeAllowMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AgreeAllowMicBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.AgreeAllowMicBroadcast;

            /**
             * Creates a plain object from an AgreeAllowMicBroadcast message. Also converts values to other types if specified.
             * @param message AgreeAllowMicBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.AgreeAllowMicBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AgreeAllowMicBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AgreeAllowMicBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApplyAllowMicListReq. */
        interface IApplyAllowMicListReq {
        }

        /** Represents an ApplyAllowMicListReq. */
        class ApplyAllowMicListReq implements IApplyAllowMicListReq {

            /**
             * Constructs a new ApplyAllowMicListReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApplyAllowMicListReq);

            /**
             * Creates a new ApplyAllowMicListReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApplyAllowMicListReq instance
             */
            public static create(properties?: common.v1.IApplyAllowMicListReq): common.v1.ApplyAllowMicListReq;

            /**
             * Encodes the specified ApplyAllowMicListReq message. Does not implicitly {@link common.v1.ApplyAllowMicListReq.verify|verify} messages.
             * @param message ApplyAllowMicListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApplyAllowMicListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApplyAllowMicListReq message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicListReq.verify|verify} messages.
             * @param message ApplyAllowMicListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApplyAllowMicListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApplyAllowMicListReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApplyAllowMicListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApplyAllowMicListReq;

            /**
             * Decodes an ApplyAllowMicListReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApplyAllowMicListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApplyAllowMicListReq;

            /**
             * Verifies an ApplyAllowMicListReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApplyAllowMicListReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApplyAllowMicListReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApplyAllowMicListReq;

            /**
             * Creates a plain object from an ApplyAllowMicListReq message. Also converts values to other types if specified.
             * @param message ApplyAllowMicListReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApplyAllowMicListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApplyAllowMicListReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApplyAllowMicListReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApplyAllowMicListRes. */
        interface IApplyAllowMicListRes {

            /** ApplyAllowMicListRes players */
            players?: (common.v1.IPlayerInfo[]|null);
        }

        /** Represents an ApplyAllowMicListRes. */
        class ApplyAllowMicListRes implements IApplyAllowMicListRes {

            /**
             * Constructs a new ApplyAllowMicListRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IApplyAllowMicListRes);

            /** ApplyAllowMicListRes players. */
            public players: common.v1.IPlayerInfo[];

            /**
             * Creates a new ApplyAllowMicListRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApplyAllowMicListRes instance
             */
            public static create(properties?: common.v1.IApplyAllowMicListRes): common.v1.ApplyAllowMicListRes;

            /**
             * Encodes the specified ApplyAllowMicListRes message. Does not implicitly {@link common.v1.ApplyAllowMicListRes.verify|verify} messages.
             * @param message ApplyAllowMicListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IApplyAllowMicListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApplyAllowMicListRes message, length delimited. Does not implicitly {@link common.v1.ApplyAllowMicListRes.verify|verify} messages.
             * @param message ApplyAllowMicListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IApplyAllowMicListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApplyAllowMicListRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApplyAllowMicListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.ApplyAllowMicListRes;

            /**
             * Decodes an ApplyAllowMicListRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApplyAllowMicListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.ApplyAllowMicListRes;

            /**
             * Verifies an ApplyAllowMicListRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApplyAllowMicListRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApplyAllowMicListRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.ApplyAllowMicListRes;

            /**
             * Creates a plain object from an ApplyAllowMicListRes message. Also converts values to other types if specified.
             * @param message ApplyAllowMicListRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.ApplyAllowMicListRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApplyAllowMicListRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApplyAllowMicListRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerCloseMicReq. */
        interface IOwnerCloseMicReq {

            /** OwnerCloseMicReq playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerCloseMicReq. */
        class OwnerCloseMicReq implements IOwnerCloseMicReq {

            /**
             * Constructs a new OwnerCloseMicReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerCloseMicReq);

            /** OwnerCloseMicReq playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerCloseMicReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerCloseMicReq instance
             */
            public static create(properties?: common.v1.IOwnerCloseMicReq): common.v1.OwnerCloseMicReq;

            /**
             * Encodes the specified OwnerCloseMicReq message. Does not implicitly {@link common.v1.OwnerCloseMicReq.verify|verify} messages.
             * @param message OwnerCloseMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerCloseMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerCloseMicReq message, length delimited. Does not implicitly {@link common.v1.OwnerCloseMicReq.verify|verify} messages.
             * @param message OwnerCloseMicReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerCloseMicReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerCloseMicReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerCloseMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerCloseMicReq;

            /**
             * Decodes an OwnerCloseMicReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerCloseMicReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerCloseMicReq;

            /**
             * Verifies an OwnerCloseMicReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerCloseMicReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerCloseMicReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerCloseMicReq;

            /**
             * Creates a plain object from an OwnerCloseMicReq message. Also converts values to other types if specified.
             * @param message OwnerCloseMicReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerCloseMicReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerCloseMicReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerCloseMicReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerCloseMicRes. */
        interface IOwnerCloseMicRes {

            /** OwnerCloseMicRes playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerCloseMicRes. */
        class OwnerCloseMicRes implements IOwnerCloseMicRes {

            /**
             * Constructs a new OwnerCloseMicRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerCloseMicRes);

            /** OwnerCloseMicRes playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerCloseMicRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerCloseMicRes instance
             */
            public static create(properties?: common.v1.IOwnerCloseMicRes): common.v1.OwnerCloseMicRes;

            /**
             * Encodes the specified OwnerCloseMicRes message. Does not implicitly {@link common.v1.OwnerCloseMicRes.verify|verify} messages.
             * @param message OwnerCloseMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerCloseMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerCloseMicRes message, length delimited. Does not implicitly {@link common.v1.OwnerCloseMicRes.verify|verify} messages.
             * @param message OwnerCloseMicRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerCloseMicRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerCloseMicRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerCloseMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerCloseMicRes;

            /**
             * Decodes an OwnerCloseMicRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerCloseMicRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerCloseMicRes;

            /**
             * Verifies an OwnerCloseMicRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerCloseMicRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerCloseMicRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerCloseMicRes;

            /**
             * Creates a plain object from an OwnerCloseMicRes message. Also converts values to other types if specified.
             * @param message OwnerCloseMicRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerCloseMicRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerCloseMicRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerCloseMicRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerCloseMicBroadcast. */
        interface IOwnerCloseMicBroadcast {

            /** OwnerCloseMicBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** OwnerCloseMicBroadcast playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerCloseMicBroadcast. */
        class OwnerCloseMicBroadcast implements IOwnerCloseMicBroadcast {

            /**
             * Constructs a new OwnerCloseMicBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerCloseMicBroadcast);

            /** OwnerCloseMicBroadcast bcUid. */
            public bcUid: (number|Long);

            /** OwnerCloseMicBroadcast playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerCloseMicBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerCloseMicBroadcast instance
             */
            public static create(properties?: common.v1.IOwnerCloseMicBroadcast): common.v1.OwnerCloseMicBroadcast;

            /**
             * Encodes the specified OwnerCloseMicBroadcast message. Does not implicitly {@link common.v1.OwnerCloseMicBroadcast.verify|verify} messages.
             * @param message OwnerCloseMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerCloseMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerCloseMicBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerCloseMicBroadcast.verify|verify} messages.
             * @param message OwnerCloseMicBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerCloseMicBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerCloseMicBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerCloseMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerCloseMicBroadcast;

            /**
             * Decodes an OwnerCloseMicBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerCloseMicBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerCloseMicBroadcast;

            /**
             * Verifies an OwnerCloseMicBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerCloseMicBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerCloseMicBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerCloseMicBroadcast;

            /**
             * Creates a plain object from an OwnerCloseMicBroadcast message. Also converts values to other types if specified.
             * @param message OwnerCloseMicBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerCloseMicBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerCloseMicBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerCloseMicBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RoomNewOwnerBroadcast. */
        interface IRoomNewOwnerBroadcast {

            /** RoomNewOwnerBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** RoomNewOwnerBroadcast playerId */
            playerId?: (number|Long|null);
        }

        /** Represents a RoomNewOwnerBroadcast. */
        class RoomNewOwnerBroadcast implements IRoomNewOwnerBroadcast {

            /**
             * Constructs a new RoomNewOwnerBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IRoomNewOwnerBroadcast);

            /** RoomNewOwnerBroadcast bcUid. */
            public bcUid: (number|Long);

            /** RoomNewOwnerBroadcast playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new RoomNewOwnerBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoomNewOwnerBroadcast instance
             */
            public static create(properties?: common.v1.IRoomNewOwnerBroadcast): common.v1.RoomNewOwnerBroadcast;

            /**
             * Encodes the specified RoomNewOwnerBroadcast message. Does not implicitly {@link common.v1.RoomNewOwnerBroadcast.verify|verify} messages.
             * @param message RoomNewOwnerBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IRoomNewOwnerBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoomNewOwnerBroadcast message, length delimited. Does not implicitly {@link common.v1.RoomNewOwnerBroadcast.verify|verify} messages.
             * @param message RoomNewOwnerBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IRoomNewOwnerBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoomNewOwnerBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoomNewOwnerBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.RoomNewOwnerBroadcast;

            /**
             * Decodes a RoomNewOwnerBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoomNewOwnerBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.RoomNewOwnerBroadcast;

            /**
             * Verifies a RoomNewOwnerBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoomNewOwnerBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoomNewOwnerBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.RoomNewOwnerBroadcast;

            /**
             * Creates a plain object from a RoomNewOwnerBroadcast message. Also converts values to other types if specified.
             * @param message RoomNewOwnerBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.RoomNewOwnerBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoomNewOwnerBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoomNewOwnerBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerListReq. */
        interface IPlayerListReq {

            /** PlayerListReq listType */
            listType?: (number|null);
        }

        /** Represents a PlayerListReq. */
        class PlayerListReq implements IPlayerListReq {

            /**
             * Constructs a new PlayerListReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerListReq);

            /** PlayerListReq listType. */
            public listType: number;

            /**
             * Creates a new PlayerListReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerListReq instance
             */
            public static create(properties?: common.v1.IPlayerListReq): common.v1.PlayerListReq;

            /**
             * Encodes the specified PlayerListReq message. Does not implicitly {@link common.v1.PlayerListReq.verify|verify} messages.
             * @param message PlayerListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerListReq message, length delimited. Does not implicitly {@link common.v1.PlayerListReq.verify|verify} messages.
             * @param message PlayerListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerListReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerListReq;

            /**
             * Decodes a PlayerListReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerListReq;

            /**
             * Verifies a PlayerListReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerListReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerListReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerListReq;

            /**
             * Creates a plain object from a PlayerListReq message. Also converts values to other types if specified.
             * @param message PlayerListReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerListReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerListReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerListRes. */
        interface IPlayerListRes {

            /** PlayerListRes players */
            players?: (common.v1.IPlayerInfo[]|null);

            /** PlayerListRes listType */
            listType?: (number|null);
        }

        /** Represents a PlayerListRes. */
        class PlayerListRes implements IPlayerListRes {

            /**
             * Constructs a new PlayerListRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IPlayerListRes);

            /** PlayerListRes players. */
            public players: common.v1.IPlayerInfo[];

            /** PlayerListRes listType. */
            public listType: number;

            /**
             * Creates a new PlayerListRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerListRes instance
             */
            public static create(properties?: common.v1.IPlayerListRes): common.v1.PlayerListRes;

            /**
             * Encodes the specified PlayerListRes message. Does not implicitly {@link common.v1.PlayerListRes.verify|verify} messages.
             * @param message PlayerListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IPlayerListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerListRes message, length delimited. Does not implicitly {@link common.v1.PlayerListRes.verify|verify} messages.
             * @param message PlayerListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IPlayerListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerListRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.PlayerListRes;

            /**
             * Decodes a PlayerListRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.PlayerListRes;

            /**
             * Verifies a PlayerListRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerListRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerListRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.PlayerListRes;

            /**
             * Creates a plain object from a PlayerListRes message. Also converts values to other types if specified.
             * @param message PlayerListRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.PlayerListRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerListRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerListRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetRoomModeReq. */
        interface ISetRoomModeReq {

            /** SetRoomModeReq mode */
            mode?: (number|null);
        }

        /** Represents a SetRoomModeReq. */
        class SetRoomModeReq implements ISetRoomModeReq {

            /**
             * Constructs a new SetRoomModeReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ISetRoomModeReq);

            /** SetRoomModeReq mode. */
            public mode: number;

            /**
             * Creates a new SetRoomModeReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetRoomModeReq instance
             */
            public static create(properties?: common.v1.ISetRoomModeReq): common.v1.SetRoomModeReq;

            /**
             * Encodes the specified SetRoomModeReq message. Does not implicitly {@link common.v1.SetRoomModeReq.verify|verify} messages.
             * @param message SetRoomModeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ISetRoomModeReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetRoomModeReq message, length delimited. Does not implicitly {@link common.v1.SetRoomModeReq.verify|verify} messages.
             * @param message SetRoomModeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ISetRoomModeReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetRoomModeReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetRoomModeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.SetRoomModeReq;

            /**
             * Decodes a SetRoomModeReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetRoomModeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.SetRoomModeReq;

            /**
             * Verifies a SetRoomModeReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetRoomModeReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetRoomModeReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.SetRoomModeReq;

            /**
             * Creates a plain object from a SetRoomModeReq message. Also converts values to other types if specified.
             * @param message SetRoomModeReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.SetRoomModeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetRoomModeReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetRoomModeReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetRoomModeRes. */
        interface ISetRoomModeRes {

            /** SetRoomModeRes mode */
            mode?: (number|null);

            /** SetRoomModeRes playersCount */
            playersCount?: (number|null);
        }

        /** Represents a SetRoomModeRes. */
        class SetRoomModeRes implements ISetRoomModeRes {

            /**
             * Constructs a new SetRoomModeRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ISetRoomModeRes);

            /** SetRoomModeRes mode. */
            public mode: number;

            /** SetRoomModeRes playersCount. */
            public playersCount: number;

            /**
             * Creates a new SetRoomModeRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetRoomModeRes instance
             */
            public static create(properties?: common.v1.ISetRoomModeRes): common.v1.SetRoomModeRes;

            /**
             * Encodes the specified SetRoomModeRes message. Does not implicitly {@link common.v1.SetRoomModeRes.verify|verify} messages.
             * @param message SetRoomModeRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ISetRoomModeRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetRoomModeRes message, length delimited. Does not implicitly {@link common.v1.SetRoomModeRes.verify|verify} messages.
             * @param message SetRoomModeRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ISetRoomModeRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetRoomModeRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetRoomModeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.SetRoomModeRes;

            /**
             * Decodes a SetRoomModeRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetRoomModeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.SetRoomModeRes;

            /**
             * Verifies a SetRoomModeRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetRoomModeRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetRoomModeRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.SetRoomModeRes;

            /**
             * Creates a plain object from a SetRoomModeRes message. Also converts values to other types if specified.
             * @param message SetRoomModeRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.SetRoomModeRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetRoomModeRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetRoomModeRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetRoomModeBroadcast. */
        interface ISetRoomModeBroadcast {

            /** SetRoomModeBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** SetRoomModeBroadcast mode */
            mode?: (number|null);

            /** SetRoomModeBroadcast playersCount */
            playersCount?: (number|null);
        }

        /** Represents a SetRoomModeBroadcast. */
        class SetRoomModeBroadcast implements ISetRoomModeBroadcast {

            /**
             * Constructs a new SetRoomModeBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.ISetRoomModeBroadcast);

            /** SetRoomModeBroadcast bcUid. */
            public bcUid: (number|Long);

            /** SetRoomModeBroadcast mode. */
            public mode: number;

            /** SetRoomModeBroadcast playersCount. */
            public playersCount: number;

            /**
             * Creates a new SetRoomModeBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetRoomModeBroadcast instance
             */
            public static create(properties?: common.v1.ISetRoomModeBroadcast): common.v1.SetRoomModeBroadcast;

            /**
             * Encodes the specified SetRoomModeBroadcast message. Does not implicitly {@link common.v1.SetRoomModeBroadcast.verify|verify} messages.
             * @param message SetRoomModeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.ISetRoomModeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetRoomModeBroadcast message, length delimited. Does not implicitly {@link common.v1.SetRoomModeBroadcast.verify|verify} messages.
             * @param message SetRoomModeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.ISetRoomModeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetRoomModeBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetRoomModeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.SetRoomModeBroadcast;

            /**
             * Decodes a SetRoomModeBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetRoomModeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.SetRoomModeBroadcast;

            /**
             * Verifies a SetRoomModeBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetRoomModeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetRoomModeBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.SetRoomModeBroadcast;

            /**
             * Creates a plain object from a SetRoomModeBroadcast message. Also converts values to other types if specified.
             * @param message SetRoomModeBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.SetRoomModeBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetRoomModeBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetRoomModeBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerKickOutOfRoomReq. */
        interface IOwnerKickOutOfRoomReq {

            /** OwnerKickOutOfRoomReq playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerKickOutOfRoomReq. */
        class OwnerKickOutOfRoomReq implements IOwnerKickOutOfRoomReq {

            /**
             * Constructs a new OwnerKickOutOfRoomReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerKickOutOfRoomReq);

            /** OwnerKickOutOfRoomReq playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerKickOutOfRoomReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerKickOutOfRoomReq instance
             */
            public static create(properties?: common.v1.IOwnerKickOutOfRoomReq): common.v1.OwnerKickOutOfRoomReq;

            /**
             * Encodes the specified OwnerKickOutOfRoomReq message. Does not implicitly {@link common.v1.OwnerKickOutOfRoomReq.verify|verify} messages.
             * @param message OwnerKickOutOfRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerKickOutOfRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerKickOutOfRoomReq message, length delimited. Does not implicitly {@link common.v1.OwnerKickOutOfRoomReq.verify|verify} messages.
             * @param message OwnerKickOutOfRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerKickOutOfRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerKickOutOfRoomReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerKickOutOfRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerKickOutOfRoomReq;

            /**
             * Decodes an OwnerKickOutOfRoomReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerKickOutOfRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerKickOutOfRoomReq;

            /**
             * Verifies an OwnerKickOutOfRoomReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerKickOutOfRoomReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerKickOutOfRoomReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerKickOutOfRoomReq;

            /**
             * Creates a plain object from an OwnerKickOutOfRoomReq message. Also converts values to other types if specified.
             * @param message OwnerKickOutOfRoomReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerKickOutOfRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerKickOutOfRoomReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerKickOutOfRoomReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerKickOutOfRoomRes. */
        interface IOwnerKickOutOfRoomRes {

            /** OwnerKickOutOfRoomRes playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerKickOutOfRoomRes. */
        class OwnerKickOutOfRoomRes implements IOwnerKickOutOfRoomRes {

            /**
             * Constructs a new OwnerKickOutOfRoomRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerKickOutOfRoomRes);

            /** OwnerKickOutOfRoomRes playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerKickOutOfRoomRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerKickOutOfRoomRes instance
             */
            public static create(properties?: common.v1.IOwnerKickOutOfRoomRes): common.v1.OwnerKickOutOfRoomRes;

            /**
             * Encodes the specified OwnerKickOutOfRoomRes message. Does not implicitly {@link common.v1.OwnerKickOutOfRoomRes.verify|verify} messages.
             * @param message OwnerKickOutOfRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerKickOutOfRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerKickOutOfRoomRes message, length delimited. Does not implicitly {@link common.v1.OwnerKickOutOfRoomRes.verify|verify} messages.
             * @param message OwnerKickOutOfRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerKickOutOfRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerKickOutOfRoomRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerKickOutOfRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerKickOutOfRoomRes;

            /**
             * Decodes an OwnerKickOutOfRoomRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerKickOutOfRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerKickOutOfRoomRes;

            /**
             * Verifies an OwnerKickOutOfRoomRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerKickOutOfRoomRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerKickOutOfRoomRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerKickOutOfRoomRes;

            /**
             * Creates a plain object from an OwnerKickOutOfRoomRes message. Also converts values to other types if specified.
             * @param message OwnerKickOutOfRoomRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerKickOutOfRoomRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerKickOutOfRoomRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerKickOutOfRoomRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerKickOutOfRoomBroadcast. */
        interface IOwnerKickOutOfRoomBroadcast {

            /** OwnerKickOutOfRoomBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** OwnerKickOutOfRoomBroadcast playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerKickOutOfRoomBroadcast. */
        class OwnerKickOutOfRoomBroadcast implements IOwnerKickOutOfRoomBroadcast {

            /**
             * Constructs a new OwnerKickOutOfRoomBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerKickOutOfRoomBroadcast);

            /** OwnerKickOutOfRoomBroadcast bcUid. */
            public bcUid: (number|Long);

            /** OwnerKickOutOfRoomBroadcast playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerKickOutOfRoomBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerKickOutOfRoomBroadcast instance
             */
            public static create(properties?: common.v1.IOwnerKickOutOfRoomBroadcast): common.v1.OwnerKickOutOfRoomBroadcast;

            /**
             * Encodes the specified OwnerKickOutOfRoomBroadcast message. Does not implicitly {@link common.v1.OwnerKickOutOfRoomBroadcast.verify|verify} messages.
             * @param message OwnerKickOutOfRoomBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerKickOutOfRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerKickOutOfRoomBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerKickOutOfRoomBroadcast.verify|verify} messages.
             * @param message OwnerKickOutOfRoomBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerKickOutOfRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerKickOutOfRoomBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerKickOutOfRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerKickOutOfRoomBroadcast;

            /**
             * Decodes an OwnerKickOutOfRoomBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerKickOutOfRoomBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerKickOutOfRoomBroadcast;

            /**
             * Verifies an OwnerKickOutOfRoomBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerKickOutOfRoomBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerKickOutOfRoomBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerKickOutOfRoomBroadcast;

            /**
             * Creates a plain object from an OwnerKickOutOfRoomBroadcast message. Also converts values to other types if specified.
             * @param message OwnerKickOutOfRoomBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerKickOutOfRoomBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerKickOutOfRoomBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerKickOutOfRoomBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerKickOffSeatReq. */
        interface IOwnerKickOffSeatReq {

            /** OwnerKickOffSeatReq playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerKickOffSeatReq. */
        class OwnerKickOffSeatReq implements IOwnerKickOffSeatReq {

            /**
             * Constructs a new OwnerKickOffSeatReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerKickOffSeatReq);

            /** OwnerKickOffSeatReq playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerKickOffSeatReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerKickOffSeatReq instance
             */
            public static create(properties?: common.v1.IOwnerKickOffSeatReq): common.v1.OwnerKickOffSeatReq;

            /**
             * Encodes the specified OwnerKickOffSeatReq message. Does not implicitly {@link common.v1.OwnerKickOffSeatReq.verify|verify} messages.
             * @param message OwnerKickOffSeatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerKickOffSeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerKickOffSeatReq message, length delimited. Does not implicitly {@link common.v1.OwnerKickOffSeatReq.verify|verify} messages.
             * @param message OwnerKickOffSeatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerKickOffSeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerKickOffSeatReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerKickOffSeatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerKickOffSeatReq;

            /**
             * Decodes an OwnerKickOffSeatReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerKickOffSeatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerKickOffSeatReq;

            /**
             * Verifies an OwnerKickOffSeatReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerKickOffSeatReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerKickOffSeatReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerKickOffSeatReq;

            /**
             * Creates a plain object from an OwnerKickOffSeatReq message. Also converts values to other types if specified.
             * @param message OwnerKickOffSeatReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerKickOffSeatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerKickOffSeatReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerKickOffSeatReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerKickOffSeatRes. */
        interface IOwnerKickOffSeatRes {

            /** OwnerKickOffSeatRes playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerKickOffSeatRes. */
        class OwnerKickOffSeatRes implements IOwnerKickOffSeatRes {

            /**
             * Constructs a new OwnerKickOffSeatRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerKickOffSeatRes);

            /** OwnerKickOffSeatRes playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerKickOffSeatRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerKickOffSeatRes instance
             */
            public static create(properties?: common.v1.IOwnerKickOffSeatRes): common.v1.OwnerKickOffSeatRes;

            /**
             * Encodes the specified OwnerKickOffSeatRes message. Does not implicitly {@link common.v1.OwnerKickOffSeatRes.verify|verify} messages.
             * @param message OwnerKickOffSeatRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerKickOffSeatRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerKickOffSeatRes message, length delimited. Does not implicitly {@link common.v1.OwnerKickOffSeatRes.verify|verify} messages.
             * @param message OwnerKickOffSeatRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerKickOffSeatRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerKickOffSeatRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerKickOffSeatRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerKickOffSeatRes;

            /**
             * Decodes an OwnerKickOffSeatRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerKickOffSeatRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerKickOffSeatRes;

            /**
             * Verifies an OwnerKickOffSeatRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerKickOffSeatRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerKickOffSeatRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerKickOffSeatRes;

            /**
             * Creates a plain object from an OwnerKickOffSeatRes message. Also converts values to other types if specified.
             * @param message OwnerKickOffSeatRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerKickOffSeatRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerKickOffSeatRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerKickOffSeatRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerKickOffSeatBroadcast. */
        interface IOwnerKickOffSeatBroadcast {

            /** OwnerKickOffSeatBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** OwnerKickOffSeatBroadcast playerId */
            playerId?: (number|Long|null);
        }

        /** Represents an OwnerKickOffSeatBroadcast. */
        class OwnerKickOffSeatBroadcast implements IOwnerKickOffSeatBroadcast {

            /**
             * Constructs a new OwnerKickOffSeatBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerKickOffSeatBroadcast);

            /** OwnerKickOffSeatBroadcast bcUid. */
            public bcUid: (number|Long);

            /** OwnerKickOffSeatBroadcast playerId. */
            public playerId: (number|Long);

            /**
             * Creates a new OwnerKickOffSeatBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerKickOffSeatBroadcast instance
             */
            public static create(properties?: common.v1.IOwnerKickOffSeatBroadcast): common.v1.OwnerKickOffSeatBroadcast;

            /**
             * Encodes the specified OwnerKickOffSeatBroadcast message. Does not implicitly {@link common.v1.OwnerKickOffSeatBroadcast.verify|verify} messages.
             * @param message OwnerKickOffSeatBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerKickOffSeatBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerKickOffSeatBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerKickOffSeatBroadcast.verify|verify} messages.
             * @param message OwnerKickOffSeatBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerKickOffSeatBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerKickOffSeatBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerKickOffSeatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerKickOffSeatBroadcast;

            /**
             * Decodes an OwnerKickOffSeatBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerKickOffSeatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerKickOffSeatBroadcast;

            /**
             * Verifies an OwnerKickOffSeatBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerKickOffSeatBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerKickOffSeatBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerKickOffSeatBroadcast;

            /**
             * Creates a plain object from an OwnerKickOffSeatBroadcast message. Also converts values to other types if specified.
             * @param message OwnerKickOffSeatBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerKickOffSeatBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerKickOffSeatBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerKickOffSeatBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerChangeScoreReq. */
        interface IOwnerChangeScoreReq {

            /** OwnerChangeScoreReq newScore */
            newScore?: (number|null);
        }

        /** Represents an OwnerChangeScoreReq. */
        class OwnerChangeScoreReq implements IOwnerChangeScoreReq {

            /**
             * Constructs a new OwnerChangeScoreReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerChangeScoreReq);

            /** OwnerChangeScoreReq newScore. */
            public newScore: number;

            /**
             * Creates a new OwnerChangeScoreReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerChangeScoreReq instance
             */
            public static create(properties?: common.v1.IOwnerChangeScoreReq): common.v1.OwnerChangeScoreReq;

            /**
             * Encodes the specified OwnerChangeScoreReq message. Does not implicitly {@link common.v1.OwnerChangeScoreReq.verify|verify} messages.
             * @param message OwnerChangeScoreReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerChangeScoreReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerChangeScoreReq message, length delimited. Does not implicitly {@link common.v1.OwnerChangeScoreReq.verify|verify} messages.
             * @param message OwnerChangeScoreReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerChangeScoreReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerChangeScoreReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerChangeScoreReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerChangeScoreReq;

            /**
             * Decodes an OwnerChangeScoreReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerChangeScoreReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerChangeScoreReq;

            /**
             * Verifies an OwnerChangeScoreReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerChangeScoreReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerChangeScoreReq
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerChangeScoreReq;

            /**
             * Creates a plain object from an OwnerChangeScoreReq message. Also converts values to other types if specified.
             * @param message OwnerChangeScoreReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerChangeScoreReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerChangeScoreReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerChangeScoreReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerChangeScoreRes. */
        interface IOwnerChangeScoreRes {

            /** OwnerChangeScoreRes newScore */
            newScore?: (number|null);
        }

        /** Represents an OwnerChangeScoreRes. */
        class OwnerChangeScoreRes implements IOwnerChangeScoreRes {

            /**
             * Constructs a new OwnerChangeScoreRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerChangeScoreRes);

            /** OwnerChangeScoreRes newScore. */
            public newScore: number;

            /**
             * Creates a new OwnerChangeScoreRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerChangeScoreRes instance
             */
            public static create(properties?: common.v1.IOwnerChangeScoreRes): common.v1.OwnerChangeScoreRes;

            /**
             * Encodes the specified OwnerChangeScoreRes message. Does not implicitly {@link common.v1.OwnerChangeScoreRes.verify|verify} messages.
             * @param message OwnerChangeScoreRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerChangeScoreRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerChangeScoreRes message, length delimited. Does not implicitly {@link common.v1.OwnerChangeScoreRes.verify|verify} messages.
             * @param message OwnerChangeScoreRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerChangeScoreRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerChangeScoreRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerChangeScoreRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerChangeScoreRes;

            /**
             * Decodes an OwnerChangeScoreRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerChangeScoreRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerChangeScoreRes;

            /**
             * Verifies an OwnerChangeScoreRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerChangeScoreRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerChangeScoreRes
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerChangeScoreRes;

            /**
             * Creates a plain object from an OwnerChangeScoreRes message. Also converts values to other types if specified.
             * @param message OwnerChangeScoreRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerChangeScoreRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerChangeScoreRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerChangeScoreRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerChangeScoreBroadcast. */
        interface IOwnerChangeScoreBroadcast {

            /** OwnerChangeScoreBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** OwnerChangeScoreBroadcast newScore */
            newScore?: (number|null);
        }

        /** Represents an OwnerChangeScoreBroadcast. */
        class OwnerChangeScoreBroadcast implements IOwnerChangeScoreBroadcast {

            /**
             * Constructs a new OwnerChangeScoreBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.v1.IOwnerChangeScoreBroadcast);

            /** OwnerChangeScoreBroadcast bcUid. */
            public bcUid: (number|Long);

            /** OwnerChangeScoreBroadcast newScore. */
            public newScore: number;

            /**
             * Creates a new OwnerChangeScoreBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerChangeScoreBroadcast instance
             */
            public static create(properties?: common.v1.IOwnerChangeScoreBroadcast): common.v1.OwnerChangeScoreBroadcast;

            /**
             * Encodes the specified OwnerChangeScoreBroadcast message. Does not implicitly {@link common.v1.OwnerChangeScoreBroadcast.verify|verify} messages.
             * @param message OwnerChangeScoreBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.v1.IOwnerChangeScoreBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerChangeScoreBroadcast message, length delimited. Does not implicitly {@link common.v1.OwnerChangeScoreBroadcast.verify|verify} messages.
             * @param message OwnerChangeScoreBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.v1.IOwnerChangeScoreBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerChangeScoreBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerChangeScoreBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.v1.OwnerChangeScoreBroadcast;

            /**
             * Decodes an OwnerChangeScoreBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerChangeScoreBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.v1.OwnerChangeScoreBroadcast;

            /**
             * Verifies an OwnerChangeScoreBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerChangeScoreBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerChangeScoreBroadcast
             */
            public static fromObject(object: { [k: string]: any }): common.v1.OwnerChangeScoreBroadcast;

            /**
             * Creates a plain object from an OwnerChangeScoreBroadcast message. Also converts values to other types if specified.
             * @param message OwnerChangeScoreBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: common.v1.OwnerChangeScoreBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerChangeScoreBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerChangeScoreBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace mines. */
export namespace mines {

    /** Namespace v1. */
    namespace v1 {

        /** CellType enum. */
        enum CellType {
            CELL_TYPE_UNOPENED = 0,
            CELL_TYPE_COIN = 1,
            CELL_TYPE_HURT = 2,
            CELL_TYPE_SHIELD = 3,
            CELL_TYPE_ATTACK = 4,
            CELL_TYPE_RADAR = 5,
            CELL_TYPE_RADAR_MARK = 6
        }

        /** Properties of a MinesGameConfig. */
        interface IMinesGameConfig {

            /** MinesGameConfig scores */
            scores?: (number[]|null);
        }

        /** Represents a MinesGameConfig. */
        class MinesGameConfig implements IMinesGameConfig {

            /**
             * Constructs a new MinesGameConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IMinesGameConfig);

            /** MinesGameConfig scores. */
            public scores: number[];

            /**
             * Creates a new MinesGameConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MinesGameConfig instance
             */
            public static create(properties?: mines.v1.IMinesGameConfig): mines.v1.MinesGameConfig;

            /**
             * Encodes the specified MinesGameConfig message. Does not implicitly {@link mines.v1.MinesGameConfig.verify|verify} messages.
             * @param message MinesGameConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IMinesGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MinesGameConfig message, length delimited. Does not implicitly {@link mines.v1.MinesGameConfig.verify|verify} messages.
             * @param message MinesGameConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IMinesGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MinesGameConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MinesGameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.MinesGameConfig;

            /**
             * Decodes a MinesGameConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MinesGameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.MinesGameConfig;

            /**
             * Verifies a MinesGameConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MinesGameConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MinesGameConfig
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.MinesGameConfig;

            /**
             * Creates a plain object from a MinesGameConfig message. Also converts values to other types if specified.
             * @param message MinesGameConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.MinesGameConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MinesGameConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MinesGameConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MinesConfig. */
        interface IMinesConfig {

            /** MinesConfig operationSeconds */
            operationSeconds?: (number|null);

            /** MinesConfig resetGameSeconds */
            resetGameSeconds?: (number|null);

            /** MinesConfig coinWinMinAmount */
            coinWinMinAmount?: (number|null);

            /** MinesConfig cellAmount */
            cellAmount?: (number|null);

            /** MinesConfig hurtAmount */
            hurtAmount?: (number|null);

            /** MinesConfig betAmount */
            betAmount?: (number|null);

            /** MinesConfig scores */
            scores?: (number[]|null);
        }

        /** Represents a MinesConfig. */
        class MinesConfig implements IMinesConfig {

            /**
             * Constructs a new MinesConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IMinesConfig);

            /** MinesConfig operationSeconds. */
            public operationSeconds: number;

            /** MinesConfig resetGameSeconds. */
            public resetGameSeconds: number;

            /** MinesConfig coinWinMinAmount. */
            public coinWinMinAmount: number;

            /** MinesConfig cellAmount. */
            public cellAmount: number;

            /** MinesConfig hurtAmount. */
            public hurtAmount: number;

            /** MinesConfig betAmount. */
            public betAmount: number;

            /** MinesConfig scores. */
            public scores: number[];

            /**
             * Creates a new MinesConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MinesConfig instance
             */
            public static create(properties?: mines.v1.IMinesConfig): mines.v1.MinesConfig;

            /**
             * Encodes the specified MinesConfig message. Does not implicitly {@link mines.v1.MinesConfig.verify|verify} messages.
             * @param message MinesConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IMinesConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MinesConfig message, length delimited. Does not implicitly {@link mines.v1.MinesConfig.verify|verify} messages.
             * @param message MinesConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IMinesConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MinesConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MinesConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.MinesConfig;

            /**
             * Decodes a MinesConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MinesConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.MinesConfig;

            /**
             * Verifies a MinesConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MinesConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MinesConfig
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.MinesConfig;

            /**
             * Creates a plain object from a MinesConfig message. Also converts values to other types if specified.
             * @param message MinesConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.MinesConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MinesConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MinesConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RoomInfo. */
        interface IRoomInfo {

            /** RoomInfo roomId */
            roomId?: (number|Long|null);

            /** RoomInfo roomName */
            roomName?: (string|null);

            /** RoomInfo roomStatus */
            roomStatus?: (number|null);

            /** RoomInfo roomMode */
            roomMode?: (number|null);
        }

        /** Represents a RoomInfo. */
        class RoomInfo implements IRoomInfo {

            /**
             * Constructs a new RoomInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IRoomInfo);

            /** RoomInfo roomId. */
            public roomId: (number|Long);

            /** RoomInfo roomName. */
            public roomName: string;

            /** RoomInfo roomStatus. */
            public roomStatus: number;

            /** RoomInfo roomMode. */
            public roomMode: number;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoomInfo instance
             */
            public static create(properties?: mines.v1.IRoomInfo): mines.v1.RoomInfo;

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link mines.v1.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link mines.v1.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.RoomInfo;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.RoomInfo;

            /**
             * Verifies a RoomInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoomInfo
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.RoomInfo;

            /**
             * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
             * @param message RoomInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoomInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoomInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameInfo. */
        interface IGameInfo {

            /** GameInfo config */
            config?: (mines.v1.IMinesConfig|null);

            /** GameInfo status */
            status?: (number|null);

            /** GameInfo openedCells */
            openedCells?: ({ [k: string]: mines.v1.IOpenedCellList }|null);

            /** GameInfo deadUserId */
            deadUserId?: (number|Long|null);

            /** GameInfo winnerId */
            winnerId?: (number|Long|null);

            /** GameInfo winCoin */
            winCoin?: (number|Long|null);
        }

        /** Represents a GameInfo. */
        class GameInfo implements IGameInfo {

            /**
             * Constructs a new GameInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IGameInfo);

            /** GameInfo config. */
            public config?: (mines.v1.IMinesConfig|null);

            /** GameInfo status. */
            public status: number;

            /** GameInfo openedCells. */
            public openedCells: { [k: string]: mines.v1.IOpenedCellList };

            /** GameInfo deadUserId. */
            public deadUserId: (number|Long);

            /** GameInfo winnerId. */
            public winnerId: (number|Long);

            /** GameInfo winCoin. */
            public winCoin: (number|Long);

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameInfo instance
             */
            public static create(properties?: mines.v1.IGameInfo): mines.v1.GameInfo;

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link mines.v1.GameInfo.verify|verify} messages.
             * @param message GameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link mines.v1.GameInfo.verify|verify} messages.
             * @param message GameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.GameInfo;

            /**
             * Decodes a GameInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.GameInfo;

            /**
             * Verifies a GameInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameInfo
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.GameInfo;

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @param message GameInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MinesPlayer. */
        interface IMinesPlayer {

            /** MinesPlayer playerInfo */
            playerInfo?: (common.v1.IPlayerInfo|null);

            /** MinesPlayer currentEndTime */
            currentEndTime?: (number|Long|null);

            /** MinesPlayer coinCount */
            coinCount?: (number|null);

            /** MinesPlayer hurtCount */
            hurtCount?: (number|null);

            /** MinesPlayer shieldCount */
            shieldCount?: (number|null);

            /** MinesPlayer beAttackedCount */
            beAttackedCount?: (number|null);

            /** MinesPlayer betRates */
            betRates?: (number[]|null);

            /** MinesPlayer playerStatus */
            playerStatus?: (number|null);
        }

        /** Represents a MinesPlayer. */
        class MinesPlayer implements IMinesPlayer {

            /**
             * Constructs a new MinesPlayer.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IMinesPlayer);

            /** MinesPlayer playerInfo. */
            public playerInfo?: (common.v1.IPlayerInfo|null);

            /** MinesPlayer currentEndTime. */
            public currentEndTime: (number|Long);

            /** MinesPlayer coinCount. */
            public coinCount: number;

            /** MinesPlayer hurtCount. */
            public hurtCount: number;

            /** MinesPlayer shieldCount. */
            public shieldCount: number;

            /** MinesPlayer beAttackedCount. */
            public beAttackedCount: number;

            /** MinesPlayer betRates. */
            public betRates: number[];

            /** MinesPlayer playerStatus. */
            public playerStatus: number;

            /**
             * Creates a new MinesPlayer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MinesPlayer instance
             */
            public static create(properties?: mines.v1.IMinesPlayer): mines.v1.MinesPlayer;

            /**
             * Encodes the specified MinesPlayer message. Does not implicitly {@link mines.v1.MinesPlayer.verify|verify} messages.
             * @param message MinesPlayer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IMinesPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MinesPlayer message, length delimited. Does not implicitly {@link mines.v1.MinesPlayer.verify|verify} messages.
             * @param message MinesPlayer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IMinesPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MinesPlayer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MinesPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.MinesPlayer;

            /**
             * Decodes a MinesPlayer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MinesPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.MinesPlayer;

            /**
             * Verifies a MinesPlayer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MinesPlayer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MinesPlayer
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.MinesPlayer;

            /**
             * Creates a plain object from a MinesPlayer message. Also converts values to other types if specified.
             * @param message MinesPlayer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.MinesPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MinesPlayer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MinesPlayer
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenedCellList. */
        interface IOpenedCellList {

            /** OpenedCellList cells */
            cells?: ({ [k: string]: mines.v1.ICell }|null);
        }

        /** Represents an OpenedCellList. */
        class OpenedCellList implements IOpenedCellList {

            /**
             * Constructs a new OpenedCellList.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IOpenedCellList);

            /** OpenedCellList cells. */
            public cells: { [k: string]: mines.v1.ICell };

            /**
             * Creates a new OpenedCellList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenedCellList instance
             */
            public static create(properties?: mines.v1.IOpenedCellList): mines.v1.OpenedCellList;

            /**
             * Encodes the specified OpenedCellList message. Does not implicitly {@link mines.v1.OpenedCellList.verify|verify} messages.
             * @param message OpenedCellList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IOpenedCellList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenedCellList message, length delimited. Does not implicitly {@link mines.v1.OpenedCellList.verify|verify} messages.
             * @param message OpenedCellList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IOpenedCellList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenedCellList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenedCellList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.OpenedCellList;

            /**
             * Decodes an OpenedCellList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenedCellList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.OpenedCellList;

            /**
             * Verifies an OpenedCellList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenedCellList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenedCellList
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.OpenedCellList;

            /**
             * Creates a plain object from an OpenedCellList message. Also converts values to other types if specified.
             * @param message OpenedCellList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.OpenedCellList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenedCellList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenedCellList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Cell. */
        interface ICell {

            /** Cell cellId */
            cellId?: (number|null);

            /** Cell cellType */
            cellType?: (mines.v1.CellType|null);

            /** Cell afterDead */
            afterDead?: (boolean|null);

            /** Cell rand */
            rand?: (number|Long|null);

            /** Cell weights */
            weights?: ({ [k: string]: (number|Long) }|null);
        }

        /** Represents a Cell. */
        class Cell implements ICell {

            /**
             * Constructs a new Cell.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.ICell);

            /** Cell cellId. */
            public cellId: number;

            /** Cell cellType. */
            public cellType: mines.v1.CellType;

            /** Cell afterDead. */
            public afterDead: boolean;

            /** Cell rand. */
            public rand: (number|Long);

            /** Cell weights. */
            public weights: { [k: string]: (number|Long) };

            /**
             * Creates a new Cell instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Cell instance
             */
            public static create(properties?: mines.v1.ICell): mines.v1.Cell;

            /**
             * Encodes the specified Cell message. Does not implicitly {@link mines.v1.Cell.verify|verify} messages.
             * @param message Cell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.ICell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Cell message, length delimited. Does not implicitly {@link mines.v1.Cell.verify|verify} messages.
             * @param message Cell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.ICell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Cell message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Cell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.Cell;

            /**
             * Decodes a Cell message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Cell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.Cell;

            /**
             * Verifies a Cell message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Cell message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Cell
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.Cell;

            /**
             * Creates a plain object from a Cell message. Also converts values to other types if specified.
             * @param message Cell
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.Cell, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Cell to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Cell
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinRoomReq. */
        interface IJoinRoomReq {

            /** JoinRoomReq roomId */
            roomId?: (number|Long|null);
        }

        /** Represents a JoinRoomReq. */
        class JoinRoomReq implements IJoinRoomReq {

            /**
             * Constructs a new JoinRoomReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IJoinRoomReq);

            /** JoinRoomReq roomId. */
            public roomId: (number|Long);

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinRoomReq instance
             */
            public static create(properties?: mines.v1.IJoinRoomReq): mines.v1.JoinRoomReq;

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link mines.v1.JoinRoomReq.verify|verify} messages.
             * @param message JoinRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link mines.v1.JoinRoomReq.verify|verify} messages.
             * @param message JoinRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.JoinRoomReq;

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.JoinRoomReq;

            /**
             * Verifies a JoinRoomReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinRoomReq
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.JoinRoomReq;

            /**
             * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
             * @param message JoinRoomReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.JoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinRoomReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinRoomReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinRoomRes. */
        interface IJoinRoomRes {

            /** JoinRoomRes roomInfo */
            roomInfo?: (mines.v1.IRoomInfo|null);

            /** JoinRoomRes gameInfo */
            gameInfo?: (mines.v1.IGameInfo|null);

            /** JoinRoomRes self */
            self?: (mines.v1.IMinesPlayer|null);

            /** JoinRoomRes watchers */
            watchers?: (common.v1.IPlayerInfo[]|null);

            /** JoinRoomRes playersCount */
            playersCount?: (number|null);

            /** JoinRoomRes players */
            players?: (mines.v1.IMinesPlayer[]|null);

            /** JoinRoomRes speakers */
            speakers?: (common.v1.IPlayerInfo[]|null);

            /** JoinRoomRes playerSettings */
            playerSettings?: (common.v1.IPlayerSettings|null);
        }

        /** Represents a JoinRoomRes. */
        class JoinRoomRes implements IJoinRoomRes {

            /**
             * Constructs a new JoinRoomRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IJoinRoomRes);

            /** JoinRoomRes roomInfo. */
            public roomInfo?: (mines.v1.IRoomInfo|null);

            /** JoinRoomRes gameInfo. */
            public gameInfo?: (mines.v1.IGameInfo|null);

            /** JoinRoomRes self. */
            public self?: (mines.v1.IMinesPlayer|null);

            /** JoinRoomRes watchers. */
            public watchers: common.v1.IPlayerInfo[];

            /** JoinRoomRes playersCount. */
            public playersCount: number;

            /** JoinRoomRes players. */
            public players: mines.v1.IMinesPlayer[];

            /** JoinRoomRes speakers. */
            public speakers: common.v1.IPlayerInfo[];

            /** JoinRoomRes playerSettings. */
            public playerSettings?: (common.v1.IPlayerSettings|null);

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinRoomRes instance
             */
            public static create(properties?: mines.v1.IJoinRoomRes): mines.v1.JoinRoomRes;

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link mines.v1.JoinRoomRes.verify|verify} messages.
             * @param message JoinRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IJoinRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link mines.v1.JoinRoomRes.verify|verify} messages.
             * @param message JoinRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IJoinRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.JoinRoomRes;

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.JoinRoomRes;

            /**
             * Verifies a JoinRoomRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinRoomRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinRoomRes
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.JoinRoomRes;

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @param message JoinRoomRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.JoinRoomRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinRoomRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinRoomRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenCellReq. */
        interface IOpenCellReq {

            /** OpenCellReq cellId */
            cellId?: (number|null);
        }

        /** Represents an OpenCellReq. */
        class OpenCellReq implements IOpenCellReq {

            /**
             * Constructs a new OpenCellReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IOpenCellReq);

            /** OpenCellReq cellId. */
            public cellId: number;

            /**
             * Creates a new OpenCellReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenCellReq instance
             */
            public static create(properties?: mines.v1.IOpenCellReq): mines.v1.OpenCellReq;

            /**
             * Encodes the specified OpenCellReq message. Does not implicitly {@link mines.v1.OpenCellReq.verify|verify} messages.
             * @param message OpenCellReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IOpenCellReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenCellReq message, length delimited. Does not implicitly {@link mines.v1.OpenCellReq.verify|verify} messages.
             * @param message OpenCellReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IOpenCellReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenCellReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenCellReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.OpenCellReq;

            /**
             * Decodes an OpenCellReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenCellReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.OpenCellReq;

            /**
             * Verifies an OpenCellReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenCellReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenCellReq
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.OpenCellReq;

            /**
             * Creates a plain object from an OpenCellReq message. Also converts values to other types if specified.
             * @param message OpenCellReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.OpenCellReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenCellReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenCellReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenCellRes. */
        interface IOpenCellRes {

            /** OpenCellRes cell */
            cell?: (mines.v1.ICell|null);

            /** OpenCellRes radarSignCell */
            radarSignCell?: (mines.v1.ICell|null);

            /** OpenCellRes recvId */
            recvId?: (number|Long|null);
        }

        /** Represents an OpenCellRes. */
        class OpenCellRes implements IOpenCellRes {

            /**
             * Constructs a new OpenCellRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IOpenCellRes);

            /** OpenCellRes cell. */
            public cell?: (mines.v1.ICell|null);

            /** OpenCellRes radarSignCell. */
            public radarSignCell?: (mines.v1.ICell|null);

            /** OpenCellRes recvId. */
            public recvId: (number|Long);

            /**
             * Creates a new OpenCellRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenCellRes instance
             */
            public static create(properties?: mines.v1.IOpenCellRes): mines.v1.OpenCellRes;

            /**
             * Encodes the specified OpenCellRes message. Does not implicitly {@link mines.v1.OpenCellRes.verify|verify} messages.
             * @param message OpenCellRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IOpenCellRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenCellRes message, length delimited. Does not implicitly {@link mines.v1.OpenCellRes.verify|verify} messages.
             * @param message OpenCellRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IOpenCellRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenCellRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenCellRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.OpenCellRes;

            /**
             * Decodes an OpenCellRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenCellRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.OpenCellRes;

            /**
             * Verifies an OpenCellRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenCellRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenCellRes
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.OpenCellRes;

            /**
             * Creates a plain object from an OpenCellRes message. Also converts values to other types if specified.
             * @param message OpenCellRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.OpenCellRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenCellRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenCellRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenCellBroadcast. */
        interface IOpenCellBroadcast {

            /** OpenCellBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** OpenCellBroadcast userId */
            userId?: (number|Long|null);

            /** OpenCellBroadcast cell */
            cell?: (mines.v1.ICell|null);

            /** OpenCellBroadcast radarSignCell */
            radarSignCell?: (mines.v1.ICell|null);
        }

        /** Represents an OpenCellBroadcast. */
        class OpenCellBroadcast implements IOpenCellBroadcast {

            /**
             * Constructs a new OpenCellBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IOpenCellBroadcast);

            /** OpenCellBroadcast bcUid. */
            public bcUid: (number|Long);

            /** OpenCellBroadcast userId. */
            public userId: (number|Long);

            /** OpenCellBroadcast cell. */
            public cell?: (mines.v1.ICell|null);

            /** OpenCellBroadcast radarSignCell. */
            public radarSignCell?: (mines.v1.ICell|null);

            /**
             * Creates a new OpenCellBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenCellBroadcast instance
             */
            public static create(properties?: mines.v1.IOpenCellBroadcast): mines.v1.OpenCellBroadcast;

            /**
             * Encodes the specified OpenCellBroadcast message. Does not implicitly {@link mines.v1.OpenCellBroadcast.verify|verify} messages.
             * @param message OpenCellBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IOpenCellBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenCellBroadcast message, length delimited. Does not implicitly {@link mines.v1.OpenCellBroadcast.verify|verify} messages.
             * @param message OpenCellBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IOpenCellBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenCellBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenCellBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.OpenCellBroadcast;

            /**
             * Decodes an OpenCellBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenCellBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.OpenCellBroadcast;

            /**
             * Verifies an OpenCellBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenCellBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenCellBroadcast
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.OpenCellBroadcast;

            /**
             * Creates a plain object from an OpenCellBroadcast message. Also converts values to other types if specified.
             * @param message OpenCellBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.OpenCellBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenCellBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenCellBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NewBetRatesBroadcast. */
        interface INewBetRatesBroadcast {

            /** NewBetRatesBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** NewBetRatesBroadcast userId */
            userId?: (number|Long|null);

            /** NewBetRatesBroadcast newBetRates */
            newBetRates?: (number[]|null);
        }

        /** Represents a NewBetRatesBroadcast. */
        class NewBetRatesBroadcast implements INewBetRatesBroadcast {

            /**
             * Constructs a new NewBetRatesBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.INewBetRatesBroadcast);

            /** NewBetRatesBroadcast bcUid. */
            public bcUid: (number|Long);

            /** NewBetRatesBroadcast userId. */
            public userId: (number|Long);

            /** NewBetRatesBroadcast newBetRates. */
            public newBetRates: number[];

            /**
             * Creates a new NewBetRatesBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewBetRatesBroadcast instance
             */
            public static create(properties?: mines.v1.INewBetRatesBroadcast): mines.v1.NewBetRatesBroadcast;

            /**
             * Encodes the specified NewBetRatesBroadcast message. Does not implicitly {@link mines.v1.NewBetRatesBroadcast.verify|verify} messages.
             * @param message NewBetRatesBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.INewBetRatesBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewBetRatesBroadcast message, length delimited. Does not implicitly {@link mines.v1.NewBetRatesBroadcast.verify|verify} messages.
             * @param message NewBetRatesBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.INewBetRatesBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewBetRatesBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NewBetRatesBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.NewBetRatesBroadcast;

            /**
             * Decodes a NewBetRatesBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NewBetRatesBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.NewBetRatesBroadcast;

            /**
             * Verifies a NewBetRatesBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewBetRatesBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewBetRatesBroadcast
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.NewBetRatesBroadcast;

            /**
             * Creates a plain object from a NewBetRatesBroadcast message. Also converts values to other types if specified.
             * @param message NewBetRatesBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.NewBetRatesBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewBetRatesBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NewBetRatesBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BagInReq. */
        interface IBagInReq {
        }

        /** Represents a BagInReq. */
        class BagInReq implements IBagInReq {

            /**
             * Constructs a new BagInReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IBagInReq);

            /**
             * Creates a new BagInReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BagInReq instance
             */
            public static create(properties?: mines.v1.IBagInReq): mines.v1.BagInReq;

            /**
             * Encodes the specified BagInReq message. Does not implicitly {@link mines.v1.BagInReq.verify|verify} messages.
             * @param message BagInReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IBagInReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BagInReq message, length delimited. Does not implicitly {@link mines.v1.BagInReq.verify|verify} messages.
             * @param message BagInReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IBagInReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BagInReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BagInReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.BagInReq;

            /**
             * Decodes a BagInReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BagInReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.BagInReq;

            /**
             * Verifies a BagInReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BagInReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BagInReq
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.BagInReq;

            /**
             * Creates a plain object from a BagInReq message. Also converts values to other types if specified.
             * @param message BagInReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.BagInReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BagInReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BagInReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BagInRes. */
        interface IBagInRes {
        }

        /** Represents a BagInRes. */
        class BagInRes implements IBagInRes {

            /**
             * Constructs a new BagInRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IBagInRes);

            /**
             * Creates a new BagInRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BagInRes instance
             */
            public static create(properties?: mines.v1.IBagInRes): mines.v1.BagInRes;

            /**
             * Encodes the specified BagInRes message. Does not implicitly {@link mines.v1.BagInRes.verify|verify} messages.
             * @param message BagInRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IBagInRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BagInRes message, length delimited. Does not implicitly {@link mines.v1.BagInRes.verify|verify} messages.
             * @param message BagInRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IBagInRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BagInRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BagInRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.BagInRes;

            /**
             * Decodes a BagInRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BagInRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.BagInRes;

            /**
             * Verifies a BagInRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BagInRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BagInRes
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.BagInRes;

            /**
             * Creates a plain object from a BagInRes message. Also converts values to other types if specified.
             * @param message BagInRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.BagInRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BagInRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BagInRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BagInBroadcast. */
        interface IBagInBroadcast {

            /** BagInBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** BagInBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a BagInBroadcast. */
        class BagInBroadcast implements IBagInBroadcast {

            /**
             * Constructs a new BagInBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IBagInBroadcast);

            /** BagInBroadcast bcUid. */
            public bcUid: (number|Long);

            /** BagInBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new BagInBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BagInBroadcast instance
             */
            public static create(properties?: mines.v1.IBagInBroadcast): mines.v1.BagInBroadcast;

            /**
             * Encodes the specified BagInBroadcast message. Does not implicitly {@link mines.v1.BagInBroadcast.verify|verify} messages.
             * @param message BagInBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IBagInBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BagInBroadcast message, length delimited. Does not implicitly {@link mines.v1.BagInBroadcast.verify|verify} messages.
             * @param message BagInBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IBagInBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BagInBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BagInBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.BagInBroadcast;

            /**
             * Decodes a BagInBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BagInBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.BagInBroadcast;

            /**
             * Verifies a BagInBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BagInBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BagInBroadcast
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.BagInBroadcast;

            /**
             * Creates a plain object from a BagInBroadcast message. Also converts values to other types if specified.
             * @param message BagInBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.BagInBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BagInBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BagInBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeadBroadcast. */
        interface IDeadBroadcast {

            /** DeadBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** DeadBroadcast userId */
            userId?: (number|Long|null);

            /** DeadBroadcast playerStatus */
            playerStatus?: (number|null);
        }

        /** Represents a DeadBroadcast. */
        class DeadBroadcast implements IDeadBroadcast {

            /**
             * Constructs a new DeadBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IDeadBroadcast);

            /** DeadBroadcast bcUid. */
            public bcUid: (number|Long);

            /** DeadBroadcast userId. */
            public userId: (number|Long);

            /** DeadBroadcast playerStatus. */
            public playerStatus: number;

            /**
             * Creates a new DeadBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeadBroadcast instance
             */
            public static create(properties?: mines.v1.IDeadBroadcast): mines.v1.DeadBroadcast;

            /**
             * Encodes the specified DeadBroadcast message. Does not implicitly {@link mines.v1.DeadBroadcast.verify|verify} messages.
             * @param message DeadBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IDeadBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeadBroadcast message, length delimited. Does not implicitly {@link mines.v1.DeadBroadcast.verify|verify} messages.
             * @param message DeadBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IDeadBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeadBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeadBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.DeadBroadcast;

            /**
             * Decodes a DeadBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeadBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.DeadBroadcast;

            /**
             * Verifies a DeadBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeadBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeadBroadcast
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.DeadBroadcast;

            /**
             * Creates a plain object from a DeadBroadcast message. Also converts values to other types if specified.
             * @param message DeadBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.DeadBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeadBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeadBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PrizeBroadcast. */
        interface IPrizeBroadcast {

            /** PrizeBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** PrizeBroadcast winerId */
            winerId?: (number|Long|null);

            /** PrizeBroadcast winCoin */
            winCoin?: (number|Long|null);

            /** PrizeBroadcast players */
            players?: (mines.v1.IMinesPlayer[]|null);

            /** PrizeBroadcast allOpenedCells */
            allOpenedCells?: ({ [k: string]: mines.v1.IOpenedCellList }|null);
        }

        /** Represents a PrizeBroadcast. */
        class PrizeBroadcast implements IPrizeBroadcast {

            /**
             * Constructs a new PrizeBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IPrizeBroadcast);

            /** PrizeBroadcast bcUid. */
            public bcUid: (number|Long);

            /** PrizeBroadcast winerId. */
            public winerId: (number|Long);

            /** PrizeBroadcast winCoin. */
            public winCoin: (number|Long);

            /** PrizeBroadcast players. */
            public players: mines.v1.IMinesPlayer[];

            /** PrizeBroadcast allOpenedCells. */
            public allOpenedCells: { [k: string]: mines.v1.IOpenedCellList };

            /**
             * Creates a new PrizeBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrizeBroadcast instance
             */
            public static create(properties?: mines.v1.IPrizeBroadcast): mines.v1.PrizeBroadcast;

            /**
             * Encodes the specified PrizeBroadcast message. Does not implicitly {@link mines.v1.PrizeBroadcast.verify|verify} messages.
             * @param message PrizeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IPrizeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrizeBroadcast message, length delimited. Does not implicitly {@link mines.v1.PrizeBroadcast.verify|verify} messages.
             * @param message PrizeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IPrizeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrizeBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrizeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.PrizeBroadcast;

            /**
             * Decodes a PrizeBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrizeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.PrizeBroadcast;

            /**
             * Verifies a PrizeBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrizeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrizeBroadcast
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.PrizeBroadcast;

            /**
             * Creates a plain object from a PrizeBroadcast message. Also converts values to other types if specified.
             * @param message PrizeBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.PrizeBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrizeBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PrizeBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EndGameBroadcast. */
        interface IEndGameBroadcast {

            /** EndGameBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** EndGameBroadcast gameInfo */
            gameInfo?: (mines.v1.IGameInfo|null);

            /** EndGameBroadcast self */
            self?: (mines.v1.IMinesPlayer|null);

            /** EndGameBroadcast players */
            players?: (mines.v1.IMinesPlayer[]|null);
        }

        /** Represents an EndGameBroadcast. */
        class EndGameBroadcast implements IEndGameBroadcast {

            /**
             * Constructs a new EndGameBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IEndGameBroadcast);

            /** EndGameBroadcast bcUid. */
            public bcUid: (number|Long);

            /** EndGameBroadcast gameInfo. */
            public gameInfo?: (mines.v1.IGameInfo|null);

            /** EndGameBroadcast self. */
            public self?: (mines.v1.IMinesPlayer|null);

            /** EndGameBroadcast players. */
            public players: mines.v1.IMinesPlayer[];

            /**
             * Creates a new EndGameBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EndGameBroadcast instance
             */
            public static create(properties?: mines.v1.IEndGameBroadcast): mines.v1.EndGameBroadcast;

            /**
             * Encodes the specified EndGameBroadcast message. Does not implicitly {@link mines.v1.EndGameBroadcast.verify|verify} messages.
             * @param message EndGameBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IEndGameBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EndGameBroadcast message, length delimited. Does not implicitly {@link mines.v1.EndGameBroadcast.verify|verify} messages.
             * @param message EndGameBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IEndGameBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EndGameBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EndGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.EndGameBroadcast;

            /**
             * Decodes an EndGameBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EndGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.EndGameBroadcast;

            /**
             * Verifies an EndGameBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EndGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EndGameBroadcast
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.EndGameBroadcast;

            /**
             * Creates a plain object from an EndGameBroadcast message. Also converts values to other types if specified.
             * @param message EndGameBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.EndGameBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EndGameBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EndGameBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChangeViewReq. */
        interface IChangeViewReq {
        }

        /** Represents a ChangeViewReq. */
        class ChangeViewReq implements IChangeViewReq {

            /**
             * Constructs a new ChangeViewReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IChangeViewReq);

            /**
             * Creates a new ChangeViewReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangeViewReq instance
             */
            public static create(properties?: mines.v1.IChangeViewReq): mines.v1.ChangeViewReq;

            /**
             * Encodes the specified ChangeViewReq message. Does not implicitly {@link mines.v1.ChangeViewReq.verify|verify} messages.
             * @param message ChangeViewReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IChangeViewReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangeViewReq message, length delimited. Does not implicitly {@link mines.v1.ChangeViewReq.verify|verify} messages.
             * @param message ChangeViewReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IChangeViewReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangeViewReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangeViewReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.ChangeViewReq;

            /**
             * Decodes a ChangeViewReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangeViewReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.ChangeViewReq;

            /**
             * Verifies a ChangeViewReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangeViewReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangeViewReq
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.ChangeViewReq;

            /**
             * Creates a plain object from a ChangeViewReq message. Also converts values to other types if specified.
             * @param message ChangeViewReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.ChangeViewReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangeViewReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChangeViewReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChangeViewRes. */
        interface IChangeViewRes {

            /** ChangeViewRes gameInfo */
            gameInfo?: (mines.v1.IGameInfo|null);
        }

        /** Represents a ChangeViewRes. */
        class ChangeViewRes implements IChangeViewRes {

            /**
             * Constructs a new ChangeViewRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IChangeViewRes);

            /** ChangeViewRes gameInfo. */
            public gameInfo?: (mines.v1.IGameInfo|null);

            /**
             * Creates a new ChangeViewRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangeViewRes instance
             */
            public static create(properties?: mines.v1.IChangeViewRes): mines.v1.ChangeViewRes;

            /**
             * Encodes the specified ChangeViewRes message. Does not implicitly {@link mines.v1.ChangeViewRes.verify|verify} messages.
             * @param message ChangeViewRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IChangeViewRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangeViewRes message, length delimited. Does not implicitly {@link mines.v1.ChangeViewRes.verify|verify} messages.
             * @param message ChangeViewRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IChangeViewRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangeViewRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangeViewRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.ChangeViewRes;

            /**
             * Decodes a ChangeViewRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangeViewRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.ChangeViewRes;

            /**
             * Verifies a ChangeViewRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangeViewRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangeViewRes
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.ChangeViewRes;

            /**
             * Creates a plain object from a ChangeViewRes message. Also converts values to other types if specified.
             * @param message ChangeViewRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.ChangeViewRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangeViewRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChangeViewRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StartGameReq. */
        interface IStartGameReq {
        }

        /** Represents a StartGameReq. */
        class StartGameReq implements IStartGameReq {

            /**
             * Constructs a new StartGameReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IStartGameReq);

            /**
             * Creates a new StartGameReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartGameReq instance
             */
            public static create(properties?: mines.v1.IStartGameReq): mines.v1.StartGameReq;

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link mines.v1.StartGameReq.verify|verify} messages.
             * @param message StartGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link mines.v1.StartGameReq.verify|verify} messages.
             * @param message StartGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.StartGameReq;

            /**
             * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.StartGameReq;

            /**
             * Verifies a StartGameReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartGameReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartGameReq
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.StartGameReq;

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @param message StartGameReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.StartGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartGameReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartGameReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StartGameRes. */
        interface IStartGameRes {
        }

        /** Represents a StartGameRes. */
        class StartGameRes implements IStartGameRes {

            /**
             * Constructs a new StartGameRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IStartGameRes);

            /**
             * Creates a new StartGameRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartGameRes instance
             */
            public static create(properties?: mines.v1.IStartGameRes): mines.v1.StartGameRes;

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link mines.v1.StartGameRes.verify|verify} messages.
             * @param message StartGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IStartGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link mines.v1.StartGameRes.verify|verify} messages.
             * @param message StartGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IStartGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.StartGameRes;

            /**
             * Decodes a StartGameRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.StartGameRes;

            /**
             * Verifies a StartGameRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartGameRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartGameRes
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.StartGameRes;

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @param message StartGameRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.StartGameRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartGameRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartGameRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StartGameBroadcast. */
        interface IStartGameBroadcast {

            /** StartGameBroadcast bcUid */
            bcUid?: (number|Long|null);

            /** StartGameBroadcast gameInfo */
            gameInfo?: (mines.v1.IGameInfo|null);

            /** StartGameBroadcast players */
            players?: (mines.v1.IMinesPlayer[]|null);
        }

        /** Represents a StartGameBroadcast. */
        class StartGameBroadcast implements IStartGameBroadcast {

            /**
             * Constructs a new StartGameBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IStartGameBroadcast);

            /** StartGameBroadcast bcUid. */
            public bcUid: (number|Long);

            /** StartGameBroadcast gameInfo. */
            public gameInfo?: (mines.v1.IGameInfo|null);

            /** StartGameBroadcast players. */
            public players: mines.v1.IMinesPlayer[];

            /**
             * Creates a new StartGameBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartGameBroadcast instance
             */
            public static create(properties?: mines.v1.IStartGameBroadcast): mines.v1.StartGameBroadcast;

            /**
             * Encodes the specified StartGameBroadcast message. Does not implicitly {@link mines.v1.StartGameBroadcast.verify|verify} messages.
             * @param message StartGameBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IStartGameBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartGameBroadcast message, length delimited. Does not implicitly {@link mines.v1.StartGameBroadcast.verify|verify} messages.
             * @param message StartGameBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IStartGameBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartGameBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.StartGameBroadcast;

            /**
             * Decodes a StartGameBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartGameBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.StartGameBroadcast;

            /**
             * Verifies a StartGameBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartGameBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartGameBroadcast
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.StartGameBroadcast;

            /**
             * Creates a plain object from a StartGameBroadcast message. Also converts values to other types if specified.
             * @param message StartGameBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.StartGameBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartGameBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartGameBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EndGameReq. */
        interface IEndGameReq {
        }

        /** Represents an EndGameReq. */
        class EndGameReq implements IEndGameReq {

            /**
             * Constructs a new EndGameReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IEndGameReq);

            /**
             * Creates a new EndGameReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EndGameReq instance
             */
            public static create(properties?: mines.v1.IEndGameReq): mines.v1.EndGameReq;

            /**
             * Encodes the specified EndGameReq message. Does not implicitly {@link mines.v1.EndGameReq.verify|verify} messages.
             * @param message EndGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IEndGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EndGameReq message, length delimited. Does not implicitly {@link mines.v1.EndGameReq.verify|verify} messages.
             * @param message EndGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IEndGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EndGameReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EndGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.EndGameReq;

            /**
             * Decodes an EndGameReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EndGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.EndGameReq;

            /**
             * Verifies an EndGameReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EndGameReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EndGameReq
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.EndGameReq;

            /**
             * Creates a plain object from an EndGameReq message. Also converts values to other types if specified.
             * @param message EndGameReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.EndGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EndGameReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EndGameReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EndGameRes. */
        interface IEndGameRes {
        }

        /** Represents an EndGameRes. */
        class EndGameRes implements IEndGameRes {

            /**
             * Constructs a new EndGameRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IEndGameRes);

            /**
             * Creates a new EndGameRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EndGameRes instance
             */
            public static create(properties?: mines.v1.IEndGameRes): mines.v1.EndGameRes;

            /**
             * Encodes the specified EndGameRes message. Does not implicitly {@link mines.v1.EndGameRes.verify|verify} messages.
             * @param message EndGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IEndGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EndGameRes message, length delimited. Does not implicitly {@link mines.v1.EndGameRes.verify|verify} messages.
             * @param message EndGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IEndGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EndGameRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EndGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.EndGameRes;

            /**
             * Decodes an EndGameRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EndGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.EndGameRes;

            /**
             * Verifies an EndGameRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EndGameRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EndGameRes
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.EndGameRes;

            /**
             * Creates a plain object from an EndGameRes message. Also converts values to other types if specified.
             * @param message EndGameRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.EndGameRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EndGameRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EndGameRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** MinesGameResult enum. */
        enum MinesGameResult {
            MINES_RESULT_UNKNOWN = 0,
            MINES_RESULT_WIN = 1,
            MINES_RESULT_BOMBED = 2,
            MINES_RESULT_CASH_OUT = 3,
            MINES_RESULT_OPPONENT_WIN = 4
        }

        /** Properties of a GetPlayerHistoryReq. */
        interface IGetPlayerHistoryReq {

            /** GetPlayerHistoryReq page */
            page?: (number|null);

            /** GetPlayerHistoryReq startTime */
            startTime?: (number|Long|null);

            /** GetPlayerHistoryReq endTime */
            endTime?: (number|Long|null);
        }

        /** Represents a GetPlayerHistoryReq. */
        class GetPlayerHistoryReq implements IGetPlayerHistoryReq {

            /**
             * Constructs a new GetPlayerHistoryReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IGetPlayerHistoryReq);

            /** GetPlayerHistoryReq page. */
            public page: number;

            /** GetPlayerHistoryReq startTime. */
            public startTime: (number|Long);

            /** GetPlayerHistoryReq endTime. */
            public endTime: (number|Long);

            /**
             * Creates a new GetPlayerHistoryReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetPlayerHistoryReq instance
             */
            public static create(properties?: mines.v1.IGetPlayerHistoryReq): mines.v1.GetPlayerHistoryReq;

            /**
             * Encodes the specified GetPlayerHistoryReq message. Does not implicitly {@link mines.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @param message GetPlayerHistoryReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IGetPlayerHistoryReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetPlayerHistoryReq message, length delimited. Does not implicitly {@link mines.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @param message GetPlayerHistoryReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IGetPlayerHistoryReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.GetPlayerHistoryReq;

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.GetPlayerHistoryReq;

            /**
             * Verifies a GetPlayerHistoryReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetPlayerHistoryReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetPlayerHistoryReq
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.GetPlayerHistoryReq;

            /**
             * Creates a plain object from a GetPlayerHistoryReq message. Also converts values to other types if specified.
             * @param message GetPlayerHistoryReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.GetPlayerHistoryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetPlayerHistoryReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetPlayerHistoryReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetPlayerHistoryRes. */
        interface IGetPlayerHistoryRes {

            /** GetPlayerHistoryRes records */
            records?: (mines.v1.IMinesHistoryRecord[]|null);
        }

        /** Represents a GetPlayerHistoryRes. */
        class GetPlayerHistoryRes implements IGetPlayerHistoryRes {

            /**
             * Constructs a new GetPlayerHistoryRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IGetPlayerHistoryRes);

            /** GetPlayerHistoryRes records. */
            public records: mines.v1.IMinesHistoryRecord[];

            /**
             * Creates a new GetPlayerHistoryRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetPlayerHistoryRes instance
             */
            public static create(properties?: mines.v1.IGetPlayerHistoryRes): mines.v1.GetPlayerHistoryRes;

            /**
             * Encodes the specified GetPlayerHistoryRes message. Does not implicitly {@link mines.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @param message GetPlayerHistoryRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IGetPlayerHistoryRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetPlayerHistoryRes message, length delimited. Does not implicitly {@link mines.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @param message GetPlayerHistoryRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IGetPlayerHistoryRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.GetPlayerHistoryRes;

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.GetPlayerHistoryRes;

            /**
             * Verifies a GetPlayerHistoryRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetPlayerHistoryRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetPlayerHistoryRes
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.GetPlayerHistoryRes;

            /**
             * Creates a plain object from a GetPlayerHistoryRes message. Also converts values to other types if specified.
             * @param message GetPlayerHistoryRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.GetPlayerHistoryRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetPlayerHistoryRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetPlayerHistoryRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MinesHistoryRecord. */
        interface IMinesHistoryRecord {

            /** MinesHistoryRecord gameCode */
            gameCode?: (string|null);

            /** MinesHistoryRecord endTime */
            endTime?: (number|Long|null);

            /** MinesHistoryRecord cost */
            cost?: (number|Long|null);

            /** MinesHistoryRecord reward */
            reward?: (number|Long|null);

            /** MinesHistoryRecord result */
            result?: (mines.v1.MinesGameResult|null);

            /** MinesHistoryRecord finalMultiplier */
            finalMultiplier?: (number|null);

            /** MinesHistoryRecord openedCells */
            openedCells?: (mines.v1.IMinesHistoryCell[]|null);
        }

        /** Represents a MinesHistoryRecord. */
        class MinesHistoryRecord implements IMinesHistoryRecord {

            /**
             * Constructs a new MinesHistoryRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IMinesHistoryRecord);

            /** MinesHistoryRecord gameCode. */
            public gameCode: string;

            /** MinesHistoryRecord endTime. */
            public endTime: (number|Long);

            /** MinesHistoryRecord cost. */
            public cost: (number|Long);

            /** MinesHistoryRecord reward. */
            public reward: (number|Long);

            /** MinesHistoryRecord result. */
            public result: mines.v1.MinesGameResult;

            /** MinesHistoryRecord finalMultiplier. */
            public finalMultiplier: number;

            /** MinesHistoryRecord openedCells. */
            public openedCells: mines.v1.IMinesHistoryCell[];

            /**
             * Creates a new MinesHistoryRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MinesHistoryRecord instance
             */
            public static create(properties?: mines.v1.IMinesHistoryRecord): mines.v1.MinesHistoryRecord;

            /**
             * Encodes the specified MinesHistoryRecord message. Does not implicitly {@link mines.v1.MinesHistoryRecord.verify|verify} messages.
             * @param message MinesHistoryRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IMinesHistoryRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MinesHistoryRecord message, length delimited. Does not implicitly {@link mines.v1.MinesHistoryRecord.verify|verify} messages.
             * @param message MinesHistoryRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IMinesHistoryRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MinesHistoryRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MinesHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.MinesHistoryRecord;

            /**
             * Decodes a MinesHistoryRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MinesHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.MinesHistoryRecord;

            /**
             * Verifies a MinesHistoryRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MinesHistoryRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MinesHistoryRecord
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.MinesHistoryRecord;

            /**
             * Creates a plain object from a MinesHistoryRecord message. Also converts values to other types if specified.
             * @param message MinesHistoryRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.MinesHistoryRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MinesHistoryRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MinesHistoryRecord
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MinesHistoryCell. */
        interface IMinesHistoryCell {

            /** MinesHistoryCell cellId */
            cellId?: (number|null);

            /** MinesHistoryCell cellType */
            cellType?: (mines.v1.CellType|null);

            /** MinesHistoryCell flipOrder */
            flipOrder?: (number|null);

            /** MinesHistoryCell multiplier */
            multiplier?: (number|null);
        }

        /** Represents a MinesHistoryCell. */
        class MinesHistoryCell implements IMinesHistoryCell {

            /**
             * Constructs a new MinesHistoryCell.
             * @param [properties] Properties to set
             */
            constructor(properties?: mines.v1.IMinesHistoryCell);

            /** MinesHistoryCell cellId. */
            public cellId: number;

            /** MinesHistoryCell cellType. */
            public cellType: mines.v1.CellType;

            /** MinesHistoryCell flipOrder. */
            public flipOrder: number;

            /** MinesHistoryCell multiplier. */
            public multiplier: number;

            /**
             * Creates a new MinesHistoryCell instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MinesHistoryCell instance
             */
            public static create(properties?: mines.v1.IMinesHistoryCell): mines.v1.MinesHistoryCell;

            /**
             * Encodes the specified MinesHistoryCell message. Does not implicitly {@link mines.v1.MinesHistoryCell.verify|verify} messages.
             * @param message MinesHistoryCell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mines.v1.IMinesHistoryCell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MinesHistoryCell message, length delimited. Does not implicitly {@link mines.v1.MinesHistoryCell.verify|verify} messages.
             * @param message MinesHistoryCell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mines.v1.IMinesHistoryCell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MinesHistoryCell message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MinesHistoryCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines.v1.MinesHistoryCell;

            /**
             * Decodes a MinesHistoryCell message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MinesHistoryCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines.v1.MinesHistoryCell;

            /**
             * Verifies a MinesHistoryCell message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MinesHistoryCell message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MinesHistoryCell
             */
            public static fromObject(object: { [k: string]: any }): mines.v1.MinesHistoryCell;

            /**
             * Creates a plain object from a MinesHistoryCell message. Also converts values to other types if specified.
             * @param message MinesHistoryCell
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mines.v1.MinesHistoryCell, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MinesHistoryCell to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MinesHistoryCell
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
