import { Button, styled } from "@mui/material";

const getColorStyles = (location?: string, isheaderbutton?: boolean) => {
    //somehow this configuration should be improved along the solution of using cases
    //to return values depending on location. I have to move on for time sake.
    const headerColors = {
        left: {
            bg: "conic-gradient(from -38.22deg at 47.29% 52.89%, #0B2E35 -93.07deg, #083B3B 79.2deg, #006450 184.52deg, #0B2E35 266.93deg, #083B3B 439.2deg)",
            color: "rgba(255, 255, 255, 1)",
        },
        right: {
            bg: "rgba(255, 255, 255, 1)",
            color: "rgba(11, 51, 43, 1)",
        },
    };

    const footerColors = {
        bg: "#0E0E0E",
        color: "#FFFFFF",
    };

    const otherColors = {
        bg: "#D5F653",
        color: "#111111",
    };


    return isheaderbutton
        ? location === "left" ? headerColors.left : headerColors.right
        : location === "footer" ? footerColors : otherColors;
};


export const BaseButton = styled(Button)<{ isheaderbutton?: string, location?: string }>(
    ({ theme, isheaderbutton, location }) => {
        const isHeader = isheaderbutton === "true";
        return {
            fontFamily: isHeader ? "Roboto" : "PP Telegraph",
            fontWeight: isHeader ? 700 : 400,
            fontSize: isHeader ? 18 : 14,
            lineHeight: "normal",
            textTransform: "capitalize",
            color: getColorStyles(location, isHeader).color,
            background: getColorStyles(location, isHeader).bg,
            borderRadius: isHeader ? 8 : 27,
            padding: isHeader ? "1.21875rem 3.875rem" : "0.375rem 1rem",
            ":hover": {
                background: getColorStyles(location, isHeader).bg,
            },
            [theme.breakpoints.down(280)]: {
                fontSize: isHeader ? 14 : 14,
            }
        };
    }
);