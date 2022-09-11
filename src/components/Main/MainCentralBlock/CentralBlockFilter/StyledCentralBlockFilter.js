import styled from "styled-components";

export const CentralBlockFilter = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 51px;
`

export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`

export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
&:not(:last-child) {
    margin-right: 10px;
}
    &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
    }

    &:active{

        border-color: #ad61ff;
        color: #ad61ff;
        cursor: pointer;
    }

`