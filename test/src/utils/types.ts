export interface Country {
    id: number,
    name: string,
    countrycode: string,
    capital: string,
    population: number,
    languages: string,
    timezone: string,
    currency: string
}

export type TextAlign = 'left' | 'right' | 'center';