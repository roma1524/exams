// import { useEffect } from "react"
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