import { IO } from '../../IO';

// Types for managing state
export type tGetState<T> = () => T;
export type tSetState<T> = (value: T) => void;
export type qStateErr = (err: Error) => void;
export type qStateLoading = () => void;

// Types for defining elements and components
export type IOArray = (() => IO)[];
export enum tag {
    DIV = 'div',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    P = 'p',
    SPAN = 'span',
    A = 'a',
    IMG = 'img',
    UL = 'ul',
    OL = 'ol',
    LI = 'li',
    NAV = 'nav',
    HEADER = 'header',
    FOOTER = 'footer',
    SECTION = 'section',
    ARTICLE = 'article',
    ASIDE = 'aside',
    MAIN = 'main',
    FORM = 'form',
    INPUT = 'input',
    BUTTON = 'button',
    LABEL = 'label',
    TEXTAREA = 'textarea',
    SELECT = 'select',
    OPTION = 'option',
    TABLE = 'table',
    TR = 'tr',
    TD = 'td',
    TH = 'th',
    THEAD = 'thead',
    TBODY = 'tbody',
    TFOOT = 'tfoot',
    CAPTION = 'caption',
    VIDEO = 'video',
    AUDIO = 'audio',
    IFRAME = 'iframe',
    CANVAS = 'canvas',
    SVG = 'svg',
}

export type _tag = tag | string;
export type _classList = ((() => string) | string)[];
export type _id = (number | string) | (() => string | number);
export type _events = { [key: string]: (e?: Event) => void };
export type _atr = { [key: string]: (() => string) | string | undefined };
export type _children = IO[];
export type _components = IOArray | (() => IOArray);
export type _text = (() => string | number) | (string | number);
export type _inner = string | null;

// Interface for describing an IO element
export interface iIO {
    tag?: _tag;
    classList?: _classList;
    id?: _id;
    events?: _events;
    atr?: _atr;
    children?: _children;
    components?: _components;
    text?: _text;
    inner?: _inner;
}

// Interface for describing the status of a query
export interface iQueryStatus<T> {
    data: () => T;
    loading: boolean;
    error: Error | null;
}

// Interface for describing the root element and component
export interface iIORoot {
    rootElement: HTMLElement;
    rootComponent: (() => IO) | null;
}

// Interface for describing a page
export interface iPage {
    [key: string]: () => IO;
}

// Interface for describing callbacks for state queries
export interface iStateQueryCallbacks<T> {
    ok?: (res: T) => void;
    error?: (err: Error) => void;
}
