import { Stack, styled } from "@mui/material";

export const ServicesStack = styled(Stack)(
    ({ theme }) => ({
        "& .MuiCard-root": {
            background: "conic-gradient(from -38.22deg at 47.29% 52.89%, #0B2E35 -93.07deg, #083B3B 79.2deg, #006450 184.52deg, #0B2E35 266.93deg, #083B3B 439.2deg)",
            borderRadius: 10,
            position: "relative",
            minHeight: 433,
        },
        "& .MuiCardHeader-root": {
            padding: "calc(2 * var(--cardPadding)) var(--cardPadding)"
        },
        "& .MuiCardContent-root": {
            padding: "0 var(--cardPadding) var(--cardPadding)"
        },
        "& .MuiCardHeader-content": {
            width: "100%",
        }
    })
)