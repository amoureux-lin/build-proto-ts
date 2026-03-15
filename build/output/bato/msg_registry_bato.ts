/**
 * 由构建脚本根据 proto 生成，请勿手改。
 */
import type { MessageMapping } from 'db://nexus-framework/index';
import { JoinRoomReq, JoinRoomRes, StartGameReq, StartGameRes, SelectCardReq, SelectCardRes, StartGameBroadcast, GameResultBroadcast, RoomResetBroadcast, GameStageChangeBroadcast, SelectCardBroadcast, GetPlayerHistoryReq, GetPlayerHistoryRes } from './bato';
import { MessageType } from './message_type';

/** 从 Writer 得到 Uint8Array（ts_proto 的 encode 返回 Writer） */
function finish(w: { finish(): Uint8Array }): Uint8Array {
    return w.finish();
}

export const BATO_MSG_REGISTRY: Record<number, MessageMapping> = {
    [MessageType.BATO_JOIN_ROOM_REQ]: {
        decode: (buf) => JoinRoomReq.decode(buf),
        encode: (msg) => finish(JoinRoomReq.encode(msg as JoinRoomReq)),
        name: 'JoinRoomReq',
    },
    [MessageType.BATO_JOIN_ROOM_RES]: {
        decode: (buf) => JoinRoomRes.decode(buf),
        encode: (msg) => finish(JoinRoomRes.encode(msg as JoinRoomRes)),
        name: 'JoinRoomRes',
    },
    [MessageType.BATO_ROOM_OWNER_START_GAME_REQ]: {
        decode: (buf) => StartGameReq.decode(buf),
        encode: (msg) => finish(StartGameReq.encode(msg as StartGameReq)),
        name: 'StartGameReq',
    },
    [MessageType.BATO_ROOM_OWNER_START_GAME_RES]: {
        decode: (buf) => StartGameRes.decode(buf),
        encode: (msg) => finish(StartGameRes.encode(msg as StartGameRes)),
        name: 'StartGameRes',
    },
    [MessageType.BATO_SELECT_CARD_REQ]: {
        decode: (buf) => SelectCardReq.decode(buf),
        encode: (msg) => finish(SelectCardReq.encode(msg as SelectCardReq)),
        name: 'SelectCardReq',
    },
    [MessageType.BATO_SELECT_CARD_RES]: {
        decode: (buf) => SelectCardRes.decode(buf),
        encode: (msg) => finish(SelectCardRes.encode(msg as SelectCardRes)),
        name: 'SelectCardRes',
    },
    [MessageType.BATO_START_GAME_BROADCAST]: {
        decode: (buf) => StartGameBroadcast.decode(buf),
        encode: (msg) => finish(StartGameBroadcast.encode(msg as StartGameBroadcast)),
        name: 'StartGameBroadcast',
    },
    [MessageType.BATO_GAME_RESULT_BROADCAST]: {
        decode: (buf) => GameResultBroadcast.decode(buf),
        encode: (msg) => finish(GameResultBroadcast.encode(msg as GameResultBroadcast)),
        name: 'GameResultBroadcast',
    },
    [MessageType.BATO_ROOM_RESET_BROADCAST]: {
        decode: (buf) => RoomResetBroadcast.decode(buf),
        encode: (msg) => finish(RoomResetBroadcast.encode(msg as RoomResetBroadcast)),
        name: 'RoomResetBroadcast',
    },
    [MessageType.BATO_GAME_STAGE_CHANGE_BROADCAST]: {
        decode: (buf) => GameStageChangeBroadcast.decode(buf),
        encode: (msg) => finish(GameStageChangeBroadcast.encode(msg as GameStageChangeBroadcast)),
        name: 'GameStageChangeBroadcast',
    },
    [MessageType.BATO_SELECT_CARD_BROADCAST]: {
        decode: (buf) => SelectCardBroadcast.decode(buf),
        encode: (msg) => finish(SelectCardBroadcast.encode(msg as SelectCardBroadcast)),
        name: 'SelectCardBroadcast',
    },
    [MessageType.BATO_GET_PLAYER_HISTORY_REQ]: {
        decode: (buf) => GetPlayerHistoryReq.decode(buf),
        encode: (msg) => finish(GetPlayerHistoryReq.encode(msg as GetPlayerHistoryReq)),
        name: 'GetPlayerHistoryReq',
    },
    [MessageType.BATO_GET_PLAYER_HISTORY_RES]: {
        decode: (buf) => GetPlayerHistoryRes.decode(buf),
        encode: (msg) => finish(GetPlayerHistoryRes.encode(msg as GetPlayerHistoryRes)),
        name: 'GetPlayerHistoryRes',
    },
};
