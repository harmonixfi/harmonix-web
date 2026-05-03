import { getAppConfigAPY } from '@/api/appConfig';
import { getApyKey, getApyValue } from '@/lib/vault';
import { useCallback } from 'react';

import useSWR from 'swr';


const useAppConfigAPY = () => {
  const { data, isLoading } = useSWR(['get-app-config'], getAppConfigAPY);

  const getPeriodByVaultId = useCallback(
    (vaultId?: string) => {
      if (!vaultId) return 0;
      const { vault_periods = {}, default_period = '0' } = data || {};
      return Number(vault_periods[vaultId] ?? default_period);
    },
    [data],
  );

  const getVaultApyValue = useCallback(
    ({
      id,
      apy,
      apy15d,
      apy45d,
    }: {
      id: string;
      apy: number | null;
      apy15d: number | null;
      apy45d: number | null;
    }) => {
      const period = getPeriodByVaultId(id);
      return getApyValue({ period, apy, apy15d, apy45d });
    },
    [getPeriodByVaultId],
  );

  const getVaultApyKey = useCallback(
    (id: string) => {
      const period = getPeriodByVaultId(id);
      return getApyKey(period);
    },
    [getPeriodByVaultId],
  );

  return {
    isLoading,
    getPeriodByVaultId,
    getVaultApyValue,
    getVaultApyKey
  };
};

export default useAppConfigAPY;
