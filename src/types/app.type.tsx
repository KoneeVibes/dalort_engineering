export type QandAStackProps = {
    question: string
    answer: string
};

export type AboutRefType = {
    aboutRef?: React.RefObject<HTMLDivElement>
    calendlyRef?: React.RefObject<HTMLDivElement>
};

export type CalendlyRefType = {
    calendlyRef?: React.RefObject<HTMLDivElement>
};

export type CalendlyStackType = {
    children: React.ReactNode,
};

export type FooterRefType = {
    footerRef?: React.RefObject<HTMLDivElement>
    calendlyRef?: React.RefObject<HTMLDivElement>
    page?: string
};

export type PagePropsType = {
    aboutRef?: React.RefObject<HTMLDivElement>
    footerRef?: React.RefObject<HTMLDivElement>
    calendlyRef?: React.RefObject<HTMLDivElement>
};

export type HeaderPropsType = {
    headerBg?: string
    bgHeight: number
    headerText?: string
    textWidth?: {
        mobile: string
        miniTablet: string
        tablet: string
    }
    subHeaderText?: string
    callToAction?: React.ReactNode[]
    location: string
};

export type CallsToActionType = {
    buttonText: string;
    isHeaderButton: string;
    location: string;
}[];

export type OverviewPropsType = {
    service?: {
        header: string
        body: string
        legend?: string
        deliverables: string[]
        icon: string
        bg: string
    }
};