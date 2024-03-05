import { Stack, styled } from "@mui/material";
import bullet from "../../assets/lightBulletPoint.svg";

export const AboutStack = styled(Stack)(
    () => ({
        "& ul": {
            paddingInlineStart: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--flexGap)",
            "& li": {
                listStyle: `circle inside url(${bullet})`
            }
        },
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