// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// type Note = {
//   id: number
//   content: string
//   important: boolean
// }
//
// // slice
// const slice = createSlice({
//   name: "notes",
//   initialState: {
//     items: [
//       { id: 1, content: "Buy groceries", important: false },
//       { id: 2, content: "Schedule meeting", important: true },
//       { id: 3, content: "Call mom", important: false },
//     ],
//   },
//   reducers: {
//     updateNote: (state, action) => {
//       const note = state.items.find(n => n.id === action.payload.id)
//       if (note) {
//         note.important = action.payload.important
//       }
//       return state
//     },
//   },
//   selectors: {
//     selectNotes: (state) => state.items,
//   },
// })
//
// const { updateNote } = slice.actions
// const { selectNotes } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const notes = useAppSelector(selectNotes)
//   const dispatch = useAppDispatch()
//
//   const toggleImportance = (note: Note) => {
//     dispatch(updateNote({ id: note.id, important: !note.important }))
//   }
//
//   return (
//     <ul>
//       {notes.map((note) => (
//         <li key={note.id}>
//           <span
//             style={{
//               fontWeight: note.important ? "bold" : "normal",
//             }}
//           >
//             {note.content}
//           </span>
//           <button onClick={() => toggleImportance(note)}>{note.important ? "Unmark" : "Mark Important"}</button>
//         </li>
//       ))}
//     </ul>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     notes: slice.reducer,
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

// 📜 Описание:
// При нажатии на кнопку Mark Important или Unmark рядом с заметкой, важность заметки не обновляется 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Mark Important или Unmark,
// состояние важности заметки обновлялось.
// В качестве ответа укажите исправленный код написанный вместо return state.
// ❗Изменение стейта должно быть написано мутабельным образом
// ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// ❗Не создавайте переменные из action.payload (const id = action.payload.id)


// import { configureStore, createSlice, current } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "waterCounter",
//   initialState: {
//     liters: 10,
//   },
//   reducers: {
//     count: (state) => {
//       console.log(current(state))
//     },
//   },
//   selectors: {
//     selectLiters: (state) => state.liters,
//   },
// })
//
// const { count } = slice.actions
// const { selectLiters } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const water = useAppSelector(selectLiters)
//   const dispatch = useAppDispatch()
//
//   return (
//     <>
//       <button onClick={() => dispatch(count())}>Get Water</button>
//       <span>{water} liters</span>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     waterCounter: slice.reducer,
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

// 📜 Описание:
// Откройте панель разработчика и нажмите на кнопку Get Water
// В консоли вы увидите такой результат
// Proxy(Object) {type_: 0, scope_: {…}, modified_: false, finalized_: false, assigned_: {…},

// 🪛 Задача:
// Выведите в консоль state таким образом, чтобы получить вот такой результат {liters: 10}
// В качестве ответа укажите исправленную строку кода.

// ❗Для решения данной задачи использовать метод который предоставляет нам @reduxjs/toolkit


// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// type Product = {
//   id: number
//   name: string
//   inStock: boolean
// }
//
// // slice
// const slice = createSlice({
//   name: "products",
//   initialState: [
//     { id: 1, name: "Laptop", inStock: true },
//     { id: 2, name: "Headphones", inStock: false },
//     { id: 3, name: "Smartphone", inStock: true },
//   ] as Product[],
//   reducers: {
//     toggleInStock: (state, action) => {
//       const product = state.find((product) => product.id === action.payload.id)
//       if (product) {
//         product.inStock = action.payload.inStock
//       }
//     },
//     clearStock: (state) => {
//       state.length = 0
//     },
//   },
//   selectors: {
//     selectProducts: (state) => state,
//   },
// })
//
// const { toggleInStock, clearStock } = slice.actions
// const { selectProducts } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const products = useAppSelector(selectProducts)
//   const dispatch = useAppDispatch()
//
//   const handleLogout = () => {
//     dispatch(clearStock())
//   }
//
//   const toggleProductStock = (product: Product) => {
//     dispatch(toggleInStock({ id: product.id, inStock: !product.inStock }))
//   }
//
//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <span
//               style={{
//                 color: product.inStock ? "green" : "red",
//               }}
//             >
//               {product.name} ({product.inStock ? "In Stock" : "Out of Stock"})
//             </span>
//             <button onClick={() => toggleProductStock(product)}>
//               {product.inStock ? "Mark Out of Stock" : "Mark In Stock"}
//             </button>
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

// 📜 Описание:
// При нажатии на кнопку Logout массив товаров не очищается 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Logout,
// массив товаров полностью очищался.
// В качестве ответа укажите исправленную строку кода.

// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import axios from "axios"
// import { useEffect } from "react"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import { BrowserRouter, Route, Routes } from "react-router"
// import { createRoot } from "react-dom/client"
//
// // Utils
// console.log = () => {}
//
// // Api
// const instance = axios.create({
//   baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/",
// })
//
// const api = {
//   getUsers() {
//     /* 1 */
//     return instance.get("users")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "auth",
//   initialState: {
//     isLoading: false,
//     users: [] as any[],
//   },
//   selectors: {
//     selectIsLoading: (state) => state.isLoading,
//     selectUsers: (state) => state.users,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           /* 2 */
//           const res = await api.getUsers()
//           /* 3 */
//           return { users: res.data.items }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           /* 4 */
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const authReducer = slice.reducer
// const { setLoading, fetchUsers } = slice.actions
// const { selectUsers } = slice.selectors
//
// // Login
// const Login = () => {
//   const users = useAppSelector(selectUsers)
//
//   /* 5 */
//   return (
//     <div>
//       {users.map((u) => (
//         <p key={u.id}>{u.email}</p>
//       ))}
//       <h1>
//         В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и последовательно, спокойно
//         расставить цифры в нужном порядке. Прежде чем давать ответ обязательно посчитайте к-во цифр и сверьте с
//         подсказкой. Удачи 🚀
//       </h1>
//     </div>
//   )
// }
//
// // App
// const App = () => {
//   /* 6 */
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     /* 7 */
//     dispatch(fetchUsers())
//   }, [])
//
//   /* 8 */
//   return (
//     <Routes>
//       <Route path={"/"} element={<Login />} />
//     </Routes>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: authReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// )

// 📜 Описание:
// Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// 💡 Подсказка: будет 9 чисел.
// Ответ дайте через пробел.

// 🖥 Пример ответа: 1 2 3 4 5 6 7 8 9


// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { CSSProperties } from "react"
//
// // Styles
// const error: CSSProperties = {
//   color: "red",
// }
//
// // Schema
// const loginSchema = z.object({
//   username: z.string()
//   // ❗AAA // Username is required
//   // ❗BBB // Username must be at least 3 characters
//   // ❗CCC // Username must contain at most 20 characters
//   // ❗DDD // Only letters allowed
//     .min(1, { message: "Username is required" })
//     .min(3, { message: "Username must be at least 3 characters" })
//     .max(20, { message: "Username must contain at most 20 characters" })
//     .regex(/^[a-zA-Z]+$/, { message: "Only letters allowed" }),
//   email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
//   password: z.string().min(1, { message: "Password is required" }),
//   phone: z.string().regex(/^\+?[0-9]{10,15}$/, { message: "Invalid phone number" }),
// })
//
// type LoginFormValues = z.infer<typeof loginSchema>
//
// // Components
// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//   })
//
//   const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
//     console.log(data)
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Username */}
//       <div>
//         <label>Username</label>
//         <input {...register("username")} />
//         {errors.username && <span style={error}>{errors.username.message}</span>}
//       </div>
//
//       {/* Email */}
//       <div>
//         <label>Email</label>
//         <input {...register("email")} />
//         {errors.email && <span style={error}>{errors.email.message}</span>}
//       </div>
//
//       {/* Password */}
//       <div>
//         <label>Password</label>
//         <input type="password" {...register("password")} />
//         {errors.password && <span style={error}>{errors.password.message}</span>}
//       </div>
//
//       {/* Phone */}
//       <div>
//         <label>Phone (optional)</label>
//         <input {...register("phone")} placeholder="+1234567890" />
//         {errors.phone && <span style={error}>{errors.phone.message}</span>}
//       </div>
//
//       <button type="submit">Login</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)

// Что необходимо написать вместо ❗AAA, ❗BBB, ❗CCC, ❗DDD
// для того, чтобы валидировать Username согласно условиям написанным в схеме

// Пример ответа
//   .min(1, { message: "Username is required" })
//   .min(2, { message: "Username must be at least 3 characters" })
//   .min(3, { message: "Username must contain at most 20 characters" })
//   .min(4, { message: "Only latin letters allowed" }),

// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import { z } from "zod"
//
// // Types
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
// // ZOD schemas
// const filmSchema = z.object({
//   id: z.string(),
//   nameOriginal: z.string(),
//   description: z.string(),
//   ratingImdb: z.number(),
// })
//
// const filmsResponseSchema = z.object({
//   total: z.boolean(),
//   messages: z.any(),
//   page: z.any(),
//   pageCount: z.any(),
//   data: filmSchema.array(),
// })
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getFilms() {
//     return instance.get<FilmsResponse>("films")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "films",
//   initialState: {
//     films: [] as Film[],
//   },
//   selectors: {
//     selectFilms: (state) => state.films,
//   },
//   reducers: (create) => ({
//     fetchFilms: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await api.getFilms()
//           filmsResponseSchema.parse(res.data) // 💎 ZOD
//           return { films: res.data.data }
//         } catch (error) {
//           if (error instanceof z.ZodError) {
//             alert("Zod error")
//             console.table(error.issues)
//           }
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.films = action.payload.films
//         },
//       },
//     ),
//   }),
// })
//
// const filmsReducer = slice.reducer
// const { fetchFilms } = slice.actions
// const { selectFilms } = slice.selectors
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const films = useAppSelector(selectFilms)
//
//   useEffect(() => {
//     dispatch(fetchFilms())
//   }, [])
//
//   return (
//     <>
//       <h2>🎦 Films</h2>
//       {films.map((film) => {
//         return (
//           <div key={film.id}>
//             <b>{film.nameOriginal}</b>
//             <p>{film.description}</p>
//             <p>⭐ {film.ratingImdb} </p>
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
//     [slice.name]: filmsReducer,
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

// ❗Убедитесь, что у вас установлена библиотека zod. В описании к экзамену предупреждение было.
// Если нет, то установите `pnpm add zod`

// При загрузке приложения падает с ошибкой (Zod error),
// т.к. filmsResponseSchema описана неверно.
// Ваша задача на основании типа FilmsResponse устранить все ошибки в filmsResponseSchema,
// чтобы проверка прошла и фильмы подгрузились
// ❗Числа (total, page, pageCount) должны проверяться, что они целые и положительные
// ❗ Менять порядок свойств в схеме запрещено
// ❗ Выносить дублирующиеся проверки в отдельную переменную не надо

// В качестве ответа укажите filmsResponseSchema целиком

// Пример ответа
// const filmsResponseSchema = z.object({
//   total: z.boolean(),
//   messages: z.any(),
//   page: z.any(),
//   pageCount: z.any(),
//   data: z.any(),
// })


// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router"
// import { useEffect } from "react"
//
// // Types
// type Inputs = {
//   email: string
//   password: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   login(data: Inputs) {
//     return instance.post("auth/login", data)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: false,
//     isLoading: false,
//   },
//   selectors: {
//     selectIsLoggedIn: (state) => state.isLoggedIn,
//     selectIsLoading: (state) => state.isLoading,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     login: create.asyncThunk(
//       async (arg: Inputs, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           await api.login(arg)
//           return { isLoggedIn: true }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           alert("Вы залогинились успешно")
//           state.isLoggedIn = action.payload.isLoggedIn
//         },
//         settled: (state) => {
//           state.isLoading = false
//         },
//       },
//     ),
//   }),
// })
//
// const authReducer = slice.reducer
// const { setLoading, login } = slice.actions
// const { selectIsLoading, selectIsLoggedIn } = slice.selectors
//
// // Components
// const Loader = () => {
//   return <h1>Loading ...</h1>
// }
//
// const Profile = () => {
//   return <h2>😎 Profile</h2>
// }
//
// const Login = () => {
//   const dispatch = useAppDispatch()
//   const navigate = useNavigate()
//
//   const isLoading = useAppSelector(selectIsLoading)
//   const isLoggedIn = useAppSelector(selectIsLoggedIn)
//
//   const { register, handleSubmit } = useForm<Inputs>({
//     defaultValues: { email: "darrell@gmail.com", password: "123" },
//   })
//
//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate('/profile')
//     }
//   }, [isLoggedIn, navigate])
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     dispatch(login(data))
//   }
//
//   return (
//     <>
//       {isLoading && <Loader />}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input placeholder={"Введите email"} {...register("email")} />
//         <input type={"password"} placeholder={"Введите пароль"} {...register("password")} />
//         <button type="submit">Залогиниться</button>
//       </form>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: authReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <Routes>
//         <Route path={"/"} element={<Login />} />
//         <Route path={"profile"} element={<Profile />} />
//       </Routes>
//     </Provider>
//   </BrowserRouter>,
// )

// 📜 Описание:
// ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить
// успешный запрос.
// Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением

// Что необходимо написать вместо `❗ XXX`, чтобы
// при успешной логинизации, редиректнуть пользователя на страницу Profile.
// ❗ В консоли не должно быть ошибок