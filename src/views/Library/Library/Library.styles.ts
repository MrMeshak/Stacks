import styled from "styled-components";

export const LibraryContainer = styled.div`
    margin: 0.2rem 2rem 2rem 2rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const LibraryNameContainer = styled.div`
    margin: 0rem 2rem;
    padding: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    position: relative;
`

export const AddStackButton = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: black;
`

export const LibraryName = styled.h1`

`

export const AddStackFormContainer = styled.div`
    position: absolute;
    width: 80.5%;
    top: 0px;
    right: 60px;

    @media (min-width: 400px) {
        width: 20rem;
    }

`