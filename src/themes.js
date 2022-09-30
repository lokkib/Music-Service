import { createContext } from 'react';

export const themes = {
    light: {
        color: 'black',
        backgroundColor: '#ffffff',
        stroke: 'black',
    },

    lightPlaceholder: {
        color: 'black',
    },
    darkPlaceholder: {
        color: '#ffffff',
    },
    lightProgress: {
        backgroundColor: '#D9D9D9',
    },
    darkProgress: {
        backgroundColor: '#2E2E2E',
    },
    dark: {
        color: '#ffffff',
        backgroundColor: '#181818',
        stroke: '#ffffff',
    },
    lightBorder: {
        border: '1px solid #ffffff',
    },
    darkBorder: {
        border: '1px solid black',
    },
    lightBurgerLine: {
        backgroundColor: 'black',
    },
    darkBurgerLine: {
        backgroundColor: '#d3d3d3',
    },
    lightTrackTitle: {
        backgroundColor: '#F6F4F4',
    },
    darkTrackTitle: {
        backgroundColor: '#313131',
    },

    lightTrackIconsFill: {
        fill: '#B1B1B1',
    },
    darkTrackIconsFill: {
        fill: '#D9D9D9',
    },
    lightTrackIconsFill2: {
        fill: '#B1B1B1',
    },
    darkTrackIconsFill2: {
        fill: '#696969',
    },
    lightTrackIconsStroke: {
        stroke: '#B1B1B1',
    },
    darkTrackIconsStroke: {
        stroke: '#ffffff',
    },
    lightTrackIconsStroke2: {
        stroke: '#B1B1B1',
    },
    darkTrackIconsStroke2: {
        stroke: '#696969',
    },
};

const ThemeContext = createContext();

export default ThemeContext;
