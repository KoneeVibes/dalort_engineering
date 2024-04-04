import { Box, Grid, Typography } from "@mui/material"
import { professionals } from "../../data"

export const Professionals: React.FC<{}> = () => {
    return (
        <Box
            padding={"0 var(--pagePadding) var(--sectionMargin)"}
        >
            <Typography
                variant="h2"
                fontFamily={"PP Telegraph"}
                fontWeight={400}
                fontSize={{ mobile: 28, miniTablet: 35, tablet: 50 }}
                lineHeight={"normal"}
                color={"#000000"}
                whiteSpace={"normal"}
                marginBlock={"2rem"}
                sx={{
                    textWrap: "balance",
                    width: { laptop: "80%" }
                }}
            >
                Wealth of experienced professionals
            </Typography>
            <Grid
                container
                direction={{ mobile: "column", tablet: "row" }}
                gap={"var(--flexGap)"}
                alignItems={"baseline"}
            >
                {professionals.map((professional, key) => (
                    <Grid
                        item
                        key={key}
                        flex={1}
                        width={"100%"}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${professional.thumbnail})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: { mobile: 355, laptop: professional?.height ? professional.height : 622 },
                                borderRadius: "15px"
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box >
    )
}