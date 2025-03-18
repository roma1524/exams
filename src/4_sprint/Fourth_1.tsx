export const SecondSprint_4 = {}
// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Photo = {
//     albumId: string
//     id: string
//     title: string
//     url: string
// }
//
// type Payload = {
//     title: string
//     url?: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const photoId = "637df6dc99fdc52af974a517"
//
// const photosAPI = {
//     getPhoto() {
//         return instance.get<Photo>(`photos/${photoId}`)
//     },
//     updatePhoto(payload: Payload) {
//         return instance.put<Photo>(`photos/${photoId}`, { payload })
//     },
// }
//
// // App
// export const App = () => {
//     const [photo, setPhoto] = useState<Photo | null>(null)
//
//     useEffect(() => {
//         photosAPI.getPhoto().then((res) => {
//             setPhoto(res.data)
//         })
//     }, [])
//
//     const updatePhotoHandler = () => {
//         // ❗ title и url указаны в качестве заглушки. Server сам сгенерирует новый title
//         const payload = {
//             title: "Новый title",
//             url: "data:image/png;base64,iVBORw0FAKEADDRESSnwMZAABJRUrkJggg==",
//         }
//         photosAPI.updatePhoto(payload).then((res) => {
//             setPhoto({...res.data})
//         })
//     }
//
//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <h1>title: {photo?.title}</h1>
//                     <div>
//                         <img src={photo?.url} alt="" />
//                     </div>
//                 </div>
//                 <button style={{ marginLeft: "15px" }} onClick={updatePhotoHandler}>
//                     Изменить title
//                 </button>
//             </div>
//         </>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// При нажатии на кнопку "Изменить title" title должен обновиться,
// но из-за невнимательности была допущена ошибка и изменение не происходит
//
// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.
// setPhoto({...res.data}) -



// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Post = {
//     body: string
//     id: string
//     title: string
//     userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<Post[]>("posts")
//     },
//     deletePost(id: string) {
//         return axios.delete<{ message: string }>(`posts/${id}`)
//     },
// }
//
// // App
// export const App = () => {
//     const [posts, setPosts] = useState<Post[]>([])
//
//     useEffect(() => {
//         postsAPI.getPosts().then((res) => {
//             setPosts(res.data)
//         })
//     }, [])
//
//     const deletePostHandler = (id: string) => {
//         postsAPI.deletePost(id).then((res) => {
//             const newPostsArr = posts.filter((p) => p.id !== id)
//             setPosts(newPostsArr)
//         })
//     }
//
//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.map((p) => {
//                 return (
//                     <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <button style={{ marginLeft: "15px" }} onClick={() => deletePostHandler(p.id)}>
//                             x
//                         </button>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Почему не удаляется post при нажатии на кнопку удаления (х) ?
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа
// -


// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Comment = {
//     postId: string
//     id: string
//     name: string
//     email: string
//     body: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const commentsAPI = {
//     getComments() {
//         return instance.get<Comment[]>("comments")
//     },
//     createComment() {
//         const payload = {
//             body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
//         }
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//         return instance.post("comments", payload)
//     },
// }
//
// // App
// export const App = () => {
//     const [comments, setComments] = useState<Comment[]>([])
//
//     useEffect(() => {
//         commentsAPI.getComments().then((res) => {
//             setComments(res.data)
//         })
//     }, [])
//
//     const createPostHandler = () => {
//         commentsAPI.createComment().then((res: any) => {
//             const newComment = res.data
//             setComments([newComment, ...comments])
//         })
//     }
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             <div style={{ marginBottom: "15px" }}>
//                 <button style={{ marginLeft: "15px" }} onClick={() => createPostHandler()}>
//                     Добавить новый комментарий
//                 </button>
//             </div>
//
//             {comments.map((c) => {
//                 return (
//                     <div key={c.id}>
//                         <b>Comment</b>: {c.body}{" "}
//                     </div>
//                 )
//             })}
//         </>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Напишите запрос на сервер для создания нового комментария.
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.
// return instance.post("comments", payload) +

// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "temperature",
//     initialState: {
//         celsius: 20,
//     },
//     reducers: {
//         increase: (state) => {
//             return ++state
//         },
//     },
//     selectors: {
//         selectCelsius: (state) => state.celsius,
//     },
// })
//
// const { increase } = slice.actions
// const { selectCelsius } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const temp = useAppSelector(selectCelsius)
//     const dispatch = useAppDispatch()
//
//     return (
//         <>
//             <button onClick={() => dispatch(increase())}>Increase Temp</button>
//             <span>{temp}°C</span>
//         </>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         temperature: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку Increase Temp температура не увеличивается 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Increase Temp,
// температура увеличивалась на 1 градус
// В качестве ответа укажите исправленную строку кода.
// ❗Изменение стейта должно быть написано мутабельным образом
// return ++state -

// import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "fruits",
//     initialState: {
//         basket: [
//             { id: 1, name: "Apple" },
//             { id: 2, name: "Banana" },
//         ],
//     },
//     reducers: {
//         addFruit: (state, action) => {
//             return state.basket.push(action.payload)
//         },
//     },
//     selectors: {
//         selectBasket: (state) => state.basket,
//     },
// })
//
// const { addFruit } = slice.actions
// const { selectBasket } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const fruits = useAppSelector(selectBasket)
//     const dispatch = useAppDispatch()
//
//     const addNewFruit = () => {
//         const newFruit = { id: nanoid(), name: "Orange" }
//         dispatch(addFruit(newFruit))
//     }
//
//     return (
//         <>
//             <button onClick={addNewFruit}>Add Fruit</button>
//             <ul>
//                 {fruits.map((fruit) => (
//                     <li key={fruit.id}>{fruit.name}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         fruits: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку Add Fruit, новый фрукт не добавляется в корзину 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Add Fruit,
// новый фрукт добавлялся в корзину
// В качестве ответа укажите исправленную строку кода.
// ❗Изменение стейта должно быть написано мутабельным образом
// return state.basket.push(action.payload) -


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "library",
//     initialState: {
//         collection: {
//             books: [
//                 { id: 1, title: "1984" },
//                 { id: 2, title: "Brave New World" },
//             ],
//         },
//     },
//     reducers: {
//         removeBook: (state, action) => {
//             return state.collection.books.pop()
//         },
//     },
//     selectors: {
//         selectBooks: (state) => state.collection.books,
//     },
// })
//
// const { removeBook } = slice.actions
// const { selectBooks } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const books = useAppSelector(selectBooks)
//     const dispatch = useAppDispatch()
//
//     const removeLastBook = () => {
//         if (books.length > 0) {
//             dispatch(removeBook(books[books.length - 1].id))
//         }
//     }
//
//     return (
//         <>
//             <button onClick={removeLastBook}>Remove Last Book</button>
//             <ul>
//                 {books.map((book) => (
//                     <li key={book.id}>{book.title}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         library: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку Remove Last Book, последняя книга в коллекции не удаляется 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Remove Last Book,
// последняя книга удалялась из коллекции.
// В качестве ответа укажите исправленный код написанный вместо return state.
// ❗Изменение стейта должно быть написано мутабельным образом.
// return state.collection.books.pop() -


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "classroom",
//     initialState: {
//         students: [
//             { id: 1, name: "Alice" },
//             { id: 2, name: "Bob" },
//             { id: 3, name: "Charlie" },
//         ],
//     },
//     reducers: {
//         removeStudent: (state, action) => {
//             return state
//         },
//     },
//     selectors: {
//         selectStudents: (state) => state.students,
//     },
// })
//
// const { removeStudent } = slice.actions
// const { selectStudents } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const students = useAppSelector(selectStudents)
//     const dispatch = useAppDispatch()
//
//     const handleRemove = (id: number) => {
//         dispatch(removeStudent(id))
//     }
//
//     return (
//         <ul>
//             {students.map((student) => (
//                 <li key={student.id}>
//                     {student.name}
//                     <button onClick={() => handleRemove(student.id)}>✖</button>
//                 </li>
//             ))}
//         </ul>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         classroom: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку ✖ рядом с именем студента, студент не удаляется из списка 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку ✖, студент удалялся из списка.
// В качестве ответа укажите исправленный код написанный вместо return state.
// ❗Изменение стейта должно быть написано мутабельным образом
// ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// ❗Не создавайте переменные из action.payload (const id = action.payload.id)
// classroom: slice.reducer -

// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "library",
//     initialState: {
//         collection: {
//             books: [
//                 { id: 1, title: "1984" },
//                 { id: 2, title: "Brave New World" },
//             ],
//         },
//     },
//     reducers: {
//         removeBook: (state, action) => {
//             state.collection.books.pop()
//         },
//     },
//     selectors: {
//         selectBooks: (state) => state.collection.books,
//     },
// })
//
// const { removeBook } = slice.actions
// const { selectBooks } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const books = useAppSelector(selectBooks)
//     const dispatch = useAppDispatch()
//
//     const removeLastBook = () => {
//         if (books.length > 0) {
//             dispatch(removeBook(books[books.length - 1].id))
//         }
//     }
//
//     return (
//         <>
//             <button onClick={removeLastBook}>Remove Last Book</button>
//             <ul>
//                 {books.map((book) => (
//                     <li key={book.id}>{book.title}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         library: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку Remove Last Book, последняя книга в коллекции не удаляется 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Remove Last Book,
// последняя книга удалялась из коллекции.
// В качестве ответа укажите исправленный код написанный вместо return state.
// ❗Изменение стейта должно быть написано мутабельным образом.
// state.collection.books.pop() +


// import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "fruits",
//     initialState: {
//         basket: [
//             { id: 1, name: "Apple" },
//             { id: 2, name: "Banana" },
//         ],
//     },
//     reducers: {
//         addFruit: (state, action) => {
//             state.basket.push(action.payload)
//         },
//     },
//     selectors: {
//         selectBasket: (state) => state.basket,
//     },
// })
//
// const { addFruit } = slice.actions
// const { selectBasket } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const fruits = useAppSelector(selectBasket)
//     const dispatch = useAppDispatch()
//
//     const addNewFruit = () => {
//         const newFruit = { id: nanoid(), name: "Orange" }
//         dispatch(addFruit(newFruit))
//     }
//
//     return (
//         <>
//             <button onClick={addNewFruit}>Add Fruit</button>
//             <ul>
//                 {fruits.map((fruit) => (
//                     <li key={fruit.id}>{fruit.name}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         fruits: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку Add Fruit, новый фрукт не добавляется в корзину 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Add Fruit,
// новый фрукт добавлялся в корзину
// В качестве ответа укажите исправленную строку кода.
// ❗Изменение стейта должно быть написано мутабельным образом
// state.basket.push(action.payload) +


// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Comment = {
//     postId: string
//     id: string
//     name: string
//     email: string
//     body: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const commentsAPI = {
//     getComments() {
//         return instance.get<Comment[]>("comments")
//     },
//     createComment() {
//         const payload = {
//             body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
//         }
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//         return instance.post<Comment>("comments", payload)
//     },
// }
//
// // App
// export const App = () => {
//     const [comments, setComments] = useState<Comment[]>([])
//
//     useEffect(() => {
//         commentsAPI.getComments().then((res) => {
//             setComments(res.data)
//         })
//     }, [])
//
//     const createPostHandler = () => {
//         commentsAPI.createComment().then((res: any) => {
//             const newComment = res.data
//             setComments([newComment, ...comments])
//         })
//     }
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             <div style={{ marginBottom: "15px" }}>
//                 <button style={{ marginLeft: "15px" }} onClick={() => createPostHandler()}>
//                     Добавить новый комментарий
//                 </button>
//             </div>
//
//             {comments.map((c) => {
//                 return (
//                     <div key={c.id}>
//                         <b>Comment</b>: {c.body}{" "}
//                     </div>
//                 )
//             })}
//         </>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Напишите запрос на сервер для создания нового комментария.
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.
// return instance.post("comments", payload) +

// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "waterCounter",
//     initialState: {
//         liters: 10,
//     },
//     reducers: {
//         count: (state) => {
//             console.log(current(state))
//         },
//     },
//     selectors: {
//         selectLiters: (state) => state.liters,
//     },
// })
//
// const { count } = slice.actions
// const { selectLiters } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const water = useAppSelector(selectLiters)
//     const dispatch = useAppDispatch()
//
//     return (
//         <>
//             <button onClick={() => dispatch(count())}>Get Water</button>
//             <span>{water} liters</span>
//         </>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         waterCounter: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// Откройте панель разработчика и нажмите на кнопку Get Water
// В консоли вы увидите такой результат
// Proxy(Object) {type_: 0, scope_: {…}, modified_: false, finalized_: false, assigned_: {…},

// 🪛 Задача:
// Выведите в консоль state таким образом, чтобы получить вот такой результат {liters: 10}
// В качестве ответа укажите исправленную строку кода.
// console.log(current(state)) +


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "temperature",
//     initialState: {
//         celsius: 20,
//     },
//     reducers: {
//         increase: (state) => {
//             return state.celsius += 1
//         },
//     },
//     selectors: {
//         selectCelsius: (state) => state.celsius,
//     },
// })
//
// const { increase } = slice.actions
// const { selectCelsius } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const temp = useAppSelector(selectCelsius)
//     const dispatch = useAppDispatch()
//
//     return (
//         <>
//             <button onClick={() => dispatch(increase())}>Increase Temp</button>
//             <span>{temp}°C</span>
//         </>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         temperature: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку Increase Temp температура не увеличивается 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Increase Temp,
// температура увеличивалась на 1 градус
// В качестве ответа укажите исправленную строку кода.
// ❗Изменение стейта должно быть написано мутабельным образом
// return state.celsius += 1 -

// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Post = {
//     body: string
//     id: string
//     title: string
//     userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<Post[]>("posts")
//     },
//     deletePost(id: string) {
//         return instance.delete<{ message: string }>(`posts/${id}`)
//     },
// }
//
// // App
// export const App = () => {
//     const [posts, setPosts] = useState<Post[]>([])
//
//     useEffect(() => {
//         postsAPI.getPosts().then((res) => {
//             setPosts(res.data)
//         })
//     }, [])
//
//     const deletePostHandler = (id: string) => {
//         postsAPI.deletePost(id).then(() => {
//             const newPostsArr = posts.filter((p) => p.id !== id)
//             setPosts(newPostsArr)
//         })
//     }
//
//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.map((p) => {
//                 return (
//                     <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <button style={{ marginLeft: "15px" }} onClick={() => deletePostHandler(p.id)}>
//                             x
//                         </button>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Почему не удаляется post при нажатии на кнопку удаления (х) ?
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа
// return instance.delete<{ message: string }>(`posts/${id}`); +


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//     name: "classroom",
//     initialState: {
//         students: [
//             { id: 1, name: "Alice" },
//             { id: 2, name: "Bob" },
//             { id: 3, name: "Charlie" },
//         ],
//     },
//     reducers: {
//         removeStudent: (state, action) => {
//             const index = state.students.findIndex(item => item.id === action.payload.id)
//             if (index !== -1) {
//                 state.students.splice(index, 1)
//             }
//         },
//     },
//     selectors: {
//         selectStudents: (state) => state.students,
//     },
// })
//
// const { removeStudent } = slice.actions
// const { selectStudents } = slice.selectors
//
// // App.tsx
// const App = () => {
//     const students = useAppSelector(selectStudents)
//     const dispatch = useAppDispatch()
//
//     const handleRemove = (id: number) => {
//         dispatch(removeStudent(id))
//     }
//
//     return (
//         <ul>
//             {students.map((student) => (
//                 <li key={student.id}>
//                     {student.name}
//                     <button onClick={() => handleRemove(student.id)}>✖</button>
//                 </li>
//             ))}
//         </ul>
//     )
// }
//
// // store.ts
// const store = configureStore({
//     reducer: {
//         classroom: slice.reducer,
//     },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// )

