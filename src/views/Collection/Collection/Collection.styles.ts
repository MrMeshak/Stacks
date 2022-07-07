import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: whitesmoke;
    padding: 0rem 2rem 0rem 2rem;
    position: relative;
    border-bottom: 2px lightgrey solid;
    border-top: 2px lightgrey solid;
`

export const CollectionContainer = styled.div`
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media (min-width: 550px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`

export const CollectionName = styled.h1`

`

export const CollectionNameContainer = styled.div`
    padding: 1rem 0rem;
    display: flex;
    justify-content: space-between;
`

export const ToggleCollectionBtn = styled.button`
    width: 3rem;
    height: 3rem;
    margin-left: 0.5rem;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: black;
    cursor: pointer;
`

export const CollectionFormContainer = styled.div`
    width: 55%;
    position: absolute;
    top: 0.4rem;
    right: 9rem;
    margin-left: 2rem;
    @media (min-width: 450px) {
        width: 65%;
    }
    @media (min-width: 500px) {
        width: 20rem;
    }

`