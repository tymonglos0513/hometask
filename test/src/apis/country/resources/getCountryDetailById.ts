import { Country } from '../../../utils/types';
import { requestAbdDatabase } from '../requestAbdDatabase';

const getCountryDetailById = (id: string) => requestAbdDatabase.get<Country>(`/${id}`);

export default getCountryDetailById;
