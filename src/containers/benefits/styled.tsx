import { Card, styled } from "@mui/material";

export const BenefitsCard = styled(Card)(
    () => ({
        position: "relative",
        overflow: "unset",
        borderRadius: 0,
        padding: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
        background: "conic-gradient(from -38.22deg at 47.29% 52.89%, #0B2E35 -93.07deg, #083B3B 79.2deg, #006450 184.52deg, #0B2E35 266.93deg, #083B3B 439.2deg)",
        "& .MuiCardHeader-content": {
            width: "100%",
        },
    })
)