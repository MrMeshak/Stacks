import styled from "styled-components"


export const StackContainer = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    position: relative;
`
export const StackTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem
`
export const StackTitle = styled.h2`

`

export const AddCardBtn = styled.button`
    width: 2rem;
    height: 2rem;
    color: white;
    background-color: ${(props)=> props.color};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
export const EditStackBtn = styled.button`
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    color: white;
    background-color: ${(props)=> props.color};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`


