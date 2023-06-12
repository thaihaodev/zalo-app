export interface IRoute{
    path: string;
    element: React.ReactElement;
    icon?: React.ReactElement;
    children?: IRoute[];
    role?: string[];
}