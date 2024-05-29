export type VaultOverview = {
  id: string;
  name: string;
  slug: string;
  price_per_share: number;
  apy_1y: number;
  risk_factor: number;
  total_value_locked: number;
};

export type GetVaultOverviewResponse = {
  tvl_composition: Record<string, number>;
  tvl_in_all_vaults: number;
  vaults: VaultOverview[];
};
