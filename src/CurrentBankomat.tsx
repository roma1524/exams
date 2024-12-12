import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}


export const CurrentBankomat: React.FC<CurrentBankomatPropsType> = (props) => {
    // с деструктуризацией пожалуйста

    return (

        <>
            {props.money.banknote === 'USD' ?
                <BanknoteGreen>
                    <Name>{props.money.banknote}</Name>
                    <Nominal>{props.money.nominal}</Nominal>
                </BanknoteGreen>
                :
                <BanknoteBlue>
                    <Name>{props.money.banknote}</Name>
                    <Nominal>{props.money.nominal}</Nominal>
                </BanknoteBlue>
            }
        </>

    );
};


const BanknoteGreen = styled.div`
    background-color: aquamarine;
    width: 400px;
    height: 200px;
    margin: 10px;
`

const BanknoteBlue = styled.div`
    background-color: lightskyblue;
    width: 400px;
    height: 200px;
    margin: 10px;
`

// const Banknote = styled.div`
//     //background-color:
//     width: 200px;
//     height: 100px;
//     margin: 5px;
// `


const Name = styled.span`
    display: flex;
    justify-content: center;
    font-size: 15px;
`

const Nominal = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 45px;
`
