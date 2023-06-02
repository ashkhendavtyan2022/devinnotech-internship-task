import styled from "styled-components";

export const StyledMain = styled.div`
    width: calc(100% - 250px);
    height: 100%;
    padding: 30px 0px;
    margin: 0px 25px;
    overflow-y: auto;
`

export const ImgBoxes = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    @media(max-width:${({theme}) => theme.desktop}) {
        gap: 40px;
    }
`

export const ImgDiv = styled.div`
    width: 30%;
    min-width: 230px;
    height: 300px;
    margin: 10px;

    & > img {
        width: 100%;
        min-width: 230px;
        height: 100%;
        object-fit: cover;
    }

    @media(max-width:${({theme}) => theme.mobile}) {
        width: 230px;

        & > img {
            width: 230px;
        }
    }

`