import { useContext } from 'react';
import styled from 'styled-components';
import { IconAltProps } from '../../../../../../../@types/props/IconAltProps';
import ThemeContext from '../../../../../../../themes';
import { Svg } from './SvgIconSample';

const SvgPrev = styled(Svg)<IconAltProps>``;

export const IconPrev = ({ alt }: IconAltProps) => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <SvgPrev
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="14px"
            fill="none"
            viewBox="0 0 16 14"
            alt={alt}
        >
            <path
                style={themeMode.trackIconsStroke}
                d="M1 2V12.5"
                stroke="white"
            />
            <path
                style={themeMode.trackIconsFill}
                d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z"
                fill="#D9D9D9"
            />
        </SvgPrev>
    );
};
