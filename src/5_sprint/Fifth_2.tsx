/*
import { createRoot } from "react-dom/client"

export const App = () => {
  return (
    <h2>
      Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей копии, чтобы вы
      могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить контекст и вы пока не
      готовы к созданию коммита.
    </h2>
  )
}

createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей
// копии, чтобы вы могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить
// контекст и вы пока не готовы к созданию коммита.

// 🖥 Пример ответа: git init

// git stash +*/


/*import { configureStore } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

type Photo = {
  albumId: string
  id: string
  title: string
  url: string
}

// Api
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => {
    return {
      getPhotos: builder.query<Photo[], void>({
        query: () => "photos",
      }),
    }
  },
})

const { useGetPhotosQuery, useLazyGetPhotosQuery } = api

// App.tsx
const App = () => {
  // ❗❗❗XXX❗❗❗

  const [trigger, {data}] = useLazyGetPhotosQuery()

  const getPhotosHandler = () => {
    trigger()
  }

  return (
    <>
      <button onClick={getPhotosHandler}>Get photos</button>
      {data?.map((el) => {
        return (
          <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
            <div>
              <b>title</b> - {el.title}
            </div>
          </div>
        )
      })}
    </>
  )
}

// store.ts
const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)*/

// 📜 Описание:
// Приложение падает с ошибкой

// 🪛 Задача:
// Почините приложение.
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗` чтобы при нажатии на кнопку `Get photos`
// отобразились данные пришедшие с сервера
// В качестве ответа укажите написанный вами код

// const [trigger, {data}] = useLazyGetPhotosQuery() +++


/*import { configureStore } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

type Post = {
  body: string
  id: string
  title: string
  userId: string
}

// Api
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => {
    return {
      getPosts: builder.query<Post[], void>({
        query: () => "posts"
      }),
      removePost: builder.mutation<Post[], string>({
        query: (id) => ({
          url: `posts/${id}`,
          method: "DELETE"
        })
      }),
      // ❗❗❗XXX❗❗❗
    }
  }
})

const { useGetPostsQuery, useRemovePostMutation } = api

// App.tsx
const App = () => {
  const { data } = useGetPostsQuery()
  const [removePost] = useRemovePostMutation()

  const removePostHandler = (id: string) => {
    removePost(id)
  }

  return (
    <>
      {data?.map((el) => {
        return (
          <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
              <p>
                <b>title</b> - {el.title}
              </p>
            </div>
            <button onClick={() => removePostHandler(el.id)}>x</button>
          </div>
        )
      })}
    </>
  )
}

// store.ts
const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
)*/

// 📜 Описание:
// Приложение падает с ошибкой.

// 🪛 Задача:
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗` чтобы на при нажатии на кнопку `x` пост удалился.
// В качестве ответа укажите написанный вами код
// ❗Автоматическое получение данных реализовывать не надо
// ❗Типизацию указывать обязательно

// removePost: builder.mutation<Post[], string>({
//   query: (id) => ({
//     url: `posts/${id}`,
//     method: "DELETE"
//   })
// })  -----


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
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => {
    return {
      getComments: builder.query<Comment[], void>({
        query: () => "comments",
      }),
      addComment: builder.mutation<Comment, string>({
        query: (com) => ({
          url: "comments",
          method: 'POST',
          body: {
            postId: 1,
            name: "Test User",
            email: "test@example.com",
            body: com
          }
        })
      })
      // ❗❗❗XXX❗❗❗
    }
  },
})

