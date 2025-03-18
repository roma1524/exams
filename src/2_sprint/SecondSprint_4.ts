export const SecondSprint_4 = {}
// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
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
// const result = calculator(10, {type:"DIV", payload: 0})
// if (!(result - 1)){
//     console.log("IT-INCUBATOR")
// }
//
// Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
// type:"DIV" -



// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType) => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }

//Что надо написать вместо ХХХ, чтобы функция calculator работала?
// action.type +

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }

//Обработка какого action.type не предусмотрена в функции calculator?
// "MULT"



// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
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
// const result = calculator(10, {"DIV", payload: 5})
// console.log(result)
//Что надо написать вместо XXX, что бы переменная result содержала значение 5?
// type: "DIV" -


// const aspect = {
//     name: "Leonid",
//     scores: 94
// }
//
// const article = {
//     ... aspect,  scores:  aspect.scores++
// }
//
//
// const scores  = article.scores

// Какое значение получит переменная scores?
// 94 +


// type UserType = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }
//
// type ChangeUserPasswordTypeAT = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         id: number
//         password: string
//     }
// }
//
// export const userReducer =
//     (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
//         switch (action.type) {
//             case "CHANGE-USER-PASSWORD":
//                 return state.map(u =>
//                     u.id === action.payload.id
//                         ? {...u, password: action.payload.newPassword}
//                         : u)
//             default:
//                 return state
//         }
//     }

//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
//В ответе напишите через пробел: XXX  YYY
// id: number password: string -



// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }

//Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
// 10


// const {advertising} = {advertising: 44}
//
// const multiply = advertising * 52.19
//
// const randomValue = multiply && "William" &&  "Leonid"

/* Какое значение получит переменная randomValue ? */
// "Leonid" +


// let result = 0
//
// for(let i = 0; i < 5; i++){
//     if(i % 2){
//         result += i
//     }
// }
//
// const studentName = (result - 4)
//     ? "Egor"
//     : "Victor"

/* Какое значение получит переменная studentName? */
// "Victor" +


// const name = "Elena"
//
// const student = {
//     [name]: name
// }
//
// const number = student["name"]
//     ? 60.33
//     : 73.84

/*Какое значение получит переменная number?*/
// 73.84 +



/*
type:"DIV"
type: "DIV"
id: number password: string
*/
/*

const name = "Konstantin"

const student = {
    [name]: name,
}

export const number = student["name"] ? 37.76 : 51.11

// Какое значение получит переменная number?
// 51.11 +

type Action = {
    type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
    payload: number
}

export const calculator = (state: number, action: Action): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "EXP":
            return state ** action.payload
        default:
            return state
    }
}

// Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
// 10

type Action = {
    type: "SUM" | "SUB" | "MULT" | "DIV"
    payload: number
}

export const calculator = (state: number, action: Action): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "MULT":
            return state * action.payload
        default:
            return state
    }
}

const result = calculator(10, { XXX, payload: 5 })
console.log(result)

//Что надо написать вместо XXX, что бы переменная result содержала значение 5?
// "SUB" -

type Action = {
    type: "SUM" | "SUB" | "MULT" | "DIV"
    payload: number
}

export const calculator = (state: number, action: Action) => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        default:
            return state
    }
}

//Что надо написать вместо ХХХ, чтобы функция calculator работала?
// action.type +

type Action = {
    type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
    payload: number
}

export const calculator = (state: number, action: Action): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "MULT":
            return state * action.payload
        case "EXP":
            return state ** action.payload
        default:
            return state
    }
}
const result = calculator(10, { type: "EXP", payload: 0 })
if (!(result - 1)) {
    console.log("IT-INCUBATOR")
}

// Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
// type: "EXP" +

type Action = {
    type: "SUM" | "SUB" | "MULT" | "DIV"
    payload: number
}

export const calculator = (state: number, action: Action): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        default:
            return state
    }
}

//Обработка какого action.type не предусмотрена в функции calculator?
// "MULT" +

const basis = {
    name: "Svetlana",
    scores: 10,
}

const brother = {
    ...basis,
    scores: basis.scores++,
}

export const scores = brother.scores

// Какое значение получит переменная scores?
// 11 -


type User = {
    id: number
    userName: string
    email: string
    password: string
}

type ChangeUserPasswordAction = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
        XXX
        YYY
    }
}

export const userReducer = (state: User[], action: ChangeUserPasswordAction): User[] => {
    switch (action.type) {
        case "CHANGE-USER-PASSWORD":
            return state.map((u) => (u.id === action.payload.id ? { ...u, password: action.payload.newPassword } : u))
        default:
            return state
    }
}

// Какой код должен быть написан вместо XXX и YYY в типе
// ChangeUserPasswordAction, что бы редьюсер работал?
// В ответе напишите через пробел: XXX YYY
// id: number newPassword: string

let result = 0

for (let i = 0; i < 5; i++) {
    if (i % 2) {
        result += i
    }
}

export const studentName = result - 4 ? "Leo" : "Dima"

// Какое значение получит переменная studentName?
// "Dima" +*/
