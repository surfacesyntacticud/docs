import { VNode } from 'preact';

type PageFileData = {
    relativePath?: string;
    slug?: string;
    frontmatter?: {
        status?: unknown;
    };
};
type QuartzComponentProps = {
    fileData: PageFileData;
};
type QuartzComponent = ((props: QuartzComponentProps) => VNode | null) & {
    css?: string;
};
declare const PageEditComponent: () => QuartzComponent;
declare const StatusComponent: () => QuartzComponent;

export { PageEditComponent as PageEdit, PageEditComponent, StatusComponent as Status, StatusComponent };
