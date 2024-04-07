import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { HeaderPropsType } from "../../types/app.type";
import { getFontSize } from "../../configs/getFontSize";
import { getTextWidth } from "../../configs/getTextWidth";

export const Header: React.FC<HeaderPropsType> = (
    { headerBg, bgHeight, headerText, subHeaderText, callToAction, textWidth, location }
) => {
    const screenSize = useMediaQuery('(min-width:1280px)');
    const matches = location !== "home" && screenSize;
    return (
        <Box
            id="header"
            component={"div"}
            sx={{
                backgroundImage: `url(${headerBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: { mobile: bgHeight },
                padding: "calc(3 * var(--sectionMargin)) var(--pagePadding)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
            }}
        >
            <Stack>
                <Typography
                    variant="h1"
                    fontFamily={"PP Telegraph"}
                    fontWeight={800}
                    fontSize={getFontSize(location)}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"wrap"}
                    marginBlockEnd={"2rem"}
                    sx={{
                        textWrap: { mobile: "pretty", tablet: "balance" },
                        width: !matches ? getTextWidth(textWidth) : "50%"
                    }}
                >
                    {headerText}
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"PP Telegraph"}
                    fontWeight={400}
                    fontSize={{ mobile: 16, tablet: 20 }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"wrap"}
                    marginBlockEnd={"2rem"}
                >
                    {subHeaderText}
                </Typography>
                <Stack
                    direction={{ mobile: "column", tablet: "row" }}
                    gap={"calc(var(--flexGap)/3)"}
                    width={{ mobile: "100%", miniTablet: "max-content", tablet: "auto" }}
                    overflow={"hidden"}
                >
                    {callToAction}
                </Stack>
            </Stack>
        </Box >
    )
}