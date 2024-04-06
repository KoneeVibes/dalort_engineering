export type QandAStackProps = {
    question: string,
    answer: string
}

export type AboutRefType = {
    aboutRef: React.RefObject<HTMLDivElement>
    calendlyRef?: React.RefObject<HTMLDivElement>
}

export type CalendlyRefType = {
    calendlyRef: React.RefObject<HTMLDivElement>
}

export type CalendlyStackType = {
    children: React.ReactNode,
}

export type FooterRefType = {
    footerRef: React.RefObject<HTMLDivElement>,
    calendlyRef?: React.RefObject<HTMLDivElement>
}