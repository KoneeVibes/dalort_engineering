import { Box, Stack, Typography } from "@mui/material";
import headerBg from "../../assets/headerBg.svg";
import { BaseButton } from "../../components/button/styled";

export const Header: React.FC<{}> = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${headerBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: { mobile: 692 },
                padding: "calc(3 * var(--sectionMargin)) var(--pagePadding)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end"
            }}
        >
            <Stack>
                <Typography
                    variant="h1"
                    fontFamily={"PP Telegraph"}
                    fontWeight={800}
                    fontSize={{ mobile: 25, tablet: 35, laptop: 40 }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"wrap"}
                    marginBlockEnd={"2rem"}
                    sx={{
                        textWrap: { mobile: "pretty", tablet: "balance" }
                    }}
                >
                    Engineering, Construction, Installation and Project Management of Oil and Gas Facilities
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
                    To utilize local expertise to deliver industry standard and world class services
                </Typography>
                <Stack
                    direction={{ mobile: "column", tablet: "row" }}
                    gap={"calc(var(--flexGap)/3)"}
                    width={{ mobile: "100%", miniTablet: "max-content", tablet: "auto" }}
                    overflow={"hidden"}
                >
                    <BaseButton
                        isheaderbutton="true"
                        location="left"
                        sx={{
                            width: { mobile: "100%", miniTablet: "auto" },
                        }}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Book a session
                        </Typography>
                    </BaseButton>
                    <BaseButton
                        isheaderbutton="true"
                        location="right"
                        sx={{
                            width: { mobile: "100%", miniTablet: "auto" },
                        }}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Get started
                        </Typography>
                    </BaseButton>
                </Stack>
            </Stack>
        </Box >
    )
}