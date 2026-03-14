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

/** Namespace tongits. */
export namespace tongits {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of an EmptyRes. */
        interface IEmptyRes {
        }

        /** Represents an EmptyRes. */
        class EmptyRes implements IEmptyRes {

            /**
             * Constructs a new EmptyRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IEmptyRes);

            /**
             * Creates a new EmptyRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EmptyRes instance
             */
            public static create(properties?: tongits.v1.IEmptyRes): tongits.v1.EmptyRes;

            /**
             * Encodes the specified EmptyRes message. Does not implicitly {@link tongits.v1.EmptyRes.verify|verify} messages.
             * @param message EmptyRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IEmptyRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EmptyRes message, length delimited. Does not implicitly {@link tongits.v1.EmptyRes.verify|verify} messages.
             * @param message EmptyRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IEmptyRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EmptyRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EmptyRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.EmptyRes;

            /**
             * Decodes an EmptyRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EmptyRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.EmptyRes;

            /**
             * Verifies an EmptyRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EmptyRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EmptyRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.EmptyRes;

            /**
             * Creates a plain object from an EmptyRes message. Also converts values to other types if specified.
             * @param message EmptyRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.EmptyRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EmptyRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EmptyRes
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

            /** RoomInfo maxSeat */
            maxSeat?: (number|null);
        }

        /** Represents a RoomInfo. */
        class RoomInfo implements IRoomInfo {

            /**
             * Constructs a new RoomInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IRoomInfo);

            /** RoomInfo roomId. */
            public roomId: (number|Long);

            /** RoomInfo roomName. */
            public roomName: string;

            /** RoomInfo roomStatus. */
            public roomStatus: number;

            /** RoomInfo maxSeat. */
            public maxSeat: number;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoomInfo instance
             */
            public static create(properties?: tongits.v1.IRoomInfo): tongits.v1.RoomInfo;

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link tongits.v1.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link tongits.v1.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.RoomInfo;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.RoomInfo;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.RoomInfo;

            /**
             * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
             * @param message RoomInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a TongitsPlayerInfo. */
        interface ITongitsPlayerInfo {

            /** TongitsPlayerInfo playerInfo */
            playerInfo?: (common.v1.IPlayerInfo|null);

            /** TongitsPlayerInfo handCardCount */
            handCardCount?: (number|null);

            /** TongitsPlayerInfo isDealer */
            isDealer?: (boolean|null);

            /** TongitsPlayerInfo displayedMelds */
            displayedMelds?: (tongits.v1.IMeld[]|null);

            /** TongitsPlayerInfo handCards */
            handCards?: (number[]|null);

            /** TongitsPlayerInfo isFight */
            isFight?: (boolean|null);

            /** TongitsPlayerInfo countdown */
            countdown?: (number|null);

            /** TongitsPlayerInfo changeStatus */
            changeStatus?: (number|null);

            /** TongitsPlayerInfo status */
            status?: (number|null);

            /** TongitsPlayerInfo isWin */
            isWin?: (boolean|null);

            /** TongitsPlayerInfo cardPoint */
            cardPoint?: (number|null);
        }

        /** Represents a TongitsPlayerInfo. */
        class TongitsPlayerInfo implements ITongitsPlayerInfo {

            /**
             * Constructs a new TongitsPlayerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITongitsPlayerInfo);

            /** TongitsPlayerInfo playerInfo. */
            public playerInfo?: (common.v1.IPlayerInfo|null);

            /** TongitsPlayerInfo handCardCount. */
            public handCardCount: number;

            /** TongitsPlayerInfo isDealer. */
            public isDealer: boolean;

            /** TongitsPlayerInfo displayedMelds. */
            public displayedMelds: tongits.v1.IMeld[];

            /** TongitsPlayerInfo handCards. */
            public handCards: number[];

            /** TongitsPlayerInfo isFight. */
            public isFight: boolean;

            /** TongitsPlayerInfo countdown. */
            public countdown: number;

            /** TongitsPlayerInfo changeStatus. */
            public changeStatus: number;

            /** TongitsPlayerInfo status. */
            public status: number;

            /** TongitsPlayerInfo isWin. */
            public isWin: boolean;

            /** TongitsPlayerInfo cardPoint. */
            public cardPoint: number;

            /**
             * Creates a new TongitsPlayerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TongitsPlayerInfo instance
             */
            public static create(properties?: tongits.v1.ITongitsPlayerInfo): tongits.v1.TongitsPlayerInfo;

            /**
             * Encodes the specified TongitsPlayerInfo message. Does not implicitly {@link tongits.v1.TongitsPlayerInfo.verify|verify} messages.
             * @param message TongitsPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITongitsPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TongitsPlayerInfo message, length delimited. Does not implicitly {@link tongits.v1.TongitsPlayerInfo.verify|verify} messages.
             * @param message TongitsPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITongitsPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TongitsPlayerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TongitsPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TongitsPlayerInfo;

            /**
             * Decodes a TongitsPlayerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TongitsPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TongitsPlayerInfo;

            /**
             * Verifies a TongitsPlayerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TongitsPlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TongitsPlayerInfo
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TongitsPlayerInfo;

            /**
             * Creates a plain object from a TongitsPlayerInfo message. Also converts values to other types if specified.
             * @param message TongitsPlayerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TongitsPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TongitsPlayerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TongitsPlayerInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TongitsBasePlayerInfo. */
        interface ITongitsBasePlayerInfo {

            /** TongitsBasePlayerInfo playerId */
            playerId?: (number|Long|null);

            /** TongitsBasePlayerInfo changeStatus */
            changeStatus?: (number|null);

            /** TongitsBasePlayerInfo countdown */
            countdown?: (number|null);
        }

        /** Represents a TongitsBasePlayerInfo. */
        class TongitsBasePlayerInfo implements ITongitsBasePlayerInfo {

            /**
             * Constructs a new TongitsBasePlayerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITongitsBasePlayerInfo);

            /** TongitsBasePlayerInfo playerId. */
            public playerId: (number|Long);

            /** TongitsBasePlayerInfo changeStatus. */
            public changeStatus: number;

            /** TongitsBasePlayerInfo countdown. */
            public countdown: number;

            /**
             * Creates a new TongitsBasePlayerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TongitsBasePlayerInfo instance
             */
            public static create(properties?: tongits.v1.ITongitsBasePlayerInfo): tongits.v1.TongitsBasePlayerInfo;

            /**
             * Encodes the specified TongitsBasePlayerInfo message. Does not implicitly {@link tongits.v1.TongitsBasePlayerInfo.verify|verify} messages.
             * @param message TongitsBasePlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITongitsBasePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TongitsBasePlayerInfo message, length delimited. Does not implicitly {@link tongits.v1.TongitsBasePlayerInfo.verify|verify} messages.
             * @param message TongitsBasePlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITongitsBasePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TongitsBasePlayerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TongitsBasePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TongitsBasePlayerInfo;

            /**
             * Decodes a TongitsBasePlayerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TongitsBasePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TongitsBasePlayerInfo;

            /**
             * Verifies a TongitsBasePlayerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TongitsBasePlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TongitsBasePlayerInfo
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TongitsBasePlayerInfo;

            /**
             * Creates a plain object from a TongitsBasePlayerInfo message. Also converts values to other types if specified.
             * @param message TongitsBasePlayerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TongitsBasePlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TongitsBasePlayerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TongitsBasePlayerInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Meld. */
        interface IMeld {

            /** Meld cards */
            cards?: (number[]|null);

            /** Meld highlightCards */
            highlightCards?: (number|null);

            /** Meld ownerId */
            ownerId?: (number|Long|null);

            /** Meld meldId */
            meldId?: (number|null);

            /** Meld locked */
            locked?: (boolean|null);
        }

        /** Represents a Meld. */
        class Meld implements IMeld {

            /**
             * Constructs a new Meld.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IMeld);

            /** Meld cards. */
            public cards: number[];

            /** Meld highlightCards. */
            public highlightCards: number;

            /** Meld ownerId. */
            public ownerId: (number|Long);

            /** Meld meldId. */
            public meldId: number;

            /** Meld locked. */
            public locked: boolean;

            /**
             * Creates a new Meld instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Meld instance
             */
            public static create(properties?: tongits.v1.IMeld): tongits.v1.Meld;

            /**
             * Encodes the specified Meld message. Does not implicitly {@link tongits.v1.Meld.verify|verify} messages.
             * @param message Meld message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IMeld, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Meld message, length delimited. Does not implicitly {@link tongits.v1.Meld.verify|verify} messages.
             * @param message Meld message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IMeld, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Meld message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Meld
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.Meld;

            /**
             * Decodes a Meld message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Meld
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.Meld;

            /**
             * Verifies a Meld message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Meld message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Meld
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.Meld;

            /**
             * Creates a plain object from a Meld message. Also converts values to other types if specified.
             * @param message Meld
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.Meld, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Meld to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Meld
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameInfo. */
        interface IGameInfo {

            /** GameInfo actionPlayerId */
            actionPlayerId?: (number|Long|null);

            /** GameInfo status */
            status?: (number|null);

            /** GameInfo deckCardCount */
            deckCardCount?: (number|null);

            /** GameInfo discardPile */
            discardPile?: (number[]|null);

            /** GameInfo pot */
            pot?: (tongits.v1.IPotInfo|null);

