// import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createRoot } from "react-dom/client";
// import { Provider, useSelector } from "react-redux";
//
// const notificationsSlice = createSlice({
//   name: "notifications",
//   initialState: {
//     messages: [] as { type: "success" | "error" }[],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     // ❗❗❗XXX❗❗❗
//     // builder.addMatcher(
//     //   (action) => action.type.endsWith('/fulfilled'),
//     //   (state) => {
//     //     state.messages.push({ type: 'success' });
//     //   }
//     // ).addMatcher(
//     //   (action) => action.type.endsWith('/rejected'),
//     //   (state) => {
//     //     state.messages.push({ type: 'error' });
//     //   }
//     // );
//   },
//   selectors: {
//     selectMessages: (state) => state.messages,
//   },
// });
//
// export const { selectMessages } = notificationsSlice.selectors;
//
// type Post = {
//   body: string;
//   id: string;
//   title: string;
//   userId: string;
// };
//
// // Api
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
//       updatePost: builder.mutation<Post, { id: string; payload: { title: string; body: string } }>({
//         query: ({ id, payload }) => ({
//           method: "PUT",
//           url: `posts/${id}`,
//           body: payload,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//       removePost: builder.mutation<{ message: string }, string>({
//         query: () => ({
//           method: "DELETE",
//           url: `posts/${nanoid()}`,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//     };
//   },
// });
//
// const { useGetPostsQuery, useUpdatePostMutation, useRemovePostMutation } = api;
//
// // App.tsx
// export const Posts = () => {
//   const { data } = useGetPostsQuery();
//   const [updatePost] = useUpdatePostMutation();
//   const [removePost] = useRemovePostMutation();
//
//   const updatePostHandler = (id: string) => {
//     updatePost({ id, payload: { title: "Тестовый title", body: "Тестовое body сообщение" } });
//   };
//
//   const deletePostHandler = (id: string) => {
//     removePost(id);
//   };
//
//   return (
//     <div style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//       <h2>Posts</h2>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <p>
//                 <b>title</b> - {el.title}
//               </p>
//             </div>
//             <button onClick={() => updatePostHandler(el.id)}>Update post</button>
//             <button onClick={() => deletePostHandler(el.id)}>Delete post</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
//
// export const Notifications = () => {
//   const messages = useAppSelector(selectMessages);
//
//   return (
//     <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//       <h2>Notifications</h2>
//       {messages?.map((m) => {
//         return (
//           <div>
//             {m.type === "success" ? (
//               <b style={{ color: "green" }}>Success</b>
//             ) : (
//               <b style={{ color: "red" }}>Error</b>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
//
// const App = () => {
//   return (
//     <div style={{ display: "flex", gap: "100px" }}>
//       <Notifications />
//       <Posts />
//     </div>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [notificationsSlice.name]: notificationsSlice.reducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// type RootState = ReturnType<typeof store.getState>;
// const useAppSelector = useSelector.withTypes<RootState>();
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

// 📜 Описание:
// При загрузке приложения слева отображается блок с уведомлениями (Notifications), а справа
// блок с постами (Posts).
// Откройте панель разработчика и попробуйте обновить пост. Вы увидите 2 успешных запроса.
// Теперь попробуйте удалить пост. Вы увидите, что первый запрос за удалением поста падает с ошибкой,
// а второй за получением всех постов отрабатывает успешно.

