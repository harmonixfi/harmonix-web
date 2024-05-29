import { GetVaultOverviewResponse } from '@/@types/vault';

import apiFetch from './apiFetch';

export const getVaultsOverview = async () =>
  await apiFetch<GetVaultOverviewResponse>('/statistics/');
