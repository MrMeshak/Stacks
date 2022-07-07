import styled from "styled-components";
import {Field,Form} from 'formik'
import {colors} from '../../../utils/colors'

export const CardForm = styled.form`
    width: 100%;
    height: fit-content;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    background-color: #f5f5f5;
    border-radius: 10px;
`

export const CardLabel = styled.label`
    font-weight: 600;
`

export const CardInputField = styled.input`
    width: 100%;
    border-radius: 5px;
    border: lightgray solid 1px;
`

export const CardInputFieldDescription = styled.textarea`
    width: 100%;
    border-radius: 5px;
    border: lightgray solid 1px;
    height: 4rem;
    resize: none;
`
export const CardInputFieldSelect = styled.select`
    width: 100%;
    border-radius: 5px;
    border: lightgray solid 1px;
    resize: none;
`

export const CardSubmitBtn = styled.button`
    width: 5rem;
    height: 2rem;
    margin-top: 1rem;
    font-weight: 700;

    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
`

