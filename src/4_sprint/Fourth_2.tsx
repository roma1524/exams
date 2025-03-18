// import React from 'react';
// import './index.css';
// import {App} from './App';
// // import * as serviceWorker from './serviceWorker';
// import {createRoot} from 'react-dom/client';
//
// const container  = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(<App />);


/*
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { createRoot } from "react-dom/client"
import { Provider, useDispatch, useSelector } from "react-redux"

// slice
const slice = createSlice({
    name: "tickets",
    initialState: [
        { id: 1, event: "Concert", available: true, price: 100 },
        { id: 2, event: "Movie", available: false, price: 50 },
        { id: 3, event: "Theater", available: true, price: 75 },
    ],
    reducers: {
        applyDiscount: (state, action) => {
            state.initialState.forEach(item => item.price)
            return
        },
    },
    selectors: {
        selectTickets: (state) => state,
    },
})

const { applyDiscount } = slice.actions
const { selectTickets } = slice.selectors

// App.tsx
const App = () => {
    const tickets = useAppSelector(selectTickets)
    const dispatch = useAppDispatch()

    const handleDiscount = (discount: number) => {
        dispatch(applyDiscount(discount))
    }

    return (
        <div>
            <button onClick={() => handleDiscount(20)}>20% Discount</button>
            <button onClick={() => handleDiscount(50)}>50% Discount</button>
            <button onClick={() => handleDiscount(80)}>80% Discount</button>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
            <span>
              {ticket.event} ({ticket.available ? "Available" : "Sold Out"}) - ${ticket.price.toFixed(2)}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// store.ts
const store = configureStore({
    reducer: {
        tickets: slice.reducer,
    },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

// main.ts
createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)

// 📜 Описание:
// При нажатии на кнопки с 20%, 50% или 80% скидками цены всех билетов должны уменьшиться на
// указанный процент.

// 🪛 Задача:
// Перепишите изменение стейта так, чтобы цена каждого билета уменьшалась на указанный процент.
// В качестве ответа укажите исправленный код написанный вместо return state.
// ❗Операция должна быть реализована мутабельным образом.
// ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// ❗Не создавайте переменные из action.payload (const id = action.payload.id)*/

/*
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { createRoot } from "react-dom/client"
import { Provider, useSelector } from "react-redux"

// slice
const slice = createSlice({
    name: "taskManager",
    initialState: {
        tasks: [
            { id: 1, title: "Task 1" },
            { id: 2, title: "Task 2" },
            { id: 3, title: "Task 3" },
        ],
    },
    reducers: {},
    selectors: {
        selectTasks: (state) => state.tasks,
    },
})

const { selectTasks } = slice.selectors

// App.tsx
const App = () => {
    const tasks = useAppSelector(selectTasks)

    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </>
    )
}

// store.ts
const store = configureStore({
    reducer: {
        taskManager: slice.reducer,
    },
})

type RootState = ReturnType<typeof store.getState>
const useAppSelector = useSelector.withTypes<RootState>()

// main.ts
createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)

// 📜 Описание:
// Перед вами нерабочий код и его нужно починить, чтобы отобразился массив тасок

// 🪛 Задача:
// Что нужно написать вместо // ❗❗❗XXX ❗❗❗, чтобы отобразился массив тасок*/
/*
import { createRoot } from "react-dom/client"
import { Provider, useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"

// Types
type Photo = {
    albumId: string
    id: string
    title: string
    url: string
}

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })

const photosAPI = {
    getPhotos() {
        return instance.get<Photo[]>("photos?delay=2")
    },
}

// Slice
const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const slice = createAppSlice({
    name: "photo",
    initialState: {
        photos: [] as Photo[],
        isLoading: false,
    },
    selectors: {
        selectPhotos: (state) => state.photos,
        selectIsLoading: (state) => state.isLoading,
    },
    reducers: (create) => ({
        setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
            state.isLoading = action.payload.isLoading
        }),
        fetchPhotos: create.asyncThunk(
            async (_arg, { dispatch, rejectWithValue }) => {
                try {
                    dispatch(setLoading({ isLoading: true }))
                    const res = await photosAPI.getPhotos()
                    dispatch(setLoading({ isLoading: false }))
                    return { photos: res.data }
                } catch (error) {
                    return rejectWithValue(null)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.photos = action.payload.photos
                },
            },
        ),
    }),
})

const photoReducer = slice.reducer
const { fetchPhotos, setLoading } = slice.actions
const { selectPhotos, selectIsLoading } = slice.selectors

// Loader
const Loader = () => {
    return <h1>🔘 Loading ...</h1>
}

// App
const App = () => {
    const dispatch = useAppDispatch()
    const photos = useAppSelector(selectPhotos)
    const isLoading = useAppSelector(selectIsLoading)

    const getPhotosHandler = () => {
        dispatch(fetchPhotos())
    }

    return (
        <>
            <h1>📸 Фото</h1>
            <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
            {isLoading && <Loader />}
            <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
                {photos.map((photo) => {
                    return (
                        <div key={photo.id}>
                            <b>title</b>: {photo.title}
                            <div>
                                <img src={photo.url} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

// Store
const store = configureStore({
    reducer: {
        [slice.name]: photoReducer,
    },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)*/

