import { Button, styled } from "@mui/material"

export const BaseButton = styled(Button)<{ isheaderbutton?: string }>(
    ({ isheaderbutton }) => ({
        fontFamily: (isheaderbutton === "true") ? "Roboto" : "PP Telegraph",
        fontWeight: (isheaderbutton === "true") ? 700 : 400,
        fontSize: (isheaderbutton === "true") ? 18 : 14,
        lineHeight: "normal",
        color: (isheaderbutton === "true") ? "" : "#111111",
        background: (isheaderbutton === "true") ? "" : "#D5F653",
        borderRadius: (isheaderbutton === "true") ? 8 : 27,
        padding: (isheaderbutton === "true") ? "" : "0.375rem 1rem",
        ":hover": {
            background: (isheaderbutton === "true") ? "" : "#D5F653",
        }
    })
)