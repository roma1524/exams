import { ChangeEvent, FormEvent, useState } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type LoginFields = {
//   email: string
//   password: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   login(data: LoginFields) {
//     return instance.post<{ token: string }>("auth/login", data)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     error: null as string | null,
//     isLoggedIn: false,
//   },
//   selectors: {
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     login: create.asyncThunk(
//       async (data: LoginFields, thunkAPI) => {
//         try {
//           await api.login(data)
//           return { isLoggedIn: true }
//         } catch (error: any) {
//
//           return thunkAPI.rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.isLoggedIn = action.payload.isLoggedIn
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { login, setError } = slice.actions
// const { selectError } = slice.selectors
//
// // Login
// const Login = () => {
//   const dispatch = useAppDispatch()
//
//   const [data, setData] = useState<LoginFields>({ email: "", password: "" })
//
//   const error = useAppSelector(selectError)
//
//   const changeFormValuesHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }
//
//   const submitForm = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     dispatch(login(data))
//   }
//
//   return (
//     <>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <form onSubmit={submitForm}>
//         <input name="email" placeholder={"Введите email"} value={data.email} onChange={changeFormValuesHandler} />
//         <input
//           name="password"
//           type={"password"}
//           placeholder={"Введите пароль"}
//           value={data.password}
//           onChange={changeFormValuesHandler}
//         />
//         <button type="submit">Залогиниться</button>
//       </form>
//     </>
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
//     <Login />
//   </Provider>,
// )
// // 📜 Описание:
// // Перед вами форма логинизации. Введите любые логин и пароль и попробуйте залогиниться.
// // У вас это навряд ли получится 😈, т.к. вы не знаете email и пароль.
// // Откройте Network и проанализируйте запрос.
// // Что необходимо написать вместо `// ❗XXX` чтобы на экране отобразилась ошибка говорящая о том,
// // что email или password некорректны.
// // ❗ Типизировать error не надо
// // ❗ Ошибку по умолчанию ("Some error occurred") отрабатывать не нужно
//
//
//
//
//
// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Post = {
//   id: string
//   body: string
//   title: string
//   userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/ " })
//
// const postsAPI = {
//   getPosts() {
//     return instance.get<Post[]>("posts")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "posts",
//   initialState: {
//     posts: [] as Post[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectPosts: (state) => state.posts,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchPosts: create.asyncThunk<{ posts: Post[] }, void, { rejectValue: string }>(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await postsAPI.getPosts()
//           return { posts: res.data }
//         } catch (error) {
//           let errorMessage = "Some error occurred"
//           if (axios.isAxiosError(error)) {
//             errorMessage = error.message || errorMessage
//           } else if (error instanceof Error) {
//             errorMessage = `Native error: ${error.message}`
//           } else {
//             errorMessage = JSON.stringify(error)
//           }
//           return rejectWithValue(errorMessage)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.posts = action.payload.posts
//         },
//         rejected: (state, action) => {
//           state.error = action.payload || "Some error occurred"
//         }
//       },
//     ),
//   }),
// })
//
// const postsReducer = slice.reducer
// const { fetchPosts } = slice.actions
// const { selectPosts, selectError } = slice.selectors
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//
//   const posts = useAppSelector(selectPosts)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchPosts())
//   }, [])
//
//   return (
//     <>
//       <h1>📜 Список постов</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <b>Описание</b>: {post.body}
//         </div>
//       ))}
//       <h2 style={{ color: "red" }}>{!!error && error}</h2>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: postsReducer,
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
// // ❌ Посты не подгрузились. Произошла какая-то ошибка.
// // ❗Чинить приложение не нужно (если только для себя, в ответе это не учитывается).
// // Что необходимо написать вместо `// ❗XXX` чтобы на экране отобразилась ошибка: Request failed with status code 404.
// // А если вернется undefined, то показать пользователю ошибку по умолчанию: "Some error occurred"
// // ❗Выносить "Some error occurred" в переменную не нужно
// // ❗Ответ можно писать в несколько строк, в экзамене это учтено
//
//
//
//
//
//
// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
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
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "comments",
//   initialState: {
//     comments: [] as Comment[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectComments: (state) => state.comments,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     fetchPhotos: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await commentsAPI.getComments()
//           console.log('res')
//           return { comments: res.data }
//         } catch (error) {
//           return rejectWithValue(error)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.comments = action.payload.comments
//           state.error = null
//         },
//         rejected: (state) => {
//           state.error = "❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и исправь ее"
//         },
//       },
//     ),
//   }),
// })
//
// const commentsReducer = slice.reducer
// const { fetchPhotos } = slice.actions
// const { selectComments, selectError } = slice.selectors
//
// // App
// export const App = () => {
//   const dispatch = useAppDispatch()
//
//   const comments = useAppSelector(selectComments)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchPhotos())
//   }, [])
//
//   return (
//     <>
//       <h1>📝 Список комментариев</h1>
//       <h2>{!!error && error}</h2>
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
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: commentsReducer,
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
// // ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// // В данном задании вам нужно найти ошибку и починить приложение.
// // Если сделаете все верно, то увидите комментарии.
// // В качестве ответа указать исправленную строку коду
//
//
//
//
// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type DomainPost = Post & {
//   disabled: boolean
// }
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const postsAPI = {
//   getPosts() {
//     return instance.get<Post[]>("posts")
//   },
//   deletePost(id: string) {
//     return instance.delete<{ message: string }>(`posts/${id}?delay=3`)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "posts",
//   initialState: {
//     isLoading: false,
//     posts: [] as DomainPost[],
//   },
//   selectors: {
//     selectPosts: (state) => state.posts,
//     selectIsLoading: (state) => state.isLoading,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     setDisable: create.reducer<{ disabled: boolean; id: string }>((state, action) => {
//       const post = state.posts.find((post) => post.id === action.payload.id)
//       if (post) {
//         post.disabled = action.payload.disabled
//       }
//     }),
//     fetchPosts: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await postsAPI.getPosts()
//           return { posts: res.data }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           action.payload.posts.forEach((post) => {
//             state.posts.push({ ...post, disabled: false })
//           })
//         },
//       },
//     ),
//     deletePost: create.asyncThunk(
//       async (id: string, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           dispatch(setDisable({ disabled: true, id }))
//           await postsAPI.deletePost(id)
//           return { id }
//         } catch (error) {
//           dispatch(setDisable({ disabled: false, id }))
//           return rejectWithValue(null)
//         } finally {
//           dispatch(setLoading({ isLoading: false }))
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           const index = state.posts.findIndex((post) => post.id === action.payload.id)
//           if (index !== -1) {
//             state.posts.splice(index, 1)
//           }
//         },
//       },
//     ),
//   }),
// })
//
// const postsReducer = slice.reducer
// const { setLoading, fetchPosts, deletePost, setDisable } = slice.actions
// const { selectPosts, selectIsLoading } = slice.selectors
//
// // Loader
// const Loader = () => {
//   return <h1>🔘 Loading ...</h1>
// }
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//
//   const posts = useAppSelector(selectPosts)
//   const isLoading = useAppSelector(selectIsLoading)
//
//   useEffect(() => {
//     dispatch(fetchPosts())
//   }, [])
//
//   const deletePostHandler = (id: string) => {
//     dispatch(deletePost(id))
//   }
//
//   console.log(isLoading)
//
//   return (
//     <>
//       <div style={{ position: "absolute", top: "0px" }}>{isLoading && <Loader />}</div>
//       <div style={{ marginTop: "100px" }}>
//         <h1>📜 Список постов</h1>
//         {posts.map((post) => {
//           return (
//             <div key={post.id}>
//               <b>title</b>: <span style={{ marginRight: "15px" }}>{post.title}</span>
//               <button disabled={post.disabled} onClick={() => deletePostHandler(post.id)}>удалить пост</button>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: postsReducer,
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
// // Перед вами список постов.
// // Откройте network и быстро нажмите на кнопку удалить пост несколько раз подряд.
// // Откройте вкладку Preview и проанализируйте ответ с сервера
// // Первое сообщение будет "Post has been successfully deleted",
// // а следующие "Post with id: 63626ac315d01f80765587ee does not exist"
// // Т.е. бэкенд первый раз удаляет, а потом уже не может, т.к. пост удален из базы данных.
//
// // Ваша задача при первом клике задизаблить кнопку удаления,
// // соответсвенно не давать пользователю возможности слать повторные запросы.
// // ❗ Необходимо задизаблить кнопку именно удаляемого поста, а не все кнопки.
// // ❗ В качестве ответа укажите добавленный код
//
//
//
// // Задача: Получение первого элемента массива
// // Реализуй дженериковую функцию getFirstElement<T>,
// // которая принимает массив элементов и возвращает первый элемент массива.
// // Если массив пуст, функция должна вернуть undefined
//
// // const getFirstElement = <T>(arr: T[]): T | undefined => {
// //     return arr[0]
// //   }
//
//   // Примеры использования:
//   console.log(getFirstElement([1, 2, 3])) // 1
//   console.log(getFirstElement(["apple", "banana", "cherry"])) // "apple"
//   console.log(getFirstElement([])) // undefined
//
//   // В качестве ответа напиши переписанную функцию getFirstElement
//   // ❗Для обозначения дженерика используйте `T`
//   // Пример ответа:
//
//
//
//
//   import { createRoot } from "react-dom/client"
//   import { Provider, useDispatch, useSelector } from "react-redux"
//   import axios from "axios"
//   import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
//   // Types
//   type Photo = {
//     albumId: string
//     id: string
//     title: string
//     url: string
//   }
//
//   // Api
//   const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
//   const photosAPI = {
//     getPhotos() {
//       const url = Math.random() < 0.5 ? "photos" : "pictures👺"
//       return instance.get<Photo[]>(`${url}?delay=2`)
//     },
//   }
//
//   // Slice
//   const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
//   const slice = createAppSlice({
//     name: "photo",
//     initialState: {
//       photos: [] as Photo[],
//       isLoading: false,
//       error: null as string | null,
//     },
//     selectors: {
//       selectPhotos: (state) => state.photos,
//       selectIsLoading: (state) => state.isLoading,
//       selectError: (state) => state.error,
//     },
//     reducers: (create) => ({
//       setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//         state.isLoading = action.payload.isLoading
//       }),
//       fetchPhotos: create.asyncThunk(
//         async (_arg, { dispatch, rejectWithValue }) => {
//           try {
//             dispatch(setLoading({ isLoading: true }))
//             const res = await photosAPI.getPhotos()
//             return { photos: res.data }
//           } catch (error) {
//             return rejectWithValue(null)
//           }
//         },
//         {
//           fulfilled: (state, action) => {
//             state.photos = action.payload.photos
//             state.error = null
//           },
//           rejected: (state) => {
//             state.error = "Error retrieving photos"
//           },
//           settled: (state, action) => {
//             state.isLoading = false
//           }
//         },
//       ),
//     }),
//   })
//
//   const photoReducer = slice.reducer
//   const { fetchPhotos, setLoading } = slice.actions
//   const { selectPhotos, selectIsLoading, selectError } = slice.selectors
//
//   // Loader
//   const Loader = () => {
//     return <h1>🔘 Loading ...</h1>
//   }
//
//   // App
//   const App = () => {
//     const dispatch = useAppDispatch()
//
//     const photos = useAppSelector(selectPhotos)
//     const isLoading = useAppSelector(selectIsLoading)
//     const error = useAppSelector(selectError)
//
//     const getPhotosHandler = () => {
//       dispatch(fetchPhotos())
//     }
//
//     return (
//       <>
//         <h1>📸 Фото</h1>
//         <h2 style={{ color: "red" }}>{!!error && error}</h2>
//         {isLoading && <Loader />}
//         <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//         <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
//           {photos.map((photo) => {
//             return (
//               <div key={photo.id}>
//                 <b>title</b>: {photo.title}
//                 <div>
//                   <img src={photo.url} alt="" />
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </>
//     )
//   }
//
//   // Store
//   const store = configureStore({
//     reducer: {
//       [slice.name]: photoReducer,
//     },
//   })
//
//   type RootState = ReturnType<typeof store.getState>
//   type AppDispatch = typeof store.dispatch
//   const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//   const useAppSelector = useSelector.withTypes<RootState>()
//
//   createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   )
//   // 📜 Описание:
//   // Фотографии с вероятностью в 50% подгружаюся успешно или падают с ошибкой.
//   // При нажатии на кнопку "Подгрузить фотографии" с вероятностью в 50% подгружаюся успешно или падают с ошибкой.
//   // Но Loader висит всегда.
//   // Что необходимо написать вместо `//❗ XXX`, чтобы спрятать Loader независимо от того, как завершится запрос на сервер.
//   // Т.е. если ответ придет успешный - Loader убираем
//   //      если ответ придет с ошибкой - Loader тоже убираем.
//   // ❗Ответ можно писать в несколько строк, в экзамене это учтено
//
//
//
//   import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore, Dispatch } from "@reduxjs/toolkit"
// import { unknown } from "zod"
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
// const handleErrors = (dispatch: Dispatch, errorMessage: string) => {
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