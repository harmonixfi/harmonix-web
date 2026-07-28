export type Address = `0x${string}`;

export type ActivityEvent =
  | "wallet.connected"
  | "deposit"
  | "withdrawal"
  | "page.visit"
  | "ui.click";

export type WalletConnectedActivity = {
  event: "wallet.connected";
  wallet: Address;
  payload: { site?: string };
};

export type DepositActivity = {
  event: "deposit";
  wallet: Address;
  payload: {
    tvl: number;
    vault: string;
    site?: string;
  };
};

export type WithdrawalActivity = {
  event: "withdrawal";
  wallet: Address;
  payload: {
    amount: number;
    vault: string;
    site?: string;
  };
};

export type PageVisitActivity = {
  event: "page.visit";
  wallet?: Address;
  payload: {
    path: string;
    ref?: string;
    site?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
};

export type UiClickActivity = {
  event: "ui.click";
  wallet?: Address;
  payload: {
    element: string;
    path: string;
    site?: string;
  };
};

export type ActivityRequest =
  | WalletConnectedActivity
  | DepositActivity
  | WithdrawalActivity
  | PageVisitActivity
  | UiClickActivity;

export type TrackingActivityResponse = {
  success: boolean;
};
