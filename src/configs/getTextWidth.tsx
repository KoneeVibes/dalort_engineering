export const getTextWidth = (width?: { mobile: string, miniTablet: string, tablet: string }) => {
    return {
        mobile: width?.mobile,
        miniTablet: width?.miniTablet,
        tablet: width?.tablet
    }
};
