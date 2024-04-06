import { Stack, styled } from "@mui/material";

export const OverviewStack = styled(Stack)(
    ({ theme }) => {
        return {
            padding: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
            borderBottom: "0.5px solid #B2B2B2",
            gap: "var(--flexGap)",
            [theme.breakpoints.down("tablet")]: {
                padding: "var(--sectionMargin) var(--pagePadding)",
            },
            [theme.breakpoints.down("desktop")]: {
                marginBottom: "var(--sectionMargin)"
            },
            [theme.breakpoints.up("laptop")]: {
                flexDirection: "row",
                gap: "calc(2 * var(--flexGap))",
            },
            "& ul": {
                marginBlockStart: "0 !important",
                marginBlockEnd: "2rem",
                paddingInlineStart: "0 !important"
            },
            "& li, & legend": {
                fontFamily: "PP Telegraph",
                fontWeight: 400,
                fontSize: 18,
                lineHeight: "37px",
                color: "#000000",
                listStylePosition: "inside",
                overflow: "hidden",
                whiteSpace: "normal",
                textOverflow: "ellipsis",
            },
            "& legend": {
                marginBlockEnd: "1rem"
            }
        }
    }
)