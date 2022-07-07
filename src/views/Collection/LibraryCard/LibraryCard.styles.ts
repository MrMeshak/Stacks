import styled from "styled-components";

export const CardBtn = styled.button`
    width: 100%;
    padding: 1rem;
    color: black;
    background-color: white;
    border: solid black 3px;
    border-radius: 10px;
    filter: drop-shadow(0 0.2rem 0.1rem rgba(0, 0, 0, 0.2));
`

export const EditBtn = styled.button`
    position: absolute;
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
    opacity: 100%;
    top: -10px;
    right: 1rem;
    cursor: pointer;
`

export const LibraryCardContainer = styled.div`
    position: relative;
    display: inline-block;
    justify-content: center;
    width: 100%;
`