// 🪛 Задача:
// Ваша задача состоим в том чтобы написать систему оповещений, которая реагирует на каждый action.
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗` для того, чтобы отлавливать каждый экшен и если
// он отработал успешно, то блоке Notifications появится сообщение Success, а если ошибка Error
// Выглядеть блок должен примерно вот так: http://surl.li/slhhwi
// ❗Выводить тип экшкена, доставить конкретную ошибку и прочее не надо.

// 💡 Подсказка: для решения задачи используйте addMatcher (для успеха и ошибки). +++


// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import { z } from "zod"
//
// // Types
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
// // ZOD schemas
// const productSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   description: z.string(),
//   price: z.number().positive(),
// })
//
// const productsResponseSchema = z.object({
//   total: z.number().int().positive(),
//   messages: z.array(z.string()),
//   page: z.number().int().positive(),
//   pageCount: z.number().int().positive(),
//   data: z.array(productSchema),
// })
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getProducts() {
//     return instance.get<ProductsResponse>("products")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "products",
//   initialState: {
//     products: [] as Product[],
//   },
//   selectors: {
//     selectProducts: (state) => state.products,
//   },
//   reducers: (create) => ({
//     fetchProducts: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await api.getProducts()
//           productsResponseSchema.parse(res.data) // 💎 ZOD
//           return { products: res.data.data }
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
//           state.products = action.payload.products
//         },
//       },
//     ),
//   }),
// })
//
// const filmsReducer = slice.reducer
// const { fetchProducts } = slice.actions
// const { selectProducts } = slice.selectors
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const products = useAppSelector(selectProducts)
//
//   useEffect(() => {
//     dispatch(fetchProducts())
//   }, [])
//
//   return (
//     <>
//       <h2>🛒 Products</h2>
//       {products.map((product) => {
//         return (
//           <div key={product.id}>
//             <b>{product.title}</b>
//             <p>{product.description}</p>
//             <p>💵 {product.price} $</p>
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

// ❗Убедитесь, что у вас установлена библиотека zod.
// Если нет, то установите `pnpm add zod`

// При загрузке приложения падает с ошибкой (Zod error),
// т.к. productsResponseSchema описана неверно.
// Ваша задача на основании типа ProductsResponse устранить все ошибки в productsResponseSchema,
// чтобы проверка прошла и фильмы подгрузились
// ❗Числа (total, page, pageCount) должны проверяться, что они целые и положительные
// ❗ Менять порядок свойств в схеме запрещено
// ❗ Выносить дублирующиеся проверки в отдельную переменную не надо

// В качестве ответа укажите productsResponseSchema целиком

// Пример ответа
// const productsResponseSchema = z.object({
//   total: z.any(),
//   messages: z.any(),
//   page: z.any(),
//   pageCount: z.string(),
//   data: z.any(),
// }) +++



// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
// import { useState } from "react"
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
//   tagTypes: ["Post"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api" }),
//   endpoints: (builder) => ({
//     getPosts: builder.query<Post[], void>({
//       query: () => "posts",
//       providesTags: ["Post"],
//     }),
//     removePost: builder.mutation<{ message: string }, string>({
//       query: (id) => ({
//         method: "DELETE",
//         url: `posts/${id}?delay=3`,
//       }),
//       async onQueryStarted(id, { queryFulfilled, dispatch }) {
//         const patchResult = dispatch(
//           api.util.updateQueryData("getPosts", undefined, (state) => {
//             const index = state.findIndex((post) => post.id === id)
//             if (index !== -1) {
//               state.splice(index, 1)
//             }
//           }),
//         )
//         try {
//           // ❗❗❗XXX ❗❗❗
//           await queryFulfilled
//         } catch (error) {
//           patchResult.undo()
//           // ❗❗❗YYY ❗❗❗
//         }
//       },
//       invalidatesTags: ["Post"],
//     }),
//   }),
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetPostsQuery()
//   const [removePost] = useRemovePostMutation()
//
//   const [loadingId, setLoadingId] = useState<string | null>(null)
//
//   const removePostHandler = (id: string) => {
//     setLoadingId(id)
//     removePost(id).finally(() => {
//       setLoadingId(null)
//     })
//   }
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             {loadingId === el.id && <h3>Loading...</h3>}
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <b>title</b> - {el.title}
//             </div>
//             <button onClick={() => removePostHandler(el.id)}>X</button>
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

// Optimistic update для удаления поста почти реализован.
// Что необходимо написать вместо // ❗❗❗XXX ❗❗❗ и // ❗❗❗YYY ❗❗❗
// для последующего отката изменений в случае ошибки при запросе на сервер? +++



// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Для чего используется файл .gitignore ?</h2>
//       <ul>
//         <li>1 — Чтобы зашифровать конфиденциальные данные и спрятать их от GitHub</li>
//         <li>2 — Чтобы Git не отслеживал изменения в файлах указанных в gitignore</li>
//         <li>3 — Для хранения в нём паролей и API-ключей</li>
//         <li>4 — Чтобы отменить последний коммит</li>
//         <li>
//           5 - Файл .gitignore не несет никакой смысловой нагрузки, т.к. все файлы с которыми мы работаем должны
//           отслеживаться. Соответственно никакие файлы в .gitignore добавлять не нужно
//         </li>
//         <li>6 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Для чего используется файл в .gitignore ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет зачитан как неправильный

// 🖥 Пример ответа: 2 +++


// import { configureStore } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
//
// type Post = {
//   body: string;
//   id: string;
//   title: string;
//   userId: string;
// };
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//       }),
//       //❗При написании типизации соблюдайте порядок аргументов как и при вызове функции updatePost
//       // ❗❗❗XXX❗❗❗
//       updatePost: builder.mutation<Post, { id: string; payload: { title: string; body: string } }>({
//         query: ({ id, payload }) => ({
//           method: "PUT",
//           url: `posts/${id}`,
//           body: payload,
//         }),
//       }),
//     };
//   },
// });
//
// const { useGetPostsQuery, useUpdatePostMutation } = api;
//
// // App.tsx
// const App = () => {
//   const { data } = useGetPostsQuery();
//   const [updatePost] = useUpdatePostMutation();
//
//   const updatePostHandler = (id: string) => {
//     updatePost({ id, payload: { title: "Тестовый title", body: "Тестовое body сообщение" } });
//   };
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div
//               key={el.id}
//               style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}
//             >
//               <p>
//                 <b>title</b> - {el.title}
//               </p>
//             </div>
//             <button onClick={() => updatePostHandler(el.id)}>Update post</button>
//           </div>
//         );
//       })}
//     </>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

// 📜 Описание:
// Приложение падает с ошибкой.

// 🪛 Задача:
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗` для реализации обновления поста
// В качестве ответа укажите написанный вами код
// ❗Автоматическое получение данных реализовывать не надо
// ❗Типизацию указывать обязательно +++


