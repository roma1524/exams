export const SecondSprint_4 = {}
// type Action = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }
//
// const result = calculator(10, { type: "SUB", payload: 5 })
// console.log(result)

//Что надо написать вместо XXX, что бы переменная result содержала значение 5?
// type: "SUB" +


// type Student = {
//     id: number
//     name: string
// }
//
// type Friends = {
//     [key: string]: string[]
// }
//
// export const students: Student[] = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Ann" },
//     { id: 4, name: "Charley" },
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar"],
//     2: ["Jack", "Lewis", "Thomas"],
//     3: ["William", "Michael", "Lewis"],
//     4: ["Oscar", "James", "William"],
// }

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[3][1]?
// "Michael" +


// import {useState} from "react"
// import {createRoot} from "react-dom/client"
//
// const PasswordChecker = () => {
//     const [password, setPassword] = useState<string>("")
//
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<PasswordChecker/>)

// Что надо вставить вместо XXX, чтобы код работал нормально?
// password.length +


// type Action = {
//     type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, { XXX, payload: 0 })
// if (!(result - 1)) {
//     console.log("IT-INCUBATOR")
// }
//
// Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
// type: "DIV" -----


// import { useState } from "react"
// import { createRoot } from "react-dom/client"
//
// const ColorButton = () => {
//     const [isColored, setIsColored] = useState<boolean>(false)
//
//     return (
//         <button style={{ backgroundColor: `${XXX === true ? "red" : ""}` }} onClick={() => setIsColored(true)}>
//             Меняю цвет по клику
//         </button>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<ColorButton />)

// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
// isColored


// import { useState } from "react"
// import { createRoot } from "react-dom/client"
//
// const UsersList = () => {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//
//     const usersList = users.length === 0 ? <p>List is empty</p> : <ul>{users.map(getUser)}</ul>
//
//     return (
//         <main>
//             <button onClick={() => setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<UsersList />)

// Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?
// users.length


// type Student = {
//     id: number
//     name: string
// }
//
// type Friends = {
//     [key: string]: string[]
// }
//
// export const students: Student[] = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Ann" },
//     { id: 4, name: "Charley" },
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar"],
//     2: ["Jack", "Lewis", "Thomas"],
//     3: ["William", "Michael", "Lewis"],
//     4: ["Oscar", "James", "William"],
// }
//
// const getMutualFriends = (st_1: Student, st_2: Student) => {
//     const result: string[] = []
//     friends[st_1.id].forEach((f) => (friends[xxx].includes(f) ? result.push(f) : null))
//     return result
// }

// Дан массив студентов и структура,
// которая содержит список друзей каждого из студентов.
// Так же дана функция getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
// Функция принимает параметром два объекта типа Student
// и возвращает массив с именами общих друзей,
// если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?
// st_2 ---          st_2.id!!!!!!!!!!!!!!!!!


// type User = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type Address = {
//     country: string
//     city: string
//     email: string
// }
//
// type Adresses = {
//     [userID: string]: Address
// }
//
// export const users: User[] = [
//     { id: 1, name: "Bob", status: "online" },
//     { id: 2, name: "Alex", status: "offline" },
//     { id: 3, name: "Ann", status: "offline" },
// ]
//
// const addresses: Adresses = {
//     1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
//     2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
//     3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },
// }
//
// export const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return { ...addresses, [userID]: { ...addresses[xxx], [key]: newValue } }
// }
// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция updateUserAddress,
// которая обновляет указанное в параметрах поле в адресе пользователя.
// Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// Что надо написать вместо ххх, чтобы функция работала корректно?
// userID +


// type User = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }
//
// type ChangeUserPasswordAction = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         id: number
//         newPassword: string
//     }
// }
//
// export const userReducer = (state: User[], action: ChangeUserPasswordAction): User[] => {
//     switch (action.type) {
//         case "CHANGE-USER-PASSWORD":
//             return state.map((u) => (u.id === action.payload.id ? { ...u, password: action.payload.newPassword } : u))
//         default:
//             return state
//     }
// }

// Какой код должен быть написан вместо XXX и YYY в типе
// ChangeUserPasswordAction, что бы редьюсер работал?
// В ответе напишите через пробел: XXX YYY
// id: number newPassword: string +


// type Student = {
//     id: number
//     name: string
// }
//
// type Friends = {
//     [key: string]: string[]
// }
//
// export const students: Student[] = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Ann" },
//     { id: 4, name: "Charley" },
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar"],
//     2: ["Jack", "Lewis", "Thomas"],
//     3: ["William", "Michael", "Lewis"],
//     4: ["Oscar", "James", "William"],
// }

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[students[0].id][3]?
// undefined

