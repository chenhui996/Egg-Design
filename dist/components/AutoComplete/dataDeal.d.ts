/// <reference types="react" />
import { DataSourceType } from "./autoComplete";
interface LakerPlayerProps {
    value: string;
    number: number;
}
interface GithubUserProps {
    login: string;
    url: string;
    avatar_url: string;
}
export declare const handleFetchNormal: (query: string) => {
    value: string;
}[];
export declare const renderOptionSynch: (item: DataSourceType<LakerPlayerProps>) => JSX.Element;
export declare const handleFetchSynch: (query: string) => {
    value: string;
    number: number;
}[];
export declare const renderOptionAsync: (item: DataSourceType<GithubUserProps>) => JSX.Element;
export declare const handleFetchAsync: (query: string) => Promise<any>;
export {};
