// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { useEffect, useState } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// // API
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
//       query: () => "photos?delay=1",
//     }),
//   }),
// })
//
// const { useGetPhotosQuery } = api
//
// // App.tsx
// const App = () => {
//   const { data, isSuccess, isLoading } = useGetPhotosQuery()
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false)
//
//   useEffect(() => {
//     // ❗X
//     /*let timerId: number
//
//     if (isSuccess) {
//       setShowSuccessMessage(true)
//       timerId = setTimeout(() => {
//         setShowSuccessMessage(false)
//       },  2000)
//     }
//     return () => {
//       clearInterval(timerId)
//     }*/
//   }, [isSuccess])
//
//   return (
//     <>
//       {isLoading && <b style={{ fontSize: "36px" }}>🕝Загрузка...</b>}
//       {showSuccessMessage && <b style={{ fontSize: "36px" }}>✅ Успех</b>}
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
//
// // 📜 Описание:
// // На экране мы видим загрузку и затенм результат от сервера (photos).
//
// // 🪛 Задача:
// // Что нужно написать вместо `// ❗X` для того, чтобы в случае успешного завершения запроса
// // пользователь увидел сообщение `✅ Успех` и через 2 секунды это сообщение должно исчезнуть
//
// // После загрузки приложения подгружается информация о photos и если запрос прошел успешно мы видим об этом информацию (✅ Успех) и через 2 секунды это сообщение исчезает http://surl.li/mhseut
// // ❗Ответ будет принят только в том случае если вы отработаете утечку памяти ---



// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>В каком случае возникают конфликты при слиянии веток ?</h2>
//       <ul>
//         <li>1 - В случае, когда в обеих ветках есть изменения одних и тех же строк</li>
//         <li>2 - В случае когда ветки были созданы от разных коммитов</li>
//         <li>3 - В случае когда ветки были созданы в разное время</li>
//         <li>4 - Конфликты не возникают, это устаревшая проблема. Сегодня git под капотом все сам может разрулить</li>
//         <li>5 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// В каком случае возникают конфликты при слиянии веток ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1 +++

/*import { createRoot } from "react-dom/client"

export const App = () => {
  return (
    <div>
      <h2>Какое из приведенных ниже определений верно ?</h2>
      <ul>
        <li>
          1 - После того как файл был проиндексирован с помощью git init и закоммичен, git будет отслеживать все
          следующие изменения в нём.
        </li>
        <li>
          2 - Ветки в Git представляют собой указатель на коммит. Если нужно добавить какую-то фичу или исправить баг
          (незначительный или серьезный), мы создаём новую ветку. Она будет содержать все изменения, которые мы хотим
          добавить в репозиторий.
        </li>
        <li>
          3 - Команда git add создает новый репозиторий Git. С ее помощью можно преобразовать существующий проект без
          управления версиями в репозиторий Git или инициализировать новый пустой репозиторий
        </li>
        <li>4 - Ни одно из вышеперечисленных определений не верно</li>
      </ul>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<App />)*/

// 📜 Описание:
// Какое из приведенных ниже определений верно ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1
// 2 +++



/*import { configureStore } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

type Comment = {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

// Api
const api = createApi({
  reducerPath: "commentsApi",
  tagTypes: ["Comment"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => "comments",
      providesTags: ["Comment"],
      // ❗❗❗XXX ❗❗❗
      transformResponse: (response: Comment[]) => {
        return response.reverse();
      },
    }),
    addComment: builder.mutation<Comment, string>({
      query: (title) => ({
        method: "POST",
        url: "comments",
        body: { body: title },
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
})

const { useGetCommentsQuery, useAddCommentMutation } = api

// App.tsx
const App = () => {
  const { data } = useGetCommentsQuery()
  const [addComment] = useAddCommentMutation()

  const addCommentHandler = () => {
    addComment("Тестовая строка. Ее менять не нужно")
  }

  return (
    <>
      <button onClick={addCommentHandler}>Add comment</button>
      {data?.map((comment) => {
        return (
          <div key={comment.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
            <p>body - {comment.body}</p>
          </div>
        )
      })}
    </>
  )
}

// store.ts
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)*/

// Нажмите на кнопку Add comment и убедитесь в том, что запрос проходит и новый комментарий добавляется
// Но проблема в том, что новый комментарий добавляется в конец массива

// Что необходимо написать вместо // ❗❗❗XXX ❗❗❗,
// чтобы поменять порядок элементов массива. Чтобы каждый новый добавленный комментарий
// отображался в начале массива