            /** GameInfo discardCard */
            discardCard?: (number|null);

            /** GameInfo winType */
            winType?: (number|null);

            /** GameInfo perspectiveId */
            perspectiveId?: (number|Long|null);

            /** GameInfo betAmount */
            betAmount?: (number|null);

            /** GameInfo scores */
            scores?: (number[]|null);
        }

        /** Represents a GameInfo. */
        class GameInfo implements IGameInfo {

            /**
             * Constructs a new GameInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IGameInfo);

            /** GameInfo actionPlayerId. */
            public actionPlayerId: (number|Long);

            /** GameInfo status. */
            public status: number;

            /** GameInfo deckCardCount. */
            public deckCardCount: number;

            /** GameInfo discardPile. */
            public discardPile: number[];

            /** GameInfo pot. */
            public pot?: (tongits.v1.IPotInfo|null);

            /** GameInfo discardCard. */
            public discardCard: number;

            /** GameInfo winType. */
            public winType: number;

            /** GameInfo perspectiveId. */
            public perspectiveId: (number|Long);

            /** GameInfo betAmount. */
            public betAmount: number;

            /** GameInfo scores. */
            public scores: number[];

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameInfo instance
             */
            public static create(properties?: tongits.v1.IGameInfo): tongits.v1.GameInfo;

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link tongits.v1.GameInfo.verify|verify} messages.
             * @param message GameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link tongits.v1.GameInfo.verify|verify} messages.
             * @param message GameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.GameInfo;

            /**
             * Decodes a GameInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.GameInfo;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.GameInfo;

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @param message GameInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a PotInfo. */
        interface IPotInfo {

            /** PotInfo base */
            base?: (number|null);

            /** PotInfo winCount */
            winCount?: (number|null);

            /** PotInfo useId */
            useId?: (number|Long|null);
        }

        /** Represents a PotInfo. */
        class PotInfo implements IPotInfo {

            /**
             * Constructs a new PotInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IPotInfo);

            /** PotInfo base. */
            public base: number;

            /** PotInfo winCount. */
            public winCount: number;

            /** PotInfo useId. */
            public useId: (number|Long);

            /**
             * Creates a new PotInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PotInfo instance
             */
            public static create(properties?: tongits.v1.IPotInfo): tongits.v1.PotInfo;

            /**
             * Encodes the specified PotInfo message. Does not implicitly {@link tongits.v1.PotInfo.verify|verify} messages.
             * @param message PotInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IPotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PotInfo message, length delimited. Does not implicitly {@link tongits.v1.PotInfo.verify|verify} messages.
             * @param message PotInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IPotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PotInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.PotInfo;

            /**
             * Decodes a PotInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.PotInfo;

            /**
             * Verifies a PotInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PotInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PotInfo
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.PotInfo;

            /**
             * Creates a plain object from a PotInfo message. Also converts values to other types if specified.
             * @param message PotInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.PotInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PotInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PotInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayerResult. */
        interface IPlayerResult {

            /** PlayerResult playerInfo */
            playerInfo?: (tongits.v1.ITongitsPlayerInfo|null);

            /** PlayerResult sumWinBonus */
            sumWinBonus?: (number|null);

            /** PlayerResult normalWinBonus */
            normalWinBonus?: (number|null);

            /** PlayerResult tongitsWinBonus */
            tongitsWinBonus?: (number|null);

            /** PlayerResult cardTypeBonus */
            cardTypeBonus?: (number|null);

            /** PlayerResult bonusBonus */
            bonusBonus?: (number|null);

            /** PlayerResult burnedBonus */
            burnedBonus?: (number|null);

            /** PlayerResult winChallengeBonus */
            winChallengeBonus?: (number|null);

            /** PlayerResult potBonus */
            potBonus?: (number|null);

            /** PlayerResult cardPoint */
            cardPoint?: (number|null);
        }

        /** Represents a PlayerResult. */
        class PlayerResult implements IPlayerResult {

            /**
             * Constructs a new PlayerResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IPlayerResult);

            /** PlayerResult playerInfo. */
            public playerInfo?: (tongits.v1.ITongitsPlayerInfo|null);

            /** PlayerResult sumWinBonus. */
            public sumWinBonus: number;

            /** PlayerResult normalWinBonus. */
            public normalWinBonus: number;

            /** PlayerResult tongitsWinBonus. */
            public tongitsWinBonus: number;

            /** PlayerResult cardTypeBonus. */
            public cardTypeBonus: number;

            /** PlayerResult bonusBonus. */
            public bonusBonus: number;

            /** PlayerResult burnedBonus. */
            public burnedBonus: number;

            /** PlayerResult winChallengeBonus. */
            public winChallengeBonus: number;

            /** PlayerResult potBonus. */
            public potBonus: number;

            /** PlayerResult cardPoint. */
            public cardPoint: number;

            /**
             * Creates a new PlayerResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerResult instance
             */
            public static create(properties?: tongits.v1.IPlayerResult): tongits.v1.PlayerResult;

            /**
             * Encodes the specified PlayerResult message. Does not implicitly {@link tongits.v1.PlayerResult.verify|verify} messages.
             * @param message PlayerResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IPlayerResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerResult message, length delimited. Does not implicitly {@link tongits.v1.PlayerResult.verify|verify} messages.
             * @param message PlayerResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IPlayerResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.PlayerResult;

            /**
             * Decodes a PlayerResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.PlayerResult;

            /**
             * Verifies a PlayerResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerResult
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.PlayerResult;

            /**
             * Creates a plain object from a PlayerResult message. Also converts values to other types if specified.
             * @param message PlayerResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.PlayerResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerResult
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
            constructor(properties?: tongits.v1.IJoinRoomReq);

            /** JoinRoomReq roomId. */
            public roomId: (number|Long);

            /**
             * Creates a new JoinRoomReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinRoomReq instance
             */
            public static create(properties?: tongits.v1.IJoinRoomReq): tongits.v1.JoinRoomReq;

            /**
             * Encodes the specified JoinRoomReq message. Does not implicitly {@link tongits.v1.JoinRoomReq.verify|verify} messages.
             * @param message JoinRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link tongits.v1.JoinRoomReq.verify|verify} messages.
             * @param message JoinRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.JoinRoomReq;

            /**
             * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.JoinRoomReq;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.JoinRoomReq;

            /**
             * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
             * @param message JoinRoomReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.JoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            roomInfo?: (tongits.v1.IRoomInfo|null);

            /** JoinRoomRes players */
            players?: (tongits.v1.ITongitsPlayerInfo[]|null);

            /** JoinRoomRes watchers */
            watchers?: (common.v1.IPlayerInfo[]|null);

            /** JoinRoomRes playersCount */
            playersCount?: (number|null);

            /** JoinRoomRes speakers */
            speakers?: (common.v1.IPlayerInfo[]|null);

            /** JoinRoomRes self */
            self?: (tongits.v1.ITongitsPlayerInfo|null);

            /** JoinRoomRes gameInfo */
            gameInfo?: (tongits.v1.IGameInfo|null);

            /** JoinRoomRes playerSettings */
            playerSettings?: (common.v1.IPlayerSettings|null);
        }

        /** Represents a JoinRoomRes. */
        class JoinRoomRes implements IJoinRoomRes {

            /**
             * Constructs a new JoinRoomRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IJoinRoomRes);

            /** JoinRoomRes roomInfo. */
            public roomInfo?: (tongits.v1.IRoomInfo|null);

            /** JoinRoomRes players. */
            public players: tongits.v1.ITongitsPlayerInfo[];

            /** JoinRoomRes watchers. */
            public watchers: common.v1.IPlayerInfo[];

            /** JoinRoomRes playersCount. */
            public playersCount: number;

            /** JoinRoomRes speakers. */
            public speakers: common.v1.IPlayerInfo[];

            /** JoinRoomRes self. */
            public self?: (tongits.v1.ITongitsPlayerInfo|null);

            /** JoinRoomRes gameInfo. */
            public gameInfo?: (tongits.v1.IGameInfo|null);

            /** JoinRoomRes playerSettings. */
            public playerSettings?: (common.v1.IPlayerSettings|null);

            /**
             * Creates a new JoinRoomRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinRoomRes instance
             */
            public static create(properties?: tongits.v1.IJoinRoomRes): tongits.v1.JoinRoomRes;

            /**
             * Encodes the specified JoinRoomRes message. Does not implicitly {@link tongits.v1.JoinRoomRes.verify|verify} messages.
             * @param message JoinRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IJoinRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link tongits.v1.JoinRoomRes.verify|verify} messages.
             * @param message JoinRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IJoinRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.JoinRoomRes;

            /**
             * Decodes a JoinRoomRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.JoinRoomRes;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.JoinRoomRes;

            /**
             * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
             * @param message JoinRoomRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.JoinRoomRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a StartGameReq. */
        interface IStartGameReq {
        }

        /** Represents a StartGameReq. */
        class StartGameReq implements IStartGameReq {

            /**
             * Constructs a new StartGameReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IStartGameReq);

            /**
             * Creates a new StartGameReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartGameReq instance
             */
            public static create(properties?: tongits.v1.IStartGameReq): tongits.v1.StartGameReq;