// 📜 Описание:
// При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть Loading...,
// и через 3 секунды непосредственно фотографии.
// Но после подгрузки данных Loader не убирается.
// Какой код нужно написать, чтобы Loader перестал отображаться после получения данных
// В качестве ответа напишите строку кода.

/*
import { useEffect } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
import { createRoot } from "react-dom/client"

// Types
type Todolist = {
    id: string
    title: string
    order: number
    createdAt: string
    updatedAt: string
    completed: boolean
}

type User = {
    id: string
    name: string
    age: number
}

type UsersResponse = {
    items: User[]
    totalCount: number
}

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })

const api = {
    getTodos() {
        return instance.get<Todolist[]>("todos")
    },
    getUsers() {
        return instance.get<UsersResponse>("users")
    },
}

// Slice
const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const slice = createAppSlice({
    name: "app",
    initialState: {
        todolists: [] as Todolist[],
        users: [] as User[],
        error: null as string | null,
    },
    selectors: {
        selectTodolists: (state) => state.todolists,
        selectUsers: (state) => state.users,
        selectError: (state) => state.error,
    },
    reducers: (create) => ({
        setError: create.reducer<{ error: string | null }>((state, action) => {
            state.error = action.payload.error
        }),
        fetchTodolists: create.asyncThunk(
            async (_arg, { rejectWithValue }) => {
                try {
                   const todolists = await api.getTodos()
                    return todolists;
                } catch (error) {
                    return rejectWithValue(null)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.todolists = action.payload.todolists
                },
            },
        ),
        fetchUsers: create.asyncThunk(
            async (_arg, { rejectWithValue }) => {
                try {
                    const users = await api.getUsers()
                    return users;
                } catch (error) {
                    return rejectWithValue(null)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.users = action.payload.users
                },
            },
        ),
    }),
})

const appReducer = slice.reducer
const { fetchTodolists, fetchUsers } = slice.actions
const { selectTodolists, selectUsers, selectError } = slice.selectors

// App
const App = () => {
    return (
        <>
            <h1>✅Todos & 🙂Users</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Todos />
                <Users />
            </div>
        </>
    )
}

const Todos = () => {
    const dispatch = useAppDispatch()
    const todolists = useAppSelector(selectTodolists)
    const error = useAppSelector(selectError)

    useEffect(() => {
        dispatch(fetchTodolists())
    }, [])

    return (
        <div>
            <h2>✅ Список тудулистов</h2>
            {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
            {todolists.map((todolist) => (
                <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
                    <input type="checkbox" checked={todolist.completed} />
                    <b>Описание</b>: {todolist.title}
                </div>
            ))}
        </div>
    )
}

const Users = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsers)
    const error = useAppSelector(selectError)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2>🙂 Список юзеров</h2>
            {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
            <div>
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <b>name</b>:{user.name} - <b>age</b>:{user.age}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// Store
const store = configureStore({
    reducer: {
        [slice.name]: appReducer,
    },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)*/

