export type ProgressPlayerState = {
    volume: number;
    progress: {
        max: number;
        value: number;
    };
    finalValue: number;
    audioEnded: {
        audioEnded: boolean;
    };
};
