import { Stack, StackProps, styled } from "@mui/material";
import { CalendlyStackType } from "../../types/app.type";

export const CalendlyStack: React.FC<CalendlyStackType & Omit<StackProps, keyof CalendlyStackType>> = styled(Stack)(
    ({ theme }) => {
        return {
            "& .calendly-inline-widget": {
                minWidth: "0 !important",
                borderRadius: "17px",
                border: "1px solid #525252",
            },
            "& iframe": {
                borderRadius: "17px",
                border: "1px solid #525252",
            }
        }
    }
)