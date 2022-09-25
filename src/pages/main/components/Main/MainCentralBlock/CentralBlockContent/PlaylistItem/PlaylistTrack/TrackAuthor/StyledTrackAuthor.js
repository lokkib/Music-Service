import styled from 'styled-components';

export const TrackAuthor = styled.div`
    width: 321px;
    display: flex;
    justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a.attrs({
    href: 'http://',
})`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
`;
