import { Country } from '../../utils/types';

export interface CountryListResponse {
    data: Country[];
}

export interface CountryDetailResponse {
    data: Country;
}