import { Stack, styled } from "@mui/material";

export const QandAStack = styled(Stack)<{ isactive: string }>(
    ({ theme, isactive }) => {
        return {
            padding: "var(--sectionMargin) 0",
            borderBottom: "0.5px solid rgba(178, 178, 178, 1)",
            transition: "all 2s ease-in-out",
            "& .answer": {
                display: (isactive === "true") ? "block" : "none"
            },
            [theme.breakpoints.up("desktop")]: {
                width: "80%"
            }
        }
    }
)