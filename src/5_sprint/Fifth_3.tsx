// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Сколько всего веток может быть в репозитории ?</h2>
//       <ul>
//         <li>1 - 2 ветки. master(main) и develop</li>
//         <li>2 - Число веток согласовывается в команде разработчиков и устанавливается в git config</li>
//         <li>
//           3 - Всегда есть ветка master (main), develop может быть по соглашения команды разработчиков. Под каждую фичу
//           создается новая ветка. При этом от ветки с фичей запрещено создавать новые ветки
//         </li>
//         <li>4 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Сколько всего веток может быть в репозитории ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1

// 1 2 3 4 --

// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch } from "react-redux"
// import { BrowserRouter, NavLink, Route, Routes, useNavigate } from "react-router"
//
// type Product = {
//   id: string
//   title: string
//   description: string
//   price: number
// }
//
// type ProductsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Product[]
// }
//
// type Film = {
//   id: number
//   nameOriginal: string
//   description: string
//   ratingImdb: number
// }
//
// type FilmsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Film[]
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getFilms: builder.query<FilmsResponse, void>({
//         query: () => "films",
//       }),
//       getProducts: builder.query<ProductsResponse, void>({
//         query: () => "products",
//       }),
//     }
//   },
// })
//
// const { useGetFilmsQuery, useGetProductsQuery } = api
//
// // Films.tsx
// const Films = () => {
//   const { data } = useGetFilmsQuery()
//
//   return (
//     <>
//       <h1>Films</h1>
//       {data?.data.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           movie title - <b>{el.nameOriginal}</b>
//         </div>
//       ))}
//     </>
//   )
// }
//
// const Products = () => {
//   const { data } = useGetProductsQuery()
//
//   return (
//     <>
//       <h1>Products</h1>
//       {data?.data.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           title - <b>{el.title}</b>
//         </div>
//       ))}
//     </>
//   )
// }
//
// export const App = () => {
//   const navigate = useNavigate()
//
//   const dispatch = useDispatch()
//
//   const leaveSiteHandler = () => {
//     navigate("/")
//     dispatch(api.util.resetApiState())
//     // ❗❗❗XXX❗❗❗
//   }
//
//   return (
//     <>
//       <header style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid" }}>
//         <ul>
//           Menu:
//           <li>
//             <NavLink to={"films"}>Films</NavLink>
//           </li>
//           <li>
//             <NavLink to={"products"}>Products</NavLink>
//           </li>
//         </ul>
//         <button onClick={leaveSiteHandler}>Leave the site</button>
//       </header>
//
//       <Routes>
//         <Route path={"/"} element={<h1>Home page</h1>} />
//         <Route path={"/films"} element={<Films />} />
//         <Route path={"/products"} element={<Products />} />
//       </Routes>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// )

// 📜 Описание:
// Перейди на страницу фильмов и убедись, что фильмы подгрузились
// Перейди на страницу продуктов и убедись, что продукты подгрузились
// Открой redux devtools и убедись, что фильмы и продукты сохранились в кеше

// 🪛 Задача:
// При нажатии на кнопку `Leave the site` необходимо очисть весь RTK query кеш
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗`, чтобы реализовать данную задачу

// dispatch(api.util.resetApiState()) +++


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useSelector } from "react-redux"
//
// // App slice
// type NotificationLevel = "loading" | "none" | "success" | "error"
//
// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     notification: "none" as NotificationLevel
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     // ❗❗❗XXX❗❗❗
//     builder
//       .addMatcher(api.endpoints.getPhotos.matchPending, (state) => {
//         state.notification = "loading"
//       })
//       .addMatcher(api.endpoints.getPhotos.matchFulfilled, (state) => {
//         state.notification = "success"
//       })
//       .addMatcher(api.endpoints.getPhotos.matchRejected, (state) => {
//         state.notification = "error"
//       })
//   },
//   selectors: {
//     selectNotification: (slice) => slice.notification
//   }
// })
//
// const { selectNotification } = appSlice.selectors
//
// // Api
// type Photo = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getPhotos: builder.query<Photo[], void>({
//       query: () => "photos?delay=2"
//     })
//   })
// })
//
// const { useGetPhotosQuery } = api
//
// // App.tsx
// const App = () => {
//   const notification = useAppSelector(selectNotification)
//
//   const { data } = useGetPhotosQuery()
//
//   return (
//     <>
//       {notification === "loading" && <b style={{ fontSize: "36px" }}>🕝Загрузка...</b>}
//       {notification === "success" && <b style={{ fontSize: "36px" }}>✅ Успех</b>}
//       {notification === "error" && <b style={{ fontSize: "36px" }}>❌ Ошибка</b>}
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ margin: "5px", padding: "5px", width: "200px" }}>
//             <b>title</b> - {el.title}
//             <img src={el.url} alt={`${el.title} image`} />
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [appSlice.name]: appSlice.reducer,
//     [api.reducerPath]: api.reducer
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
// })
//
// type RootState = ReturnType<typeof store.getState>
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

// 📜 Описание:
// При загрузке приложения пользователь видит пустой экран и только спустя 2 секунды видит информацию.

// 🪛 Задача:
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗` для того, чтобы при загрузке приложения
// пользователь увидел `🕝Загрузка...`, в случае успешной загрузки увидел `✅ Успех`, а в случае
// ошибки `❌ Ошибка`

// 💡 Подсказка: для решения задачи используйте addMatcher
// // ❗Порядок обработки нотификаций: загрука, успех, ошибка

// builder
//   .addMatcher(api.endpoints.getPhotos.matchPending, (state) => {
//     state.notification = "loading"
//   })
//   .addMatcher(api.endpoints.getPhotos.matchFulfilled, (state) => {
//     state.notification = "success"
//   })
//   .addMatcher(api.endpoints.getPhotos.matchRejected, (state) => {
//     state.notification = "error"
//   })  +++


// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Какое из приведенных ниже определений верно?</h2>
//       <ol>
//         <li>
//           1 - Команда git push используется для выгрузки содержимого локального репозитория в удаленный репозиторий. Она
//           позволяет передать коммиты из локального репозитория в удаленный.
//         </li>
//         <li>
//           2 - Команда git pull используется для обновления локальной версии репозитория, синхронизируя её с содержимым
//           удалённого репозитория
//         </li>
//         <li>
//           3 - Команда git fetch загружает коммиты, файлы и ссылки из удаленного репозитория в ваш локальный репозиторий.
//           Извлеките данные с помощью команды fetch, если хотите увидеть, над чем работают остальные.
//         </li>
//         <li>4 - Ни одно из вышеперечисленных определений не верно</li>
//       </ol>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Какое из приведенных ниже определений верно?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1
// 1 2 3 +++

// import { configureStore, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useSelector } from "react-redux"
//
// // Slice
// type RequestStatus = "idle" | "loading" | "succeeded" | "failed"
//
// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     status: "idle" as RequestStatus,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(isPending, (state, action) => {
//         // "❗X"
//         if (action.type.endsWith('/getPosts')) {
//           state.status = "loading"
//         }
//       })
//       .addMatcher(isFulfilled, (state) => {
//         state.status = "succeeded"
//       })
//       .addMatcher(isRejected, (state) => {
//         state.status = "failed"
//       })
//   },
//   selectors: {
//     selectStatus: (state) => state.status,
//   },
// })
//
// const { selectStatus } = appSlice.selectors
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: async (args, api, extraOptions) => {
//     await new Promise((resolve) => setTimeout(resolve, 2000)) // Эмуляция задержки
//
//     return fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" })(args, api, extraOptions)
//   },
//   tagTypes: ["Post"],
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//         providesTags: ["Post"],
//       }),
//       updatePost: builder.mutation<Post, { id: string; payload: { title: string; body: string } }>({
//         query: ({ id, payload }) => ({
//           method: "PUT",
//           url: `posts/${id}`,
//           body: payload,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//       removePost: builder.mutation<{ message: string }, string>({
//         query: (id) => ({
//           method: "DELETE",
//           url: `posts/${id}`,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//     }
//   },
// })
//
// const { useGetPostsQuery, useUpdatePostMutation, useRemovePostMutation } = api
//
// // Components
// const Header = () => <div style={{ width: "100%", background: "gray", border: "none", height: "50px" }}>header</div>
//
// const LinearProgress = () => (
//   <hr
//     style={{
//       height: "10px",
//       width: "100%",
//       background: "lightblue",
//       border: "none",
//       position: "absolute",
//       left: "0px",
//       top: "50px",
//       right: "0px",
//     }}
//   />
// )
//
// const App = () => {
//   const status = useSelector(selectStatus)
//
//   return (
//     <div>
//       <Header />
//       {status === "loading" && <LinearProgress />}
//       <Posts />
//     </div>
//   )
// }
//
// const Posts = () => {
//   const { data, isSuccess, isLoading } = useGetPostsQuery()
//   const [updatePost] = useUpdatePostMutation()
//   const [removePost] = useRemovePostMutation()
//
//   const updatePostHandler = (id: string) => {
//     updatePost({ id, payload: { title: "Тестовый title", body: "Тестовое body сообщение" } })
//   }
//
//   const deletePostHandler = (id: string) => {
//     removePost(id)
//   }
//
//   if (isLoading) {
//     return <h2>Posts loading...</h2>
//   }
//
//   return (
//     <div>
//       {isSuccess && (
//         <div>
//           <h2>Posts</h2>
//           {data?.map((el) => {
//             return (
//               <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//                 <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//                   <p>
//                     <b>title</b> - {el.title}
//                   </p>
//                 </div>
//                 <button onClick={() => updatePostHandler(el.id)}>Update post</button>
//                 <button onClick={() => deletePostHandler(el.id)}>Delete post</button>
//               </div>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [appSlice.name]: appSlice.reducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// 📜 Описание:
// Обновите страницу и обратите внимание, что при загрузке постов отрабатывает для загрузчика:
// 1. LinearProgress (голубая полоска под хедером)
// 2. Posts loading...
// А при обновлении или удалении поста только LinearProgress

// 🪛 Задача:
// Что нужно написать вместо "❗X" для того, чтобы при загрузке постов осталась надпись только
// Posts loading..., а LinearProgress не отображался. Но при этом для обновления или обновления
// поста как и прежде LinearProgress должен отрабатывать

// if (action.type.endsWith('/getPosts')) {
//   state.status = "loading"
// } -----


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // Slice
// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     error: null as string | null,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//   }),
//   selectors: {
//     selectError: (state) => state.error,
//   },
// })
//
// const { selectError } = appSlice.selectors
// const { setError } = appSlice.actions
//
// // Api
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// type Error = {
//   errors: { field: string; message: string }[]
// }
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: async (args, api, extraOptions) => {
//     const result = await fetchBaseQuery({
//       baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/",
//     })(args, api, extraOptions)
//
//     if (result.error) {
//       if (result.error.status === 400) {
//         const error = (result.error.data as Error).errors[0].message
//         api.dispatch(setError({ error }))
//       }
//     }
//     return result
//   },
//   tagTypes: ["Post"],
//   endpoints: (builder) => ({
//     getPosts: builder.query<Post[], void>({
//       query: () => "posts",
//       providesTags: ["Post"],
//     }),
//     removePost: builder.mutation<{ message: string }, string>({
//       query: (id) => ({
//         method: "DELETE",
//         url: `posts/${id}?delay=20`,
//       }),
//       invalidatesTags: ["Post"],
//     }),
//   }),
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // UI
// const Header = () => <div style={{ width: "100%", background: "gray", border: "none", height: "50px" }}>header</div>
//
// const LinearProgress = () => (
//   <hr
//     style={{
//       height: "10px",
//       width: "100%",
//       background: "lightblue",
//       border: "none",
//       position: "absolute",
//       left: "0px",
//       top: "50px",
//       right: "0px",
//     }}
//   />
// )
//
// const App = () => {
//   const error = useSelector(selectError)
//
//   const dispatch = useDispatch()
//
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setError({ error: null }))
//     }, 4000)
//   }, [error])
//
//   return (
//     <>
//       <Header />
//       {error && <h1 style={{ color: "red" }}>{error}</h1>}
//       <Posts />
//     </>
//   )
// }
//
// const Posts = () => {
//   const { data, isSuccess, isLoading: isPostsLoading } = useGetPostsQuery()
//   const [removePost, { isLoading: isRemovePostLoading }] = useRemovePostMutation()
//
//   const deletePostHandler = (id: string) => {
//     removePost(id)
//   }
//
//   if (isPostsLoading || isRemovePostLoading) {
//     return <LinearProgress />
//   }
//
//   return (
//     <>
//       {isSuccess && (
//         <>
//           <h2>Posts</h2>
//           {data?.map((el) => {
//             return (
//               <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//                 <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//                   <p>
//                     <b>title</b> - {el.title}
//                   </p>
//                 </div>
//                 <button onClick={() => deletePostHandler(el.id)}>Delete post</button>
//               </div>
//             )
//           })}
//         </>
//       )}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [appSlice.name]: appSlice.reducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// 📜 Описание:
// Нажмите на кнопку удаления поста. Пост не удалится.

// 🪛 Задача:
// Ваша задача состоит в том, что разобраться почему пост не удаляется и вывести сообщение
// об ошибке на экран.
// Что нужно написать вместо "❗X" для того, чтобы при удалении поста он увидел ошибку
// ❗ Для типизации ошибки используйте type assertion с типом Error

  // (result.error.data as Error).errors[0].message  +++


// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
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
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: async (args, api, extraOptions) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000)) // Эмуляция задержки
//
//     return fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" })(args, api, extraOptions)
//   },
//   endpoints: (builder) => {
//     const url = Math.random() < 0.5 ? "todos" : "todos👺"
//     return {
//       todolists: builder.query<Todolist[], void>({
//         query: () => url,
//       }),
//     }
//   },
// })
//
// const { useTodolistsQuery } = api
//
// // Component
// const App = () => {
//   // ❗Использовать деструктуризацию запрещено
//   const data = useTodolistsQuery()
//
//   return (
//     <>
//       {
//         <>
//           {data.data?.map((t) => {
//             return (
//               <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                 <input type="checkbox" checked={t.completed} />
//                 <b>Описание</b>: {t.title}
//               </div>
//             )
//           })}
//         </>
//       }
//       {data.isLoading && <h2>Загрузка...</h2>}
//       {data.isSuccess && <h2>👩‍💻 Секретный код: BHOlh#</h2>}
//       {data.isError && <h2> Error: 👺👺👺</h2>}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// 📜 Описание:
// Тудулисты с вероятностью в 50% подгружаюся успешно или падают с ошибкой.
// Но изначально на экране мы видим: Загрузку, секретный код и сообщение об ошибке

// 🪛 Задача:
// Что нужно написать вместо "❗X","❗Y" и "❗Z" для того, чтобы:
// 1. Загрузка показывалась только во время загрузки
// 2. Секретный код показывалась только если запрос прошел успешно
// 3. Ошибка показывалась только в случае ошибки

// ❗ Ответ дайте через пробел
// 🖥 Пример ответа: one two three +++


// import { configureStore, nanoid } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   tagTypes: ["Post"],
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//         providesTags: ["Post"],
//       }),
//       removePost: builder.mutation<{ message: string }, string>({
//         query: (id) => ({
//           method: "DELETE",
//           url: `posts/${id}`,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//     }
//   },
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data: posts } = useGetPostsQuery()
//   const [removePost] = useRemovePostMutation()
//
//   const removePostHandler = (id: string) => {
//     removePost(nanoid())
//       .unwrap()
//       .then(() => {
//         alert(`✅ The post was successfully deleted`)
//       })
//       .catch((err) => {
//         alert(`❌ The post was not deleted: ${err.data.errors}`)
//       })
//   }
//
//   return (
//     <>
//       {posts?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <p>
//                 <b>title</b> - {el.title}
//               </p>
//             </div>
//             <button onClick={() => removePostHandler(el.id)}>x</button>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// 📜 Описание:
// При нажатии на кнопку удаления поста (х), вы увидите alert с сообщением о том, что пост успешно
// удален.
// Но на самом деле падает ошибка. Откройте панель разработчика и посмотрите network.
// Запрос падает с 400 ошибкой

