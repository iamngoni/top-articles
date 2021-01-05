export declare function fetchCovidData(): Promise<{
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    date: string;
} | undefined>;
