export declare function fetchData(): Promise<Array<Data>>;
interface Data {
    id: Number;
    author: string;
    url: any;
    heading: string;
    description: string;
    img: any;
}
export {};
