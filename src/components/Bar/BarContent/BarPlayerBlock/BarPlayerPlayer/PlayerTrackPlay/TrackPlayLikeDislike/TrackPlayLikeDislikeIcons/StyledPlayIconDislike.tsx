import { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../../../../../../../themes';
import { Svg } from './LikeDislikeIconSample';

const SvgDisLike = styled(Svg)``;

export const PlayIconDislike = ({ alt }) => {
    const { themeMode } = useContext(ThemeContext);
    return (
        <SvgDisLike
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 15"
            width="14.34px"
            height="13px"
            alt={alt}
        >
            <path
                style={themeMode.trackIconsStroke2}
                d="M1 1L15 13.5"
                stroke="#696969"
            />
            <path
                style={themeMode.trackIconsStroke2}
                d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
                stroke="#696969"
            />
        </SvgDisLike>
    );
};
