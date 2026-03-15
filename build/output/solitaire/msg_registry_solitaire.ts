/**
 * 由构建脚本根据 proto 生成，请勿手改。
 */
import type { MessageMapping } from 'db://nexus-framework/index';
import { JoinRoomReq, JoinRoomRes, StartGameReq, StartGameRes, ConnectorCardReq, ConnectorCardRes, StartGameBroadcast, ConnectorCardBroadcast, ConnectorFinishedBroadcast, GameResultBroadcast, RoomResetBroadcast, ViewChangeBroadcast, GetPlayerHistoryReq, GetPlayerHistoryRes } from './solitaire';
import { MessageType } from './message_type';

/** 从 Writer 得到 Uint8Array（ts_proto 的 encode 返回 Writer） */
function finish(w: { finish(): Uint8Array }): Uint8Array {
    return w.finish();
}

export const SOLITAIRE_MSG_REGISTRY: Record<number, MessageMapping> = {
    [MessageType.SOLITAIRE_JOIN_ROOM_REQ]: {
        decode: (buf) => JoinRoomReq.decode(buf),
        encode: (msg) => finish(JoinRoomReq.encode(msg as JoinRoomReq)),
        name: 'JoinRoomReq',
    },
    [MessageType.SOLITAIRE_JOIN_ROOM_RES]: {
        decode: (buf) => JoinRoomRes.decode(buf),
        encode: (msg) => finish(JoinRoomRes.encode(msg as JoinRoomRes)),
        name: 'JoinRoomRes',
    },
    [MessageType.SOLITAIRE_ROOM_OWNER_START_GAME_REQ]: {
        decode: (buf) => StartGameReq.decode(buf),
        encode: (msg) => finish(StartGameReq.encode(msg as StartGameReq)),
        name: 'StartGameReq',
    },
    [MessageType.SOLITAIRE_ROOM_OWNER_START_GAME_RES]: {
        decode: (buf) => StartGameRes.decode(buf),
        encode: (msg) => finish(StartGameRes.encode(msg as StartGameRes)),
        name: 'StartGameRes',
    },
    [MessageType.SOLITAIRE_CONNECTOR_CARD_REQ]: {
        decode: (buf) => ConnectorCardReq.decode(buf),
        encode: (msg) => finish(ConnectorCardReq.encode(msg as ConnectorCardReq)),
        name: 'ConnectorCardReq',
    },
    [MessageType.SOLITAIRE_CONNECTOR_CARD_RES]: {
        decode: (buf) => ConnectorCardRes.decode(buf),
        encode: (msg) => finish(ConnectorCardRes.encode(msg as ConnectorCardRes)),
        name: 'ConnectorCardRes',
    },
    [MessageType.SOLITAIRE_START_GAME_BROADCAST]: {
        decode: (buf) => StartGameBroadcast.decode(buf),
        encode: (msg) => finish(StartGameBroadcast.encode(msg as StartGameBroadcast)),
        name: 'StartGameBroadcast',
    },
    [MessageType.SOLITAIRE_CONNECTOR_CARD_BROADCAST]: {
        decode: (buf) => ConnectorCardBroadcast.decode(buf),
        encode: (msg) => finish(ConnectorCardBroadcast.encode(msg as ConnectorCardBroadcast)),
        name: 'ConnectorCardBroadcast',
    },
    [MessageType.SOLITAIRE_CONNECTOR_FINISHED_BROADCAST]: {
        decode: (buf) => ConnectorFinishedBroadcast.decode(buf),
        encode: (msg) => finish(ConnectorFinishedBroadcast.encode(msg as ConnectorFinishedBroadcast)),
        name: 'ConnectorFinishedBroadcast',
    },
    [MessageType.SOLITAIRE_GAME_RESULT_BROADCAST]: {
        decode: (buf) => GameResultBroadcast.decode(buf),
        encode: (msg) => finish(GameResultBroadcast.encode(msg as GameResultBroadcast)),
        name: 'GameResultBroadcast',
    },
    [MessageType.SOLITAIRE_ROOM_RESET_BROADCAST]: {
        decode: (buf) => RoomResetBroadcast.decode(buf),
        encode: (msg) => finish(RoomResetBroadcast.encode(msg as RoomResetBroadcast)),
        name: 'RoomResetBroadcast',
    },
    [MessageType.SOLITAIRE_VIEW_CHANGE_BROADCAST]: {
        decode: (buf) => ViewChangeBroadcast.decode(buf),
        encode: (msg) => finish(ViewChangeBroadcast.encode(msg as ViewChangeBroadcast)),
        name: 'ViewChangeBroadcast',
    },
    [MessageType.SOLITAIRE_GET_PLAYER_HISTORY_REQ]: {
        decode: (buf) => GetPlayerHistoryReq.decode(buf),
        encode: (msg) => finish(GetPlayerHistoryReq.encode(msg as GetPlayerHistoryReq)),
        name: 'GetPlayerHistoryReq',
    },
    [MessageType.SOLITAIRE_GET_PLAYER_HISTORY_RES]: {
        decode: (buf) => GetPlayerHistoryRes.decode(buf),
        encode: (msg) => finish(GetPlayerHistoryRes.encode(msg as GetPlayerHistoryRes)),
        name: 'GetPlayerHistoryRes',
    },
};
