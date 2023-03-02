import { useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IconAltProps } from '../../../../../../../@types/props/IconAltProps';
import ThemeContext from '../../../../../../../themes';
import { Svg } from './SvgIconSample';
import { RootState } from '../../../../../../../redux/store';

const SvgRepeat = styled(Svg)<IconAltProps>``;

export const IconRepeat = ({ alt }: IconAltProps) => {
    const shuffleButtonisPressed = useSelector(
        (state: RootState) =>
            state.orderOfTracksPlaying.repeatTracks.isButtonPressed
    );
    const { themeMode } = useContext(ThemeContext);
    return (
        <SvgRepeat
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
            width="18px"
            height="12px"
            alt={alt}
        >
            <path
                style={themeMode.trackIconsFill2}
                d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                fill="#696969"
                stroke={shuffleButtonisPressed ? '#ffffff' : '#696969'}
            />
            <path
                style={themeMode.trackIconsFill2}
                d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                fill="#696969"
                stroke={shuffleButtonisPressed ? '#ffffff' : '#696969'}
            />
        </SvgRepeat>
    );
};