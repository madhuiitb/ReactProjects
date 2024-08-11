const signalConfiguration = {
    red: {
        nextSignal: "yellow",
        duration: 4000,
    },
    yellow: {
        nextSignal: "green",
        duration: 5000,
    },
    green: {
        nextSignal: "red",
        duration: 2000,
    },
};

export default signalConfiguration;
