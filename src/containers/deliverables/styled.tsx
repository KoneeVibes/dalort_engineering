import { Stack, styled } from "@mui/material";
import bullet from "../../assets/lightBulletPoint.svg";

export const AboutStack = styled(Stack)(
    ({ theme }) => ({
        "& ul": {
            paddingInlineStart: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--flexGap)",
            overflow: "hidden",
            "& li": {
                listStyle: `circle inside url(${bullet})`
            }
        },
        "& .items": {
            paddingInlineStart: "70px",
            gap: "calc(var(--flexGap)/3)",
            "& li": {
                listStyle: "outside",
                color: "#FFFFFF"
            },
            [theme.breakpoints.down("desktop")]: {
                paddingInlineStart: "20px"
            }
        },
        "& .MuiCard-root": {
            background: "conic-gradient(from -38.22deg at 47.29% 52.89%, #0B2E35 -93.07deg, #083B3B 79.2deg, #006450 184.52deg, #0B2E35 266.93deg, #083B3B 439.2deg)",
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