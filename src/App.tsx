import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = 'USD' | 'RUB' | 'All' // создадим типы для banknotes -он может быть 'DOLLARS', 'RUBLS' или 'All'
export type MoneyType = {
    banknote: BanknotsType
    nominal: number
    id: string
}

let defaultMoney: MoneyType[] = [  // типизируем
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: MoneyType[], filter: BanknotsType): any => {
    /*если пришел filter со значением 'All', то возвращаем все банкноты
    return money.filter... ну да, придется фильтровать*/

        return filter === 'All' ? money.filter(item => item) : money.filter(item => item.banknote === filter)
}


function App() {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [money, setMoney] = useState(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому их будем выдавать(ретёрнуть)
    const filteredMoney =  moneyFilter(money, filterValue);

    const addMoney = (banknote: BanknotsType) => {
        // Добавление денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
        const addSomeMoney = money.map(item => {
            return banknote === item.banknote ? {...item, nominal: item.nominal + 10 } : {...item}
        })
        setMoney(addSomeMoney);
    }

    const removeMoney = (banknote: BanknotsType) => {
        const removeSomeMoney = money.map(item => {
            return banknote === item.banknote ? {...item, nominal: item.nominal - 10 } : {...item}
        })
        setMoney(removeSomeMoney);
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
                addMoney={addMoney}
                removeMoney={removeMoney}
            />
        </div>
    );
}

export default App;
