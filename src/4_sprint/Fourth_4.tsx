// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// type Inputs = {
//   email: string
//   password: string
// }
//
// const Login = () => {
//   const { register, handleSubmit } = useForm<Inputs>({
//     defaultValues: { email: "", password: "" },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log('dsda')
//     alert(JSON.stringify(data, null, 2))
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("email")} placeholder={"Введите email"} type="email" />
//       <input {...register("password")} placeholder={"Введите пароль"} type="password" />
//       <button type="submit">Отправить</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // 📜 Описание:
// // При заполнении данных формы и их отправке вы должны увидеть alert c
// // введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// // Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// // ❗После того как показался alert форма не должна перегружать все приложение




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
// const activeLink: CSSProperties = {
//   fontWeight: "bold",
//   color: "red",
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
// const Menu = () => {
//   return (
//     <ul>
//       <li>
//         <NavLink to={Path.Dragons} style={({ isActive }) => (isActive ? activeLink : link)}>
//           dragons
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Cats} style={({ isActive }) => (isActive ? activeLink : link)}>
//           cats
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Dogs} style={({ isActive }) => (isActive ? activeLink : link)}>
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
//       <Route path={Path.Dragons} element={<Dragons />} />
//       <Route path={Path.Cats} element={<Cats />} />
//       <Route path={Path.Dogs} element={<Dogs />} />
//     </Routes>
//   )
// }
//
// export const App = () => {
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
// // В меню 3 рабочие навигационные ссылки. Но при переходе на страницы, активная ссылка не подсвечивается.
// // Это плохое UI/UX поведение
//
// // 🪛 Задача:
// // Что нужно написать в атрибуте style для NavLink, чтобы к активной ссылке применялся стиль activeLink,
// // а к не активной, стиль link
// // ❗ Дублирование кода в данной задаче не нужно исправлять
//
// // В качестве ответа укажите код в атрибут style с измененным кодом
// // 🖥 Пример ответа: style={link || activeLink}



// import { CSSProperties } from "react"
// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// const error: CSSProperties = {
//   color: "red",
//   fontWeight: "bold",
// }
//
// type Inputs = {
//   firstName: string
//   email: string
// }
//
// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>({
//     defaultValues: { firstName: "", email: "" },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     alert(JSON.stringify(data, null, 2))
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <input {...register("firstName")} placeholder={"Введите имя"} />
//       </div>
//       <div>
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//               message: "Incorrect email",
//             },
//           })}
//           placeholder={"Введите email"}
//         />
//         {errors.email && <div style={error}>{errors.email.message}</div>}
//       </div>
//       <button type="submit">Отправить</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // 📜 Описание:
// // Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// // Исправьте строку кода которая выводит сообщение удовлетворяющее условиям:
// // 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// // 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// // Исправленную версию строки напишите в качестве ответа.
//
// // 🖥 Пример ответа: {<div style={error}>Incorrect email</div>}


// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// type Inputs = {
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   phone: string
// }
//
// const Login = () => {
//   const { register, handleSubmit } = useForm<Inputs>({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       phone: "",
//     },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     alert(JSON.stringify(data, null, 2))
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <input {...register("firstName")} placeholder={"Введите имя"} />
//       </div>
//       <div>
//         <input {...register("lastName")} placeholder={"Введите фамилию"} />
//       </div>
//       <div>
//         <input {...register("email")} placeholder={"Введите email"} type="email" />
//       </div>
//       <div>
//         <input {...register("password")} placeholder={"Введите пароль"} type="password" />
//       </div>
//       <div>
//         <input {...register("phone")} placeholder={"Введите номер телефона"} />
//       </div>
//       <button>Отправить</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // 📜 Описание:
// // Форма заполнения данных работает некорректно.
// // Пользователи жалуются на поле ввода "Телефона"
// // Найдите в коде ошибку. Исправленную версию всей строки напишите в качестве ответа.



// import { createRoot } from "react-dom/client"
// import { BrowserRouter, Route, Routes } from "react-router"
//
// export const Main = () => {
//   return (
//     <>
//       <h2>✅ Список тудулистов</h2>
//       <h2>📜 Список постов</h2>
//     </>
//   )
// }
//
// // App
// export const App = () => {
//   return (
//     <Routes>
//       <Route path={"/"} element={<Main />} />
//     </Routes>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<BrowserRouter><App /></BrowserRouter>)

// 📜 Описание:
// Белый экран... Приложение не работает.
// Какие изменения необходимо сделать в строке
// createRoot(document.getElementById("root")!).render(<App />)
// чтобы приложение заработало и на экране отобразилось 2 заголовка
// Исправленную версию строки напишите в качестве ответа.
// 💡Ответ может быть в несколько строк

// Пример ответа:
// createRoot(document.getElementById("root")!).render(<App />)


// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router"
//
// const Login = () => {
//   const navigate = useNavigate()
//
//
//   useEffect(() => {
//     navigate("/secret/JIUzI1NiIsInR5cCI6IkpXVCJ9")
//   }, [])
//
//   return <div>Login</div>
// }
//
// const SecretToken = () => {
//   const { token } = useParams() // ❗ FIX
//
//   return <h1>🦾 token: {token}</h1>
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path={"/"} element={<Login />} />
//       <Route path={"/secret/:token"} element={<SecretToken />} />
//     </Routes>
//   </BrowserRouter>,
// )

// 📜Описание:
// Исправьте код на строке с пометкой ❗FIX так, чтобы на странице отобразился токен.

//❗Ответ можно указывать с типизацией и без. Учтено несколько вариантов

// 🖥 Пример ответа: const token = 'JIUzI1NiIsInR5cCI6IkpXVCJ9'



// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// type Inputs = {
//   name: string
// }
//
// export const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { isValid, isDirty },
//   } = useForm<Inputs>({
//     defaultValues: { name: "" },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     const minLength = 5
//     if (data.name.length < minLength) {
//       alert(`❌ FirstName must be at least ${minLength} characters long`)
//     } else {
//       alert(JSON.stringify(data, null, 2))
//     }
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <input {...register("name", {required: true, minLength: 5})} />
//       </div>
//       <button type="submit" disabled={!(isValid && isDirty)}>
//         Отправить
//       </button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)

// 📜 Описание:
// Начните вводить символы в input. После ввода первого символа кнопка "Отправить" раздизаблится.
// Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// ❗Текст ошибки выводить в разметке не нужно.
// ❗Сторонние библиотеки (например zod, yup) использовать запрещено.
// ❗Если используете свой message для обработки ошибки, то в качестве текста ошибки напишите 'Error'

// В качестве ответа напишите полностью тег в котором вы изменяли значения
// 🖥 Пример ответа: <input {...register("name", {disabled })} />