            /**
             * Encodes the specified StartGameReq message. Does not implicitly {@link tongits.v1.StartGameReq.verify|verify} messages.
             * @param message StartGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link tongits.v1.StartGameReq.verify|verify} messages.
             * @param message StartGameReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartGameReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.StartGameReq;

            /**
             * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartGameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.StartGameReq;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.StartGameReq;

            /**
             * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
             * @param message StartGameReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.StartGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: tongits.v1.IStartGameRes);

            /**
             * Creates a new StartGameRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartGameRes instance
             */
            public static create(properties?: tongits.v1.IStartGameRes): tongits.v1.StartGameRes;

            /**
             * Encodes the specified StartGameRes message. Does not implicitly {@link tongits.v1.StartGameRes.verify|verify} messages.
             * @param message StartGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IStartGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartGameRes message, length delimited. Does not implicitly {@link tongits.v1.StartGameRes.verify|verify} messages.
             * @param message StartGameRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IStartGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartGameRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.StartGameRes;

            /**
             * Decodes a StartGameRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartGameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.StartGameRes;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.StartGameRes;

            /**
             * Creates a plain object from a StartGameRes message. Also converts values to other types if specified.
             * @param message StartGameRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.StartGameRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a GameStartBroadcast. */
        interface IGameStartBroadcast {

            /** GameStartBroadcast gameInfo */
            gameInfo?: (tongits.v1.IGameInfo|null);

            /** GameStartBroadcast players */
            players?: (tongits.v1.ITongitsPlayerInfo[]|null);

            /** GameStartBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a GameStartBroadcast. */
        class GameStartBroadcast implements IGameStartBroadcast {

            /**
             * Constructs a new GameStartBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IGameStartBroadcast);

            /** GameStartBroadcast gameInfo. */
            public gameInfo?: (tongits.v1.IGameInfo|null);

            /** GameStartBroadcast players. */
            public players: tongits.v1.ITongitsPlayerInfo[];

            /** GameStartBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new GameStartBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameStartBroadcast instance
             */
            public static create(properties?: tongits.v1.IGameStartBroadcast): tongits.v1.GameStartBroadcast;

            /**
             * Encodes the specified GameStartBroadcast message. Does not implicitly {@link tongits.v1.GameStartBroadcast.verify|verify} messages.
             * @param message GameStartBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IGameStartBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameStartBroadcast message, length delimited. Does not implicitly {@link tongits.v1.GameStartBroadcast.verify|verify} messages.
             * @param message GameStartBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IGameStartBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameStartBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameStartBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.GameStartBroadcast;

            /**
             * Decodes a GameStartBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameStartBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.GameStartBroadcast;

            /**
             * Verifies a GameStartBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameStartBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameStartBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.GameStartBroadcast;

            /**
             * Creates a plain object from a GameStartBroadcast message. Also converts values to other types if specified.
             * @param message GameStartBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.GameStartBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameStartBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameStartBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TongitsReq. */
        interface ITongitsReq {
        }

        /** Represents a TongitsReq. */
        class TongitsReq implements ITongitsReq {

            /**
             * Constructs a new TongitsReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITongitsReq);

            /**
             * Creates a new TongitsReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TongitsReq instance
             */
            public static create(properties?: tongits.v1.ITongitsReq): tongits.v1.TongitsReq;

            /**
             * Encodes the specified TongitsReq message. Does not implicitly {@link tongits.v1.TongitsReq.verify|verify} messages.
             * @param message TongitsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITongitsReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TongitsReq message, length delimited. Does not implicitly {@link tongits.v1.TongitsReq.verify|verify} messages.
             * @param message TongitsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITongitsReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TongitsReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TongitsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TongitsReq;

            /**
             * Decodes a TongitsReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TongitsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TongitsReq;

            /**
             * Verifies a TongitsReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TongitsReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TongitsReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TongitsReq;

            /**
             * Creates a plain object from a TongitsReq message. Also converts values to other types if specified.
             * @param message TongitsReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TongitsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TongitsReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TongitsReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TongitsRes. */
        interface ITongitsRes {
        }

        /** Represents a TongitsRes. */
        class TongitsRes implements ITongitsRes {

            /**
             * Constructs a new TongitsRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITongitsRes);

            /**
             * Creates a new TongitsRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TongitsRes instance
             */
            public static create(properties?: tongits.v1.ITongitsRes): tongits.v1.TongitsRes;

            /**
             * Encodes the specified TongitsRes message. Does not implicitly {@link tongits.v1.TongitsRes.verify|verify} messages.
             * @param message TongitsRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITongitsRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TongitsRes message, length delimited. Does not implicitly {@link tongits.v1.TongitsRes.verify|verify} messages.
             * @param message TongitsRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITongitsRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TongitsRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TongitsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TongitsRes;

            /**
             * Decodes a TongitsRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TongitsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TongitsRes;

            /**
             * Verifies a TongitsRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TongitsRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TongitsRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TongitsRes;

            /**
             * Creates a plain object from a TongitsRes message. Also converts values to other types if specified.
             * @param message TongitsRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TongitsRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TongitsRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TongitsRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DrawCardReq. */
        interface IDrawCardReq {
        }

        /** Represents a DrawCardReq. */
        class DrawCardReq implements IDrawCardReq {

            /**
             * Constructs a new DrawCardReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IDrawCardReq);

            /**
             * Creates a new DrawCardReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DrawCardReq instance
             */
            public static create(properties?: tongits.v1.IDrawCardReq): tongits.v1.DrawCardReq;

            /**
             * Encodes the specified DrawCardReq message. Does not implicitly {@link tongits.v1.DrawCardReq.verify|verify} messages.
             * @param message DrawCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IDrawCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DrawCardReq message, length delimited. Does not implicitly {@link tongits.v1.DrawCardReq.verify|verify} messages.
             * @param message DrawCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IDrawCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DrawCardReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DrawCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.DrawCardReq;

            /**
             * Decodes a DrawCardReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DrawCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.DrawCardReq;

            /**
             * Verifies a DrawCardReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DrawCardReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DrawCardReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.DrawCardReq;

            /**
             * Creates a plain object from a DrawCardReq message. Also converts values to other types if specified.
             * @param message DrawCardReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.DrawCardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DrawCardReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DrawCardReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DrawCardRes. */
        interface IDrawCardRes {

            /** DrawCardRes drawnCard */
            drawnCard?: (number|null);

            /** DrawCardRes hasTongits */
            hasTongits?: (boolean|null);

            /** DrawCardRes handCardCount */
            handCardCount?: (number|null);
        }

        /** Represents a DrawCardRes. */
        class DrawCardRes implements IDrawCardRes {

            /**
             * Constructs a new DrawCardRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IDrawCardRes);

            /** DrawCardRes drawnCard. */
            public drawnCard: number;

            /** DrawCardRes hasTongits. */
            public hasTongits: boolean;

            /** DrawCardRes handCardCount. */
            public handCardCount: number;

            /**
             * Creates a new DrawCardRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DrawCardRes instance
             */
            public static create(properties?: tongits.v1.IDrawCardRes): tongits.v1.DrawCardRes;

            /**
             * Encodes the specified DrawCardRes message. Does not implicitly {@link tongits.v1.DrawCardRes.verify|verify} messages.
             * @param message DrawCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IDrawCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DrawCardRes message, length delimited. Does not implicitly {@link tongits.v1.DrawCardRes.verify|verify} messages.
             * @param message DrawCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IDrawCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DrawCardRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DrawCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.DrawCardRes;

            /**
             * Decodes a DrawCardRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DrawCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.DrawCardRes;

            /**
             * Verifies a DrawCardRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DrawCardRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DrawCardRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.DrawCardRes;

            /**
             * Creates a plain object from a DrawCardRes message. Also converts values to other types if specified.
             * @param message DrawCardRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.DrawCardRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DrawCardRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DrawCardRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DrawCardBroadcast. */
        interface IDrawCardBroadcast {

            /** DrawCardBroadcast playerId */
            playerId?: (number|Long|null);

            /** DrawCardBroadcast userId */
            userId?: (number|Long|null);

            /** DrawCardBroadcast drawnCard */
            drawnCard?: (number|null);

            /** DrawCardBroadcast handCardCount */
            handCardCount?: (number|null);
        }

        /** Represents a DrawCardBroadcast. */
        class DrawCardBroadcast implements IDrawCardBroadcast {

            /**
             * Constructs a new DrawCardBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IDrawCardBroadcast);

            /** DrawCardBroadcast playerId. */
            public playerId: (number|Long);

            /** DrawCardBroadcast userId. */
            public userId: (number|Long);

            /** DrawCardBroadcast drawnCard. */
            public drawnCard: number;

            /** DrawCardBroadcast handCardCount. */
            public handCardCount: number;

            /**
             * Creates a new DrawCardBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DrawCardBroadcast instance
             */
            public static create(properties?: tongits.v1.IDrawCardBroadcast): tongits.v1.DrawCardBroadcast;

