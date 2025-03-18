export const SecondSprint_4 = {}
// import {CSSProperties, useReducer, useState} from "react"
// import { createRoot } from "react-dom/client"
//
// const commonStyles: CSSProperties = {
//     border: "1px solid black",
//     margin: "100px auto",
//     width: "300px",
//     height: "150px",
//     textAlign: "center",
// }
//
// const btnStyles: CSSProperties = {
//     color: "white",
//     fontWeight: "bold",
//     backgroundColor: "darkgray",
//     borderRadius: "3px",
//     minWidth: "40px",
// }
//
// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }
//
// const Counter = () => {
//     const [value, setValue] = useReducer(changeCounter, 0)
//     const [isCounter, setIsCounter] = useState(true)
//
//     return (
//         <div style={commonStyles}>
//             {isCounter && (
//                 <div>
//                     <div style={{ marginBottom: "20px" }}>
//                         <h2>{value}</h2>
//                         <button style={{ ...btnStyles, backgroundColor: "red" }} onClick={() => setIsCounter(false)}>
//                             OFF
//                         </button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({ type: "INC_VALUE" })}>
//                         +
//                     </button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>
//                         0
//                     </button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "DEC_VALUE" })}>
//                         -
//                     </button>
//                 </div>
//             )}
//             {!isCounter && (
//                 <div style={{ textAlign: "center" }}>
//                     <h2>Counter not working</h2>
//                     <button style={{ ...btnStyles, backgroundColor: "green" }} onClick={() => setIsCounter(true)}>
//                         ON
//                     </button>
//                 </div>
//             )}
//         </div>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<Counter />)

// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.

// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case "USER-NAME-UPDATED":
//             return {...state, user: {...state.user, name: action.name}};
//
//
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


// import { Provider, useDispatch, useSelector } from "react-redux"
// import { createRoot } from "react-dom/client"
// import { configureStore } from "@reduxjs/toolkit"
//
// const listItemStyles = {
//     width: "100px",
//     borderBottom: "1px solid gray",
//     cursor: "pointer",
// }
//
// const students = {
//     students: [
//         { id: 1, name: "Bob" },
//         { id: 2, name: "Alex" },
//         { id: 3, name: "Donald" },
//         { id: 4, name: "Ann" },
//     ],
// }
//
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
//
// export const removeStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id,
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter((s) => s.id !== action.id),
//             }
//         default:
//             return state
//     }
// }
//
// const store = configureStore({ reducer: studentsReducer })
// type RootStateType = ReturnType<typeof studentsReducer>
//
// const StudentList = () => {
//     const students = useSelector((state: RootStateType) => state.students)
//
//     const dispatch = useDispatch()
//
//     return (
//         <ol>
//             {students.map((s) => {
//                 const removeStudent = () => {
//                     // XXX(YYY(ZZZ))
//                     dispatch(removeStudentAC(s.id))
//                 }
//
//                 return (
//                     <li key={s.id} style={listItemStyles} onClick={removeStudent}>
//                         {s.name}
//                     </li>
//                 )
//             })}
//         </ol>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <StudentList />
//     </Provider>,
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент удалялся из списка?
// Ответ дайте через пробел, например: doc cat fish
// dispatch removeStudentAC s.id +


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


// import { useSelector } from "react-redux"
// import { createRoot } from "react-dom/client"
// import { configureStore } from "@reduxjs/toolkit"
//
// type Student = {
//     id: number
//     name: string
//     age: number
// }
//
// const initState = {
//     students: [
//         { id: 1, name: "Bob", age: 23 },
//         { id: 2, name: "Alex", age: 22 },
//     ] as Student[],
// }
//
// type AddStudentAction = {
//     type: "ADD-STUDENT"
//     name: string
//     age: number
//     id: number
// }
//
// type InitialState = typeof initState
//
// const studentsReducer = (state: InitialState = initState, action: AddStudentAction): InitialState => {
//     switch (action.type) {
//         case "ADD-STUDENT":
//             return {
//                 ...state,
//                 students: [
//                     ...state.students,
//                     {
//                         name: action.name,
//                         age: action.age,
//                         id: action.id,
//                     },
//                 ],
//             }
//         default:
//             return state
//     }
// }
//
// export const appStore = configureStore({ reducer: studentsReducer })
// type RootState = ReturnType<typeof studentsReducer>
//
// const StudentList = () => {
//     const students = useSelector((state: RootState) => state.students)
//
//     return (
//         <ul>
//             {students.map((s) => (
//                 <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>
//             ))}
//         </ul>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(
//     <Provider store={appStore}>
//         <StudentList />
//     </Provider>,
// )
// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
// Ответ дайте через пробел, например: doc cat fish
// Provider store appStore +

// import { Provider } from "react-redux"
// import { createRoot } from "react-dom/client"
// import { combineReducers, configureStore } from "@reduxjs/toolkit"
//
// let initialState = {
//     items: [
//         { id: 1, name: "Dimych" },
//         { id: 2, name: "Ignat" },
//     ],
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// let authInitialState = { login: "Margo", settings: { theme: "dark" } }
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
//
// const rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer,
// })
//
// const store = configureStore({
//     reducer: rootReducer,
// })
//
// type RootStateType = ReturnType<typeof rootReducer>
//
// export const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//     const users = XXX
//
//     return (
//         <ul>
//             {users.map((u) => (
//                 <li key={u.id}>{u.name}</li>
//             ))}
//         </ul>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <Users />
//     </Provider>,
// )
//
// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода
// useSelector(selector) +

// import { combineReducers, configureStore } from "@reduxjs/toolkit"
//
// let initialState = { items: [{ name: "Dimych" }, { name: "Ignat" }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// const store = configureStore({
//     reducer: combineReducers({
//         users: usersReducer,
//     }),
// })
//
// store.subscribe(() => {
//     console.log("state changed")
// })
//
// store.dispatch({ type: "ANY" })

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?
// subscribe +

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
// track.id !== action.trackId