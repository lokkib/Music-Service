import styled from 'styled-components';

const Icon = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
})``;

export function IconPrev({ alt }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="14px"
            alt={alt}
            fill="none"
            viewBox="0 0 16 14"
        >
            <path d="M1 2V12.5" stroke="white" />
            <path d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z" fill="#D9D9D9" />
        </svg>
    );
}

const SvgPlayStop = styled(Icon)`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
    &:active {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
    &:hover {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`;
export function IconPlay({ alt }) {
    return (
        <SvgPlayStop alt={alt} fill="none" viewBox="0 0 15 20">
            <path
                d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z"
                fill="#D9D9D9"
            />
        </SvgPlayStop>
    );
}

export function IconNext({ alt }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="14px"
            alt={alt}
            fill="none"
            viewBox="0 0 16 14"
        >
            <path d="M15 2V12.5" stroke="white" />
            <path d="M13 7L3.25 0.937823L3.25 13.0622L13 7Z" fill="#D9D9D9" />
        </svg>
    );
}

const SvgRepeat = styled(Icon)`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    &:active {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
    &:hover {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`;
export function IconRepeat({ alt }) {
    return (
        <SvgRepeat alt={alt} fill="none" viewBox="0 0 20 18">
            <path
                d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                fill="#696969"
            />
            <path
                d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                fill="#696969"
            />
        </SvgRepeat>
    );
}

const SvgShuffle = styled(Icon)`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    &:active {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
    &:hover {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`;
export function IconShuffle({ alt }) {
    return (
        <SvgShuffle alt={alt} fill="none" viewBox="0 0 20 18">
            <path
                d="M19.5 15L14.5 12.1132V17.8868L19.5 15ZM10.1632 12.0833L9.70863 12.2916L10.1632 12.0833ZM7.33683 5.91673L6.8823 6.12505L7.33683 5.91673ZM0.5 3.5H2.79151V2.5H0.5V3.5ZM6.8823 6.12505L9.70863 12.2916L10.6177 11.8749L7.79137 5.7084L6.8823 6.12505ZM14.7085 15.5H15V14.5H14.7085V15.5ZM9.70863 12.2916C10.6047 14.2466 12.5579 15.5 14.7085 15.5V14.5C12.949 14.5 11.3508 13.4745 10.6177 11.8749L9.70863 12.2916ZM2.79151 3.5C4.55105 3.5 6.14918 4.52552 6.8823 6.12505L7.79137 5.7084C6.89533 3.75341 4.94205 2.5 2.79151 2.5V3.5Z"
                fill="#696969"
            />
            <path
                d="M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z"
                fill="#696969"
            />
        </SvgShuffle>
    );
}

export const IconStop = ({ alt }) => (
    <SvgPlayStop alt={alt} fill="none" viewBox="0 0 15 19">
        <rect width="5" height="19" fill="#D9D9D9" />
        <rect x="10" width="5" height="19" fill="#D9D9D9" />
    </SvgPlayStop>
);