            /**
             * Encodes the specified DrawCardBroadcast message. Does not implicitly {@link tongits.v1.DrawCardBroadcast.verify|verify} messages.
             * @param message DrawCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IDrawCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DrawCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.DrawCardBroadcast.verify|verify} messages.
             * @param message DrawCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IDrawCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DrawCardBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DrawCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.DrawCardBroadcast;

            /**
             * Decodes a DrawCardBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DrawCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.DrawCardBroadcast;

            /**
             * Verifies a DrawCardBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DrawCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DrawCardBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.DrawCardBroadcast;

            /**
             * Creates a plain object from a DrawCardBroadcast message. Also converts values to other types if specified.
             * @param message DrawCardBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.DrawCardBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DrawCardBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DrawCardBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MeldCardReq. */
        interface IMeldCardReq {

            /** MeldCardReq cards */
            cards?: (number[]|null);
        }

        /** Represents a MeldCardReq. */
        class MeldCardReq implements IMeldCardReq {

            /**
             * Constructs a new MeldCardReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IMeldCardReq);

            /** MeldCardReq cards. */
            public cards: number[];

            /**
             * Creates a new MeldCardReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MeldCardReq instance
             */
            public static create(properties?: tongits.v1.IMeldCardReq): tongits.v1.MeldCardReq;

            /**
             * Encodes the specified MeldCardReq message. Does not implicitly {@link tongits.v1.MeldCardReq.verify|verify} messages.
             * @param message MeldCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IMeldCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MeldCardReq message, length delimited. Does not implicitly {@link tongits.v1.MeldCardReq.verify|verify} messages.
             * @param message MeldCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IMeldCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MeldCardReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MeldCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.MeldCardReq;

            /**
             * Decodes a MeldCardReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MeldCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.MeldCardReq;

            /**
             * Verifies a MeldCardReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MeldCardReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MeldCardReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.MeldCardReq;

            /**
             * Creates a plain object from a MeldCardReq message. Also converts values to other types if specified.
             * @param message MeldCardReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.MeldCardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MeldCardReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MeldCardReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MeldCardRes. */
        interface IMeldCardRes {

            /** MeldCardRes newMeld */
            newMeld?: (tongits.v1.IMeld|null);

            /** MeldCardRes hasTongits */
            hasTongits?: (boolean|null);

            /** MeldCardRes handCardCount */
            handCardCount?: (number|null);
        }

        /** Represents a MeldCardRes. */
        class MeldCardRes implements IMeldCardRes {

            /**
             * Constructs a new MeldCardRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IMeldCardRes);

            /** MeldCardRes newMeld. */
            public newMeld?: (tongits.v1.IMeld|null);

            /** MeldCardRes hasTongits. */
            public hasTongits: boolean;

            /** MeldCardRes handCardCount. */
            public handCardCount: number;

            /**
             * Creates a new MeldCardRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MeldCardRes instance
             */
            public static create(properties?: tongits.v1.IMeldCardRes): tongits.v1.MeldCardRes;

            /**
             * Encodes the specified MeldCardRes message. Does not implicitly {@link tongits.v1.MeldCardRes.verify|verify} messages.
             * @param message MeldCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IMeldCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MeldCardRes message, length delimited. Does not implicitly {@link tongits.v1.MeldCardRes.verify|verify} messages.
             * @param message MeldCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IMeldCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MeldCardRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MeldCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.MeldCardRes;

            /**
             * Decodes a MeldCardRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MeldCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.MeldCardRes;

            /**
             * Verifies a MeldCardRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MeldCardRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MeldCardRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.MeldCardRes;

            /**
             * Creates a plain object from a MeldCardRes message. Also converts values to other types if specified.
             * @param message MeldCardRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.MeldCardRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MeldCardRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MeldCardRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MeldCardBroadcast. */
        interface IMeldCardBroadcast {

            /** MeldCardBroadcast playerId */
            playerId?: (number|Long|null);

            /** MeldCardBroadcast newMeld */
            newMeld?: (tongits.v1.IMeld|null);

            /** MeldCardBroadcast handCardCount */
            handCardCount?: (number|null);

            /** MeldCardBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a MeldCardBroadcast. */
        class MeldCardBroadcast implements IMeldCardBroadcast {

            /**
             * Constructs a new MeldCardBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IMeldCardBroadcast);

            /** MeldCardBroadcast playerId. */
            public playerId: (number|Long);

            /** MeldCardBroadcast newMeld. */
            public newMeld?: (tongits.v1.IMeld|null);

            /** MeldCardBroadcast handCardCount. */
            public handCardCount: number;

            /** MeldCardBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new MeldCardBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MeldCardBroadcast instance
             */
            public static create(properties?: tongits.v1.IMeldCardBroadcast): tongits.v1.MeldCardBroadcast;

            /**
             * Encodes the specified MeldCardBroadcast message. Does not implicitly {@link tongits.v1.MeldCardBroadcast.verify|verify} messages.
             * @param message MeldCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IMeldCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MeldCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.MeldCardBroadcast.verify|verify} messages.
             * @param message MeldCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IMeldCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MeldCardBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MeldCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.MeldCardBroadcast;

            /**
             * Decodes a MeldCardBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MeldCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.MeldCardBroadcast;

            /**
             * Verifies a MeldCardBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MeldCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MeldCardBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.MeldCardBroadcast;

            /**
             * Creates a plain object from a MeldCardBroadcast message. Also converts values to other types if specified.
             * @param message MeldCardBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.MeldCardBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MeldCardBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MeldCardBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LayOffCardReq. */
        interface ILayOffCardReq {

            /** LayOffCardReq card */
            card?: (number|null);

            /** LayOffCardReq targetPlayerId */
            targetPlayerId?: (number|Long|null);

            /** LayOffCardReq targetMeldId */
            targetMeldId?: (number|null);
        }

        /** Represents a LayOffCardReq. */
        class LayOffCardReq implements ILayOffCardReq {

            /**
             * Constructs a new LayOffCardReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ILayOffCardReq);

            /** LayOffCardReq card. */
            public card: number;

            /** LayOffCardReq targetPlayerId. */
            public targetPlayerId: (number|Long);

            /** LayOffCardReq targetMeldId. */
            public targetMeldId: number;

            /**
             * Creates a new LayOffCardReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LayOffCardReq instance
             */
            public static create(properties?: tongits.v1.ILayOffCardReq): tongits.v1.LayOffCardReq;

            /**
             * Encodes the specified LayOffCardReq message. Does not implicitly {@link tongits.v1.LayOffCardReq.verify|verify} messages.
             * @param message LayOffCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ILayOffCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LayOffCardReq message, length delimited. Does not implicitly {@link tongits.v1.LayOffCardReq.verify|verify} messages.
             * @param message LayOffCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ILayOffCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LayOffCardReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LayOffCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.LayOffCardReq;

            /**
             * Decodes a LayOffCardReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LayOffCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.LayOffCardReq;

            /**
             * Verifies a LayOffCardReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LayOffCardReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LayOffCardReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.LayOffCardReq;

            /**
             * Creates a plain object from a LayOffCardReq message. Also converts values to other types if specified.
             * @param message LayOffCardReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.LayOffCardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LayOffCardReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LayOffCardReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LayOffCardRes. */
        interface ILayOffCardRes {

            /** LayOffCardRes cardAdded */
            cardAdded?: (number|null);

            /** LayOffCardRes targetPlayerId */
            targetPlayerId?: (number|Long|null);

            /** LayOffCardRes targetMeldId */
            targetMeldId?: (number|null);

            /** LayOffCardRes hasTongits */
            hasTongits?: (boolean|null);

            /** LayOffCardRes handCardCount */
            handCardCount?: (number|null);
        }

        /** Represents a LayOffCardRes. */
        class LayOffCardRes implements ILayOffCardRes {

            /**
             * Constructs a new LayOffCardRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ILayOffCardRes);

            /** LayOffCardRes cardAdded. */
            public cardAdded: number;

            /** LayOffCardRes targetPlayerId. */
            public targetPlayerId: (number|Long);

            /** LayOffCardRes targetMeldId. */
            public targetMeldId: number;

            /** LayOffCardRes hasTongits. */
            public hasTongits: boolean;

            /** LayOffCardRes handCardCount. */
            public handCardCount: number;

            /**
             * Creates a new LayOffCardRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LayOffCardRes instance
             */
            public static create(properties?: tongits.v1.ILayOffCardRes): tongits.v1.LayOffCardRes;

            /**
             * Encodes the specified LayOffCardRes message. Does not implicitly {@link tongits.v1.LayOffCardRes.verify|verify} messages.
             * @param message LayOffCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ILayOffCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LayOffCardRes message, length delimited. Does not implicitly {@link tongits.v1.LayOffCardRes.verify|verify} messages.
             * @param message LayOffCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ILayOffCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LayOffCardRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LayOffCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.LayOffCardRes;

            /**
             * Decodes a LayOffCardRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LayOffCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.LayOffCardRes;

            /**
             * Verifies a LayOffCardRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LayOffCardRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LayOffCardRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.LayOffCardRes;

            /**
             * Creates a plain object from a LayOffCardRes message. Also converts values to other types if specified.
             * @param message LayOffCardRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.LayOffCardRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LayOffCardRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LayOffCardRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LayOffCardBroadcast. */
        interface ILayOffCardBroadcast {

            /** LayOffCardBroadcast actionPlayerId */
            actionPlayerId?: (number|Long|null);

            /** LayOffCardBroadcast cardAdded */
            cardAdded?: (number|null);

            /** LayOffCardBroadcast targetPlayerId */
            targetPlayerId?: (number|Long|null);

            /** LayOffCardBroadcast targetMeldId */
            targetMeldId?: (number|null);

