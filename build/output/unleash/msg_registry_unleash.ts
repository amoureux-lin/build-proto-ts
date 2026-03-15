/**
 * 由构建脚本根据 proto 生成，请勿手改。
 */
import type { MessageMapping } from 'db://nexus-framework/index';
import { JoinRoomReq, JoinRoomRes, StartGameReq, StartGameRes, StartGameBroadcast, StepPauseBroadcast, NextStepBroadcast, ResetGameReq, ResetGameRes, ResetGameBroadcast, RunReq, RunRes, RunBroadcast, HaltReq, HaltRes, HaltBroadcast, FirstRunBroadcast, WarnBroadcast, DeadBroadcast, WinBroadcast, PrizeBroadcast, GetUnleashPlayerHistoryReq, GetUnleashPlayerHistoryRes } from './unleash';
import { MessageType } from './message_type';

/** 从 Writer 得到 Uint8Array（ts_proto 的 encode 返回 Writer） */
function finish(w: { finish(): Uint8Array }): Uint8Array {
    return w.finish();
}

export const UNLEASH_MSG_REGISTRY: Record<number, MessageMapping> = {
    [MessageType.UNLEASH_JOIN_ROOM_REQ]: {
        decode: (buf) => JoinRoomReq.decode(buf),
        encode: (msg) => finish(JoinRoomReq.encode(msg as JoinRoomReq)),
        name: 'JoinRoomReq',
    },
    [MessageType.UNLEASH_JOIN_ROOM_RES]: {
        decode: (buf) => JoinRoomRes.decode(buf),
        encode: (msg) => finish(JoinRoomRes.encode(msg as JoinRoomRes)),
        name: 'JoinRoomRes',
    },
    [MessageType.UNLEASH_START_GAME_REQ]: {
        decode: (buf) => StartGameReq.decode(buf),
        encode: (msg) => finish(StartGameReq.encode(msg as StartGameReq)),
        name: 'StartGameReq',
    },
    [MessageType.UNLEASH_START_GAME_RES]: {
        decode: (buf) => StartGameRes.decode(buf),
        encode: (msg) => finish(StartGameRes.encode(msg as StartGameRes)),
        name: 'StartGameRes',
    },
    [MessageType.UNLEASH_START_GAME_BROADCAST]: {
        decode: (buf) => StartGameBroadcast.decode(buf),
        encode: (msg) => finish(StartGameBroadcast.encode(msg as StartGameBroadcast)),
        name: 'StartGameBroadcast',
    },
    [MessageType.UNLEASH_STEP_PAUSE_BROADCAST]: {
        decode: (buf) => StepPauseBroadcast.decode(buf),
        encode: (msg) => finish(StepPauseBroadcast.encode(msg as StepPauseBroadcast)),
        name: 'StepPauseBroadcast',
    },
    [MessageType.UNLEASH_NEXT_STEP_BROADCAST]: {
        decode: (buf) => NextStepBroadcast.decode(buf),
        encode: (msg) => finish(NextStepBroadcast.encode(msg as NextStepBroadcast)),
        name: 'NextStepBroadcast',
    },
    [MessageType.UNLEASH_RESET_GAME_REQ]: {
        decode: (buf) => ResetGameReq.decode(buf),
        encode: (msg) => finish(ResetGameReq.encode(msg as ResetGameReq)),
        name: 'ResetGameReq',
    },
    [MessageType.UNLEASH_RESET_GAME_RES]: {
        decode: (buf) => ResetGameRes.decode(buf),
        encode: (msg) => finish(ResetGameRes.encode(msg as ResetGameRes)),
        name: 'ResetGameRes',
    },
    [MessageType.UNLEASH_RESET_GAME_BROADCAST]: {
        decode: (buf) => ResetGameBroadcast.decode(buf),
        encode: (msg) => finish(ResetGameBroadcast.encode(msg as ResetGameBroadcast)),
        name: 'ResetGameBroadcast',
    },
    [MessageType.UNLEASH_RUN_REQ]: {
        decode: (buf) => RunReq.decode(buf),
        encode: (msg) => finish(RunReq.encode(msg as RunReq)),
        name: 'RunReq',
    },
    [MessageType.UNLEASH_RUN_RES]: {
        decode: (buf) => RunRes.decode(buf),
        encode: (msg) => finish(RunRes.encode(msg as RunRes)),
        name: 'RunRes',
    },
    [MessageType.UNLEASH_RUN_BROADCAST]: {
        decode: (buf) => RunBroadcast.decode(buf),
        encode: (msg) => finish(RunBroadcast.encode(msg as RunBroadcast)),
        name: 'RunBroadcast',
    },
    [MessageType.UNLEASH_HALT_REQ]: {
        decode: (buf) => HaltReq.decode(buf),
        encode: (msg) => finish(HaltReq.encode(msg as HaltReq)),
        name: 'HaltReq',
    },
    [MessageType.UNLEASH_HALT_RES]: {
        decode: (buf) => HaltRes.decode(buf),
        encode: (msg) => finish(HaltRes.encode(msg as HaltRes)),
        name: 'HaltRes',
    },
    [MessageType.UNLEASH_HALT_BROADCAST]: {
        decode: (buf) => HaltBroadcast.decode(buf),
        encode: (msg) => finish(HaltBroadcast.encode(msg as HaltBroadcast)),
        name: 'HaltBroadcast',
    },
    [MessageType.UNLEASH_FIRST_RUN_BROADCAST]: {
        decode: (buf) => FirstRunBroadcast.decode(buf),
        encode: (msg) => finish(FirstRunBroadcast.encode(msg as FirstRunBroadcast)),
        name: 'FirstRunBroadcast',
    },
    [MessageType.UNLEASH_WARN_BROADCAST]: {
        decode: (buf) => WarnBroadcast.decode(buf),
        encode: (msg) => finish(WarnBroadcast.encode(msg as WarnBroadcast)),
        name: 'WarnBroadcast',
    },
    [MessageType.UNLEASH_DEAD_BROADCAST]: {
        decode: (buf) => DeadBroadcast.decode(buf),
        encode: (msg) => finish(DeadBroadcast.encode(msg as DeadBroadcast)),
        name: 'DeadBroadcast',
    },
    [MessageType.UNLEASH_WIN_BROADCAST]: {
        decode: (buf) => WinBroadcast.decode(buf),
        encode: (msg) => finish(WinBroadcast.encode(msg as WinBroadcast)),
        name: 'WinBroadcast',
    },
    [MessageType.UNLEASH_PRIZE_BROADCAST]: {
        decode: (buf) => PrizeBroadcast.decode(buf),
        encode: (msg) => finish(PrizeBroadcast.encode(msg as PrizeBroadcast)),
        name: 'PrizeBroadcast',
    },
    [MessageType.UNLEASH_GET_PLAYER_HISTORY_REQ]: {
        decode: (buf) => GetUnleashPlayerHistoryReq.decode(buf),
        encode: (msg) => finish(GetUnleashPlayerHistoryReq.encode(msg as GetUnleashPlayerHistoryReq)),
        name: 'GetUnleashPlayerHistoryReq',
    },
    [MessageType.UNLEASH_GET_PLAYER_HISTORY_RES]: {
        decode: (buf) => GetUnleashPlayerHistoryRes.decode(buf),
        encode: (msg) => finish(GetUnleashPlayerHistoryRes.encode(msg as GetUnleashPlayerHistoryRes)),
        name: 'GetUnleashPlayerHistoryRes',
    },
};