// import { configureStore } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider, useDispatch } from "react-redux";
// import { BrowserRouter, NavLink, Route, Routes } from "react-router";
//
// type Product = {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
// };
//
// type ProductsResponse = {
//   total: number;
//   messages: string[];
//   page: number;
//   pageCount: number;
//   data: Product[];
// };
//
// type Film = {
//   id: number;
//   nameOriginal: string;
//   description: string;
//   ratingImdb: number;
// };
//
// type FilmsResponse = {
//   total: number;
//   messages: string[];
//   page: number;
//   pageCount: number;
//   data: Film[];
// };
//
// type Post = {
//   body: string;
//   id: string;
//   title: string;
//   userId: string;
// };
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   tagTypes: ["Film", "Product", "Post"],
//   endpoints: (builder) => {
//     return {
//       getFilms: builder.query<FilmsResponse, void>({
//         query: () => "films",
//         providesTags: ["Film"],
//       }),
//       getProducts: builder.query<ProductsResponse, void>({
//         query: () => "products",
//         providesTags: ["Product"],
//       }),
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//         providesTags: ["Post"],
//       }),
//     };
//   },
// });
//
// const { useGetFilmsQuery, useGetProductsQuery, useGetPostsQuery } = api;
//
// // Films.tsx
// const Films = () => {
//   const { data } = useGetFilmsQuery();
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
//   );
// };
//
// const Products = () => {
//   const { data } = useGetProductsQuery();
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
//   );
// };
//
// const Posts = () => {
//   const { data } = useGetPostsQuery();
//
//   const dispatch = useDispatch();
//
//   const clearCacheHandler = () => {
//     // ❗❗❗XXX❗❗❗
//     dispatch(api.util.invalidateTags(['Film','Product']))
//   };
//
//   return (
//     <>
//       <h1>Posts</h1>
//       <button onClick={clearCacheHandler}>I clear cache. Mu-ha-ha 👺</button>
//       {data?.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           title - <b>{el.title}</b>
//         </div>
//       ))}
//     </>
//   );
// };
//
// export const App = () => {
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
//           <li>
//             <NavLink to={"posts"}>Posts</NavLink>
//           </li>
//         </ul>
//       </header>
//
//       <Routes>
//         <Route path={"/"} element={<h1>Home page</h1>} />
//         <Route path={"/films"} element={<Films />} />
//         <Route path={"/products"} element={<Products />} />
//         <Route path={"/posts"} element={<Posts />} />
//       </Routes>
//     </>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// );

