import styled from 'styled-components';

const StyledBlock = styled.div<{ height?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 12%;
    width: 366px;
    height: ${(props) => (props.height ? props.height : '439px')};
    border-radius: 12px;
    background-color: white;
`;

export default StyledBlock;
