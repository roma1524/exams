// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return [...state, {id: action.trackId, likesCount: 0}]
//         default:
//             return state
//     }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, addTrackAC(300))
//
// console.log(newState[3].likesCount === 0)

// Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?
//     [...state, {id: action.trackId, likesCount: 0}] +


// const behavior = {
//     name: "Maxim",
//     age: 89,
//     technologies: ["HTML", "", "REACT"]
// }
//
// const [country = "FOO", county = "BOO", relaxation = "DOO"] = behavior.technologies
//
// if(!XXX){
//     alert("HEY")
// }

// Какую переменную следует указать вместо XXX, что бы была вызвана функция alert?
// county +


// const numbers = [56, 55, 68, 13]
// const mapFunction = (el: number, index: number) => el * index
// const mappedArray = numbers.map(mapFunction)
//
// const myNumber = mappedArray[0] && mappedArray[mappedArray.length - 1]
// const bigCount = 92 + myNumber

//Какое значение получит переменная bigCount?//
// 92 +


import React from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'

type StudentType = {
    id: number
    name: string
    age: number
}

const initState = {
    students:
        [
            {id: 1, name: 'Bob', age: 23},
            {id: 2, name: 'Alex', age: 22}
        ] as Array<StudentType>
}
type AddStudentAT = {
    type: 'ADD-STUDENT'
    name: string
    age: number
    id: number
}

type InitialStateType = typeof initState

const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
    switch (action.type) {
        case 'ADD-STUDENT':
            return {
                ...state,
                students: [...state.students, {
                    name: action.name,
                    age: action.age,
                    id: action.id
                }]
            }
    }
    return state
}

const appStore = createStore(studentsReducer)
type RootStateType = ReturnType<typeof studentsReducer>


const StudentList = () => {
    const students = useSelector((state: RootStateType) => state.students)
    return (
        <ul>
            {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
        </ul>
    )
}
const App = () => {
    return <StudentList/>
}

ReactDOM.render(<div>
        <XXX YYY={ZZZ}>
            <App/>
        </XXX>
    </div>,
    document.getElementById('root')
)

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
// Provider store store -


// import {createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector, useDispatch} from 'react-redux'
// import React from 'react'
//
// const students = {
//     students: [
//         {id: 1, name: 'Bob'},
//         {id: 2, name: 'Alex'},
//         {id: 3, name: 'Donald'},
//         {id: 4, name: 'Ann'},
//     ]
// }
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter(s => s.id !== action.id)
//             }
//     }
//     return state
// }
//
// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//     const listItemStyles = {
//         width: "100px",
//         borderBottom: "1px solid gray",
//         cursor: "pointer",
//     }
//     const students = useSelector((state: RootStateType) => state.students)
//     const dispatch = useDispatch()
//     const studentsList = students.map(s => {
//         const removeStudent = () => {
//             dispatch(RemoveStudentAC( s.id))
//         }
//         return (
//             <li key={s.id}
//                 style={listItemStyles}
//                 onClick={removeStudent}>
//                 {s.name}
//             </li>)
//     })
//     return (
//         <ol>
//             {studentsList}
//         </ol>
//
//     )
// }
//
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <StudentList/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// удалялся из списка? Напишите через пробел.

// dispatch RemoveStudentAC s.id +


// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
// }
//
// export const reducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case XXX:
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         case YYY:
//             return {
//                 ...state,
//                 volume: 0
//             }
//         case ZZZ:
//             return {
//                 ...state,
//                 currentPlayPosition: 0
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// // перемотатьНаНачало:
// const rewindToStart = () => ({type: 'TRACK-REWOUND-TO-START'})

// Какие типы должны быть вместо XXX, YYY и ZZZ?
// Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'
// 'TRACK-URL-CHANGED' 'TRACK-MUTED' 'TRACK-REWOUND-TO-START' +
