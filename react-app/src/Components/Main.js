import React, { useEffect, useState } from "react";
import { GetPictures } from "../Platform/Api";
import { useParams } from "react-router-dom";
import { Button } from "./styles/Button.styled";
import { ImgBoxes, ImgDiv, StyledMain } from "./styles/Main.styled";

export const Main = () => {
    const { id } = useParams();
    const [images, setCatImages] = useState([]);
    const [pagecount, setPagecount] = useState(1);

    useEffect(() => {
        if(pagecount === 1) {
            GetImageList(pagecount, id);
        }
    }, [id, pagecount]);

    const GetImageList = async(page, id) => {
        try {
            const result = await GetPictures(page, id)
            if(result.data) {
                setCatImages(result.data)
            }
        } catch (error) {
            console.log(error)
        }
        
    };

    const loadMore = async(page) => {
        try {
            page++;
            const result = await GetPictures(page, id)
            result.data.map(item => images.push(item))
            setPagecount(page)
        } catch (error) {
            console.log(error)
        }
    };

    return <StyledMain>
        <ImgBoxes>
            {images.map ((item, index) => {
                return <ImgDiv key={index}>
                    <img src={item.url} alt="img"/>
                </ImgDiv>
            })}
        </ImgBoxes>
        <Button onClick={() => loadMore(pagecount)}>Load More</Button>
    </StyledMain>
}