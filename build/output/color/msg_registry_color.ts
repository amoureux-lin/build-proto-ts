/**
 * 由构建脚本根据 proto 生成，请勿手改。
 */
import type { MessageMapping } from 'db://nexus-framework/index';
import { JoinRoomReq, JoinRoomRes, StartGameReq, StartGameRes, GameStateChangeBroadcast, BetReq, BetRes, BetBroadcast, CancelBetReq, CancelBetRes, CancelBetBroadcast, GetDiceStatsReq, GetDiceStatsRes, GetColorPlayerHistoryReq, GetColorPlayerHistoryRes } from './color';
import { MessageType } from './message_type';

/** 从 Writer 得到 Uint8Array（ts_proto 的 encode 返回 Writer） */
function finish(w: { finish(): Uint8Array }): Uint8Array {
    return w.finish();
}

export const COLOR_MSG_REGISTRY: Record<number, MessageMapping> = {
    [MessageType.COLOR_JOIN_ROOM_REQ]: {
        decode: (buf) => JoinRoomReq.decode(buf),
        encode: (msg) => finish(JoinRoomReq.encode(msg as JoinRoomReq)),
        name: 'JoinRoomReq',
    },
    [MessageType.COLOR_JOIN_ROOM_RES]: {
        decode: (buf) => JoinRoomRes.decode(buf),
        encode: (msg) => finish(JoinRoomRes.encode(msg as JoinRoomRes)),
        name: 'JoinRoomRes',
    },
    [MessageType.COLOR_START_GAME_REQ]: {
        decode: (buf) => StartGameReq.decode(buf),
        encode: (msg) => finish(StartGameReq.encode(msg as StartGameReq)),
        name: 'StartGameReq',
    },
    [MessageType.COLOR_START_GAME_RES]: {
        decode: (buf) => StartGameRes.decode(buf),
        encode: (msg) => finish(StartGameRes.encode(msg as StartGameRes)),
        name: 'StartGameRes',
    },
    [MessageType.COLOR_GAME_STATE_CHANGE_BROADCAST]: {
        decode: (buf) => GameStateChangeBroadcast.decode(buf),
        encode: (msg) => finish(GameStateChangeBroadcast.encode(msg as GameStateChangeBroadcast)),
        name: 'GameStateChangeBroadcast',
    },
    [MessageType.COLOR_PLAYER_BET_REQ]: {
        decode: (buf) => BetReq.decode(buf),
        encode: (msg) => finish(BetReq.encode(msg as BetReq)),
        name: 'BetReq',
    },
    [MessageType.COLOR_PLAYER_BET_RES]: {
        decode: (buf) => BetRes.decode(buf),
        encode: (msg) => finish(BetRes.encode(msg as BetRes)),
        name: 'BetRes',
    },
    [MessageType.COLOR_PLAYER_BET_BROADCAST]: {
        decode: (buf) => BetBroadcast.decode(buf),
        encode: (msg) => finish(BetBroadcast.encode(msg as BetBroadcast)),
        name: 'BetBroadcast',
    },
    [MessageType.COLOR_PLAYER_CANCEL_BET_REQ]: {
        decode: (buf) => CancelBetReq.decode(buf),
        encode: (msg) => finish(CancelBetReq.encode(msg as CancelBetReq)),
        name: 'CancelBetReq',
    },
    [MessageType.COLOR_PLAYER_CANCEL_BET_RES]: {
        decode: (buf) => CancelBetRes.decode(buf),
        encode: (msg) => finish(CancelBetRes.encode(msg as CancelBetRes)),
        name: 'CancelBetRes',
    },
    [MessageType.COLOR_PLAYER_CANCEL_BET_BROADCAST]: {
        decode: (buf) => CancelBetBroadcast.decode(buf),
        encode: (msg) => finish(CancelBetBroadcast.encode(msg as CancelBetBroadcast)),
        name: 'CancelBetBroadcast',
    },
    [MessageType.COLOR_GET_DICE_STATS_REQ]: {
        decode: (buf) => GetDiceStatsReq.decode(buf),
        encode: (msg) => finish(GetDiceStatsReq.encode(msg as GetDiceStatsReq)),
        name: 'GetDiceStatsReq',
    },
    [MessageType.COLOR_GET_DICE_STATS_RES]: {
        decode: (buf) => GetDiceStatsRes.decode(buf),
        encode: (msg) => finish(GetDiceStatsRes.encode(msg as GetDiceStatsRes)),
        name: 'GetDiceStatsRes',
    },
    [MessageType.COLOR_GET_PLAYER_HISTORY_REQ]: {
        decode: (buf) => GetColorPlayerHistoryReq.decode(buf),
        encode: (msg) => finish(GetColorPlayerHistoryReq.encode(msg as GetColorPlayerHistoryReq)),
        name: 'GetColorPlayerHistoryReq',
    },
    [MessageType.COLOR_GET_PLAYER_HISTORY_RES]: {
        decode: (buf) => GetColorPlayerHistoryRes.decode(buf),
        encode: (msg) => finish(GetColorPlayerHistoryRes.encode(msg as GetColorPlayerHistoryRes)),
        name: 'GetColorPlayerHistoryRes',
    },
};