// 📜 Описание:
// Что нужно написать вместо // ❗AAA, ❗BBB, ❗CCC, ❗DDD для того чтобы на экране
// отобразился список тудулистов и юзеров
// Каждый ответ укажите на новой строке или через пробел соблюдая порядок

// Пример ответа:
// const a = 1 + 1
// return a
// const c = 1 + 3
// return c

/*
const res = await api.getTodos()
return { todolists: res.data }
const res = await api.getUsers()
return { users: res.data.items }*/

/*

import { configureStore, createSlice } from "@reduxjs/toolkit"
import { createRoot } from "react-dom/client"
import { Provider, useDispatch, useSelector } from "react-redux"

// waterCounter slice
const waterSlice = createSlice({
    name: "waterCounter",
    initialState: {
        liters: 10,
    },
    reducers: {
        increase: (state) => {
            state.liters += 1
        },
    },
    selectors: {
        selectLiters: (state) => state.liters,
    },
})

const { increase } = waterSlice.actions
const { selectLiters } = waterSlice.selectors

// energy slice
const energySlice = createSlice({
    name: "energyCounter",
    initialState: {
        joules: 5000,
    },
    reducers: {
        decrease: (state) => {
            state.joules -= 100
        },
    },
    extraReducers: (builder) => {
        builder.addCase(waterSlice.actions.increase, (state) => {
            state.joules += 200;
        });
    },
    selectors: {
        selectJoules: (state) => state.joules,
    },
})

const { decrease } = energySlice.actions
const { selectJoules } = energySlice.selectors

// App.tsx
const App = () => {
    const water = useAppSelector(selectLiters)
    const energy = useAppSelector(selectJoules)
    const dispatch = useAppDispatch()

    return (
        <>
            <button onClick={() => dispatch(increase())}>Add Water</button>
            <span>Water: {water} liters</span>

            <button onClick={() => dispatch(decrease())}>Use Energy</button>
            <span>Energy: {energy} joules</span>
        </>
    )
}

// store.ts
const store = configureStore({
    reducer: {
        waterCounter: waterSlice.reducer,
        energyCounter: energySlice.reducer,
    },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

// main.ts
createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)

// 📜 Описание:
// У вас есть два счетчика: для воды (литры) и энергии (джоули).
// При нажатии на кнопку **Add Water** увеличивается количество воды.
// При нажатии на кнопку **Use Energy** энергия уменьшается на 100 джоулей.

// 🪛 Задача:
// Реализуйте следующую задачу:
// При нажатии на кнопку **Add Water** помимо увелечения количества воды
// реализуйте увеличении энергии на 200 джоулей.

// В качестве ответа укажите добавленный вами код
// ❗Операция должна быть реализована мутабельным образом.
// 💡Подсказка. Используйте extraReducers

extraReducers: (builder) => {
    builder.addCase(waterSlice.actions.increase, (state) => {
        state.joules += 200;
    });
}*/


/*import { configureStore, createSlice } from "@reduxjs/toolkit"
import { createRoot } from "react-dom/client"
import { Provider, useDispatch, useSelector } from "react-redux"

type Note = {
    id: number
    content: string
    important: boolean
}

// slice
const slice = createSlice({
    name: "notes",
    initialState: {
        items: [
            { id: 1, content: "Buy groceries", important: false },
            { id: 2, content: "Schedule meeting", important: true },
            { id: 3, content: "Call mom", important: false },
        ],
    },
    reducers: {
        updateNote: (state, action) => {
            const findEl = state.items.find(elem => elem.id === action.payload.id)
            if (findEl) {
                findEl.important = action.payload.important
            }
        },
    },
    selectors: {
        selectNotes: (state) => state.items,
    },
})

const { updateNote } = slice.actions
const { selectNotes } = slice.selectors

// App.tsx
const App = () => {
    const notes = useAppSelector(selectNotes)
    const dispatch = useAppDispatch()

    const toggleImportance = (note: Note) => {
        dispatch(updateNote({ id: note.id, important: !note.important }))
    }

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
          <span
              style={{
                  fontWeight: note.important ? "bold" : "normal",
              }}
          >
            {note.content}
          </span>
                    <button onClick={() => toggleImportance(note)}>{note.important ? "Unmark" : "Mark Important"}</button>
                </li>
            ))}
        </ul>
    )
}

// store.ts
const store = configureStore({
    reducer: {
        notes: slice.reducer,
    },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

// main.ts
createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)*/