// 🪛 Задача:
// Что нужно дописать в коде, чтобы в случае ошибки отработал catch и пользователь увидел
// сообщение об ошибке.
// В качестве ответа укажите добавленный вами код
// ❗Чинить удаление поста не нужно

  // .unwrap() +++


// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch } from "react-redux"
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
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getUsers: builder.query<UsersResponse, void>({
//         query: () => "users",
//       }),
//     }
//   },
// })
//
// const { useGetUsersQuery } = api
//
// // Users.tsx
// const Users = () => {
//   const { data } = useGetUsersQuery()
//
//   const dispatch = useAppDispatch()
//
//   const addSmileHandler = (id: string) => {
//     const smile = "😁"
//     // ❗❗❗XXX❗❗❗
//     dispatch(api.util.updateQueryData('getUsers', undefined, (state) => {
//       const findUser = state.items.find(u => u.id === id)
//       if(findUser) {
//         findUser.name += smile
//       }
//     }))
//   }
//
//   return (
//     <>
//       <h1>Users</h1>
//       {data?.items.map((el) => (
//         <div key={el.id}>
//           name - <b>{el.name}</b>
//           <button onClick={() => addSmileHandler(el.id)}>Add smile</button>
//         </div>
//       ))}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <Users />
//   </Provider>,
// )

// 📜 Описание:
// Откройте redux devtools и убедитесь, что данные из запроса хранятся в кеше
// http://surl.li/veofpd
// 🪛 Задача:
// При нажатии на кнопку `Add smile` необходимо изменить данные в кеше и добавить к имени переменную
// smile
// Результат: http://surl.li/kgmhtn
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗`, чтобы реализовать данную задачу
// ❗Изменение стейта должно быть написано мутабельным образом
// ❗updateRecipe коллбек в качетстве аргумента принимает стейт. Назовите эту переменную state

// dispatch(api.util.updateQueryData('getUsers', undefined, (state) => {
//   const findUser = state.items.find(u => u.id === id)
//   if(findUser) {
//     findUser.name += smile
//   }
// })) +++