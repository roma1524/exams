import React, {MouseEvent} from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";
import styled from "styled-components";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (arg: any) => void // давайте подумаем, setFilter -это грузчик, у которого всегда в руках товар
    addMoney: (arg: any) => void
    removeMoney: (arg: any) => void
  }

export const Country: React.FC<CountryPropsType> = ({data, setFilterValue, addMoney, removeMoney}) => {


    const setMoney=(event: MouseEvent<HTMLButtonElement>)=>{
        setFilterValue(event.currentTarget.value);
    }

   const addMoneyHandler=(event: MouseEvent<HTMLButtonElement>)=>{
       addMoney(event.currentTarget.name);
   }

   const removeMoneyHandler=(event: MouseEvent<HTMLButtonElement>)=>{
       removeMoney(event.currentTarget.name);
   }

    return (
        <Terminal>
            <div>
                <button value='All' onClick={setMoney}>All</button>
                <button value='USD' onClick={setMoney}>Dollars</button>
                <button value='RUB' onClick={setMoney}>Rubles</button>
            </div>
            <div>
                {/*сделаем в последнюю очередь*/}
                <button name={'USD'} onClick={addMoneyHandler}>Положить 10$</button>
                <button name={'RUB'} onClick={addMoneyHandler}>Положить 10р.</button>
                <button name={'USD'} onClick={removeMoneyHandler}>Снять 10$</button>
                <button name={'RUB'} onClick={removeMoneyHandler}>Снять 10р.</button>
            </div>
            <City data={data}/>
        </Terminal>
    );
};

const Terminal = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-size: 30px;
  background-color: #282c34;
`