export type IconProps = {
  className?: string;
};
export enum Vault {
  EARN = "earn",
  STAKE = "stake",
  SWAP = "swap",
}
export interface TokenDetails {
  name: string;
  maxSupply: string;
  totalSupply: string;
  circulatingSupply: string;
  szDecimals: number;
  weiDecimals: number;
  midPx: string;
  markPx: string;
  prevDayPx: string;
  genesis: {
    userBalances: [string, string][];
    existingTokenBalances: [number, string][];
  };
  deployer: string;
  deployGas: string;
  deployTime: string;
  seededUsdc: string;
  nonCirculatingUserBalances: string[];
  futureEmissions: string;
}