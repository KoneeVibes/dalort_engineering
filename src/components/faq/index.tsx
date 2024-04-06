import { Box, Stack, Typography } from "@mui/material"
import { QandA } from "../button/q/a"
import { qanda } from "../../data"

export const FAQ: React.FC<{}> = () => {
    return (
        <Box
            padding={{ mobile: "0 var(--pagePadding)", tablet: "var(--sectionMargin) var(--pagePadding)", desktop: "calc(2 * var(--sectionMargin)) var(--pagePadding)" }}
        >
            <Typography
                variant="h2"
                fontFamily={"PP Telegraph"}
                fontWeight={800}
                fontSize={{ mobile: 30, tablet: 40 }}
                lineHeight={"normal"}
                whiteSpace={"normal"}
                color={"rgba(0, 0, 0, 1)"}
                marginBlockEnd={{ mobile: "0.5rem", tablet: "var(--sectionMargin)" }}
            >
                What you need to know
            </Typography>
            <Stack
                gap={"var(--sectionMargin)"}
            >
                {qanda.map((item, k) => {
                    return (
                        <QandA
                            key={k}
                            question={item.q}
                            answer={item.a}
                        />
                    )
                })}
            </Stack>
        </Box>
    )
}