            /** LayOffCardBroadcast handCardCount */
            handCardCount?: (number|null);

            /** LayOffCardBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a LayOffCardBroadcast. */
        class LayOffCardBroadcast implements ILayOffCardBroadcast {

            /**
             * Constructs a new LayOffCardBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ILayOffCardBroadcast);

            /** LayOffCardBroadcast actionPlayerId. */
            public actionPlayerId: (number|Long);

            /** LayOffCardBroadcast cardAdded. */
            public cardAdded: number;

            /** LayOffCardBroadcast targetPlayerId. */
            public targetPlayerId: (number|Long);

            /** LayOffCardBroadcast targetMeldId. */
            public targetMeldId: number;

            /** LayOffCardBroadcast handCardCount. */
            public handCardCount: number;

            /** LayOffCardBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new LayOffCardBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LayOffCardBroadcast instance
             */
            public static create(properties?: tongits.v1.ILayOffCardBroadcast): tongits.v1.LayOffCardBroadcast;

            /**
             * Encodes the specified LayOffCardBroadcast message. Does not implicitly {@link tongits.v1.LayOffCardBroadcast.verify|verify} messages.
             * @param message LayOffCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ILayOffCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LayOffCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.LayOffCardBroadcast.verify|verify} messages.
             * @param message LayOffCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ILayOffCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LayOffCardBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LayOffCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.LayOffCardBroadcast;

            /**
             * Decodes a LayOffCardBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LayOffCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.LayOffCardBroadcast;

            /**
             * Verifies a LayOffCardBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LayOffCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LayOffCardBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.LayOffCardBroadcast;

            /**
             * Creates a plain object from a LayOffCardBroadcast message. Also converts values to other types if specified.
             * @param message LayOffCardBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.LayOffCardBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LayOffCardBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LayOffCardBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DiscardCardReq. */
        interface IDiscardCardReq {

            /** DiscardCardReq card */
            card?: (number|null);
        }

        /** Represents a DiscardCardReq. */
        class DiscardCardReq implements IDiscardCardReq {

            /**
             * Constructs a new DiscardCardReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IDiscardCardReq);

            /** DiscardCardReq card. */
            public card: number;

            /**
             * Creates a new DiscardCardReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscardCardReq instance
             */
            public static create(properties?: tongits.v1.IDiscardCardReq): tongits.v1.DiscardCardReq;

            /**
             * Encodes the specified DiscardCardReq message. Does not implicitly {@link tongits.v1.DiscardCardReq.verify|verify} messages.
             * @param message DiscardCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IDiscardCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscardCardReq message, length delimited. Does not implicitly {@link tongits.v1.DiscardCardReq.verify|verify} messages.
             * @param message DiscardCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IDiscardCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscardCardReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscardCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.DiscardCardReq;

            /**
             * Decodes a DiscardCardReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscardCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.DiscardCardReq;

            /**
             * Verifies a DiscardCardReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscardCardReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscardCardReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.DiscardCardReq;

            /**
             * Creates a plain object from a DiscardCardReq message. Also converts values to other types if specified.
             * @param message DiscardCardReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.DiscardCardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscardCardReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DiscardCardReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DiscardCardRes. */
        interface IDiscardCardRes {

            /** DiscardCardRes discardedCard */
            discardedCard?: (number|null);

            /** DiscardCardRes unlockMelds */
            unlockMelds?: (number[]|null);

            /** DiscardCardRes handCardCount */
            handCardCount?: (number|null);

            /** DiscardCardRes discardPile */
            discardPile?: (number[]|null);
        }

        /** Represents a DiscardCardRes. */
        class DiscardCardRes implements IDiscardCardRes {

            /**
             * Constructs a new DiscardCardRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IDiscardCardRes);

            /** DiscardCardRes discardedCard. */
            public discardedCard: number;

            /** DiscardCardRes unlockMelds. */
            public unlockMelds: number[];

            /** DiscardCardRes handCardCount. */
            public handCardCount: number;

            /** DiscardCardRes discardPile. */
            public discardPile: number[];

            /**
             * Creates a new DiscardCardRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscardCardRes instance
             */
            public static create(properties?: tongits.v1.IDiscardCardRes): tongits.v1.DiscardCardRes;

            /**
             * Encodes the specified DiscardCardRes message. Does not implicitly {@link tongits.v1.DiscardCardRes.verify|verify} messages.
             * @param message DiscardCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IDiscardCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscardCardRes message, length delimited. Does not implicitly {@link tongits.v1.DiscardCardRes.verify|verify} messages.
             * @param message DiscardCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IDiscardCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscardCardRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscardCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.DiscardCardRes;

            /**
             * Decodes a DiscardCardRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscardCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.DiscardCardRes;

            /**
             * Verifies a DiscardCardRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscardCardRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscardCardRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.DiscardCardRes;

            /**
             * Creates a plain object from a DiscardCardRes message. Also converts values to other types if specified.
             * @param message DiscardCardRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.DiscardCardRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscardCardRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DiscardCardRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DiscardCardBroadcast. */
        interface IDiscardCardBroadcast {

            /** DiscardCardBroadcast playerId */
            playerId?: (number|Long|null);

            /** DiscardCardBroadcast discardedCard */
            discardedCard?: (number|null);

            /** DiscardCardBroadcast unlockMelds */
            unlockMelds?: (number[]|null);

            /** DiscardCardBroadcast handCardCount */
            handCardCount?: (number|null);

            /** DiscardCardBroadcast discardPile */
            discardPile?: (number[]|null);

            /** DiscardCardBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a DiscardCardBroadcast. */
        class DiscardCardBroadcast implements IDiscardCardBroadcast {

            /**
             * Constructs a new DiscardCardBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IDiscardCardBroadcast);

            /** DiscardCardBroadcast playerId. */
            public playerId: (number|Long);

            /** DiscardCardBroadcast discardedCard. */
            public discardedCard: number;

            /** DiscardCardBroadcast unlockMelds. */
            public unlockMelds: number[];

            /** DiscardCardBroadcast handCardCount. */
            public handCardCount: number;

            /** DiscardCardBroadcast discardPile. */
            public discardPile: number[];

            /** DiscardCardBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new DiscardCardBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscardCardBroadcast instance
             */
            public static create(properties?: tongits.v1.IDiscardCardBroadcast): tongits.v1.DiscardCardBroadcast;

            /**
             * Encodes the specified DiscardCardBroadcast message. Does not implicitly {@link tongits.v1.DiscardCardBroadcast.verify|verify} messages.
             * @param message DiscardCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IDiscardCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscardCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.DiscardCardBroadcast.verify|verify} messages.
             * @param message DiscardCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IDiscardCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscardCardBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscardCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.DiscardCardBroadcast;

            /**
             * Decodes a DiscardCardBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscardCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.DiscardCardBroadcast;

            /**
             * Verifies a DiscardCardBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscardCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscardCardBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.DiscardCardBroadcast;

            /**
             * Creates a plain object from a DiscardCardBroadcast message. Also converts values to other types if specified.
             * @param message DiscardCardBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.DiscardCardBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscardCardBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DiscardCardBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TakeCardReq. */
        interface ITakeCardReq {

            /** TakeCardReq cardsFromHand */
            cardsFromHand?: (number[]|null);
        }

        /** Represents a TakeCardReq. */
        class TakeCardReq implements ITakeCardReq {

            /**
             * Constructs a new TakeCardReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITakeCardReq);

            /** TakeCardReq cardsFromHand. */
            public cardsFromHand: number[];

            /**
             * Creates a new TakeCardReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TakeCardReq instance
             */
            public static create(properties?: tongits.v1.ITakeCardReq): tongits.v1.TakeCardReq;

            /**
             * Encodes the specified TakeCardReq message. Does not implicitly {@link tongits.v1.TakeCardReq.verify|verify} messages.
             * @param message TakeCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITakeCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TakeCardReq message, length delimited. Does not implicitly {@link tongits.v1.TakeCardReq.verify|verify} messages.
             * @param message TakeCardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITakeCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TakeCardReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TakeCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TakeCardReq;

            /**
             * Decodes a TakeCardReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TakeCardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TakeCardReq;

            /**
             * Verifies a TakeCardReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TakeCardReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TakeCardReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TakeCardReq;

            /**
             * Creates a plain object from a TakeCardReq message. Also converts values to other types if specified.
             * @param message TakeCardReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TakeCardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TakeCardReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TakeCardReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TakeCardRes. */
        interface ITakeCardRes {

            /** TakeCardRes newMeld */
            newMeld?: (tongits.v1.IMeld|null);

            /** TakeCardRes hasTongits */
            hasTongits?: (boolean|null);

            /** TakeCardRes handCardCount */
            handCardCount?: (number|null);

            /** TakeCardRes discard */
            discard?: (number|null);
        }

        /** Represents a TakeCardRes. */
        class TakeCardRes implements ITakeCardRes {

            /**
             * Constructs a new TakeCardRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITakeCardRes);

            /** TakeCardRes newMeld. */
            public newMeld?: (tongits.v1.IMeld|null);

            /** TakeCardRes hasTongits. */
            public hasTongits: boolean;

            /** TakeCardRes handCardCount. */
            public handCardCount: number;

            /** TakeCardRes discard. */
            public discard: number;

