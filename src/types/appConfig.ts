export type VaultPeriods = {
  [key: string]: string;
};

export type AppConfigAPY = {
  default_period: string;
  vault_periods: VaultPeriods;
};

