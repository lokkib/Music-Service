import { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../../../../../../../themes';
import { Svg } from './LikeDislikeIconSample';
import { IconLikeProps } from '../../../../../../../../@types/props/LikeIconProps';

const SvgLike = styled(Svg)``;

const PlayIconLike = ({ iconColor }: IconLikeProps) => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <SvgLike
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="12px"
            fill={iconColor}
            viewBox="0 0 16 15"
        >
            <path
                style={themeMode.trackIconsStroke2}
                d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
                stroke="#696969"
            />
        </SvgLike>
    );
};

export default PlayIconLike;
