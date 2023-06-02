import styled from "styled-components";

export const Button = styled.button`
    display: block;
    margin: 50px auto;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.sidebar};
    font-size: 1rem;
    color: ${({theme}) => theme.colors.body};
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.button};
    }
`