// type User = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }
//
// type ChangeUserPasswordAction = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         XXX
//         YYY
//     }
// }
//
// export const userReducer = (state: User[], action: ChangeUserPasswordAction): User[] => {
//     switch (action.type) {
//         case "CHANGE-USER-PASSWORD":
//             return state.map((u) => (u.id === action.payload.id ? { ...u, password: action.payload.newPassword } : u))
//         default:
//             return state
//     }
// }

// Какой код должен быть написан вместо XXX и YYY в типе
// ChangeUserPasswordAction, что бы редьюсер работал?
// В ответе напишите через пробел: XXX YYY
// id: number newPassword: string +
//
// type Action = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }
//
// const result = calculator(10, { XXX, payload: 5 })
// console.log(result)

//Что надо написать вместо XXX, что бы переменная result содержала значение 5?
// type: "SUB" +


// type Student = {
//     id: number
//     name: string
// }
//
// type Friends = {
//     [key: string]: string[]
// }
//
// export const students: Student[] = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Ann" },
//     { id: 4, name: "Charley" },
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar"],
//     2: ["Jack", "Lewis", "Thomas"],
//     3: ["William", "Michael", "Lewis"],
//     4: ["Oscar", "James", "William"],
// }
//
// const getMutualFriends = (st_1: Student, st_2: Student) => {
//     const result: string[] = []
//     friends[st_1.id].forEach((f) => (friends[st_2.id].includes(f) ? result.push(f) : null))
//     return result
// }

// Дан массив студентов и структура,
// которая содержит список друзей каждого из студентов.
// Так же дана функция getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
// Функция принимает параметром два объекта типа Student
// и возвращает массив с именами общих друзей,
// если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?
// st_2.id +

// type Action = {
//     type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, { type: 'EXP', payload: 0 })
// if (!(result - 1)) {
//     console.log("IT-INCUBATOR")
// }

// Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
// type: 'EXP' +

/*type User = {
    id: number
    name: string
    status: "online" | "offline"
}

type Address = {
    country: string
    city: string
    email: string
}

type Adresses = {
    [userID: string]: Address
}

export const users: User[] = [
    { id: 1, name: "Bob", status: "online" },
    { id: 2, name: "Alex", status: "offline" },
    { id: 3, name: "Ann", status: "offline" },
]

const addresses: Adresses = {
    1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
    2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
    3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },
}

export const updateUserAddress = (userID: number, key: string, newValue: string) => {
    return { ...addresses, [userID]: { ...addresses[userID], [key]: newValue } }
}*/
// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция updateUserAddress,
// которая обновляет указанное в параметрах поле в адресе пользователя.
// Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// Что надо написать вместо ххх, чтобы функция работала корректно?
// userID +
/*
type Student = {
    id: number
    name: string
}

type Friends = {
    [key: string]: string[]
}

export const students: Student[] = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ann" },
    { id: 4, name: "Charley" },
]

export const friends: Friends = {
    1: ["Oliver", "Jack", "Oscar"],
    2: ["Jack", "Lewis", "Thomas"],
    3: ["William", "Michael", "Lewis"],
    4: ["Oscar", "James", "William"],
}*/

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[3][1]?
// "Michael" +

// import { useState } from "react"
// import { createRoot } from "react-dom/client"
//
// const PasswordChecker = () => {
//     const [password, setPassword] = useState<string>("")
//
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{ color: "red" }}>The password is too short!</p>}
//         </main>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<PasswordChecker />)

// Что надо вставить вместо XXX, чтобы код работал нормально?
// password.length

// import { useState } from "react"
// import { createRoot } from "react-dom/client"
//
// const UsersList = () => {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//
//     const usersList = users.length === 0 ? <p>List is empty</p> : <ul>{users.map(getUser)}</ul>
//
//     return (
//         <main>
//             <button onClick={() => setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<UsersList />)

// Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?
// users.length +

// import { useState } from "react"
// import { createRoot } from "react-dom/client"
//
// const ColorButton = () => {
//     const [isColored, setIsColored] = useState<boolean>(false)
//
//     return (
//         <button style={{ backgroundColor: `${isColored === true ? "red" : ""}` }} onClick={() => setIsColored(true)}>
//             Меняю цвет по клику
//         </button>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<ColorButton />)

// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
// isColored

/*type Student = {
    id: number
    name: string
}

type Friends = {
    [key: string]: string[]
}

export const students: Student[] = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ann" },
    { id: 4, name: "Charley" },
]

export const friends: Friends = {
    1: ["Oliver", "Jack", "Oscar"],
    2: ["Jack", "Lewis", "Thomas"],
    3: ["William", "Michael", "Lewis"],
    4: ["Oscar", "James", "William"],
}*/

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[students[0].id][3]?
// undefined