// 📜 Описание:
// При нажатии на кнопку Mark Important или Unmark рядом с заметкой, важность заметки не обновляется 🥲

// 🪛 Задача:
// Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Mark Important или Unmark,
// состояние важности заметки обновлялось.
// В качестве ответа укажите исправленный код написанный вместо return state.
// ❗Изменение стейта должно быть написано мутабельным образом
// ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// ❗Не создавайте переменные из action.payload (const id = action.payload.id)



// У вас есть тип UserProfile, описывающий профиль пользователя:
/*
type UserProfile = {
    id: number
    name: string
    age: number
}

type UpdateProfile = Partial<UserProfile>

const currentProfile: UserProfile = {
    id: 1,
    name: "John Doe",
    age: 30,
}

const updates1 = {
    name: "John Smith",
    age: 31,
}

const updates2 = {
    id: 2,
    name: "David Logger",
}

console.log(updateProfile(currentProfile, updates1)) // { id: 1, name: 'John Smith', age: 31 }
console.log(updateProfile(currentProfile, updates2)) // { id: 2, name: 'David Logger', age: 30 }

function updateProfile(currentProfile: UserProfile, updates: Partial<UserProfile>): UserProfile {
    return {
        ...currentProfile,
        ...updates,
    };
}*/

// Ваша задача — дописать функцию updateProfile,
// которая принимает текущий профиль пользователя (currentProfile)
// и объект с обновлениями (updates)
// и правильно протипизировать значения
// ❗Объект с обновлениями может содержать любое подмножество полей из
// UserProfile, но не обязательно все.
// ❗ В качестве ответа вставьте всю функцию целиком


/*import { useEffect } from "react"
import { createRoot } from "react-dom/client"
import { Provider, useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"

// Types
type Post = {
    id: string
    body: string
    title: string
    userId: string
}

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })

const postsAPI = {
    getPosts() {
        return instance.get<Post[]>("posts")
    },
}

// Slice
const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const slice = createAppSlice({
    name: "posts",
    initialState: {
        posts: [] as Post[],
    },
    selectors: {
        selectPosts: (state) => state.posts,
    },
    reducers: (create) => ({
        fetchPosts: create.asyncThunk(
            async (_arg, { rejectWithValue }) => {
                try {
                    const res = await postsAPI.getPosts()
                    return { posts: res.data }
                } catch (error) {
                    return rejectWithValue(null)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.posts = action.payload.posts
                },
            },
        ),
    }),
})

const postsReducer = slice.reducer
const { fetchPosts } = slice.actions
const { selectPosts } = slice.selectors

// App
const App = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(selectPosts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <>
            <h1>📜 Список постов</h1>
            {posts.length ? (
                posts.map((p) => {
                    return (
                        <div key={p.id}>
                            <b>title</b>: {p.title}
                        </div>
                    )
                })
            ) : (
                <h2>Постов нету 😥</h2>
            )}
        </>
    )
}

// Store
const store = configureStore({
    reducer: {
        [slice.name]: postsReducer,
    },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)*/

// 📜 Описание:
// При загрузке приложения вы должны увидеть список постов,
// но из-за невнимательности была допущена ошибка.

// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.

// P.S. Эта ошибка из реальной жизни, студенты так часто ошибаются и не могут понять в чем дело.