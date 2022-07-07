
import styled from "styled-components";

export const AddStackFormContainer = styled.form`
    width: 100%;
    height: fit-content;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    background-color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
`

export const AddStackLabel = styled.label`
    font-weight: 600;
`

export const AddStackInputField = styled.input`
    width: 100%;
    border-radius: 5px;
    border: lightgray solid 1px;
    margin-bottom: 0.5rem;
`

export const AddStackInputFieldSelect = styled.select`
    width: 100%;
    border-radius: 5px;
    border: lightgray solid 1px;
    resize: none;
`

export const AddStackSubmitBtn = styled.button`
    height: 4rem;
    margin: 1.3rem 0rem 0rem 1rem;
    font-weight: 700;
    justify-content: center;

    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
`
