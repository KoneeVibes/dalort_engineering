import { Typography } from "@mui/material";
import { TestimonialBox } from "./styled";

export const Testimonial: React.FC<{}> = () => {
    return (
        <TestimonialBox
            padding={{ mobile: "calc(2 * var(--sectionMargin)) var(--pagePadding)", desktop: "calc(2 * var(--sectionMargin)) calc(2 * var(--pagePadding))" }}
        >
            <Typography
                variant="h2"
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={35}
                lineHeight={"normal"}
                color={"rgba(41, 38, 38, 1)"}
                whiteSpace={"normal"}
            >
                Our customers say it best
            </Typography>
            <Typography
                variant="body1"
                fontFamily={"Roboto"}
                fontWeight={500}
                fontSize={18}
                lineHeight={"normal"}
                color={"rgba(41, 38, 38, 1)"}
                marginBlock={"1rem"}
                sx={{
                    textDecoration: "underline",
                    textDecorationColor: "rgba(41, 38, 38, 1)",
                    textDecorationThickness: 3
                }}
            >
                See all case studies
            </Typography>
        </TestimonialBox>
    )
}