import styled from "styled-components";
import {Form, Field} from 'formik'

export const StackForm = styled.form`
    width: 100%;
    height: fit-content;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    background-color: whitesmoke;
    border-radius: 10px;

`

export const StackInputField = styled.input`
    width: 100%;
    border-radius: 5px;
    border: lightgray solid 1px;
`
export const StackInputFieldSelect = styled.select`
    width: 100%;
    border-radius: 5px;
    border: lightgray solid 1px;
`

export const StackLabel = styled.label`
     font-weight: 600;
`

export const StackSubmitBtn = styled.button`
    width: 5rem;
    height: 2rem;
    margin-top: 1rem;
    font-weight: 700;

    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
`

export const StackDeleteBtn = styled.button`
    width: 9rem;
    height: 2rem;
    margin-top: 1rem;
    font-weight: 700;

    color: white;
    background-color: #ff4747;
    border: none;
    border-radius: 5px;
`   
export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`