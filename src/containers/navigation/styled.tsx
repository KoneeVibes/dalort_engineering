import { styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const Nav = styled("nav")(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "calc( 2 * var(--flexGap))",
            padding: "var(--sectionMargin) var(--pagePadding)",
            "& ul": {
                paddingInlineStart: 0,
                display: "flex",
                alignItems: "center",
                gap: "calc(2 * var(--flexGap))",
                marginBlock: 0,
                [theme.breakpoints.down("tablet")]: {
                    flexDirection: "column",
                    overflow: "hidden",
                },
                [theme.breakpoints.between(768, 1024)]: {
                    gap: "var(--flexGap)",
                }
            },
            "& .logo": {
                cursor: "pointer"
            },
            "& .MuiButton-endIcon": {
                display: "block",
            },
            [theme.breakpoints.down("tablet")]: {
                gap: "var(--flexGap)",
                "& .MuiStack-root": {
                    display: openMenu ? "flex" : "none",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "fixed",
                    left: "0%",
                    width: "stretch",
                    height: "stretch",
                    top: "calc(44px + calc(2 * var(--sectionMargin)))",
                    padding: "calc(2 * var(--cardPadding)) calc(2 * var(--cardPadding)) calc(calc(2 * var(--cardPadding)) + var(--sectionMargin))",
                    background: "#FFFFFF",
                    zIndex: 10,
                }
            },
            [theme.breakpoints.down(165)]: {
                "& .logo": {
                    display: "none",
                }
            }
        }
    }
);