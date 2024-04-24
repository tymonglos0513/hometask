import { useQuery, UseQueryResult } from 'react-query';
import { getCountryDetailById } from '../resources';
import { CountryDetailResponse } from '../types';

const useGetCountryDetailById = (id: string): UseQueryResult<CountryDetailResponse, Error> => {
    return useQuery([], () => getCountryDetailById(id).then(response => response.data));
};

export default useGetCountryDetailById;
