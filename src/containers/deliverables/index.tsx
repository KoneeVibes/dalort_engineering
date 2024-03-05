import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { AboutStack } from "./styled";
import service from "../../assets/service.svg";
import { serviceDeliverables } from "../../data";

export const Deliverables: React.FC<{}> = () => {
    return (
        <AboutStack
            margin={{ mobile: "calc(2 * var(--sectionMargin)) var(--pagePadding)", desktop: "calc(3 * var(--sectionMargin)) var(--pagePadding)" }}
            justifyContent={"space-between"}
            direction={{ mobile: "column", tablet: "row" }}
            gap={"calc(var(--flexGap)/3)"}
        >
            <Card
                sx={{
                    flex: 1
                }}
            >
                <CardHeader
                    title={
                        <Typography
                            variant="h2"
                            fontFamily={"PP Telegraph"}
                            fontWeight={800}
                            fontSize={35}
                            lineHeight={"normal"}
                            color={"rgba(255, 255, 255, 1)"}
                            whiteSpace={"normal"}
                        >
                            Our service
                        </Typography>
                    }
                />
                <CardContent>
                    <ul>
                        {serviceDeliverables.map((deliverable, key) => {
                            return (
                                <li
                                    key={key}
                                >
                                    <Typography
                                        variant="h3"
                                        component={"span"}
                                        fontFamily={"PP Telegraph"}
                                        fontWeight={400}
                                        fontSize={30}
                                        lineHeight={"90px"}
                                        color={"rgba(255, 255, 255, 1)"}
                                        whiteSpace={"normal"}
                                        paddingInlineStart={"1rem"}
                                        sx={{
                                            verticalAlign: "super"
                                        }}
                                    >
                                        {deliverable.title}
                                    </Typography>
                                    <br />
                                    <ul
                                        className="items"
                                    >
                                        {deliverable.deliverables.map((item, k) => {
                                            return (
                                                <li
                                                    key={k}
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        component={"span"}
                                                        fontFamily={"PP Telegraph"}
                                                        fontWeight={400}
                                                        fontSize={16}
                                                        lineHeight={"30px"}
                                                        color={"rgba(255, 255, 255, 1)"}
                                                        whiteSpace={"normal"}
                                                        sx={{
                                                            wordBreak: "break-word",
                                                        }}
                                                    >
                                                        {item}
                                                    </Typography>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}

                    </ul>
                </CardContent>
            </Card>
            <Box
                sx={{
                    backgroundImage: `url(${service})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    borderRadius: "10px",
                    flex: 1,
                    minHeight: { mobile: 658, tablet: "unset" }
                }}
            />
        </AboutStack>
    )
}