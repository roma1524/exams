// const students = [{ name: "Bob" }, { name: "Alex" }, { name: "Donald" }]
// const filteredStudents = students.filter((s) => s.name !== "Kate")
// const lengthDiff = students.length - filteredStudents.length
// export const newValue = (lengthDiff && 29.92) || (52.49 && 97.69)

// Какое значение получит переменная newValue?
// 97.69 +


// const value = 9
//
// const getValue = (value: any) => {
//     value += 31
//     return value
// }
//
// export const myResult = getValue("") || value

// Какое значение получит переменная myResult?
// '31' +

// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "TRACK-DELETED":
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC = (trackId: number) => XXX
//
// const state = [
//     { id: 12, likesCount: 10 },
//     { id: 14, likesCount: 2 },
//     { id: 100, likesCount: 0 },
// ]
//
// const newState = reducer(state, deleteTrackAC(14))
// console.log(newState.length === 2)
//
// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
// {return {type: "TRACK-DELETED", trackId}} -


// import { configureStore, combineReducers } from "@reduxjs/toolkit"
//
// let initialState = { items: [{ name: "Dimych" }, { name: "Ignat" }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// let authInitialState = { login: "Margo", settings: { theme: "dark" } }
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
//
// const store = configureStore({
//     reducer: combineReducers({
//         users: usersReducer,
//         auth: authReducer,
//     }),
// })
//
// store.subscribe(() => {
//     const login = store.getState().auth.login
//     console.log(login)
// })
//
// store.dispatch({ type: "ANY" })
// export default store

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?
// auth: authReducer +

// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "TRACK-ADDED":
//             return {
//                 ...state,
//                 [action.trackId]: {
//                     id: action.trackId,
//                     likesCount: 0,
//                 },
//             }
//         default:
//             return state
//     }
// }
//
// const addTrackAC = (trackId: number) => ({ type: "TRACK-ADDED", trackId })
//
// const state = {
//     12: { id: 12, likesCount: 10 },
//     14: { id: 14, likesCount: 2 },
//     100: { id: 100, likesCount: 0 },
// }
//
// const newState = reducer(state, addTrackAC(300))
// console.log(newState[300].likesCount === 0)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// addTrackAC(300) +


// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "USER-NAME-UPDATED":
//             return {...state, user: {...state.user, name: action.name}};
//         default:
//             return state
//     }
// }
//
// const updateUserNameAC = (name: string) => ({ type: "USER-NAME-UPDATED", name })
//
// const state = {
//     count: 10,
//     user: {
//         name: "Dimych",
//         age: 18,
//         isMarried: true,
//         status: "offline",
//     },
//     books: ["you don't know JS"],
// }
// const newState = reducer(state, updateUserNameAC("Dmitry"))
//
// console.log(newState.user.name === "Dmitry")
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)

// Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя
// и в консоли увидеть: true true true?
// {...state, user: {...state.user, name: action.name}} +