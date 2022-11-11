import styled from 'styled-components';

export const StyledMenuLink = styled.a.attrs(props => ({
    onClick: props.signOut,
    onClick: props.goBackToMainPage
    
}))`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
