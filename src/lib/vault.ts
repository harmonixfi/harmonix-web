
import FelixLogo from "@/components/icons/FelixLogo";
import HyEnaLogo from "@/components/icons/HyEnaLogo";
import HyperlendLogo from "@/components/icons/HyperlendLogo";
import HyperliquidLogo from "@/components/icons/HyperliquidLogo";
import HyperUnitLogo from "@/components/icons/HyperUnitLogo";
import HypurrfiLogo from "@/components/icons/HypurrfiLogo";
import KinetiqLogo from "@/components/icons/KinetiqLogo";
import TradeXYZLogo from "@/components/icons/TradeXYZLogo";
import { RewardKey } from "@/constants/vault";
import type { JSX } from 'react';

export type RewardIconDescriptor =
  | {
    kind: "component";
    Component: (props: { className?: string }) => JSX.Element;
  }
  | {
    kind: "image";
    src: string;
    alt: string;
  };

export const getApyValue = ({
  period,
  apy,
  apy15d,
  apy45d,
}: {
  period: number;
  apy: number | null;
  apy15d: number | null;
  apy45d: number | null;
}) => {
  if (!period) return 0;

  switch (period) {
    case 15:
      return apy15d || 0;
    case 45:
      return apy45d || 0;
    default:
      return apy || 0;
  }
};

export const getApyKey = (period?: number) => {
  if (!period) return "apy";

  switch (Number(period)) {
    case 15:
      return "apy_15d";
    case 45:
      return "apy_45d";
    default:
      return "apy";
  }
};

export const getRewardIcon = (
  rewardKey: string,
): RewardIconDescriptor | null => {
  switch (rewardKey.toLowerCase()) {
    case RewardKey.hip3HyENA:
      return { kind: "component", Component: HyEnaLogo };
    case RewardKey.usefelix:
    case RewardKey.hip3Felix:
      return { kind: "component", Component: FelixLogo };
    case RewardKey.hip3Hyperliquid:
      return { kind: "component", Component: HyperliquidLogo };
    case RewardKey.hip3tradeXYZ:
      return { kind: "component", Component: TradeXYZLogo };
    case RewardKey.hip3Kinetiq:
      return { kind: "component", Component: KinetiqLogo };
    case RewardKey.hypurrfi:
      return { kind: "component", Component: HypurrfiLogo };
    case RewardKey.HYPERLEND:
      return { kind: "component", Component: HyperlendLogo };
    case RewardKey.kPoints:
      return { kind: "component", Component: KinetiqLogo };
    case RewardKey.hyperunit:
      return { kind: "component", Component: HyperUnitLogo };
    default:
      return null;
  }
};
