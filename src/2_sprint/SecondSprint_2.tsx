
/*type Student = {
    id: number
    name: string
}
type Students = Array<Student>
type Friends = {
    [key: string]: Array<string>
}

export const students: Students = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

export const friends: Friends = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}*/

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Что вернёт выражение: Array.isArray(friends)?
// false +



/*const customer = {
    name: "Konstantin",
    age: 67,
    friends: ["Elena", "Rita", "Natali"]
}

const updatedCustomer = {
    ...customer,
    friends: customer.friends
}

console.log(customer.friends === updatedCustomer.friends)*/

/*Какое значение будет выведено в консоль?*/
// true +


/*const client = {
    name: "Masha",
    age: 51,
    friends: ["Ekaterina", "Natali", "Elena"]
}

const newFriend = "Masha"

const friends = [...client.friends, newFriend]

const updatedClient = {...client, friends: friends}*/

/*Выполнено преобразование объекта: добавлен новый друг в список.
Что надо указать вместо XXX, что бы выполнить это действие иммутабельно?*/
// ...client.friends  +


/*type StudentType = {
    id: number
    name: string
    age: number
}

type FriendsType = {
    [key: string]: Array<string>
}


export const students: Array<StudentType> = [
    {id: 1, name: "Bob", age: 34},
    {id: 2, name: "Alex", age: 23},
    {id: 3, name: "Ann", age: 25},
    {id: 4, name: "Charley", age: 20},
]

export const friends: FriendsType = {
    1: ["Jack","Oliver", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William",  "Lewis","Michael"],
    4: ["Oscar", "Thomas", "William",],
}*/

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Имеют ли студенты students[1] и students[3] общих друзей?
//Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.
// "Thomas" +



/*type StudentType = {
    id: number
    name: string
}

type FriendsType = {
    [key: string]: Array<string>
}

export const students: Array<StudentType> = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

export const friends: FriendsType = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}*/

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут:  friends[3][1]?
// "Michael" +


/*type StudentType = {
    id: number
    name: string
}

type FriendsType = {
    [key: string]: Array<String>
}

export const students: Array<StudentType> = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

export const friends: FriendsType = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}*/

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[students[0].id][3]?
// undefined +



/*import React, {useState} from "react";

type samuraiType = {
    id: string
    name: string
    status: "online" | "offline"
}
type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
type CourseType = {
    name: CourseNameType
    mentor: string
    isDone: boolean
}
type TechnologiesType = {
    [userID: string]: Array<CourseType>
}

const samuraiID_1 = "64jf-87kg"
const samuraiID_2 = "90lg-34ks"
const samuraiID_3 = "12jm-05fd"

export const samurai: Array<samuraiType> = [
    {id: samuraiID_1, name: "Bob", status: "online"},
    {id: samuraiID_2, name: "Alex", status: "offline"},
    {id: samuraiID_3, name: "Ann", status: "offline"},
]

export const technologies: TechnologiesType = {
    [samuraiID_1]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_2]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: true},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_3]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: false},
    ],
}

export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
    return {...technologies,
        [samuraiID]: technologies[xxx].map(c => c.name === name ? {...c, isDone} : c)
    }
}*/
// Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// Так же дана функция updateCourseStatus,
// которая позволяет отметить курс как пройденный самураем или снять такую отметку
// Что надо написать вместо XXX, чтобы функция работала?
// samuraiID +



/*type StudentType = {
    id: number
    name: string
}
type Students = Array<StudentType>
type Friends = {
    [key: string]: Array<string>
}

export const students: Students = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

export const friends: Friends = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}*/

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов
//Id студента является ключом к массиву его друзей.
//Что вернёт выражение Array.isArray(students)?
// true +



/*const members = ["Artem", "Natali", "Nikita"]
const boat = [... members]
const category = boat

const result = category !== XXX
    ? "Yo!!!"
    : "Hey!!!"*/

/*Имя какой переменной надо указать вместо XXX, что бы переменная result получила значение "Yo!!!"? Если такой переменной нет, в качестве ответа укажите null.*/
// members +



/*type StudentType = {
    id: number
    name: string
}

type FriendsType = {
    [key: string]: Array<string>
}

export const students: Array<StudentType> = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

export const friends: FriendsType = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}*/

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[students[1].id][2]?
// "Thomas"  +
