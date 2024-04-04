import { Stack, styled } from "@mui/material";

export const AboutStack = styled(Stack)(
    () => ({
        "& .MuiCard-root": {
            background: "rgba(230, 254, 255, 1)",
            border: "none",
            boxShadow: "none",
            borderRadius: 10,
        },
        "& .MuiCardHeader-root": {
            padding: "var(--cardPadding)"
        },
        "& .MuiCardContent-root": {
            padding: "0 var(--cardPadding) var(--cardPadding)"
        },
    })
)