            /**
             * Creates a new TakeCardRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TakeCardRes instance
             */
            public static create(properties?: tongits.v1.ITakeCardRes): tongits.v1.TakeCardRes;

            /**
             * Encodes the specified TakeCardRes message. Does not implicitly {@link tongits.v1.TakeCardRes.verify|verify} messages.
             * @param message TakeCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITakeCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TakeCardRes message, length delimited. Does not implicitly {@link tongits.v1.TakeCardRes.verify|verify} messages.
             * @param message TakeCardRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITakeCardRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TakeCardRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TakeCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TakeCardRes;

            /**
             * Decodes a TakeCardRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TakeCardRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TakeCardRes;

            /**
             * Verifies a TakeCardRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TakeCardRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TakeCardRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TakeCardRes;

            /**
             * Creates a plain object from a TakeCardRes message. Also converts values to other types if specified.
             * @param message TakeCardRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TakeCardRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TakeCardRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TakeCardRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TakeCardBroadcast. */
        interface ITakeCardBroadcast {

            /** TakeCardBroadcast playerId */
            playerId?: (number|Long|null);

            /** TakeCardBroadcast newMeld */
            newMeld?: (tongits.v1.IMeld|null);

            /** TakeCardBroadcast handCardCount */
            handCardCount?: (number|null);

            /** TakeCardBroadcast discard */
            discard?: (number|null);

            /** TakeCardBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a TakeCardBroadcast. */
        class TakeCardBroadcast implements ITakeCardBroadcast {

            /**
             * Constructs a new TakeCardBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITakeCardBroadcast);

            /** TakeCardBroadcast playerId. */
            public playerId: (number|Long);

            /** TakeCardBroadcast newMeld. */
            public newMeld?: (tongits.v1.IMeld|null);

            /** TakeCardBroadcast handCardCount. */
            public handCardCount: number;

            /** TakeCardBroadcast discard. */
            public discard: number;

            /** TakeCardBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new TakeCardBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TakeCardBroadcast instance
             */
            public static create(properties?: tongits.v1.ITakeCardBroadcast): tongits.v1.TakeCardBroadcast;

            /**
             * Encodes the specified TakeCardBroadcast message. Does not implicitly {@link tongits.v1.TakeCardBroadcast.verify|verify} messages.
             * @param message TakeCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITakeCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TakeCardBroadcast message, length delimited. Does not implicitly {@link tongits.v1.TakeCardBroadcast.verify|verify} messages.
             * @param message TakeCardBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITakeCardBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TakeCardBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TakeCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TakeCardBroadcast;

            /**
             * Decodes a TakeCardBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TakeCardBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TakeCardBroadcast;

            /**
             * Verifies a TakeCardBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TakeCardBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TakeCardBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TakeCardBroadcast;

            /**
             * Creates a plain object from a TakeCardBroadcast message. Also converts values to other types if specified.
             * @param message TakeCardBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TakeCardBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TakeCardBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TakeCardBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChallengeReq. */
        interface IChallengeReq {

            /** ChallengeReq changeStatus */
            changeStatus?: (number|null);
        }

        /** Represents a ChallengeReq. */
        class ChallengeReq implements IChallengeReq {

            /**
             * Constructs a new ChallengeReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IChallengeReq);

            /** ChallengeReq changeStatus. */
            public changeStatus: number;

            /**
             * Creates a new ChallengeReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChallengeReq instance
             */
            public static create(properties?: tongits.v1.IChallengeReq): tongits.v1.ChallengeReq;

            /**
             * Encodes the specified ChallengeReq message. Does not implicitly {@link tongits.v1.ChallengeReq.verify|verify} messages.
             * @param message ChallengeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IChallengeReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChallengeReq message, length delimited. Does not implicitly {@link tongits.v1.ChallengeReq.verify|verify} messages.
             * @param message ChallengeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IChallengeReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChallengeReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChallengeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.ChallengeReq;

            /**
             * Decodes a ChallengeReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChallengeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.ChallengeReq;

            /**
             * Verifies a ChallengeReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChallengeReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChallengeReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.ChallengeReq;

            /**
             * Creates a plain object from a ChallengeReq message. Also converts values to other types if specified.
             * @param message ChallengeReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.ChallengeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChallengeReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChallengeReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChallengeRes. */
        interface IChallengeRes {

            /** ChallengeRes basePlayers */
            basePlayers?: (tongits.v1.ITongitsBasePlayerInfo[]|null);
        }

        /** Represents a ChallengeRes. */
        class ChallengeRes implements IChallengeRes {

            /**
             * Constructs a new ChallengeRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IChallengeRes);

            /** ChallengeRes basePlayers. */
            public basePlayers: tongits.v1.ITongitsBasePlayerInfo[];

            /**
             * Creates a new ChallengeRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChallengeRes instance
             */
            public static create(properties?: tongits.v1.IChallengeRes): tongits.v1.ChallengeRes;

            /**
             * Encodes the specified ChallengeRes message. Does not implicitly {@link tongits.v1.ChallengeRes.verify|verify} messages.
             * @param message ChallengeRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IChallengeRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChallengeRes message, length delimited. Does not implicitly {@link tongits.v1.ChallengeRes.verify|verify} messages.
             * @param message ChallengeRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IChallengeRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChallengeRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChallengeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.ChallengeRes;

            /**
             * Decodes a ChallengeRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChallengeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.ChallengeRes;

            /**
             * Verifies a ChallengeRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChallengeRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChallengeRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.ChallengeRes;

            /**
             * Creates a plain object from a ChallengeRes message. Also converts values to other types if specified.
             * @param message ChallengeRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.ChallengeRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChallengeRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChallengeRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChallengeBroadcast. */
        interface IChallengeBroadcast {

            /** ChallengeBroadcast playerId */
            playerId?: (number|Long|null);

            /** ChallengeBroadcast basePlayers */
            basePlayers?: (tongits.v1.ITongitsBasePlayerInfo[]|null);

            /** ChallengeBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a ChallengeBroadcast. */
        class ChallengeBroadcast implements IChallengeBroadcast {

            /**
             * Constructs a new ChallengeBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IChallengeBroadcast);

            /** ChallengeBroadcast playerId. */
            public playerId: (number|Long);

            /** ChallengeBroadcast basePlayers. */
            public basePlayers: tongits.v1.ITongitsBasePlayerInfo[];

            /** ChallengeBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new ChallengeBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChallengeBroadcast instance
             */
            public static create(properties?: tongits.v1.IChallengeBroadcast): tongits.v1.ChallengeBroadcast;

            /**
             * Encodes the specified ChallengeBroadcast message. Does not implicitly {@link tongits.v1.ChallengeBroadcast.verify|verify} messages.
             * @param message ChallengeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IChallengeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChallengeBroadcast message, length delimited. Does not implicitly {@link tongits.v1.ChallengeBroadcast.verify|verify} messages.
             * @param message ChallengeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IChallengeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChallengeBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChallengeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.ChallengeBroadcast;

            /**
             * Decodes a ChallengeBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChallengeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.ChallengeBroadcast;

            /**
             * Verifies a ChallengeBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChallengeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChallengeBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.ChallengeBroadcast;

            /**
             * Creates a plain object from a ChallengeBroadcast message. Also converts values to other types if specified.
             * @param message ChallengeBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.ChallengeBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChallengeBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChallengeBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PKBroadcast. */
        interface IPKBroadcast {

            /** PKBroadcast playerId */
            playerId?: (number|Long|null);

            /** PKBroadcast changeStatus */
            changeStatus?: (number|null);

            /** PKBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a PKBroadcast. */
        class PKBroadcast implements IPKBroadcast {

            /**
             * Constructs a new PKBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IPKBroadcast);

            /** PKBroadcast playerId. */
            public playerId: (number|Long);

            /** PKBroadcast changeStatus. */
            public changeStatus: number;

            /** PKBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new PKBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PKBroadcast instance
             */
            public static create(properties?: tongits.v1.IPKBroadcast): tongits.v1.PKBroadcast;

            /**
             * Encodes the specified PKBroadcast message. Does not implicitly {@link tongits.v1.PKBroadcast.verify|verify} messages.
             * @param message PKBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IPKBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PKBroadcast message, length delimited. Does not implicitly {@link tongits.v1.PKBroadcast.verify|verify} messages.
             * @param message PKBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IPKBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PKBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PKBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.PKBroadcast;

            /**
             * Decodes a PKBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PKBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.PKBroadcast;

            /**
             * Verifies a PKBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PKBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PKBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.PKBroadcast;

            /**
             * Creates a plain object from a PKBroadcast message. Also converts values to other types if specified.
             * @param message PKBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.PKBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PKBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PKBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameResultBroadcast. */
        interface IGameResultBroadcast {

            /** GameResultBroadcast winnerId */
            winnerId?: (number|Long|null);

            /** GameResultBroadcast playerResults */
            playerResults?: (tongits.v1.IPlayerResult[]|null);

            /** GameResultBroadcast countdown */
            countdown?: (number|null);

            /** GameResultBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a GameResultBroadcast. */
        class GameResultBroadcast implements IGameResultBroadcast {

            /**
             * Constructs a new GameResultBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IGameResultBroadcast);

            /** GameResultBroadcast winnerId. */
            public winnerId: (number|Long);

