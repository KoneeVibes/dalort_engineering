import { Box, styled } from "@mui/material";
import bg from "../../assets/corevaluebg.svg";

export const CoreValueBox = styled(Box)(
    ({ theme }) => ({
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        "& .MuiCard-root": {
            background: "transparent",
            border: "none",
            boxShadow: "none",
        },
        "& .MuiCardContent-root": {
            "& ul": {
                overflow: "hidden",
                [theme.breakpoints.down("desktop")]: {
                    paddingInlineStart: 20
                }
            }
        }
    })
)