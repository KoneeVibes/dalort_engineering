import { Box, styled } from "@mui/material";

export const Footerbox = styled(Box)(
    ({ theme }) => ({
        background: "rgba(230, 254, 255, 1)",
        display: "flex",
        justifyContent: "space-between",
        gap: "var(--flexGap)",
        [theme.breakpoints.down("tablet")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down(209)]: {
            "& .logo, & button": {
                width: "100%"
            }
        }
    })
)