            /** GameResultBroadcast playerResults. */
            public playerResults: tongits.v1.IPlayerResult[];

            /** GameResultBroadcast countdown. */
            public countdown: number;

            /** GameResultBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new GameResultBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameResultBroadcast instance
             */
            public static create(properties?: tongits.v1.IGameResultBroadcast): tongits.v1.GameResultBroadcast;

            /**
             * Encodes the specified GameResultBroadcast message. Does not implicitly {@link tongits.v1.GameResultBroadcast.verify|verify} messages.
             * @param message GameResultBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IGameResultBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameResultBroadcast message, length delimited. Does not implicitly {@link tongits.v1.GameResultBroadcast.verify|verify} messages.
             * @param message GameResultBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IGameResultBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameResultBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.GameResultBroadcast;

            /**
             * Decodes a GameResultBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.GameResultBroadcast;

            /**
             * Verifies a GameResultBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameResultBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameResultBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.GameResultBroadcast;

            /**
             * Creates a plain object from a GameResultBroadcast message. Also converts values to other types if specified.
             * @param message GameResultBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.GameResultBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameResultBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameResultBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RoomResetBroadcast. */
        interface IRoomResetBroadcast {

            /** RoomResetBroadcast players */
            players?: (tongits.v1.ITongitsPlayerInfo[]|null);

            /** RoomResetBroadcast self */
            self?: (tongits.v1.ITongitsPlayerInfo|null);

            /** RoomResetBroadcast gameInfo */
            gameInfo?: (tongits.v1.IGameInfo|null);

            /** RoomResetBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a RoomResetBroadcast. */
        class RoomResetBroadcast implements IRoomResetBroadcast {

            /**
             * Constructs a new RoomResetBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IRoomResetBroadcast);

            /** RoomResetBroadcast players. */
            public players: tongits.v1.ITongitsPlayerInfo[];

            /** RoomResetBroadcast self. */
            public self?: (tongits.v1.ITongitsPlayerInfo|null);

            /** RoomResetBroadcast gameInfo. */
            public gameInfo?: (tongits.v1.IGameInfo|null);

            /** RoomResetBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new RoomResetBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoomResetBroadcast instance
             */
            public static create(properties?: tongits.v1.IRoomResetBroadcast): tongits.v1.RoomResetBroadcast;

            /**
             * Encodes the specified RoomResetBroadcast message. Does not implicitly {@link tongits.v1.RoomResetBroadcast.verify|verify} messages.
             * @param message RoomResetBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IRoomResetBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoomResetBroadcast message, length delimited. Does not implicitly {@link tongits.v1.RoomResetBroadcast.verify|verify} messages.
             * @param message RoomResetBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IRoomResetBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoomResetBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoomResetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.RoomResetBroadcast;

            /**
             * Decodes a RoomResetBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoomResetBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.RoomResetBroadcast;

            /**
             * Verifies a RoomResetBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoomResetBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoomResetBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.RoomResetBroadcast;

            /**
             * Creates a plain object from a RoomResetBroadcast message. Also converts values to other types if specified.
             * @param message RoomResetBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.RoomResetBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoomResetBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoomResetBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ActionChangeBroadcast. */
        interface IActionChangeBroadcast {

            /** ActionChangeBroadcast actionPlayerId */
            actionPlayerId?: (number|Long|null);

            /** ActionChangeBroadcast countdown */
            countdown?: (number|null);

            /** ActionChangeBroadcast isFight */
            isFight?: (boolean|null);

            /** ActionChangeBroadcast status */
            status?: (number|null);

            /** ActionChangeBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents an ActionChangeBroadcast. */
        class ActionChangeBroadcast implements IActionChangeBroadcast {

            /**
             * Constructs a new ActionChangeBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IActionChangeBroadcast);

            /** ActionChangeBroadcast actionPlayerId. */
            public actionPlayerId: (number|Long);

            /** ActionChangeBroadcast countdown. */
            public countdown: number;

            /** ActionChangeBroadcast isFight. */
            public isFight: boolean;

            /** ActionChangeBroadcast status. */
            public status: number;

            /** ActionChangeBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new ActionChangeBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActionChangeBroadcast instance
             */
            public static create(properties?: tongits.v1.IActionChangeBroadcast): tongits.v1.ActionChangeBroadcast;

            /**
             * Encodes the specified ActionChangeBroadcast message. Does not implicitly {@link tongits.v1.ActionChangeBroadcast.verify|verify} messages.
             * @param message ActionChangeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IActionChangeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActionChangeBroadcast message, length delimited. Does not implicitly {@link tongits.v1.ActionChangeBroadcast.verify|verify} messages.
             * @param message ActionChangeBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IActionChangeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActionChangeBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActionChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.ActionChangeBroadcast;

            /**
             * Decodes an ActionChangeBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActionChangeBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.ActionChangeBroadcast;

            /**
             * Verifies an ActionChangeBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActionChangeBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActionChangeBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.ActionChangeBroadcast;

            /**
             * Creates a plain object from an ActionChangeBroadcast message. Also converts values to other types if specified.
             * @param message ActionChangeBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.ActionChangeBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActionChangeBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ActionChangeBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BeforeResultBroadcast. */
        interface IBeforeResultBroadcast {

            /** BeforeResultBroadcast winnerId */
            winnerId?: (number|Long|null);

            /** BeforeResultBroadcast winType */
            winType?: (number|null);

            /** BeforeResultBroadcast players */
            players?: (tongits.v1.ITongitsPlayerInfo[]|null);

            /** BeforeResultBroadcast countdown */
            countdown?: (number|null);

            /** BeforeResultBroadcast pot */
            pot?: (tongits.v1.IPotInfo|null);

            /** BeforeResultBroadcast userId */
            userId?: (number|Long|null);
        }

        /** Represents a BeforeResultBroadcast. */
        class BeforeResultBroadcast implements IBeforeResultBroadcast {

            /**
             * Constructs a new BeforeResultBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IBeforeResultBroadcast);

            /** BeforeResultBroadcast winnerId. */
            public winnerId: (number|Long);

            /** BeforeResultBroadcast winType. */
            public winType: number;

            /** BeforeResultBroadcast players. */
            public players: tongits.v1.ITongitsPlayerInfo[];

            /** BeforeResultBroadcast countdown. */
            public countdown: number;

            /** BeforeResultBroadcast pot. */
            public pot?: (tongits.v1.IPotInfo|null);

            /** BeforeResultBroadcast userId. */
            public userId: (number|Long);

            /**
             * Creates a new BeforeResultBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BeforeResultBroadcast instance
             */
            public static create(properties?: tongits.v1.IBeforeResultBroadcast): tongits.v1.BeforeResultBroadcast;

            /**
             * Encodes the specified BeforeResultBroadcast message. Does not implicitly {@link tongits.v1.BeforeResultBroadcast.verify|verify} messages.
             * @param message BeforeResultBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IBeforeResultBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BeforeResultBroadcast message, length delimited. Does not implicitly {@link tongits.v1.BeforeResultBroadcast.verify|verify} messages.
             * @param message BeforeResultBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IBeforeResultBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BeforeResultBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BeforeResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.BeforeResultBroadcast;

            /**
             * Decodes a BeforeResultBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BeforeResultBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.BeforeResultBroadcast;

            /**
             * Verifies a BeforeResultBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BeforeResultBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BeforeResultBroadcast
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.BeforeResultBroadcast;

            /**
             * Creates a plain object from a BeforeResultBroadcast message. Also converts values to other types if specified.
             * @param message BeforeResultBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.BeforeResultBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BeforeResultBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BeforeResultBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameResultDetailsReq. */
        interface IGameResultDetailsReq {
        }

        /** Represents a GameResultDetailsReq. */
        class GameResultDetailsReq implements IGameResultDetailsReq {

            /**
             * Constructs a new GameResultDetailsReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IGameResultDetailsReq);

            /**
             * Creates a new GameResultDetailsReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameResultDetailsReq instance
             */
            public static create(properties?: tongits.v1.IGameResultDetailsReq): tongits.v1.GameResultDetailsReq;

            /**
             * Encodes the specified GameResultDetailsReq message. Does not implicitly {@link tongits.v1.GameResultDetailsReq.verify|verify} messages.
             * @param message GameResultDetailsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IGameResultDetailsReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameResultDetailsReq message, length delimited. Does not implicitly {@link tongits.v1.GameResultDetailsReq.verify|verify} messages.
             * @param message GameResultDetailsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IGameResultDetailsReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameResultDetailsReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameResultDetailsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.GameResultDetailsReq;

            /**
             * Decodes a GameResultDetailsReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameResultDetailsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.GameResultDetailsReq;

            /**
             * Verifies a GameResultDetailsReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameResultDetailsReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameResultDetailsReq
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.GameResultDetailsReq;

            /**
             * Creates a plain object from a GameResultDetailsReq message. Also converts values to other types if specified.
             * @param message GameResultDetailsReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.GameResultDetailsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameResultDetailsReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameResultDetailsReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameResultDetailsRes. */
        interface IGameResultDetailsRes {

            /** GameResultDetailsRes winnerId */
            winnerId?: (number|Long|null);

            /** GameResultDetailsRes playerResults */
            playerResults?: (tongits.v1.IPlayerResult[]|null);
        }

