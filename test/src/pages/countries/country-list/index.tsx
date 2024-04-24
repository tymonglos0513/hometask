import React, {useEffect, useState} from 'react';
import MainList from './components/MainList';
import SearchBar from './components/SearchBar';
import { Country } from '../../../utils/types';
import { Container } from '../../../components/mui'
import { useGetCountryListAll } from '../../../apis/country/hooks';

const CountryList: React.FC = () => {
    const {data: InitialCountries} = useGetCountryListAll();
    const [countries, setCountries] = useState<Country[]>(InitialCountries?.data??[]);
    
    useEffect(() => {
        if (InitialCountries)
            setCountries(InitialCountries.data);
    }, [InitialCountries])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (InitialCountries)
        {
            const newCountries = InitialCountries.data.filter((country, index) => country.name.toUpperCase().includes(event.target.value.toUpperCase()))
            setCountries(newCountries);
        }
    }

    return (
        <Container maxWidth="md" sx={{mt: 5}}>
            <SearchBar handleSearch={handleSearch} /> 
            <MainList countries={countries} />
        </Container>
    )
}

export default CountryList