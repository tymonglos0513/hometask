import { createInstance } from '../requestInstance';
import { baseApiUrl } from '../../utils/config';

export const requestAbdDatabase = createInstance({
    apiUrl: `${baseApiUrl}/country`
});