import { createContext } from 'react';

export const themes = {
    barVisibility: {
        hidden: {
            display: 'none',
        },
        visible: {
            display: 'block',
        },
    },

    lightTheme: {
        bar: {
            color: 'black',
            backgroundColor: '#ffffff',
            stroke: 'black',
        },

        main: {
            color: 'black',
            backgroundColor: '#ffffff',
            stroke: 'black',
        },
        progress: {
            trailColor: '#D9D9D9',
        },
        burgerLine: {
            backgroundColor: 'black',
        },
        trackIconsStroke: {
            stroke: '#B1B1B1',
        },
        trackIconsStroke2: {
            stroke: '#B1B1B1',
        },
        trackTitle: {
            backgroundColor: '#F6F4F4',
        },
        trackIconsFill: {
            fill: '#B1B1B1',
        },
        trackIconsFill2: {
            fill: '#B1B1B1',
        },
        border: {
            border: '1px solid black',
        },
        logo: {
            currentColor: 'black',
        },
    },

    darkTheme: {
        bar: {
            color: '#ffffff',
            backgroundColor: '#181818',
            stroke: '#ffffff',
        },
        barHidden: {
            display: 'none',
        },
        main: {
            color: '#ffffff',
            backgroundColor: '#181818',
            stroke: '#ffffff',
        },
        progress: {
            trailColor: '#2E2E2E',
        },
        burgerLine: {
            backgroundColor: '#d3d3d3',
        },
        trackIconsStroke: {
            stroke: '#ffffff',
        },
        trackIconsStroke2: {
            stroke: '#696969',
        },
        trackTitle: {
            backgroundColor: '#313131',
        },
        trackIconsFill: {
            fill: '#D9D9D9',
        },
        trackIconsFill2: {
            fill: '#696969',
        },
        border: {
            border: '1px solid #ffffff',
        },
        logo: {
            currentColor: '#ffffff',
        },
    },

    filteringChosenPerformerGenreColor: {
        chosen: {
            color: '#b672ff',
        },

        notChosen: {
            color: '#ffffff',
        },
    },
};

const ThemeContext = createContext();

export default ThemeContext;
