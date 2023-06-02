import styled from "styled-components";

export const StyledSidebar =  styled.nav`
    width: 250px;
    max-width: 250px;
    height: 100%;
    background-color: ${({theme}) => theme.colors.sidebar};
    padding: 30px 10px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 150px;
    }
`

export const CatItems =  styled.ul`
    list-style: none;
`

export const CatItem = styled.li`
    padding: 20px 20px;

    &:hover a::after {
        position: absolute;
        content: "";
        height: 2px;
        background-color: ${({theme}) => theme.colors.body};
        width: 100%;
        top: 110%;
        left: 0%;  
    }

    & > a {
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.body};
        position: relative;  
    }

    @media(max-width:${({theme}) => theme.mobile}) {
        & > a {
            font-size: 1rem;
        }
    }
`