/**
 * 由构建脚本根据 proto 生成，请勿手改。
 */
import type { MessageMapping } from 'db://nexus-framework/index';
import { JoinRoomReq, JoinRoomRes, OpenCellReq, OpenCellRes, OpenCellBroadcast, NewBetRatesBroadcast, BagInReq, BagInRes, BagInBroadcast, DeadBroadcast, PrizeBroadcast, EndGameBroadcast, ChangeViewReq, ChangeViewRes, StartGameReq, StartGameRes, StartGameBroadcast, EndGameReq, EndGameRes, GetPlayerHistoryReq, GetPlayerHistoryRes } from './mines';
import { MessageType } from './message_type';

/** 从 Writer 得到 Uint8Array（ts_proto 的 encode 返回 Writer） */
function finish(w: { finish(): Uint8Array }): Uint8Array {
    return w.finish();
}

export const MINES_MSG_REGISTRY: Record<number, MessageMapping> = {
    [MessageType.MINES_JOIN_ROOM_REQ]: {
        decode: (buf) => JoinRoomReq.decode(buf),
        encode: (msg) => finish(JoinRoomReq.encode(msg as JoinRoomReq)),
        name: 'JoinRoomReq',
    },
    [MessageType.MINES_JOIN_ROOM_RES]: {
        decode: (buf) => JoinRoomRes.decode(buf),
        encode: (msg) => finish(JoinRoomRes.encode(msg as JoinRoomRes)),
        name: 'JoinRoomRes',
    },
    [MessageType.MINES_OPEN_CELL_REQ]: {
        decode: (buf) => OpenCellReq.decode(buf),
        encode: (msg) => finish(OpenCellReq.encode(msg as OpenCellReq)),
        name: 'OpenCellReq',
    },
    [MessageType.MINES_OPEN_CELL_RES]: {
        decode: (buf) => OpenCellRes.decode(buf),
        encode: (msg) => finish(OpenCellRes.encode(msg as OpenCellRes)),
        name: 'OpenCellRes',
    },
    [MessageType.MINES_OPEN_CELL_BROADCAST]: {
        decode: (buf) => OpenCellBroadcast.decode(buf),
        encode: (msg) => finish(OpenCellBroadcast.encode(msg as OpenCellBroadcast)),
        name: 'OpenCellBroadcast',
    },
    [MessageType.MINES_NEW_BET_RATES_BROADCAST]: {
        decode: (buf) => NewBetRatesBroadcast.decode(buf),
        encode: (msg) => finish(NewBetRatesBroadcast.encode(msg as NewBetRatesBroadcast)),
        name: 'NewBetRatesBroadcast',
    },
    [MessageType.MINES_BAG_IN_REQ]: {
        decode: (buf) => BagInReq.decode(buf),
        encode: (msg) => finish(BagInReq.encode(msg as BagInReq)),
        name: 'BagInReq',
    },
    [MessageType.MINES_BAG_IN_RES]: {
        decode: (buf) => BagInRes.decode(buf),
        encode: (msg) => finish(BagInRes.encode(msg as BagInRes)),
        name: 'BagInRes',
    },
    [MessageType.MINES_BAG_IN_BROADCAST]: {
        decode: (buf) => BagInBroadcast.decode(buf),
        encode: (msg) => finish(BagInBroadcast.encode(msg as BagInBroadcast)),
        name: 'BagInBroadcast',
    },
    [MessageType.MINES_DEAD_BROADCAST]: {
        decode: (buf) => DeadBroadcast.decode(buf),
        encode: (msg) => finish(DeadBroadcast.encode(msg as DeadBroadcast)),
        name: 'DeadBroadcast',
    },
    [MessageType.MINES_PRIZE_BROADCAST]: {
        decode: (buf) => PrizeBroadcast.decode(buf),
        encode: (msg) => finish(PrizeBroadcast.encode(msg as PrizeBroadcast)),
        name: 'PrizeBroadcast',
    },
    [MessageType.MINES_END_GAME_BROADCAST]: {
        decode: (buf) => EndGameBroadcast.decode(buf),
        encode: (msg) => finish(EndGameBroadcast.encode(msg as EndGameBroadcast)),
        name: 'EndGameBroadcast',
    },
    [MessageType.MINES_CHANGE_VIEW_REQ]: {
        decode: (buf) => ChangeViewReq.decode(buf),
        encode: (msg) => finish(ChangeViewReq.encode(msg as ChangeViewReq)),
        name: 'ChangeViewReq',
    },
    [MessageType.MINES_CHANGE_VIEW_RES]: {
        decode: (buf) => ChangeViewRes.decode(buf),
        encode: (msg) => finish(ChangeViewRes.encode(msg as ChangeViewRes)),
        name: 'ChangeViewRes',
    },
    [MessageType.MINES_START_GAME_REQ]: {
        decode: (buf) => StartGameReq.decode(buf),
        encode: (msg) => finish(StartGameReq.encode(msg as StartGameReq)),
        name: 'StartGameReq',
    },
    [MessageType.MINES_START_GAME_RES]: {
        decode: (buf) => StartGameRes.decode(buf),
        encode: (msg) => finish(StartGameRes.encode(msg as StartGameRes)),
        name: 'StartGameRes',
    },
    [MessageType.MINES_START_GAME_BROADCAST]: {
        decode: (buf) => StartGameBroadcast.decode(buf),
        encode: (msg) => finish(StartGameBroadcast.encode(msg as StartGameBroadcast)),
        name: 'StartGameBroadcast',
    },
    [MessageType.MINES_END_GAME_REQ]: {
        decode: (buf) => EndGameReq.decode(buf),
        encode: (msg) => finish(EndGameReq.encode(msg as EndGameReq)),
        name: 'EndGameReq',
    },
    [MessageType.MINES_END_GAME_RES]: {
        decode: (buf) => EndGameRes.decode(buf),
        encode: (msg) => finish(EndGameRes.encode(msg as EndGameRes)),
        name: 'EndGameRes',
    },
    [MessageType.MINES_GET_PLAYER_HISTORY_REQ]: {
        decode: (buf) => GetPlayerHistoryReq.decode(buf),
        encode: (msg) => finish(GetPlayerHistoryReq.encode(msg as GetPlayerHistoryReq)),
        name: 'GetPlayerHistoryReq',
    },
    [MessageType.MINES_GET_PLAYER_HISTORY_RES]: {
        decode: (buf) => GetPlayerHistoryRes.decode(buf),
        encode: (msg) => finish(GetPlayerHistoryRes.encode(msg as GetPlayerHistoryRes)),
        name: 'GetPlayerHistoryRes',
    },
};
