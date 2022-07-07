import styled from "styled-components";
import { colors } from "../../../utils/colors";


export const CardContainer = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0.2rem 0.1rem rgba(0, 0, 0, 0.2));
    display: flex;
    position: relative;

`
export const Highlight = styled.div`
    width: 3rem;
    border-radius: 1rem;
    padding: 0.2rem;
    background-color: ${(props) => props.color};
    margin: 0.2rem 0rem;
`

export const CardTitle = styled.h2`
    font-weight: 600;
    font-size: 1.2rem;
`
export const CardDescription = styled.p`
    margin-bottom: 1rem;
`

export const CardButton = styled.button`
    width: 2rem;
    height: 2em;
    margin-left: 0.5rem;
    opacity:0.2;
`

export const CardContentContainer = styled.div`
`
export const CardCompletedBtn = styled.button`
    width: 1.2rem;
    border: none;
    border-radius: 1rem;
    padding: 0.2rem;
    background-color: ${(props) => props.color};
    margin: 0.2rem 0.5rem 0.2rem 0rem;
`

export const CardControlsContainer = styled.div`
    width: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
`

export const CardHighlightContainer = styled.div`
    display:flex;
`


