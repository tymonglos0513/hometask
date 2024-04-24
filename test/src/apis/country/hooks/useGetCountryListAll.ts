import { useQuery, UseQueryResult } from 'react-query';
import { getCountryListAll } from '../resources';
import { CountryListResponse } from '../types';

const useGetCountryListAll = (): UseQueryResult<CountryListResponse, Error> => {
    return useQuery("GetAllCountry", () => getCountryListAll().then(response => response.data));
};

export default useGetCountryListAll;
