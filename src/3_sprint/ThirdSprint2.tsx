// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// const store = createStore(combineReducers({
//     users: usersReducer
// }))
//
// store.XXX(() => {
//     console.log('state changed')
// })
//
// store.dispatch({type: 'ANY'})

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?
// subscribe +


// let number = 2
//
// if (number > 0) {
//     let number = 96
//     number++
// }
//
// const getNumber = (number: any) => {
//     number *= 10
//     return number
// }
//
// const bigValue= getNumber("number") || number

//Какое значение получит переменная bigValue?
// 2 +


// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// const store = createStore(combineReducers({
//     users: usersReducer
// }))
//
// store.subscribe(() => {
//     const state = XXX
//     console.log(state)
// })
//
// store.dispatch({type: 'ANY'})

//Что нужно написать вместо XXX, чтобы получить актуальный стейт?
// store.getState()


// import React, {useState, useReducer, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
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
// function Counter() {
//     const [value, setValue] = useReducer(changeCounter, 0)
//     const [isCounter, setIsCounter] = useState(true)
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }
//
//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{marginBottom: "20px"}}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{...btnStyles, backgroundColor: "red"}}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//                 </div>
//                 : <div style={{textAlign: "center"}}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{...btnStyles, backgroundColor: "green"}}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Counter/>, document.getElementById('root')
// );
// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.
// useReducer useState +

// import {combineReducers, createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector} from 'react-redux'
// import React from 'react'
//
// let initialState = {items:
//         [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Ignat'}
//         ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
//
// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })
//
// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>
//
// const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//
//     const users = useSelector(selector)
//
//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <Users/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )

// Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// ❗ Ответ дать минимально возможным объёмом кода
// useSelector(selector) +


// const myFunction = (a: number, b = 3) => a + b;
//
// const result = myFunction(346, undefined) % 2
//
// const winner = result ? "Vladislav" : "Leo"

//Какое значение получит переменная winner?
// "Vladislav" +