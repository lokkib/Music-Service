export type GlobalContext = {
    barVisibility: {
        hidden: {
            display: string;
        };
        visible: {
            display: string;
        };
    };
    lightTheme: {
        bar: {
            color: string;
            backgroundColor: string;
            stroke: string;
        };

        main: {
            color: string;
            backgroundColor: string;
            stroke: string;
        };
        progress: {
            trailColor: string;
        };
        burgerLine: {
            backgroundColor: string;
        };
        trackIconsStroke: {
            stroke: string;
        };
        trackIconsStroke2: {
            stroke: string;
        };
        trackTitle: {
            backgroundColor: string;
        };
        trackIconsFill: {
            fill: string;
        };
        trackIconsFill2: {
            fill: string;
        };
        border: {
            border: string;
        };
        logo: {
            currentColor: string;
        };
    };

    darkTheme: {
        bar: {
            color: string;
            backgroundColor: string;
            stroke: string;
        };
        barHidden: {
            display: string;
        };
        main: {
            color: string;
            backgroundColor: string;
            stroke: string;
        };
        progress: {
            trailColor: string;
        };
        burgerLine: {
            backgroundColor: string;
        };
        trackIconsStroke: {
            stroke: string;
        };
        trackIconsStroke2: {
            stroke: string;
        };
        trackTitle: {
            backgroundColor: string;
        };
        trackIconsFill: {
            fill: string;
        };
        trackIconsFill2: {
            fill: string;
        };
        border: {
            border: string;
        };
        logo: {
            currentColor: string;
        };
    };

    filteringChosenPerformerGenreColor: {
        chosen: {
            color: string;
        };

        notChosen: {
            color: string;
        };
    };
};
