import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import {v1} from 'uuid';

export const ToDoList = () => {

    type AddressType = {
        street: LessonsType
    }

    type TaskType = {
        id: string
        text: string
        status: boolean
    };

    type LessonsType = {
        title: string
    }

    type PropsType = {
        name: string,
        age: number,
        lessons: LessonsType[],
        address: AddressType
    }

    const props: PropsType = {
        name: 'Roma',
        age: 34,
        lessons: [{title: '5'}, {title: '6'}, {title: '7'}, {title: '8'}],
        address: {
            street: {
                title: 'Molodejnaya street',
            }
        }
    }

    const data: TaskType[] = [
        {
            id: v1(),
            text: 'running',
            status: false,
        },
        {
            id: v1(),
            text: 'take a coffee',
            status: true,
        },
        {
            id: v1(),
            text: 'read a book',
            status: false,
        },
        {
            id: v1(),
            text: 'take a bite of cake',
            status: false,
        }
    ];

    const [text, setText] = useState<TaskType[]>(data);
    const [currentText, setCurrentText] = useState('');

    function onclickButtonHandler() {

        setText([{
            id: v1(),
            text: currentText,
            status: false
        }, ...text]);
        setCurrentText('');
        console.log(text)
    }

    function onChangeInputHandler(e: ChangeEvent<HTMLInputElement>) {
        setCurrentText(e.currentTarget.value);
    }

    function deleteTask(arg: string) {
        const resArr = text.filter((item) => item.id !== arg);
        setText(resArr);
    };

    function changeStatus(id: string) {
        const newStatus = text.map((item) => {
            return item.id === id ? {...item, status: !item.status} : item;
        });
        setText(newStatus);
    }

    function changeFilterHandler(arg: string) {
        switch (arg) {
            case 'active':
                setText(text.filter(item => !item.status));
                break;
            case 'completed':
                setText(text.filter(item => item.status));
                break;
            default:
                setText(text.map(item => item));
                break;
        }
    }

    return (
        <StyledSection>
            <StyledWrapperDiv>
                <h1>ToDo List</h1>
                <div className="innerText">

                    <input value={currentText} type="text" onChange={onChangeInputHandler}/>
                    <button onClick={onclickButtonHandler}>Add</button>
                </div>
                <div className="listItems">
                    <ul>

                        {text.map((item) => {
                            return (
                                <li key={item.id} className="listItem">
                                    <input type="checkbox" onChange={() => changeStatus(item.id)}
                                           checked={item.status}/>
                                    {item.text}
                                    <button onClick={() => deleteTask(item.id)}>X</button>
                                </li>
                            )
                        })}

                    </ul>
                    <div>
                        <button onClick={() => changeFilterHandler('all')}>All</button>
                        <button onClick={() => changeFilterHandler('active')}>Active</button>
                        <button onClick={() => changeFilterHandler('completed')}>Completed</button>
                    </div>
                </div>
            </StyledWrapperDiv>
        </StyledSection>
    );
};


const StyledSection = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

`

const StyledWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 500px;
    min-height: 700px;
    outline: 1px solid cornflowerblue;
    border-radius: 15px;
    background: linear-gradient(#f67979, #25daf1);
`