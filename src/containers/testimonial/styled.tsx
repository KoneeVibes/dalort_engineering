import { Box, styled } from "@mui/material";

export const TestimonialBox = styled(Box)(
    ({theme}) => ({
        "& .MuiCardHeader span": {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "normal"
        },
        "& .MuiCardHeader-content": {
            overflow: "hidden",
        },
        "& .carousel .control-dots .dot": {
            width: "32px",
            height: "32px"
        },
        "& .carousel .control-dots": {
            margin: "4rem 0 2rem",
            width: "60%",
            [theme.breakpoints.down("tablet")]:{
                display: "none"
            }
        },
    })
)