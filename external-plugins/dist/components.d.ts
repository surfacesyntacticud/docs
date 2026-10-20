import { VNode } from 'preact';

type PageFileData = {
    relativePath?: string;
    slug?: string;
    frontmatter?: {
        status?: unknown;
        type?: unknown;
        request?: unknown;
        scope?: {
            lang?: unknown;
            schema?: unknown;
        };
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
declare const RequestComponent: () => QuartzComponent;
declare const SudLogoComponent: () => QuartzComponent;

export { PageEditComponent as PageEdit, PageEditComponent, RequestComponent as Request, RequestComponent, StatusComponent as Status, StatusComponent, SudLogoComponent as SudLogo, SudLogoComponent };