const { useGetCommentsQuery, useAddCommentMutation  } = api

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
      {data?.map((el) => {
        return (
          <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
            <p>body - {el.body}</p>
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

// 📜 Описание:
// Белый экран. Откройте панель разработчика и проанализируйте в чем ошибка

// 🪛 Задача:
// Что нужно написать вместо `// ❗❗❗XXX❗❗❗` чтобы при нажатии на кнопку `Add comment`
// новый комментарий добавлялся и был виден в конце массива после перезагрузки страница
// ❗ Автоматическое получение данных реализовывать не надо
// В качестве ответа укажите написанный вами код
// ❗Типизацию указывать обязательно


// addComment: builder.mutation<Comment, string>({
//   query: (com) => ({
//     url: "comments",
//     method: 'POST',
//     body: {
//       postId: 1,
//       name: "Test User",
//       email: "test@example.com",
//       body: com
//     }
//   })
// })  ----



/*import { createRoot } from "react-dom/client"

export const App = () => {
  return (
    <div>
      <h2>Чем отличается master от origin master ?</h2>
      <ul>
        <li>1 - Это просто 2 ветки с разными названиями. Их ничего не связывает</li>
        <li>2 - master принадлежит локальному репозиторию, origin master - удаленному</li>
        <li>3 - Это 2 названия одной и той же ветки. Приставка origin не несет никакого смысла.</li>
        <li>4 - Ветки origin master не существует</li>
        <li>5 - Нет правильного ответа</li>
      </ul>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<App />)*/

// 📜 Описание:
// Чем отличается master от origin master ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1

// 2 +


/*import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

type Photo = {
  albumId: string;
  id: string;
  title: string;
  url: string;
};

// Api
const api = createApi({
  reducerPath: "api",
  tagTypes: ['Photo'],
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => {
    return {
      getPhotos: builder.query<Photo[], void>({
        query: () => "photos",
        providesTags: ['Photo']
      }),
      updatePhoto: builder.mutation<Photo, { id: string; title: string }>({
        query: ({ id, title }) => {
          return {
            method: "PUT",
            url: `photos/${id}`,
            body: { title },
          };
        },
        invalidatesTags: ['Photo']
      }),
    };
  },
});

const { useGetPhotosQuery, useUpdatePhotoMutation } = api;

// App.tsx
const App = () => {
  const { data } = useGetPhotosQuery();
  const [trigger] = useUpdatePhotoMutation();

  const updatePhotoTitleHandler = (id: string) => {
    trigger({ id, title: "Тестовое сообщение" });
  };

  return (
    <>
      {data?.map((el) => {
        return (
          <div key={el.id} style={{ margin: "15px" }}>
            <b>title</b> - {el.title}
            <button onClick={() => updatePhotoTitleHandler(el.id)}>Update title</button>
          </div>
        );
      })}
    </>
  );
};

// store.ts
const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);*/

// 📜 Описание:
// Нажмите на кнопку Update title и обновите страницу. После обновления страницы title
// изменится, но хотелось бы не перегружать страницу

// 🪛 Задача:
// Реализуйте автоматический re-fetching используя теги. Т.е. чтобы после нажатия на кнопку Update title, title обновился без ручной перезагрузки страницы
// обновился без ручной перезагрузки страницы

// 💡 Подсказка: необходимо дописать 3 строки кода
// В ответе укажите добавленные строки кода через пробел
// ❗Запятую в конце строки указывать обязательно

// 🖥 Пример ответа: xxx: {id: 1}, yyy: {id: 2}, zzz: {id: 3} ++++


/*import { configureStore } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

type Product = {
  id: string
  title: string
  description: string
  price: number
}

export type Response = {
  total: number
  messages: string[]
  page: number
  pageCount: number
  data: Product[]
}

// Api
const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query<Product[], void>({
        query: () => {
          return {
            method: "GET",
            url: "products",
          }
        },
        transformResponse: (response: Response) => response.data,
        // ❗❗❗XXX❗❗❗
      }),
    }
  },
})

const { useGetProductsQuery } = productsApi

// App.tsx
const App = () => {
  const { data: products } = useGetProductsQuery()

  return (
    <>
      {products?.map((el) => {
        return (
          <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
            <p>title - {el.title}</p>
            <p>description - {el.description}</p>
          </div>
        )
      })}
    </>
  )
}

// store.ts
const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)*/

// 📜 Описание:
// Белый экран. Откройте панель разработчика и проанализируйте в чем ошибка

// 🪛 Задача:
// Что нужно написать вместо  `// ❗❗❗XXX❗❗❗` чтобы на экране отобразились продукты
// В качестве ответа укажите написанный вами код
// ❗Типизацию указывать обязательно
// ❗Ответ принимает синтаксис стрелочной функции


// transformResponse: (response: Response) => response.data +++



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
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => {
    return {
      getComments: builder.query<Comment[], void>({
        query: () => 'comments'
      })
      // ❗❗❗XXX❗❗❗
    }
  },
})

const { useGetCommentsQuery } = api

// App.tsx
const App = () => {
  const { data } = useGetCommentsQuery()

  return (
    <>
      {data?.map((el) => {
        return (
          <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
            <p>body - {el.body}</p>
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

// 📜 Описание:
// Белый экран. Откройте панель разработчика и проанализируйте в чем ошибка

// 🪛 Задача:
// Что нужно написать вместо  `// ❗❗❗XXX❗❗❗` чтобы на экране отобразились комментарии
// В качестве ответа укажите написанный вами код
// ❗Типизацию указывать обязательно

// getComments: builder.query<Comment[], void>({
//   query: () => 'comments'
// })