// transformResponse: (response: Comment[]) => {
//   return response.reverse();
// } +++


// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery, setupListeners } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "commentsApi",
//   tagTypes: ["Comment"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getComments: builder.query<Comment[], void>({
//       query: () => "comments",
//       providesTags: ["Comment"],
//     }),
//     addComment: builder.mutation<Comment, string>({
//       query: (title) => ({
//         method: "POST",
//         url: "comments",
//         body: { body: title },
//       }),
//       invalidatesTags: ["Comment"],
//     }),
//   }),
// })
//
// const { useGetCommentsQuery, useAddCommentMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetCommentsQuery(undefined, { refetchOnFocus: true })
//   const [addComment] = useAddCommentMutation()
//
//   const addCommentHandler = () => {
//     addComment("Тестовая строка. Ее менять не нужно")
//   }
//
//   return (
//     <>
//       <button onClick={addCommentHandler}>Add comment</button>
//       {data
//         ?.slice()
//         .reverse()
//         .map((comment) => {
//           return (
//             <div key={comment.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//               <p>body - {comment.body}</p>
//             </div>
//           )
//         })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// setupListeners(store.dispatch)
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// На 39 строке добавлен refetchOnFocus.
// Но если открыть приложение в двух вкладках, добавить комментарий в одной вкладке,
// а потом перейти на другую, то нового комментария вы не увидите 🥲
// Ваша задача разобраться с тем, почему refetchOnFocus не работает.

// Что необходимо дописать в коде чтобы, починить refetchOnFocus ?
// 💡Если понадобится что-то импортировать для решения данной задачи,
// то импортируйте. В ответе добавленный импорт указывать не надо

//  В качестве ответа укажите добавленный код

// setupListeners(store.dispatch) +++


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
//           // ❗❗❗YYY ❗❗❗
//           patchResult.undo()
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
// для последующего отката изменений в случае ошибки при запросе на сервер?
// await queryFulfilled patchResult.undo() +++

// import { createRoot } from "react-dom/client"
// import { useState } from "react"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { configureStore, nanoid } from "@reduxjs/toolkit"
// import { Provider } from "react-redux"
//
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
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<UserResponse, { pageSize: number; pageNumber: number }>({
//       query: ({ pageSize, pageNumber }) => {
//         return {
//           url: `users`,
//           params: {
//             pageSize,
//             pageNumber,
//           },
//         }
//       },
//     }),
//   }),
// })
//
// const { useGetUsersQuery } = api
//
// // App
// const PAGE_SIZE = 3
//
// export const App = () => {
//   const [currentPage, setCurrentPage] = useState(1)
//
//   const { data } = useGetUsersQuery({ pageSize: PAGE_SIZE, pageNumber: currentPage })
//
//   const setPageHandler = (page: number) => {
//     setCurrentPage(page)
//   }
//
//   const length = data?.totalCount ? Math.ceil(data?.totalCount / PAGE_SIZE) : 1
//   const buttons = Array.from({ length }, (_, i) => ({
//     id: nanoid(),
//     title: i + 1,
//   }))
//
//   return (
//     <>
//       <h1>👪 Список пользователей</h1>
//       {data?.items.map((u) => (
//         <div style={{ marginBottom: "15px" }} key={u.id}>
//           <b>name</b>: {u.name}
//           <b>age</b>: {u.age}
//         </div>
//       ))}
//
//       {buttons.map((b) => (
//         <button
//           key={b.id}
//           style={b.title === currentPage ? { backgroundColor: "lightblue" } : {}}
//           onClick={() => setPageHandler(b.title)}
//         >
//           {b.title}
//         </button>
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
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// 📜 Описание:
// При загрузке приложения отрисовывается список пользователей.
// Но если перейти на другие страницы, вы увидите, что пагинация не работает

// Перепишите getUsers таким образом, чтобы пагинация отрабатывала верно
// ❗Типизацию указывать обязательно
// ❗Очередность применения query параметров:
//  Первым: pageSize, вторым pageNumber.
// Это касается и типизации и все остальных участках кода,
// если вам понадобится доставать эти параметры

// getUsers: builder.query<UserResponse, { pageSize: number; pageNumber: number }>({
//   query: ({ pageSize, pageNumber }) => {
//     return {
//       url: `users`,
//       params: {
//         pageSize,
//         pageNumber,
//       },
//     }
//   },
// })