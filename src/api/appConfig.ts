
import apiFetch from '@/lib/api';
import { AppConfigAPY } from '@/types/appConfig';


export const getAppConfigAPY = async () => await apiFetch<AppConfigAPY>(`/app-config/`);


