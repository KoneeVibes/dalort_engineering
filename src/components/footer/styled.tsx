import { Box, styled } from "@mui/material";

export const Footerbox = styled(Box)(
    ({ theme }) => ({
        background: "rgba(230, 254, 255, 1)",
        display: "flex",
        justifyContent: "space-between",
        gap: "var(--flexGap)",
        alignItems: "flex-end",
        [theme.breakpoints.down("laptop")]: {
            flexDirection: "column",
            alignItems: "stretch",
        },
        [theme.breakpoints.down(209)]: {
            "& .logo, & .bookASession": {
                width: "100%"
            }
        }
    })
)