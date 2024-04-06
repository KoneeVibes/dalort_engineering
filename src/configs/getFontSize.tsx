export const getFontSize = (location: string) => {
    const home = {
        mobile: 30,
        tablet: 35,
        laptop: 40
    };
    const service = {
        mobile: 35,
        tablet: 40,
        laptop: 50,
    };

    return location === "home" ? home : service;
};
