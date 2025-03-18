export const SecondSprint_4 = {}
/*type Status = "Stopped" | "Playing" | "Paused"

type PlayerState = {
    volume: number // in percents
    trackUrl: string // 'https://blabla.com/track01.mp3',
    currentPlayPosition: number // milliseconds,
    status: Status
}

const playerReducer = (state: PlayerState, action: any) => {
    switch (action.type) {
        case "TRACK-STATUS-CHANGED":
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })

const state: PlayerState = {
    status: "Stopped",
    currentPlayPosition: 1213,
    trackUrl: "https://blabla.com/track01.mp3",
    volume: 100,
}

const newState = playerReducer(state, changeTrackPlayStatusAC())
console.log(newState.status === "Paused")*/
//
// Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true
// changeTrackPlayStatusAC -


// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "TRACK-DELETED":
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC = (trackId: number) => ({ type: "TRACK-DELETED", trackId })
//
// const state = [
//     { id: 12, likesCount: 10 },
//     { id: 14, likesCount: 2 },
//     { id: 100, likesCount: 0 },
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)

// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
// track.id !== action.trackId +


// const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "TRACK-LIKED":
//             return {
//                 ...state,
//                 [action.trackId]: {
//                     ...state[action.trackId],
//                     likesCount: state[action.trackId].likesCount + 1,
//                 },
//             }
//         default:
//             return state
//     }
// }
//
// const likeTrackAC = (trackId: number) => ({ type: "TRACK-LIKED", trackId })
//
// const state = {
//     12: { id: 12, likesCount: 10 },
//     14: { id: 14, likesCount: 2 },
//     100: { id: 100, likesCount: 0 },
// }
// const newState = reducer(state, likeTrackAC(14))
//
// console.log(newState[14].likesCount === 3)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// ❗ Захардкодженные значения использовать запрещено

// Answers
// action.trackId +

// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// const playerReducer = (state: PlayerState, action: any) => {
//     switch (action.type) {
//         case "TRACK-VOLUME-CHANGED":
//             return {
//                 ...state,
//                 volume: action.volumeLevel,
//             }
//         default:
//             return state
//     }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeVolumeAC = (volumeLevel: number) => ({ type: "TRACK-VOLUME-CHANGED", volumeLevel })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })
//
// const state: PlayerState = {
//     status: "Stopped",
//     currentPlayPosition: 1213,
//     trackUrl: "https://blabla.com/track01.mp3",
//     volume: 100,
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.
// volume: action.volumeLevel +


//@ts-ignore
// const value = [0, [1, 0]][1][0]
// let quantity
//
// switch (value) {
//     case 0:
//         quantity = 28
//         break
//     case 1:
//         quantity = 83
//         break
//     default:
//         quantity = 41
//         break
// }
//
// Какое значение получит переменная quantity?
// 83 +


// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// export const playerReducer = (state: PlayerState, action: any) => {
//     switch (action.type) {
//         case XXX:
//             return {
//                 ...state,
//                 trackUrl: action.url,
//             }
//         default:
//             return state
//     }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })

// Какой тип должен быть вместо XXX?



// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// const playerReducer = (state: PlayerState, action: any) => {
//     switch (action.type) {
//         case "TRACK-VOLUME-CHANGED":
//             return {
//                 ...state,
//                 volume: action.volumeLevel,
//             }
//         default:
//             return state
//     }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeVolumeAC = (volumeLevel: number) => ({ type: "TRACK-VOLUME-CHANGED", volumeLevel })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })
//
// const state: PlayerState = {
//     status: "Stopped",
//     currentPlayPosition: 1213,
//     trackUrl: "https://blabla.com/track01.mp3",
//     volume: 100,
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.
// volume: action.volumeLevel +

// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// const playerReducer = (state: PlayerState, action: any) => {
//     switch (action.type) {
//         case "TRACK-STATUS-CHANGED":
//             return {
//                 ...state,
//                 status: action.status,
//             }
//         default:
//             return state
//     }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })
//
// const state: PlayerState = {
//     status: "Stopped",
//     currentPlayPosition: 1213,
//     trackUrl: "https://blabla.com/track01.mp3",
//     volume: 100,
// }
//
// const newState = playerReducer(state, changeTrackPlayStatusAC("Paused"))
// console.log(newState.status === "Paused")

// Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true
// changeTrackPlayStatusAC("Paused") +


// const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "TRACK-LIKED":
//             return {
//                 ...state,
//                 [action.trackId]: {
//                     ...state[action.trackId],
//                     likesCount: state[action.trackId].likesCount + 1,
//                 },
//             }
//         default:
//             return state
//     }
// }
//
// const likeTrackAC = (trackId: number) => ({ type: "TRACK-LIKED", trackId })
//
// const state = {
//     12: { id: 12, likesCount: 10 },
//     14: { id: 14, likesCount: 2 },
//     100: { id: 100, likesCount: 0 },
// }
// const newState = reducer(state, likeTrackAC(14))
//
// console.log(newState[14].likesCount === 3)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// ❗ Захардкодженные значения использовать запрещено

// Answers
// action.trackId +

// const array = [1, 2, 3, 4, 5]
// const result = array.push(6) - array.pop()
//
// export const bestStudent = result ? "Natali" : "Ivan"

// Какое значение получит переменная bestStudent?
// "Ivan" +

//@ts-ignore
// const value = [0, [1, 0]][1][0]
// let quantity
//
// switch (value) {
//     case 0:
//         quantity = 76
//         break
//     case 1:
//         quantity = 69
//         break
//     default:
//         quantity = 36
//         break
// }

// Какое значение получит переменная quantity?
// 69 +


// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "TRACK-DELETED":
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC = (trackId: number) => ({ type: "TRACK-DELETED", trackId })
//
// const state = [
//     { id: 12, likesCount: 10 },
//     { id: 14, likesCount: 2 },
//     { id: 100, likesCount: 0 },
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)

// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
// track.id !== action.trackId +


// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// export const playerReducer = (state: PlayerState, action: any) => {
//     switch (action.type) {
//         case "TRACK-URL-CHANGED":
//             return {
//                 ...state,
//                 trackUrl: action.url,
//             }
//         default:
//             return state
//     }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })

// Какой тип должен быть вместо XXX?
// "TRACK-URL-CHANGED" +