// 📜 Описание:
// Перейди на страницу фильмов и убедись, что фильмы подгрузились
// Перейди на страницу продуктов и убедись, что продукты подгрузились
// Перейди на страницу постов и убедись, что посты подгрузились
// Открой redux devtools и убедись, что фильмы, продукты и посты сохранились в кеше

// 🪛 Задача:
// На странице постов есть кнопка `I clear cache. Mu-ha-ha 👺`. При нажатии на эту кнопку
// необходимо зачистить кеш фильмов и продуктов
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗`, чтобы реализовать данную задачу +++


// import { createRoot } from "react-dom/client"
// import React, { useState } from "react"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { configureStore } from "@reduxjs/toolkit"
// import { Provider } from "react-redux"
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: "collapse",
//   width: "100%",
//   tableLayout: "fixed",
// }
//
// const th: React.CSSProperties = {
//   padding: "10px",
//   border: "1px solid black",
//   background: "lightgray",
//   cursor: "pointer",
// }
//
// const td: React.CSSProperties = {
//   padding: "10px",
//   border: "1px solid black",
// }
//
// // Api
// type User = {
//   id: number
//   name: string
//   age: number
// }
//
// type UserResponse = {
//   totalCount: number
//   items: User[]
// }
//
// type SortDirection = "asc" | "desc" | null
// type SortBy = "name" | "age" | null
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<UserResponse, { sortDirection: SortDirection; sortBy: SortBy }>({
//       query: ({ sortDirection, sortBy }) => {
//         return {
//           url: `users`,
//           params: {
//             sortDirection,
//             sortBy,
//           },
//         }
//       },
//     }),
//
//   }),
// })
//
// const { useGetUsersQuery } = api
//
// // App
//
// export const App = () => {
//   const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
//   const [sortBy, setSortBy] = useState<SortBy>("age")
//
//   const { data } = useGetUsersQuery({ sortDirection, sortBy })
//
//   const sortHandler = (name: "name" | "age") => {
//     const direction = sortDirection === "asc" ? "desc" : "asc"
//     setSortDirection(direction)
//     setSortBy(name)
//   }
//
//   return (
//     <>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//         <tr>
//           <th style={th} onClick={() => sortHandler("name")}>
//             Name
//           </th>
//           <th style={th} onClick={() => sortHandler("age")}>
//             Age
//           </th>
//         </tr>
//         </thead>
//         <tbody>
//         {data?.items.map((user) => (
//           <tr key={user.id}>
//             <td style={td}>{user.name}</td>
//             <td style={td}>{user.age}</td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
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
// При загрузке приложения отрисовывается таблица с пользователями.
// Нажмите на Name или Age и вы увидите как идет запрос на сервер.
// При нажатии на Age пользователи должны сортироваться по возрасту,
// а при нажатии на Name по имени
// Однако из-за того, что код getUsers написан неверно данные в таблицы не сортируются.

// Перепишите getUsers таким образом, чтобы пагинация сортировка отрабатывала верно
// ❗Типизацию указывать обязательно
// ❗Очередность применения query параметров.
// Первым: sortDirection, вторым sortBy.
// Это касается и типизации и все остальных участках кода,
// если вам понадобится доставать эти параметры

// Пример ответа
// getUsers: builder.query<{ sortDirection: any; sortBy: any >({
//       query: () => {
//         return {
//           url: `users`,
//         }
//       },
//     }), ---


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
//   // ❗ XXX
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