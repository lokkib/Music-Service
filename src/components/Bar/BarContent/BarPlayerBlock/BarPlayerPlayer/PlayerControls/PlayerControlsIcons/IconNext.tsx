import { useContext } from 'react';
import styled from 'styled-components';
import { IconAltProps } from '../../../../../../../@types/props/IconAltProps';
import ThemeContext from '../../../../../../../themes';
import { Svg } from './SvgIconSample';

const SvgNext = styled(Svg)<IconAltProps>``;

export const IconNext = ({ alt }: IconAltProps) => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <SvgNext
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="14px"
            fill="none"
            viewBox="0 0 16 14"
            alt={alt}
        >
            <path
                style={themeMode.trackIconsStroke}
                d="M15 2V12.5"
                stroke="white"
            />
            <path
                style={themeMode.trackIconsFill}
                d="M13 7L3.25 0.937823L3.25 13.0622L13 7Z"
                fill="#D9D9D9"
            />
        </SvgNext>
    );
};
