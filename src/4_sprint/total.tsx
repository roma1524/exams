import { useEffect } from "react"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// type User = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponse = {
//   items: User[]
//   totalCount: number
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getTodos() {
//     return instance.get<Todolist[]>("todos")
//   },
//   getUsers() {
//     return instance.get<UsersResponse>("users")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     todolists: [] as Todolist[],
//     users: [] as User[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectTodolists: (state) => state.todolists,
//     selectUsers: (state) => state.users,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchTodolists: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           // ❗AAA
//           const res = await api.getTodos()
//           console.log(res.data)
//           // ❗BBB
//           // return {todolists: res.data}
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.todolists = action.payload.todolists
//         },
//       },
//     ),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           // ❗CCC
//           const res = await api.getUsers()
//           console.log(res.data.items)
//           // ❗DDD
//           // return { users: res.data }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { fetchTodolists, fetchUsers } = slice.actions
// const { selectTodolists, selectUsers, selectError } = slice.selectors
//
// // App
// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Todos />
//         <Users />
//       </div>
//     </>
//   )
// }
//
// const Todos = () => {
//   const dispatch = useAppDispatch()
//   const todolists = useAppSelector(selectTodolists)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchTodolists())
//   }, [])
//
//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {todolists.map((todolist) => (
//         <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
//           <input type="checkbox" checked={todolist.completed} />
//           <b>Описание</b>: {todolist.title}
//         </div>
//       ))}
//     </div>
//   )
// }
//
// const Users = () => {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector(selectUsers)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])
//
//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <div>
//         {users.map((user) => {
//           return (
//             <div key={user.id}>
//               <b>name</b>:{user.name} - <b>age</b>:{user.age}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: appReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Что нужно написать вместо // ❗AAA, ❗BBB, ❗CCC, ❗DDD для того чтобы на экране
// // отобразился список тудулистов и юзеров
// // Каждый ответ укажите на новой строке или через пробел соблюдая порядок
//
// // Пример ответа:
// // const a = 1 + 1
// // return a
// // const c = 1 + 3
// // return c
//
//
// const res = await api.getTodos()
// return {todolists: res.data}
// const res = await api.getUsers()
// return { users: res.data }


// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const commentsAPI = {
//   getComments() {
//     return instance.get<Comment[]>("comments")
//   },
//   createComment() {
//     const payload = {
//       body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
//     }
//     // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//     // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//     return instance.post<Comment>("comments", payload)
//   },
// }
//
// // App
// export const App = () => {
//   const [comments, setComments] = useState<Comment[]>([])
//
//   useEffect(() => {
//     commentsAPI.getComments().then((res) => {
//       setComments(res.data)
//     })
//   }, [])
//
//   const createPostHandler = () => {
//     commentsAPI.createComment().then((res: any) => {
//       const newComment = res.data
//       setComments([newComment, ...comments])
//     })
//   }
//
//   return (
//     <>
//       <h1>📝 Список комментариев</h1>
//       <div style={{ marginBottom: "15px" }}>
//         <button style={{ marginLeft: "15px" }} onClick={() => createPostHandler()}>
//           Добавить новый комментарий
//         </button>
//       </div>
//
//       {comments.map((c) => {
//         return (
//           <div key={c.id}>
//             <b>Comment</b>: {c.body}{" "}
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Напишите запрос на сервер для создания нового комментария.
// // Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// // Исправленную версию строки напишите в качестве ответа.
// return instance.post<Comment>("comments", payload)


// import { createRoot } from "react-dom/client"
// import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router"
//
// type User = {
//   id: number
//   name: string
//   avatar: string
//   age: number
//   address: string
// }
//
// const users: User[] = [
//   {
//     id: 1,
//     name: "my Name",
//     age: 32,
//     avatar: "—ฅ/ᐠ.̫ .ᐟ\\ฅ—",
//     address: "my Address",
//   },
//   {
//     id: 2,
//     name: "John",
//     age: 22,
//     avatar: ":)",
//     address: "California",
//   },
//   {
//     id: 3,
//     name: "Mike",
//     age: 18,
//     avatar: "^._.^",
//     address: "New York",
//   },
//   {
//     id: 4,
//     name: "Emma",
//     age: 38,
//     avatar: "/ᐠ-ꞈ-ᐟ\\",
//     address: "Washington",
//   },
// ]
//
// const StartPage = () => {
//   const navigate = useNavigate()
//   const friends = users.filter((u) => u.id !== 1)
//
//   const mappedFriends = friends.map((f, i) => {
//     const go = () => {
//       navigate("/friend/" + f.id)
//     }
//
//     return (
//       <div key={i} onClick={go} style={{ paddingLeft: 24, color: "blue", cursor: "pointer" }}>
//         {f.name}, {f.age}
//       </div>
//     )
//   })
//
//   return (
//     <div>
//       <h2>🙂 My profile</h2>
//       <Profile userId={1} />
//       <hr />
//       <h2>👪 Friends</h2>
//       {mappedFriends}
//     </div>
//   )
// }
//
// const Profile = ({ userId }: { userId?: number }) => {
//   const { id } = useParams<{ id: string }>()
//   const user = users.find((u) => u.id === +(id || userId || 0))
//
//   return (
//     <div>
//       <div>
//         <b>avatar</b> {user?.avatar}
//       </div>
//       <div>
//         <div>
//           <b>name</b>: {user?.name}
//         </div>
//         <div>
//           <b>age</b>: {user?.age}
//         </div>
//         <div>
//           <b>address</b>: {user?.address}
//         </div>
//       </div>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path={"/"} element={<StartPage />} />
//       <Route path={"friend/:id"} element={<Profile />} />
//       <Route path={"*"} element={<h1>❌404 Page Not Found❌</h1>} />
//     </Routes>
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // При загрузке приложения на экране отображается
// // профиль пользователя и список друзей.
// // Если кликнуть на пользователя, то видим ❌404 Page Not Found❌
// // Исправьте код, чтобы по клику на пользователя
// // отображалась странице с информацией о друге.
// // В качестве ответа укажите исправленную строку кода.
// <Route path={"friend/:id"} element={<Profile />} />




// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "playlist",
//   initialState: {
//     albums: [
//       {
//         id: 1,
//         title: "Album 1",
//         songs: [
//           { id: 1, title: "Song 1-1" },
//           { id: 2, title: "Song 1-2" },
//         ],
//       },
//       {
//         id: 2,
//         title: "Album 2",
//         songs: [
//           { id: 3, title: "Song 2-1" },
//           { id: 4, title: "Song 2-2" },
//         ],
//       },
//     ],
//   },
//   reducers: {
//     removeLastSongFromAlbum: (state, action) => {
//       console.log(action.payload)
//       const elArr = state.albums.find(item => item.id === action.payload)
//       console.log(elArr)
//       if (elArr) {
//         elArr.songs.pop()
//       }
//       return state
//     },
//   },
//   selectors: {
//     selectAlbums: (state) => state.albums,
//   },
// })
//
// const { removeLastSongFromAlbum } = slice.actions
// const { selectAlbums } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const albums = useAppSelector(selectAlbums)
//   const dispatch = useAppDispatch()
//
//   const removeLastSong = (albumId: number) => {
//     dispatch(removeLastSongFromAlbum(albumId))
//   }
//
//   return (
//     <>
//       {albums.map((album) => (
//         <div key={album.id}>
//           <h3>{album.title}</h3>
//           <button onClick={() => removeLastSong(album.id)}>Remove Last Song</button>
//           <ul>
//             {album.songs.map((song) => (
//               <li key={song.id}>{song.title}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     playlist: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Плейлист разделён на альбомы, и каждая кнопка Remove Last Song должна удалять последнюю песню из соответствующего альбома.
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы описание выше выполнялось
// // В качестве ответа укажите исправленный код написанный вместо return state.
// // ❗Изменение стейта должно быть написано мутабельным образом.
// // ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// // ❗Не создавайте переменные из action.payload (const id = action.payload.id)
// const album = state.albums.find(a => a.id === action.payload)
// if (album && album.songs.length > 0) {
//   album.songs.pop()
// }


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "products",
//   initialState: [
//     { id: 1, name: "Laptop", inStock: true, price: 1500 },
//     { id: 2, name: "Smartphone", inStock: false, price: 800 },
//     { id: 3, name: "Tablet", inStock: true, price: 600 },
//   ],
//   reducers: {
//     applyDiscount: (state, action) => {
//       const discount = action.payload / 100;
//       state.forEach((el) => {
//         el.price = el.price * (1 - discount);
//       })
//     },
//   },
//   selectors: {
//     selectProducts: (state) => state,
//   },
// })
//
// const { applyDiscount } = slice.actions
// const { selectProducts } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const products = useAppSelector(selectProducts)
//   const dispatch = useAppDispatch()
//
//   const handleDiscount = (discount: number) => {
//     dispatch(applyDiscount(discount))
//   }
//
//   return (
//     <div>
//       <button onClick={() => handleDiscount(10)}>10% Discount</button>
//       <button onClick={() => handleDiscount(30)}>30% Discount</button>
//       <button onClick={() => handleDiscount(50)}>50% Discount</button>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <span>
//               {product.name} ({product.inStock ? "In Stock" : "Out of Stock"}) - ${product.price.toFixed(2)}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     products: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопки с 10%, 30% или 50% скидками цены всех продуктов должны уменьшиться на
// // указанный процент.
//
// // 🪛 Задача:
// // Перепишите изменение стейта так, чтобы цена каждого продукта уменьшалась на указанный процент.
// // В качестве ответа укажите исправленный код написанный вместо return state.
// // ❗Операция должна быть реализована мутабельным образом.
//
// const discount = action.payload / 100;
// state.forEach((el) => {
//   el.price = el.price * (1 - discount);
// })

// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore, Dispatch } from "@reduxjs/toolkit"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// type User = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponse = {
//   items: User[]
//   totalCount: number
// }
//
// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getTodos() {
//     return instance.get<Todolist[]>("todo")
//   },
//   getUsers() {
//     return instance.get<UsersResponse>("user")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     todolists: [] as Todolist[],
//     users: [] as User[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectTodolists: (state) => state.todolists,
//     selectUsers: (state) => state.users,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchTodolists: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           const res = await api.getTodos()
//           return { todolists: res.data }
//         } catch (error: any) {
//           handleErrors(dispatch, error.message)
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.todolists = action.payload.todolists
//         },
//       },
//     ),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           const res = await api.getUsers()
//           return { users: res.data.items }
//         } catch (error: any) {
//           handleErrors(dispatch, error.message)
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { setError, fetchTodolists, fetchUsers } = slice.actions
// const { selectTodolists, selectUsers, selectError } = slice.selectors
//
// // Utils functions
// const handleErrors = (dispatch: AppDispatch, errorMessage: string) => {
//   dispatch(setError({ error: errorMessage }))
// }
//
// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Todos />
//         <Users />
//       </div>
//     </>
//   )
// }
//
// const Todos = () => {
//   const dispatch = useAppDispatch()
//   const todolists = useAppSelector(selectTodolists)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchTodolists())
//   }, [])
//
//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {todolists.map((todolist) => (
//         <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
//           <input type="checkbox" checked={todolist.completed} />
//           <b>Описание</b>: {todolist.title}
//         </div>
//       ))}
//     </div>
//   )
// }
//
// const Users = () => {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector(selectUsers)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])
//
//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <div>
//         {users.map((user) => (
//           <div key={user.id}>
//             <b>name</b>:{user.name} - <b>age</b>:{user.age}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: appReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
// // 📜 Описание:
// // Откройте network и вы увидите что запросы за тудулистами и пользователями падают с ошибками,
// // но пользователе не видит ошибок, потому что утилитная функция handleErrors написана неверно.
// // Ваша задача дописать функцию handleErrors, чтобы пользователь на экране увидел ошибки:
// // 'Request failed with status code 404'
// //❗ Код фиксить не нужно.
// //❗ Тип any типизации указывать запрещено
// // В качестве ответа укажите полностью написанную функцию
//
// // Пример ответа:
// // const handleErrors = () => {
// //   console.log("error")
// // }
// const handleErrors = (dispatch: AppDispatch, errorMessage: string) => {
//   dispatch(setError({ error: errorMessage }))
// }


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // oxygenCounter slice
// const oxygenSlice = createSlice({
//   name: "oxygenCounter",
//   initialState: {
//     percent: 21,
//   },
//   reducers: {
//     increase: (state) => {
//       state.percent += 1
//     },
//   },
//   selectors: {
//     selectPercent: (state) => state.percent,
//   },
// })
// const { increase } = oxygenSlice.actions
// const { selectPercent } = oxygenSlice.selectors
//
// // temperature slice
// const temperatureSlice = createSlice({
//   name: "temperatureCounter",
//   initialState: {
//     celsius: 20,
//   },
//   reducers: {},
//   selectors: {
//     selectCelsius: (state) => state.celsius,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(increase, (state) => {
//       state.celsius += 2
//     })
//   }
// })
//
// const { selectCelsius } = temperatureSlice.selectors
//
// // App.tsx
// const App = () => {
//   const oxygen = useAppSelector(selectPercent)
//   const temperature = useAppSelector(selectCelsius)
//   const dispatch = useAppDispatch()
//
//   return (
//     <>
//       <button onClick={() => dispatch(increase())}>Add Oxygen</button>
//       <div>Oxygen: {oxygen}%</div>
//       <hr />
//       <div>Temperature: {temperature}°C</div>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     oxygenCounter: oxygenSlice.reducer,
//     temperatureCounter: temperatureSlice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // У вас есть два счетчика: для уровня кислорода (%) и температуры (°C).
// // При нажатии на кнопку Add Oxygen увеличивается уровень кислорода.
//
// // 🪛 Задача:
// // Реализуйте следующую задачу:
// // При нажатии на кнопку Add Oxygen помимо увеличения уровня кислорода
// // реализуйте увеличении температуры на 2°C
//
// // В качестве ответа укажите добавленный вами код
// // ❗Операция должна быть реализована мутабельным образом.
// // 💡Подсказка. Используйте extraReducers
//
// extraReducers: (builder) => {
//   builder.addCase(increase, (state) => {
//     state.celsius += 2
//   })
// }


// import { CSSProperties } from "react"
// import { createRoot } from "react-dom/client"
// import { BrowserRouter, NavLink, Route, Routes } from "react-router"
//
// const footer: CSSProperties = {
//   padding: 10,
//   background: "lightslategrey",
// }
//
// const link: CSSProperties = {
//   color: "lightsalmon",
//   fontSize: 20,
// }
//
// const Dragons = () => {
//   return <h1>🐲 🐲 🐲</h1>
// }
//
// const Cats = () => {
//   return <h1>😺 🐱 😼</h1>
// }
//
// const Dogs = () => {
//   return <h1>🐶 🐶 🐶</h1>
// }
//
// const PageNotFound = () => {
//   return <h1>4️⃣0️⃣4️⃣</h1>
// }
//
// const Menu = () => {
//   return (
//     <ul>
//       <li>
//         <NavLink to={Path.Dragons} style={link}>
//           dragons
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Cats} style={link}>
//           cats
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Dogs} style={link}>
//           dogs
//         </NavLink>
//       </li>
//     </ul>
//   )
// }
//
// // Routing
// const Path = {
//   Dragons: "dragons",
//   Cats: "cats",
//   Dogs: "dogs",
// } as const
//
// const Routing = () => {
//   return (
//     <Routes>
//       <Route path={"/"} element={<div></div>} />
//       <Route path={Path.Dragons} element={<Dragons />} />
//       <Route path={Path.Cats} element={<Cats />} />
//       <Route path={Path.Dogs} element={<Dogs />} />
//       <Route path={"*"} element={<PageNotFound />} />
//     </Routes>
//   )
// }
//
// const App = () => {
//   return (
//     <>
//       <Menu />
//       <Routing />
//       <footer style={footer}>
//         <h2>Footer</h2>
//       </footer>
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // Реализуйте Page not found
//
// // 🪛 Задача:
// // Что нужно написать вместо {/*❗XXX */},
// // чтобы при url `http://localhost:3000/fsdfdsf` и других не существующих страницах
// // отработал роут Page not found
