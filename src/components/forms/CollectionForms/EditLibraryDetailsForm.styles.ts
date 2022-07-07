import styled from "styled-components";

export const EditLibrayFormContainer = styled.form`
    margin-top: 0.5rem;
    color: black;
    background-color: whitesmoke;
    border: solid 2px grey;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    filter: drop-shadow(0 0.2rem 0.1rem rgba(0, 0, 0, 0.2));
`

export const EditLibraryLabel = styled.label`
    font-weight: 700;
    color: black;
    
`

export const EditLibraryInput = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px gray solid;

`
export const SaveBtn = styled.button`
    height: 2rem;
    padding: 0rem 0.5rem;
    font-weight: 700;
    justify-content: center;

    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
`

export const DeleteBtn = styled.button`
     height: 2rem;
    padding: 0rem 0.5rem;
    font-weight: 700;
    justify-content: center;

    color: white;
    background-color: #ff4747;
    border: none;
    border-radius: 5px;
`

export const BtnContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
`