        /** Represents a GameResultDetailsRes. */
        class GameResultDetailsRes implements IGameResultDetailsRes {

            /**
             * Constructs a new GameResultDetailsRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IGameResultDetailsRes);

            /** GameResultDetailsRes winnerId. */
            public winnerId: (number|Long);

            /** GameResultDetailsRes playerResults. */
            public playerResults: tongits.v1.IPlayerResult[];

            /**
             * Creates a new GameResultDetailsRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameResultDetailsRes instance
             */
            public static create(properties?: tongits.v1.IGameResultDetailsRes): tongits.v1.GameResultDetailsRes;

            /**
             * Encodes the specified GameResultDetailsRes message. Does not implicitly {@link tongits.v1.GameResultDetailsRes.verify|verify} messages.
             * @param message GameResultDetailsRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IGameResultDetailsRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameResultDetailsRes message, length delimited. Does not implicitly {@link tongits.v1.GameResultDetailsRes.verify|verify} messages.
             * @param message GameResultDetailsRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IGameResultDetailsRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameResultDetailsRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameResultDetailsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.GameResultDetailsRes;

            /**
             * Decodes a GameResultDetailsRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameResultDetailsRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.GameResultDetailsRes;

            /**
             * Verifies a GameResultDetailsRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameResultDetailsRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameResultDetailsRes
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.GameResultDetailsRes;

            /**
             * Creates a plain object from a GameResultDetailsRes message. Also converts values to other types if specified.
             * @param message GameResultDetailsRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.GameResultDetailsRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameResultDetailsRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameResultDetailsRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
            constructor(properties?: tongits.v1.IGetPlayerHistoryReq);

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
            public static create(properties?: tongits.v1.IGetPlayerHistoryReq): tongits.v1.GetPlayerHistoryReq;

            /**
             * Encodes the specified GetPlayerHistoryReq message. Does not implicitly {@link tongits.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @param message GetPlayerHistoryReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IGetPlayerHistoryReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetPlayerHistoryReq message, length delimited. Does not implicitly {@link tongits.v1.GetPlayerHistoryReq.verify|verify} messages.
             * @param message GetPlayerHistoryReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IGetPlayerHistoryReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.GetPlayerHistoryReq;

            /**
             * Decodes a GetPlayerHistoryReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPlayerHistoryReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.GetPlayerHistoryReq;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.GetPlayerHistoryReq;

            /**
             * Creates a plain object from a GetPlayerHistoryReq message. Also converts values to other types if specified.
             * @param message GetPlayerHistoryReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.GetPlayerHistoryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            records?: (tongits.v1.ITongitsHistoryRecord[]|null);
        }

        /** Represents a GetPlayerHistoryRes. */
        class GetPlayerHistoryRes implements IGetPlayerHistoryRes {

            /**
             * Constructs a new GetPlayerHistoryRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.IGetPlayerHistoryRes);

            /** GetPlayerHistoryRes records. */
            public records: tongits.v1.ITongitsHistoryRecord[];

            /**
             * Creates a new GetPlayerHistoryRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetPlayerHistoryRes instance
             */
            public static create(properties?: tongits.v1.IGetPlayerHistoryRes): tongits.v1.GetPlayerHistoryRes;

            /**
             * Encodes the specified GetPlayerHistoryRes message. Does not implicitly {@link tongits.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @param message GetPlayerHistoryRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.IGetPlayerHistoryRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetPlayerHistoryRes message, length delimited. Does not implicitly {@link tongits.v1.GetPlayerHistoryRes.verify|verify} messages.
             * @param message GetPlayerHistoryRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.IGetPlayerHistoryRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.GetPlayerHistoryRes;

            /**
             * Decodes a GetPlayerHistoryRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPlayerHistoryRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.GetPlayerHistoryRes;

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
            public static fromObject(object: { [k: string]: any }): tongits.v1.GetPlayerHistoryRes;

            /**
             * Creates a plain object from a GetPlayerHistoryRes message. Also converts values to other types if specified.
             * @param message GetPlayerHistoryRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.GetPlayerHistoryRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a TongitsHistoryRecord. */
        interface ITongitsHistoryRecord {

            /** TongitsHistoryRecord players */
            players?: (tongits.v1.ITongitsHistoryInfo[]|null);
        }

        /** Represents a TongitsHistoryRecord. */
        class TongitsHistoryRecord implements ITongitsHistoryRecord {

            /**
             * Constructs a new TongitsHistoryRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITongitsHistoryRecord);

            /** TongitsHistoryRecord players. */
            public players: tongits.v1.ITongitsHistoryInfo[];

            /**
             * Creates a new TongitsHistoryRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TongitsHistoryRecord instance
             */
            public static create(properties?: tongits.v1.ITongitsHistoryRecord): tongits.v1.TongitsHistoryRecord;

            /**
             * Encodes the specified TongitsHistoryRecord message. Does not implicitly {@link tongits.v1.TongitsHistoryRecord.verify|verify} messages.
             * @param message TongitsHistoryRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITongitsHistoryRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TongitsHistoryRecord message, length delimited. Does not implicitly {@link tongits.v1.TongitsHistoryRecord.verify|verify} messages.
             * @param message TongitsHistoryRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITongitsHistoryRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TongitsHistoryRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TongitsHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TongitsHistoryRecord;

            /**
             * Decodes a TongitsHistoryRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TongitsHistoryRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TongitsHistoryRecord;

            /**
             * Verifies a TongitsHistoryRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TongitsHistoryRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TongitsHistoryRecord
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TongitsHistoryRecord;

            /**
             * Creates a plain object from a TongitsHistoryRecord message. Also converts values to other types if specified.
             * @param message TongitsHistoryRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TongitsHistoryRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TongitsHistoryRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TongitsHistoryRecord
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TongitsHistoryInfo. */
        interface ITongitsHistoryInfo {

            /** TongitsHistoryInfo gameCode */
            gameCode?: (string|null);

            /** TongitsHistoryInfo endTime */
            endTime?: (number|Long|null);

            /** TongitsHistoryInfo userId */
            userId?: (number|Long|null);

            /** TongitsHistoryInfo nickname */
            nickname?: (string|null);

            /** TongitsHistoryInfo avatar */
            avatar?: (string|null);

            /** TongitsHistoryInfo profit */
            profit?: (number|null);

            /** TongitsHistoryInfo score */
            score?: (number|null);

            /** TongitsHistoryInfo cards */
            cards?: (number[]|null);

            /** TongitsHistoryInfo gameResult */
            gameResult?: (number|null);

            /** TongitsHistoryInfo cost */
            cost?: (number|null);

            /** TongitsHistoryInfo normalReward */
            normalReward?: (number|null);

            /** TongitsHistoryInfo potReward */
            potReward?: (number|null);

            /** TongitsHistoryInfo totalReward */
            totalReward?: (number|null);
        }

        /** Represents a TongitsHistoryInfo. */
        class TongitsHistoryInfo implements ITongitsHistoryInfo {

            /**
             * Constructs a new TongitsHistoryInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tongits.v1.ITongitsHistoryInfo);

            /** TongitsHistoryInfo gameCode. */
            public gameCode: string;

            /** TongitsHistoryInfo endTime. */
            public endTime: (number|Long);

            /** TongitsHistoryInfo userId. */
            public userId: (number|Long);

            /** TongitsHistoryInfo nickname. */
            public nickname: string;

            /** TongitsHistoryInfo avatar. */
            public avatar: string;

            /** TongitsHistoryInfo profit. */
            public profit: number;

            /** TongitsHistoryInfo score. */
            public score: number;

            /** TongitsHistoryInfo cards. */
            public cards: number[];

            /** TongitsHistoryInfo gameResult. */
            public gameResult: number;

            /** TongitsHistoryInfo cost. */
            public cost: number;

            /** TongitsHistoryInfo normalReward. */
            public normalReward: number;

            /** TongitsHistoryInfo potReward. */
            public potReward: number;

            /** TongitsHistoryInfo totalReward. */
            public totalReward: number;

            /**
             * Creates a new TongitsHistoryInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TongitsHistoryInfo instance
             */
            public static create(properties?: tongits.v1.ITongitsHistoryInfo): tongits.v1.TongitsHistoryInfo;

            /**
             * Encodes the specified TongitsHistoryInfo message. Does not implicitly {@link tongits.v1.TongitsHistoryInfo.verify|verify} messages.
             * @param message TongitsHistoryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tongits.v1.ITongitsHistoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TongitsHistoryInfo message, length delimited. Does not implicitly {@link tongits.v1.TongitsHistoryInfo.verify|verify} messages.
             * @param message TongitsHistoryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tongits.v1.ITongitsHistoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TongitsHistoryInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TongitsHistoryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tongits.v1.TongitsHistoryInfo;

            /**
             * Decodes a TongitsHistoryInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TongitsHistoryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tongits.v1.TongitsHistoryInfo;

            /**
             * Verifies a TongitsHistoryInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TongitsHistoryInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TongitsHistoryInfo
             */
            public static fromObject(object: { [k: string]: any }): tongits.v1.TongitsHistoryInfo;

            /**
             * Creates a plain object from a TongitsHistoryInfo message. Also converts values to other types if specified.
             * @param message TongitsHistoryInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tongits.v1.TongitsHistoryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TongitsHistoryInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TongitsHistoryInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
