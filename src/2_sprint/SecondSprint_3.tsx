// const getArray = (a, b, c) => {
//     return [c, b, a]
// }
//
// const [city, apple, building]  = getArray(81, 48, 98)
//
// console.log(city)

/*Какое число будет выведено в консоль?*/
// 98 +


// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)
//     return result
// }

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
// Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
//Функция принимает параметром два объекта типа StudentType
// и возвращает массив с именами общих друзей,
//если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?
// st_2.id +


import React, {useState} from "react";

// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }
//
// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"
//
// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]
//
// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }
//
// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//         [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }
// Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// Так же дана функция updateCourseStatus,
// которая позволяет отметить курс как пройденный самураем или снять такую отметку
// Что надо написать вместо ххх, чтобы функция работала корректно?
// samuraiID +


/*import React, {useState} from "react";

type UserType = {
    id: number
    name: string
    status: "online" | "offline"
}

type AddressType = {
    country: string
    city: string
    email: string
}

type AdressesType = {
    [userID: string]: AddressType
}


const users: Array<UserType> = [
    {id: 1, name: "Bob", status: "online"},
    {id: 2, name: "Alex", status: "offline"},
    {id: 3, name: "Ann", status: "offline"},
]

export const addresses: AdressesType = {
    1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
    2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
    3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},

}

export const changeUserStatus = (userID: number, status: string) => {
    return users.map(u => u.id === userID ? {...u, status} : u)
}*/
// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция changeUserStatus, которая меняет статус пользователя.
// Что надо написать вместо ххх, чтобы функция работала корректно?
// map +



// const student = {
//     name: "Leonid",
//     age: 67,
//     friends: ["Rita", "Eva", "Michail", "Dima"]
// }
//
// const [currency, clothes, apartment] = student.friends
//
// const result = clothes

/*Какое значение получит переменная result?*/
// "Eva" +


// const person = {
//     name: "Sergey",
//     age: 75,
//     scores: [91.52, 76.02, 60.82]
// }
//
// const {name, age, scores} = person
//
// console.log(person.scores === scores && age)
// 75


/*Какое значение мы увидим в консоли?*/
// false -


// const names = ["Maxim", "Marina", "Artem"]
//
// const nameNext = names
//
// nameNext.length = 0
//
// const result = names[0] ? 60 : 3

/* Какое значение получит переменная result? */
// 3 +


// const userName = (user = "") => {
//     let userName: any = "Konstantin"
//     userName += user
//     return user;
// }
//
// const student = userName() || "William"
// console.log(student)

/*Какое значение получит переменная student? */
// "William"  +


// const student = {
//     name: "Svetlana",
//     age: 85,
//     scores: [60.77, 39.31, 24.67]
// }
//
// const [first, second, third = 55.14] = student.scores
// console.log(third)
//
// switch(third){
//     case 55.14:
//         console.log("Australia")
//         break;
//     case 39.31:
//         console.log("Mexico")
//         break;
//     default:
//         console.log("Belarus");
// }
/*Какую строку мы увидим в консоли?*/
// "Belarus" +


// import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//         [userID]: {...addresses[userID], [key]: newValue}
//     }
// }
// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция updateUserAddress,
// которая обновляет указанное в параметрах поле в адресе пользователя.
// Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// Что надо написать вместо ххх, чтобы функция работала корректно?
// userID  +
