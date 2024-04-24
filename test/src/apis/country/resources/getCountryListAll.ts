import { requestAbdDatabase } from '../requestAbdDatabase';
import { CountryListResponse } from '../types';

const getCountryListAll = () =>
    requestAbdDatabase.get<CountryListResponse>('');

export default getCountryListAll;