import React, { useEffect, useState } from "react";
import { GetCategory } from "../Platform/Api";
import { NavLink } from "react-router-dom";
import { CatItem, CatItems, StyledSidebar } from "./styles/Sidebar.styled";

export const Sidebar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategoryList()
    }, []);

    const getCategoryList = async() => {
        try {
            const result = await GetCategory()
            if(result.data) {
                setCategory(result.data)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return <StyledSidebar>
        <CatItems>
            {category ? category.map((item, index) => 
                <CatItem key={index}>
                    <NavLink 
                        to={`${item.id}`} 
                    >
                        {item.name}
                    </NavLink>
                </CatItem>
            ) :null
            }
       </CatItems> 
    </StyledSidebar>
}