export default interface BreadcrumbsProps {
    links?: Link[];
}

export interface Link {
    href: string;
    label: string;
}
