import React, { useEffect, useState } from "react";
import { DefaultPictures } from "../Platform/Api";
import { ImgBoxes, ImgDiv, StyledMain } from "./styles/Main.styled";

export const Body = () => {
    const [defaultImages, setDefaultImages] = useState([]);

    useEffect(() => {
        getDefaultImageList()
    }, []);

    const getDefaultImageList = async() => {
        try {
            const result = await DefaultPictures()
            if(result.data) {
                setDefaultImages(result.data)
            }
        } catch (error) {
            console.log(error)
        }
    };
    return <StyledMain>
        <ImgBoxes>
            {defaultImages.map ((item, index) => {
                return <ImgDiv key={index}>
                    <img src={item.url} alt="img"/>
                </ImgDiv>
            })}
        </ImgBoxes>
</StyledMain>
}